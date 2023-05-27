<template>
  <div class="login-block center-block">
    <div class="login-inner">
      <h2 class="text-center">Войти</h2>
      <div class="card with-padding">
        <form action="">
          <div class="form-group">
            <label for="">Почта</label>
            <input type="text" v-model.trim="user.email">
          </div>
          <div class="form-group">
            <label for="">Пароль</label>
            <input type="password" v-model.trim="user.password">
            <div class="forget">
              <router-link to="/forget">Забыль пароль?</router-link>
            </div>
          </div>
        </form>
      </div>
      <div class="login-bottom">
        <div class="w-100 text-center">
          <button class="btn primary" @click="login()">Войти</button>
        </div>
        <div>
          <router-link to="/signup">Регистрация</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('user', ['user', 'errors']),
  },
  methods: {
    ...mapActions('user', ['loginUser']),
    login() {
      let params = this.user
      this.loginUser(params).then(data => {
        if (data.status == 200) {
          console.log('success');
          let userData = JSON.parse(data.config.data)
          sessionStorage.setItem('isAuthorized', true)
          sessionStorage.setItem('fio', userData.fio)
          sessionStorage.setItem('email', userData.email)
          sessionStorage.setItem('token', data.token)
          this.$router.push('/projects').then(() => {
            this.$store.commit('user/setAuthorized', !!sessionStorage.getItem('isAuthorized'))
          })
        } else {
          console.log('error');
        }
      })
    }
  }
}
</script>

<style>

</style>