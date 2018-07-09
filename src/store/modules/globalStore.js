import Vue from 'vue'

const state = {
  user: {},
  config: {}
}

const mutations = {
  _user (state, value) {
    state.user = value
  },
  _config (data, value) {
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        Vue.set(state.config, key, data[key])
      }
    }
  }
}
const actions = {}
const getters = {}

export default { namespaced: true, state, mutations, getters, actions }
