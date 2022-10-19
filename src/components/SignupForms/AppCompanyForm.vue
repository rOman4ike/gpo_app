<template>
  <form>
    <app-input 
      v-model.trim="companyValue"
      labelValue="Название компании"
    ></app-input>
    
    <app-input 
      v-model.trim="nameValue"
      labelValue="Имя"
    ></app-input>

    <app-input 
      v-model.trim="emailValue"
      labelValue="Почта"
    ></app-input>

    <app-input 
      v-model.trim="passwordValue"
      labelValue="Пароль"
      inputType="password"
    ></app-input>

    <app-input 
      v-model.trim="rPasswordValue"
      labelValue="Повторите пароль"
      inputType="password"
    ></app-input>

    <div class="input-block">
      <app-button classValue="submit">Зарегистрироваться</app-button>
    </div>
  </form>
</template>

<script>
import AppButton from "../AppButton.vue"
import AppInput from "../AppInput.vue"

export default {
  data() {
    return {
      companyValue: "",
      nameValue: "",
      emailValue: "",
      passwordValue: "",
      rPasswordValue: ""
    }
  },
  components: {
    AppButton,
    AppInput,
  }
}
</script>

<style lang="sass" scoped>
</style>