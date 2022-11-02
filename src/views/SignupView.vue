<template>
  <div class="signup-block">

    <ul class="btn-list">
      <li class="list-item">
        <app-button 
          @action="formVersion = 'Company'"
          :class="{'unselected': formVersion != 'Company'}"
        >
          <img src="../assets/company.svg" alt="">
          <span>Компания</span>
        </app-button>
      </li>

      <li>
        <app-button 
          @action="formVersion = 'User'"
          :class="{'unselected': formVersion != 'User'}"
        >
          <img src="../assets/user.svg" alt="">
          <span>Персональный</span>
        </app-button>
      </li>

    </ul>

    <h1>Регистрация</h1>
    <component :is="componentName"></component>

  </div>
</template>

<script>
import AppButton from "../components/AppButton.vue"
import AppInput from "../components/AppInput.vue"
import AppCompanyForm from "../components/SignupForms/AppCompanyForm.vue"
import AppUserForm from "../components/SignupForms/AppUserForm.vue"

export default {
  data() {
    return {
      nameValue: "",
      emailValue: "",
      passwordValue: "",
      rPasswordValue: "",
      formVersion: "User",
    }
  },
  computed: {
    componentName() {
      return `App${this.formVersion}Form`
    }
  },
  components: {
    AppButton,
    AppInput,
    AppCompanyForm,
    AppUserForm
  }
}
</script>

<style lang="sass" scoped>
  .signup-block
    padding-bottom: 2rem
    
    h1
      text-align: center
      margin-bottom: 7rem

    .btn-list
      position: fixed
      left: 50px
      top: 50%
      transform: translateY(-50%)

      display: flex
      flex-direction: column

      button
        margin-bottom: 1rem
        flex-shrink: 1
      
</style>