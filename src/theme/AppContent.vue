<template>
  <section class="main-section section">
    <div class="columns " v-for="(show) in shows" v-bind:key="show.id">
        <show :show="show" class="column">
        </show>
    </div>
  </section>
</template>
<script>
  import {fdata} from '../../mock-fe-data';
  import {mdata} from '../../mock-mobile-data';
  import Show from './Show.vue';
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
      }
    },
    created()  {
     this.loadShows()
    },
    watch : {
      '$route' (to, from) {
        if(to.params.id === 'front-end') {
          this.shows = fdata
          this.loadShows()
        }
        if(to.params.id === 'mobile') {
          this.shows = mdata
          this.loadShows()
        }
      }
    }
  }
</script>
<style scoped>
</style>
