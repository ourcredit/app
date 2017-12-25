<template>
  <div>
    欢迎页
  </div>
</template>

<script>
import { Group, Cell } from "vux";

export default {
  components: {
    Group,
    Cell
  },
  data() {
    return {
      msg: "Hello World!"
    };
  }
};
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px;
}
</style>
