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
		$('.menu--ad').toggleClass('hidden');
		$('body').toggleClass('scrolled');
		$('.nav-wrap .btn').toggleClass('hidden');
		if(!$('.logo-wrap').hasClass('visible')){
			$('.logo-wrap').toggleClass('visible');
		} else {
			$('.logo-wrap').toggleClass('visible');
		}
	});
	$('.menu--ad .link').on('click', function() {
		$('.menu--ad').toggleClass('hidden');
		$('body').toggleClass('scrolled');
		if($('.cmn-toggle-switch').hasClass('active')){
			$('.cmn-toggle-switch').removeClass('active');
		} else {
			$('.logo-wrap').addClass('active');
		};
		$('.nav-wrap .btn').toggleClass('hidden');
		if(!$('.logo-wrap').hasClass('visible')){
			$('.logo-wrap').toggleClass('visible');
		} else {
			$('.logo-wrap').toggleClass('visible');
		}
	})
	//скролл
	$(window).bind('scroll',function(){// Используем обработчик по скроллу
		var ScrollPos = $(this).scrollTop(), // Определяем позицию скролла
			HeaderHeight = $('header').height(); // Определяем высоту шапки
			
		if(ScrollPos>HeaderHeight) { // Если позиция скролла больше высоты шапки, т.е. ниже шапки, то..
		  $('.nav-panel').addClass('fixed'); // Добавляем класс для меню
		  // Фикс, т.к. контент уходит выше, ибо менюшка "ушла"
		  
		} else { // Если меньше, то
			$('.nav-panel').removeClass('fixed'); // удаляем фикс
		}
	  });
});
