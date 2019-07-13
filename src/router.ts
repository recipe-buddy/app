import Vue from 'vue'
import Router from 'vue-router'
import DefaultLayout from './layouts/Default.vue'
import PublicLayout from './layouts/Public.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // Application core routes
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        }
      ]
    },

    // Public about page
    {
      path: '/about',
      component: PublicLayout,
      children: [
        {
          path: '',
          name: 'about',
          component: About
        }
      ]
    }
  ]
})
