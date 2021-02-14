<template>
<div class="card">
<div class="card-content">
    <div class="media">
      <div class="media-left">
           <slot name="image"></slot>
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
  }
</script>
<style scoped>

</style>
