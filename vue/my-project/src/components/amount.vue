<template>
    <div>
        <button @click="onClick"> 已点击{{count}} 次</button>
    </div>
</template>    

<script>
export default {
    data(){
        return{
            count:0
        }
    },
    methods:{
                onClick(){
                    this.count++
                    this.$emit('count-change') //给父亲抛出事件c-c 告知count变化了
                    if(this.count%10 == 0){
                        this.$emit('ten-time',this.count) //给父亲抛出事件t-t 告知我点了十次了 并传过去一个数字
                    }
                }
            }
}
</script>
