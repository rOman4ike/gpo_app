<template>
  <div class="login-section">
    <div class="container">
      <div class="login-inner">

        <h2 class="center">Вход</h2>

        <div class="form-block center">
          <form>

            <div class="form-label big">
              <label for="email">Почта</label>
              <input type="text" id="email">
            </div>

            <div class="form-label big">
              <label for="email">Пароль</label>
              <input type="password" id="email">
            </div>

            <div class="link-block right">
              <router-link to="/">Забыли пароль?</router-link>
            </div>

          </form>
        </div>

        <div class="btn-block center">

          <button class="btn">
            <router-link to="/projects">
              Войти
            </router-link>
          </button>

          <div class="link-block">
            <router-link to="/signup">Регистрация</router-link>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>