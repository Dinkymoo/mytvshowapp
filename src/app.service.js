import axios from 'axios'

axios.defaults.baseURL = 'http://api.tvmaze.com/'
// TODO: Improve security
// axios.interceptors.request.use(function (config) {
//   const token = window.localStorage.getItem('token')
//   if (token) {
//     config.headers.Authorization = `bearer ${token}`
//   }
//   return config
// })
const appService = {
  getShows (page) {
    return new Promise((resolve, reject) => {
      axios.get(`shows?page=${page}`).then(
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
  },
  searchShows (query) {
    return new Promise((resolve, reject) => {
      axios.get(`search/shows?q=${query}`).then(
        response => {
          resolve(response.data)
        }).catch(response => reject(response.status))
    })
  },
  showDetails (id) {
    return new Promise((resolve, reject) => {
      axios.get(`shows/${id}`).then(
        response => {
          resolve(response.data)
        }).catch(response => reject(response.status))
    })
  }
}
export default appService
