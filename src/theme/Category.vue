<template>
<div class="columns">
<button class="button  category">Drama</button>
<button class="button  category">Drama</button>
<button class="button category">Science-Fiction</button>
<button class="button category">Thriller</button>
<button class="button category">Horror</button>

</div>
</template>
<script>

 import {mapGetters} from 'vuex';
  export default {
  computed: {
      ... mapGetters(['genre'])
  }
}

</script>
<style scoped>
.category {
  background-color: blue;
  margin: 10px;
  padding:10px;
  color: white;

}
</style>


