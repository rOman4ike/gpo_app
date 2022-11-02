<template>
  <div class="home-block">
    <h1>Test Header</h1>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  }
};

</script>

<style lang="sass" scoped>
  .home-block
    position: relative
    height: 80vh

    h1
      // margin-top: 50%
      position: absolute
      text-transform: uppercase
      left: 0
      bottom: 50%
      transform: translateY(-50%)
      
</style>
