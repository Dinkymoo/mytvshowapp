import Vue from 'vue'
import store from './index'
import { router } from './router'
import AppLayout from './theme/Layout.vue'
const app = new Vue({
  router,
  ...AppLayout,
  store
})
export { app, router, store }
