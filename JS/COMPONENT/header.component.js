
class HeaderClass {

  constructor() {
    this.title = 'Family To Do List';
  }

  $onInit() {
    console.log('component initialized');
  }
}

export default angular
  .module('headerModule', [])
  .component('headerComponent', {
    template: `<h1 id="header">{{$ctrl.title}}</h1>`,
    controller: HeaderClass
  });
