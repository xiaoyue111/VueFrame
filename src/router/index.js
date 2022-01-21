let home = () => import('@/views/home.vue')

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: home,
    },
    {
      path: '/home',
      name: 'home',
      component: home,

    },
  ],
})

export default router