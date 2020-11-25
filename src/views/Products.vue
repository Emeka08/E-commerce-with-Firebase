<template>
  <div class="home align-items-center justify-content-center d-flex">
    <div v-bind="iceCreamInfos" :key="iceCream.id" v-for="iceCream in oneIceCreamInfo" class="item rounded">
      <div class="d-flex justify-content-around align-items-center mt-3">
        <div>
          <img :src="iceCream.img" alt="">
        </div>
        <div class="info pr-4">
          <div class="d-flex justify-content-between align-items-center mt-2">
            <span class="index mt-1">{{iceCream.id}}</span>
            <div>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i v-bind:class="iceCream.star1"></i>
              <i v-bind:class="iceCream.star2"></i>
            </div>
          </div>
          <h2 class="text-center mb-0 mt-2">Flavor: <span> {{iceCream.name}}({{iceCream.cup}}) </span></h2>
          <p class="text-center">Price: <span> {{iceCream.price}} </span></p>
          <div class="line"></div>
        </div>
      </div>
      <div>
        <button class="btn btn-success btn-block">Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
import { iceCreamInfos } from '../props'

export default {
  data () {
    return {
      iceCreamInfos,
      index: 9,
      bad: parseInt(this.$router.currentRoute.path)
    }
  },
  computed: {
    oneIceCreamInfo: function () {
      let index = this.bad
      return this.iceCreamInfos.filter(function (iceCream) {
        return iceCream.id === index
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  width: 330px;
  height: 220px;
  cursor: pointer;
  -webkit-box-shadow: 4px 4px 5px 0px rgba(50, 50, 50, 0.2);
  -moz-box-shadow: 4px 4px 5px 0px rgba(50, 50, 50, 0.2);
  box-shadow: 4px 4px 5px 0px rgba(50, 50, 50, 0.2);
  background-color: #f0f0f0;
}
.item:hover {
  background-color: #f5f5f5;
}
.info {
  width: 85%;
  height: 100%;
  /* padding-top: .8rem; */
}
.wrap {
  flex-wrap: wrap;
}
img {
  /* background-color: #FFD166;
  padding: .5rem; */
  width: 120px;
}
.index{
  background-color: #E8748F;
  padding: 0px 3px;
  height: 19px;
  font-size: 13px;
  border: none;
  border-radius: 2px;
  color: white;
  width: 17px;
  box-sizing: border-box;
  text-align: center;
}
.far, .fas {
  color: #FFD166;
  font-size: 13px;
}
h2 {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 2px;
}
h2 > span, p > span {
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0;
}
p {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1.5px;
}
p > span {
  font-size: 10px;
}
.line {
  width: 100%;
  height: 3px;
  background-color: #E8748F;
}
@media (min-width: 400px) {
  h2 {
    font-size: 22px;
    line-height: 10px;
    font-weight: 600;
    padding-top: .7rem;
  }
  p {
    font-size: 17px;
  }
}
</style>
