// lab: ng-repeat 介紹

angular.module('myApp', [])
.controller('helloWorld', ["$scope", "$http", function($scope, $http) {

   $scope.name = 'ng-repeat orderBy 介紹';

   // 排序
   $scope.sortField = 'daliyInflow';
   $scope.sortType = '';
  
   $http({url:"http://140.109.6.150:10080/", "method":"GET"})
     .success(function(waterData) {
        $scope.lists = waterData.data;
        angular.forEach($scope.lists, function (list) {
           list.daliyInflow = parseFloat(list.daliyInflow);
        });
     })
   .error(function(data){ console.log(data) });
  
   $scope.addPsn = function(person)  {
     $scope.lists.push(person);
     $scope.person = {};
   };
}])
;
