'use strict';

import mongoose from 'mongoose';

var RsSchema = new mongoose.Schema({
  name: String,
  rs: String,
  parents: [{n:String, l:Number}],
  children: [{n:String, l:Number}],
  level: Number,
  allocation: {
    AE: {total: Number, reserve: Number,
         plan: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
         actual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
        resactual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number}},
    AF: {total: Number, reserve: Number,
         plan: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
         actual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
        resactual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number}},
    AG: {total: Number, reserve: Number,
         plan: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
         actual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
        resactual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number}},
    AJ: {total: Number, reserve: Number,
         plan: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
         actual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
        resactual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number}},
    BA: {total: Number, reserve: Number,
         plan: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
         actual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
        resactual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number}},
    BY: {total: Number, reserve: Number,
         plan: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
         actual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
        resactual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number}},
    CA: {total: Number, reserve: Number,
         plan: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
         actual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
        resactual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number}},
    CB: {total: Number, reserve: Number,
         plan: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
         actual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
        resactual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number}},
    CC: {total: Number, reserve: Number,
         plan: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
         actual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
        resactual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number}},
    CD: {total: Number, reserve: Number,
         plan: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
         actual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
        resactual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number}},
    CE: {total: Number, reserve: Number,
         plan: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
         actual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
        resactual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number}},
    CF: {total: Number, reserve: Number,
         plan: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
         actual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
        resactual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number}},
    CG: {total: Number, reserve: Number,
         plan: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
         actual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
        resactual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number}},
    CH: {total: Number, reserve: Number,
         plan: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
         actual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
        resactual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number}},
    CJ: {total: Number, reserve: Number,
         plan: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
         actual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
        resactual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number}},
    CK: {total: Number, reserve: Number,
         plan: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
         actual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
        resactual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number}},
    CL: {total: Number, reserve: Number,
         plan: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
         actual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
        resactual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number}},
    CM: {total: Number, reserve: Number,
         plan: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
         actual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
        resactual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number}},
    CN: {total: Number, reserve: Number,
         plan: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
         actual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number},
        resactual: {m0:Number, m1:Number, m2:Number, m3:Number, m4:Number, m5:Number, m6:Number, m7:Number, m8:Number, m9:Number, m10:Number, m11:Number}}
  }
});

RsSchema.statics.children = function (req) {
  return this.find({$or: [{rs: req}, {"parents.n": req}]}, {"rs": 1, "name": 1, "allocation": 1, "children": 1, "level": 1});
};

RsSchema.statics.rs = function (req) {
  return this.find({"rs": req});
};

export default mongoose.model('Rs', RsSchema);
