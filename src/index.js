import Vue from 'vue'
import Vuex from 'vuex'
import appService from './app.service'

Vue.use(Vuex)

const state = {
  isAuthenticated: false,
  selectedShows: {'shows': []},
  selectedGenres: {'genres': ['All']},
  selectedScore: 7,
  selectedPage: 0

}
export const store = new Vuex.Store({
  state,
  getters: {
    isAuthenticated: (state) => {
      return state.isAuthenticated
    },
    selectedShows: (state) => {
      return state.selectedShows
    },
    selectedGenres: (state) => {
      return state.selectedGenres
    },
    selectedScore: (state) => {
      return state.selectedScore
    },
    selectedPage: (state) => {
      return state.selectedPage
    }
  },
  actions: {
    logout (context) {
      context.commit('logout')
    },
    login (context, credentials) {
      return new Promise((resolve, reject) => {
        appService.logIn(credentials)
          .then((token) => {
            context.commit('login', token)
            resolve(token)
          })
          .catch((err) => reject(err))
      })
    },
    updateshows (context, keyword = undefined) {
      return new Promise((resolve, reject) => {
        let selectedShows = []
        if (keyword === null || keyword === undefined) {
          appService.getShows(state.selectedPage)
            .then(shows => {
              if (state.selectedGenres.genres.indexOf('All') !== -1) {
                shows.forEach(show => {
                  if (Number.parseInt(show.rating.average) > state.selectedScore) { selectedShows.push(show) }
                })
              } else {
                shows.forEach(show => {
                  if (Number.parseInt(show.rating.average) > state.selectedScore &&
                  show.genres.some(g => state.selectedGenres.genres.indexOf(g) !== -1)) { selectedShows.push(show) }
                })
              }
            }).catch((err) => { console.log(err) })
        } else {
          appService.searchShows(keyword).then(shows =>
            shows.forEach(show => {
              if (state.selectedGenres.genres.indexOf('All') === -1) {
                if (show.show.genres.some(g => state.selectedGenres.genres.indexOf(g) !== -1)) {
                  selectedShows.push(show.show)
                }
              } else selectedShows.push(show.show)
            }
            ))
        }
        context.commit('updateshows', selectedShows)
        resolve(selectedShows)
      })
    },
    updateGenres (context, genre) {
      context.commit('updateGenres', genre)
    },
    updateScore (context, score) {
      context.commit('updateScore', score)
    },
    updatePage (context, page) {
      context.commit('updatePage', page)
    }
  },
  mutations: {
    logout (state) {
      state.isAuthenticated = false
      window.localStorage.setItem('token', null)
      window.localStorage.setItem('tokenExpiration', null)
    },
    login (state, token) {
      window.localStorage.setItem('token', token.token)
      window.localStorage.setItem('tokenExpiration', token.expiration)
      state.isAuthenticated = true
    },
    updateshows (state, shows) {
      state.selectedShows['shows'] = shows
    },
    updateGenres (state, genre) {
      state.selectedGenres = { 'genres': [genre] }
    },
    updateScore (state, score) {
      state.selectedScore = score
    },
    updatePage (state, page) {
      state.selectedPage = page
    }
  }
})
if (typeof window !== 'undefined') {
  document.addEventListener('DOMCntentLoaded', function (event) {
    store.state.selectedPage = 0
    store.state.selectedScore = 7
    store.state.selectedGenres = {'genres': ['All']}
    let expiration = window.localStorage.getItem('tokenExpiration')
    let unixTimeStamp = new Date().getTime() / 1000
    if (expiration == null && parseInt(expiration) - unixTimeStamp > 0) { store.state.isAuthenticated = true }
    appService.getShows(0).then((shows) => {
      store.state.selectedShows['shows'] = shows
    })
  })
}
export default store
