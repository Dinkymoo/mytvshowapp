<template>
  <nav class="nav">
      <div class="container">
          <img src="http://www.thepugdiary.com/wp-content/uploads/2015/07/Dollarphotoclub_73151926.jpg"
                alt="TV Maze" class="nav-item is-tab" id="menu-image"/>
          <router-link to="/login" class="nav-item is-tab">
            <span v-if="isAuthenticated">Logout</span> <span v-else>Login</span>
          </router-link>
          <router-link to="/content" class="nav-item is-tab">
            Shows
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
  color: $red;
  padding: 20px;
}
.is-active {
  border-bottom-style: solid;
}
#menu-image {
  width: 25%;
}

</style>
