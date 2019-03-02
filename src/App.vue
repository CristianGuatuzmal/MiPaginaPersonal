<template>
  <div id="app">
      <MyHeader class="header" />
      <router-view />
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
export default {
  components: {
    MyHeader
  }
}
</script>

<style>
body {
  margin: 0px;
  border: 0px;
  scroll-behavior: smooth;
  overflow-x: hidden;
  overflow-y: scroll;

}
body::-webkit-scrollbar-track-piece  {
    background-color: transparent;
}
body::-webkit-scrollbar {
    width: 8px;
    height: 15px;
    ;
}
body::-webkit-scrollbar-thumb:vertical {
    height: 30px;
    background-color: slategrey;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
