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
        console.log('Hash value: ' + data + ' -> ' + total);
        return total % table.length;
    };


    this.betterHash = function(data){
        var total = 0;
        var H = 31;
        for(var i = 0; i < data.length; i++){
            total += H * total + data.charCodeAt(i);
        }
        console.log(total);
        return total % table.length;
    };

    this.put = function(key, data){
        var position = this.betterHash(key);
        //var position = this.simpleHash(data);
        table[position] = data;
    };
1
    this.showDistro = function(){
        var n = 0;
        for(var i = 0; i < table.length; i++){
            if(table[i]){
                console.log(i + ": " + table[i]);
            }
        }
    };

    this.get = function(key){
        return table[this.betterHash(key)];
    };

}


/*
var someNames = ['David', 'Jennifer', 'Donnie', 'Raymond', 'Cynthia', 'Mike', 'Clayton', 'Danny', 'Jonathan'];
var hashTable = new HashTable();
for(var i = 0; i < someNames.length; i++){
    hashTable.put(someNames[i]);
}
hashTable.showDistro();
*/


/*
function getRandomInt(min, max){
    return Math.floor(Math.random() * (max -min + 1)) + min;
}

function genStuData(array){
    for(var i = 0; i < array.length; i++){
        var num = '';
        for(var j = 0; j < 10; j++){
            num += Math.floor(Math.random() * 10);
        }
        num += getRandomInt(50, 100);
        array[i] = num;
    }
}

var numStudents = 10;
var arraySize = 97;
var idLen = 9;
var students = new Array(numStudents);
genStuData(students);
console.log('Students data: ');
for(var i = 0; i < students.length; i++){
    console.log(students[i].substring(0, 8) + ' ' + students[i].substring(9));
}

var hashTable = new HashTable();
for(var i = 0; i < students.length; i++){
    hashTable.put(students[i]);
}
hashTable.showDistro();
*/
