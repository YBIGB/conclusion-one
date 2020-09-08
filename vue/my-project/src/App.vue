<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <br /><br /><br />

    <button2></button2>
    <br /><br /><br />

    总和为：{{ amount }}
    <amount @count-change="amount++"></amount>
    <amount @count-change="amount++"></amount>
    <amount @count-change="amount++"></amount>
    <br /><br /><br />

    <search v-model="searcherTxt" @start-search="startSearch"></search>
    {{ searcherTxt }}
    <br /><br /><br />
  
    <stars ></stars>   
    <br /><br /><br />

    <button @click="clickhandle">退出登录</button>
    <Popconfig :ifShow="show" msg="确定要退出吗？" :style="{left:l+'px'}"></Popconfig> 
  </div>
</template>

<script>
import button2 from "./components/button2.vue";
import amount from "./components/amount.vue";
import search from "./components/search.vue";
import stars from "./components/stars.vue";
import Popconfig from "./components/Popconfig.vue";

export default {
  name: "App",
  components: {
    button2,
    amount,
    search,
    stars,
    Popconfig,
  },
  data() {
    return {
      amount: 0,
      searcherTxt: "",
      show:false,
      l:0
    };
  },
  methods: {
    startSearch: function(txt) {
      alert("开始搜索: " + txt);
    },
    clickhandle(event){
      this.show = !this.show;
     console.log(event.pageX)
     this.l = event.pageX
    }
  },
};
</script>

<style lang="css" scope>

</style>