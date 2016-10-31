/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Recruit from '../api/recruit/recruit.model';
import PefReq from '../api/pef_requirement/pef_requirement.model';

Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Webpack, Gulp, Babel, TypeScript, Karma, '
            + 'Mocha, ESLint, Node Inspector, Livereload, Protractor, Pug, '
            + 'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, '
            + 'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep '
            + 'tests alongside code. Automatic injection of scripts and '
            + 'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more '
            + 'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript '
            + 'payload, minifies your scripts/css/images, and rewrites asset '
            + 'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku '
            + 'and openshift subgenerators'
    });
  });

Recruit.find({}).remove()
  .then(() => {
    Recruit.create({
      FirstName: 'Howard',
      LastName: 'James',
      MiddleInitial: 'L',
      Dob: '12/11/1989',
      USCitizen: true,
      Sex: 'M',
      Height: 72,
      Weight: 181,
      TOE: 4,
      DriversLicense: false,
      DrivingOffensesCount: 1,
      MisconductCount: 0,
      DrugUseCount: 0,
      ColorPerception: 13,
      DepthPerception: 10,
      VisionCorrectable: true,
      Afqt: 87,
      Cl: 98,
      Gt: 92,
      El: 84,
      Mm: 88,
      active: true
    }, {
      FirstName: 'Valerie',
      LastName: 'Kuo',
      MiddleInitial: 'R',
      Dob: '08/20/1977',
      USCitizen: true,
      Sex: 'F',
      Height: 68,
      Weight: 151,
      TOE: 4,
      DriversLicense: true,
      DrivingOffensesCount: 0,
      MisconductCount: 0,
      DrugUseCount: 0,
      ColorPerception: 14,
      DepthPerception: 13,
      VisionCorrectable: true,
      Afqt: 92,
      Cl: 91,
      Gt: 96,
      El: 77,
      Mm: 90,
      active: true
    }, {
      FirstName: 'Ashley',
      LastName: 'Martinez',
      MiddleInitial: 'A',
      Dob: '03/16/70',
      USCitizen: true,
      Sex: 'M',
      Height: 66,
      Weight: 141,
      TOE: 4,
      DriversLicense: true,
      DrivingOffensesCount: 3,
      MisconductCount: 0,
      DrugUseCount: 0,
      ColorPerception: 7,
      DepthPerception: 14,
      VisionCorrectable: true,
      Afqt: 90,
      Cl: 99,
      Gt: 80,
      El: 94,
      Mm: 90,
      active: true
    }, {
      FirstName: 'Andrew',
      LastName: 'Junior',
      MiddleInitial: 'N',
      Dob: '10/07/1986',
      USCitizen: true,
      Sex: 'M',
      Height: 62,
      Weight: 131,
      TOE: 5,
      DriversLicense: false,
      DrivingOffensesCount: 0,
      MisconductCount: 0,
      DrugUseCount: 2,
      ColorPerception: 14,
      DepthPerception: 14,
      VisionCorrectable: true,
      Afqt: 98,
      Cl: 99,
      Gt: 90,
      El: 70,
      Mm: 80,
      Active: true
    }, {
      FirstName: 'Milton',
      LastName: 'Bradley',
      MiddleInitial: 'J',
      Dob: '11/17/1945',
      USCitizen: false,
      Sex: 'M',
      Height: 73,
      Weight: 171,
      TOE: 4,
      DriversLicense: true,
      DrivingOffensesCount: 1,
      MisconductCount: 0,
      DrugUseCount: 0,
      ColorPerception: 12,
      DepthPerception: 14,
      VisionCorrectable: true,
      Afqt: 95,
      Cl: 88,
      Gt: 99,
      El: 90,
      Mm: 89,
      Active: false
    }, {
      FirstName: 'Charlotte',
      LastName: 'Early',
      MiddleInitial: 'O',
      Dob: '04/17/1972',
      USCitizen: false,
      Sex: 'F',
      Height: 70,
      Weight: 171,
      TOE: 5,
      DriversLicense: true,
      DrivingOffensesCount: 0,
      MisconductCount: 2,
      DrugUseCount: 0,
      ColorPerception: 14,
      DepthPerception: 11,
      VisionCorrectable: true,
      Afqt: 94,
      Cl: 75,
      Gt: 80,
      El: 99,
      Mm: 90,
      Active: false
    }, {
      FirstName: 'William',
      LastName: 'Franklin',
      MiddleInitial: '',
      Dob: '09/02/1965',
      USCitizen: true,
      Sex: 'M',
      Height: 75,
      Weight: 191,
      TOE: 4,
      DriversLicense: true,
      DrivingOffensesCount: 0,
      MisconductCount: 0,
      DrugUseCount: 0,
      ColorPerception: 13,
      DepthPerception: 9,
      VisionCorrectable: false,
      Afqt: 70,
      Cl: 90,
      Gt: 85,
      El: 99,
      Mm: 90,
      Active: true
    });
  });



PefReq.find({}).remove()
  .then(() => {
    PefReq.create({
      pefReqId: 1,
      requirementType: '',
      requirement: '',
      active: true
    }, {
      pefReqId: 2,
      requirementType: '',
      requirement: '',
      active: true
    }, {
      pefReqId: 3,
      requirementType: '',
      requirement: '',
      active: true
    }, {
      pefReqId: 4,
      requirementType: '',
      requirement: '',
      active: true
    }, {
      pefReqId: 5,
      requirementType: '',
      requirement: '',
      active: true
    }, {
      pefReqId: 6,
      requirementType: '',
      requirement: '',
      active: true
    }, {
      pefReqId: 7,
      requirementType: '',
      requirement: '',
      active: true
    }, {
      pefReqId: 8,
      requirementType: '',
      requirement: '',
      active: true
    }, {
      pefReqId: 9,
      requirementType: '',
      requirement: '',
      active: true
    }, {
      pefReqId: 10,
      requirementType: '',
      requirement: '',
      active: true
    }, {
      pefReqId: 11,
      requirementType: '',
      requirement: '',
      active: true
    }, {
      pefReqId: 12,
      requirementType: '',
      requirement: '',
      active: true
    }, {
      pefReqId: 13,
      requirementType: '',
      requirement: '',
      active: true
    }, {
      pefReqId: 14,
      requirementType: '',
      requirement: '',
      active: true
    });
  });


User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
