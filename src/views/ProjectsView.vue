<template>
  <div class="projects-block">
    <h1>Проекты</h1>
    <app-button>
      <img src="../assets/project.svg" alt="">
      <span>Добавить проект</span>
    </app-button>

    <ul class="projects-list">
      <li></li>
      <li></li>
      <li></li>
      <li></li>

      <li></li>
      <li></li>
      <li></li>
      <li></li>
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

    h1
      margin-bottom: 3rem

    button
      margin-bottom: 5rem

    .projects-list
      display: grid
      grid-template-columns: 250px 250px 250px 250px
      justify-content: space-between
      gap: 3rem

      li
        width: 250px
        height: 250px
        background-color: rgba(255, 255, 255, 0.7)
        border-radius: 25px
        border: 2px solid white
</style>