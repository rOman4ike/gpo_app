<template>
  
  <the-header></the-header>

  <div class="common">
    <router-view />
  </div>

</template>

<script>
import TheHeader from "./components/TheHeader.vue"

export default {
  components: {
    TheHeader
  }
}
</script>

<style lang="sass">

</style>
