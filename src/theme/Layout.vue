

<template>
      <div id="app">
        <nav class="nav has-shadow">
          <div class="container">
            <a href="/">
              <img src="https://static.tvmaze.com/images/tvm-header-logo.png"
                alt="TV Maze" />
            </a>
          </div>
        </nav>
        <section class="main-section section"></section>
        <div class="columns">
        <div class="columns is-one-third" v-for="(post) in posts" v-bind:key="post.id">
          <div class="card">
            <div class="card-content">
              <a class="card-footer-item" :href="post.url" target="_blank">{{post.name}}</a>
            </div>
        </div>
        </div>
        </div>
      </div>
</template>
<script>
import {data} from '../../mock-data';
export default {
data() {
  return {posts: data}
}
}
</script>

<style lang="scss">
@import '~bulma';
.columns{
  flex-wrap : wrap
  }
</style>
