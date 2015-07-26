/**
 *
 * Created by houxinjie on 15/7/26.
 */
function CArray(numElements){
  var dataStore = [];
  var pos = 0;
  for(var i = 0; i < numElements; i++){
    dataStore[i] = i;
  }
  this.insert = function(element){
    dataStore[pos++] = element;
  };

  this.toString = function(){
    var string = '';
    for(var i = 0; i < dataStore.length; i++){
      string += dataStore[i] + ' ';
      if(i > 0 && i % 10 === 0){
        string += "\n";
      }
    }
    return string;
  };

  this.clear = function(){
    for(var i = 0; i < dataStore.length; i++){
      dataStore[i] = 0;
    }
  };

  this.setData = function(){
    for(var i = 0; i < numElements; i++){
      dataStore[i] = Math.floor(Math.random() * (numElements + 1));
    }
  };

  this.swap = function(array, index1, index2){
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  };


  //冒泡排序
  this.bubbleSort = function(){
    var numElements = dataStore.length;
    for(var outer = numElements; outer >= 2; outer--){
      for(var inner = 0; inner <= outer - 1; inner++){
        if(dataStore[inner] > dataStore[inner + 1]){
          this.swap(dataStore, inner, inner + 1);
          console.log(this.toString());
        }
      }
    }
  };

  //选择排序
  this.selectionSort = function(){
    var min;
    for(var outer = 0; outer < dataStore.length - 1; outer++){
      min = outer;
      for(var inner = outer + 1; inner < dataStore.length; inner++){
        if(dataStore[inner] < dataStore[min]){
          min = inner;
        }
      }
      this.swap(dataStore, outer, min);
      console.log(this.toString());
    }
  };

  this.insertionSort = function(){
    var inner;
    var temp;
    for(var outer = 1; outer < dataStore.length; outer++){
      temp = dataStore[outer];
      inner = outer;
      while(inner > 0 && (dataStore[inner - 1] >= temp)){
        dataStore[inner] = dataStore[inner - 1];
        inner--;
      }
      dataStore[inner] = temp;
      console.log(this.toString());
    }
  };
}

//12-2
/*
var myNums = new CArray(100);
myNums.setData();
console.log(myNums.toString());
*/


//12-2-1
/*
var myNums = new CArray(10);
myNums.setData();
console.log(myNums.toString());
myNums.bubbleSort();
console.log(myNums.toString());
*/

/*
//12-2-2
var myNums = new CArray(10);
myNums.setData();
console.log(myNums.toString());
myNums.selectionSort();
*/

//12-2-2
var myNums = new CArray(10);
myNums.setData();
console.log(myNums.toString());
myNums.insertionSort();
