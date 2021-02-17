import Details from '@/components/Details.vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import VueRouter from 'vue-router'
import { appService } from '../../src/app.service.js'
import { getters, store } from '../../src/index.js'
import { router } from '../../src/router.js'

Vue.use(VueRouter)
const localVue = createLocalVue()
localVue.use(VueRouter)

describe('Details.vue', () => {
  it('creates Details component', () => {
    const wrapper = shallowMount(Details,
      { router,
        appService,
        getters,
        store,
        data: () => {
          return {
            id: '1',
            show: {'image': {'medium': 'http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg'}}
          }
        }
      })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
