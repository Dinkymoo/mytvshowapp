<template>
<div>
<navbar></navbar>
<div class="card">
  <div class="columns">
    <img v-bind:src="show.image.medium" alt="TV Maze" class="column is-2"/>
        <div v-html="show.summary" class=" column is-9">
         </div>
         <div v-bind="show.rating.average" class="column is-1 rating">
          {{show.rating.average}}
         </div>
</div>
  </div>
<div v-html="show.language" class="columns language"></div>
      </div>

</template>

<script>
 import appService from './../app.service'
import Navbar from './Navbar.vue'
export default {
  components : {
    'navbar': Navbar
  },
  data() {
      return {
        id: this.$route.params.id,
        show: undefined
        }
    },
  created() {
    appService.showDetails(this.id).then(result => {
      this.show = result
    })
  }
}
</script>
<style lang='scss' scoped>
.rating {
  font-size: larger;
}
.column {
padding: 3%;
}
.language {
  padding: 2%;
}
.columns {
  padding: 3%;
}
</style>
