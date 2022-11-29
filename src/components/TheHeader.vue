<template>
  <div class="header">
    <div class="container">
      <div class="header-inner">
        
        <div class="logo">
          <router-link class="link" to="/">
            <img src="@/assets/logo.svg">
          </router-link>
        </div>

        <nav class="nav" v-if="!isAuthorized">
          <ul class="nav-list">
            <li class="list-item">
              <router-link class="link" to="/login">Вход</router-link>
            </li>
            <li class="list-item">
              <router-link class="link" to="/signup">Регистрация</router-link>
            </li>
          </ul>
        </nav>

        <div class="nav" v-else>
          <ul class="nav-list">
            <li class="list-item">
              <router-link class="link" to="/projects">Проекты</router-link>
            </li>
            <li class="list-item">
              <router-link class="link" to="/users">Пользователи</router-link>
            </li>
            <li class="list-item">
              <router-link class="link" to="/reports">Отчеты</router-link>
            </li>
          </ul>
        </div>

        <div class="user-block" v-if="isAuthorized">
          <router-link to="/">
            <img src="@/assets/user-link-icon.svg">
          </router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAuthorized: true,
    }
  }
}
</script>

<style>

</style>