import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)
const dashboard = r => require.ensure([], () => r(require('@/views/dashboard')), 'dashboard');
const my = r => require.ensure([], () => r(require('@/views/my/my')), 'my');
const scan = r => require.ensure([], () => r(require('@/views/scan/scan')), 'scan');
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
        },
        {
          path: "/my",
          name: "my",
          component: my
        },
        {
          path: "/scan",
          name: "scan",
          component: scan
        }
      ]
    }
  ]
})
