/**
 *
 * Created by houxinjie on 15/7/19.
 */
function HashTable(){

  var table = new Array(137);

  this.simpleHash = function(data){
    var total = 0;
    for(var i = 0; i < data.length; i++){
      total += data.charCodeAt(i);
    }
    return total % table.length;
  };


  this.betterHash = function(data){
    var total = 0;
    var H = 37;
    for(var i = 0; i < data.length; i++){
      total += H * total + data.charCodeAt(i);
    }
    return total % table.length;
  };

  this.put = function(data){
    var position = this.betterHash(data);
    if(!table[position]){
      table[position] = data;
    }else{
      position++;
      while(table[position]){
        position++;
      }
      table[position] = data;

    }
  };
  this.showDistro = function(){
    for(var i = 0; i < table.length; i++){
      if(table[i]){
        console.log(i + ": " + table[i]);
      }
    }
  };


}

var hashTable = new HashTable();
var someNames = ['David', 'Jennifer', 'Donnie', 'Raymond', 'Cynthia', 'Mike', 'Clayton', 'Danny', 'Jonathan'];
for(var i = 0; i < someNames.length; i++){
  hashTable.put(someNames[i]);
}
hashTable.showDistro();
