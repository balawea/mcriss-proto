'use strict';
/* eslint no-sync: 0 */
const angular = require('angular');

export class NavbarComponent {
  isLoggedIn: Function;
  isAdmin: Function;
  getCurrentUser: Function;
  isCollapsed = true;

  /*@ngInject*/
  constructor($location, $scope, $rootScope, $state, Auth) {
    this.isLoggedIn = Auth.isLoggedInSync;
    $scope.isLoggedIn = Auth.isLoggedInSync;
    this.isAdmin = Auth.isAdminSync;
    this.getCurrentUser = Auth.getCurrentUserSync;
    
    //update the page header text on state change.
    //have to save this to $scope? 
    $rootScope.$on('$stateChangeSuccess', function(event, toState) {
      $scope.title;
      $scope.profileHeader;
      $scope.name = toState.url;
      $scope.menu = [
          {'title': 'My Candidates', 'state': '/', profileHeader: false},
          {'title': 'My Candidates', 'state': '/recruiterview', profileHeader: false},
          {'title': 'Demo Main', 'state': '/main', profileHeader: false},
          {'title': 'PEF Assignment', 'state': '/samplepef', profileHeader: true},
          {'title': 'Program Management', 'state': '/pefview', profileHeader: false},
          {'title': 'Candidate Profile', 'state': '/candidateprofile', profileHeader: true},
          {'title': 'Allocation View', 'state': '/allocationview', profileHeader: false},
          {'title': 'Login', 'state': '/login', profileHeader: false},
          {'title': 'Change Password', 'state': '/settings', profileHeader: false},
          {'title': 'Delete Users', 'state': '/admin', profileHeader: false},
          {'title': 'Change Password', 'state': '/settings', profileHeader: false}
        ];
      
      for (let i=0; i<$scope.menu.length;i++) {
        if($scope.menu[i].state === $scope.name) {
          $scope.title = $scope.menu[i].title;
          $scope.profileHeader = $scope.menu[i].profileHeader;
        }
      }
      
//      if (!$scope.isLoggedIn())
//        $state.go('login');

      
      //clear the recruit selection and header
      if (!$scope.profileHeader)
        $rootScope.$broadcast('SELECT_RECRUIT', undefined);

    });
  }

}// class

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
  .name;
