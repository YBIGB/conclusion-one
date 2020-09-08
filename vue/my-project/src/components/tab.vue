<template>
    <div>
         <ul>
            <li @click="select=1,change(1)" :class="{ active:select==1}">tab1</li>
            <li @click="select=2,change(2)" :class="{ active:select==2}">tab2</li>
            <li @click="select=3,change(3)" :class="{ active:select==3}">tab3</li>
            <div class="line" :style="{left:lineX+'px',transition:'all ease-in-out .3s'}"></div>
        </ul>

        <transition tag="div" class="wrap">
            <div key=1 v-if="select==1" class="content d1">1</div>
            <div key=2 v-if="select==2" class="content d2">2</div>
            <div key=3 v-if="select==3" class="content d3">3</div>
        </transition>
    </div>
</template>
<script>
export default {
    name:'Tab',
    data(){
        return{
             select: 1,
             lineX: 0
        }
    },
    methods: {
        change(index) {
            if (index == 1) {
                this.lineX = 0;
            } else if (index == 2) {
                this.lineX = 82;
            } else {
                this.lineX = 164;
            }
            // console.log(e);
        },
    }
}
</script>
<style lang="css" scoped>
 ul {
    list-style: none;
    position: relative;
    padding: 0;
    overflow: hidden;
    margin: 0;
}

ul li {
    float: left;
    width: 80px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    /* color: aquamarine; */
    background-color: #bfa;
    border-radius: 10px 10px 0 0;
    border: 1px solid rgb(132, 148, 87);
}

.active {
    background-color: rgba(129, 172, 29, 0.514);
    /* border-bottom: 2px solid #ff8888; */
}

.line {
    width: 78px;
    border: 2px solid #741d1d;
    position: absolute;
    top: 28px;
}

.content {
    width: 360px;
    height: 400px;
    position: absolute;
}

.d1 {
    background-color: rgb(15, 69, 102);
}

.d2 {
    background-color: rgb(39, 40, 66);
}

.d3 {
    background-color: rgb(233, 33, 233);
}

.wrap {
    width: 360px;
    position: relative;
}

.v-enter {
    opacity: 0;
    left: 60px;
}

.v-leave-to {
    opacity: 0;
}
/* 动画结束 */

.v-enter-to {
    opacity: 1;
    left: 0;
}

.v-leave {
    opacity: 1;
}

.v-enter-active,
.v-leave-active {
    transition: all 1s;
}
</style>