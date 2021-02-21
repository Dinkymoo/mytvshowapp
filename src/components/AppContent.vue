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
    <div class=" shows">
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

<nav class="pagination" role="navigation" aria-label="pagination">
  <a class="pagination-previous" title="This is the first page" v-on:click="previousPage()" disabled>Previous</a>
  <a class="pagination-next" v-on:click="nextPage()">Next page</a>
  <ul class="pagination-list">
    <li>
      <a class="pagination-link" v-if="selectedPage > 3" aria-label="Goto page" v-on:click="firstPage(undefined)">1</a>
    </li>
    <li>
      <a class="pagination-link is-current" aria-label='Page ' aria-current="page">{{selectedPage}}</a>
    </li>
    <li>
      <a class="pagination-link" aria-label="Goto page" v-on:click="updatePage(1)">{{(selectedPage + 1)}} </a>
    </li>
    <li>
      <a class="pagination-link" aria-label="Goto page" v-on:click="updatePage(2)">{{(selectedPage + 2)}}</a>
    </li>
  </ul>
</nav>
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
    ... mapGetters(['selectedShows', 'selectedPage'])
   },
    data() {
      return {
        id: this.$route.params.id,
        page: 1
        }
    },
    methods: {
      ... mapActions({
      updateshows : 'updateshows',
      updatePage: 'updatePage'
      }),
      previousPage() {
        if(this.page > 1) {
          this.$store.dispatch('updatePage',this.page--)
          this.$store.dispatch('updateshows')
        }
      },
      nextPage() {
        this.$store.dispatch('updatePage',this.page++)
        this.$store.dispatch('updateshows')
      },
      firstPage() {
        this.$store.dispatch('updatePage', 1)
         this.$store.dispatch('updateshows')
      },
      updatePage(num) {
        this.page = this.page + num
        this.$store.dispatch('updatePage',this.page)
          this.$store.dispatch('updateshows')

      }
    },
    created()  {
     this.$store.dispatch('updateshows')
    }
  }
</script>

<style lang="scss" scoped>
.show {
  padding: 1%;
}
.shows {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
}
.pagination {
  margin-top: 1%;
}
</style>
