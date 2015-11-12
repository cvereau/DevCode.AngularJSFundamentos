/**
 * Created by User on 02/11/2015.
 */
(function(){
   "use strict";
    angular.module("newsWikiApp")
        .controller("NewsCtrl",["newsResource",NewsCtrl]);

    //min-safe array
    function NewsCtrl(newsResource) {
        var me = this;

        newsResource.query(function (data) {
            me.news = data;
        });

        me.onCategoryClick = function (category) {
            if(category){
                me.filterCategory = category;
            }
            else{
                me.filterCategory = "";
            }

        };
    }
}());