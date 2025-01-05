import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodItem from '@/views/FoodItem.vue'
import FruitItem from '@/components/FruitItem.vue'
import TodoList from '@/views/TodoList.vue'
import RefPage from '@/views/RefPage.vue'
import LifeCycle from '@/views/LifeCycle.vue'
import FormInputs from '@/views/FormInputs.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/food',
      name: 'food',
      component: FoodItem,
    },
    {
      path: '/fruit',
      name: 'fruit',
      component: FruitItem,
    },
    {
      path: '/todo',
      name: 'todo',
      component: TodoList,
    },
    {
      path: '/ref',
      name: 'ref',
      component: RefPage,
    },
    {
      path: '/lifecycle',
      name: 'lifecycle',
      component: LifeCycle,
    },
    {
      path: '/form',
      name: 'form',
      component: FormInputs,
    },
    
  ],
})

export default router
