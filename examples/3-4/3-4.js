var num1= 2 + 5, num2=1 - 5*40; 
//console.log(num1);
//console.log(num2);

var num3= num1+num2; 
console.log(num3);

//str= texts line 
var str ='a number: '; 

console.log (str+num3); //combine text and number in a line

//'value: ' + (number) is to combine the nnumber with the text(value)  : value+5 is a text element 
var test1= 'value: ' + 5 +10; // 'output= 510, no caculation here '
var test2= 'value: ' + 5 *10; // output=50 , caculation first *

var test3= 'value: ' +5 -10; //output= 'NaN': NOT A NUMBER 
//console.log(test1); 
//console.log(test2);
//console.log(test3);


var numAsNum = 5, numAsStr= '5'; //'5' is a text element not a number element 

//console.log(numAsNum + numAsStr); //number+text element ; the number element will automatically be transofrmed into a text element 
//console.log(numAsNum - numAsStr); 


var str1- 'this is a value', str2='value';

console.log(str1 - str2); // '-' can only be applyed to numbers cannot apply to text elements 