import Vue from 'vue'
import axios from 'axios'

export const userStore = {
  state: {
    isAuthorized: false,
    user: {},
    users: [],
    errors: [],
  },
  mutations: {
    setUser({commit, state}, user) {
      Vue.set(state, 'user', user)
    },
    setErrors(state, errors) {
      Vue.set(state, 'errors', errors)
    },
    setAuthorized(state, isAuthorized) {
      state.isAuthorized = isAuthorized
    }
  },
  actions: {
    getUsers() {
      return new Promise((resolve, reject) => {
        axios.get(`http://88.204.74.60:14888/api/accounts/getAll`).then(data => {
          console.log(data);
        })
      })
    },
    createUser({ commit, state }, params) {
      return new Promise((resolve, reject) => {
        axios.post(`http://88.204.74.60:14888/api/accounts`, params).then(data => {
          resolve(data)
        })
      })
    },
    loginUser({ commit, state }, params) {
      return new Promise((resolve, reject) => {
        axios.post(`http://88.204.74.60:14888/api/accounts/login`, params).then(data => {
          resolve(data)
        })
      })
    }
  }
}