import Vue from 'vue'
import Vuex from 'vuex'
import appService from './app.service'

Vue.use(Vuex)

const state = {
  isAuthenticated: false

}
const store = new Vuex.Store({
  state,
  getters: {
    isAuthenticated: (state) => {
      return state.isAuthenticated
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
    }
  }
})
if (typeof window !== 'undefined') {
  document.addEventListener('DOMCntentLoaded', function (event) {
    let expiration = window.localStorage.getItem('tokenExpiration')
    let unixTimeStamp = new Date().getTime() / 1000
    if (expiration == null && parseInt(expiration) - unixTimeStamp > 0) { store.state.isAuthenticated = true }
  })
}
export default store
