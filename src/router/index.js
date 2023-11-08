// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    children: [
      {
        path: 'Home',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      },
      {
      path: 'Cadastrar',
      name: 'Cadastrar',
      component: () => import('@/views/Add.vue')
      },
      {
        path: 'Listar',
        name: 'Listar',
        component: () => import('@/views/List.vue')
      },
      {
        path: 'Editar',
        name: 'Editar',
        component: () => import('@/views/Edit.vue')
      },
      {
        path: 'Favorite',
        name: 'Favorite',
        component: () => import('@/views/Favorite.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
