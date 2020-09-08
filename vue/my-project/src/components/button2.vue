<template>
    <button @click="sum">
        点击了{{count}}次
    </button>
</template>

<script>
export default {
    data:function(){
        return{
            count:0
        }
    },
    methods: {
        sum(){
            this.count++
        }
    },
}
</script>