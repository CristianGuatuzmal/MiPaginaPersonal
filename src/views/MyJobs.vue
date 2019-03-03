<template>
  <div class="MyJobs">
    <div class="texts">
      <h2>My Jobs</h2>
      <p>Aún no tengo proyectos personales para mostrar aquí</p>
      <LinkATrabajos></LinkATrabajos>
    </div>
  </div>
</template>

<script>
import LinkATrabajos from '@/components/LinkATrabajos'
export default {
  name: 'MyJobs',
  components: {
    LinkATrabajos
  }
}
</script>

<style>
  .MyJobs{
    padding: 4.6% 0 0;
    height: 100vh;
    background-image: url(../assets/CODIGO-FUENTE.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center;
    background-attachment: fixed;
    overflow-y: hidden;
  }
  .texts {
    float:right;
    padding: 2% 3.5%;
    width: 66%;
    height: 100vh;
    background-color: white;
    overflow-y: visible;
    -webkit-box-shadow: -4px 2px 20px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: -4px 2px 20px 0px rgba(0,0,0,0.75);
    box-shadow: -4px 2px 20px 0px rgba(0,0,0,0.75);
  }
</style>
