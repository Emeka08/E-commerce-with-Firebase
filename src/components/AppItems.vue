<template>
  <div class="d-flex wrap justify-content-center">
    <div class="" v-bind="iceCreamInfos" :key="iceCream.id" v-for="(iceCream, index) in iceCreamInfos" >
      <router-link :to="{ name: 'Products', params: { id: iceCream.id } }" class="text-dark">
        <div class="d-flex justify-content-around align-items-center item rounded mb-3 mx-2">
          <div class="info">
            <div class="d-flex justify-content-between align-items-center">
              <span class="index mt-1">{{index + 1}}</span>
              <div>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i v-bind:class="iceCream.star1"></i>
                <i v-bind:class="iceCream.star2"></i>
              </div>
            </div>
            <h2 class="text-center mb-0 mt-1">Flavor: <span> {{iceCream.name}}({{iceCream.cup}}) </span></h2>
            <!-- <p class="text-center">{{iceCream.p}}</p> -->
            <p class="text-center">Price: <span> {{iceCream.price}} </span></p>
            <div class="line"></div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { iceCreamInfos } from '../props'

export default {
  data () {
    return {
      iceCreamInfos
    }
  }
}
</script>

<style scoped>
.l {
  display: flex !important;
}
.item {
  width: 330px;
  height: 130px;
  cursor: pointer;
  -webkit-box-shadow: 4px 4px 5px 0px rgba(50, 50, 50, 0.2);
  -moz-box-shadow: 4px 4px 5px 0px rgba(50, 50, 50, 0.2);
  box-shadow: 4px 4px 5px 0px rgba(50, 50, 50, 0.2);
  background-color: #f0f0f0;
}
.item:hover {
  /* border: 1px solid #FFD166; */
  background-color: #f5f5f5;
}
.info {
  width: 85%;
  height: 100%;
  padding-top: .8rem;
}
.wrap {
  flex-wrap: wrap;
  /* padding-bottom: 45px; */
}
img {
  /* width: 100px;
  height: 100px; */
  background-color: #FFD166;
  padding: .5rem;
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
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 2px;
}
h2 > span, p > span {
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0;
}
p {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1.5px;
  /* padding-bottom: .5rem; */
}
p > span {
  font-size: 12px;
}
.line {
  width: 100%;
  height: 3px;
  /* position: fixed; */
  background-color: #E8748F;
}
@media (min-width: 400px) {
  h2 {
    font-size: 22px;
    line-height: 10px;
    /* padding-top: 1rem; */
    font-weight: 600;
    padding-top: .7rem;
  }
  p {
    font-size: 17px;
    /* line-height: 13px; */
  }
}
</style>
