import Search from '@/components/Search.vue'
import { shallowMount } from '@vue/test-utils'

describe('Show.vue', () => {
  it('creates  Show component', () => {

    const wrapper = shallowMount(Search, {

    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

})
