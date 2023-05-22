<template>
  <header class="header" :class="{'authorized-header': isAuthorized}">
    <div :class="{'container': !isAuthorized}">
      <div class="header-inner" :class="{'card padding-20': isAuthorized}">
        <div v-if="!isAuthorized">
          <div class="logo">
            <router-link to="/">
              <img src="@/assets/logo.svg">
              <span>Absolu<strong>Test</strong></span>
            </router-link>
          </div>
          <nav class="nav">
            <ul class="list">
              <li>
                <router-link class="link" to='/login'>Вход</router-link>
              </li>
              <li>
                <router-link class="link" to='/signup'>Регистрация</router-link>
              </li>
            </ul>
          </nav>
        </div>
        <div v-if="isAuthorized">
          <div class="logo">
            <router-link to="/">
              <img src="@/assets/logo.svg">
            </router-link>
          </div>
          <nav class="nav">
            <ul class="list authorized-list">
              <li>
                <router-link class="link" to='/projects'>Проекты</router-link>
              </li>
              <li>
                <router-link class="link" to='/users'>Пользователи</router-link>
              </li>
              <li>
                <router-link class="link" to='/reports'>Отчеты</router-link>
              </li>
            </ul>
          </nav>
          <router-link to='/signup'>
            <img src="@/assets/user-icon.svg">
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isAuthorized: true
    }
  }
}
</script>

<style>

</style>