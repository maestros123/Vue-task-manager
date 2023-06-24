import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomeComponent'
import TaskList from '@/components/TaskComponent'
import EditTask from '@/components/EditTaskComponent'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: TaskList,
    },
    {
      path: '/tasks/:id',
      name: 'edit-task',
      component: EditTask,
    },
  ],
})

export default router