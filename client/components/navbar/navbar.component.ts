'use strict';
/* eslint no-sync: 0 */
const angular = require('angular');

export class NavbarComponent {
  state;
  title: string = '';
  name: string = '';

  menu = [
    {'title': 'My Candidates', 'state': '/'},
    {'title': 'My Candidates', 'state': '/recruiterview'},
    {'title': 'Demo Main', 'state': '/main'},
    {'title': 'Candidate PEF Assignment', 'state': '/samplepef'},
    {'title': 'PEF Admin', 'state': '/pefview'},
    {'title': 'Candidate Profile', 'state': '/candidateprofile'},
    {'title': 'Delete Users', 'state': '/admin'},
    {'title': 'Change Password', 'state': '/settings'}
  ];

  isLoggedIn: Function;
  isAdmin: Function;
  getCurrentUser: Function;
  isCollapsed = true;

  constructor($location, Auth) {
    'ngInject';
    this.isLoggedIn = Auth.isLoggedInSync;
    this.isAdmin = Auth.isAdminSync;
    this.getCurrentUser = Auth.getCurrentUserSync;

    this.state = $location;
  }

  /*@ngInject*/
  $onInit() {
    this.name = this.state.$$path;

    for (let i=0; i<this.menu.length;i++) {
      if(this.menu[i].state === this.name) {
        this.title = this.menu[i].title;
      }
    }
//    this.title = 'My Candidates';

  } //oninit
}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
  .name;
