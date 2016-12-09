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
  msnry;
  elems;
  masterElems;
  elem;
  item = {};
  items;
  masterItems;
  isAdmin: Function;

  /*@ngInject*/
  constructor($http, $location, $timeout, Auth) {
    this.$http = $http;
    this.id = $location.hash();
    this.isAdmin = Auth.isAdminSync;
  }

  /*@ngInject*/
  $onInit() {
    this.$http.get('/api/pefRequirements/').then(responsePef => {
      this.pefs = responsePef.data;
    })
    .then(foo => {
      this.msnry = new Masonry( '.grid', {
        itemSelector: '.grid-item',
        columnWidth: 275,
        transitionDuration: '0.8s'
      }).once('layoutComplete', function() {
        console.log('layout complete!');
      });
      
//      this.msnry.layout();
      this.elems = this.msnry.getItemElements();
      this.isEditing = false;
//      this.items = this.masterItems = Masonry.data('.grid');
    });


  }   //oninit

  isReadOnly(){
    let res = !(this.isAdmin() && this.isEditing === true);
    return res;
  }

  remove(element) {
    this.msnry.remove(this.elems[element]);
//
////    this.msnry.reloadItems();
    this.msnry.layout();
    //console.log('REMOVE - msnry.getItemElements().length=' + this.msnry.getItemElements().length);
  }

  layout() {
    //console.log('LAYOUT BEGIN - msnry.getItemElements().length=' + this.msnry.getItemElements().length);

    //console.log(this.masterElems[0]);
    
    /// none of this crap works
//    this.items.splice(0,0,this.item);
//    this.msnry.addItems([this.item]);
      //this.msnry.prepended(this.masterElems[0]);
    //this.items = Masonry.data('.grid');
    //this.msnry.reloadItems();
    
    //    this.elems = this.msnry.getItemElements();

    //this.msnry.layoutItems([this.masterElems[0]], true);

    //console.log(this.msnry.getItemElements());
    //console.log('LAYOUT END - msnry.getItemElements().length=' + this.msnry.getItemElements().length);
    console.log('layout()');
      this.msnry.layout();
  }

  select(pef) {
    this.selectedPef=pef;
    this.layout();
  }

  save() {
    if (this.selectedPef) {

      this.$http.put('/api/pefRequirements/' + this.selectedPef._id, this.selectedPef);
      this.isEditing = false;
      console.log(this.selectedPef);
      console.log('saved');
    }
  }

    //to cancel edits on a single pef, need to fetch it and replace it in the pefs array.
    //The problem with that is that multiple pefs may have been edited in the meantime. 
  cancel() {
    if (this.selectedPef) {
      this.selectedPefId = this.selectedPef._id;
      this.$http.get('/api/pefRequirements/' + this.selectedPef._id)
      .then(pef => {

        console.log(pef.data);
        for(let i=0;i<this.pefs.length;i++){
          if(this.pefs[i]._id === this.selectedPefId){
            this.pefs.splice(i, 1, pef.data);
            this.select(this.pefs[i]);
            //this.isEditing = false;
          }
        }
      });
      
      console.log('canceled');
    }
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



