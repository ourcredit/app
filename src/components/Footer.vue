<template>
  <mu-paper >
    <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
      <mu-bottom-nav-item to="/movie" value="movies" title="电影" icon="ondemand_video"/>
      <mu-bottom-nav-item to="/music" value="music" title="音乐" icon="music_note"/>
      <mu-bottom-nav-item to="/book" value="books" title="图书" icon="books"/>
      <mu-bottom-nav-item to="/my" value="pictures" title="我的" icon="photo"/>
    </mu-bottom-nav>
  </mu-paper>

</template>

<script>
export default {
  data() {
    return {
      bottomNav: "movies",
      bottomNavColor: "movies"
    };
  },
  methods: {
    handleChange(val) {
      this.bottomNav = val;
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mu-tabs,
.mu-paper {
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>
