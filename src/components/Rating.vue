<template>
<div class="container">
<input class="slider" v-on:change="updateRating($event.target.value)" step="1" min="5" max="10" value="7" type="range">
<output for="sliderWithValue"><b>Rating  {{selectedScore}}</b></output>
</div>
</template>
<script>

  import {mapActions} from 'vuex';
  import {mapGetters} from 'vuex';
  export default {
    computed: {
      ... mapGetters(['selectedScore'])
  },
  mapActions:{
      ... mapActions({
      updateScore : 'updateScore'}),
      ... mapActions({
      updateshows : 'updateshows'})
  },
  methods:{
    updateRating(score){
    this.$store.dispatch('updateScore', score)
    this.$store.dispatch('updateshows', undefined)
     }
  }
}

</script>
<style lang="scss" scoped>
.slider {
  width: 100%;
}
.container {
  text-align: center;
}
</style>


