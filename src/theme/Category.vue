<template>
<div class="columns">
<button class="button category" v-on:click="toggleCategory('Drama')" >Drama</button>
<button class="button category" v-on:click="toggleCategory('Science-Fiction')">Science-Fiction</button>
<button class="button category" v-on:click="toggleCategory('Thriller')">Thriller</button>
<button class="button category" v-on:click="toggleCategory('Horror')">Horror</button>
<button class="button category" v-on:click="toggleCategory('Romance')">Romance</button>

</div>
</template>
<script>

 import {mapGetters} from 'vuex';
  import {mapActions} from 'vuex';
  export default {
  computed: {
      ... mapGetters(['selectedGenres'])
  },
  mapActions:{
      ... mapActions({
      selectedGenres : 'selectedGenres'})
  },
  methods:{
    toggleCategory(genre){
      console.log('genre',genre)
      let updatedGenres = this.$store.selectedGenres
      if (updatedGenres && updatedGenres.indexOf(genre) === -1){
        this.$store.dispatch('selectedGenres', updatedGenres)
        this.$store.dispatch('updateshows', updatedGenres)
      }
      else {
        console.log('before',updatedGenres)
        if(updatedGenres) {
        updatedGenres.remove(genre)
        console.log('after',updatedGenres)
        this.$store.dispatch('selectedGenres', updatedGenres)
        this.$store.dispatch('updateshows', updatedGenres)
        }
      }
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


