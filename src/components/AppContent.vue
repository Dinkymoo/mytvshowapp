<template>
  <section class="main-section section">
    <div class="top-section">
    <search id="search" class="columns">
    </search>
    <div class="columns">
    <category class="column is-half"></category>
    <rating class="column auto rating"></rating>
    </div>
    </div>
    <div class="columns shows">
    <div v-for="show in selectedShows['shows']" v-bind:key="show.id">
      <show>
        <p slot="image" class="show">
          <a v-bind:href="'/content/details/' + show.id" target="_blank">
          <img class="image" v-if="show.image"  v-bind:src="show.image.medium"
              alt="TV Maze" />
          </a>
        </p>
      </show>
    </div>
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
import Rating from './Rating.vue';

export default {
   components: {
     'show': Show,
      'search': Search,
      'details': Details,
      'category': Category,
      'rating': Rating,
   },
    computed: {
    ... mapGetters(["selectedShows"])
   },
    data() {
      return {
        id: this.$route.params.id
        }
    },
    methods: {
      ... mapActions({
      updateshows : 'updateshows'})
    },
    created()  {
     this.$store.dispatch('updateshows',undefined)
    }
  }
</script>

<style lang="scss" scoped>
.show {
  padding: 1%;
}
.shows {
  padding-left: 5%;
  padding-right: 5%;
}
.rating {
 padding-left: 15%;
}
.top-section {
  margin-left :4%;
}
</style>
