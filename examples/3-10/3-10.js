//getting elemetns from html in js 

window.onload  = function (){
	var allGroupEm = document.getElementsByClassName('group1');  // a [ ] with three info in html group 1 
	var groupEm = allGroupEm[0];  // retrieving the first info in first info in allgroupEm 
	console.log(groupEm.innerHTML); // to retrieve the elements from html 
	groupEm.innerHTML= 'Content changed'; //to change the element content in html
    var idEm = document.getElementById ('no6'); 
    idEm.innerHTML= 'no 6 changed '; 

    //changing font color in the website 
    idEm.style.color='red'; 

    idEm.style.backgroundColor= 'black';
    //font-size= fontSize, text-align = textAlign 
    

    idEM.style.maarginleft= '5px';

};



