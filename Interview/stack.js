//method
// function
//封装栈类
function Stack(){
  //栈中的属性
  this.items =[]

  //栈的相关操作
  // 1 将元素压入栈
  // a. method 1
  // this.push= funciton(){

  // }
  // b. method 2 -- 基于对象，更节省空间
  Stack.prototype.push = function (element) {
    this .items.push(element)
  }

  // 2 从栈中取出元素
  Stack.protorype.peek = function (){
    return this.items.pop()
  }
  // 3 查看一下栈顶元素
  Stack.prototype.isEmpty = function () {
    return this .items[this.items.length -1]
  }
  // 4 判断栈是否为空
  Stack.prototype.isEmpty = function () {
    return this.items.length == 0
  }
  // 5 获取栈中元素的个数
  Stack.prototype.size = function() {
    return this.items.length
  }
  // 6 toString method
  Stack.prototype.toString = function(){
    for
  }
}