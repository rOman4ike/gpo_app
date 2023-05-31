<template>
  <div class="user-block">
    <div class="user-inner">
      <div class="user-info card">
        <div class="img-block">
          <img src="@/assets/big-user-icon.svg">
        </div>
        <h4 class="text-center">Стефана Лопатина</h4>
        <p class="text-center">Тестировщик</p>
      </div>

      <div class="user-description">
        <ul class="list-link">
          <li class="header">
            <h4>
              Аккаунт
            </h4>
          </li>
          <li class="link-item">
            <a href="">
              <div>
                <h5>
                  chahohbily@gmail.com
                </h5>
                <span>
                  Нажмите, чтобы изменить почту
                </span>
              </div>
              <img src="@/assets/arrow-right.svg">
            </a>
          </li>
          <li class="link-item">
            <a href="">
              <div>
                <h5>
                  Пароль
                </h5>
                <span>
                  Нажмите, чтобы изменить пароль
                </span>
              </div>
              <img src="@/assets/arrow-right.svg">
            </a>
          </li>
          <li class="header">
            <h4>
              Информация о пользователе
            </h4>
          </li>
          <li class="link-item">
            <router-link :to="'/user/' + userId + '/edit'">
              <div>
                <h5>
                  Личные данные
                </h5>
              </div>
              <img src="@/assets/arrow-right.svg">
            </router-link>
          </li>
          <li class="link-item">
            <router-link to="/projects">
              <div>
                <h5>
                  Активные проекты
                </h5>
              </div>
              <img src="@/assets/arrow-right.svg">
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: sessionStorage.getItem('id') || 0,
    }
  },
}
</script>

<style>

</style>