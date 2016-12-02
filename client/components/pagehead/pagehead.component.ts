'use strict';
/* eslint no-sync: 0 */
const angular = require('angular');

export class PageheadComponent {
  title;
  recruiter;
  id;

  constructor(Title, recid) {
    'ngInject';
    this.title = Title;
    this.id = recid;
  }
}

export default angular.module('directives.pagehead', [])
  .component('pagehead', {
    template: require('./pagehead.html'),
    controller: PageheadComponent
  })
  .name;
