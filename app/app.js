/**
 * Created by User on 02/11/2015.
 */
//IIFE Immediately Invoked Function Expression
(function(){
    "use strict";
    var app = angular.module("newsWikiApp",
                                    ["common.services",
                                     "common.servicesMock",
                                     "ui.router"]);

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "app/welcomeView.html"
            })
            .state("newsList",{
                url: "/noticias",
                templateUrl: "app/news/newsListView.html",
                controller: "NewsCtrl as vm"
            })
            .state("newsDetail",{
                url:"/noticias/:idNoticia",
                templateUrl: "app/news/newsDetailView.html",
                controller: "NewsDetailCtrl as vm",
                resolve:{
                    newsResource: "newsResource",
                    newsItem: function (newsResource, $stateParams) {
                        var idNoticia = $stateParams.idNoticia;
                        return newsResource.get({idNoticia: idNoticia}).$promise;
                    }
                }
            })
    });

}());

