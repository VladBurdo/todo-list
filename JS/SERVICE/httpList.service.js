(function() {
  'use strict';

  angular
  .module('app.httpList')
  .factory('httpListService', HttpListService);

  HttpListService.$inject = ['$http', '$q']

  function HttpListService($http, $q) {

    var fileInf = [];

    var file= ["./JSON/mother.json","./JSON/father.json","./JSON/son.json"]

    var service = {
      getData: getData,
      randomInteger: randomInteger,
      getFileInf: getFileInf,
    };
    return service;

    //receive data from JSOn file
    function getData() {
      return $http.get(file[randomInteger()])
      .then(function(res) {
      fileInf.push(res.data.familymember);
      fileInf.push(res.data.name);
      fileInf.push(res.data.age);
      return $http.get(res.data.toDoList);
      })
      .then(function(res) {
        return res.data.taskList;
      },function(){
            alert("file not found error");
        })
    }

    function randomInteger() {
      var rand = 0 + Math.random() * (3);
      rand = Math.floor(rand);
      return rand;
    }

    function getFileInf() {
      return fileInf;
    }


  }
})();
