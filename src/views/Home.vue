<template>
  <div class="home">
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
  .header{
    background-color: rgba(254,152,0);
  }
  .home{
    display: flow-root;
    background-image: url(../assets/IMG_20190211_163507.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
  }
  .home .ExteriorFrame {
     background-color: rgba(254,152,0,0.6);
  }
  .home .ExteriorFrame h1 {
    color: rgba(255,255,255);
  }
  button {
    border-radius: 0.6rem;
  }
  .home .InteriorFrame {
    background-color: #FFA50A;
  }
  .home a {
      color: rgba(255,255,255);
  }
</style>
