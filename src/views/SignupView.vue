<template>
  <div class="signup-block center-block">
    <div class="login-inner">
      <h2 class="text-center margin-bottom-36">Регистрация</h2>
      <div class="card with-links margin-bottom-48">
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
          <div class="form-group">
            <label for="">Имя и фамилия</label>
            <input type="text">
          </div>
          <div class="form-group">
            <label for="">Почта</label>
            <input type="text">
          </div>
          <div class="form-group">
            <label for="">Пароль</label>
            <input type="password">
          </div>
          <div class="form-group">
            <label for="">Повторите пароль</label>
            <input type="password">
          </div>
        </form>
      </div>
      <div class="signup-bottom">
        <div>
          <button class="btn primary">Зарегистрироваться</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      formType: 'user'
    }
  },
  methods: {
    changeFormType(type) {
      this.formType = type
    },
    ...mapActions('user', ['getUsers'])
  },
  created() {
    this.getUsers()
    console.log('yep');
  }
}
</script>

<style>

</style>