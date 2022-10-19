<template>
  <div class="login-block">
    <h1>Вход</h1>

    <form>
      <app-input 
        v-model.trim="emailValue"
        labelValue="Почта"
      ></app-input>

      <app-input 
        v-model.trim="passwordValue"
        labelValue="Пароль"
        inputType="password"
      >
        <router-link class="link" to="/">Забыли пароль?</router-link>
      </app-input>

      <div class="input-block submit">
        <app-button classValue="submit">Войти</app-button>
        <router-link class="link" to="/signup">Регистрация</router-link>
      </div>
    </form>

  </div>
</template>

<script>
import AppButton from "../components/AppButton.vue"
import AppInput from "../components/AppInput.vue"

export default {
  data() {
    return {
      emailValue: "",
      passwordValue: "",
    }
  },
  components: {
    AppButton,
    AppInput
  }
}
</script>

<style lang="sass" scoped>
  .login-block
    
    h1
      text-align: center
      margin-bottom: 10rem
</style>