function PriorityQueue() {
  // 在PriorityQueue 重新创建了一个类： 可以理解成内部类
  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  //封装属性89
  this.items = [];
  //实现插入方法
  PriorityQueue.prototype.enqueue = function (element, priority) {
    //1 创建QuereElement对象
    var queueElement = new QueueElement(element, priority);

    //2 判断队列是否为空
    if (this.items.length == 0) {
      this.items.push(queueElement);
    } else {
      var added = false;
      for (var i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      if (!added) {
        this.items.push(queueElement);
      }
    }
  };

  // 2 从队列中删除前端元素
  PriorityQueue.prototype.dequeue = function () {
    return this.items.shift();
  };
  // 3 查看前端的元素
  PriorityQueue.prototype.front = function () {
    return this.items[0];
  };
  // 4 查看队列是否为空
  PriorityQueue.prototypw.isEmpty = function () {
    return this.items.length == 0;
  };
  // 5 查看队列中元素的个数
  PriorityQueue.prototype.size = function () {
    return this.items.length == 0;
  };
  // 6 toString方法
  PriorityQueue.prototype.toString = function () {
    var resultString = '';
    for (var i = 0; i < this.items.length; i++) {
      resultString +=
        this.items[i].elememt + '-' + this.items[i].priority + ' ';
    }
    return resultString;
  };
}

//测试代码
var pq = new PriorityQueue();

//enqueue method
pq.enqueue('abc', 111);
pq.enqueue('cba', 200);
pq.enqueue('nba', 50);
pq.enqueue('mba', 66);
alert(pq);
