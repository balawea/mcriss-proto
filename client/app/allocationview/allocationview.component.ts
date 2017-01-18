'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
const swal = require('sweetalert');
import routes from './allocationview.routes';

export class allocationviewComponent {
  $http;
  $state;
  rss;
  p;
  pefs;
  selectedPef;
  req;
  rs;
  seatarray;
  user;
  getUser : Function;

  /*@ngInject*/
  constructor($http, $state, Auth) {
    this.$http = $http;
    this.$state = $state;
    this.getUser = Auth.getCurrentUserSync;
  } //ctor
  
  /*@ngInject*/
  $onInit() {
    this.seatarray = [];
    this.rss = [];
    this.user = this.getUser();

    this.$http.get('/api/pefRequirements/').then(res => {
      this.pefs = this.p = res.data;

      this.pefs.sort(function(a, b) {
        let acode = a.pefCode;
        let bcode = b.pefCode;

        if (acode <= bcode)
          return -1;
        else
          return 1;
      });

      this.$http.get('/api/rss/children/' + this.user.rs).then(rss => {
        this.rss = rss.data;
        this.select(this.pefs[0]);
        this.getAllocations(this.rss, this.user);
      });
    }); //get
  } //oninit

  select(pef) {
    this.selectedPef = pef;

    if (this.rss.length > 0) {
      this.getAllocations(this.rss, this.user);
    }
  }

  //build allocation obj for display
  getAllocations(rss, user) {
    let myrs = [];
    var detail;
    
    //calc available at each RS (no rollup)
    for(let rs of rss) {
      detail = rs.allocation[this.selectedPef.pefCode];
      detail.rs = rs.rs;
      detail.name = rs.name;
      detail.children = rs.children;
      detail.level = rs.level;
      let avail = {};
      let planfy = 0;
      let availfy = 0;
      let actualfy = 0;
      for (let monthkey in detail.plan) {
        let planval = detail.plan[monthkey];
        let actualval = detail.actual[monthkey];
        avail[monthkey] = planval - actualval;
        
        planfy += planval;        
        actualfy += actualval;
        availfy += avail[monthkey];
      }
      detail.available = avail;
      detail.availfy = availfy;
      detail.planfy = planfy;
      detail.actualfy = actualfy;

      detail.availableProgress = availfy + '/' + planfy;
      detail.actualProgress = actualfy + '/' + planfy;
      myrs.push(detail);
    }

    //calc available rollup
    for (let rs of myrs) {
      if (rs.children !== undefined) {
        let availRollup = rs.availfy;
        let actualRollup = rs.actualfy;

        for (let childobj of rs.children) {
          let cname = childobj.n;
          var childfull = rss.filter(function(obj) {
            return obj.rs === cname;
          })[0];

          if (childfull !== undefined) {
            var child = childfull.allocation[this.selectedPef.pefCode];
            availRollup += child.availfy;
            actualRollup += child.actualfy;
          }
        }
        rs.availableRU = availRollup;
        rs.actualRU = actualRollup;
      }
    }
    
    //TODO: children should sort under parents!
    myrs.sort(function(a, b) {
      if (a.level===b.level)
        return 0;
      
      if(a.level > b.level)
        return 1;
      else
        return -1;
    });

    this.seatarray = myrs;
  }

  waive(obj) {
    obj.iswaived = !obj.iswaived;
    obj.flag = !obj.iswaived;
    
    if (obj.iswaived) {
      this.selectedPef.errs -= 1;
      this.selectedPef.waivercount += 1;
    }
    else {
      this.selectedPef.errs += 1;
      this.selectedPef.waivercount -= 1;
    }
    this.pefs.sort();
  }

}// class

export default angular.module('mcrissDemoApp.allocationview', [uiRouter])
  .config(routes)
  .component('allocationview', {
    template: require('./allocationview.html'),
    controller: allocationviewComponent,
    controllerAs: 'vm'
  })
  .name;
