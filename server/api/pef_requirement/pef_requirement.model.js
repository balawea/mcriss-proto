'use strict';

import mongoose from 'mongoose';

var PefRequirementSchema = new mongoose.Schema({
  pefReqId: Number,
  requirementType: String,
  requirement: String,
  active: Boolean
});

export default mongoose.model('PefRequirement', PefRequirementSchema);
