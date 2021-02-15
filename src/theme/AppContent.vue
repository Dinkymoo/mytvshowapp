<template>
  <section class="main-section section">
    <div></div>
    <search class="columns"></search>
    <div></div>
    <category class="columns"></category>
    <div></div>
    <div class="columns" v-for="(show) in shows" v-bind:key="show.id">
      <show class="column" v-if="show.show">
          <img v-if="show.show.image" slot="image" v-bind:src="show.show.image.medium"
                alt="TV Maze" class="card-image" />
          <router-link :to="{name: 'details', params: {id: show.id}}" slot="title" class="title is-4" target="_blank">
          {{show.show.name}}
          </router-link>
        </show>
        <show class="column" v-else>
          <img v-if="show.image" slot="image" v-bind:src="show.image.medium"
                alt="TV Maze" class="card-image" />
          <router-link :to="{name: 'details', params: {id: show.id}}"  slot="title" class="title is-4" target="_blank">
          {{show.name}}
          </router-link>
        </show>

    </div>
  </section>
</template>
<script>
import Show from './Show.vue';
import Search from './Search.vue';
import Details from './Details.vue';
import Category from './Category.vue';
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {
   components: {
     'show': Show,
      'search': Search,
      'details': Details,
      'category': Category
   },
    computed: {
    ... mapGetters(['shows'])
   },
    data() {
      return {
        id: this.$route.params.id
        }
    },
    methods: {
      ... mapActions({
      updateshows : 'updateshows'}),
      loadShows() {
          this.$store.dispatch('updateshows', undefined)
      },
      showDetails() {
        console.log('xxxxxxxxxxxxxx')
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

<style lang="scss" scoped>
.card-image {
  max-width: 75%;
}
</style>
