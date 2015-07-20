/**
 *
 * Created by houxinjie on 15/7/14.
 */
function Dictionary() {
  var dataStore = [];
  this.add = function (key, value) {
    dataStore[key] = value;
  };
  this.find = function (key) {
    return dataStore[key];
  };
  this.remove = function (key) {
    delete dataStore[key];
  };
  this.showAll = function () {
    for (var key in dataStore) {
      console.log(key + ' -> ' + dataStore[key]);
    }
  };
  this.count = function () {
    var n = 0;
    for (var key in dataStore) {
      n++;
    }
    return n;
  };
  this.clear = function () {
    for (var key in dataStore) {
      delete dataStore[key];
    }
  };
}

var pbook = new Dictionary;
pbook.add('Mike', '123');
pbook.add('David', '345');
pbook.add('Cynthia', '456');

console.log('Number of entries: ' + pbook.count());
pbook.showAll();

pbook.clear();
console.log('Number of entries: ' + pbook.count());
