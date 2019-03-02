<template>
  <div class="ExteriorFrame">
    <div class="InteriorFrame">
      <h1>Crhistian Guatuzmal</h1>
       <router-link
                    v-for="view in views"
                    :key="view.id"
                    :to= "view.path"
                    tag="button"
        >
          {{ view.name }}
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InitialMenu',
  computed: {
    views () {
      return this.$router.options.routes[0].children
    }
  }
}
</script>

<style>
  .ExteriorFrame {
    float:left;
    padding: 1.25%;
    -webkit-box-shadow: 2px 3px 16px 4px rgba(0,0,0,0.27);
    -moz-box-shadow: 2px 3px 16px 4px rgba(0,0,0,0.27);
    box-shadow: 2px 3px 16px 4px rgba(0,0,0,0.27);
    border-bottom-left-radius: 8rem;
    border-top-right-radius: 8rem;
  }

  .ExteriorFrame h1 {
    width: 85%;
    margin: 0;
    margin-bottom: 10%;
    font-size: 3rem;
  }
  button {
    background: rgba(255,196,33);
    color: rgba(255,248,188);
    border: 0;
    margin: 1.3%;
    padding: 3%;
    width: 47%;
    -webkit-box-shadow: 2px 3px 3px 0px rgba(0,0,0,0.27);
    -moz-box-shadow: 2px 3px 3px 0px rgba(0,0,0,0.27);
    box-shadow: 2px 3px 3px 0px rgba(0,0,0,0.27);
    font-weight: bold;
    font-size: 2rem;
  }
  button:hover{
    transform: scale(1.1)
  }
  button:active{
    transform: scale(0.9);
  }
  .InteriorFrame {
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 10%;
    padding-top: 15%;
    -webkit-box-shadow: 2px 3px 3px 0px rgba(0,0,0,0.27);
    -moz-box-shadow: 2px 3px 3px 0px rgba(0,0,0,0.27);
    box-shadow: 2px 3px 3px 0px rgba(0,0,0,0.27);
    border-bottom-left-radius: 8rem;
    border-top-right-radius: 8rem;
  }
</style>
