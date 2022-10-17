import { createRouter, createWebHistory } from 'vue-router'
import AddRecipe from './components/AddRecipe.vue'
import HomeCom from './components/Home.vue'
import ViewRecipe from './components/ViewRecipe.vue'
const routes = [
    {
    path: '/',
    name: 'Home',
    component: HomeCom
  },
  {

    path: '/addrecipe',
    name: 'addrecipe',
    component: AddRecipe
  },
   {

    path: '/viewrecipe/:id',
    name: 'vieecipe',
    component: ViewRecipe
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router