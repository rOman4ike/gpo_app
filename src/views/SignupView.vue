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
          <div class="form-group">
            <label for="">Имя и фамилия</label>
            <input type="text" v-model.trim="user.fio">
          </div>
          <div class="form-group">
            <label for="">Почта</label>
            <input type="text" v-model.trim="user.email">
          </div>
          <div class="form-group">
            <label for="">Пароль</label>
            <input type="password" v-model.trim="user.password">
          </div>
          <div class="form-group">
            <label for="">Повторите пароль</label>
            <input type="password">
          </div>
        </form>
      </div>
      <div class="signup-bottom">
        <div class="w-100 text-center">
          <button class="btn primary btn-100" @click="createNewUser()">Зарегистрироваться</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      formType: 'user'
    }
  },
  computed: {
    ...mapState('user', ['user', 'errors'])
  },
  methods: {
    ...mapActions('user', ['getUsers', 'createUser']),
    changeFormType(type) {
      this.formType = type
    },
    createNewUser() {
      let params = this.user
      this.createUser(params).then(data => {
        console.log(data);
      })
    }
  },
  created() {
    this.getUsers()
    console.log('yep');
  }
}
</script>

<style>

</style>