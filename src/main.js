// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import { routes } from './routes'
import axios from 'axios'

import { store } from './store/store.js'

Vue.use(VueRouter)

//默认设置根路径 
axios.defaults.baseURL = 'https://pizza-app-7347d.firebaseio.com/'
//配置Vue原型 （在任何组建中都可以正常使用axios）
Vue.prototype.axios = axios

const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior(to,from,savedPosition){
      // return { x:0, y:100 }
    // return { selector: '.btn'}

    if(savedPosition){
      return savedPosition
    }else{
      return { x:0, y:0 }
    }
  }
})

// // 全局守卫
// router.beforeEach((to,from,next) =>{
//   if(to.path == '/login' || to.path == '/register'){
//     next();
//   }else{
//     alert("还没有登录，请先登录！");
//     next('/login');
//   }
// })


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
