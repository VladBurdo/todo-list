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
    function getData(value) {
      list.splice(0,list.length);
      var res = $http.get(value).then(function(res) {
        for (var obj in res.data.taskList) {
          addParagraph(res.data.taskList[obj]);
        }
      });
    }

    //receiving todo list
    function getList() {
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
