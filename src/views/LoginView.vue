<template>
  <div class="login-block center-block">
    <div class="login-inner">
      <h2 class="text-center">Войти</h2>
      <div class="card with-padding">
        <form action="">
          <div class="form-group">
            <label for="">Почта</label>
            <input type="text">
          </div>
          <div class="form-group">
            <label for="">Пароль</label>
            <input type="password">
            <div class="forget">
              <router-link to="/forget">Забыль пароль?</router-link>
            </div>
          </div>
        </form>
      </div>
      <div class="login-bottom">
        <div class="w-100 text-center">
          <button class="btn primary">Войти</button>
        </div>
        <div>
          <router-link to="/signup">Регистрация</router-link>
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