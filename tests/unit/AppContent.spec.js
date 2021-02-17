import AppContent from '@/components/AppContent.vue'
import { shallowMount } from '@vue/test-utils'
import { getters, store } from '../../src/index.js'
import { router } from '../../src/router.js'

describe('AppContent.vue', () => {
  it('creates AppContent component', () => {
    const wrapper = shallowMount(AppContent, {getters, store, router})
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
