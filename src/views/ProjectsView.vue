<template>
  <div class="projects-block">
    <div class="projects-inner">
      <button class="btn secondary">
        <span>Добавить проект</span>
        <img src="@/assets/plus-icon.svg">
      </button>
      <ul class="list projescts-list">
        <li class="list-item project-item card" v-for="_ in 5">
          <router-link class="padding-20" to="/projects/1">
            <div class="img-block card margin-right-20">
              <div>
                <img src="@/assets/project-icon-1.svg">
              </div>
            </div>
            <div class="description-block">
              <h4 class="text-color margin-bottom-10">Instagram</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat suscipit, dolorem sunt natus rem harum. Rem at perferendis voluptatum?</p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>