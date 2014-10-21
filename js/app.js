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

/* the cpp placeholders angulr states */
.state('app.cpp_1', {
      url: "/cpp_1",
      views: {
          'menuContent' :{
            templateUrl: "templates/cpp/1.html",
              
          }
        }
      })
.state('app.cpp_2', {
      url: "/cpp_2",
      views: {
          'menuContent' :{
            templateUrl: "templates/cpp/2.html",
              
          }
        }
      })
.state('app.cpp_3', {
      url: "/cpp_3",
      views: {
          'menuContent' :{
            templateUrl: "templates/cpp/3.html",
              
          }
        }
      })
.state('app.cpp_4', {
      url: "/cpp_4",
      views: {
          'menuContent' :{
            templateUrl: "templates/cpp/4.html",
              
          }
        }
      })
.state('app.cpp_5', {
      url: "/cpp_5",
      views: {
          'menuContent' :{
            templateUrl: "templates/cpp/5.html",
              
          }
        }
      })
.state('app.cpp_6', {
      url: "/cpp_6",
      views: {
          'menuContent' :{
            templateUrl: "templates/cpp/6.html",
              
          }
        }
      })
.state('app.cpp_7', {
      url: "/cpp_7",
      views: {
          'menuContent' :{
            templateUrl: "templates/cpp/7.html",
              
          }
        }
      })
.state('app.cpp_8', {
      url: "/cpp_8",
      views: {
          'menuContent' :{
            templateUrl: "templates/cpp/8.html",
              
          }
        }
      })
.state('app.cpp_9', {
      url: "/cpp_9",
      views: {
          'menuContent' :{
            templateUrl: "templates/cpp/9.html",
              
          }
        }
      })
.state('app.cpp_10', {
      url: "/cpp_10",
      views: {
          'menuContent' :{
            templateUrl: "templates/cpp/10.html",
              
          }
        }
      })
.state('app.cpp_11_a', {
      url: "/cpp_11_a",
      views: {
          'menuContent' :{
            templateUrl: "templates/cpp/11_a.html",
              
          }
        }
      })
.state('app.cpp_11_b', {
      url: "/cpp_11_b",
      views: {
          'menuContent' :{
            templateUrl: "templates/cpp/11_b.html",
              
          }
        }
      })
.state('app.cpp_12', {
      url: "/cpp_12",
      views: {
          'menuContent' :{
            templateUrl: "templates/cpp/12.html",
              
          }
        }
      })
.state('app.cpp_13', {
      url: "/cpp_13",
      views: {
          'menuContent' :{
            templateUrl: "templates/cpp/13.html",
              
          }
        }
      })
.state('app.cpp_14', {
      url: "/cpp_14",
      views: {
          'menuContent' :{
            templateUrl: "templates/cpp/14.html",
              
          }
        }
      })
.state('app.cpp_15', {
      url: "/cpp_15",
      views: {
          'menuContent' :{
            templateUrl: "templates/cpp/15.html",
              
          }
        }
      })
.state('app.cpp_16_a', {
      url: "/cpp_16_a",
      views: {
          'menuContent' :{
            templateUrl: "templates/cpp/16_a.html",
              
          }
        }
      })
.state('app.cpp_16_b', {
      url: "/cpp_16_b",
      views: {
          'menuContent' :{
            templateUrl: "templates/cpp/16_b.html",
              
          }
        }
      })
.state('app.cpp_17', {
      url: "/cpp_17",
      views: {
          'menuContent' :{
            templateUrl: "templates/cpp/17.html",
              
          }
        }
      })
.state('app.cpp_18', {
      url: "/cpp_18",
      views: {
          'menuContent' :{
            templateUrl: "templates/cpp/18.html",
              
          }
        }
      })
.state('app.cpp_19', {
      url: "/cpp_19",
      views: {
          'menuContent' :{
            templateUrl: "templates/cpp/19.html",
              
          }
        }
      })
.state('app.cpp_20', {
      url: "/cpp_20",
      views: {
          'menuContent' :{
            templateUrl: "templates/cpp/20.html",
              
          }
        }
      })
.state('app.cpp_21', {
      url: "/cpp_21",
      views: {
          'menuContent' :{
            templateUrl: "templates/cpp/21.html",
              
          }
        }
      })
.state('app.cpp_23', {
      url: "/cpp_23",
      views: {
          'menuContent' :{
            templateUrl: "templates/cpp/23.html",
              
          }
        }
      })
.state('app.cpp_24', {
      url: "/cpp_24",
      views: {
          'menuContent' :{
            templateUrl: "templates/cpp/24.html",
              
          }
        }
      })
