import Vue from 'vue'
import axios from 'axios'

export const userStore = {
  state: {
    user: {},
    users: [],
    errors: [],
  },
  mutations: {
    setUser({commit, state}, user) {
      Vue.set(state, 'user', user)
    }
  },
  actions: {
    getUsers() {
      return new Promise((resolve, reject) => {
        axios.get(`http://88.204.74.60:14888/api/accounts/getAll`).then(data => {
          console.log(data);
        })
      })
    }
  }
}