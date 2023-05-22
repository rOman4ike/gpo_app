<template>
  <div class="forget-block center-block">
    <div class="forget-inner">
      <h2 class="text-center margin-bottom-36">Восстановление пароля</h2>
      <div class="card with-padding margin-bottom-48">
        <form action="" v-if='codeIsValid'>
          <div class="text-block margin-bottom-10">
            <p class="text-center text-gray">Мы отправили сообщение с кодом на почту</p>
            <p class="text-center text-color">"alferevav.val@gmail.com"</p>
            <p class="text-center text-gray">Введите код</p>
          </div>
          <div class="form-group">
            <input type="text">
          </div>
        </form>
        <form action="" v-if="!codeIsValid">
          <div class="form-group">
            <label for="">Введите новый пароль</label>
            <input type="password">
          </div>
          <div class="form-group">
            <label for="">Повторите пароль</label>
            <input type="password">
          </div>
        </form>
      </div>
      <div class="forget-bottom">
        <div>
          <button class="btn primary">Восстановить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      codeIsValid: true
    }
  }
}
</script>

<style>

</style>