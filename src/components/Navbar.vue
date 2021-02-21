<template>
  <nav class="nav">
      <div class="container">
          <router-link to="/content" class="nav-item is-tab">
            Back to Shows
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

.container {
  text-align: left;
  padding: 22px 0;
  margin: 0;
  max-width: 0;
}
.nav-item {
  color: blue;
  padding: 20px;
}

</style>
