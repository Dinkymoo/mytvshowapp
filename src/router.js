import Vue from 'vue'
import VueRouter from 'vue-router'
import AppContent from './components/AppContent.vue'
import Details from './components/Details.vue'
import Login from './components/Login.vue'
import NotFound from './components/NotFound.vue'

Vue.use(VueRouter)

// TODO: Add lazy loading
// const AppContent = () => System.import('./components/AppContent.vue')
// const Login = () => System.import('./components/Login.vue')
// const NotFound = () => System.import('./components/NotFound.vue')

export const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: (to, from, saved) => ({y: 0}),
  routes: [
    {path: '/', redirect: '/content'},
    {path: '/login', component: Login},
    {path: '/content/details/:id', name: 'details', component: Details},
    {path: '/content', component: AppContent},
    {path: '*', component: NotFound}
  ]
})
