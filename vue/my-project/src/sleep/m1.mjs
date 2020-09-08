export var lastName = '张'
export var firstName = '三'

var sex = 'man'
var age = 18
export{sex,age }

var role = '管理员'
export default '管理员'
export default "启用"

export function sayLove(){
    console.log('i love you');
}
function sayLove100(){
    console.log('i love you * 100');
}
export {sayLove100}