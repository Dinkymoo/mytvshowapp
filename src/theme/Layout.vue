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

// Set your brand colors
$yellow:#ffd200;
$green: #007971;
$light-green: #007971;
$purple: #6927a3;
// Update Bulma's global variables
$family-sans-serif: "Nunito", sans-serif;
$primary: $green;

// Update some of Bulma's component variables
$control-border-width: 2px;
$input-background-color: $light-green;
$input-border-color: transparent;
$input-shadow: none;

@import '~bulma';
.columns{
  flex-wrap : wrap
  }
  .is-active {
    background-color: purple;
}
</style>
