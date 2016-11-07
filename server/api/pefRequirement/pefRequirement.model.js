'use strict';

import mongoose from 'mongoose';

var PefRequirementSchema = new mongoose.Schema({
  pefCode: String,
  description: String,
  mos: [{mos:String, description:String}],
  disqualifications: [],
  requirements: {
    toe: {description: String, val: Number},
    usCitizen: {description:String, val: Boolean},
    usCitizenFamily: {description:String, val: Boolean},
    sex: {description:String, val:String},
    age: {description:String, min:Number, max:Number, waivable:Boolean},
    clearance: {description:String, val: String},
    gt: {description:String, val:Number, waiver:Number},
    cl: {description:String, val:Number, waiver:Number},
    el: {description:String, val:Number, waiver:Number},
    mm: {description:String, val:Number, waiver:Number},
    ve: {description:String, val:Number, waiver:Number},
    qt: {description:String, val:Number, waiver:Number},
    dlab: {description:String, val:Number, waiver:Number},
    asvabOrList: {description:String, gt:Number, cl:Number, el:Number, mm:Number, ve:Number, qt:Number}, //Logical OR: exceeding any one of the included scores makes a match
    height: {
      description:String,
      min:Number,
      max:Number,
      optional:Boolean,   //only some MOSs in a PEF may have height requirements
      waiver:Number
    },
    weight: {
      description:String,
      min:Number,
      max:Number,
      optional:Boolean,   //only some MOSs in a PEF may have weight requirements
      waiver:Number
    },
    driving: {
      driversLicense: {description: String, val: Boolean, waiver: Boolean},
      offenses: {description: String, max:Number, maxAtRs:Number, maxAboveRs:Number, waiver:Boolean},
      trafficViolations: {description: String, max:Number, maxAtRs:Number, maxAboveRs:Number, maxAtDep:Number, maxBeforeDep:Number, waiver:Boolean}
    },
    moral: {
      conduct: {description: String, max:Number, maxAtRs:Number, maxAboveRs:Number, maxBeforeDep:Number, optional:Boolean, waiver:Boolean},
      marijuana: {description: String, max:Number, maxAtRs:Number, maxAboveRs:Number, maxBeforeDep:Number, waiver:Boolean},
      otherDrugs: {description: String, max:Number, maxAtRs:Number, maxAboveRs:Number, maxBeforeDep:Number, waiver:Boolean}
    },
    tierGrad: {description:String, val:Number, waiver:Boolean},// 1 =highschool grad, 2= homeschooler, 0=either
    algebra: {description:String, val:Boolean, waiver:Boolean},
    vision: {
      correctable: {description:String, val:Boolean, waiver:Boolean},
      depth: {description:String, val:Number, ndp:Boolean, waiver:Boolean},
      color: {description:String, val:Number, waiver:Boolean},
      acuity: {description:String, min1:Number, min2:Number, waiver:Boolean}
    },
    waterQual: {description:String, val:Boolean, optional:Boolean, waiver:Boolean},
    flightPhysical: {description:String, val:Boolean, waiver:Boolean},
    speech:{description:String, val:Boolean, waiver:Boolean},
    doncafScreening: {description:String, val:Boolean},
    pftClass1: {description:String, val:Boolean, waiver:Boolean},
    prpScreen: {description:String, maxUnfavorableResponses:Number, waiver:Boolean}
    } //requirements

});

export default mongoose.model('PefRequirement', PefRequirementSchema);
