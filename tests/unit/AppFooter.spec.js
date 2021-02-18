import AppFooter from '@/components/AppFooter.vue'
import { shallowMount } from '@vue/test-utils'

describe('AppFooter.vue', () => {
  it('creates AppFooter component', () => {
    const wrapper = shallowMount(AppFooter, {})
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
