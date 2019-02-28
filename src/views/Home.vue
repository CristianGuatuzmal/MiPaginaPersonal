<template>
  <div class="home">
    <h1>Crhistian Guatuzmal</h1>
    <ul
        v-for="view in views"
        :key="view.id"
    >
      <router-link path="view.path">{{ view.name }}</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
  computed: {
    views () {
      return this.$router.options.routes[1].children
    }
  }
}
</script>
