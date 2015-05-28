var App = angular.module('Inbreed', ['ionic']);

App.service('LoadInbreed', ['$http', LoadInbreed]);

function LoadInbreed($http) {
    this.getContent = function ($scope) {
        $http.get('test.json').success(function (result) {
          $scope.tabs   = result.tabs;
          $scope.bandinfo = result.bands;
          $scope.header = result.header;
        }).error(function (result) {
        });
    };
}

App.controller('InbreedCtrl', function ($scope, $ionicSideMenuDelegate, $ionicModal, $ionicSlideBoxDelegate, LoadInbreed) {

    $scope.setSelectedBand = function (index) {
        $scope.selectedBand = index;
    };

    $scope.currentSlide = 0;

    $scope.isActive = function (item) {
        return $scope.currentSlide == item;
    };

    $scope.refresh  = LoadInbreed.getContent($scope);

    $scope.setActiveSlide = function (index) {
        $ionicSlideBoxDelegate.slide(index);
        $scope.currentSlide = index;
    };

    $ionicModal.fromTemplateUrl('band_closeup.html', function (modal) {
        $scope.taskModal = modal;
    }, {
        scope: $scope
    });

    $scope.openModal = function () {
        $scope.taskModal.show();
    };

    $scope.closeModal = function () {
        $scope.taskModal.hide();
    };

    $ionicModal.fromTemplateUrl('map.html', function (modal) {
        $scope.mapModal = modal;
    }, {
        scope: $scope
    });

    $scope.openMapModal = function () {
        $scope.mapModal.show();
    };

    $scope.closeMapModal = function () {
        $scope.mapModal.hide();
    };

});
