import Rating from '@/components/Rating.vue'
import { shallowMount } from '@vue/test-utils'
import { store } from '../../src/index'

describe('Rating.vue', () => {
  it('creates  Show component', () => {
    const wrapper = shallowMount(Rating, { store})
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
it('update rating in store to 8 when 8 is selected', () => {
  const wrapper = shallowMount(Rating, {store})
  wrapper.vm.updateRating(8)
  expect(wrapper.vm.$store.getters.selectedScore).toStrictEqual(8)
})
it('update rating in store to 9 when 9 is selected', () => {
  const wrapper = shallowMount(Rating, {store})
  wrapper.vm.updateRating(9)
  expect(wrapper.vm.$store.getters.selectedScore).toStrictEqual(9)
})

it('selected shows include rating higher than 8 ', () => {
  const wrapper = shallowMount(Rating, {store})
  wrapper.vm.updateRating(8)
  expect(wrapper.vm.$store.getters.selectedShows.shows.every(s => s.rating.average >= 8)).toBeTruthy()
})
