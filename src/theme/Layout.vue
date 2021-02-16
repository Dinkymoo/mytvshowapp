<template>
    <div id="app" class="colums">
      <app-header class="column"></app-header>
      <router-view></router-view>
      <app-footer  class="column"></app-footer>
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


// Update Bulma's global variables
$family-sans-serif: "Nunito", sans-serif;
$primary: #f41231;

// Update some of Bulma's component variables
$control-border-width: 2px;
$input-background-color:#ada6a7;
$input-border-color: transparent;
$input-shadow: none;

@import '~bulma';
.columns{
  flex-wrap : wrap
  }

</style>
