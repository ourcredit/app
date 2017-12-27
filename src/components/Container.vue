<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
    <app-sider ></app-sider>
  </div>
</template>

<script>
import AppHeader from "./Header";
import AppFooter from "./Footer";
import AppSider from "./Sider";
export default {
  name: "Dashboard",
  data() {
    return {
      msg: ""
    };
  },
  components: {
    AppHeader,
    AppFooter,
    AppSider
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
