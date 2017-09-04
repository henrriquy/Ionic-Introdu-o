// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })


  .controller("btnController", function ($scope) {
    $scope.alteraNomeBtn = function (nome) {
      $scope.nomeBtn1 = nome;
    };
    $scope.alteraNomeBtn2 = function (nome) {
      $scope.nomeBtn2 = nome;
    };

    $scope.desabilitar = false;
  })
  .controller("MeuController", function ($scope) {
    $scope.itens = [1, 2, 3, 4];
    $scope.moveItem = function (item, fromIndex, toIndex) {
      $scope.itens.splice(fromIndex, 1);
      $scope.itens.splice(toIndex, 0, item);
    };
  })

  .controller("appController", function ($scope) {
    $scope.noticias = [
      {
        titulo: 'Noticia 1',
        nome: 'Pedro',
        imgUser: 'ionic.png',
        imgNot: 'ionic.png'
      },
      {
        titulo: 'Noticia 2',
        nome: 'Ana',
        imgUser: 'ionic.png',
        imgNot: 'ionic.png'
      }, {
        titulo: 'Noticia 3',
        nome: 'Tatiane',
        imgUser: 'ionic.png',
        imgNot: 'ionic.png'
      }
    ];
    console.log($scope.noticias);
  })

  .controller("formController", function ($scope) {
    $scope.form = function () {
      alert($scope.nome);
    };
  })

  .controller("appController", function ($scope, $ionicModal) {
    $scope.contatos = [
      { nome: "Camille", email: "camila@email.com" },
      { nome: "Renato", email: "renato@email.com" },
      { nome: "Alice", email: "alice@email.com" }
    ];
    $ionicModal.fromTemplateUrl('templates/modal.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });
    $scope.addContato = function (contato) {
      $scope.contatos.push({ nome: contato.nome, email: contato.email });
      contato.nome = "";
      contato.email = "";

      $scope.modal.hide();
    };
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/layout.html'
      })
      .state('app.home', {
        url: '/home',
        views: {
          'layoutContent': {
            templateUrl: 'templates/home.html'
          }
        },

      })
      .state('app.sobre', {
        url: '/sobre',
        views: {
          'layoutContent': {
            templateUrl: 'templates/sobre.html'
          }
        },
      })
      ;
    $urlRouterProvider.otherwise('/app/home')

  })