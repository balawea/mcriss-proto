'use strict';

import mongoose from 'mongoose';

var RecruitSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  middleInitial: String,
  sex: String,
  dob: Date,
  edipi: String,
  active: Boolean
});

export default mongoose.model('Recruit', RecruitSchema);