.state('app.cpp_25', {
      url: "/cpp_25",
      views: {
          'menuContent' :{
            templateUrl: "templates/cpp/25.html",
              
          }
        }
      })
.state('app.cpp_26_a', {
      url: "/cpp_26_a",
      views: {
          'menuContent' :{
            templateUrl: "templates/cpp/26_a.html",
              
          }
        }
      })
.state('app.cpp_26_b', {
      url: "/cpp_26_b",
      views: {
          'menuContent' :{
            templateUrl: "templates/cpp/26_b.html",
              
          }
        }
      })
.state('app.cpp_26_c', {
      url: "/cpp_26_c",
      views: {
          'menuContent' :{
            templateUrl: "templates/cpp/26_c.html",
              
          }
        }
      })

.state('app.cpp_27', {
      url: "/cpp_27",
      views: {
          'menuContent' :{
            templateUrl: "templates/cpp/27.html",
              
          }
        }
      })
.state('app.cpp_28', {
      url: "/cpp_28",
      views: {

          'menuContent' :{
            templateUrl: "templates/cpp/28.html",
              
          }
        }
      })
.state('app.cpp_29', {
      url: "/cpp_29",
      views: {
          'menuContent' :{
            templateUrl: "templates/cpp/29.html",
              
          }
        }
      })


/* the end of cpp states */  

/* the placeholders for oscd*/
.state('app.oscd_a1', {
      url: "/oscd_a1",
      views: {
          'menuContent' :{
            templateUrl: "templates/oscd/a1.html",
              
          }
        }
      })
.state('app.oscd_a2', {
      url: "/oscd_a2",
      views: {
          'menuContent' :{
            templateUrl: "templates/oscd/a2.html",
              
          }
        }
      })
.state('app.oscd_a3', {
      url: "/oscd_a3",
      views: {
          'menuContent' :{
            templateUrl: "templates/oscd/a3.html",
              
          }
        }
      })
.state('app.oscd_a4', {
      url: "/oscd_a4",
      views: {
          'menuContent' :{
            templateUrl: "templates/oscd/a4.html",
              
          }
        }
      })
.state('app.oscd_a5', {
      url: "/oscd_a5",

      views: {
          'menuContent' :{
            templateUrl: "templates/oscd/a5.html",
              
          }
        }
      })
.state('app.oscd_b1_a', {
      url: "/oscd_b1_a",
      views: {
          'menuContent' :{
            templateUrl: "templates/oscd/b1_a.html",
              
          }
        }
      })
.state('app.oscd_b1_b', {
      url: "/oscd_b1_b",
      views: {
          'menuContent' :{
            templateUrl: "templates/oscd/b1_b.html",
              
          }
        }
      })
.state('app.oscd_b1_c', {
      url: "/oscd_b1_c",
      views: {
          'menuContent' :{
            templateUrl: "templates/oscd/b1_c.html",
              
          }
        }
      })
.state('app.oscd_b1_d', {
      url: "/oscd_b1_d",
      views: {
          'menuContent' :{
            templateUrl: "templates/oscd/b1_d.html",
              
          }
        }
      })
.state('app.oscd_b2_a', {
      url: "/oscd_b2_a",
      views: {
          'menuContent' :{
            templateUrl: "templates/oscd/b2_a.html",
              
          }
        }
      })
.state('app.oscd_b2_b', {
      url: "/oscd_b2_b",
      views: {
          'menuContent' :{
            templateUrl: "templates/oscd/b2_b.html",
              
          }
        }
      })
.state('app.oscd_b2_c', {
      url: "/oscd_b2_c",
      views: {
          'menuContent' :{
            templateUrl: "templates/oscd/b2_c.html",
              
          }
        }
      })
.state('app.oscd_b3_a', {
      url: "/oscd_b3_a",
      views: {
          'menuContent' :{
            templateUrl: "templates/oscd/b3_a.html",
              
          }
        }
      })
.state('app.oscd_b3_b', {
      url: "/oscd_b3_b",
      views: {
          'menuContent' :{
            templateUrl: "templates/oscd/b3_b.html",
              
          }
        }
      })
.state('app.oscd_b4_a', {
      url: "/oscd_b4_a",
      views: {
          'menuContent' :{
            templateUrl: "templates/oscd/b3_a.html",
              
          }
        }
      })
.state('app.oscd_b4_b', {
      url: "/oscd_b4_b",
      views: {
          'menuContent' :{
            templateUrl: "templates/oscd/b4_b.html",
              
          }
        }
      })
