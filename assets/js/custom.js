!function ($) {

  $(function(){
 /* Init Tooltip */
  	$('[data-toggle="tooltip"]').tooltip()
  	/**
  	 *
  	 * Bootstrap Datepicker
  	 *
  	 */
  	 $('input[name="daterange"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        locale: {
	      format: 'DD/MM/YYYY'
	    }
    });
  
  	// Write script here...
  	/*============================================
	=            Config Siwper Plugin            =
	============================================*/
	/**
	 *
	 * Hot tour
	 *
	 */
	var tourhot_project = new Swiper('#tourhot-projects', {
		pagination: '.project-pagination',
		loop: true,
		//autoplay: 5000,
		slidesPerView: 4,
		spaceBetween: 30,
		paginationHide: true,
		paginationClickable: true,
		autoplayDisableOnInteraction: false,

		// Navigation arrows
		nextButton: '.next-project',
		prevButton: '.prev-project',
		// RESPONSIVE
		breakpoints: {
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 1,
            }
        }

	});
	/* TOur SEason*/
	var tourseason_project = new Swiper('#tourseason-projects', {
			pagination: '.project-pagination',
			loop: true,
			//autoplay: 5000,
			slidesPerView: 4,
			spaceBetween: 30,
			paginationHide: true,
			paginationClickable: true,
			autoplayDisableOnInteraction: false,

			// Navigation arrows
			nextButton: '.next-project',
			prevButton: '.prev-project',
			// RESPONSIVE
			breakpoints: {
	            991: {
	                slidesPerView: 2,
	            },
	            767: {
	                slidesPerView: 2,
	            },
	            480: {
	                slidesPerView: 1,
	            }
	        }

		});
	/**/
	var city_project = new Swiper('#city-projects', {
			pagination: '.project-pagination',
			loop: true,
			//autoplay: 5000,
			slidesPerView: 4,
			spaceBetween: 30,
			paginationHide: true,
			paginationClickable: true,
			autoplayDisableOnInteraction: false,

			// Navigation arrows
			nextButton: '.next-project',
			prevButton: '.prev-project',
			// RESPONSIVE
			breakpoints: {
	            991: {
	                slidesPerView: 2,
	            },
	            767: {
	                slidesPerView: 2,
	            },
	            480: {
	                slidesPerView: 1,
	            }
	        }

		});
	/**/
	var tourcity_project = new Swiper('#tourcity-projects', {
			pagination: '.project-pagination',
			loop: true,
			//autoplay: 5000,
			slidesPerView: 4,
			spaceBetween: 30,
			paginationHide: true,
			paginationClickable: true,
			autoplayDisableOnInteraction: false,

			// Navigation arrows
			nextButton: '.next-project',
			prevButton: '.prev-project',
			// RESPONSIVE
			breakpoints: {
	            991: {
	                slidesPerView: 2,
	            },
	            767: {
	                slidesPerView: 2,
	            },
	            480: {
	                slidesPerView: 1,
	            }
	        }

		});
	$('.toggle-cascade').on('click', function(event){
		var slectContent = $(this).attr('data-content');
			//event.preventDefault();
				$('.sidebar-mb').addClass('active');
				$('.col-md-sidebar').toggleClass('sidebar-fix');
				//debugger;
				$('.sidebar-mb').find(slectContent).toggleClass('active');
						
		});
	$('.close-sidebar').on('click',function(){
		$('.sidebar-mb').removeClass('active');
		$(this).closest('.sidebar-mb').find('.box-cascade-item').removeClass('active');
	})
		/*----------  When Close Cascade  ----------*/
	
	
  });

}(window.jQuery)
