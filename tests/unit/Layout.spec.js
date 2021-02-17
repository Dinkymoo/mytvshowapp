import Layout from '@/components/Layout.vue'
import { shallowMount } from '@vue/test-utils'

describe('Layout.vue', () => {
  it('creates Layout component', () => {
    const wrapper = shallowMount(Layout, {
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
