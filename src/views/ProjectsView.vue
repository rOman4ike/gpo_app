<template>
  <div class="projects-block">
    <div class="projects-inner">
      <button class="btn secondary with-icon margin-bottom-25" @click="isModal = true">
        <span>Добавить проект</span>
        <img src="@/assets/plus-icon.svg">
      </button>
      <ul class="list projects-list">
        <li class="list-item project-item card" v-for="_ in 5">
          <router-link to="/projects/1">
            <div class="img-block card margin-right-20">
              <div>
                <img src="@/assets/project-icon-1.svg">
              </div>
            </div>
            <div class="description-block">
              <h4 class="text-color">Instagram</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat suscipit, dolorem sunt natus rem harum. Rem at perferendis voluptatum?</p>
            </div>
          </router-link>
        </li>
      </ul>

      <div class="modal-block" v-if="isModal">
        <div class="modal card with-padding">
          <div class="modal-header">
            <h4 class="text-center">Добавить проект</h4>
            <button class="btn-reset close" @click="isModal = false">
              <img src="@/assets/close-icon.svg">
            </button>
          </div>
          <form>
            <div class="form-group">
              <label for="">Название</label>
              <input type="text" v-model.trim="project.name">
            </div>
            <div class="form-group">
              <label for="">Описание проекта</label>
              <input type="text" v-model.trim="project.description">
            </div>
            <div class="form-group">
              <label for="">Иконка приложения</label>
              <div>
                <button class="btn secondary with-icon">
                  <span>Добавить иконку</span>
                  <img src="@/assets/plus-icon.svg">
                </button>
              </div>
            </div>
            <div class="modal-bottom w-100 text-center">
              <button type="button" class="btn primary" @click="createNewProject()">Добавить</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      isModal: false,
    }
  },
  computed: {
    ...mapState('project', ['project'])
  },
  methods: {
    ...mapActions('project', ['createProject']),
    createNewProject() {
      let params = this.project
      console.log(params);
      this.createProject(params).then(data => {
        if (data.status == 200) {
          console.log('success');
          console.log(data);
        } else {
          console.log('error')
        }
      })
    }
  }
}
</script>

<style>

</style>