'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
const noUiSlider = require('nouislider');

import routes from './samplepef.routes';

export class SamplepefComponent {
  private message : string;
  $http;
  recruit;
  id;
  clslider;
  elslider;

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

    this.elslider = noUiSlider.create(document.getElementById('elslider'), {
      start:0,
      connect: true,
      step: 1,
      tooltips: true,
      range: {
        'min': 0,
        'max': 100
      },
      pips: {
        mode: 'steps',
        density: 4
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


export default angular.module('mcrissProtoApp.samplepef', [uiRouter])
  .config(routes)
  .component('samplepef', {
    template: require('./samplepef.html'),
    controller: SamplepefComponent,
    controllerAs: 'vm'
  })
  .name;
