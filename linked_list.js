/**
 *
 * Created by houxinjie on 15/7/13.
 */
function Node(element){
  this.element = element;
  this.next = null;
}

function LinkedList(){
  var head = new Node('head');
  this.find = function(item){
    var current = head;
        while(current.element !== item){
            current = current.next;
        }
        return current;
    };
    this.insert = function(newElement, item){
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    };
    this.findPrevious = function(item){
        var current = head;
        while(current.next && current.next.element !== item){
            current = current.next;
        }
        return current;
    };
    this.remove = function(item){
        var previous = this.findPrevious(item);
        if(previous.next){
            previous.next = previous.next.next;
        }
    };
    this.display = function(){
        var current = head;
        while(current.next !== null){
            console.log(current.next.element);
            current = current.next;
        }
    };
}

var cities = new LinkedList();
cities.insert('yuncheng', 'head');
cities.insert('tianjin', 'yuncheng');
cities.insert('baidu', 'tianjin');
cities.display();

cities.remove('tianjin');
cities.display();
