(function() {
  'use strict';

  angular
  .module('app.httpList')
  .factory('httpListService', HttpListService);

  HttpListService.$inject = ['$http', '$q']

  function HttpListService($http, $q) {

    var service = {
      getData: getData,
    };
    return service;

    //receive data from JSOn file
    function getData() {
      return $http.get('./JSON/data.json').then(function(res) {
        return res.data.taskList;
      })
    }


  }
})();
