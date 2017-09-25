(function(){
'use strict';

angular.module('NameCalculator',[])
.controller('NameCalculatorController',function($scope){
  $scope.name="";
  $scope.totalval=0;

  $scope.DisplayNumeric=function(){
    var totalnumval = calculateNumericForString($scope.name);
    $scope.totalval = totalnumval;
  };

  function calculateNumericForString(string)
  {
    var totalstrval=0;
    for(var i=0; i<string.length;i++ )
    {
      totalstrval += string.charCodeAt(i);
    }

    return totalstrval;
  };

});

})

();
