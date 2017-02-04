angular.module('app', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/fizzbuzz', {
        templateUrl: 'partials/fizzbuzz.html',
        controller: 'fizzbuzzCtrl'
      })
      .when('/fozzbazz', {
        templateUrl: 'partials/fozzbazz.html',
        controller: 'fozzbazzCtrl'
      })
      .otherwise({
        redirectTo: '/fizzbuzz'
      });
  })
// DO NOT MODIFY CODE ABOVE THIS LINE

/*  HINT: Make sure your controllers, methods, and variables 
    are named what $routeProvider and the partials are expecting  */

  .factory('counter', function($http){
    var countfizz = function(display){
      return display++
      
    }
    var countfozz = function (){
      return display++
    }
   

   return{
    countfizz: countfizz,
    countfozz: countfozz
   }
  })
  .controller('fizzbuzzCtrl', function($scope,counter){
    var cout  = 0;
    var increment = function( ){
      counter.countfizz (cout);
      if(cout % 3 === 0){
        $scope.display = FIZZ;
      }
      else if(cout % 5 === 0){
        $scope.display = BUZZ
      }
      else if(cout % 5 === 0 && cout % 3 === 0){
        $scope.display = FIZZBUZZ
      }
      else{$scope.display= cout }
    }


  })
  .controller('fozzbazzCtrl', function($scope,counter){
      var cout  = 0;
    var increment = function( ){
      counter.countfizz (cout);
      if(cout % 4 === 0){
        $scope.display = FOZZ;
      }
      else if(cout % 6 === 0){
        $scope.display = BAZZ
      }
      else if(cout % 4 === 0 && cout % 6 === 0){
        $scope.display = FOZZBAZZ
      }
      else{$scope.display = cout }
    }


  });
