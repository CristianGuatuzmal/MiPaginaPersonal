<template>
  <div class="AboutMe">
    <div class="texts">
      <h2>About Me</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac consectetur felis, a gravida ex. Donec nec nisi ligula. Pellentesque vel convallis dolor. Pellentesque vel libero eget metus dictum interdum. Praesent mauris erat, dignissim vel ornare non, lobortis nec purus. Nunc aliquam aliquet cursus. Donec accumsan nec magna eget tempor. Vivamus quis quam sit amet tortor posuere imperdiet nec ac velit. Nunc aliquet libero non magna molestie consectetur. Aliquam placerat commodo dolor eu semper. Curabitur tempor vitae enim luctus bibendum. Maecenas eros orci, sagittis ut porttitor ut, malesuada at neque.

      Suspendisse quis accumsan ligula, vel vulputate enim. Nam felis mauris, faucibus id tincidunt id, tempus et sem. Sed turpis diam, condimentum quis nulla ut, rhoncus dignissim turpis. Nulla sed luctus mauris, ut commodo eros. Praesent pharetra, diam eget cursus ultricies, tortor urna eleifend nulla, sit amet porttitor risus arcu vel sapien. Mauris mattis tincidunt dui, nec pulvinar sapien tincidunt a. Mauris sagittis odio eget risus ultricies porttitor.

      Fusce lobortis non turpis at vulputate. Integer pharetra a neque et fringilla. Quisque ut diam dui. Sed facilisis egestas diam, pharetra mattis enim tempus id. Nullam dictum massa non diam rutrum, nec aliquet nisi efficitur. Pellentesque pretium orci leo, non rutrum dolor mollis et. Donec quis lacus justo. Donec id urna accumsan, aliquam nibh bibendum, aliquam ante. Aliquam commodo aliquet commodo. Nam nec sodales metus. Fusce condimentum tortor vel sapien semper sollicitudin. </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe'
}
</script>

<style>
  .AboutMe{
    padding: 4.6% 0 0;
    height: 100vh;
    background-image: url(../assets/2019-01-05_5c30275c7c1e9_piano-2827044_960_720.jpg);
    background-size: cover;
    background-position:left;
    background-attachment: fixed;
    overflow-y: hidden;
  }
  .image img{
    height: 100vh;
  }
  .image {
    float: left;
    width: 33%;
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
