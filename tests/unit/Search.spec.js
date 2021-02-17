import Search from '@/components/Search.vue'
import { shallowMount } from '@vue/test-utils'

describe('Search.vue', () => {
  it('creates Search component', () => {
    const wrapper = shallowMount(Search, {
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
