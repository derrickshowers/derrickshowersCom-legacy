require.config({
	paths: {
		jquery: 'libs/jquery-1.8.2.min',
		jqueryDropdown: 'libs/jquery.dropdown',
		modernizr: 'libs/modernizr-2.6.2.min',
		respond: 'libs/respond.min',
		bootstrap: 'libs/bootstrap',
		dsCarousel: '//cdn.derrickshowers.com/dsCarousel.min'
	},
	shim: {
		jqueryDropdown: {
			deps: ['jquery']
		},
		bootstrap: {
			deps: ['jquery']
		},
		scripts: {
			deps: ['jqueryDropdown']
		},
		dsCarousel: {
			deps: ['jquery']
		}
	}
});

require(['scripts', 'respond', 'bootstrap', 'modernizr', 'dsCarousel'], function() {
	$("#dsCarouselContainer").dsCarousel({slideDelay: 6000});
});