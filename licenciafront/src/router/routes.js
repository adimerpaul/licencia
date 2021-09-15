import Index from 'pages/Index'
import Login from "pages/Login";
import User from "pages/User";
import Entregartramite from "pages/Entregartramite";
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: Index },
      { path: 'login', component: Login },
      { path: 'user', component: User,meta:{requiresAuth: true}},
      { path: 'entregartramite/:id', component: Entregartramite,meta:{requiresAuth: true}},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
