<template>
  <nav class="nav">
      <div class="container">
          <img src="https://static.tvmaze.com/images/tvm-header-logo.png"
                alt="TV Maze" class="nav-item is-tab" />
          <router-link to="/login" class="nav-item is-tab">
            Login
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

<style scoped>

.container {
  text-align: left;
}
.nav-item {
  padding: 20px;
}
</style>
