var artistController = angular.module('artistControllers',[]);

artistController.controller('ListController',['$scope','$http',function($scope,$http){
	$http.get('js/data.json').success(function(data){
		$scope.artists= data;	
		$scope.artistOrder = 'name';
	});
}]);

artistController.controller('DetailsController',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
	$http.get('js/data.json').success(function(data){
		$scope.artists = data;
		$scope.whichItem = $routeParams.itemId;
	});
}]);

// var myNameSpace = angular.module('myApp',[]);
// myNameSpace.controller('MyController',
// 	function($scope){
// 		$scope.author={
// 			'name':'Vedant Jain',
// 			'site':'Gimphy',
// 			'city':'Jodhpur'
// 		}
// 	});