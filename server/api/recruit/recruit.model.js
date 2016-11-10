'use strict';

import mongoose from 'mongoose';

var RecruitSchema = new mongoose.Schema({
  firstName:String,
  lastName:String,
  middleInitial:String,
  active:Boolean,
  toe: {val: Number},
  usCitizen: {has: Boolean},
  usCitizenFamily: {has: Boolean},
  sex: {val:String},
  age: {val:Number},
  clearance: {val: String},
  gt: {val:Number},
  cl: {val:Number},
  el: {val:Number},
  mm: {val:Number},
  ve: {val:Number},
  qt: {val:Number},
  dlab: {val:Number},
  //    asvabOrList: {gt:Number, cl:Number, el:Number, mm:Number, ve:Number, qt:Number}, //Logical OR: exceeding any one of the included scores makes a match
  height: { val:Number},
  weight: { val:Number},
  driving: {
    license: {has: Boolean},
    offenses: {val:Number, valAtRs:Number, valAboveRs:Number},
    violations: {val:Number, valAtRs:Number, valAboveRs:Number, valAtDep:Number, valBeforeDep:Number}
  },
  moral: {
    conduct: {val:Number, valAtRs:Number, valAboveRs:Number, valBeforeDep:Number},
    marijuana: {val:Number, valAtRs:Number, valAboveRs:Number, valBeforeDep:Number},
    otherDrugs: {val:Number, valAtRs:Number, valAboveRs:Number, valBeforeDep:Number}
  },
  tierGrad: {val:Number},// 1 =highschool grad, 2= homeschooler, 3=either
  algebra: {has:Boolean},
  vision: {
    correctable: {has:Boolean},
    depth: {has:Boolean},
    color: {val:Number},
    acuity: {val:Number, val1:Number, val2:Number}
  },
  waterQual: {has:Boolean},
  flightPhysical: {has:Boolean},
  speech:{has:Boolean},
  doncafScreening: {has:Boolean},
  additionalScreening: {has:Boolean},
  pftClass1: {has:Boolean},
  prpScreen: {val:Number}
});


export default mongoose.model('Recruit', RecruitSchema);
