<template>
    <mu-appbar class="header"  :title="title">
      <mu-icon-button @click="toggle" icon="menu" slot="left" />
      <mu-icon-menu icon="more_vert" slot="right">
        <mu-menu-item title="菜单 1" />
        <mu-menu-item title="菜单 2" />
        <mu-menu-item title="菜单 3" />
        <mu-menu-item title="菜单 4" />
        <mu-menu-item title="菜单 5" />
      </mu-icon-menu>
    </mu-appbar>

</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["updateOpen"]),
    toggle() {
      this.updateOpen(!this.open);
    }
  },
  computed: {
    ...mapState({
      open: state => state.open
    }),
    ...mapState({
      title: state => state.title
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 100;
}
</style>
