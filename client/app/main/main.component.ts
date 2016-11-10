const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routing from './main.routes';

export class MainController {
  $http;
  recruits = [];
  pefs = [];
  thing;

  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
  }

  $onInit() {
    this.$http.get('/api/recruits').then(response => {
      this.recruits = response.data;
    });

    this.$http.get('/api/pefRequirements').then(response => {
      this.pefs = response.data;
    });

  }

  updateThing() {
    if (this.thing) {
      this.$http.post('/api/things', { name: this.thing });
      this.thing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

export default angular.module('mcrissDemoApp.main', [uiRouter])
    .config(routing)
    .component('main', {
      template: require('./main.html'),
      controller: MainController
    })
    .name;
