<template>
<div>
<navbar></navbar>
<div class="card">
  <div class="columns">
   <div class="card-content">
    <div class="media">
      <div class="media-left">
        <img v-bind:src="show.image.medium"
                alt="TV Maze" class="nav-item is-tab" />
        </div>
        <div v-html="show.summary" class="media-content">
        </div>
        <button v-bind="show.rating.average" class="media-content rating">
          {{show.rating.average}}
         </button>
         </div>
        <div v-html="show.language" class="media-content columns">
         </div>
      </div>
    </div>
</div>
</div>
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
.media-content {
  font-size: x-large;
  padding: 1%;
}
.card {
  padding: 5%;
}
.rating {
  background-color: green;
  color: white;
  border: none;
  border-radius: 100%;
}
</style>
