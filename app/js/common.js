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
	$('.images__carousel').slick({
		appendArrows: $('.carousel__nav--images'),
		prevArrow: $('.carousel__nav--images').find('.arrow.arrow--left--video'),
		nextArrow: $('.carousel__nav--images').find('.arrow.arrow--right--video'),
		appendDots: $('.dots-wrap--images'),
		dots: true,
		rows: 2,
		slidesPerRow: 3,
		dotsClass: 'dots--images fl row',
		responsive: [
    {
      breakpoint: 1200,
      settings: {
		slidesPerRow: 2,
        arrows: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});

});
