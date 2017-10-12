import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Brands from './components/Brands.vue'
import Contacts from './components/Contacts.vue'
import Projects from './components/Projects.vue'
import Blog from './components/Blog.vue'
import Post from './components/Post.vue'
import Search from './store/index.js'
import Comments from './store/comments.js'

Vue.use(VueRouter)

const routes = [
  { path: '', component: App },
  { path: '/brands', component: Brands },
  { path: '/contacts', component: Contacts },
  { path: '/projects', component: Projects },
  { path: '/blog', component: Blog },
  { path: '/post/:id', name: 'post', component: Post },
]

const router = new VueRouter({
  //mode: 'history',  #Использование url без #
  routes
})

new Vue({
  el: '#app',
  router: router,
  store: { Search, Comments }
})
