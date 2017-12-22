import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

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
        component: r => require(["@/views/dashboard"], r)
      }]
    }
  ]
})
