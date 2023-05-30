<template>
  <div class="signup-block center-block">
    <div class="signup-inner">
      <h2 class="text-center">Регистрация</h2>
      <div class="card with-links">
        <div class="links-block">
          <button :class="{
            'active': formType == 'user',
            'inactive': formType != 'user'
          }"
          @click="changeFormType('user')">
            <img src="@/assets/user-icon.svg">
            <span>Персональный</span>
          </button>
          <button :class="{
            'active': formType == 'company',
            'inactive': formType != 'company'
          }"
            @click="changeFormType('company')"
          >
            <img src="@/assets/company-icon.svg">
            <span>Компания</span>
          </button>
        </div>
        <form action="">
          <div class="form-group" v-if="formType == 'company'">
            <label for="">Название компании</label>
            <input type="text">
          </div>
          <div class="form-group" :class="{'error': v$.user.fio.$errors.length}">
            <label for="">Имя и фамилия</label>
            <input type="text" v-model.trim="user.fio" @blur="v$.user.fio.$touch()">
            <div class="input-errors" v-for="error of v$.user.fio.$errors" :key="error.$uid">
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>
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
          </div>
          <div class="form-group" :class="{'error': v$.confirmPassword.$errors.length}">
            <label for="">Повторите пароль</label>
            <input type="password" v-model.trim="confirmPassword" @blur="v$.confirmPassword.$touch()">
            <div class="input-errors" v-for="error of v$.confirmPassword.$errors" :key="error.$uid">
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>
        </form>
      </div>
      <div class="signup-bottom">
        <div class="w-100 text-center">
          <button class="btn primary btn-100"
            @click="createNewUser()"
            :disabled="validateBtn"
          >
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { useVuelidate } from '@vuelidate/core'
import { required$, email$, minLength$, sameAs$ } from '@/utils/validators'

export default {
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      formType: 'user',
      confirmPassword: '',
    }
  },
  computed: {
    ...mapState('user', ['user', 'errors']),
    validateBtn() {
      return !(!this.v$.$errors.length &&
        this.v$.user.fio.$dirty &&
        this.v$.user.email.$dirty &&
        this.v$.user.password.$dirty &&
        this.v$.confirmPassword.$dirty)
    }
  },
  methods: {
    ...mapActions('user', ['createUser']),
    changeFormType(type) {
      this.formType = type
    },
    createNewUser() {
      let params = this.user
      this.createUser(params).then(data => {
        if (data.status == 200) {
          console.log('success');
          const userData = JSON.parse(data.config.data)
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
    },
  },
  validations() {
    return {
      user: {
        fio: { required$ },
        email: { required$, email$ },
        password: { required$, minLength: minLength$(4) },
      },
      confirmPassword: { required$, sameAs: sameAs$(this.user.password, 'password') }
    }
  }
}
</script>

<style>

</style>