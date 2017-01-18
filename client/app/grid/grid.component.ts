'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
const paginate = require('angular-utils-pagination');
import routes from './grid.routes';

export class GridComponent {
  
  $http;
  $scope;
  recruits;
  sortColumn;
  reverse;
  itemsperpage;
  
  /*@ngInject*/
  constructor($http, $scope) {
    this.$http = $http;
    this.$scope = $scope;
    this.reverse = false;
    this.itemsperpage = 100;

  } //ctor
  
  /*@ngInject*/
  $onInit() {
    this.$http.get('/api/griddata/').then(res => {
      this.recruits = res.data;
    });
  } //init

  sortBy(col){
    //if resorting the current column, reverse the sort order
    //else default to ascending for the new column
    if (this.sortColumn===col)
      this.reverse = !this.reverse;
    else  {
      this.reverse = false;
      this.sortColumn = col;
    }
  }
  
  filter(txt) {
    return function(item) {

      if (txt === undefined) {
        return true;
      }
      
      var txtmatch = false;
      var txtlow = (txt || '').toLowerCase();

      txtmatch = (txt === undefined) || (item.firstName.toLowerCase().includes(txtlow) || item.lastName.toLowerCase().includes(txtlow) || item.middleName.toLowerCase().includes(txtlow) || item.status.toLowerCase().includes(txtlow) || item.ssn.includes(txtlow) || item.age === txtlow || item.rs.toLowerCase().includes(txtlow));
      
      return txtmatch;
    }
  }//

  
} //class

export default angular.module('mcrissDemoApp.grid', [uiRouter, paginate])
  .config(routes)
  .component('grid', {
    template: require('./grid.html'),
    controller: GridComponent,
    controllerAs: 'vm'
  })
  .name;
