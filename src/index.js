import Vue from 'vue'
import Vuex from 'vuex'
import appService from './app.service'

Vue.use(Vuex)

const state = {
  isAuthenticated: false,
  shows: {'shows': []},
  selectedGenres: {'genres': ['All']}

}
const store = new Vuex.Store({
  state,
  getters: {
    isAuthenticated: (state) => {
      return state.isAuthenticated
    },
    shows: (state) => {
      return state.shows
    },
    selectedGenres: (state) => {
      return state.selectedGenres
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
    updateshows (context, keyword) {
      return new Promise((resolve, reject) => {
        let selectedShows = []
        if (keyword === undefined || (keyword.genres && keyword.genres.indexOf('All') !== -1)) {
          appService.getShows()
            .then(shows => {
              context.commit('updateshows', shows)
              resolve(shows)
            })
        } else if (typeof keyword === 'object') {
          appService.getShows().then(
            shows =>
              shows.forEach(show => {
                if (show.genres.some(g => keyword.genres.indexOf(g) !== -1)) { selectedShows.push(show) }
              })).catch((err) => reject(err))
          context.commit('updateshows', selectedShows)
          resolve(selectedShows)
        } else {
          appService.searchShows(keyword)
            .then((shows) => {
              console.log(shows)
              context.commit('updateshows', shows)
              resolve(shows)
            })
            .catch((err) => reject(err))
        }
      })
    },

    updateGenres (context, genre) {
      context.commit('updateGenres', genre)
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
      state.shows['shows'] = shows
    },
    updateGenres (state, genre) {
      state.selectedGenres = { 'genres': [genre] }
    }
  }
})
if (typeof window !== 'undefined') {
  document.addEventListener('DOMCntentLoaded', function (event) {
    state.selectedGenres = { 'genres': ['All'] }
    let expiration = window.localStorage.getItem('tokenExpiration')
    let unixTimeStamp = new Date().getTime() / 1000
    if (expiration == null && parseInt(expiration) - unixTimeStamp > 0) { store.state.isAuthenticated = true }
    appService.getShows().then((shows) => {
      store.state.shows['shows'] = shows
    })
  })
}
export default store
