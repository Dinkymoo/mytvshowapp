import { shallowMount } from '@vue/test-utils'
import Category from '../../src/components/Category.vue'
import { store } from '../../src/index'

describe('Category.vue', () => {
  it('creates Category component', () => {
    const wrapper = shallowMount(Category, {store})
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('update category in store to romance when romance is selected', () => {
    const wrapper = shallowMount(Category, {store})
    wrapper.vm.toggleCategory('Romance')
    expect(wrapper.vm.$store.getters.selectedGenres).toStrictEqual({'genres': ['Romance']})
  })

  it('update category in store to comedy when comedy is selected', () => {
    const wrapper = shallowMount(Category, {store})
    wrapper.vm.toggleCategory('Comedy')
    expect(wrapper.vm.$store.getters.selectedGenres).toStrictEqual({'genres': ['Comedy']})
  })

  it('selected shows include selected category - Romance', () => {
    const wrapper = shallowMount(Category, {store})
    wrapper.vm.toggleCategory('Romance')
    expect(wrapper.vm.$store.getters.selectedShows.shows.every(s => s.genres.includes('Romance'))).toBeTruthy()
  })

  it('selected shows include selected category - Comedy', () => {
    const wrapper = shallowMount(Category, {store})
    wrapper.vm.toggleCategory('Comedy')
    expect(wrapper.vm.$store.getters.selectedShows.shows.every(s => s.genres.includes('Comedy'))).toBeTruthy()
  })
})
