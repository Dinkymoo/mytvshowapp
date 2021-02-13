<template>
  <section class="main-section section">
    <div class="columns " v-for="(show) in posts" v-bind:key="show.id">
        <app-show :show="show" class="column">
        </app-show>
    </div>
  </section>
</template>
<script>
  import {data} from '../../mock-data';
  import AppShow from './AppShow.vue';
export default {
   components: {
     'app-show': AppShow,
   },
    data() {
      return {posts: data}
    }
  }
</script>
