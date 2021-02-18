<template>
<div class="columns">
<button class="idle-button is-primary category" :class="{button:selectedGenres.genres[0] === 'All'}" v-on:click="toggleCategory('All')">All</button>
<button class="idle-button is-primary category" :class="{button:selectedGenres.genres[0] === 'Drama'}" v-on:click="toggleCategory('Drama')">Drama</button>
<button class="idle-button is-primary category" :class="{button:selectedGenres.genres[0] === 'Science-Fiction'}" v-on:click="toggleCategory('Science-Fiction')">Science-Fiction</button>
<button class="idle-button is-primary category" :class="{button:selectedGenres.genres[0] === 'Thriller'}" v-on:click="toggleCategory('Thriller')">Thriller</button>
<button class="idle-button is-primary category" :class="{button:selectedGenres.genres[0] === 'Horror'}" v-on:click="toggleCategory('Horror')">Horror</button>
<button class="idle-button is-primary category" :class="{button:selectedGenres.genres[0] === 'Romance'}" v-on:click="toggleCategory('Romance')">Romance</button>
<button class="idle-button is-primary category" :class="{button:selectedGenres.genres[0] === 'Comedy'}" v-on:click="toggleCategory('Comedy')">Comedy</button>
</div>
</template>
<script>

  import {mapActions, mapGetters} from 'vuex';
  export default {
  computed: {
      ...mapGetters(['selectedGenres'])
  },
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
  margin: 10px;
  padding:10px;
  color: white;
}
.idle-button {
  border-radius: 10%;
  background-color: #0075ff;
}
</style>


