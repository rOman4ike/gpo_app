<template>
  <div class="projects-block">
    <app-button>
      <img src="../assets/project.svg" alt="">
      <span>Добавить проект</span>
    </app-button>

    <ul class="projects-list">
      <li v-for="item in 5" :key="item">
        <img src="@/assets/projectImg-1.png" alt="">
        <div class="project-info-block">
          <h2>Женщины правят миром</h2>
          <p>Описание проекта описание проекта описание описание описание описание описание описание </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import AppButton from "../components/AppButton.vue"

export default {
  components: {
    AppButton
  }
}
</script>

<style lang="sass" scoped>

  .projects-block
    margin: 5rem 0

    button
      margin-bottom: 5rem

    .projects-list

      li
        display: flex
        justify-content: flex-start
        padding: 2.5rem 0
        border-top: 1px solid #0F3D3E

        &:last-child
          border-bottom: 1px solid #0F3D3E

        img
          margin-right: 2.5rem

        h2
          margin-bottom: 1.5rem
</style>