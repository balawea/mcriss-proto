'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
//const swal = require('sweetalert');
import routes from './allocationview.routes';
import treeGrid from '../treeGrid/treeGrid.directive';

export class allocationviewComponent {
  $http;
  $state;
  $scope;
  rss;
  p;
  pefs;
  selectedPef;
  req;
  userRsName;
  seatarray;
  user;
  tree;
  getUser : Function;

  /*@ngInject*/
  constructor($http, $state, $scope, Auth) {
    this.$http = $http;
    this.$state = $state;
    this.$scope = $scope;
    this.getUser = Auth.getCurrentUserSync;
  } //ctor
  
  /*@ngInject*/
  $onInit() {
    this.seatarray = [];
    this.rss = [];
    this.user = this.getUser();
    this.userRsName = this.user.rs;
    this.$scope.tree_data = [];
    this.selectedRs = {};
    this.$scope.my_tree = this.tree = {};

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
      
      this.$http.get('/api/rss/children/' + this.getUser().rs).then(rss => {
        this.rss = rss.data;
        this.select(this.pefs[0]);

      });
    }); //get


    this.$scope.expanding_property = {
      field: "name",
      displayName: "RS",
      cellTemplate: "<strong>{{row.branch[expandingProperty.field]}}</strong>"
    };
    this.$scope.col_defs = [
      {field: "m0", displayName: "Oct", sortable: true, sortingType: "number", filterable: true},
      {field: "m1", displayName: "Nov", sortable: true, sortingType: "number", filterable: true},
      {field: "m2", displayName: "Dec", sortable: true, sortingType: "number", filterable: true},
      {field: "m3", displayName: "Jan", sortable: true, sortingType: "number", filterable: true},
      {field: "m4", displayName: "Feb", sortable: true, sortingType: "number", filterable: true},
      {field: "m5", displayName: "Mar", sortable: true, sortingType: "number", filterable: true},
      {field: "m6", displayName: "Apr", sortable: true, sortingType: "number", filterable: true},
      {field: "m7", displayName: "May", sortable: true, sortingType: "number", filterable: true},
      {field: "m8", displayName: "Jun", sortable: true, sortingType: "number", filterable: true},
      {field: "m9", displayName: "Jul", sortable: true, sortingType: "number", filterable: true},
      {field: "m10", displayName: "Aug", sortable: true, sortingType: "number", filterable: true},
      {field: "m11", displayName: "Sep", sortable: true, sortingType: "number", filterable: true}
      
    ];

  } //oninit

  setSelectedRs(branch) {
    this.selectedRs = branch;
    console.log(branch);
  };

  select(pef, rss = this.rss) {
    this.selectedPef = pef;

    if (rss.length > 0) {
      this.$scope.tree_data = [];
      this.$scope.tree_data.push(this.getNestedSeatData(rss, pef.pefCode));

    }
  } //

  getNestedSeatData(rss, pefCode) {
    let childRsName = this.getUser().rs;

    function byName(childRs) {
      return childRs.rs === childRsName;
    };
    
    let userRs = rss.find(byName);
    let alloc = userRs.allocation[pefCode];
    let currentrs = {};
    currentrs.name = userRs.name;
    currentrs.childList = userRs.children;
    currentrs.children = [];
    currentrs.planfy = 0;
    currentrs.availfy = 0;
    currentrs.actualfy = 0;
    
    for (let monthkey in alloc.plan) {
      let planval = alloc.plan[monthkey];
      let actualval = alloc.actual[monthkey];
      currentrs[monthkey] = planval - actualval;
      currentrs.planfy += planval;
      currentrs.actualfy += actualval;
      currentrs.availfy += currentrs[monthkey];
    }
    
    return nestChildrenOf(currentrs);
    
    function nestChildrenOf(rs) {
      
      //for each first level child
      for (let child of rs.childList){
        
        //first level children
        if (child.l === 0) {
          //find that child in rss
          childRsName = child.n;
          let fullChild = rss.find(byName);

          if (!!fullChild) {
            let detail = {};

            //If this child has children, nest them
            if (((fullChild.children || {}).length || 0) > 0) {

              let alloc = fullChild.allocation[pefCode];
              let childrs = {};
              childrs.children = [];
              childrs.childList = fullChild.children;
              childrs.planfy = 0;
              childrs.availfy = 0;
              childrs.actualfy = 0;
              childrs.name = fullChild.name;
              for (let monthkey in alloc.plan) {
                let planval = alloc.plan[monthkey];
                let actualval = alloc.actual[monthkey];
                childrs[monthkey] = planval - actualval;
                childrs.planfy += planval;
                childrs.actualfy += actualval;
                childrs.availfy += childrs[monthkey];
              }

              detail = nestChildrenOf(childrs);
              
            }
            else {
              //build terminal child seat data
              let alloc = fullChild.allocation[pefCode];
              detail.children = [];
              detail.planfy = 0;
              detail.availfy = 0;
              detail.actualfy = 0;
              detail.name = fullChild.name;
              for (let monthkey in alloc.plan) {
                let planval = alloc.plan[monthkey];
                let actualval = alloc.actual[monthkey];
                detail[monthkey] = planval - actualval;
                detail.planfy += planval;
                detail.actualfy += actualval;
                detail.availfy += detail[monthkey];
              }
            }
            rs.planfy += detail.planfy;
            rs.actualfy += detail.actualfy;
            rs.availfy += detail.availfy;
            for (let monthkey in detail) {
              if (monthkey === 'children' || monthkey === 'availfy' || monthkey === 'planfy'
                 || monthkey === 'actualfy' || monthkey === 'name' || monthkey === 'childList')
                continue;
              
              rs[monthkey] += detail[monthkey];
            }

            rs.children.push(detail);
          }
        }

      }
      return rs;
    } //nestchildrenof

  } //

  //build allocation obj for display
  getAllocations(rss) {
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
    myrs.sort(this.byLevel);

    this.seatarray = myrs;
  }

  byLevel(a, b) {
    if (a.level===b.level)
      return 0;

    if(a.level > b.level)
      return 1;
    else
      return -1;
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

export default angular.module('mcrissDemoApp.allocationview', [uiRouter, treeGrid])
  .config(routes)
  .component('allocationview', {
    //template: require('./allocationview.html'),
    template: require('./allocationview.html'),
    controller: allocationviewComponent,
    controllerAs: 'vm'
  })
  .name;
