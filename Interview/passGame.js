// passing game 击鼓传花
function passGame(nameList, num) {
  // 1 创建一个队列结构
  var queue = new queue();
  // 2 将所有人依次加入到队列中
  for (var i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }
  // 3 开始数数字
  while (queue.size() > 1) {
    // 不是num的时候，重新加入到队列的末尾
    // 是num 这个数字的时候，将其从队列中删除
    // 3.1.num 数字之前的人重新放到队列的末尾
    for (var i = 0; i < num - 1; i++) {
      queue.enqueue(queue.dequeue());
    }
    // 3.2 num对应这个人直接从队列中删除
    queue.dequeue();

  }
  // 4 获取剩下的那个人
  alert(queue.size())
  var endName =queue.front()
  alert( "last one is " + endName)

  return nameList.indexOf(endName)
}
// 测试
names = ['Lily', 'Lucy', 'Tom','Mike','John']
alert(passGame(names,3))