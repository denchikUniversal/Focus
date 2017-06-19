var count = document.getElementById('count');
count.addEventListener('click' , function(){
	count.innerHTML = 297653;
});


$(document).ready(function(){

   $('#header #touch-menu').click(function(){
   	 $('nav ul').slideToggle(992);
   });
   $(window).resize(function(){
   	 if ($('window').width() > 992) {
   	 	$('nav ul').removeAttr('style')
   	 }
   });

});