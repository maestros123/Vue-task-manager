<template>
  <div class="task">
    <h1>Список задач</h1>
    <form @submit.prevent="addTask">
      <input v-model="newTaskTitle" type="text" placeholder="Новая задача">
      <button class="btn btn-success" type="submit">Добавить</button>
    </form>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        {{ task.title }}
        <button class="btn btn-primary" @click="editTask(index)">Редактировать</button>
        <button class="btn btn-danger" @click="deleteTask(index)">Удалить</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TaskComponent',
  data() {
    return {
      newTaskTitle: '',
    }
  },
  computed: {
    tasks() {
      return this.$store.state.tasks
    },
  },
  methods: {
    addTask() {
      if (!this.newTaskTitle.trim()) {
        return;
      }
      this.$store.dispatch('addTask', this.newTaskTitle)
      this.newTaskTitle = ''
    },
    deleteTask(index) {
      this.$store.dispatch('deleteTask', index)
    },
    editTask(index) {
      this.$router.push({ name: 'edit-task', params: { id: index } })
    },
  },
}
</script>

