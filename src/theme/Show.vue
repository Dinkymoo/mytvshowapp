<template>
<div class="card">
<div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img scr="image.medium.rendered" alt="show image"/>
        </figure>
      </div>
      <div class="media-content">
        <slot name="title"></slot>
         <slot name="content"></slot>
      </div>
    </div>
</div>
</div>
</template>

<script>
export default {
  props: ['image']
  }
</script>
<style scoped>

</style>
