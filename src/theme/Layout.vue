<template>
    <div id="app">
      <app-header></app-header>
      <router-view></router-view>
      <app-footer></app-footer>
    </div>
</template>

<script>
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';
export default {
   components: {
     'app-header': AppHeader,
     'app-footer': AppFooter
   }
}
</script>

<style lang="scss">

// Import a Google Font
@import url('https://fonts.googleapis.com/css?family=Nunito:400,700');

// brand colors
$yellow:#ffd200;
$purple: #6927a3;
$light-green:#16978c;
// Update Bulma's global variables
$family-sans-serif: "Nunito", sans-serif;
$primary: #007971;

// Update some of Bulma's component variables
$control-border-width: 2px;
$input-background-color:  #bde9e4;
$input-border-color: transparent;
$input-shadow: none;

@import '~bulma';
.columns{
  flex-wrap : wrap
  }
</style>
