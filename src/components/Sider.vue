<template>
  <mu-drawer :docked="false" left :open="open" >
    <mu-appbar title="Muse UI"/>
    <mu-list>
      <mu-list-item title="Menu Item 1"/>
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
