import Vue from 'vue'
import Router from 'vue-router'

// 页面，按需动态加载
// 主页
const Home = resolve => require(['pages/Home/Home.vue'], resolve)
// 登录
const signIn = resolve => require(['pages/account/signIn.vue'], resolve)
// 注册
const signUp = resolve => require(['pages/account/signUp.vue'], resolve)
// 新闻
const New = resolve => require(['pages/New/New.vue'], resolve)
// 电台
const Audio = resolve => require(['pages/Audio/Audio.vue'], resolve)
// 文章
const Article = resolve => require(['pages/Article/Article'], resolve)
// 视频
const Video = resolve => require(['pages/Video/Video'], resolve)
// 话题
const Gtalk = resolve => require(['pages/Gtalk/Gtalk'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/account/signin',
      component: signIn
    },
    {
      path: '/account/signup',
      component: signUp
    },
    {
      path: '/new',
      component: New
    },
    {
      path: '/audio',
      component: Audio
    },
    {
      path: '/article',
      component: Article
    },
    {
      path: '/video',
      component: Video
    },
    {
      path: '/gtalk',
      component: Gtalk
    }
  ]
})
