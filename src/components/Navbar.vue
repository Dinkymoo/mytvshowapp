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
$red: #f41231;
$blue: #0075ff;
botton .button.is-primary {
  color: $red;
}
.container {
  text-align: left;
  padding: 22px 0;
  margin: 0;
  max-width: 0;
}
.nav-item {
  color: $blue;
  padding: 20px;
}
#menu-image {
  width: 20%;
}

</style>
