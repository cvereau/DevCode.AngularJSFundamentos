/**
 * Created by User on 02/11/2015.
 */
(function () {
   "use strict";

    angular.module("newsWikiApp")//camel case
        .controller("CategoriesCtrl", ["categoriesService", CategoriesCtrl]) //pascal case

    function CategoriesCtrl(categoriesService){
        var me = this;

        categoriesRepository.getCategories(
            {
               categoriesService : categoriesService,
               success: function (data) {
                   me.categories = data;
               }
            }
        );

        me.showCategories = true;

        me.toggleCategories = function () {
              me.showCategories = !me.showCategories;
        };
    }

    // patron Revealing Module
    var categoriesRepository = (function () {
        var me = {};

        me.getCategories = function (options) {
            options.categoriesService.then(function (response) {
                options.success(response.data);
            });
        };

        return {
            getCategories : me.getCategories
        }
    }());

}());