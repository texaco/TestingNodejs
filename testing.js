// Testing stuff about javascript basic sintax.

// Strings

var string1 = 'String to show';
var string2 = "String to show";
console.log(string1);
console.log(string2);

var string3 = 'String to show'.toUpperCase();
console.log(string3);

// Numbers

var num1 = 123456;
var num2 = 123 + 456;
console.log(num1);
console.log(num2);

console.log(num1 + num2);
console.log(num1 / num2);

// Booleans

var booleanValue = false;
console.log(booleanValue);

booleanValue = !booleanValue;
console.log(booleanValue);

// Operators

var operator1 = 1;
var operator2 = 2;

var result = operator1 + operator2;
console.log(result);

result = operator1 - operator2;
console.log(result);

result = operator1 / operator2;
console.log(result);

result = operator1 * operator2;
console.log(result);

operator1 = "1";
operator2 = "2";

result = operator1 + operator2;
console.log(result);

// Arrays

var array = ["val1", "val2", 100, [1, "val3"], false];
console.log(array);

array[1] = "val - modified";
console.log(array);
console.log(array.length);
console.log(array[array.length-1]);

var array2 = ["val3", "val4"];

console.log(array.concat(array2));
console.log(array);

console.log(array.pop());

console.log(array.push("val5"));

console.log(array.reverse());


true ? function(){
        console.log('terniary as true');    
    }() : console.log('terniary as false');
