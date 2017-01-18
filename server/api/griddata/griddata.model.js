'use strict';

import mongoose from 'mongoose';

var GriddataSchema = new mongoose.Schema({

  firstName: String,
  lastName: String,
  middleName: String,
  active: Boolean,
  status: String,
  sex: String,
  age: Number,
  rs: String,
  recruiter: {recruiterId: String, fullname: String},
  assignedPef: { pefCode: String, recruiter: String, month:Number},
  ssn: String,
  afqt: Number,
}
//  {
//  toObject: { virtuals: true },
//    toJSON: { virtuals: true }
//}
                                        );

//GriddataSchema.virtual('age.val').get(function() {
//  return (Math.floor((Date.now() - new Date(this.dob))/31536000000)); //31536000000 = msecs/year
//});
//
//GriddataSchema.virtual('fullName').get(function() {
//  return this.firstName + ' ' + (this.middleName || '') + ' ' + this.lastName;
//});
//
//GriddataSchema.virtual('faddress').get(function() {
//  let addr = this.personal.address;
//  return addr.street + '\n' + addr.city + ', ' + addr.state + ' ' + addr.zip + '\n' + addr.country;
//});
//
//GriddataSchema.virtual('fhor').get(function() {
//  let addr = this.personal.hor;
//  return addr.street + '\n' + addr.city + ', ' + addr.state + ' ' + addr.zip + '\n' + addr.country;
//});

export default mongoose.model('Griddata', GriddataSchema);
