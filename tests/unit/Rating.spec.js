import Rating from '@/components/Rating.vue'
import { shallowMount } from '@vue/test-utils'
import { getters, store } from '../../src/index.js'

describe('Rating.vue', () => {
  it('creates  Show component', () => {
    const wrapper = shallowMount(Rating, {getters, store})
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
