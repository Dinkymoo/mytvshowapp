import Vue from 'vue'
import VueRouter from 'vue-router'
import AppContent from './theme/AppContent.vue'
import Login from './theme/Login.vue'
import NotFound from './theme/NotFound.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: (to, from, saved) => ({y: 0}),
  routes: [
    {path: '/', redirect: '/content/front-end'},
    {path: '/login', component: Login},
    {path: '/content/:id', name: 'content', component: AppContent},
    {path: '*', component: NotFound}
  ]
})
