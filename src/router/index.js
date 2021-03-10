import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: '控制面板',
      component: () => import('@/views/dashboard/index'),
      meta: {title: '控制面板', icon: 'el-icon-s-home'}
    }]
  },
  /**
   *   首页
   */

  {
    path: '/home',
    hidden: true,
    name: '大家帮家政',
    component: () => import('@/views/home/index'),
    meta: {title: '大家帮家政'}
  },

  // 登录
  {
    path: '/userLogin',
    hidden: true,
    name: '登录',
    component: () => import('@/views/home/userLogin'),
    meta: {title: '登录'}
  },

  // 注册
  {
    path: '/reg',
    hidden: true,
    name: '注册',
    component: () => import('@/views/home/register'),
    meta: {title: '注册'}
  },

  // 分类详情

  // 详情
  {
    path: '/info/:id',
    hidden: true,
    name: '详情',
    component: () => import('@/views/home/sceneryInfo'),
    meta: {title: '详情'}
  },


  /**
   *   系统管理
   */
  // 个人中心
  {
    path: '/admin',
    redirect: '/info',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'info',
        name: '个人中心',
        component: () => import('@/views/admin/info'),
        meta: {title: '个人中心'}

      }
    ]
  },

  {
    path: '/homes',
    component: Layout,
    redirect: '/admin',
    name: '系统管理',
    meta: {title: '系统管理', icon: 'table'},
    children: [
      {
        path: 'admin',
        name: 'admin',
        component: () => import('@/views/admin/index'),
        meta: {title: '员工列表'}
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/user/index'),
        meta: {title: '用户列表'}
      }
    ]
  },
  /**
   * 家政管理
   */
  {
    path: '/housekeeping',
    component: Layout,
    redirect: '/housekeeping/detail',
    name: '家政管理',
    meta: {title: '家政管理', icon: 'table'},
    children: [
      {
        path: 'list',
        name: '家政人员',
        component: () => import('@/views/scenery/list'),
        meta: {title: '人员列表',}
      },
      {
        path: 'detail',
        name: '添加人员',
        component: () => import('@/views/scenery/detail'),
        meta: {title: '添加人员'}
      },
      {
        path: 'category',
        name: '家政分类',
        component: () => import('@/views/scenery/category'),
        meta: {title: '家政分类'}
      }
    ]
  },
  /**
   * 预定管理
   */
  {
    path: '/index',
    component: Layout,
    redirect: '/index/reservation',
    name: '预定管理',
    meta: {title: '预定管理', icon: 'table'},
    children: [
      {
        path: 'reservation',
        name: '预定列表',
        component: () => import('@/views/index/reservation'),
        meta: {title: '预定列表', icon: 'table'}
      },
         ]
  },
  /**
   *  评论
   */
  {
    path: '/comment',
    component: Layout,
    children: [
      {
        path: 'commentList',
        name: '评论列表',
        component: () => import('@/views/comment/commentList'),
        meta: {title: '评论列表', icon: 'table'}
      }
    ]
  },
  /**
   *  统计
   */
  {
    path: '/chart',
    component: Layout,
    redirect: '/chart/chart',
    name: '数据统计',
    meta: {title: '数据统计', icon: 'table'},
    children: [
      {
        path: 'chart',
        name: '预约数量',
        component: () => import('@/views/chart/chart'),
        meta: {title: '预约数量'}
      },
      {
        path: 'info',
        name: '家政人员',
        component: () => import('@/views/chart/info'),
        meta: {title: '家政人员'}
      },
      {
        path: 'user',
        name: '用户统计',
        component: () => import('@/views/chart/user'),
        meta: {title: '用户统计'}
      }
    ]
  },

  {path: '*', redirect: '/404', hidden: true}
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({y: 0}),
  mode: 'history',
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
