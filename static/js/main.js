require.config({
	paths: {
		jquery: 'libs/jquery-1.8.2.min',
		jqueryDropdown: 'libs/jquery.dropdown',
		modernizr: 'libs/modernizr-2.6.2.min',
		respond: 'libs/respond.min',
		bootstrap: 'libs/bootstrap'
	},
	shim: {
		jqueryDropdown: {
			deps: ['jquery']
		},
		bootstrap: {
			deps: ['jquery']
		},
		scripts: {
			deps: ['utils', 'jquery']
		}
	}
})

require(['scripts', 'respond', 'jqueryDropdown', 'bootstrap', 'modernizr'], function() {
	
});