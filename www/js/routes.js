angular.module('app.routes',[])

.config(function($stateProvider, $urlRouterProvider) {


  $stateProvider

     .state('index', { url: '/', templateUrl: 'index.html'})

      .state('login', { url: '/login', templateUrl: 'templates/login.html', controller: 'loginCtrl'})

      // abstract cet objet state tab n a pas de view..et pour loading before other tab..
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    .state('tab.commandesParMois', {
      url: '/commandesParMois',
      views: {
        'tab-chart-commandesParMois': {
          templateUrl: 'templates/tab-chart-commandesParMois.html',
          controller: 'chartCommandesParMoisCtrl'
        }
      }
    })

    .state('tab.commandes', {
      url: '/commandes',
      views: {
        'tab-chart-commandes': {
          templateUrl: 'templates/tab-chart-commandes.html',
          controller: 'chartCommandesCtrl'
        }
      }
    })

    .state('tab.facturesNonPayees', {
      url: '/facturesNonPayees',
      views: {
        'tab-grid-facturesNonPayees': {
          templateUrl: 'templates/tab-grid-facturesNonPayees.html',
          controller: 'gridFacturesNonPayeesCtrl'
        }
      }
    })

    //////////////////////////////MEnu

    .state('menu', {
      url: "/menu",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'menuCtrl'
    })

    .state('menu.produits', {
      url: "/produits",
      views: {
        'menuContent': {
          templateUrl: "templates/produits.html"
        }
      }
    })

    .state('menu.produitInfo', {
      url: "/produits/:produitId",
      views: {
        'menuContent': {
          templateUrl: "templates/produitInfo.html",

        }
      }
    })

    .state('menu.envoyerMessage', {
      url: "/envoyerMessage",
      views: {
        'menuContent': {
          templateUrl: "templates/envoyerMessage.html"
        }
      }
    })
    .state('menu.mesRemises', {
      url: "/mesRemises",
      
      views: {
        'menuContent': {
          templateUrl: "templates/mesRemises.html"

        }
      }
    })

    .state('menu.mesCotations', {
      url: "/mesCotations",
      views: {
        'menuContent': {
          templateUrl: "templates/mesCotations.html"

        }
      }
    })

/////////////MesRemises

    .state('menu.mesRemises.mesRemisesEncours', {
      url: "/mesRemisesEncours",
      views: {
        'mesRemisesEncours': {
          templateUrl: "templates/mesRemisesEncours.html"

        }
      }
    })

    .state('menu.mesRemises.mesRemisesHistorique', {
      url: "/mesRemisesHistorique",
      views: {
        'mesRemisesHistorique': {
          templateUrl: "templates/mesRemisesHistorique.html"

        }
      }
    })



  ;


$urlRouterProvider.otherwise('/login')

});
