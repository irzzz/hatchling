(function() {
    var app = angular.module('hatchling', []);

    //directives


    //controllers
    app.controller('ContentController', function($scope, $http) {
        $scope.content = {};
        $http.get('data/content.json').success(function(data){
            $scope.content = data[0];
        })
    });

})();