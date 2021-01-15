$(document).ready(function() {
	$('div').on('mouseenter', function(){
       var screenWidth= $(document).width();
       var screenHeight= $(document).height();
       var newPosX=Math.random()* screenWidth;
       var newPosY= Math.random()*screenHieght;



       $(this).animate({top:newPosY + 'px', left:newPosX+'px',200});

       });
	// use .on() to add an event listener to DIVs
	// use $(document).width() to obtain viewport width
	// use $(document).height() to obtain viewport height
	// use Math.random() to get a random number between 0 and 0.99999999999...
});