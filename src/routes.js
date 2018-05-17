import Home from './components/Home'
import Login from './components/Login'
import Menu from './components/Menu'
import Register from './components/Register'
import Admin from './components/Admin'
import About from './components/about/About'

//二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

// 三级路由
import Phone from './components/about/contact/Phone';
import PersonName from './components/about/contact/PersonName';

export const routes= [
  {path:'/',components:{
    default:Home,
    "orderingGuide":OrderingGuide,
    "delivery":Delivery,
    "history":History
    // hashbang:true
  }
  },
  {path:'/Home',component:Home},
  {path:'/login',name:'loginLink',component:Login},
  {path:'/menu',name:'menuLink',component:Menu},
  {path:'/register',component:Register},
  {path:'/admin',name:'adminLink',component:Admin},
  {path:'/about',name:'aboutLink',redirect:'/contact',component:About,children:[
    {path:'/contact',component:Contact,children:[
      {path:'/PersonName',component:PersonName},
      {path:'/Phone',component:Phone},
    ]},
    {path:'/Delivery',component:Delivery},
    {path:'/History',component:History},
    {path:'/OrderingGuide',component:OrderingGuide}
  ]},
  // {path:'*',component:Home},
  {path:'*',redirect:'/Home'},
]


