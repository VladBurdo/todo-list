(function() {
  'use strict';

  angular
  .module('mainList')
  .controller('ToDoListController', ToDoListController);

  ToDoListController.$inject = ['toDoListService'];

  function ToDoListController(toDoListService) {
    var vm = this;

    vm.filterPriority = 0;
    vm.addPriority = 0;
    vm.newName = '';
    vm.getPriority = getPriority;
    vm.doneAddFilter = doneAddFilter;
    vm.setPriority = setPriority;
    vm.addList = addList;
    vm.close = close;
    vm.complied = complied;

    activate();

    //activation and obtaining the desired sheet
    function activate() {
      console.log('OutputList Controller activated');
      vm.taskList = toDoListService.getList();
      vm.infoList = toDoListService.getInfo();
    }

    //importance of the data filter
    function getPriority() {
      if (vm.filterPriority === 0) {
        vm.filterPriority = 1;
      }else {
        vm.filterPriority = 0;
      }
    }

    //my filter that shows the priority paragraphs
    function doneAddFilter(item) {
      if (vm.filterPriority === 0) {
        return item.name && item.priority > -1;
      }else {
        return item.name && item.priority > 0;
      }
    }

    //receiving priority in the decision show "important"
    function setPriority() {
      if (vm.addPriority === 0) {
        vm.addPriority = 1;
      }else {
        vm.addPriority = 0;
      }
    }

    //drawing up a new handler section and sending it into a sheet
    function addList() {
      if (vm.newName) {
        vm.add = {
          name: vm.newName,
          priority: vm.addPriority
        };
        toDoListService.addParagraph(vm.add);
      }
      vm.newName = '';
    }

    //closing section and send the removal from the list
    function close(index) {
      toDoListService.delParagraph(index);
    }

    //clicking on paragraph handler
    function complied(index) {
      toDoListService.check(index);
  }

  }
})();
