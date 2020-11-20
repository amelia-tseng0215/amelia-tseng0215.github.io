// set the functions ! 

//actionCompleted();

//using function to set the funcction (better)
function actionCompleted () {

	alert('Completed');
}


//actionCompleted(); //call the function in the website --- a pop up window 



//using var to set the function ; not conveneint 
var actionCompletedAgain = function (){
   alert ('completed again');
};

//actionCompletedAgain ();

//this function : popMsg ; (msg)
function  popupMsg (msg){
     var finalMsg= 'Site message: ' +msg;  //output: site messgae: (popupmsg (msg))
     alert(finalMsg);
}

//popupMsg('Test');
//popupMsg('warning');


function userMsg(name, msg ='nothing'){
      var finalMsg= name + ' says: '+ msg;  //output: victor says: surpise 
      alert(finalMsg);

}

//userMsg('victor'); //output: victor says: 'nothing ' the original setting message 



function complexCalc (x, y){
	var result= 0; //create  the var result as 0 to be the biginning of the result (will be replaced later by calcs )
	result= x * y
	result= result/ (x-y); 
	result= result * y - x; 
	return result ; //return the cal result to alert function 
}

var finalResult = complexCalc(5,10); 
alert(finalResult);
 

//organizing  all the functions into a var then do the functions afterward 
var demonFuncs = {
popupMsgFunc: popupMsg,
userMsgFunc: userMsg,
complexCalcFunc: complexCalc
//directFunc:function(){} can write the function directly here in the oobject 

};

demonFuncs.userMsgFunc ('victor', 'I am calling a function in an object ')