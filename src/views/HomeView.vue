<template>
  <div class="home-block">
    <div class="bg-darken">
      <h1>Test Header</h1>
    </div>
  </div>
</template>

<script>
import homeBg from "../assets/home-bg.png"

export default {
  data() {
    return {
      homeBg,
    }
  }
};

</script>

<style lang="sass" scoped>
  .home-block
    position: relative
    background-image: url("../assets/home-bg.png")
    background-size: cover
    background-repeat: no-repeat
    background-position: center
    height: 80vh
    margin-left: -50px
    margin-right: -50px

    .bg-darken
      background-color: rgba(0, 0, 0, 0.5)
      width: 100%
      height: 100%

    h1
      position: absolute
      top: 50%
      left: 10rem
      transform: translateX(-50%)
      
</style>
