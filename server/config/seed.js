/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Recruit from '../api/recruit/recruit.model';
import PefReq from '../api/pefRequirement/pefRequirement.model';

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
    PefReq.create(
      {
      pefCode: 'AG',
      description: 'ENLISTED AIRCREW',
      mos: [
        {mos:'6100', description:'6100 Aircraft Maintenance (Rotary Wing)'}, {mos:'6172', description:'6172 Helicopter Crew Chief CH-46'}, {mos:'6173', description:'6173 Helicopter Crew Chief CH-53'},
        {mos:'6174', description:'6174 Helicopter Crew Chief AH/UH-1'}, {mos:'6176', description:'6176 Tiltrotor Crew Chief MV-22'}, {mos:'6200', description:'6200 Aircraft Maintenance (Fixed Wing)'},
        {mos:'6276', description:'6276 Fixed Wing Aircraft Crew Chief KC-130'}],
      disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
        'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
      requirements: {
        toe: {description: 'Five Year Term of Enlistment (TOE)', val: 5},
        usCitizen: {description:'U.S. Citizen (no waiver)', val: true},
        clearance: {description:'Eligible for SECRET Clearance.', val: 'Secret'},
        gt: {description:'GT 110', val:110, waiver:3},
        mm: {description:'MM 105', val:105, waiver:3},
        moral: {
          conduct: {description: 'No Conduct waivers above Recruiting Station Level', maxAboveRs:0, waiver:true},
          marijuana: {description: 'No Drug waivers above Recruiting Station Level', maxAboveRs:0, waiver:true},
          otherDrugs: {description: 'No Drug waivers above Recruiting Station Level', maxAboveRs:0, waiver:true}
        },
        vision: {
          correctable: {description:'Overall correctable to 20/20 (distant)', val:true, waiver:false},
          color: {description:'Pass normal color perception (NCP) test with PIP (12 out of 14 correct) or FALANT. Verify by DD 2808. No Waivers', val:12, waiver:false},
          acuity: {description:'Vision no worse than 20/70 (distant) in one eye and 20/100 (distant) in the other', min1:70, min2:100, waiver:false}
        },
        waterQual: {description:'Must have WS-B(+) Water Survival Qualification. Must perform the following: Crawl (25 yards), breast stroke (25 yards), ' +
        'side stroke (25 yards), elementary back stroke (25 yards), vertical fall from 12 foot platform, underwater swim without breaking surface (15 yards), ' +
        'tread water 2 1/2 minutes, front float 2 1/2 minutes', val:true, optional:false, waiver:false},
        flightPhysical: {description:'Pass rigorous flight physical', val:true, waiver:false}
      } //requirements
    },
      {
        pefCode: 'CA',
        description: 'TRANSPORTATION OPTION',
        mos: [{mos:'3500', description:'3500 Motor Transport'}, {mos:'3531', description:'3531 Motor Vehicle Operator'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Four Year Term of Enlistment', val: 4},
          mm: {description:'MM 85', val:85, waiver:3},
          height: {description:'Minimum Height: 59 inches (actual height, no waiver). Maximum Height: 75 inches (actual height, no waiver).', min:59, max:75, optional:false, waiver:false},
          driver: {
            driversLicense:{description:'Possess a valid Civilian Driver\'s License (no waiver)', val:true, waiver:false},
            offenses: {description:'No convictions of driving offenses other than traffic violations', max:0, waiver:false}
          },
          vision: {
            correctable: {description:'Vision correctable to 20/20', val:true, waiver:false},
            depth:{description:'Normal Depth Perception Required (third degree binocular fusion)'},
            color: {description:'Pass normal color perception (NCP) test with PIP (12 out of 14 correct) or FALANT. Verify by DD 2808. No Waivers', val:12, waiver:false}
          }
        } //requirements
      },

      {     ///DUMMY
        pefCode: 'DUMMY',
        description: 'DUMMY PEF',
        mos: [{mos: '0000', description: '0000 MOS for RS'}, {mos: 'XXXX', description: 'XXXX MOS for RS'}],
        disqualifications: ['Lorem ipsum', 'something dolor'],
        requirements: {
          toe: {description: '', val: 7},
          usCitizen: {val: true},
          usCitizenFamily: {val: false},
          sex: {description: 'Female Only', val: 'F'},
          age: {min: 20, max:40, waivable:false},
          clearance: {description: 'Clearance Level clearance required', val: 'Clearance Level'},
          gt: {description: 'gt string', val: 110, waiver: 0},
          cl: {description: 'cl string', val: 95, waiver: 1},
          el: {description: 'el string', val: 95, waiver: 1},
          mm: {description: 'mm string', val: 90, waiver: 2},
          ve: {description: 've string', val: 85, waiver: 3},
          qt: {description: 'qt string', val: 80, waiver: 0},
          dlab: {description: 'dlab string', val: 130, waiver: 10},
          height: {
            min: 59,
            max: 79,
            optional: false,   //only some MOSs in a PEF may have height requirements
            waiver: 2
          },
          weight: {
            description: 'weight description string',
            min: 120,
            max: 190,
            optional: true,   //only some MOSs in a PEF may have weight requirements
            waiver: 0
          },
          driving: {
            driversLicense: {val: true, waiver: true},
            offenses: {maxAtRs: 1, maxAboveRs: 1, waiver: false},
            trafficViolations: {
              description: 'no traffic violations allowed',
              max: 0,
              maxAtRs: 0,
              maxAboveRs: 0,
              maxAtDep: 0,
              maxBeforeDep: 0,
              waiver: false
            }
          },
          moral: {
            conduct: {
              description: 'conduct string',
              maxAtRs: 1,
              maxAboveRs: 0,
              maxBeforeDep: 2,
              optional: true,
              waiver: true
            },
            marijuana: {description: 'mari string', max: 5, maxAtRs: 3, maxAboveRs: 0, maxBeforeDep: 0, waiver: false},
            otherDrugs: {description: 'drug string', maxAtRs: 1, maxAboveRs: 0, waiver: false}
          },
          tierGrad: {description: 'tier 1 grads only', val: 1, waiver: false},
          algebra: {description: '[]', val: true, waiver: true},
          vision: {
            correctable: {description: 'vision correctable', val: true, waiver: false},
            depth: {val: 13, ndp:true, waiver: true},
            color: {val: 12, waiver: false},
            acuity: {description: 'min vision test score', min1: 70, min2: 80, waiver: true}
          },
          waterQual: {description: 'sdfsxdf', val: true, optional: true, waiver: true},
          flightPhysical: {description: 'sdfsdf', val: true},
          speech: {description: 'sdfsdf', val: false, waiver: false},
          doncafScreening: {description: 'doncaf', val: false},
          pftClass1: {description: 'class 1', val: true, waiver: false},
          prpScreen: {description: 'informational', maxUnfavorableResponses: 1, waiver: true}
        } //requirements
      }

    );
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
