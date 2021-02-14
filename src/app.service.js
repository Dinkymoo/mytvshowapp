import axios from 'axios'

axios.defaults.baseURL = 'http://api.tvmaze.com/'
axios.interceptors.request.use(function (config) {
  const token = window.localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `bearer ${token}`
  }
  return config
})
const appService = {
  getShows () {
    return new Promise((resolve, reject) => {
      axios.get('shows').then(
        response => {
          resolve(response.data)
        }).catch(response => reject(response.status))
    })
  },
  logIn (credentials) {
    return new Promise((resolve, reject) => {
      // backend call to login
      resolve({token: '1507361352', tokenExpiry: 'a-valid-token'})
    })
  }
}
export default appService
