<template>
  <nav class="nav">
      <div class="container">
          <img src="https://static.tvmaze.com/images/tvm-header-logo.png"
                alt="TV Maze" class="nav-item is-tab" />
          <router-link to="/login" class="nav-item is-tab">
            <span v-if="isAuthenticated">Logout</span> <span v-else>Login</span>
          </router-link>
          <router-link :to="{name: 'content', params: {id: 'front-end'}}" class="nav-item is-tab">
            Frontend
          </router-link>
          <router-link :to="{name: 'content', params: {id: 'mobile'}}" class="nav-item is-tab">
            Mobile
          </router-link>
      </div>
  </nav>
</template>
<script>
 import {mapGetters} from 'vuex';
export default {
  computed: {
      ... mapGetters(['isAuthenticated'])
  }
}
</script>
<style lang="scss" scoped>
$purple: #6927a3;
$green: #6fb1d0;
$light-green:#16978c;

botton .button.is-primary {
  color: $light-green;
}
.container {
  text-align: left;
  padding: 22px 0;
  margin: 0;
  max-width: 0;
}
.nav-item {
  color: $green;
  padding: 20px;
}
.is-active {
  border-bottom-style: solid;
}

</style>
