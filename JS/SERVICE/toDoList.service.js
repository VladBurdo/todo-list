(function() {
  'use strict';

  angular
  .module('app.toDoList')
  .factory('toDoListService', ToDoListService);

  ToDoListService.$inject = ['$http', '$q', 'httpListService']

  function ToDoListService($http, $q, httpListService) {

    var list = [];
    var infoFile = '';

    var service = {
      getData: getData,
      getList: getList,
      delParagraph: delParagraph,
      addParagraph: addParagraph,
      check: check,
      getInfo: getInfo,
    };
    return service;

    //receiving data
    function getData() {
      var res = httpListService.getData().then(function(res) {
        for (var obj in res) {
          addParagraph(res[obj]);
        }
      });
      infoFile = httpListService.getFileInf();
    }

    //receiving todo list
    function getList() {
      getData();
      return list;
    }

    //removal section with sheet handler
    function delParagraph(value) {
      list.splice(value, 1);
    }

    //add a handler section with a sheet
    function addParagraph(value) {
      list.push(value);
    }

    //in which the handler class changes
    function check(index) {
      if (list[index].class) {
        list[index].class = "";
      }else {
        list[index].class = "checked";
      }
    }

    function getInfo() {
      return infoFile;
    }


  }
})();
