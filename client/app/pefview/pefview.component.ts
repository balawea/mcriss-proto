'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
const Masonry = require('masonry-layout');
const swal = require('sweetalert');
import routes from './pefview.routes';

export class PefviewComponent {
  $http;
  $timeout;
  id;
  pefs;
  selectedPef;
  selectedPefId;
  req;
  elems;
  msnry;
  isAdmin: Function;
  modeColor;

  /*@ngInject*/
  constructor($http, $location, $timeout, Auth) {
    this.$http = $http;
    this.id = $location.hash();
    this.isAdmin = Auth.isAdminSync;
    this.$timeout = $timeout;
  }

  /*@ngInject*/
  $onInit() {
    this.$http.get('/api/pefRequirements/')
      .then(responsePef => {
        this.pefs = responsePef.data;
        this.initPefs(this.pefs);
        this.pefs.sort(this.byPefCode);
        this.select(this.pefs[0]);
        return this.pefs;
      })
    .then(response => {
      this.msnry = new Masonry( '.grid', {
        itemSelector: '.grid-item',
        columnWidth: 275,
        transitionDuration: '0.3s'
      })

      this.layout(this.msnry);
    })
  }   //oninit

  byPefCode(a, b) {
    let acode = a.pefCode.toUpperCase();
    let bcode = b.pefCode.toUpperCase();

    if (acode < bcode)
      return -1;
    else
      return 1;
  }

  isReadOnly(){
    let res = !this.isAdmin() || ((this.selectedPef || {}).isEditing || false) === false;
    this.modeColor = res ? 'text-gray' : 'text-primary';

    return res;
  }

  select(pef) {
    if (!!this.selectedPef && this.selectedPef != pef)
      this.selectedPef.isEditing = false;

    this.selectedPef = pef;
    this.layout(this.msnry);
  }

  layout(msnry) {
    if (msnry) {
      this.$timeout(function() {
        msnry.layout();
      }, 300, false);
    }
  }

  hideTiles(obj) {
    this.selectedPef.pefvis[obj] = false;
    this.layout(this.msnry);
  }

  restoreTiles() {
    for (let pkey in this.selectedPef.pefvis) {
      this.selectedPef.pefvis[pkey] = true;
    }
    this.layout(this.msnry);
  }

  save() {
    if (this.selectedPef) {
      if (this.selectedPef.requirements.vision.acuity.max1 && this.selectedPef.requirements.vision.acuity.max2) {
        this.selectedPef.requirements.vision.acuity.max = parseInt(this.selectedPef.requirements.vision.acuity.max1) + parseInt(this.selectedPef.requirements.vision.acuity.max2);
      }
      else {
        this.selectedPef.requirements.vision.acuity.max = undefined;
      }

      this.$http.put(`/api/pefRequirements/${this.selectedPef._id}`, this.selectedPef)
      .then(res => {
        console.log(res);
        
        if (res.statusText==="OK") {
          console.info('saved');
          swal("Success", `PEF ${this.selectedPef.pefCode} has been saved.`, "success");
        }
        else {
          console.error('save error');
          swal("Error", `Save failed with status: ${res.status}`, "error");
        }
        this.selectedPef.isEditing = false;
      });
    }
  } //

  //cancel edits on a single pef, replace it in the pefs array with the original from the db.
  cancel() {
    if (this.selectedPef) {
      this.$http.get(`/api/pefRequirements/${this.selectedPef._id}`)
      .then(pef => {
        let oldpef;
        for(let i=0;i<this.pefs.length;i++){
          if(this.pefs[i]._id === this.selectedPef._id){
            oldpef = this.initPefs([pef.data]);
            this.pefs.splice(i, 1, oldpef[0]);
            this.selectedPef = this.pefs[i];
            console.info('canceled');
          }
        }
        this.layout(this.msnry);
      }); //then
    }
  } //

  //Set isEditing to false.
  initPefs(pefs) {
    for (let pef of pefs) {
      pef.isEditing = false;
    }
    return pefs;
  } //

  editDesc(name, node) {
    if (this.selectedPef && !this.isReadOnly()) {
      let p = this.selectedPef.requirements;
      var nodes = node.split('.');
      for (let n of nodes) {
        if (!p[n]) {
          p[n] = {};
        }
          p = p[n];
      }

      this.getDesc(name, p, (inputVal) => {
        if (inputVal !== false) {
          p.description = inputVal;
        }
      });
    }
  }//

  getDesc(name, p, callback) {
    if (p) {
      swal({
        title: `Set ${name} description`,
        inputValue: p.description || '',
        type: "input",
        showCancelButton: true,
        allowEscapeKey: true,
        allowEscapeClick: true,
        closeOnConfirm: true,
        animation: "slide-from-top"
      },
      function(inputValue){
        callback(inputValue);
      });
    }
  }//

} // class

export default angular.module('mcrissDemoApp.pefview', [uiRouter])
  .config(routes)
  .component('pefview', {
    template: require('./pefview.html'),
    controller: PefviewComponent,
    controllerAs: 'vm'
  })
  .name;
