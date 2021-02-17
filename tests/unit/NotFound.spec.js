import NotFound from '@/components/NotFound.vue'
import { shallowMount } from '@vue/test-utils'

describe('NotFound.vue', () => {
  it('creates NotFound component', () => {
    const wrapper = shallowMount(NotFound, {
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
