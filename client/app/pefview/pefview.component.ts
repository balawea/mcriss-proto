'use strict';
const angular = require('angular');
const noUiSlider = require('nouislider');
const uiRouter = require('angular-ui-router');
const Masonry = require('masonry-layout');

import routes from './pefview.routes';

export class PefviewComponent {
  $http;
  id;
  p; //master list of pefs
  pefs;  //pefs for display
  selectedPef;
  req;
  msnry;
  isAdmin: Function;

  /*@ngInject*/
  constructor($http, $location, Auth) {
    this.$http = $http;
    this.id = $location.hash();
    
    this.isAdmin = Auth.isAdminSync;

  }

  /*@ngInject*/
  $onInit() {
    this.$http.get('/api/pefRequirements/').then(responsePef => {
      this.p = responsePef.data;
      this.pefs = this.p;
    })
    .then(foo => {
      this.msnry = new Masonry( '.grid', {
        itemSelector: '.grid-item',
        columnWidth: 275,
        transitionDuration: '0.7s'
      });

      //re-lay the tiles. May not prevent tile overlap.
        this.msnry.layout();
    });

  }   //oninit
  
  layout() {
//    this.msnry = new Masonry( '.grid', {
//        itemSelector: '.grid-item',
//        columnWidth: 275,
//        transitionDuration: '0.9s'
//      });

        this.msnry.layout();
    console.log(this.selectedPef);
  }
  
}

export default angular.module('mcrissDemoApp.pefview', [uiRouter])
  .config(routes)
  .component('pefview', {
    template: require('./pefview.html'),
    controller: PefviewComponent,
    controllerAs: 'vm'
  })
  .name;



