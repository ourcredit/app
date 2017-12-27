<template>
  <div>
    <blur :blur-amount="40" :url="url">
      <p class="center">
        <img :src="url">
      </p>
      <p class="center">your name</p>
    </blur>
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <x-input placeholder="用户名">
        <img slot="restricted-label" style="display:inline-block;vertical-align:middle;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000"
          width="24" height="24">
      </x-input>
      <x-input placeholder="密码">
        <img slot="restricted-label" style="display:inline-block;vertical-align:middle;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000"
          width="24" height="24">
      </x-input>
      <flexbox>
        <flexbox-item>
          <x-button link="/dashboard" :gradients="['#1D62F0', '#19D5FD']">登陆</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button link="/register"  :gradients="['#19D5FD','#1D62F0' ]">注册</x-button>
        </flexbox-item>
      </flexbox>

    </group>
  </div>
</template>

<script>
import {
  Flexbox,
  FlexboxItem,
  Blur,
  Cell,
  Group,
  Badge,
  XInput,
  XButton
} from "vux";

export default {
  components: {
    Blur,
    Flexbox,
    FlexboxItem,
    Cell,
    Group,
    Badge,
    XInput,
    XButton
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
