<template>
  <mu-drawer :docked="false" left :open="open" >
    <mu-appbar title="个人详情"/>
    <mu-list>
      <mu-list-item title="姓名">
        <mu-avatar slot="left" src="static/images/uicon.jpg" />
      </mu-list-item>
      <mu-list-item title="Menu Item 2"/>
      <mu-list-item title="Menu Item 3"/>
      <mu-list-item @click.native="toggle" title="Close"/>
    </mu-list>
  </mu-drawer>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
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
    })
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
