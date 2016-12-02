'use strict';
/* eslint no-sync: 0 */
const angular = require('angular');

export class NavbarComponent {
  menu = [
    {
    'title': 'Home',
    'state': 'main'
  },
    {
      'title': 'PEF Detail',
      'state': 'pefDetail'
    },
    {
      'title': 'Test PEF',
      'state': 'samplepef'
    },
    {
      'title': 'Recruiter View',
      'state': 'recruiterview'
    },
    {
      'title': 'PEF View',
      'state': 'pefview'
    },
    {
      'title': 'Candidate Profile',
      'state': 'candidateprofile'
    }
  ];
  isLoggedIn: Function;
  isAdmin: Function;
  getCurrentUser: Function;
  isCollapsed = true;

  constructor(Auth) {
    'ngInject';
    this.isLoggedIn = Auth.isLoggedInSync;
    this.isAdmin = Auth.isAdminSync;
    this.getCurrentUser = Auth.getCurrentUserSync;
  }
}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
  .name;
