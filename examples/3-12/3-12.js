
function mouseEnventMsg() {
       alert('mouse event');
};



window.onload=function(){
    var em =document.querySelector('body');
    em.addEventListener('click', function(){   //type, function
         alert('clicked');
         
    }); 

    em.addEventListener('mouseenter', mouseEnventMsg);
    em.addEvenListener('mouseleave', mouseEventMsg);
    em.removeEventListener('mouseleave');
};


