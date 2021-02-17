import Login from '@/components/Login.vue'
import { shallowMount } from '@vue/test-utils'
import { getters, store } from '../../src/index.js'

describe('Login.vue', () => {
  it('creates Login component', () => {
    const wrapper = shallowMount(Login, { getters, store })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
