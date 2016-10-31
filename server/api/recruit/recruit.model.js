'use strict';

import mongoose from 'mongoose';

var RecruitSchema = new mongoose.Schema({
  FirstName:String,
  LastName:String,
  MiddleInitial:String,
  Sex:String,
  Dob:Date,
  USCitizen: Boolean,
  Height: Number,
  Weight: Number,
  TOE: Number,
  DriversLicense: Boolean,
  DrivingOffensesCount: Number,
  MisconductCount: Number,
  DrugUseCount: Number,
  ColorPerception: Number,
  DepthPerception: Number,
  VisionCorrectable: Boolean,
  Afqt: Number,
  Cl: Number,
  Gt: Number,
  El: Number,
  Mm: Number,
  Active:Boolean
});


export default mongoose.model('Recruit', RecruitSchema);
