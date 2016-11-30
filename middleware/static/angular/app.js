'use strict';

/* App Module */

var happnerApp = angular.module('happnerApp', [
  'ngRoute',
  'ngSanitize',
  'ngAnimate',
  'ngDragDrop',
  'ui.bootstrap',
  'rt.select2',
  'happner',
  'angular-json-editor',
  'happnerServices',
  'happnerControllers',
  'ui.ace',
  'angularMoment',
  'luegg.directives',
  'ng.tv4',
  'anguFixedHeaderTable',
  'ngPluralizeFilter'
]);

happnerApp.config(function (JSONEditorProvider, $locationProvider, $routeProvider) {

  // these are set by default, but we set this for demonstration purposes
  JSONEditorProvider.configure({
    defaults: {
      options: {
        iconlib: 'bootstrap3',
        theme: 'bootstrap3'
      }
    }
  });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $routeProvider

  // route for the home page
    .when('/', {
      templateUrl : '/angular/templates/dashboard.html'
    })

    .when('/dashboard', {
      templateUrl : '/angular/templates/dashboard.html'
    })

    // route for the about page
    .when('/schema/search', {
      templateUrl : '/angular/templates/data-search.html',
      controller:'DataSchemaSearchController'
    })

    .when('/schema/edit/:type', {
      templateUrl: function(urlattr){
        return  '/angular/templates/schema-edit.html?type=' + (urlattr.type?urlattr.type:'new');
      }
    })

    .when('/data/:type/search', {
      templateUrl: function(urlattr){
        return '/angular/templates/data-search.html?type=' + urlattr.type;
      },
      controller:'DataSearchController'
    })

    .when('/data/:type/edit/:id', {
      templateUrl: function(urlattr){
        return "/angular/templates/data-edit.html?type=" + urlattr.type + '&id=' + (urlattr.id?urlattr.id:'new');
      }
    })

  ;

});

