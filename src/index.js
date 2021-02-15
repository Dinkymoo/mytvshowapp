import Vue from 'vue'
import Vuex from 'vuex'
import appService from './app.service'

Vue.use(Vuex)

const state = {
  isAuthenticated: false,
  shows: [],
  selectedGenres: []

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
        console.log('keyword', keyword)
        if (keyword === undefined || state.selectedGenres === ['All']) {
          console.log('getting all shows')
          appService.getShows()
            .then(shows => {
              console.log(shows)
              context.commit('updateshows', shows)
              resolve(shows)
            })
        } else if (typeof keyword !== 'string') {
          appService.getShows()
            .then(shows => shows
              .forEach(show =>
                state.selectedGenres
                  .forEach(genre => {
                    if (show['genres'].indexOf(genre) !== -1) { selectedShows.push(show) }
                  }))).catch((err) => reject(err))
          console.log(selectedShows)
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

    selectedGenres (context, selectedGenres) {
      context.commit('selectedGenres', selectedGenres)
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
      state.shows = shows
    },
    selectedGenres (state, selectedGenres) {
      state.selectedGenres = selectedGenres
    }
  }
})
if (typeof window !== 'undefined') {
  document.addEventListener('DOMCntentLoaded', function (event) {
    store.state.selectedGenres = ['Drama, Horror']
    let expiration = window.localStorage.getItem('tokenExpiration')
    let unixTimeStamp = new Date().getTime() / 1000
    if (expiration == null && parseInt(expiration) - unixTimeStamp > 0) { store.state.isAuthenticated = true }
    appService.getShows().then((shows) => {
      store.state.shows = shows
    })
  })
}
export default store
