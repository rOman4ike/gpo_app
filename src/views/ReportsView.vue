<template>
  <div class="reports-block">
    <app-button>
      <img src="@/assets/reports.svg" alt="">
      <span>Добавить отчет</span>
    </app-button>
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
.reports-block
  margin: 5rem 0

  button
    margin-bottom: 5rem
</style>