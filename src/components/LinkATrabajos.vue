<template>
  <div class="trabajos">
    <div>
      <h3>{{ title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinkATrabajos',
  data: function () {
    return {
      title: '',
      backgroundImage: new Image()
    }
  }
}
</script>

<style>
  .trabajos {
    width: 66%;
  }
</style>
