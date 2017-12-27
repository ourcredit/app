<template>
<div class="gridlist-demo-container">
  <mu-grid-list class="gridlist-demo">
    <mu-sub-header>图片展示</mu-sub-header>
    <mu-grid-tile v-for="tile, index in list" :key="index">
      <img :src="tile.image"/>
      <span slot="title">{{tile.title}}</span>
      <span slot="subTitle">by <b>{{tile.author}}</b></span>
      <mu-icon-button icon="star_border" slot="action"/>
    </mu-grid-tile>
  </mu-grid-list>
</div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          image: "static/images/breakfast.jpg",
          title: "Breakfast",
          author: "Myron"
        },
        {
          image: "static/images/burger.jpg",
          title: "Burger",
          author: "Linyu"
        },
        {
          image: "static/images/camera.jpg",
          title: "Camera",
          author: "ruolin"
        },
        {
          image: "static/images/hats.jpg",
          title: "Hats",
          author: "kakali"
        },
        {
          image: "static/images/honey.jpg",
          title: "Honey",
          author: "yuyang"
        },
        {
          image: "static/images/morning.jpg",
          title: "Morning",
          author: "mokayi"
        },
        {
          image: "static/images/vegetables.jpg",
          title: "Vegetables",
          author: "NUyyyyyyy"
        },
        {
          image: "static/images/water-plant.jpg",
          title: "water",
          author: "TDDyyyyyyy"
        }
      ]
    };
  }
};
</script>

<style>
.gridlist-demo-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.gridlist-demo {
  width: 500px;
  height: 450px;
  overflow-y: auto;
}
</style>
