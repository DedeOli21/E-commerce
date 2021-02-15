
const routes = [
  { path: '/', component: () => import('pages/index.vue') },
  {
    path: '',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/login', component: () => import('pages/login.vue') },
      { path: '/home', component: () => import('pages/home.vue') },
      { path: '/sobre', component: () => import('pages/sobre.vue') },
      { path: '/faleconosco', component: () => import('pages/faleconosco.vue') },
      { path: '/categoria', component: () => import('pages/categorias.vue') },
      { path: '/ofertas_relampago', component: () => import('pages/ofertas_relampago.vue') },
      { path: '/detalhes', component: () => import('pages/detalhes.vue') },
      { path: '/pulseiras', component: () => import('pages/pulseiras.vue') },
      { path: '/Brincos', component: () => import('pages/Brincos.vue') },
      { path: '/Pingentes', component: () => import('pages/Pingentes.vue') },
      { path: '/Registrar', component: () => import('pages/Registrar.vue') },
      //{ path: '/detalhes', component: () => import('pages/detalhes.vue') },
      //{ path: '/management', component: () => import('pages/management.vue') },
      //{ path: '/request', component: () => import('pages/request.vue') },
      //{ path: '/perfil', component: () => import('pages/perfil.vue') },
    ]
  }

]
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
