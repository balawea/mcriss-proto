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

      {     ///AE
        pefCode: 'AE',
        description: 'AVIATION SUPPORT',
        mos: [{mos: '6500', description: '6500 Aviation Ordnance'}, {mos: '6531', description: '6531 Aviation Ordnance Technician'}, {mos: '6541', description: '6541 Aviation Ordnance Systems Technician'},
          {mos: '7000', description: '7000 Airfield Services'}, {mos: '7011', description: '7011 Expeditionary Airfield Systems Technician'}, {mos: '7051', description: '7051 Aircraft Rescue and Firefighting Specialist'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Four (4) Year Term of Enlistment (TOE)', val: 4},
          usCitizen: {val: true},
          clearance: {description: 'Eligible for a SECRET Clearance', val: 'SECRET'},
          gt: {description: 'GT 105', val: 105, waiver: 3},
          mm: {description: 'MM 95', val: 95, waiver: 3},
          height: {
            description: 'Minimum height 64 inches (Actual Height, no waivers). Maximum Height 75 inches (Actual Height, no waivers).',
            min: 64,
            max: 75,
            optional: false,   //only some MOSs in a PEF may have height requirements
            waiverable: false
          },
          driving: {
            driversLicense: {val: true, waiver: true},
            offenses: {description: 'No convictions of driving offenses other than Traffic Violations', maxAboveRs: 0},
            trafficViolations: {
              description: 'No convictions of driving offenses other than Traffic Violations',
              max: 0,
              waiver: true
            }
          },
          moral: {
            conduct: {
              description: 'No Conduct Waivers above RS. No Waivers.',
              maxAboveRs: 0,
              waiver: false
            },
            marijuana: {description: 'No Drug Waivers above RS. No Waivers.', maxAboveRs: 0, waiver: true},
            otherDrugs: {description: 'No Drug Waivers above RS. No Waivers.', maxAboveRs: 0, waiver: true}
          },
          vision: {
            correctable: {description: 'Vision correctable to 20/20', val: true},
            color: {description:'Pass the Normal Color Perception (NCP) Test w/PIP (12 out of 14 correct) or FALANT.', val: 12, waiver: false}
          }
        } //requirements
      },
      {     ///AF
        pefCode: 'AF',
        description: 'AVIATION MECHANIC',
        mos: [{mos: '6000', description: '0000 MOS for RS'}, {mos: '6100', description: 'XXXX MOS for RS'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Five (5) Year Term of Enlistment (TOE)', val: 5},
          mm: {description: 'MM Score of 105 on the ASVAB. (Max 3-point waiver)', val: 105, waiver: 3}
        } //requirements
      },
      { //// AG
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
      {     ///AJ
        pefCode: 'AJ',
        description: 'AVIATION OPERATIONS',
        mos: [{mos: '7200', description: '0000 MOS for RS'}, {mos: '7300', description: 'XXXX MOS for RS'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Five (5) Year Term of Enlistment (TOE)', val: 5},
          usCitizen: {val: true},
          clearance: {description: 'Eligible for SECRET Clearance (No Conduct or Drug waivers above RS.', val: 'SECRET'},
          gt: {description: 'GT Score of 105 on the ASVAB.', val: 105, waiver: 3},
          moral: {
            conduct: {description: 'No Conduct or Drug waivers above RS', maxAboveRs: 0, maxAtRs:0, waiver: false},
            marijuana: {description: 'No Conduct or Drug waivers above RS', maxAboveRs: 0, waiver: false},
            otherDrugs: {description: 'No Conduct or Drug waivers above RS', maxAboveRs: 0, waiver: false}
          },
          vision: {
            color: {description:'Pass normal color perception (NCP) test with PIP (12 out of 14 correct) or FALANT. Verify by DD 2808. No Waivers', val:12, waiver:false},
          }
        } //requirements
      },
      {     ///BA
        pefCode: 'BA',
        description: 'AVIATION ELECTRONICS TECHNICIAN',
        mos: [{mos: '5900', description: '0000 MOS for RS'}, {mos: '6300', description: 'XXXX MOS for RS'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Five (5) Year Term of Enlistment (TOE)', val: 5},
          usCitizen: {val: true},
          clearance: {description: 'Eligible for SECRET Clearance (No Conduct or Drug waivers above RS).', val: 'SECRET'},
          el: {description: 'EL Score of 105 on the ASVAB', val: 105, waiver: 3},
          moral: {
            conduct: {description: 'No Conduct or Drug waivers above RS',maxAboveRs: 0, waiver:false},
            marijuana: {description: 'No Conduct or Drug waivers above RS', maxAboveRs: 0, waiver: false},
            otherDrugs: {description: 'No Conduct or Drug waivers above RS', maxAboveRs: 0, waiver: false}
          },
          algebra: {description: 'Successfully completed one year of High School Algebra or higher math', val: true},
          vision: {
            color: {description:'Pass normal color perception (NCP) test with PIP (12 out of 14 correct) or FALANT. Verify by DD 2808. No Waivers', val:12, waiver:false},
          }
        } //requirements
      },
      {     ///BY
        pefCode: 'BY',
        description: 'ELECTRONICS MAINTENANCE',
        mos: [{mos: '2100', description: '0000 MOS for RS'}, {mos: '2800', description: 'XXXX MOS for RS'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Five (5) Year Term of Enlistment (TOE)', val: 5},
          usCitizen: {val: true},
          clearance: {description: 'Eligible for SECRET Clearance (No Conduct or Drug waivers above RS.', val: 'SECRET'},
          el: {description: 'EL Score of 115 on the ASVAB', val: 115, waiver: 3},
          moral: {
            conduct: {description: 'No Conduct or Drug waivers above RS',maxAtRs: 0,maxAboveRs: 0},
            marijuana: {description: 'No Conduct or Drug waivers above RS', maxAboveRs: 0},
            otherDrugs: {description: 'No Conduct or Drug waivers above RS', maxAboveRs: 0}
          },
          algebra: {description: 'Successfully completed one year of High School Algebra or higher math', val: true},
          vision: {
            color: {description:'Pass normal color perception (NCP) test with PIP (12 out of 14 correct) or FALANT. Verify by DD 2808. No Waivers', val:12, waiver:false},
          }
        } //requirements
      },
      {//// CA
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
      {     ///CB
        pefCode: 'CB',
        description: 'LEGAL AND ADMINISTRATION OPTION',
        mos: [{mos: '0100', description: '0000 MOS for RS'}, {mos: '4400', description: 'XXXX MOS for RS'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Four (4) Year Term of Enlistment (TOE)', val: 4},
          cl: {description:'CL Score of 100 on the ASVAB', val:100, waiver:3}
        } //requirements
      },
      {     ///CC
        pefCode: 'CC',
        description: 'SUPPLY AND ACCOUNTING OPTIONS',
        mos: [{mos: '3000', description: '0000 MOS for RS'}, {mos: '3400', description: 'XXXX MOS for RS'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Four (4) Year Term of Enlistment (TOE)', val: 4},
          cl: {description: 'CL Score of 105 on the ASVAB', val: 105, waiver: 3}
        } //requirements
      },
      {     ///CD
        pefCode: 'CD',
        description: 'EQUIPMENT/VEHICLE REPAIR OPTION',
        mos: [{mos: '1300', description: '0000 MOS for RS'}, {mos: '3500', description: 'XXXX MOS for RS'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Four (4) Year Term of Enlistment (TOE)', val: 4},
          height: {
            description: 'Height requirement minimum 59 inches, no waivers',
            min: 59,
            optional: false,   //only some MOSs in a PEF may have height requirements
            waivable: false,
            waiver: 0
          },
          vision: {
            color: {description:'Pass normal color perception (NCP) test with PIP (12 out of 14 correct) or FALANT. Verify by DD 2808. No Waivers', val:12, waiver:false},
          }
        } //requirements
      },
      {     ///CE
        pefCode: 'CE',
        description: 'COMBAT SUPPORT',
        mos: [{mos: '0800', description: '0000 MOS for RS'}, {mos: '1800', description: 'XXXX MOS for RS'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Four (4) Year Term of Enlistment (TOE)', val: 4},
          sex: {description: 'male Only', val: 'M'},
          gt: {description: 'GT Score of 90 on the ASVAB', val: 90, waiver: 3},
          vision: {
            color: {description:'Pass normal color perception (NCP) test with PIP (12 out of 14 correct) or FALANT. Verify by DD 2808. No Waivers', val:12, waiver:false},
          },
          waterQual: {description:'Must have WS-B(+) Water Survival Qualification. Must perform the following: Crawl (25 yards), breast stroke (25 yards), ' +
          'side stroke (25 yards), elementary back stroke (25 yards), vertical fall from 12 foot platform, underwater swim without breaking surface (15 yards), ' +
          'tread water 2 1/2 minutes, front float 2 1/2 minutes', val:true, optional:false, waiver:false}
        } //requirements
      },
      {     ///CF
        pefCode: 'CF',
        description: 'ORDNANCE TECHNICIAN/METAL WORKS OPTION',
        mos: [{mos: '1300', description: '0000 MOS for RS'}, {mos: '2100', description: 'XXXX MOS for RS'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Four (4) Year Term of Enlistment (TOE)', val: 4},
          mm: {description: 'MM Score of 95 on the ASVAB', val: 95, waiver: 3},
          moral: {conduct: {description: 'MOS 2111 - No Misconduct above RS Level',maxAboveRs: 0,optional: true}},
          vision: {
            color: {description:'Pass normal color perception (NCP) test with PIP (12 out of 14 correct) or FALANT. Verify by DD 2808. No Waivers', val:12, waiver:false},
          }
        } //requirements
      },
      {     ///CG
        pefCode: 'CG',
        description: 'PUBLIC AFFAIRS',
        mos: [{mos: '4300', description: '0000 MOS for RS'}, {mos: '7300', description: 'XXXX MOS for RS'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Four (4) Year Term of Enlistment (TOE)', val: 4},
          usCitizen: {val: true},
          clearance: {description: 'Eligible for SECRET Clearance (No Conduct or Drug waivers above RS, to include misconduct offenses waived at the RS Level)', val: 'SECRET'},
          gt: {description: 'GT Score of 110 on the ASVAB', val: 110, waiver: 0},
          ve: {description: 'VE Score of 45 on the ASVAB', val: 45, waiver: 0},
          moral: {
            conduct: {description: 'No Conduct or Drug waivers above RS, to include misconduct offenses waived at the RS Level',maxAtRs: 0,maxAboveRs: 0},
            marijuana: {description: 'No Conduct or Drug waivers above RS', maxAboveRs: 0},
            otherDrugs: {description: 'No Conduct or Drug waivers above RS', maxAboveRs: 0}
          },
          vision: {
            color: {description:'Pass normal color perception (NCP) test with PIP (12 out of 14 correct) or FALANT. Verify by DD 2808. No Waivers', val:12, waiver:false},
          },
          speech: {description: 'Must possess Clarity of Speech', val: true},
          doncafScreening: {description: 'Be interviewed, screened, and accepted by RA NPA and District PA Chief or District PA OFficer', val: true},
        } //requirements
      },
      {     ///CH
        pefCode: 'CH',
        description: 'MEDIA OPTION',
        mos: [{mos: '4600', description: '0000 MOS for RS'}, {mos: '4612', description: 'XXXX MOS for RS'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Five (5) Year Term of Enlistment (TOE)', val: 5},
          usCitizen: {val: true},
          clearance: {description: 'Eligible for SECRET Clearance (No Conduct or Drug waivers above RS, to include misconduct offenses waived at the RS Level)', val: 'SECRET'},
          gt: {description: 'GT Score of 100 on the ASVAB', val: 100, waiver: 3},
          moral: {
            conduct: {description: 'No Conduct or Drug waivers above RS to include misconduct offenses waived at RS.',maxAtRs: 0, maxAboveRs: 0},
            marijuana: {description: 'No Conduct or Drug waivers above RS', maxAboveRs: 0},
            otherDrugs: {description: 'No Conduct or Drug waivers above RS', maxAboveRs: 0}
          },
          vision: {
            color: {description:'Pass normal color perception (NCP) test with PIP (12 out of 14 correct) or FALANT. Verify by DD 2808. No Waivers', val:12, waiver:false},
          },
          additionalScreening: {description: 'Applicants must submit their portfolio to the Combat Camera Management, MCB Quantico, VA', val: true}
        } //requirements
      },
      {     ///CJ
        pefCode: 'CJ',
        description: 'LOGISTICS OPTION',
        mos: [{mos: '0400', description: '0000 MOS for RS'}, {mos: '2300', description: 'XXXX MOS for RS'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Four (4) Year Term of Enlistment (TOE)', val: 4},
          usCitizen: {val: true},
          clearance: {description: 'Eligible for SECRET Clearance (No Conduct or Drug waivers above RS.', val: 'SECRET'},
          gt: {description: 'GT Score of 100 on the ASVAB', val: 100, waiver: 3},
          moral: {
            conduct: {description: 'No Conduct or Drug waivers above RS', maxAtRs:0, maxAboveRs: 0},
            marijuana: {description: 'No Conduct or Drug waivers above RS', maxAboveRs: 0},
            otherDrugs: {description: 'No Conduct or Drug waivers above RS', maxAboveRs: 0}
          }
        } //requirements
      },
      {     ///CK
        pefCode: 'CK',
        description: 'FIRE DIRECTION/CONTROL SPECIALIST',
        mos: [{mos: '0800', description: '0000 MOS for RS'}, {mos: '7300', description: 'XXXX MOS for RS'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Four (4) Year Term of Enlistment (TOE)', val: 4},
          usCitizen: {val: true},
          sex: {description: 'Male Only', val: 'M'},
          clearance: {description: 'Eligible for SECRET Clearance (No Conduct or Drug waivers above RS, to include misconduct offenses waived at the RS Level)', val: 'SECRET'},
          gt: {description: 'GT Score of 105 on the ASVAB', val: 105, waiver: 3},
          moral: {
            conduct: {description: 'No Conduct or Drug waivers above RS to include misconduct offenses waived at RS',maxAtRs: 0, maxAboveRs: 0},
            marijuana: {description: 'No Conduct or Drug waivers above RS to include misconduct offenses waived at RS', maxAboveRs: 0},
            otherDrugs: {description: 'No Conduct or Drug waivers above RS to include misconduct offenses waived at RS', maxAboveRs: 0}
          },
          vision: {
            correctable: {description:'Overall correctable to 20/20 (distant)', val:true, waiver:false},
            color: {description:'Pass normal color perception (NCP) test with PIP (12 out of 14 correct) or FALANT. Verify by DD 2808. No Waivers', val:12, waiver:false},
          }
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
