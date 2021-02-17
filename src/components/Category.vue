<template>
<div class="columns">
<button class="button is-primary category" v-on:click="toggleCategory('All')">All</button>
<button class="button is-primary category" v-on:click="toggleCategory('Drama')">Drama</button>
<button class="button is-primary category" v-on:click="toggleCategory('Science-Fiction')">Science-Fiction</button>
<button class="button is-primary category" v-on:click="toggleCategory('Thriller')">Thriller</button>
<button class="button is-primary category" v-on:click="toggleCategory('Horror')">Horror</button>
<button class="button is-primary category" v-on:click="toggleCategory('Romance')">Romance</button>

</div>
</template>
<script>

  import {mapActions} from 'vuex';
  export default {

  mapActions:{
      ... mapActions({
      updateGenres : 'updateGenres'}),
      ... mapActions({
      updateshows : 'updateshows'})
  },
  methods:{
    toggleCategory(genre){
      this.$store.dispatch('updateGenres', genre)
      this.$store.dispatch('updateshows', undefined)
     }
  }
}

</script>
<style scoped>
.category {
  background-color: blue;
  margin: 10px;
  padding:10px;
  color: white;

}
</style>


