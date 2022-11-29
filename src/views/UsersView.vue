<template>
  <div class="users-section">
    <div class="container">
      <div class="users-inner">

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
          <button class="btn btn-primary">
            <img src="@/assets/project-icon.svg">
            <span>Добавить проект</span>
          </button>


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
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>