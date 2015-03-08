var control = angular.module('LostFound.controllers', ['pascalprecht.translate']);var app = angular.module('LostFound', ['ionic',  'ngResource','LostFound.controllers','pascalprecht.translate' ]) .run(function($ionicPlatform) {  $ionicPlatform.ready(function() {    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard    // for form inputs)    if(window.cordova && window.cordova.plugins.Keyboard) {      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);    }    if(window.StatusBar) {      // Set the statusbar to use the default style, tweak this to      // remove the status bar on iOS or change it to use white instead of dark colors.      StatusBar.styleDefault();    }    });})    .config(['$stateProvider', '$urlRouterProvider','$translateProvider' ,function($stateProvider, $urlRouterProvider, $translateProvider) {                $stateProvider                        .state('main', {                url : '/main',                templateUrl : 'views/mainContainer.html',                abstract : true,                controller : 'MainController'            })                    .state('main.home', {                url: '/home',                views: {                    'main': {                        templateUrl: 'views/home.html',                        controller : 'homePageController'                    }                }            })            .state('main.item', {                 url: '/item',                 views: {                     'main': {                         templateUrl: 'views/item.html',                         controller : 'itemPageController'                     }                 }            })            .state('main.myitems1', {                 url: '/myitems1',                 views: {                     'main': {                         templateUrl: 'views/myitems1.html',                         controller : 'myitems1PageController'                     }                 }            })            .state('main.myitems2', {                 url: '/myitems2',                 views: {                     'main': {                         templateUrl: 'views/myitems2.html',                         controller : 'myitems2PageController'                     }                 }            })            .state('main.specificmyitems', {                 url: '/specificmyitems',                 views: {                     'main': {                         templateUrl: 'views/specificmyitems.html',                         controller : 'SpecificmyitemsPageController'                     }                 }            })             .state('main.reportitem1', {                 url: '/reportitem1',                 views: {                     'main': {                         templateUrl: 'views/reportitem1.html',                         controller : 'reportitem1PageController'                     }                 }            })            .state('main.reportitem2', {                 url: '/reportitem2',                 views: {                     'main': {                         templateUrl: 'views/reportitem2.html',                         controller : 'reportitem2PageController'                     }                 }            })            .state('main.comments', {                 url: '/comments',                 views: {                     'main': {                         templateUrl: 'views/comments.html',                         controller : 'commentsPageController'                     }                 }            })            .state('main.info', {                url: '/info',                views: {                    'main': {                        templateUrl: 'views/info.html',                        controller : 'InfoPageController'                    }                }            })             .state('main.feedback', {                 url: '/feedback',                 views: {                     'main': {                         templateUrl: 'views/feedback.html',                         controller : 'feedbackPageController'                     }                 }            })             .state('main.help', {                 url: '/help',                 views: {                     'main': {                         templateUrl: 'views/help.html',                         controller : 'helpPageController'                     }                 }            })             .state('main.language', {                 url: '/language',                 views: {                     'main': {                         templateUrl: 'views/language.html',                         controller : 'langPageController'                     }                 }            });        $urlRouterProvider.otherwise('/main/home');        for(lang in translations){            $translateProvider.translations(lang, translations[lang]);        }        $translateProvider.preferredLanguage('en');    }]);       