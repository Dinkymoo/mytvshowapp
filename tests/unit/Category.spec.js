import Category from '@/components/Category.vue'
import { shallowMount } from '@vue/test-utils'
import { getters, store } from '../../src/index.js'

describe('Category.vue', () => {
  it('creates Category component', () => {
    const wrapper = shallowMount(Category, {getters, store
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
