/**
 *
 *Created by houxinjie on 15/7/12.
 */
var Queue = function(){

    var dataStore = [];

    this.enqueue = function(element){
        dataStore.push(element);
    };
    this.dequeue = function(){
        return dataStore.shift();
    };
    this.front = function(){
        return dataStore[0];
    };
    this.back = function(){
        return dataStore[dataStore.length - 1];
    };
    this.toString = function(){
        return dataStore.join(' ');
    };
    this.empty = function(){
        return dataStore.length === 0;
    };
    this.length = function(){
        return dataStore.length;
    };
};

function fact(n){
    var queue = new Queue();
    while(n > 1){
        queue.enqueue(n--);
    }
    var product = queue.dequeue();
    while(queue.length() !== 0){
        product *= queue.dequeue();
    }
    return product;
}

//console.log(fact(5));

function distribute(nums, queues, n, digit){
    for(var i = 0; i < n; i++){
        if(digit === 1){
            queues[nums[i] % 10].enqueue(nums[i]);
        }else{
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
        }
    }
}

function collect(queues, nums){
    var i = 0;
    for(var digit = 0; digit < 10; ++digit){
        while(!queues[digit].empty()){
            nums[i++] = queues[digit].dequeue();
        }
    }
}

function display(array){
    console.log(array.join(' '));
}

var queues = [];
for(var i = 0; i < 10; i++){
    queues[i] = new Queue();
}

var nums = [];
for(var i = 0; i < 10; i++){
    nums[i] = Math.floor(Math.random() * 100);
}


console.log('Before sort:');
display(nums);
distribute(nums, queues, 10, 1);

collect(queues, nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);
console.log('After sort:');
display(nums);


