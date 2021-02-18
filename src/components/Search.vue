<template>
    <div class="columns">
      <div class="column">
      <input v-model="searchTerm" class="input " type="text"
			  placeholder="Search" />
        </div>
        <div class="column">
      <button v-on:click="searchShows()" class="button is-primary ">Search</button>
      </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
export default {
  data(){
     return {
    searchTerm: ''
  }},
  computed: {
    ... mapGetters(['selectedShows'])
  },
  methods: {
     ... mapActions({
    updateshows : 'updateshows'}),
    searchShows() {
        this.$store.dispatch('updateshows', this.searchTerm)
    }
  }
}
</script>

