<template>
  <div class="navBar">
    <h1>Crhistian Guatuzmal</h1>
  <ul class="links">
      <router-link class="navigators"
                    v-for="view in views"
                    :key="view.id"
                    :to="view.path"
        >
          {{ view.name }}
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyHeader',
  computed: {
    views () {
      return this.$router.options.routes
    }
  }
}
</script>

<style>
@keyframes {
  from {background-color: transparent;}
  to {background-color: rgba(254,152,0);}
}
.navBar {
  display:inline-flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 0.1% 0%;
  justify-content: space-between;
  position:fixed;
  left: 0;
  z-index: 9999;
}
.navBar h1 {
  margin: 1% 2%;
  color: white;
}
.links {
  margin: 0%;
  width: 45%;
}
.links a {
  margin: 0 5%;
  font-size: 1.3rem;
  text-decoration: none;
  color: white;
}
.links a:hover {
  text-decoration: underline;
}
.links:enabled {
  text-decoration: underline;
}
</style>
