// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

angular.module('starter', ['ionic','starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
  	//$ionicLoading.show({template:'Loading...'});
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.home',{
    	url: "/home",
    	views:{
    		'menuContent' :{
    			templateUrl: "templates/home.html"
    	}
      }
    })

    .state('app.search', {
      url: "/search",
      views: {
        'menuContent' :{
          templateUrl: "templates/search.html"
        }
      }
    })

    .state('app.browse', {
      url: "/browse",
      views: {
        'menuContent' :{
          templateUrl: "templates/browse.html"
        }
      }
    })

    .state('app.c', {
      url: "/c",
      views: {
        'menuContent' :{
          templateUrl: "templates/c.html"
        }
      }
    })

    .state('app.c++', {
      url: "/c++",
      views: {
        'menuContent' :{
          templateUrl: "templates/c++.html"
        }
      }
    })

    .state('app.ds', {
      url: "/ds",
      views: {
        'menuContent' :{
          templateUrl: "templates/ds.html",
          controller:'LoadingCtrl',
        }
      }
    })

    .state('app.ads', {
      url: "/ads",
      views: {
        'menuContent' :{
          templateUrl: "templates/ads.html",
          
        }
      }
    })

    .state('app.java', {
      url: "/java",
      views: {
        'menuContent' :{
          templateUrl: "templates/java.html",
          
        }
      }
    })

    .state('app.oscd', {
      url: "/oscd",
      views: {
        'menuContent' :{
          templateUrl: "templates/oscd.html",
          
        }
      }
    })

    .state('app.ajwt', {
      url: "/ajwt",
      views: {
        'menuContent' :{
          templateUrl: "templates/ajwt.html",
          
        }
      }
    })

    .state('app.unix', {
      url: "/unix",
      views: {
        'menuContent' :{
          templateUrl: "templates/unix.html",
          
        }
      }
    })

    .state('app.mc', {
      url: "/mc",
      views: {
        'menuContent' :{
          templateUrl: "templates/mc.html",
          
        }
      }
    })

    .state('app.ds_ex1', {
      url: "/ds_ex1",
      views: {
          'menuContent' :{
            templateUrl: "templates/ds/ex1.html",
             controller:'LoadingCtrl', 
          }
        }
      })

    .state('app.ds_ex2_a', {
      url: "/ds_ex2_a",
      views: {
          'menuContent' :{
            templateUrl: "templates/ds/ex2_a.html",
            controller:'LoadingCtrl',  
          }
        }
      })

    .state('app.ds_ex2_b', {
      url: "/ds_ex2_b",
      views: {
          'menuContent' :{
            templateUrl: "templates/ds/ex2_b.html",
              
          }
        }
      })

    .state('app.ds_ex2_c', {
      url: "/ds_ex2_c",
      views: {
          'menuContent' :{
            templateUrl: "templates/ds/ex2_c.html",
              
          }
        }
      })

    .state('app.ds_ex3_a', {
      url: "/ds_ex3_a",
      views: {
          'menuContent' :{
            templateUrl: "templates/ds/ex3_a.html",
              
          }
        }
      })

    .state('app.ds_ex3_b', {
      url: "/ds_ex3_b",
      views: {
          'menuContent' :{
            templateUrl: "templates/ds/ex3_b.html",
              
          }
        }
      })

    .state('app.ds_ex3_c', {
      url: "/ds_ex3_c",
      views: {
          'menuContent' :{
            templateUrl: "templates/ds/ex3_c.html",
              
          }
        }
      })

    .state('app.ds_ex4_a', {
      url: "/ds_ex4_a",
      views: {
          'menuContent' :{
            templateUrl: "templates/ds/ex4_a.html",
              
          }
        }
      })

    .state('app.ds_ex4_b', {
      url: "/ds_ex4_b",
      views: {
          'menuContent' :{
            templateUrl: "templates/ds/ex4_b.html",
              
          }
        }
      })

    .state('app.ds_ex4_c', {
      url: "/ds_ex4_c",
      views: {
          'menuContent' :{
            templateUrl: "templates/ds/ex4_c.html",
              
          }
        }
      })

    .state('app.ds_ex5_a', {
      url: "/ds_ex5_a",
      views: {
          'menuContent' :{
            templateUrl: "templates/ds/ex5_a.html",
              
          }
        }
      })

    .state('app.ds_ex5_b', {
      url: "/ds_ex5_b",
      views: {
          'menuContent' :{
            templateUrl: "templates/ds/ex5_b.html",
              
          }
        }
      })

    .state('app.ds_ex5_c', {
      url: "/ds_ex5_c",
      views: {
          'menuContent' :{
            templateUrl: "templates/ds/ex5_c.html",
              
          }
        }
      })

    .state('app.ds_ex6_a', {
      url: "/ds_ex6_a",
      views: {
          'menuContent' :{
            templateUrl: "templates/ds/ex6_a.html",
              
          }
        }
      })

    .state('app.ds_ex6_b', {
      url: "/ds_ex6_b",
      views: {
          'menuContent' :{
            templateUrl: "templates/ds/ex6_b.html",
              
          }
        }
      })

    .state('app.ds_ex7_a', {
      url: "/ds_ex7_a",
      views: {
          'menuContent' :{
            templateUrl: "templates/ds/ex7_a.html",
              
          }
        }
      })

    .state('app.ds_ex7_b', {
      url: "/ds_ex7_b",
      views: {
          'menuContent' :{
            templateUrl: "templates/ds/ex7_b.html",
              
          }
        }
      })

    .state('app.ds_ex7_c', {
      url: "/ds_ex7_c",
      views: {
          'menuContent' :{
            templateUrl: "templates/ds/ex7_c.html",
              
          }
        }
      })

    .state('app.ds_ex8_a_b_c', {
      url: "/ds_ex8_a_b_c",
      views: {
          'menuContent' :{
            templateUrl: "templates/ds/ex8_a_b_c.html",
              
          }
        }
      })

    .state('app.ds_ex9_a', {
      url: "/ds_ex9_a",
      views: {
          'menuContent' :{
            templateUrl: "templates/ds/ex9_a.html",
              
          }
        }
      })

    .state('app.ds_ex9_b', {
      url: "/ds_ex9_b",
      views: {
          'menuContent' :{
            templateUrl: "templates/ds/ex9_b.html",
              
          }
        }
      })

    .state('app.ds_ex9_c', {
      url: "/ds_ex9_c",
      views: {
          'menuContent' :{
            templateUrl: "templates/ds/ex9_c.html",
              
          }
        }
      })

    .state('app.ds_ex9_d', {
      url: "/ds_ex9_d",
      views: {
          'menuContent' :{
            templateUrl: "templates/ds/ex9_d.html",
              
          }
        }
      })

    .state('app.ds_ex10_a_b', {
      url: "/ds_ex10_a_b",
      views: {
          'menuContent' :{
            templateUrl: "templates/ds/ex10_a_b.html",
              
          }
        }
      })

    .state('app.ds_ex11_a', {
      url: "/ds_ex11_a",
      views: {
          'menuContent' :{
            templateUrl: "templates/ds/ex11_a.html",
              
          }
        }
      })

    .state('app.ds_ex11_b_c', {
      url: "/ds_ex11_b_c",
      views: {
          'menuContent' :{
            templateUrl: "templates/ds/ex11_b_c.html",
              
          }
        }
      })

    .state('app.ads_1', {
      url: "/ads_1",
      views: {
          'menuContent' :{
            templateUrl: "templates/playlist/ex1.html",
              
          }
        }
      })

    .state('app.ads_2', {
      url: "/ads_2",
      views: {
          'menuContent' :{
            templateUrl: "templates/playlist/2.html",
              
          }
        }
      })

    .state('app.ads_3', {
      url: "/ads_3",
      views: {
          'menuContent' :{
            templateUrl: "templates/playlist/3.html",
              
          }
        }
      })

    .state('app.ads_4', {
      url: "/ads_4",
      views: {
          'menuContent' :{
            templateUrl: "templates/playlist/4.html",
              
          }
        }
      })

    .state('app.ads_5', {
      url: "/ads_5",
      views: {
          'menuContent' :{
            templateUrl: "templates/playlist/5.html",
              
          }
        }
      })

    .state('app.ads_6', {
      url: "/ads_6",
      views: {
          'menuContent' :{
            templateUrl: "templates/playlist/6.html",
              
          }
        }
      })

    .state('app.ads_7', {
      url: "/ads_7",
      views: {
          'menuContent' :{
            templateUrl: "templates/playlist/7.html",
              
          }
        }
      })

    .state('app.ads_8', {
      url: "/ads_8",
      views: {
          'menuContent' :{
            templateUrl: "templates/playlist/8.html",
              
          }
        }
      })

    .state('app.ads_9', {
      url: "/ads_9",
      views: {
          'menuContent' :{
            templateUrl: "templates/playlist/9.html",
              
          }
        }
      })

    .state('app.ads_10', {
      url: "/ads_10",
      views: {
          'menuContent' :{
            templateUrl: "templates/playlist/10.html",
              
          }
        }
      })

    .state('app.ads_11', {
      url: "/ads_11",
      views: {
          'menuContent' :{
            templateUrl: "templates/playlist/11.html",
              
          }
        }
      })

    .state('app.ads_12', {
      url: "/ads_12",
      views: {
          'menuContent' :{
            templateUrl: "templates/playlist/12.html",
              
          }
        }
      })

    .state('app.single', {
      url: "/playlists",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlist.html",
          
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});

