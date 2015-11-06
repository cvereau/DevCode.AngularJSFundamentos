/**
 * Created by User on 02/11/2015.
 */
(function () {
   "use strict";

    angular.module("newsWikiApp")//camel case
        .controller("CategoriesCtrl", CategoriesCtrl) //pascal case

    function CategoriesCtrl(){
        var me = this;

        me.categories = ["Economia","Politica","Deportes","Moda","Mundo"];

        me.showCategories = false;

        me.toggleCategories = function () {
              me.showCategories = !me.showCategories;
        };

    }


}());