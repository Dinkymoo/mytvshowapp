<template>
    <div class="columns">
      <input v-model="searchTerm" class="input column" type="text"
			  placeholder="Search Term" />
      <button v-on:click="searchShows()" class="button is-primary column is-one-third">Search</button>
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
    ... mapGetters(['shows'])
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
<style lang="scss" scoped >

</style>
