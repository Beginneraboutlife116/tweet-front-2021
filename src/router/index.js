import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from './../views/SignIn'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/signin'
  },
  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'sign-up',
    component: () => import('./../views/SignUp')
  },
  {
    path: '/home',
    component: () => import('./../views/Main'),
    children: [
      {
        path: '',
        component: () => import('./../views/Twitter'),
        children: [
          {
            path: '',
            name: 'home',
            component: () => import('./../views/Tweets')
          },
          {
            path: 'tweets/:tweetId', // component用Replies.vue
            name: 'replies',
            component: () => import('./../views/Replies')
          },
          {
            path: ':userId/followers' // component用Followers.vue
          },
          {
            path: ':userId/setting', // component用Setting.vue
            name: 'setting'
          },
          {
            path: ':userId', // component用Profile.vue
            name: 'profile'

          }
        ]
      },
      {
        path: '/admin/tweets',
        name: 'admin-tweets',
        component: () => import('./../views/AdminTweets')
      }
    ]
  },
  {
    path: '/admin/signin',
    name: 'admin-sign-in',
    component: () => import('./../views/SignIn')
  }
]

const router = new VueRouter({
  routes
})

export default router
