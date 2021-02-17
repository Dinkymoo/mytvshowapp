import HelloWorld from '@/components/Show.vue'
import { shallowMount } from '@vue/test-utils'

describe('Show.vue', () => {
  it('creates  Show component', () => {

    const wrapper = shallowMount(HelloWorld, {

    })
    expect(wrapper.getComponent.name === 'Show.vue')
  })

})
