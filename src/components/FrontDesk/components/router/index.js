import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/content/components/index'
import indexTabs_1 from '@/pages/content/components/indexTabs_1'
import indexTabs_2 from '@/pages/content/components/indexTabs_2'
import indexTabs_3 from '@/pages/content/components/indexTabs_3'
import indexTabs_4 from '@/pages/content/components/indexTabs_4'
import recourse from '@/pages/content/components/recourse'
import serverRecourse from '@/pages/content/components/serverRecourse'
import dataResource from '@/pages/content/components/dataResource'
import SampleApp from '@/pages/content/components/SampleApp'
import SampleAppindex from '@/pages/content/components/SampleAppindex'
import help from '@/pages/content/components/help'
import HelpIndex from '@/pages/content/components/HelpIndex'
import DeveloperCenter from '@/pages/content/components/DeveloperCenter'
import Login from '@/pages/content/components/Login'
import Register from '@/pages/content/components/Register'
import announcement from '@/pages/content/components/announcement'
import appinfor from '@/pages/content/components/appinfor'
import ResourceDetails from '@/pages/content/components/ResourceDetails'
import digitalMap from '@/pages/content/components/digitalMap'
import mapIndex from '@/pages/content/components/mapIndex'
import ThematicMap from '@/pages/content/components/ThematicMap'
import annDetailsIndex from '@/pages/content/components/annDetailsIndex'
import annDetails from '@/pages/content/components/annDetails'
import DeveloperCenterIndex from '@/pages/content/components/DeveloperCenterIndex'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/index',
          name: 'indexTabs_1',
          component: indexTabs_1
        },
        {
          path: '/index/indexTabs2',
          name: 'indexTabs_2',
          component: indexTabs_2
        },
        {
          path: '/index/indexTabs3',
          name: 'indexTabs_3',
          component: indexTabs_3
        },
        {
          path: '/index/indexTabs4',
          name: 'indexTabs_4',
          component: indexTabs_4
        },
      ]
    },
    {
      path: '/recourse',
      name: 'recourse',
      component: recourse,
      children: [
        {
          path: '/recourse/serverRecourse',
          name: 'serverRecourse',
          component: serverRecourse,
        },
        {
          path: '/recourse/dataResource',
          name: 'serverRecourse',
          component: dataResource,
        },
        {
          path: '/recourse/ResourceDetails',
          name: 'ResourceDetails',
          component: ResourceDetails,
        },
      ]
    },
    {
      path: '/SampleApp',
      name: 'SampleApp',
      component: SampleApp,
      children: [
        {
          path: '/SampleApp/SampleAppindex',
          name: 'SampleAppindex',
          component: SampleAppindex,
        },
      ]
    },
    {
      path: '/help',
      name: 'help',
      component: help,
      children: [
        {
          path: '/help/HelpIndex',
          name: 'HelpIndex',
          component: HelpIndex,
        },
      ]
    },
    {
      path: '/DeveloperCenter',
      name: 'DeveloperCenter',
      component: DeveloperCenter,
      children: [
        {
          path: '/DeveloperCenter/DeveloperCenterIndex',
          name: 'DeveloperCenterIndex',
          component: DeveloperCenterIndex,
        },
      ]
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/announcement',
      name: 'announcement',
      component: announcement,
    },
    {
      path: '/appinfor',
      name: 'appinfor',
      component: appinfor,
    },
    {
      path: '/digitalMap',
      name: 'digitalMap',
      component: digitalMap,
      children: [
        {
          path: '/digitalMap/mapIndex',
          name: 'mapIndex',
          component: mapIndex,
        }
      ]
    },
    {
      path: '/ThematicMap',
      name: 'ThematicMap',
      component: ThematicMap,
    },
    {
      path: '/annDetails',
      name: 'annDetails',
      component: annDetails,
      children: [
        {
          path: '/annDetails/annDetailsIndex',
          name: 'annDetailsIndex',
          component: annDetailsIndex,
        },
      ]
    },
  ]
})
