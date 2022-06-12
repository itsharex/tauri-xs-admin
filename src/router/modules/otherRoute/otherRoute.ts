/* Layout */
// import Layout from '@/layouts/index.vue'
// import AppMain from '@/layouts/components/AppMain/index.vue'
import { AppRouteRecordRaw } from '#/route';
import { t } from '@/hooks/web/useI18n';

const Layout = () => import('@/layouts/pageLayouts/index.vue');
const emptyLayouts = () => import('@/layouts/emptyLayouts/index.vue');

const safeManagerRoutes: Array<AppRouteRecordRaw> = [
  {
    path: '/welcome',
    component: Layout,
    redirect: '/welcome',
    name: 'RtHome',
    alwaysShow: false,
    meta: { title: '', icon: 'iEL-home-filled' },
    children: [
      {
        path: '',
        name: 'RtWelcome',
        component: () => import('@/views/index/index.vue'),
        meta: { title: t('route.pathName.index') },
      },
    ],
  },
  {
    path: '/components',
    component: Layout,
    redirect: '/components/form',
    name: 'RtComponents',
    alwaysShow: true,
    meta: { title: t('route.pathName.components'), icon: 'components' },
    children: [
      {
        path: 'form',
        name: 'RtForm',
        component: () => import('@/views/components/form/index.vue'),
        meta: { title: t('route.pathName.form') },
      },
      {
        path: 'table',
        name: 'RtTable',
        component: () => import('@/views/components/TablePage/index.vue'),
        meta: { title: t('route.pathName.table') },
      },
      {
        path: 'drag',
        name: 'RtDrag',
        component: () => import('@/views/components/drag/index.vue'),
        meta: { title: t('route.pathName.dragCpts') },
      },
      {
        path: 'count-to',
        name: 'RtCountTo',
        component: () => import('@/views/components/count-to/index.vue'),
        meta: { title: t('route.pathName.countTo') },
      },
      {
        path: 'seamless-scroll',
        name: 'RtSeamlessScroll',
        component: () => import('@/views/components/seamless-scroll/index.vue'),
        meta: { title: t('route.pathName.seamlessScroll') },
      },
      {
        path: 'date-time',
        component: emptyLayouts, // Parent router-view
        name: 'DateTime',
        redirect: '/components/date-time/date',
        meta: { title: t('route.pathName.date') },
        children: [
          {
            path: 'date-select',
            name: 'RtDate',
            component: () => import('@/views/components/date/index.vue'),
            meta: { title: t('route.pathName.dateSelect') },
          },
          {
            path: 'calendar',
            name: 'RtCalendar',
            component: () => import('@/views/components/calendar/index.vue'),
            meta: { title: t('route.pathName.calendar') },
          },
        ],
      },
    ],
  },
  {
    path: '/echarts',
    component: Layout,
    redirect: '/echarts/bar',
    name: 'RtEcharts',
    alwaysShow: true,
    meta: { title: t('route.pathName.echarts'), icon: 'echarts' },
    children: [
      {
        path: 'bar',
        name: 'RtBar',
        component: () => import('@/views/echarts/bar/index.vue'),
        meta: { title: t('route.pathName.echarts_bar') },
      },
      {
        path: 'map',
        name: 'RtMap',
        component: () => import('@/views/echarts/map/index.vue'),
        meta: { title: t('route.pathName.echarts_map') },
      },
    ],
  },
  {
    path: '/editor',
    component: Layout,
    redirect: '/editor/logic-flow',
    name: 'RtEditor',
    alwaysShow: true,
    meta: { title: t('route.pathName.editor'), icon: 'editor' },
    children: [
      {
        path: 'rich-text',
        name: 'RtRichText',
        component: () => import('@/views/editor/richText/index.vue'),
        meta: { title: t('route.pathName.editor_richText') },
      },
      {
        path: 'markdown',
        name: 'RtMarkdown',
        component: () => import('@/views/editor/markdown/index.vue'),
        meta: { title: t('route.pathName.editor_markdown') },
      },
      {
        path: 'logic-flow',
        name: 'RtLogicFlow',
        component: () => import('@/views/editor/logicFlow/index.vue'),
        meta: { title: t('route.pathName.editor_logicFlow') },
      },
    ],
  },
  {
    path: '/useradmin',
    component: Layout,
    redirect: '/useradmin/userlist',
    name: 'RtUseradmin',
    alwaysShow: true,
    meta: { title: t('route.pathName.userInfo'), icon: 'iEL-avatar' },
    children: [
      {
        path: 'refSyntax',
        name: 'RtRefSyntax',
        component: () => import('@/views/useradmin/refSyntax/index.vue'),
        meta: { title: t('route.pathName.refSyntax') },
      },
      {
        path: 'userlist',
        name: 'RtUserlist',
        component: () => import('@/views/useradmin/userlist/index.vue'),
        meta: { title: t('route.pathName.userList') },
      },
    ],
  },
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'RtNested',
    meta: {
      title: t('route.pathName.nested'),
      icon: 'iEL-grid',
    },
    children: [
      {
        path: 'menu1',
        component: emptyLayouts, // Parent router-view
        name: 'RtMenu1',
        redirect: '/nested/menu1/menu1-1',
        meta: { title: t('route.pathName.nested1') },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1/index.vue'),
            name: 'RtMenu1-1',
            meta: { title: t('route.pathName.nested1_1') },
          },
          {
            path: 'menu1-2',
            component: emptyLayouts,
            name: 'RtMenu1-2',
            redirect: '/nested/menu1/menu1-2/menu1-2-1',
            meta: { title: t('route.pathName.nested1_2') },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1/index.vue'),
                name: 'RtMenu1-2-1',
                meta: { title: t('route.pathName.nested1_2_1') },
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2/index.vue'),
                name: 'RtMenu1-2-2',
                meta: { title: t('route.pathName.nested1_2_2') },
              },
            ],
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3/index.vue'),
            name: 'RtMenu1-3',
            meta: { title: t('route.pathName.nested1_3') },
          },
        ],
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index.vue'),
        name: 'RtMenu2',
        meta: { title: t('route.pathName.nested2') },
      },
    ],
  },
  {
    path: '/guide',
    component: Layout,
    redirect: '/guide',
    name: 'RtSystem',
    alwaysShow: false,
    meta: { title: '', icon: 'guide' },
    children: [
      {
        path: '',
        name: 'RtGuide',
        component: () => import('@/views/guide/index.vue'),
        meta: { title: t('route.pathName.guide') },
      },
    ],
  },
  {
    path: '/external-link',
    component: Layout,
    name: 'RtExternal',
    children: [
      {
        path: 'https://github.com/SuperCuteXiaoSi/xiaosiAdmin',
        name: 'RtGitLink',
        meta: { title: t('route.pathName.thirdParty'), icon: 'link' },
      },
    ],
  },
  {
    path: '/about',
    component: Layout,
    redirect: '/about',
    name: 'RtAdminInfo',
    alwaysShow: false,
    meta: { title: '', icon: 'about' },
    children: [
      {
        path: '',
        name: 'RtAbout',
        component: () => import('@/views/about/index.vue'),
        meta: { title: t('route.pathName.about') },
      },
    ],
  },
];

export default safeManagerRoutes;
