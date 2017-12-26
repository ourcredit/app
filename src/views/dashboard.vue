<template>
  <div>
     <swiper :list="demo03_list"
      auto
      style="margin:0 auto;"
       height="180px"
        dots-class="custom-bottom"
         dots-position="center"></swiper>
     <panel header="商品列表" :footer="footer" :list="list" type="5"></panel>

  </div>
</template>

<script>
import { Grid, GridItem, Swiper, Panel } from "vux";
const imgList = [
  "http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff",
  "http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff",
  "http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff"
];

const demoList = imgList.map(one => ({
  url: "javascript:",
  img: one
}));
export default {
  components: {
    Grid,
    GridItem,
    Swiper,
    Panel
  },
  data() {
    return {
      msg: "Hello World!",
      demo03_list: demoList,
      list: [
        {
          src: "http://somedomain.somdomain/x.jpg",
          fallbackSrc: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
          title: "标题一",
          desc: "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
          url: "/component/cell"
        },
        {
          src: "http://somedomain.somdomain/x.jpg",
          fallbackSrc: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
          title: "标题一",
          desc: "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
          url: "/component/cell"
        },
        {
          src: "http://somedomain.somdomain/x.jpg",
          fallbackSrc: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
          title: "标题一",
          desc: "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
          url: "/component/cell"
        },
        {
          src: "http://somedomain.somdomain/x.jpg",
          fallbackSrc: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
          title: "标题一",
          desc: "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
          url: "/component/cell"
        },
        {
          src: "http://somedomain.somdomain/x.jpg",
          fallbackSrc: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
          title: "标题一",
          desc: "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
          url: "/component/cell"
        },
        {
          src: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
          title: "标题二",
          desc: "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
          url: {
            path: "/component/radio",
            replace: false
          },
          meta: {
            source: "来源信息",
            date: "时间",
            other: "其他信息"
          }
        }
      ],
      footer: {
        title: "显示更多",
        url: "http://vux.li"
      }
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
