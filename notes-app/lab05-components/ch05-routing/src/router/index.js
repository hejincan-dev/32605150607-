import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/01-basic/Home.vue'
import About from '../views/01-basic/About.vue'
import NotFound from '../views/02-redirect/NotFound.vue'
import Users from '../views/03-dynamic/Users.vue'
import User from '../views/03-dynamic/User.vue'
import Center from '../views/04-nested/Center.vue'
import CenterProfile from '../views/04-nested/CenterProfile.vue'
import CenterOrders from '../views/04-nested/CenterOrders.vue'
import NamedDemo from '../views/05-named/NamedDemo.vue'
import ProgramDemo from '../views/06-programmatic/ProgramDemo.vue'
import Search from '../views/06-programmatic/Search.vue'
import Login from '../views/07-guard/Login.vue'






const router = createRouter({
  history: createWebHashHistory(),   // 补全：hash 模式的历史记录（调用那个工厂函数，记得加括号）
  routes: [
    // 一条规则 = 一个对象：path 是地址（以 / 开头）、component 是页面组件
    { path: '', redirect: '/home' },
    { path:'/home', component: Home },   // 补全：地址 /home 配 Home 组件
    { path: '/about', component: About},    // 补全：地址 /about 配 About 组件
    { path: '/users', component: Users },
    { path: '/user/:id',name: 'user', component: User },
    { path: '/named', component: NamedDemo },
    { path: '/program', component: ProgramDemo },
    { path: '/search', component: Search },
    { path: '/login', component: Login },


    {path: '/center', component: Center,children: [
 { path: '', redirect: '/center/profile' },
  { path: 'profile', component: CenterProfile},
{ path: 'orders', component:CenterOrders},
 ]
 },
 

   { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    
]
})
// 实验 07：全局前置守卫——/center 是会员区，没 token 一律拦去 /login
// to=去哪 from=从哪来 next=放行函数（每个分支都必须调，忘了就整站卡住）
router.beforeEach((to, from, next) => {
  // 判断条件给了：目标是 /center 本身、或 /center/ 开头的子路由
  if (to.path === '/center' || to.path.startsWith('/center/')) {
    if (localStorage.getItem('token')) {        // 补全：怎么才算"已登录"？（提示：localStorage 里查得到 token）
      next()             // 补全：验明正身，放行（只调函数、不传参数）
    } else {
      next('/login')              // 补全：拦下，改道去登录页（把登录地址传给 next）
    }
  } else {
    next()                // 补全：非会员区，直接放行
  }
})
export default router
