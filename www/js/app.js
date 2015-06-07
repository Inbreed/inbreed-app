// Initialize angular
var App = angular.module('Inbreed', ['ionic']);

// Fix for android issue with tabs
App.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
});

// Load content
App.service('LoadInbreed', ['$http', LoadInbreed]);
function LoadInbreed($http) {
    this.getContent = function ($scope) {
        $http.get('test.json').success(function (result) {
          $scope.tabs   = result.tabs;
          $scope.news   = result.news;
          $scope.schema = result.schema;
          $scope.header	= result.header;
        }).error(function (result) {
        });
    };
}

App.controller('InbreedCtrl', function ($scope, $ionicSideMenuDelegate, $ionicModal, $ionicSlideBoxDelegate, LoadInbreed) {

    $scope.setNewsIndex = function (index) {
        $scope.newsIndex = index;
    };

    $scope.setBandIndex = function (index) {
        $scope.bandIndex = index;
    };

    $scope.refresh  = LoadInbreed.getContent($scope);

    // News modal
    $ionicModal.fromTemplateUrl('news.html', function (modal) {
        $scope.NewsModal = modal;
    }, {
        scope: $scope
    });

    $scope.openNewsModal = function () {
        $scope.NewsModal.show();
    };

    $scope.closeNewsModal = function () {
        $scope.NewsModal.hide();
    };

    // Band modal
    $ionicModal.fromTemplateUrl('band_closeup.html', function (modal) {
        $scope.bandModal = modal;
    }, {
        scope: $scope
    });

    $scope.openBandModal = function () {
        $scope.bandModal.show();
    };

    $scope.closeBandModal = function () {
        $scope.bandModal.hide();
    };

    // Map modal
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
