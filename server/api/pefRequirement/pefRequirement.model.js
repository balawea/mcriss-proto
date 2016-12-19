'use strict';

import mongoose from 'mongoose';

/*
* nodes named:
* "has" are bools that MUST equal the corresponding field in the recruit model,
* "val" are strings or numbers that the recruit field MUST equal
* "min" or "max" are numbers that represent bounds that the corresponding "val" field in recruit must fall within.
* */

var PefRequirementSchema = new mongoose.Schema({
  pefCode: String,
  description: String,
  mos: [{mos:String, description:String}],
  disqualifications: [],
  allocation: Number,
  shipDates: [],
  requirements: {
    toe: {description: String, min: Number, waivable:Boolean, waiver:Number},
    usCitizen: {description:String, has: Boolean},  //not ever waivable
    usCitizenFamily: {description:String, has: Boolean},
    sex: {description:String, val:String, waivable:Boolean},
    age: {description:String, min:Number, max:Number, waivable:Boolean, waiver:Number},
    clearance: {description:String, min: Number}, //not ever waivable
    gt: {description:String, min:Number, waivable:Boolean, waiver:Number},
    cl: {description:String, min:Number, waivable:Boolean, waiver:Number},
    el: {description:String, min:Number, waivable:Boolean, waiver:Number},
    mm: {description:String, min:Number, waivable:Boolean, waiver:Number},
    ve: {description:String, min:Number, waivable:Boolean, waiver:Number},
    qt: {description:String, min:Number, waivable:Boolean, waiver:Number},
    dlab: {description:String, min:Number, waivable:Boolean, waiver:Number},
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
      offenses: {description: String, max:Number, maxAtRs:Number, maxAboveRs:Number, waivable:Boolean, waiver:Number},
      violations: {description: String, max:Number, maxAtRs:Number, maxAboveRs:Number, maxAtDep:Number, maxBeforeDep:Number, waivable:Boolean, waiver:Number}
    },
    moral: {
      conduct: {description: String, max:Number, maxAtRs:Number, maxAboveRs:Number, maxBeforeDep:Number, optional:Boolean, waivable:Boolean, waiver:Number},
      marijuana: {description: String, max:Number, maxAtRs:Number, maxAboveRs:Number, maxBeforeDep:Number, waivable:Boolean, waiver:Number},
      otherDrugs: {description: String, max:Number, maxAtRs:Number, maxAboveRs:Number, maxBeforeDep:Number, waivable:Boolean, waiver:Number}
    },
    // Tier 1=Highschool, Tier 2=homeschool. Using "max" as a simplification since rules never exclude tier 1 grads.
    tierGrad: {description:String, max:Number, waivable:Boolean, waiver:Number},
    algebra: {description:String, has:Boolean, waivable:Boolean},
    vision: {
      correctable: {description:String, has:Boolean, waivable:Boolean},
      depth: {description:String, has:Boolean, waivable:Boolean},
      color: {description:String, min:Number, waivable:Boolean, waiver:Number},
      acuity: {description:String, max:Number, max1:Number, max2:Number, waivable:Boolean, waiver:Number}
    },
    waterQual: {description:String, has:Boolean, optional:Boolean, waivable:Boolean},
    flightPhysical: {description:String, has:Boolean, waivable:Boolean},
    speech:{description:String, has:Boolean, waivable:Boolean},
    doncafScreening: {description:String, info:Boolean},
    additionalScreening: {description:String, info:Boolean},
    pftClass1: {description:String, has:Boolean, waivable:Boolean},
    prpScreen: {description:String, max:Number, waivable:Boolean, waiver:Number}
    } //requirements

});

export default mongoose.model('PefRequirement', PefRequirementSchema);
