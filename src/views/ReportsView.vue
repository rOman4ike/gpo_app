<template>
  <div class="reports-section">
    <div class="container">
      <div class="reports-inner">

        <div class="btn-block">
          <button class="btn btn-primary crutch-2">
            <img src="@/assets/report-icon.svg">
            <span>Добавить отчет</span>
          </button>

          <button class="btn btn-primary">
            <img class="center crutch-1" src="@/assets/filter-icon.svg">
          </button>
        </div> 

        <ul class="reports-list">
          <li class="list-item" v-for="item in 5" :key="item">
            <div class="name-block">
              <img src="@/assets/inst-logo.svg" alt="">
              <span>Instagram - 3</span>
            </div>
            <p>Американская социальная сеть для обмена фотографиями и видео, осн...</p>
            <img src="@/assets/user-link-icon.svg" alt="">
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