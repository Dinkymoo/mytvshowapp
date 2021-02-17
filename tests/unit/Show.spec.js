import Show from '@/components/Show.vue'
import { shallowMount } from '@vue/test-utils'

describe('Show.vue', () => {
  it('creates  Show component', () => {

    const wrapper = shallowMount(Show, {

    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

})
