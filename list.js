/**
 *
 * Created by houxinjie on 15/7/11.
 */
function List() {
  //保存列表元素
  this.dataStore = [];
  this.listSize = 0;
  this.position = 0;
}

List.prototype = {
  length: function () {
    return this.listSize;
  },

  clear: function () {
    this.dataStore = [];
    this.listSize = 0;
    this.position = 0;
  },

  toString: function () {
    return this.dataStore.toString();
  },

  //返回当前位置元素
  getElement: function () {
    return this.dataStore[this.position];
  },

  //当前位置后插入新元素
  insert: function (element, after) {
    var insertPosition = this.find(after);
    if (insertPosition !== -1) {
      this.dataStore.splice(insertPosition + 1, 0, element);
      this.listSize++;
      return true;
    }
    return false;
  },

  //列表末尾加入新元素
  append: function (element) {
    this.dataStore.push(element);
    this.listSize++;
  },

  remove: function (element) {
    var foundAt = this.find(element);
    if (foundAt !== -1) {
      this.dataStore.splice(foundAt, 1);
      this.listSize--;
      return true;
    }
    return false;
  },

  front: function () {
    this.position = 0;
  },

  end: function () {
    this.position = this.listSize - 1;
  },

  prev: function () {
    if (this.position !== 0) {
      this.position--;
    }
  },

  next: function () {
    if (this.position !== this.listSize - 1) {
      this.position++;
    }
  },

  currentPosition: function () {
    return this.position;
  },

  moveTo: function (position) {
    this.position = position;
  },

  find: function (element) {
    return this.dataStore.indexOf(element);
  },

  contains: function (element) {
    return this.dataStore.indexOf(element) !== -1;
  },

  appendIfMax: function (newElement) {
    var isMax = this.dataStore.every(function (element) {
      return newElement > element;
    });
    if (isMax) {
      this.append(newElement);
      return true;
    }
    ;
    return false;
  },
  appendIfMin: function (newElement) {
    var isMin = this.dataStore.every(function (element) {
      return newElement < element;
    });
    if (isMin) {
      this.append(newElement);
      return true;
    }
    ;
    return false;
  }

};

var names = new List();
names.append('houxinjie');
names.append('john');
names.append('zhuqian');
names.append('iphone');
names.append('huawei');
names.append('sanxing');
names.append('gege');
names.append('erjie');
names.append('huoshao');
names.append('tianjin');

console.log(names.toString());

names.appendIfMin('a');
names.appendIfMin('zzzzzzzzzz');

console.log(names.toString());
