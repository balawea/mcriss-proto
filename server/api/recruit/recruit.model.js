'use strict';

import mongoose from 'mongoose';

var RecruitSchema = new mongoose.Schema({
  firstName:String,
  lastName:String,
  middleName:String,
  active:Boolean,
  status: String,
  contact: [{date: Date, location: String, method:String, poc: String}],
  dob: Date,
  assignedPef: { pefCode: String, id: String, recruiter: String},
  flaggedPefs: [{ pefCode: String, notes: String, recruiter: String, isBookmarked: Boolean}],
  match: {
    toe: {val: Number},
    usCitizen: {has: Boolean},
    usCitizenFamily: {has: Boolean},
    sex: {val:String},
    clearance: {val: String},
    gt: {val:Number},
    cl: {val:Number},
    el: {val:Number},
    mm: {val:Number},
    ve: {val:Number},
    qt: {val:Number},
    st: {val:Number},  //Skilled Technical GS+VE+MK+MC. Are we using this???
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
    tierGrad: {val:Number},// 1 =highschool grad, 2= homeschooler
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
  }, //match
  personal: {
    ssn: String,
    address: {street: String, city: String, state: String, zip: String, country: String},
    hor: {street: String, city: String, state: String, zip: String, country: String},
    citz: String,
    sex: String,
    ethnicity: String,
    marital: String,
    dependents: Number,
    race: String,
    religion: String,
    education: String,
    language: String,
    licenseNum: String,
    birthPlace: String
  },
  exams: {
    afqt: Number,
    aptitude: String,
    gs: Number,
    ar: Number,
    wk: Number,
    pc: Number,
    as: Number,
    mk: Number,
    mc: Number,
    ei: Number,
    ve: Number,
    ao: Number, // ???
    dep: Date,
    activeDutyDateProjected: Date,
    es: String, //number??? what is this?
    recruiterId: String,
    stnId: String,
    teMosAfs: String,
    waiver: String,
    payGrade: String,
    svcAnnexCode: String,
    mso: String,
    adObligation: String
  }
},
  {
  toObject: { virtuals: true },
    toJSON: { virtuals: true }
});

RecruitSchema.virtual('age.val').get(function() {
  return (Math.floor((Date.now() - new Date(this.dob))/31536000000));
});

RecruitSchema.virtual('fullName').get(function() {
  return this.firstName + ' ' + (this.middleName || '') + ' ' + this.lastName;
});

RecruitSchema.virtual('faddress').get(function() {
  let addr = this.personal.address;
  return addr.street + '\n' + addr.city + ', ' + addr.state + ' ' + addr.zip + '\n' + addr.country;
});

RecruitSchema.virtual('fhor').get(function() {
  let addr = this.personal.hor;
  return addr.street + '\n' + addr.city + ', ' + addr.state + ' ' + addr.zip + '\n' + addr.country;
});


//TODO fxn to return most recent contact object.

export default mongoose.model('Recruit', RecruitSchema);
