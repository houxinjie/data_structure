/**
 *
 * Created by houxinjie on 15/7/19.
 */
function Node(data, left, right){
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = function(){
    return this.data;
  };
}

function BST(){
  this.root = null;
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

  this.getMin = function(){
    var current = this.root;
    while(current.left){
      current = current.left;
    }
    return current.data;
  };

  this.getMax = function(){
    var current = this.root;
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
  }

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
console.log(nums.find(99).data);
