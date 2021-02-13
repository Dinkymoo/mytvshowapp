<template>
<section class="main-section section">
        <div class="columns" v-for="(post) in posts" v-bind:key="post.id">
          <div class="card">
            <div class="card-content">
              <a class="card-item" :href="post.url" target="_blank">{{post.name}}</a>
            </div>
        </div>
        </div>
    </section>
</template>
<script>

  import {data} from '../../mock-data';
  export default {
    data() {
      return {posts: data}
    }
  }

</script>
