<template>
  <div class="useredit-block">
    <div class="useredit-inner">
      <div class="user-info card">
        <div class="img-block">
          <img src="@/assets/big-user-icon.svg">
        </div>
        <h4 class="text-center">Стефана Лопатина</h4>
        <p class="text-center">Тестировщик</p>
      </div>

      <div class="useredit-form">
        <h4 class="text-center">Личные данные</h4>

        <form action="">
          <div class="form-group">
            <label for="">Имя</label>
            <input type="text">
          </div>
          <div class="form-group">
            <label for="">Фамилия</label>
            <input type="text">
          </div>
          <div class="w-100 text-center">
            <button class="btn primary">
              Сохранить
            </button>
          </div>
        </form>
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