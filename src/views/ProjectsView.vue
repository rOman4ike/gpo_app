<template>
  <div class="projects-section">
    <div class="container">
      <div class="projects-inner">

        <button class="btn btn-primary">
          <img src="@/assets/project-icon.svg">
          <span>Добавить проект</span>
        </button>

        <ul class="projects-list">
          <li v-for="item in 5" :key="item">
            <img src="@/assets/projectImg-1.png" alt="">
            <div class="project-info-block">
              <h3>Женщины правят миром</h3>
              <p>Описание проекта описание проекта описание описание описание описание описание описание </p>
            </div>
          </li>
        </ul>

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