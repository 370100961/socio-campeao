import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import FilterView from '../views/FilterView.vue'
import AddSocio from '../views/AddSocio.vue'
import SocioView from '../views/SocioView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/socios',
    name: 'socios',
    component: HomeView,
  },
  {
    path: '/socios/ouro',
    name: 'ouro',
    component: FilterView,
    props: { filtro: 'Ouro' }
  },
  {
    path: '/socios/prata',
    name: 'prata',
    component: FilterView,
    props: { filtro: 'Prata' }
  },
  {
    path: '/socios/bronze',
    name: 'bronze',
    component: FilterView,
    props: { filtro: 'Bronze' }
  },
  {
    path: '/socios/adicionar',
    name: 'add',
    component: AddSocio
  },
  {
    path: '/socios/:id',
    name: "socioview",
    //Criem o componente SocioView e importem
    //neste mesmo arquivo router/index.js
    component: SocioView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
