/**
 *
 * Created by houxinjie on 15/7/13.
 */
var Queue = function(){

    var dataStore = [];

    this.enqueue = function(element){
        dataStore.push(element);
    };
    this.dequeue = function(){
        var priority = dataStore[0].code;
        var index = 0;
        for(var i = 1; i < dataStore.length; i++){
            if(dataStore[i].code < priority){
                priority = dataStore[i].code;
                index = i;
            }
        }
        return dataStore.splice(index, 1);
    };
    this.front = function(){
        return dataStore[0];
    };
    this.back = function(){
        return dataStore[dataStore.length - 1];
    };
    this.toString = function(){
        var string = '';
        for(var i = 0; i < dataStore.length; i++){
            string += dataStore[i].name + ' code: ' + dataStore[i].code + '\n';
        }
        return string;
    };
    this.empty = function(){
        return dataStore.length === 0;
    };
    this.length = function(){
        return dataStore.length;
    };
};

function Patient(name, code){
    this.name = name;
    this.code = code;
}

var queue = new Queue();

var patient = new Patient('houxinjie', 5);
queue.enqueue(patient);

patient = new Patient('zhuqianqian', 6);
queue.enqueue(patient);

patient = new Patient('huoshao', 6);
queue.enqueue(patient);

patient = new Patient('john', 1);
queue.enqueue(patient);

patient = new Patient('test', 1);
queue.enqueue(patient);

console.log(queue.toString());

while(!queue.empty()){
    var seen = queue.dequeue();
    console.log('Patient being treated: ' + seen[0].name);
    console.log('Patient waiting to be seen: ');
    console.log(queue.toString());
}


