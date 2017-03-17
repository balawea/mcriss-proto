'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routes from './recruiterview.routes';

export class RecruiterviewComponent {
  $http;
  recruits;
  male = false;
  $state;
  female = false;
  starred = false;
  getCurrentUser: Function;

  /*@ngInject*/
  constructor($http, $state, Auth) {
    this.$http = $http;
    this.getCurrentUser = Auth.getCurrentUser;
    this.$state = $state;
  } //ctor

  $onInit() {

    this.getCurrentUser( (user) => {
      let path;

      //send to login page if logged out
      if (user._id === '') {
        this.$state.go('login');
      }
      
      if (user.role === 'admin')
        path = '/api/recruits/lite/0';
      else
        path = '/api/recruits/findbyrec/' + user.recruiterId;
          
      this.$http.get(path).then(response => {
        
        for (let r of response.data) {
          
          if (r.notif === undefined)
            continue;
          
          let notification;
          let days = r.notif.daysuntil;
          let note = r.notif.note;
          
          if (days === 0)
            notification = 'Due today:  ' + note;
          else if (days === 1)
            notification = 'Due tomorrow: ' + note;
          else
            notification = 'Due in ' + days + ' days: ' + note;
          
          r.notification = notification;
        }
        
        this.recruits = response.data;
        this.recruits.sort(this.byNotificationDueDate);
      });
    }); // get user
  }//oninit

  byNotificationDueDate(a, b) {
    if (a.notif === undefined)
      return 1;
    
    if (b.notif === undefined)
      return -1;
    
    let adays = a.notif.daysuntil;
    let bdays = b.notif.daysuntil;
    
    if (adays < bdays)
      return -1;
    if (adays > bdays)
      return 1;

    return 0;
  }

  sort() {
    this.recruits.sort(this.byNotificationDueDate);
  }

  //filter the candidate tiles by the search criteria 
  filter(txt, alerttype, male, female, starred) {
    return function(item) {

      if (txt === undefined && alerttype === undefined && male === false && female === false && starred === false) {
        return true;
      }
      
      var txtmatch = false;
      var alertmatch = false;
      var malematch = false;
      var femalematch = false;
      var starmatch = false;
      var txtlow = (txt || '').toLowerCase();
      var apef = '[' + ((item.assignedPef || {}).pefCode || '').toLowerCase() + ']';
      var ssn = ((item.personal || {}).ssn || '');
      var age = item.age.val;
      var duty = ((item.dutyType || {}).desc || '').toLowerCase();
      
      if (male === female === true)
        male = female = false;

      txtmatch = (txt === undefined) || (item.firstName.toLowerCase().includes(txtlow) || item.lastName.toLowerCase().includes(txtlow) || item.status.toLowerCase().includes(txtlow) || apef.includes(txtlow) || ssn.includes(txtlow) || age === txtlow || duty.includes(txtlow));

      alertmatch = (alerttype === undefined) || (item.notif != undefined) &&(item.notif.activity === alerttype);
      malematch = (male === false) || (item.match.sex.val === 'M');
      femalematch = (female === false) || (item.match.sex.val ==='F');
      starmatch = (starred === false) || (item.assignedPef != undefined && item.assignedPef.pefCode != undefined);

      return txtmatch && alertmatch && malematch && femalematch && starmatch;
    }
  }//

}// class

export default angular.module('mcrissDemoApp.recruiterview', [uiRouter])
  .config(routes)
  .component('recruiterview', {
    template: require('./recruiterview.html'),
    controller: RecruiterviewComponent,
    controllerAs: 'vm'
  })
  .name;
