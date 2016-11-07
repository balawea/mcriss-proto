'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
const noUiSlider = require('nouislider');
import routes from './samplepef.routes';

export class SamplepefComponent {
  $http;
  recruit;
  id;
  clslider;

  /*@ngInject*/
  constructor($http, $location) {
    this.$http = $http;
    this.id = $location.hash();

    /*
    this.clslider = noUiSlider.create(document.getElementById('clslider'), {
      start:0,
      connect: true,
      step: 1,
      range: {
        'min': 0,
        'max': 100
      },
      pips: {
        mode: 'steps',
        density: 2
      }
    });
*/

  }   //ctor

  /*@ngInject*/
  $onInit() {
    this.$http.get('/api/recruits/' + this.id).then(response => {
      this.recruit = response.data;
    });
  }   //oninit

} //class


export default angular.module('mcrissDemoApp.samplepef', [uiRouter])
  .config(routes)
  .component('samplepef', {
    template: require('./samplepef.html'),
    controller: SamplepefComponent,
    controllerAs: 'vm'
  })
  .name;
