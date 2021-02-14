<template>
  <section class="main-section section">
    <div class="columns " v-for="(show) in shows" v-bind:key="show.id">
        <show class="column">
          <img slot="image" v-bind:src="show.image.medium"
                alt="TV Maze" class="card-image" v-show="show.image.medium" />
          <p slot="title" class="title is-4">{{show.name}}</p>
          <p class="subtitle is-6">{{show.language}}</p>
        </show>
    </div>
  </section>
</template>
<script>

import Show from './Show.vue';
import appService from '../app.service';
export default {
   components: {
     'show': Show,
   },
    data() {
      return {
        shows: [],
        id: this.$route.params.id
        }
    },
    methods: {
        loadShows() {
        console.log(this.$route.params.id)
        //data can be different here based on id
        appService.getShows().then(data => this.shows = data)
      }
    },
    created()  {
     this.loadShows()
    },
    watch : {
      '$route' (to, from) {
        if(to.params.id === 'front-end') {
          this.loadShows()
        }
        if(to.params.id === 'mobile') {
          this.loadShows()
        }
      }
    }
  }
</script>
<style scoped>
</style>
