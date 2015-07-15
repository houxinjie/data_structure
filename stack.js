/**
 *
 * Created by houxinjie on 15/7/12.
 */
var Stack = (function(){
    var Stack = new Function;
    var dataStore = [];
    var top = 0;

    Stack.prototype = {
        push: function(element){
            dataStore[top++] = element;
        },

        pop: function(){
            return dataStore[--top];
        },

        peek: function(){
            return dataStore[top-1];
        },

        length: function(){
            return top;
        },

        clear: function(){
            top = 0;
        }

    };

    return Stack;

})();

function mulBase(num, base){
    var stack = new Stack();
    do{
        stack.push(num % base);
        num = Math.floor(num / base);
    }while(num > 0);

    var converted = '';
    while(stack.length() > 0){
        converted += stack.pop();
    }
    return converted;
}


//console.log(mulBaseBy(17, 7));

function isPalindrome(word){
    var stack = new Stack();
    for(var i = 0; i < word.length; i++){
        stack.push(word[i]);
    }
    var rword = '';
    while(stack.length() !== 0){
        rword += stack.pop();
    }
    return word === rword;
}

//console.log(isPalindrome('hello'));
//console.log(isPalindrome('racecar'));
//console.log(isPalindrome('奶牛产牛奶'));


function fact(n){
    var stack = new Stack();
    while(n > 1){
        stack.push(n--);
    }
    var product = 1;
    while(stack.length() !== 0){
        product *= stack.pop();
    }
    return product;
}

console.log(fact(5));
