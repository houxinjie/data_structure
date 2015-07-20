/**
 *
 * Created by houxinjie on 15/7/19.
 */
function Node(data, left, right){
  this.data = data;
  this.count = 1;
  this.left = left;
  this.right = right;
  this.show = function(){
    return this.data;
  };
}

function BST(){
  this.root = null;

  this.update(data){
    var grade = this.find(data);
    grade.count++;
    return grade;
  };

  this.inOrder = function(node){
    if(node){
      this.inOrder(node.left);
      console.log(node.show() + ' ');
      this.inOrder(node.right);
    }
  };

  this.preOrder = function(node){
    if(node){
      console.log(node.show() + ' ');
      this.preOrder(node.left);
      this.preOrder(node.right);
    };
  };

  this.postOrder = function(node){
    if(node){
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.show() + ' ');
    }
  };

  this.getMin = function(current){
    current = current || this.root;
    if(!current){
      return null;
    }
    while(current.left){
      current = current.left;
    }
    return current.data;
  };

  this.getMax = function(current){
    current = current || this.root;
    if(!current){
      return null;
    }
    while(current.right){
      current = current.right;
    }
    return current.data;
  };

  this.find = function(data){
    var current = this.root;
    while(current){
      if(current.data === data){
        return current;
      }else if(data < current.data){
        current = current.left;
      }else{
        current = current.right;
      }
    }
    return null;
  };

  this.exchange = function(node){

    if(node.left){
      this.exchange(node.left);
    }

    if(node.right){
      this.exchange(node.right);
    }

    var tempNode = node.left;
    node.left = node.right;
    node.right = tempNode;


  };

  this.remove = function(data){
    this.root = this.removeNode(this.root, data);
  };

  this.removeNode = function(node, data){
    if(!node){
      return null;
    }

    if(data === node.data){

      //没有子节点
      if(!node.left && !node.right){
        return null;
      }

      if(!node.left){
        return node.right;
      }

      if(!node.right){
        return node.left;
      }

      //两个子节点
      var rightSmallest = this.getMin(node.right);
      node.data = rightSmallest;
      node.right = this.removeNode(node.right, rightSmallest);

      return node;

    }else if(data < node.data){
      node.left = this.removeNode(node.left, data);
      return node;
    }else{
      node.right = this.removeNode(node.right, data);
      return node;
    }

  };

  this.insert = function(data){
    var node = new Node(data, null, null);
    if(!this.root){
      this.root = node;
    }else{
      var current = this.root;
      var parent;
      while(true){
        parent = current;
        if(data < current.data){
          current = current.left;
          if(!current){
            parent.left = node;
            break;
          }
        }else{
          current = current.right;
          if(!current){
            parent.right = node;
            break;
          }
        }
      }
    }
  };
}

var nums = new BST;
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
//console.log('Inorder traversal: ');
//nums.inOrder(nums.root);
//nums.preOrder(nums.root);
//nums.postOrder(nums.root);

//console.log(nums.getMin())
//console.log(nums.getMax())
//console.log(nums.find(99).data);
//nums.exchange(nums.root);
//nums.inOrder(nums.root);

/*
nums.inOrder(nums.root);

nums.remove(23);

nums.inOrder(nums.root);

nums.remove(99);

nums.inOrder(nums.root);

nums.remove(3);

nums.inOrder(nums.root);
*/
