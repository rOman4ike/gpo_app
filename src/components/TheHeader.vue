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
              <router-link class="link" to="/">Проекты</router-link>
            </li>
            
            <li class="list-item">
              <router-link class="link" to="/">Пользователи</router-link>
            </li>

            <li class="list-item">
              <router-link class="link" to="/">Отчеты</router-link>
            </li>
          </ul>

          <ul class="header-list" v-else>
            <li class="list-item">
              <router-link class="nav-item" to="/signup">
                <app-button>
                  Регистрация
                </app-button>
              </router-link>
            </li>
            
            <li class="list-item">
              <router-link class="nav-item" to="/login">
                <app-button>
                  Вход
                </app-button>
              </router-link>
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
  .header-inner
    display: flex
    justify-content: space-between
    margin: 25px 0
    align-items: center

    .logo
      transition: transform .3s
      width: 70%
      height: 70%

      &:hover
        transform: scale(1.2)

    .header-list
      display: flex
      flex-direction: row

      .list-item:not(:last-child)
        margin-right: 1.5rem

      .link
        font-size: 1.5rem
</style>