<template>
  <tabbar  style="position: fixed">
    <tabbar-item  link="/scan">
      <img slot="icon" selected  src="../assets/icons/a.png">
      <span slot="label">扫一扫</span>
    </tabbar-item>
      <tabbar-item  link="/dashboard">
      <img slot="icon"   src="../assets/icons/a.png">
      <span slot="label">控制台</span>
    </tabbar-item>
    <tabbar-item badge="2"  link="/my">
      <img slot="icon"  src="../assets/icons/b.png">
      <span slot="label">我的</span>
    </tabbar-item>
  </tabbar>
</template>
<style>
.add {
  height: 40px;
  width: 40px;
}
</style>
<script>
import { Tabbar, TabbarItem } from "vux";
export default {
  name: "AppFooter",
  components: {
    Tabbar,
    TabbarItem
  },
  data() {
    return {};
  }
};
</script>
