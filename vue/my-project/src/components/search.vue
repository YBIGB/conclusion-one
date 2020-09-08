<template>
  <form @submit.prevent="submitHandler">
    <input
      type="text"
      ref="myInput"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <button>搜索</button>
  </form>
</template>

<script>
export default {
  name: "Searcher",
  props: {
    value: {
      type: String,
      default: "请输入要搜索的内容",
    },
  },
  methods: {
    submitHandler() {
      console.log(this.$refs.myInput);
      this.$emit("start-search", this.$refs.myInput.value);//点击提交 让父元素执行S-S方法 并把inp数值通通过ref送过去
    },
  },
};
</script>

<style scoped></style>
