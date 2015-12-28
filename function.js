/**
 * Created by trananhduc1004 on 12/27/15.
 */
'use strict';
function add(a, b){
    return a + b;
}
console.log(add(2, 3));
var cong = add;
console.log(cong(2, 3));
add.description = function(){
    console.log("Add two numbers");
};
add.description();
cong.description();
add.description.help = function(){
    console.log("input two numbers");
};
cong.description.help();
var addSafe = function(a, b){
    if (typeof a !== "number" || typeof b !== "number") {
        throw {
            name: 'TypeError',
            message: 'AddSafe require number parameter'
        }
    }
    return a + b;
};
console.log(addSafe(1, 2));
//Function return function
function arithmetic(operatorString) {
    switch (operatorString){
        case '+':
            return function(a, b){
                return a + b;
            };
        case '-':
            return function(a, b){
                return a - b;
            };
        case '*':
            return function(a, b){
                return a * b;
            };
        case '/':
            return function(a, b){
                return a / b;
            };
    }
}
var x = arithmetic("-")(20, 10);
console.log(x);
var y = arithmetic("*")(20, 10);
console.log(y);
var z = arithmetic("/")(20, 10);
console.log(z);
//Functions nested inside a function
function makeACupOfCoffee() {
    function boilWater(temperature) {
        console.log('Boil water at ', temperature);
    }
    function mixCoffeeWithMilkAndSugar() {
        console.log('Mix coffee with milk and sugar');
    }
    boilWater(100);
    mixCoffeeWithMilkAndSugar();
}
makeACupOfCoffee();
var numberObj = function(val) {
    var value = parseFloat(val);
    //Closure. Google closure javascript
    return { //return a object that have two properties: absolute and square
        absolute: function() {
            return value > 0 ? value : -value;
        },
        square: function(){
            return value * value;
        }
    };
}(-5);
console.log(numberObj.absolute(), numberObj.square());
console.log(numberObj);