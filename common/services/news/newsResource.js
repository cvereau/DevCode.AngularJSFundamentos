/**
 * Created by User on 06/11/2015.
 */
(function () {
    "use strict";

    angular.module("common.services")
        .factory("newsResource",newsResource)

    function newsResource($resource){
        return $resource("/api/noticias/:idNoticia");
    }
}());