import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/Home.vue'
import LetsTalk from '@/views/LetsTalk.vue'
import AboutMe from '@/views/AboutMe.vue'
import MyJobs from '@/views/MyJobs.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: home
    },
    {
      path: '/aboutme',
      name: 'About me',
      component: AboutMe
    },
    { path: '/Myjobs',
      name: 'My jobs',
      component: MyJobs
    },
    { path: '/letstalk',
      name: 'Let´s talk',
      component: LetsTalk
    }
  ]
})
