<template>
  <div style="margin:45px auto;">
    <blur :blur-amount="40" :url="url">
      <p class="center"><img :src="url"></p>
      <p class="center">your name</p>
    </blur>
    <group>
    <cell title="钱包"  link="/money" is-link value="a"></cell>
    <cell title="收藏" link="/collection" is-link value="b"></cell>
    <cell title="卡包" link="/cards" is-link value="c"></cell>
    <cell title="表情" link="/emjo" is-link value="d"></cell>
    <cell  title="设置" is-link  link="/settings">
        <span slot="value" style="color:green;"><span style="vertical-align:middle;"></span>
         <badge text="1"></badge></span>
    </cell>
  </group>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Blur, Cell, Group, Badge } from "vux";

export default {
  components: {
    Blur,
    Flexbox,
    FlexboxItem,
    Cell,
    Group,
    Badge
  },
  data() {
    return {
      url: "https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg"
    };
  }
};
</script>

<style scoped>
.center {
  text-align: center;
  padding-top: 20px;
  color: #fff;
  font-size: 18px;
}
.center img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #ececec;
}
</style>
