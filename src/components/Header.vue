<template>
    <mu-appbar class="header"  :title="title">
      <mu-icon-button  @click="toggle" icon="menu" slot="left" />
      <mu-icon-menu :value="theme" @change="changetheme" icon="more_vert" slot="right">
        <mu-menu-item title="Light" value="light"/>
        <mu-menu-item title="Dark" value="dark"/>
        <mu-menu-item title="Carbon" value="carbon"/>
        <mu-menu-item title="Teal" value="teal"/>
      </mu-icon-menu>
    </mu-appbar>

</template>

<script>
import { mapState, mapMutations } from "vuex";
import light from "!raw-loader!muse-ui/dist/theme-default.css";
import dark from "!raw-loader!muse-ui/dist/theme-dark.css";
import carbon from "!raw-loader!muse-ui/dist/theme-carbon.css";
import teal from "!raw-loader!muse-ui/dist/theme-teal.css";
export default {
  name: "Header",
  data() {
    return {
      theme: "carbon",
      themes: {
        light,
        dark,
        carbon,
        teal
      }
    };
  },
  methods: {
    ...mapMutations(["updateOpen"]),
    toggle() {
      this.updateOpen(!this.open);
    },
    changetheme(item) {
      this.theme = item;
      const styleEl = this.getThemeStyle();
      styleEl.innerHTML = this.themes[item] || "";
    },
    getThemeStyle() {
      const themeId = "muse-theme";
      let styleEl = document.getElementById(themeId);
      if (styleEl) return styleEl;
      styleEl = document.createElement("style");
      styleEl.id = themeId;
      document.body.appendChild(styleEl);
      return styleEl;
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
