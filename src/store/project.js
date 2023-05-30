import Vue from 'vue'
import axios from 'axios'

export const projectStore = {
  state: {
    project: {},
    projects: [],
    errors: [],
  },
  mutations: {
    setProject({commit, state}, project) {
      Vue.set(state, 'project', user)
    },
    setErrors(state, errors) {
      Vue.set(state, 'errors', errors)
    },
  },
  actions: {
    getProjects() {
      return new Promise((resolve, reject) => {
        axios.get(`http://88.204.74.60:14888/api/project/getAll`).then(data => {
          resolve(data)
        })
      })
    },
    createProject({ commit, state }, params) {
      return new Promise((resolve, reject) => {
        axios.post(`http://88.204.74.60:14888/api/project`, params).then(data => {
          resolve(data)
        })
      })
    },
  }
}