import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)
const dashboard = r => require.ensure([], () => r(require('@/views/dashboard')), 'dashboard');
export default new Router({
  routes: [{
      path: "/title",
      name: "title",
      component: r => require(["@/components/title"], r)
    },
    {
      path: "/",
      name: "container",
      redirect: "/dashboard",
      component: r => require(["@/components/Container"], r),
      children: [{
        path: "/dashboard",
        name: "dashboard",
        component: dashboard
      }]
    }
  ]
})
