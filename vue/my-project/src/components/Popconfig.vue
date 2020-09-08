<template>
    <div v-show="ifShow" id="box">
        <div id="c3"></div>
        <h4>{{msg}}</h4>
        <span>取消</span>
        <button>确认</button>
         <span class="caret"></span>
    </div>
</template>

<script>
export default {
    props:['ifShow','msg']
}
</script>
<style lang="css" scoped>
    #box{
        position: absolute;
        top: 450px;
        background: blanchedalmond;
        box-shadow: black 0 0 5px;
        width: 150px;
        height: 150px;  
    }
    span,button{
        position: relative;
        margin: 10px;
        top: 50px;
        left: 40px;
    }
     .caret{
        border-top: none;
        border-left: 10px solid #ff000000;
        border-right: 10px solid #0000ff00;
        border-bottom: 10px solid white;
        display: inline-block;
        position: absolute;
        left: 20px;
        top: -18px;
    }
</style>