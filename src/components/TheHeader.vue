<template>
  <header class="header">
    <div class="container">
      <div class="header-inner">

        <router-link to="/">
          <img class="logo" src="../assets/logo.svg" alt="">
        </router-link>

        <nav class="nav">
          <ul class="header-list" v-if="authorized">
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

          <ul class="header-list" v-else>
            <li class="list-item">
              <router-link class="link" to="/signup">Регистрация</router-link>
            </li>
            
            <li class="list-item">
              <router-link class="link" to="/login">Вход</router-link>
            </li>
          </ul>
        </nav>
        
        <div class="user-block" v-if="authorized">
          <router-link to="/">
            <img src="../assets/userCircle.svg" alt="">
          </router-link>
        </div>

      </div>
    </div>
  </header>
</template>

<script>
import AppButton from "./AppButton.vue"

export default {
  data() {
    return {
      authorized: true,
    }
  },
  components: {
    AppButton
  }
}
</script>

<style lang="sass" scoped>
  .header
    padding: 25px 0
    margin-bottom: 5rem
    background-color: rgba(31, 69, 70, 0.1)

    .header-inner
      display: flex
      justify-content: space-between
      align-items: center

      .logo
        transition: transform .3s

        &:hover
          transform: scale(1.2)

      .header-list
        display: flex
        flex-direction: row

        .list-item:not(:last-child)
          margin-right: 3rem

        .link
          font-size: 1.5rem
</style>