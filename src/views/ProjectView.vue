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
      <ul class="list">
        <li class="list-item">
          <button @click="isBuilds = true, isUsers = false">
            Сборки
          </button>
        </li>
        <li class="list-item">
          <button @click="isBuilds = false, isUsers = true">
            Пользователи
          </button>
        </li>
      </ul>
      <div v-if="isBuilds">
        <button class="btn secondary">
          <span>Добавить проект</span>
          <img src="@/assets/plus-icon.svg">
        </button>
        <ul class="list version-list">
          <li>
            <h4>Версии 1.0.0</h4>
            <table>
              <tr>
                <th>Сборка</th>
                <th>Дата публикации</th>
                <th>Установки</th>
                <th>Количество отчетов</th>
              </tr>
              <tr class="card">
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
        <button class="btn secondary">
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
          <tr>
            <td>Валерия Алферьева</td>
            <td>alferevav.val@gmail.com</td>
            <td>Разработчик</td>
            <td>Все приложения</td>
          </tr>
          <tr>
            <td>Валерия Алферьева</td>
            <td>alferevav.val@gmail.com</td>
            <td>Разработчик</td>
            <td>Все приложения</td>
          </tr>
          <tr>
            <td>Валерия Алферьева</td>
            <td>alferevav.val@gmail.com</td>
            <td>Разработчик</td>
            <td>Все приложения</td>
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
  }
}
</script>

<style>

</style>