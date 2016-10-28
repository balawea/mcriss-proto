'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');
const noUiSlider = require('nouislider');

import routes from './samplepef.routes';

export class SamplepefComponent {
  private message : string;

  /*@ngInject*/
  constructor() {

    this.message = 'Hello this is a test';
    //TODO, obviously we don't want to ever set up a slider like this ever. it should be a directive
    noUiSlider.create(document.getElementById('clslider'), {
      start: 0,
      connect: [true, false],
      step: 1,
      //tooltips: wNumb({decimals: 0}),
      range: {
        'min': 0,
        'max': 300
      },

      pips: {
        mode: 'positions',
        values: [0,25,50,75,100],
        density: 4

      }
    });
  }
}

export default angular.module('mcrissProtoApp.samplepef', [uiRouter])
  .config(routes)
  .component('samplepef', {
    template: require('./samplepef.html'),
    controller: SamplepefComponent,
    controllerAs: 'vm'
  })
  .name;
