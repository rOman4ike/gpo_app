<template>
  <div :class="{'bg-img': !isAuthorized}">
    <div class='container'>
      <the-header></the-header>
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TheHeader from './components/TheHeader.vue'


export default {
  computed: {
    ...mapState('user', ['isAuthorized'])
  },
  components: {
    TheHeader
  }
}
</script>

<style lang="sass">

</style>
