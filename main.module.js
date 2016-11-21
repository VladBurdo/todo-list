//import angular from 'angular';
import headerModule from './JS/COMPONENT/header.component.js';

(function() {

  angular.module('mainList', [
  // Helpers modules
  'app.toDoList',
  'app.httpList',
  'app.addToDoList',
  'routerModule',
  headerModule.name
]);

})();
