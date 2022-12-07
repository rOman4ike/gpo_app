<template>
  <div class="signup-section">
    <div class="container">
      <div class="signup-inner center">

        <h2>Регистрация</h2>

        <div class="form-block">

          <ul class="change-form">
            <li class="list-item">
              <a @click="changeForm('user')">
                <img src="@/assets/user-icon.svg">
                <span>Персональный</span>
              </a>
            </li>
            <li class="list-item">
              <a @click="changeForm('company')">
                <img src="@/assets/company-icon.svg">
                <span>Компания</span>
              </a>
            </li>
          </ul>

          <form>
            <div class="user" v-if="isUser == 'user'">
              <div class="form-label big">
                <label for="email">Имя</label>
                <input type="text" id="email">
              </div>

              <div class="form-label big">
                <label for="email">Почта</label>
                <input type="text" id="email">
              </div>

              <div class="form-label big">
                <label for="email">Пароль</label>
                <input type="password" id="email">
              </div>

              <div class="form-label big">
                <label for="email">Повторите пароль</label>
                <input type="password" id="email">
              </div>
            </div>

            <div class="company" v-else>
              <div class="form-label big">
                <label for="email">Название компании</label>
                <input type="text" id="email">
              </div>

              <div class="form-label big">
                <label for="email">Имя</label>
                <input type="text" id="email">
              </div>

              <div class="form-label big">
                <label for="email">Почта</label>
                <input type="text" id="email">
              </div>

              <div class="form-label big">
                <label for="email">Пароль</label>
                <input type="password" id="email">
              </div>

              <div class="form-label big">
                <label for="email">Повторите пароль</label>
                <input type="password" id="email">
              </div>
            </div>
          </form>

        </div>

        <div class="btn-block center">
          
          <button class="btn">
            <router-link to="/projects">
              Зарегистрироваться
            </router-link>
          </button>
          
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isUser: "user",
    }
  },
  
  methods: {
    changeForm(currentForm) {
      this.isUser = currentForm 
    }
  }
}
</script>

<style>

</style>