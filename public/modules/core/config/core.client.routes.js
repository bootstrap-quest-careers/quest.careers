'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('contactus', {
			url: '/contactus',
			templateUrl: 'modules/core/views/contactus.client.view.html'
		}).
		state('aboutus', {
			url: '/aboutus',
			templateUrl: 'modules/core/views/aboutus.client.view.html'
		}).
		state('footer', {
			url: '/footer',
			templateUrl: 'modules/core/views/footer.client.view.html'
		}).
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html'
		});
	}
]);