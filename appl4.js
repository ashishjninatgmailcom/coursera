(function(){

'use strict';

angular.module('myFirstApp',[])

.controller('myFirstController',function($scope){
$scope.name = "Ashish";
$scope.sayHello = function(){
  return "Hello Dear!";
};

});

})();