.state('app.oscd_b4_c', {
      url: "/oscd_b4_c",
      views: {
          'menuContent' :{
            templateUrl: "templates/oscd/b4_c.html",
              
          }
        }
      }).state('app.oscd_b5', {
      url: "/oscd_b5",
      views: {
          'menuContent' :{
            templateUrl: "templates/oscd/b5.html",
              
          }
        }
      })
      .state('app.oscd_b6', {
      url: "/oscd_b6",
      views: {
          'menuContent' :{
            templateUrl: "templates/oscd/b6.html",
              
          }
        }
      })

.state('app.oscd_b7_a', {
      url: "/oscd_b7_a",
      views: {
          'menuContent' :{
            templateUrl: "templates/oscd/b7_a.html",
              
          }
        }
      })

.state('app.oscd_b7_b', {
      url: "/oscd_b7_b",
      views: {
          'menuContent' :{
            templateUrl: "templates/oscd/b7_b.html",
              
          }
        }
      })
.state('app.oscd_b7_c', {
      url: "/oscd_b7_c",
      views: {
          'menuContent' :{
            templateUrl: "templates/oscd/b7_c.html",
              
          }
        }
      })
.state('app.oscd_b8', {
      url: "/oscd_b8",
      views: {
          'menuContent' :{
            templateUrl: "templates/oscd/b8.html",
              
          }
        }
      })

/* the end of  oscd states*/  

/*ajwt states */
.state('app.ajwt_w1', {
      url: "/ajwt_w1",
      views: {
          'menuContent' :{
            templateUrl: "templates/ajwt/w1.html",
              
          }
        }
      })
.state('app.ajwt_w2', {
      url: "/ajwt_w2",
      views: {
          'menuContent' :{
            templateUrl: "templates/ajwt/w2.html",
              
          }
        }
      })

.state('app.ajwt_w3', {
      url: "/ajwt_w3",
      views: {
          'menuContent' :{
            templateUrl: "templates/ajwt/w3.html",
              
          }
        }
      })

.state('app.ajwt_w4', {
      url: "/ajwt_w4",
      views: {
          'menuContent' :{
            templateUrl: "templates/ajwt/w4.html",
              
          }
        }
      })

.state('app.ajwt_w5', {
      url: "/ajwt_w5",
      views: {
          'menuContent' :{
            templateUrl: "templates/ajwt/w5.html",
              
          }
        }
      })

.state('app.ajwt_w6', {
      url: "/ajwt_w6",
      views: {
          'menuContent' :{
            templateUrl: "templates/ajwt/w6.html",
              
          }
        }
      })

.state('app.ajwt_w7', {
      url: "/ajwt_w7",
      views: {
          'menuContent' :{
            templateUrl: "templates/ajwt/w7.html",
              
          }
        }
      })

.state('app.ajwt_w8', {
      url: "/ajwt_w8",
      views: {
          'menuContent' :{
            templateUrl: "templates/ajwt/w8.html",
              
          }
        }
      })
.state('app.ajwt_w9', {
      url: "/ajwt_w9",
      views: {
          'menuContent' :{
            templateUrl: "templates/ajwt/w9.html",
              
          }
        }
      })
.state('app.ajwt_w10', {
      url: "/ajwt_w10",
      views: {
          'menuContent' :{
            templateUrl: "templates/ajwt/w10.html",
              
          }
        }
      })
.state('app.ajwt_w11', {
      url: "/ajwt_w11",
      views: {
          'menuContent' :{
            templateUrl: "templates/ajwt/w11.html",
              
          }
        }
      })
.state('app.ajwt_w12', {
      url: "/ajwt_w12",
      views: {
          'menuContent' :{
            templateUrl: "templates/ajwt/w12.html",
              
          }
        }
      })


/*end of ajwt states */

