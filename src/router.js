import Vue from 'vue'
import VueRouter from 'vue-router'
// import AppContent from './theme/AppContent.vue'
// import Login from './theme/Login.vue'
// import NotFound from './theme/NotFound.vue'

Vue.use(VueRouter)

const AppContent = () => System.import('./theme/AppContent.vue')
const Login = () => System.import('./theme/Login.vue')
const NotFound = () => System.import('./theme/NotFound.vue')

export const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: (to, from, saved) => ({y: 0}),
  routes: [
    {path: '/', redirect: '/content/front-end'},
    {path: '/login', component: Login},
    {path: '/content/details/:id', name: 'details', component: Details},
    {path: '/content/:id', name: 'content', component: AppContent},
    {path: '*', component: NotFound}
  ]
})
