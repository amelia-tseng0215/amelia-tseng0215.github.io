window.onload= function(){

  var em = document.querySelector('article  > p ');
   //em.style.color='red';

   var ems= document.querySelectorAll('body p'); //body is p's ancestor(not imediate parent): jujst use blank
   ems[1].style.color='ornge';  //take out the second 'p' under the body 
};