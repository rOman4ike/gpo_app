<template>
  <div class="login-block center-block">
    <div class="login-inner">
      <h2 class="text-center">Войти</h2>
      <div class="card with-padding">
        <form action="">
          <div class="form-group" :class="{'error': v$.user.email.$errors.length}">
            <label for="">Почта</label>
            <input type="text" v-model.trim="user.email" @blur="v$.user.email.$touch()">
            <div class="input-errors" v-for="error of v$.user.email.$errors" :key="error.$uid">
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>
          <div class="form-group" :class="{'error': v$.user.password.$errors.length}">
            <label for="">Пароль</label>
            <input type="password" v-model.trim="user.password" @blur="v$.user.password.$touch()">
            <div class="input-errors" v-for="error of v$.user.password.$errors" :key="error.$uid">
              <div class="error-msg">{{ error.$message }}</div>
            </div>
            <div class="forget">
              <router-link to="/forget">Забыль пароль?</router-link>
            </div>
          </div>
        </form>
      </div>
      <div class="login-bottom">
        <div class="w-100 text-center">
          <button class="btn primary" @click="login()" :disabled="validateBtn">Войти</button>
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
import { useVuelidate } from '@vuelidate/core'
import { required$, email$ } from '@/utils/validators'

export default {
  setup() {
    return { v$: useVuelidate() }
  },
  computed: {
    ...mapState('user', ['user', 'errors']),
    validateBtn() {
      return !(!this.v$.$errors.length &&
        this.v$.user.email.$dirty &&
        this.v$.user.password.$dirty)
    }
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
          console.log('error')
        }
      })
    }
  },
  validations() {
    return {
      user: {
        email: { required$, email$ },
        password: { required$ },
      }
    }
  },
}
</script>

<style>

</style>