({
	baseUrl: 'static/js',
	paths: {
		jquery: 'libs/jquery-1.8.2.min',
		jqueryDropdown: 'libs/jquery.dropdown',
		modernizr: 'libs/modernizr-2.6.2.min',
		respond: 'libs/respond.min',
		bootstrap: 'libs/bootstrap'
	},
	name: 'main',
	out: 'static/js/ds.min.js',
	shim: {
		jqueryDropdown: {
			deps: ['jquery']
		},
		bootstrap: {
			deps: ['jquery']
		},
		scripts: {
			deps: ['utils', 'jqueryDropdown']
		}
	}
})