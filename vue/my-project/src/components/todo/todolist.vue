<template>
    <div>
        <todoInput  @addtodo='addtodo'></todoInput>
        <todoContent v-for="(item,index) in todos" :todos="item" :key="index" @deltodo="del(index)" ></todoContent>
        <p v-show="show">now we have nothing to delete but you</p>
    </div>
</template>

<script>
import todoContent from './todoContent'
import todoInput from './todoInput'

export default {
    name:'todolist',
    components:{
        todoContent,todoInput
    },
    data() {
        return {
            todos:['asd','dsa','aaa'],
            show:false
        }
    },
    methods: {
        addtodo(txt){
            // console.log(txt)
            this.todos.push(txt)
            this.show=false
        },
        del(index){
            this.todos.splice(index,1)
            if(this.todos.length==0){
                this.show=true
            }
        }
    },

}
</script>