<template>
<div class="">
<input class="slider is-fullwidth is-success" v-on:change="updateRating($event.target.value)" step="1" min="0" max="10" value="0" type="range">
<output for="sliderWithValue">{{selectedScore}}</output>
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
<style scoped>
.slider {
  width:100%
}
</style>


