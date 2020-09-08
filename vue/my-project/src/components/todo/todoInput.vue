<template>
  <form @submit.prevent="add">
    <input
      type="text"
      ref="myInput"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <button>提交</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    add() {
      this.$emit("addtodo", this.$refs.myInput.value);
      this.$refs.myInput.value = ''
    },
  },
};
</script>
