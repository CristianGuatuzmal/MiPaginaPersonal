<template>
  <div class="navBar">
    <router-link class="navigators"
                    :to="'/'"
                    tag = "h1"
        >
          Crhistian Guatuzmal
    </router-link>
    <ul class="links">
      <router-link :to="'/'">
        Home
      </router-link>
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
      var temporalRoute = this.$router.options.routes
      var routes = []
      for (var i = 1; i < temporalRoute.length; i++) {
        routes[i - 1] = temporalRoute[i]
      }
      return routes
    }
  },
  methods: {
    selected () {

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
