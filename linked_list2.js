/**
 * Created by houxinjie on 15/7/13.
 */
function Node(element) {
  this.element = element;
  this.previous = null;
  this.next = null;
}

function LinkedList() {
  var head = new Node('head');
  this.find = function (item) {
    var current = head;
    while (current.element !== item) {
      current = current.next;
    }
    return current;
  };
  this.insert = function (newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    if (current.next) {
      current.next.previous = newNode;
    }
    current.next = newNode;
  };
  this.remove = function (item) {
    var current = this.find(item);
    current.previous.next = current.next;
    if (current.next) {
      current.next.previous = current.previous;
      current.next = null;
      current.previous = null;
    }
  };
  this.display = function () {
    var current = head;
    while (current.next) {
      console.log(current.next.element);
      current = current.next;
    }
  };
  this.findLast = function () {
    var current = head;
    while (current.next) {
      current = current.next;
    }
    return current;
  };
  this.displayReverse = function () {
    var current = this.findLast();
    while (current.previous) {
      console.log(current.element);
      current = current.previous;
    }
  };
}

var cities = new LinkedList();
cities.insert('yuncheng', 'head');
cities.insert('tianjin', 'yuncheng');
cities.insert('baidu', 'tianjin');
cities.insert('163', 'baidu');

cities.display();

cities.remove('tianjin');
cities.display();

cities.displayReverse();
