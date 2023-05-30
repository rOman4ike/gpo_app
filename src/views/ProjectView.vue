<template>
  <div class="project-block">
    <div class="project-inner">
      <div class="card project-info padding-20 margin-bottom-40">
        <div class="img-block">
          <img src="@/assets/project-icon-1.svg">
        </div>
        <div class="description-block">
          <h4>Instagram</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ex quod adipisci quas eligendi quia voluptatum fuga alias saepe vel.</p>
        </div>
      </div>
      <ul class="list projects-link-list">
        <li class="list-item">
          <button @click="isBuilds = true, isUsers = false" :class="{
            'text-color': isBuilds,
            'add-text-color': isUsers
          }">
            Сборки
          </button>
        </li>
        <li class="list-item">
          <button @click="isBuilds = false, isUsers = true" :class="{
            'text-color': isUsers,
            'add-text-color': isBuilds
          }">
            Пользователи
          </button>
        </li>
      </ul>
      <div v-if="isBuilds">
        <button class="btn secondary with-icon margin-bottom-20">
          <span>Добавить проект</span>
          <img src="@/assets/plus-icon.svg">
        </button>
        <ul class="list version-list">
          <li style="width: 100%; display: none;">
            <h4>Версии 1.0.0</h4>
            <table class="table-builds">
              <tr>
                <th>Сборка</th>
                <th>Дата публикации</th>
                <th>Установки</th>
                <th>Количество отчетов</th>
              </tr>
              <tr class="card test" @click="goToReports()">
                <td>6</td>
                <td>01.12.2023</td>
                <td>6</td>
                <td>4</td>
              </tr>
            </table>
          </li>
        </ul>
      </div>
      <div v-if="isUsers">
        <button class="btn secondary with-icon margin-bottom-20">
          <span>Добавить пользователя</span>
          <img src="@/assets/plus-icon.svg">
        </button>
        <table class="table-users">
          <tr>
            <th>Имя</th>
            <th>Почта</th>
            <th>Роль</th>
            <th>Приложения</th>
          </tr>
          <tr v-for="_ in 3">
            <td>Валерия Алферьева</td>
            <td>alferevav.val@gmail.com</td>
            <td>Разработчик</td>
            <td>
              <span>Все приложения</span>
              <span>
                <img src="@/assets/delete-icon.svg">
              </span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBuilds: false,
      isUsers: true,
    }
  },
  methods: {
    goToReports() {
      this.$router.push('/reports')
    }
  }
}
</script>

<style>

</style>