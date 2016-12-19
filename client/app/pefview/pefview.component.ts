'use strict';
const angular = require('angular');
const noUiSlider = require('nouislider');
const uiRouter = require('angular-ui-router');
const Masonry = require('masonry-layout');

import routes from './pefview.routes';

export class PefviewComponent {
  $http;
  $timeout;
  id;
  pefs;
  selectedPef;
  selectedPefId;
  req;
  isEditing;
  elems;
  msnry;
  isAdmin: Function;

  /*@ngInject*/
  constructor($http, $location, $timeout, Auth) {
    this.$http = $http;
    this.id = $location.hash();
    this.isAdmin = Auth.isAdminSync;
    this.$timeout = $timeout;
  }

  /*@ngInject*/
  $onInit() {
    this.isEditing = false;

    this.$http.get('/api/pefRequirements/')
      .then(responsePef => {
        this.pefs = responsePef.data;
        this.setVisibility(this.pefs);
        this.select(this.pefs[0]);
        return this.pefs;
      })
    .then(response => {
      this.msnry = new Masonry( '.grid', {
        itemSelector: '.grid-item',
        columnWidth: 275,
        transitionDuration: '0.8s'
      })
      
      this.layout(this.msnry);
    })

  }   //oninit

  isReadOnly(){
    let res = !(this.isAdmin() && this.isEditing === true);
    return res;
  }

  select(pef) {
    this.selectedPef = pef;
    this.layout(this.msnry);
  }

  layout(msnry) {
    this.$timeout(function() {
      msnry.layout();
    }, 200, false);
  }

  refresh(msnry) {
    this.$timeout(function() {

      msnry = new Masonry( '.grid', {
        itemSelector: '.grid-item',
        columnWidth: 275,
        transitionDuration: '0.8s'
      });
    }, 200, false);
  }

  hide(obj) {
    this.selectedPef.pefvis[obj] = false;
    this.layout(this.msnry);
  }

  restore() {
    for (let pkey in this.selectedPef.pefvis) {
      this.selectedPef.pefvis[pkey] = true;
    }
    this.layout(this.msnry);
  }

  save() {
    if (this.selectedPef) {
      this.$http.put('/api/pefRequirements/' + this.selectedPef._id, this.selectedPef);
      this.isEditing = false;
      console.info('saved');
    }
  }

    //to cancel edits on a single pef, need to fetch it and replace it in the pefs array.
    //The problem with that is that multiple pefs may have been edited in the meantime.
  cancel() {
    if (this.selectedPef) {
      this.selectedPefId = this.selectedPef._id;
      this.$http.get('/api/pefRequirements/' + this.selectedPef._id)
      .then(pef => {

        for(let i=0;i<this.pefs.length;i++){
          if(this.pefs[i]._id === this.selectedPefId){
            this.pefs.splice(i, 1, pef.data);
            this.select(this.pefs[i]);
          }
        }
      });

      console.info('canceled');
    }
  }

  setVisibility(pefs) {
    for (let pef of pefs) {
      pef.pefvis = {per: true, edu: true, toe: true, cle: true, sco: true, cit: true, vis: true, dri: true, mor: true, cer: true, scr: true};
    }
    return pefs;
  }

} // class


export default angular.module('mcrissDemoApp.pefview', [uiRouter])
  .config(routes)
  .component('pefview', {
    template: require('./pefview.html'),
    controller: PefviewComponent,
    controllerAs: 'vm'
  })
  .name;
