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
      firstName: 'Howard',
      lastName: 'James',
      middleInitial: 'L',
      dob: '12/11/1989',
      sex: 'M',
      edipi: '00100',
      active: true
    }, {
      firstName: 'Valerie',
      lastName: 'Kuo',
      middleInitial: 'R',
      dob: '08/20/1977',
      sex: 'F',
      edipi: '00101',
      active: true
    }, {
      firstName: 'Ashley',
      lastName: 'Martinez',
      middleInitial: 'A',
      dob: '03/16/70',
      sex: 'M',
      edipi: '00102',
      active: true
    }, {
      firstName: 'Andrew',
      lastName: 'Junior',
      middleInitial: 'N',
      dob: '10/07/1986',
      sex: 'M',
      edipi: '00103',
      active: true
    }, {
      firstName: 'Milton',
      lastName: 'Bradley',
      middleInitial: 'J',
      dob: '11/17/1945',
      sex: 'M',
      edipi: '00104',
      active: false
    }, {
      firstName: 'Charlotte',
      lastName: 'Early',
      middleInitial: 'O',
      dob: '04/17/1972',
      sex: 'F',
      edipi: '00107',
      active: false
    }, {
      firstName: 'William',
      lastName: 'Franklin',
      middleInitial: '',
      dob: '09/02/1965',
      sex: 'M',
      edipi: '00105',
      active: true
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
