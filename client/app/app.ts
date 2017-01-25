'use strict';
const angular = require('angular');
// import ngAnimate from 'angular-animate';
const ngCookies = require('angular-cookies');
const ngResource = require('angular-resource');
const ngSanitize = require('angular-sanitize');
const uiRouter = require('angular-ui-router');
const uiBootstrap = require('angular-ui-bootstrap');
// const ngMessages = require('angular-messages');
// import ngValidationMatch from 'angular-validation-match';

import {routeConfig} from './app.config';

import _Auth from '../components/auth/auth.module';
import account from './account';
import admin from './admin';
import navbar from '../components/navbar/navbar.component';
import recruitbanner from '../components/recruitbanner/recruitbanner.component';
import main from './main/main.component';
import samplepef from './samplepef/samplepef.component';
import recruiterview from './recruiterview/recruiterview.component';
import pefview from './pefview/pefview.component';
import candidateprofile from './candidateprofile/candidateprofile.component';
import allocationview from './allocationview/allocationview.component';
import personal from './candidateprofile/personal/personal.component';
import grid from './grid/grid.component';
import exams from './candidateprofile/exams/exams.component';
import constants from './app.constants';
import util from '../components/util/util.module';
import treeGrid from './treeGrid/treeGrid.directive';

import './app.scss';

angular.module('mcrissDemoApp', [
  ngCookies,
  ngResource,
  ngSanitize,
  uiRouter,
  uiBootstrap,

  _Auth,
  account,
  admin, navbar, recruitbanner,
  main,
  grid,
  samplepef,
  recruiterview,
  pefview,
  candidateprofile,
  allocationview,
  personal,
  exams,
  constants,
  util,
  treeGrid
])
  .config(routeConfig)
  .run(function($rootScope, $location, Auth) {
    'ngInject';
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function(event, next) {
      Auth.isLoggedIn(function(loggedIn) {
        if(next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });

angular
  .element(document)
  .ready(() => {
    angular.bootstrap(document, ['mcrissDemoApp'], {
      strictDi: true
    });
  });
