var basicMath= {
	add: addcalc,
	substract: subcalc ,
	multiply: productcalc ,
	divide:divcalc
};


function addcalc(x,y){
	var result= x+y
	var msg= 'the sum of' + x + and +y + 'is' + result;
	return msg;
}


function subcalc (x,y){
	var result= y - x; 
	var msg = 'the result of' + y + 'minus' + x 'is ' + result;
	return msg
}
 

function productcalc (x,y){
	var result= x*y;
	var msg= 'the product of' + x+ 'and' +y +'is' +result; 
	return msg;
}

function divide (x,y){
	var resuilt = x/y;
	var msg= 'the result of' + x +'/' +y + 'is' +result;
	return msg;
}



console.log(basicMath.add(10,21)); // the sum of 10 and 21 is 31
console.log(basicMath.substract(10,21)); //the result of 21 - 10 is 11 
console.log (basicMath.multiply (5,17)); // the product of 5 and 17 is 85 
console.log(basicMath.divide(80,4)); //the result of 80/ 4 is 20








function addcalc (x,y) {
result: x + y 
return result;
}
var finalresult=  'the sum of 10 and 21 is : ' + addcal (5,10);



function subcalc (x, y){
	var result= 0; 
	result= x - y 
	return result ; 
}
var finalresult='the result of 21-10 is: ' + subcalc(21,10);



function productcalc (x, y){
	var result= 0; 
	result= x *y 
	return result ; 
} 
var finalresult='the product of 5*17 is: ' + productcalc (5,17);




function divcalc (x, y){
	var result= 0; 
	result= x/y
	return result ; 
	
}

var finalresult='the result of 80/4 is: ' +divcalc (80,4); 




