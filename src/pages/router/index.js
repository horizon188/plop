import Vue from 'vue'
import VueRouter from 'vue-router'
import {
  setTitle
} from "../utils"
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  scrollBehavior(to, from, savePosition) {
    return {
      x: 0,
      y: 0,
    }
  },
  routes: [{
      path: '/',
      name: 'Home',
      component: () => import("../pages/Home"),
      meta: {
        title: "双十一狂欢大促"
      },
      redirect: {
        name: "AprilActivity"
      }
    },
    {
      path: "/schoolgift",
      name: "Gift",
      component: () => import("../pages/school-gift"),
      meta: {
        title: "新人礼包_会计课程免费学_恒企教育"
      }
    },
    {
      path: "/april_activity",
      name: "AprilActivity",
      component: () => import("../pages/april-activity"),
      meta: {
        title: "双十一狂欢大促"
      }
    },
    {
      path: "/april_detail",
      name: "AprilDtail",
      component: () => import("../pages/april-detail"),
      meta: {
        title: "恒企网校-7天打卡"
      }
    },
    {
      path: "*",
      name: "404",
      component: () => import("../pages/not-found"),
      meta: {
        title: "恒企网校-404页面"
      }
    },
    {
      path: "/training_camp",
      name: "trainingCamp",
      component: () => import("../pages/training_camp_act"),
      meta: {
        title: "特训营活动"
      }
    },
    {
      path: "/double_eleven",
      name: "doubleEleven",
      component: () => import("../pages/double_eleven/home"),
      meta: {
        title: "双十一狂欢大促"
      }
    },
    {
      path: "/live-broadcast",
      name: "eleventLiveBroadcast",
      component: () => import("../pages/double_eleven/elevent-live-broadcast"),
      meta: {
        title: "直播"
      }
    },
    {
      path: "/addIndex",
      name: "测试",
      component: () => import("../pages/测试"),
      meta: {
        title: "双十一"
      }
    },
    {
      path: "/elevenPag/index",
      name: "双十一",
      component: () => import("../pages/eleven"),
      meta: {
        title: "Elevent"
      }
    },
    {
      path: "/goodsList/detail",
      name: "home",
      component: () => import("../pages/home/index"),
      meta: {
        title: "双十二"
      }
    },
    {
      path: "/goodsLists/add", 
      name: "name",
      component: () => import("../pages/home/test"),
      meta: {
        title: "t测试"
      }
    },
    {
      path: "/goods/detail", 
      name: "名称",
      component: () => import("../pages/goods/index"),
      meta: {
        title: "双十额"
      }
    },
    //---ROUTER_IMPORT--- // 这个标记不能去掉
  ]
})

router.beforeEach((to, from, next) => {
  setTitle(to.meta.title)
  next()
})
export default router