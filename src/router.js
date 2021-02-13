import Vue from 'vue'
import VueRouter from 'vue-router'
import AppContent from './theme/AppContent.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
  routes: [{
    path: '/', component: AppContent
  }]
})
