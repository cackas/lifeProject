$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//slick videos slides
	$('.history__carousel').slick({
		appendArrows: $('.carousel__nav--history'),
		prevArrow: $('.carousel__nav--history').find('.arrow.arrow--left--video'),
		nextArrow: $('.carousel__nav--history').find('.arrow.arrow--right--video'),
		appendDots: $('.dots-wrap--history'),
		dots: true,
		dotsClass: 'dots--history fl row',
		responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});
	$('.carousel--images-wrap--desctop .images__carousel').slick({
		appendArrows: $('.carousel__nav--images'),
		prevArrow: $('.carousel--images-wrap--desctop .carousel__nav--images').find('.arrow.arrow--left--video'),
		nextArrow: $('.carousel--images-wrap--desctop .carousel__nav--images').find('.arrow.arrow--right--video'),
		appendDots: $('.dots-wrap--desk'),
		dots: true,
		rows: 2,
		slidesPerRow: 3,
		dotsClass: 'dots--images fl row',
		responsive: [
    {
      breakpoint: 1200,
      settings: {
		rows: 2,
		slidesPerRow: 2,
        arrows: false
      }
	},
	{
		breakpoint: 768,
		settings: "unslick"
    }
	
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  	]
	});
	$('.carousel--images-wrap--mobile .images__carousel').slick({
		appendArrows: $('.carousel__nav--images'),
		prevArrow: $('.carousel--images-wrap--mobile .carousel__nav--images').find('.arrow.arrow--left--video'),
		nextArrow: $('.carousel--images-wrap--mobile .carousel__nav--images').find('.arrow.arrow--right--video'),
		appendDots: $('.dots-wrap--mobile'),
		dots: true,
		dotsClass: 'dots--images fl row',
		arrows: false
	});
//Кнопка адаптивного меню
	var toggles = document.querySelectorAll(".cmn-toggle-switch");

	for (var i = toggles.length - 1; i >= 0; i--) {
	var toggle = toggles[i];
	toggleHandler(toggle);
	};

	function toggleHandler(toggle) {
	toggle.addEventListener( "click", function(e) {
		e.preventDefault();
		(this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
	});
	}
	$('.cmn-toggle-switch').on('click', function() {
		$('.menu-wrap').fadeToggle();
	});
});
