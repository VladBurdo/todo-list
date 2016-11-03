(function() {

  angular
    .module('app.addToDoList')
    .directive('addList', addList);

  function addList() {
    var directive = {
      restrict: 'E',
      scope: {
        newData: '=', // transmission of a new variable
        checkClick: '&', //put a checked
        addClick: '&' //add a new paragraph
      },
      templateUrl: './JS/DIRECTIVE/add-list.html',
    };
    return directive;

  }

})();
