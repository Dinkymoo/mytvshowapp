<template>
 <div class="card">
    <div class="card-content">
      <a class="card-footer-item" :href="show.url" target="_blank">{{show.name}}</a>
    </div>
  </div>
</template>

<script>
export default {
     props: ['show']
  }
</script>
<style scoped>

</style>
