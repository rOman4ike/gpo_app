<template>
  <div :class="{'bg-img': !isAuthorized}" v-cloak>
    <div class='container'>
      <the-header></the-header>
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import TheHeader from './components/TheHeader.vue'


export default {
  computed: {
    ...mapState('user', ['isAuthorized'])
  },
  methods: {
    ...mapActions('user', ['setAuthorized'])
  },
  components: {
    TheHeader
  },
  beforeMount() {
    // this.$store.commit('user/setAuthorized', !!sessionStorage.getItem('isAuthorized'))
    this.$store.commit('user/setAuthorized', true)
  }
}
</script>

<style lang="sass">

</style>
