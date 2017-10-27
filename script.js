$(document).ready(function(){



// When the page is scrolled the nav bar shrinks and the contained elements shift
$(window).scroll(function(){
	var distFromTop = $(document).scrollTop();
	//console.log(distFromTop);
	if(distFromTop > 5){
		$('.top').addClass('top-shrink');
		$('.top').removeClass('top');
		$('.header').fadeOut(0);
		$('.subheader').fadeOut(0);
		$('.header-small').fadeIn(200);
		$('#newline').fadeIn(200);
		$('#line').fadeOut(0);
    }
    else {
		$('.top-shrink').addClass('top');
		$('.top-shrink').removeClass('top-shrink');
		$('.header').fadeIn(200);
		$('.subheader').fadeIn(200);
		$('.header-small').fadeOut(10);
		$('#newline').fadeOut(10);
		$('#line').css('margin-top', '1.8rem');
		$('.subheader').css('display', 'block');
		$('#line').fadeIn(200);
    }
});
