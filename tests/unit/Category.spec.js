import Category from '@/components/Category.vue'
import { shallowMount } from '@vue/test-utils'

describe('Category.vue', () => {
  it('creates Category component', () => {
    const wrapper = shallowMount(Category, {
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
