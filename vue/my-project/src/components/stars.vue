<template>
  <div>
    <div id="starBg" @click="lengthChange"></div>
    <div id="box">
      <div id="star" :style="{ width: x * 30 + 'px' }"></div>
    </div>

    <input
      type="number"
      step="0.5"
      min="0"
      max="5"
      v-model="x"
      @change="inputChange"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "请输入要搜索的内容",
    },
  },
  data() {
    return {
      x: 0,
    };
  },
  methods: {
    lengthChange(event) {
      var len = event.offsetX;
      this.x = Math.ceil(len / 30);
    },
    starsChange() {
      this.$emit("stars-change", this.$refs.myInput.value);
    },
    inputChange() {
      var f = this.x % 1;
      console.log(f);
      if (f !== 0.5) {
        this.x = Math.round(this.x);
      }
      if (this.x > 5) {
        this.x = 5;
      }
      if (this.x < 0) {
        this.x = 0;
      }
    },
  },
};
</script>

<style scoped>
#star {
  height: 30px;
  background: url(../../public/img/star48_on.png);
  background-size: 30px;
}
#starBg {
  height: 30px;
  width: 150px;
  background: url(../../public/img/star48_off.png);
  background-size: 30px;
  position: absolute;
  cursor: pointer;
}
#box {
  height: 30px;
  width: 150px;
  overflow: hidden;
}
</style>
