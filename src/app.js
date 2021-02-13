import Vue from 'vue'
import { router } from './router'
import AppLayout from './theme/Layout.vue'
const app = new Vue({
  router,
  ...AppLayout
})
export { app, router }
