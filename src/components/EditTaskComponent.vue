<template>
  <div>
    <h1>Редактирование задачи</h1>
    <form @submit.prevent="editTask">
      <input v-model="editedTaskTitle" type="text">
      <button class="btn btn-success" type="submit">Сохранить</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditTaskComponent',
  data() {
    return {
      editedTaskTitle: '',
    }
  },
  computed: {
    taskIndex() {
      return parseInt(this.$route.params.id)
    },
    task() {
      return this.$store.state.tasks[this.taskIndex]
    },
  },
  async created() {
    if (this.task) {
      this.editedTaskTitle = this.task?.title
    }
  },
  methods: {
    editTask() {
      if (!this.editedTaskTitle.trim()) {
        return
      }
      this.$store.dispatch('editTask', { title: this.editedTaskTitle, index: this.taskIndex })
      this.$router.push({ name: 'tasks' })
    },
  },
}
</script>