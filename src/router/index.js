import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Layout from '@/layouts';
// 主窗口
import mainLayout from '@/layouts/mainLayout';
// 图标的demo
import echartRouter from './modules/echarts';
// 组件菜单的demo
import componentsRouter from './modules/components';
// 嵌套路由的demo
import nestRouter from './modules/nest';

//基础路由
export const baseRoute = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/403',
    component: () => import('@/views/error/403'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error/404'),
    hidden: true
  },
  {
    path: '/500',
    component: () => import('@/views/error/500'),
    hidden: true
  }
];
// 需要异步加载的路由
export const asyncRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    hidden: true,
    children: [
      {
        name: 'index',
        path: '/index',
        component: () => import('@/views/index/index'),
        meta: {
          role: 1,
          title: '首页',
          icon: 'dashboard'
        }
      },

      {
        name: 'icon',
        path: '/icon',
        component: () => import('@/views/icon/index'),
        meta: {
          role: 2,
          title: '图标',
          icon: 'icon'
        }
      },
      {
        name: 'drag',
        path: 'https://www.douyin.com/user/MS4wLjABAAAA8QUJd4uIDW7LiACoHAqzoxRNDovw-9dttxAyBb6hIWI',
        component: Layout,
        meta: {
          title: '大伟聊前端',
          icon: 'drag',
          role: 3
        }
      },
      echartRouter,
      componentsRouter,
      nestRouter,
      {
        name: 'webGl',
        component: mainLayout,
        path: '/webGl',
        redirect: '/webGl/gis',
        meta: {
          role: 4,
          title: '地图相关',
          icon: 'webGl'
        },
        children: [
          {
            name: 'Gis',
            path: '/webGl/gis',
            component: () => import('@/views/webGl/Gis/index'),
            meta: { title: 'Gis', role: 5 }
          },
          {
            name: 'OpenLayers',
            path: '/webGl/OpenLayers',
            component: () => import('@/views/webGl/OpenLayers/index'),
            meta: { title: '分析图', role: 6 }
          }
        ]
      },
      {
        name: 'error',
        path: '/error',
        component: mainLayout,
        redirect: '/error/403',
        meta: { title: '错误页面', icon: 'error', role: 7 },
        children: [
          {
            name: '403',
            path: '/error/403',
            component: () => import('@/views/error/403'),
            meta: { title: '403', role: 8 }
          },
          {
            name: '404',
            path: '/error/404',
            component: () => import('@/views/error/404'),
            meta: { title: '404', role: 9 }
          },
          {
            name: '500',
            path: '/error/500',
            component: () => import('@/views/error/500'),
            meta: { title: '500', role: 10 }
          }
        ]
      },
      {
        name: 'userSystem',
        component: mainLayout,
        path: '/userSystem',
        redirect: '/userSystem/userInfo',
        meta: { title: '个人设置', icon: 'user', role: 11 },
        children: [
          {
            name: 'userInfo',
            path: '/userSystem/userInfo',
            component: () => import('@/views/userSystem/userInfo/index'),
            meta: { title: '个人中心', role: 12 }
          },
          {
            name: 'setting',
            path: '/userSystem/setting',
            component: () => import('@/views/userSystem/setting/index'),
            meta: { title: '个人设置', role: 13 }
          }
        ]
      },
      {
        name: 'system',
        component: mainLayout,
        path: '/system',
        redirect: '/system/userManage',
        meta: {
          role: 14,
          title: '后台管理',
          icon: 'system'
        },
        children: [
          {
            name: 'userManage',
            path: '/system/userManage',
            component: () => import('@/views/system/userManage/index'),
            meta: { title: '用户管理', role: 15 }
          },
          {
            name: 'roleManage',
            path: '/system/roleManage',
            component: () => import('@/views/system/roleManage/index'),
            meta: { title: '角色管理', role: 16 }
          }
        ]
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
];

const createRouter = function () {
  return new VueRouter({
    routes: baseRoute,
    scrollBehavior: () => ({ y: 0 })
  });
};

const router = createRouter();

// router.matcher属性做修改，即新的routes就会替换老的routes, 其实就是replaceRoutes()的含义
export function resetRouter() {
  router.matcher = createRouter().matcher;
}

export default router;
