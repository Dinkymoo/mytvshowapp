import Navbar from '@/components/Navbar.vue'
import { shallowMount } from '@vue/test-utils'
import { getters, store } from '../../src/index.js'

describe('Navbar.vue', () => {
  it('creates Navbar component', () => {
    const wrapper = shallowMount(Navbar, { getters, store
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
