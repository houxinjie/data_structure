/**
 *
 * Created by houxinjie on 15/7/19.
 */
function Set(){
  var dataStore = [];
  this.dataStore = dataStore;
  this.add = function(data){
    if(dataStore.indexOf(data) === -1){
      dataStore.push(data);
      return true;
    }
    return false;
  };

  this.remove = function(data){
    var position = dataStore.indexOf(data);
    if(position !== -1){
      dataStore.splice(position, 1);
      return true;
    }
    return false;
  };

  this.show = function(){
    return dataStore;
  };

  this.contains = function(data){
    return dataStore.indexOf(data) !== -1;
  };

  this.union = function(set){
    var tempSet = new Set;
    for(var i = 0; i < dataStore.length; i++){
      tempSet.add(dataStore[i]);
    }
    for(var i = 0; i < set.dataStore.length; i++){
      if(!tempSet.contains(set.dataStore[i])){
        tempSet.add(set.dataStore[i]);
      }
    }
    return tempSet;
  };

  this.intersect = function(set){
    var tempSet = new Set;
    for(var i = 0; i < dataStore.length; i++){
      if(set.contains(dataStore[i])){
        tempSet.add(dataStore[i]);
      }
    }
    return tempSet;
  };

  this.size = function(){
    return dataStore.length;
  }

  this.subset = function(set){
    if(this.size() > set.size()){
      return false;
    }else{
      for(var i in dataStore){
        if(!set.contains(dataStore[i])){
          return false;
        }
      }
    }
    return true;
  };

  this.difference = function(set){
    var tempSet = new Set;
    for(var i = 0; i < dataStore.length; i++){
      if(!set.contains(dataStore[i])){
        tempSet.add(dataStore[i]);
      }
    }
    return tempSet;
  }

}


/*
var names = new Set;
names.add('David');
names.add('Jennifer');
names.add('Cynthia');
names.add('Mike');
names.add('Raymond');
if(names.add('Mike')){
  console.log('Mike added');
}else{
  console.log("Can't add Mike, must already be in set");
}

console.log(names.show());

var removed = 'Mike';
if(names.remove(removed)){
  console.log(removed + ' removed');
}else{
  console.log(removed + ' not removed');
}

names.add('Clayton');
console.log(names.show());
removed = 'Alisa';
if(names.remove(removed)){
  console.log(removed + ' removed');
}else{
  console.log(removed + ' not removed');
}

*/

/*
var cis = new Set;
cis.add('Mike');
cis.add('Clayton');
cis.add('Jennifer');
cis.add('Raymond');
var dmp = new Set;
dmp.add('Raymond');
dmp.add('Cynthia');
dmp.add('Jonathan');
var it = new Set;
it = cis.union(dmp);
console.log(it.show());
*/

/*
var cis = new Set;
cis.add('Mike');
cis.add('Clayton');
cis.add('Jennifer');
cis.add('Raymond');
var dmp = new Set;
dmp.add('Raymond');
dmp.add('Cynthia');
dmp.add('Jonathan');
var it = cis.intersect(dmp);
console.log(it.show());
*/

/*
var it = new Set;
it.add('Cythia');
it.add('Clayton');
it.add('Jennifer');
it.add('Danny');
it.add('Jonathan');
it.add('Terrill');
it.add('Raymond');
it.add('Mike');
var dmp = new Set;
dmp.add('Cythia');
dmp.add('Raymond');
dmp.add('Jonathan');

if(dmp.subset(it)){
  console.log('DMP is a subset of IT');
}else{
  console.log('DMP is not a subset of IT');
}

dmp.add('houxinjie');
if(dmp.subset(it)){
  console.log('DMP is a subset of IT');
}else{
  console.log('DMP is not a subset of IT');
}
*/

var cis = new Set;
var it = new Set;
cis.add('Clayton');
cis.add('Jennifer');
cis.add('Danny');
it.add('Bryan');
it.add('Clayton');
it.add('Jennifer');
var diff = cis.difference(it);

console.log(diff.show());

