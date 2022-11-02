<template>
  <div class="users-block">
    <ul class="navlist">
      <li>
        <router-link to="" class="link">Пользователи</router-link>
      </li>
      <li>
        <router-link to="" class="link">Все</router-link>
      </li>
      <li>
        <router-link to="" class="link">Разработчик</router-link>
      </li>
      <li>
        <router-link to="" class="link">Тестировщик</router-link>
      </li>
      <li>
        <router-link to="" class="link">Владелец</router-link>
      </li>
    </ul>
    <div class="main-block">
      <app-button>
        <img src="@/assets/user.svg" alt="">
        <span>Добавить пользователя</span>
      </app-button>

      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Почта</th>
            <th>Роль</th>
            <th>Приложение</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Валерия Алферьева</td>
            <td>alferevav.val@gmail.com</td>
            <td>Владелец</td>
            <td>Все приложения</td>
          </tr>

          <tr>
            <td>Валерия Алферьева</td>
            <td>alferevav.val@gmail.com</td>
            <td>Владелец</td>
            <td>Все приложения</td>
          </tr>

          <tr>
            <td>Валерия Алферьева</td>
            <td>alferevav.val@gmail.com</td>
            <td>Владелец</td>
            <td>Все приложения</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton.vue';

export default {
  components: {
    AppButton
  }
}
</script>

<style lang="sass" scoped>
.users-block
  margin: 5rem 0
  display: flex
  justify-content: flex-start
  flex-direction: row

  .navlist
    margin-right: 5rem
    li
      font-size: 1.5rem
      font-weight: 400

      &:not(:last-child)
        margin-bottom: 1.5rem

  .main-block
    flex-grow: 1
    
    button
      margin-bottom: 5rem

    table 
      color: #212529
      border-collapse: collapse
      width: 100%

      td, th 
        padding: 0.75rem
        text-align: left
        border-bottom: 1px solid #0F3D3E
      
      th 
        border-bottom: 1px solid #0F3D3E
  
  
</style>