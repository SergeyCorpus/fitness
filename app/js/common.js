$(function() {

//TRANSITION MENU
$('#gotoTop,.know-more').click(function(){
		var lienHref=$(this).attr('href');
		var positionHrefTop=$(lienHref).offset().top;
		if($(window).width() > 576){
		$('html,body').animate({scrollTop:positionHrefTop-1},1000);
		}else{
			$('html,body').animate({scrollTop:positionHrefTop-1},1000);
		}
		return false;
	});




	//fancybox begin
	$().fancybox({
		selector : '[data-fancybox="images1"],[data-fancybox="imagesInsta"]',
		thumbs: true,
		loop: true,
		hash: true
	 });




		//E-mail Ajax Send !!!work only with mail.php!!!
	$(".form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".submitForm").val("Отправлено");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});




//begin slick
	$('#js-testimonials-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		autoplay: false,
		autoplaySpeed: 4000,
		fade: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 660,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false
				}
			}
		]
	});
	//end slick


	//begin slick
	$('#js-follow-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		autoplay: false,
		autoplaySpeed: 4000,
		fade: false,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false
				}
			}
		]
	});
	//end slick

	//SLICK WITH GALLERY BEGIN 
	$('.slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	autoplay: false,
	autoplaySpeed: 4000,
	asNavFor: '.slider-nav'
	});
	
	$('.slider-nav').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		arrows: false,
		loop: true,
		focusOnSelect: true,
		responsive: [
		{
			breakpoint: 769,
			settings: {
				slidesToShow: 6,
				slidesToScroll: 1,
				arrows: false
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false
			}
		}
		]
	});
	//SLICK WITH GALLERY END

$('.thumbnail').on('click', function() {
  var clicked = $(this);
  var newSelection = clicked.data('big');
  var $img = $('.primary').attr("src",newSelection);
  clicked.parent().find('.thumbnail').removeClass('selected');
  clicked.addClass('selected');
  $('.primary').empty().append($img.hide().fadeIn('fast'));
  return false;
});




	/*открытие и закрытие модального окна с формой*/

	//open popup
	$('.btn-form-js').on('click', function(event){
		event.preventDefault();
		$('.cd-popup').addClass('is-visible');
	});
	
	//close popup
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
			if(event.which=='27'){
				$('.cd-popup').removeClass('is-visible');
			}
		});




});


var myVideo = document.querySelector(".video");
var btnPlayPause = document.querySelector(".video__playButton");

	//EventDeclatations
	btnPlayPause.addEventListener("click", function() {
		if (myVideo.paused){
			myVideo.play();
			btnPlayPause.classList.add('hidden');
			myVideo.setAttribute('controls', 'controls');
		} 
		else { 
			myVideo.pause();
			btnPlayPause.classList.remove('hidden');
		}
	});

	//add event after stop video
	myVideo.addEventListener('ended', function() {
		btnPlayPause.classList.remove('hidden');
		myVideo.removeAttribute('controls');
	});
