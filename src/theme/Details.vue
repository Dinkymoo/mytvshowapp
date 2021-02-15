<template>
<div class="card">
<div class="card-content">
    <div class="media">
      <div class="media-left">
           <img v-bind:src="show.image.medium"
                alt="TV Maze" class="nav-item is-tab" />
      </div>
      <div v-html="show.name" class="media-content">
        {{show.name}}
      </div>
      <div v-html="show.summary"  class="media-content">
        {{show.summary}}
      </div>
    </div>
</div>
</div>
</template>

<script>
 import appService from './../app.service'
export default {
  data() {
      return {
        id: this.$route.params.id,
        show: undefined
        }
    },
  created() {
    appService.showDetails(this.id).then(result => {
      this.show = result
    }

    )
  }

}
</script>
