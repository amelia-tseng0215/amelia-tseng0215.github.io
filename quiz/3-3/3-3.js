
function changecl(){
	
	var em = document.getElementById('item1');
    em.style.backgroundColor ='blue';
    em = document.getElementById('item2');
    em.style.backgroundColor ='red';
 }  


function changec2(){
	
	var em = document.getElementById('item2');
    em.style.backgroundColor ='orange';
    em = document.getElementById('item3');
    em.style.backgroundColor ='red';
   
}


function resetBg(){
	var em = document.getElementById('item1');
    em.style.backgroundColor ='red';
    em = document.getElementById('item2');
    em.style.backgroundColor ='blue';
    em = document.getElementById('item3');
    em.style.backgroundColor ='orange';
   
}


window.onload=function(){
var em=document.getElementById('switch12');
    em.addEventListener('click', changec1);
var em=document.getElementById('switch23');
    em.addEventListener('click', changec2);
var em=document.getElemetnById ('switch12');
    em.addEventListener('click', resetBg);

};
