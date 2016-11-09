(function() {
  'use strict';

  angular
  .module('routerModule')
  .config(function($stateProvider) {

    var toDoListState = {
      name: 'ToDoList',
      url: '/ToDoList',
      abstract: true,
      template: '<h3>Choose To Do List</h3>'
    }

  var fatherState = {
    name: 'ToDoList.father',
    url: '/father',
    resolve:{
         tasksDataFather:["toDoListService", taskDataFather]
       }
  }

  var motherState = {
    name: 'ToDoList.mother',
    url: '/mother',
    resolve:{
         tasksDataMother:["toDoListService", taskDataMother]
       }
  }

  var sonState = {
    name: 'ToDoList.son',
    url: '/son',
    resolve:{
         tasksDataSon:["toDoListService", taskDataSon]
       }
  }

  $stateProvider.state(toDoListState);
  $stateProvider.state(fatherState);
  $stateProvider.state(motherState);
  $stateProvider.state(sonState);

  function taskDataFather(toDoListService){
      return toDoListService.getData("./JSON/fatherToDoList.json");
   }

  function taskDataMother(toDoListService){
       return toDoListService.getData("./JSON/motherToDoList.json");
    }

  function taskDataSon(toDoListService){
        return toDoListService.getData("./JSON/sonToDoList.json");
     }
});
})();
