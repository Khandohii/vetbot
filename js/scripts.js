$(function(){

	// Мини всплывающие окна
	 firstClick = false
	 $('.mini_modal_link').click(function(e){
	     e.preventDefault()

	     var modalId = $(this).attr('data-modal-id')

	     if($(this).hasClass('active')){
	         $(this).removeClass('active')
	         $('.mini_modal').fadeOut(200)
	         firstClick = false

	            if( $(window).width() < 1024 ){
	                $('body').css('cursor', 'default')
	            }
	     }else{
	         $('.mini_modal_link').removeClass('active')
	         $(this).addClass('active')

	         $('.mini_modal').fadeOut(200)
	         $(modalId).fadeIn(300)
	         firstClick = true

	            if( $(window).width() < 1024 ){
	                $('body').css('cursor', 'pointer')
	            }
	     }
	 })

	 //Закрываем всплывашку при клике вне неё
	 $(document).click(function(e){
	     if (!firstClick && $(e.target).closest('.mini_modal').length == 0){
	         $('.mini_modal').fadeOut(300)
	         $('.mini_modal_link').removeClass('active')

	            if( $(window).width() < 1024 ){
	                $('body').css('cursor', 'default')
	            }
	     }
	     firstClick = false
	 })

  	$('.sort_filter select').selectbox();

	//Слайдер
	$('.main_slider .owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		dots: true,
		margin: 20,
		loop: true,
	})

	//Карусель
	$('.novelties .owl-carousel').owlCarousel({
		nav: true,
		dots: false,
		loop: false,
		responsive : {
			// breakpoint from 1366 up
			1366 : {
				items: 5,
				margin: 27,
			},
			// breakpoint from 1280 up
			1280 : {
				items: 5,
				margin: 27,
			},
			// breakpoint from 1080 up
			1080 : {
				items: 4,
				margin: 17,
				center: false,
				loop: false,
			},
			// breakpoint from 640 up
			640 : {
				items: 3,
				margin: 17,
				center: true,
				loop: true,
			},
			// breakpoint from 480 up
			480 : {
				items: 2,
				margin: 7,
			},
			// breakpoint from 320 up
			0 : {
				items: 1,
				margin: 7,
			},

		}
	})
	$('.slider_product .thumbs').owlCarousel({
		nav: true,
		dots: true,
		loop: false,
		responsive : {
			// breakpoint from 1080 up
			1080 : {
				items: 6,
				margin: 9,
			},
			// breakpoint from 600 up
			640 : {
				items: 4,
				margin: 7,
			},
			// breakpoint from 480 up
			480 : {
				items: 4,
				margin: 7,
			},
			// breakpoint from 320 up
			0 : {
				items: 3,
				margin: 5,
			},

		}
	})


	$owl = $('.slider_product .slider_views .slider').owlCarousel({
		loop: false,
		margin: 20,
		dots: true,
		nav: false,
		navSpeed: 500,
		smartSpeed: 500,
		items: 1,
		onTranslate: callback
	})

	function callback(event) {
		var page = event.page.index;
		if (page != $('.slider_product .thumbs a').prop('data-slide-index')) {

			$('.slider_product .thumbs a').removeClass('active')
			$('.slider_product .thumbs .owl-item:eq(' + page + ') a').addClass('active')
		}
	}

	$('.slider_product .thumbs a').click(function(e) {
		e.preventDefault()

		$('.slider_product .thumbs a').removeClass('active')
		$(this).addClass('active')

		$owl.trigger('to.owl.carousel', $(this).attr('data-slide-index'))
	})
	
	//Табы
	$(".tabs_container").each(function(){
    	$(this).find(".tab_content:first").show()	
	})
	$(".tabs_container .tabs li").click(function() {
    	var parentBox = $(this).closest('.tabs_container')
    
    	$(parentBox).find(".tabs li").removeClass("active")
    	$(this).addClass("active");
    	$(parentBox).find(".tab_content").hide();
    
    	var activeTab = $(this).find("a").attr("href")
    	$(activeTab).fadeIn()
	    return false;
	})

	$('.fancy_img').fancybox({
		margin: [20,0]
	})
	
});


$(window).scroll(function(){	
	// Шапка
	if( $(window).width() > 1079 && $(window).scrollTop() > $(window).height()/2 ) {
		$('header .line_top').addClass('fixed')
	}else{
		$('header .line_top').removeClass('fixed')
	}
})


$(window).resize(function(){
	// Шапка
	if( $(window).width() < 1079 ) {
		$('header .line_top').removeClass('fixed')
		$('.header_menu_wrap').height('auto')
	}
})

$(window).load(function(){
	// Шапка
	$('header .line_top').wrap('<div class="header_menu_wrap" style="height: ' + $('header .line_top').innerHeight() + 'px"></div>')
})