/* the c lab states */
    .state('app.c_ex1_a', {
      url: "/c_ex1_a",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex1_a.html",
             controller:'LoadingCtrl', 
          }
        }
      })

    .state('app.c_ex1_b', {
      url: "/c_ex1_b",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex1_b.html",
             controller:'LoadingCtrl', 
          }
        }
      })

    .state('app.c_ex1_c', {
      url: "/c_ex1_c",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex1_c.html",
             controller:'LoadingCtrl', 
          }
        }
      })

    .state('app.c_ex2_a', {
      url: "/c_ex2_a",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex2_a.html",
            controller:'LoadingCtrl',  
          }
        }
      })

    .state('app.c_ex2_b', {
      url: "/c_ex2_b",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex2_b.html",
              
          }
        }
      })

    .state('app.c_ex2_c', {
      url: "/c_ex2_c",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex2_c.html",
              
          }
        }
      })

    .state('app.c_ex3_a', {
      url: "/c_ex3_a",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex3_a.html",
              
          }
        }
      })

    .state('app.c_ex3_b', {
      url: "/c_ex3_b",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex3_b.html",
              
          }
        }
      })

    .state('app.c_ex3_c', {
      url: "/c_ex3_c",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex3_c.html",
              
          }
        }
      })

    .state('app.c_ex4_a', {
      url: "/c_ex4_a",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex4_a.html",
              
          }
        }
      })

    .state('app.c_ex4_b', {
      url: "/c_ex4_b",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex4_b.html",
              
          }
        }
      })

    .state('app.c_ex4_c', {
      url: "/c_ex4_c",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex4_c.html",
              
          }
        }
      })

    .state('app.c_ex5_a', {
      url: "/c_ex5_a",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex5_a.html",
              
          }
        }
      })

    .state('app.c_ex5_b', {
      url: "/c_ex5_b",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex5_b.html",
              
          }
        }
      })

    .state('app.c_ex5_c', {
      url: "/c_ex5_c",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex5_c.html",
              
          }
        }
      })

    .state('app.c_ex6_a', {
      url: "/c_ex6_a",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex6_a.html",
              
          }
        }
      })

    .state('app.c_ex6_b', {
      url: "/c_ex6_b",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex6_b.html",
              
          }
        }
      })

    .state('app.c_ex7_a', {
      url: "/c_ex7_a",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex7_a.html",
              
          }
        }
      })

    .state('app.c_ex7_b', {
      url: "/c_ex7_b",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex7_b.html",
              
          }
        }
      })

    .state('app.c_ex7_c', {
      url: "/c_ex7_c",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex7_c.html",
              
          }
        }
      })

    .state('app.c_ex8_a', {
      url: "/c_ex8_a",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex8_a.html",
              
          }
        }
      })

    .state('app.c_ex8_b', {
      url: "/c_ex8_b",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex8_b.html",
              
          }
        }
      })

    .state('app.c_ex8_c', {
      url: "/c_ex8_c",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex8_c.html",
              
          }
        }
      })

    .state('app.c_ex8_d', {
      url: "/c_ex8_d",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex8_d.html",
              
          }
        }
      })

    .state('app.c_ex9_a', {
      url: "/c_ex9_a",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex9_a.html",
              
          }
        }
      })

    .state('app.c_ex9_b', {
      url: "/c_ex9_b",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex9_b.html",
              
          }
        }
      })

    .state('app.c_ex9_c', {
      url: "/c_ex9_c",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex9_c.html",
              
          }
        }
      })

    .state('app.c_ex10_a', {
      url: "/c_ex10_a",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex10_a.html",
              
          }
        }
      })

    .state('app.c_ex10_b', {
      url: "/c_ex10_b",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex10_b.html",
              
          }
        }
      })

    .state('app.c_ex12_a', {
      url: "/c_ex12_a",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex12_a.html",
              
          }
        }
      })

    .state('app.c_ex12_b', {
      url: "/c_ex12_b",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex12_b.html",
              
          }
        }
      })


    .state('app.c_ex12_c', {
      url: "/c_ex12_c",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex12_c.html",
              
          }
        }
      })


    .state('app.c_ex13_a', {
      url: "/c_ex13_a",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex13_a.html",
              
          }
        }
      })

    .state('app.c_ex13_b', {
      url: "/c_ex13_b",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex13_b.html",
              
          }
        }
      })

    .state('app.c_ex14_a', {
      url: "/c_ex14_a",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex14_a.html",
              
          }
        }
      })

    .state('app.c_ex14_b', {
      url: "/c_ex14_b",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex14_b.html",
              
          }
        }
      })


    .state('app.c_ex15', {
      url: "/c_ex15",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex15.html",
              
          }
        }
      })


    .state('app.c_ex16_a', {
      url: "/c_ex16_a",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex16_a.html",
              
          }
        }
      })

    .state('app.c_ex16_b', {
      url: "/c_ex16_b",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex16_b.html",
              
          }
        }
      })


    .state('app.c_ex16_c', {
      url: "/c_ex16_c",
      views: {
          'menuContent' :{
            templateUrl: "templates/c/ex16_c.html",
              
          }
        }
      })

/* end of c lab states */

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

