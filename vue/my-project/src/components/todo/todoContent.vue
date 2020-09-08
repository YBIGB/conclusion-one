<template>
    <div>
        <span >{{todos}}</span>
        <button @click="del">X</button>
    </div>
</template>

<script>
export default {
   props:['todos'],
   methods: {
       del(){
           this.$emit("deltodo")
       }
   },
}
</script>