'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
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
    this.$scope.selectedRs = {};
    this.$scope.expanding_property = {
      field: "name",
      displayName: "Location",
      sortable: true,
      sortingType: "string",
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
  } //oninit

  setSelectedRs(branch) {
    this.$scope.selectedRs = branch;
  };

  select(pef, rss = this.rss) {
    this.selectedPef = pef;

    if (rss.length > 0) {
      this.$scope.tree_data = [];
      this.$scope.matchingRs = {};
      let data = this.getNestedSeatData(rss, pef.pefCode, this.$scope);
      this.$scope.tree_data.push(data);

      //matchingRs is set in getNestedSeatData since we are looping the collection there already
      //If matchingRs.name is empty (ie on page load), default to the top RS in the tree.
      if (this.$scope.matchingRs.name) {
        //console.log(this.$scope.matchingRs);
        this.setSelectedRs(this.$scope.matchingRs);
      }
      else
        this.setSelectedRs(this.$scope.tree_data[0]);
    }
  } //

  //TODO: REFACTOR ME!!!!
  getNestedSeatData(rss, pefCode, scope) {
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
    buildNameParts(currentrs);
    
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
              buildNameParts(childrs);
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
              buildNameParts(detail);
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

            for (let key in detail) {
              if (key === 'children' || key === 'availfy' || key === 'planfy' || key === 'actualfy' || key === 'name' || key === 'childList' || key === 'name1' || key === 'name2')
                continue;
              rs[key] += detail[key];
            }

            if (scope.selectedRs.name === detail.name)
              scope.matchingRs = detail;

            rs.children.push(detail);
          }
        }

      }
      return rs;
    } //nestchildrenof

    function buildNameParts(rs) {
      let name = rs.name;
      let parts = name.split(" ");
      
      rs.name1 = parts[0];
      rs.name2 = parts[1];
    }
  } //

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
  } //


}// class

export default angular.module('mcrissDemoApp.allocationview', [uiRouter, treeGrid])
  .config(routes)
  .component('allocationview', {
    template: require('./allocationview.html'),
    controller: allocationviewComponent,
    controllerAs: 'vm'
  })
  .name;
