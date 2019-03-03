<template>
  <div class="Home">
  <div class="pseudoLogo">
    <h1>Crhistian Guatuzmal</h1>
    <a>Web and software developer</a>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
  .Home{
    display: flex;
    background-image: url(../assets/IMG_20190211_163507.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 93.5vh;
    padding: 4.6% 0 0;
  }
  .pseudoLogo {
    display:grid;
    align-self: center;
    color: ghostwhite;
    text-align: left;
    padding: 3%;
  }
  .pseudoLogo h1 {
    font-size: 5rem;
    margin: 0%;
    text-shadow: 3px 2px 2px rgba(42,42,42,0.5);
  }
  .pseudoLogo a {
    font-size: 2.5rem;
    text-shadow: 3px 2px 2px rgba(42,42,42,0.5);
  }
</style>
