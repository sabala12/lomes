import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
        mode: 'history',
        routes: [
        {
                path: '/',
                component: () => import('./components/Home')
        },
        {
                name: 'Posts',
                path: '/posts/:sub',
                component: () => import('./components/Posts'),
                props: true
        },
        {
                name: 'Post',
                path: '/post/:name',
                component: () => import('./components/Post.vue'),
                props: true
        }
  ]
})
