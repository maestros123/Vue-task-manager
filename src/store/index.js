import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [],
  },
  mutations: {
    ADD_TASK(state, task) {
      state.tasks.push(task)
    },
    DELETE_TASK(state, index) {
      state.tasks.splice(index, 1)
    },
    EDIT_TASK(state, { title, index }) {
      state.tasks[index] = { title }
    },
  },
  actions: {
    addTask({ commit }, title) {
      commit('ADD_TASK', { title })
    },
    deleteTask({ commit }, index) {
      commit('DELETE_TASK', index)
    },
    editTask({ commit }, { title, index }) {
      commit('EDIT_TASK', { title, index })
    },
  },
})