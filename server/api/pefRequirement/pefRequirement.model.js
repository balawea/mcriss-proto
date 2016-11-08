'use strict';

import mongoose from 'mongoose';

/*
* nodes named:
* "has" are bools that MUST equal the corresponding field in the recruit model,
* "val" are strings or numbers that MUST equal ditto
* "min" or "max" are numbers that represent bounds that the corresponding "val" field in recruit must fall within.
* */

var PefRequirementSchema = new mongoose.Schema({
  pefCode: String,
  description: String,
  mos: [{mos:String, description:String}],
  disqualifications: [],
  requirements: {
    toe: {description: String, val: Number},
    usCitizen: {description:String, has: Boolean},
    usCitizenFamily: {description:String, has: Boolean},
    sex: {description:String, val:String},
    age: {description:String, min:Number, max:Number, waivable:Boolean},
    clearance: {description:String, val: String},
    gt: {description:String, min:Number, waiver:Number},
    cl: {description:String, min:Number, waiver:Number},
    el: {description:String, min:Number, waiver:Number},
    mm: {description:String, min:Number, waiver:Number},
    ve: {description:String, min:Number, waiver:Number},
    qt: {description:String, min:Number, waiver:Number},
    dlab: {description:String, min:Number, waiver:Number},
//    asvabOrList: {description:String, gt:Number, cl:Number, el:Number, mm:Number, ve:Number, qt:Number}, //Logical OR: exceeding any one of the included scores makes a match
    height: {
      description:String,
      min:Number,
      max:Number,
      optional:Boolean,   //only some MOSs in a PEF may have height requirements
      waivable:Boolean,
      waiver:Number
    },
    weight: {
      description:String,
      min:Number,
      max:Number,
      optional:Boolean,   //only some MOSs in a PEF may have weight requirements
      waivable:Boolean,
      waiver:Number
    },
    driving: {
      license: {description: String, has: Boolean, waivable: Boolean},
      offenses: {description: String, max:Number, maxAtRs:Number, maxAboveRs:Number, waivable:Boolean},
      violations: {description: String, max:Number, maxAtRs:Number, maxAboveRs:Number, maxAtDep:Number, maxBeforeDep:Number, waivable:Boolean}
    },
    moral: {
      conduct: {description: String, max:Number, maxAtRs:Number, maxAboveRs:Number, maxBeforeDep:Number, optional:Boolean, waivable:Boolean},
      marijuana: {description: String, max:Number, maxAtRs:Number, maxAboveRs:Number, maxBeforeDep:Number, waivable:Boolean},
      otherDrugs: {description: String, max:Number, maxAtRs:Number, maxAboveRs:Number, maxBeforeDep:Number, waivable:Boolean}
    },
    tierGrad: {description:String, val:Number, waivable:Boolean},// 1 =highschool grad, 2= homeschooler, 3=either
    algebra: {description:String, has:Boolean, waivable:Boolean},
    vision: {
      correctable: {description:String, has:Boolean, waivable:Boolean},
      depth: {description:String, has:Boolean, waivable:Boolean},
      color: {description:String, min:Number, waivable:Boolean},
      acuity: {description:String, min1:Number, min2:Number, waivable:Boolean}
    },
    waterQual: {description:String, has:Boolean, optional:Boolean, waiver:Boolean},
    flightPhysical: {description:String, has:Boolean, waiver:Boolean},
    speech:{description:String, has:Boolean, waiver:Boolean},
    doncafScreening: {description:String, has:Boolean},
    additionalScreening: {description:String, has:Boolean},
    pftClass1: {description:String, has:Boolean, waiver:Boolean},
    prpScreen: {description:String, max:Number, waiver:Boolean}
    } //requirements

});

export default mongoose.model('PefRequirement', PefRequirementSchema);
