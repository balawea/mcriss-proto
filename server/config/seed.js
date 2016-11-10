/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Recruit from '../api/recruit/recruit.model';
import PefReq from '../api/pefRequirement/pefRequirement.model';

Recruit.find({}).remove()
  .then(() => {
    Recruit.create(
      {
        firstName: 'Howard',
        lastName: 'James',
        middleInitial: 'L',
        dob: '12/11/1989',
        active: true,
        usCitizen: {has: true},
        usCitizenFamily: {has: true},
        sex: {val: 'M'},
        height: {val: 72},
        weight: {val: 181},
        toe: {val: 5},
        afqt: {val: 87},
        cl: {val: 98},
        gt: {val: 92},
        el: {val: 84},
        mm: {val: 109},
        qt: {val: 91},
        ve: {val: 80},
        dlab: {val: 80},
        driving: {
          license: {has: false},
          offenses: {val: 1}
        },
        vision: {
          correctable: {has: true},
          depth: {has: true},
          color: {val: 13},
          acuity: {val: 160, val1: 80, val2: 80}
        }
      },

      {
        firstName: 'Valerie',
        lastName: 'Kuo',
        middleInitial: 'R',
        active: true,
        dob: '08/20/1977',
        usCitizen: {has: true},
        usCitizenFamily: {has: true},
        sex: {val: 'F'},
        height: {val: 68},
        weight: {val: 151},
        toe: {val: 4},
        afqt: {val: 83},
        cl: {val: 105},
        gt: {val: 98},
        el: {val: 84},
        mm: {val: 98},
        qt: {val: 91},
        ve: {val: 82},
        dlab: {val: 90},
        driving: {
          license: {has: true},
          offenses: {val: 1}
        },
        vision: {
          correctable: {has: true},
          depth: {has: true},
          color: {val: 11},
          acuity: {val:120, val1: 100, val2: 20}
        }
      },

      {
        firstName: 'Ashley',
        lastName: 'Martinez',
        middleInitial: 'A',
        dob: '03/16/70',
        usCitizen: {has: true},
        usCitizenFamily: {has: true},
        sex: {val: 'M'},
        height: {val: 66},
        weight: {val: 141},
        toe: {val: 4},
        clearance: {val: 'SECRET'},
        driving: {
          license: {has: true},
          offenses: {val: 1}
        },
        vision: {
          correctable: {has: true},
          depth: {has: true},
          color: {val: 10},
          acuity: {val: 50, val1: 30, val2: 20}
        },
        afqt: {val: 90},
        cl: {val: 104},
        gt: {val: 109},
        el: {val: 118},
        mm: {val: 111},
        qt: {val: 91},
        ve: {val: 61},
        dlab: {val: 90},
        algebra: {has: true},
        speech: {has: true},
        active: true
      },

      {
        firstName: 'Andrew',
        lastName: 'Junior',
        middleInitial: 'N',
        active: true,
        dob: '10/07/1986',
        usCitizen: {has: true},
        usCitizenFamily: {has: false},
        sex: {val: 'M'},
        height: {val: 62},
        weight: {val: 131},
        toe: {val: 5},
        afqt: {val: 103},
        cl: {val: 97},
        gt: {val: 116},
        el: {val: 128},
        mm: {val: 121},
        qt: {val: 101},
        ve: {val: 81},
        dlab: {val: 90},
        driving: {
          license: {has: true},
          offenses: {val: 1}
        },
        moral: {
          conduct: {val: 1, valAtRs: 1},
          marijuana: {val: 3, valAtRs: 0}
        },
        vision: {
          correctable: {has: true},
          depth: {has: true},
          color: {val: 14},
          acuity: {val: 40, val1: 20, val2: 20}
        }
      },

      {
        firstName: 'Milton',
        lastName: 'Bradley',
        middleInitial: 'J',
        active: false,
        dob: '11/17/1945',
        usCitizen: {has: true},
        usCitizenFamily: {has: true},
        sex: {val: 'M'},
        height: {val: 73},
        weight: {val: 171},
        toe: {val: 4},
        afqt: {val: 88},
        cl: {val: 82},
        gt: {val: 84},
        el: {val: 102},
        mm: {val: 96},
        qt: {val: 101},
        ve: {val: 42},
        dlab: {val: 90},
        driving: {
          license: {has: true},
          violations: {val: 2}
        },
        moral: {
          conduct: {val: 0, valAtRs: 1},
          marijuana: {val: 3, valBeforeDep: 1},
          otherDrugs: {val: 1, valAfterRs: 1}
        },
        vision: {
          correctable: {has: false},
          depth: {has: false},
          color: {val: 14},
          acuity: {val: 120, val1: 20, val2: 100}
        }
      },

      {
        firstName: 'Charlotte',
        lastName: 'Early',
        middleInitial: 'O',
        active: false,
        dob: '04/17/1972',
        usCitizen: {has: false},
        usCitizenFamily: {has: false},
        sex: {val: 'F'},
        height: {val: 70},
        weight: {val: 171},
        toe: {val: 5},
        afqt: {val: 88},
        cl: {val: 82},
        gt: {val: 84},
        el: {val: 102},
        mm: {val: 96},
        qt: {val: 101},
        ve: {val: 42},
        dlab: {val: 90},
        driving: {
          license: {has: true},
          offenses: {val: 1},
          violations: {val: 2}
        },
        moral: {
          marijuana: {val: 3}
        },
        vision: {
          correctable: {has: false},
          depth: {has: false},
          color: {val: 14},
          acuity: {val: 220, val1: 120, val2: 100}
        }
      },

      {
        firstName: 'William',
        lastName: 'Franklin',
        middleInitial: '',
        active: true,
        dob: '09/02/1965',
        usCitizen: {has: true},
        usCitizenFamily: {has: true},
        sex: {val: 'M'},
        height: {val: 75},
        weight: {val: 191},
        afqt: {val: 80},
        cl: {val: 80},
        gt: {val: 84},
        el: {val: 111},
        mm: {val: 95},
        qt: {val: 101},
        ve: {val: 45},
        dlab: {val: 80},
        toe: {val: 4},
        driving: {
          license: {has: false},
          violations: {val: 4}
        },
        moral: {
          conduct: {val: 3}
        },
        vision: {
          correctable: {has: true},
          depth: {has: false},
          color: {val: 14},
          acuity: {val: 120, val1: 60, val2: 60}
        }
      }
    );
  });

PefReq.find({}).remove()
  .then(() => {
    PefReq.create(

/*
      { //// TEST
        pefCode: 'ACUITY',
        description: 'ENLISTED AIRCREW',
        mos: [
          {mos: '6100', description: '6100 Aircraft Maintenance (Rotary Wing)'}, {mos: '6172', description: '6172 Helicopter Crew Chief CH-46'},
          {mos: '6173', description: '6173 Helicopter Crew Chief CH-53'}, {mos: '6174', description: '6174 Helicopter Crew Chief AH/UH-1'},
          {mos: '6176', description: '6176 Tiltrotor Crew Chief MV-22'}, {mos: '6200', description: '6200 Aircraft Maintenance (Fixed Wing)'},
          {mos: '6276', description: '6276 Fixed Wing Aircraft Crew Chief KC-130'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          vision: {
            acuity: {description: 'Vision no worse than 20/70 (distant) in one eye and 20/100 (distant) in the other', max: 170, max1: 70, max2: 100, waivable: false}
          }
        } //requirements
      },
*/

      {     ///AE
        pefCode: 'AE',
        description: 'AVIATION SUPPORT',
        mos: [{mos: '6500', description: '6500 Aviation Ordnance'}, {mos: '6531', description: '6531 Aviation Ordnance Technician'},
          {mos: '6541', description: '6541 Aviation Ordnance Systems Technician'}, {mos: '7000', description: '7000 Airfield Services'},
          {mos: '7011', description: '7011 Expeditionary Airfield Systems Technician'}, {mos: '7051', description: '7051 Aircraft Rescue and Firefighting Specialist'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Four (4) Year Term of Enlistment (toe)', val: 4},
          usCitizen: {has: true},
          clearance: {description: 'Eligible for a SECRET Clearance', val: 'SECRET'},
          gt: {description: 'GT 105', min: 105, waiver: 3},
          mm: {description: 'MM 95', min: 95, waiver: 3},
          height: {
            description: 'Minimum height 64 inches (Actual height, no waivers). Maximum height 75 inches (Actual height, no waivers).',
            min: 64,
            max: 75,
            optional: false,   //only some MOSs in a PEF may have height requirements
            waivable: false
          },
          driving: {
            license: {has: true, waivable: true},
            offenses: {description: 'No convictions of driving offenses other than Traffic Violations', max: 0, maxAboveRs: 0},
            violations: {description: 'No convictions of driving offenses other than Traffic Violations', max: 0, waivable: true}
          },
          moral: {
            conduct: {
              description: 'No Conduct Waivers above RS. No Waivers.', max:0, maxAboveRs: 0, waivable: false },
              marijuana: {description: 'No Drug Waivers above RS. No Waivers.', max:0, maxAboveRs: 0, waivable: true},
              otherDrugs: {description: 'No Drug Waivers above RS. No Waivers.', max:0, maxAboveRs: 0, waivable: true}
          },
          vision: {
            correctable: {description: 'Vision correctable to 20/20', has: true},
            color: {description: 'Pass the Normal Color Perception (NCP) Test w/PIP (12 out of 14 correct) or FALANT.', min: 12, waivable: false}
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
          toe: {description: 'Five (5) Year Term of Enlistment (toe)', val: 5},
          mm: {description: 'MM Score of 105 on the ASVAB. (Max 3-point waiver)', waiver: 3, min: 105}
        } //requirements
      },

      { //// AG
        pefCode: 'AG',
        description: 'ENLISTED AIRCREW',
        mos: [
          {mos: '6100', description: '6100 Aircraft Maintenance (Rotary Wing)'}, {mos: '6172', description: '6172 Helicopter Crew Chief CH-46'},
          {mos: '6173', description: '6173 Helicopter Crew Chief CH-53'}, {mos: '6174', description: '6174 Helicopter Crew Chief AH/UH-1'},
          {mos: '6176', description: '6176 Tiltrotor Crew Chief MV-22'}, {mos: '6200', description: '6200 Aircraft Maintenance (Fixed Wing)'},
          {mos: '6276', description: '6276 Fixed Wing Aircraft Crew Chief KC-130'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Five Year Term of Enlistment (toe)', val: 5},
          usCitizen: {description: 'U.S. Citizen (no waiver)', has: true},
          clearance: {description: 'Eligible for SECRET Clearance.', val: 'SECRET'},
          gt: {description: 'GT 110', min: 110, waiver: 3},
          mm: {description: 'MM 105', min: 105, waiver: 3},
          moral: {
            conduct: {description: 'No Conduct waivers above Recruiting Station Level', max:0, maxAboveRs: 0, waivable: true},
            marijuana: {description: 'No Drug waivers above Recruiting Station Level', max:0, maxAboveRs: 0, waivable: true},
            otherDrugs: {description: 'No Drug waivers above Recruiting Station Level', max:0, maxAboveRs: 0, waivable: true}
          },
          vision: {
            correctable: {description: 'Overall correctable to 20/20 (distant)', has: true, waivable: false},
            color: {description: 'Pass normal color perception (NCP) test with PIP (12 out of 14 correct) or FALANT. Verify by DD 2808. No Waivers', min: 12, waivable: false},
            acuity: {description: 'Vision no worse than 20/70 (distant) in one eye and 20/100 (distant) in the other', max: 170, max1: 70, max2: 100, waivable: false}
          },
          waterQual: {
            description: 'Must have WS-B(+) Water Survival Qualification. Must perform the following: Crawl (25 yards), breast stroke (25 yards), ' +
            'side stroke (25 yards), elementary back stroke (25 yards), vertical fall from 12 foot platform, underwater swim without breaking surface (15 yards), ' +
            'tread water 2 1/2 minutes, front float 2 1/2 minutes', has: true, optional: false, waivable: false
          },
          flightPhysical: {description: 'Pass rigorous flight physical', has: true, waivable: false}
        } //requirements
      },

      {     ///AJ
        pefCode: 'AJ',
        description: 'AVIATION OPERATIONS',
        mos: [{mos: '7200', description: '0000 MOS for RS'}, {mos: '7300', description: 'XXXX MOS for RS'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Five (5) Year Term of Enlistment (toe)', val: 5},
          usCitizen: {has: true},
          clearance: {
            description: 'Eligible for SECRET Clearance (No Conduct or Drug waivers above RS.',
            val: 'SECRET'
          },
          gt: {description: 'GT Score of 105 on the ASVAB.', min: 105, waiver: 3},
          moral: {
            conduct: {description: 'No Conduct or Drug waivers above RS', max:0, maxAboveRs: 0, maxAtRs: 0, waivable: false},
            marijuana: {description: 'No Conduct or Drug waivers above RS', max:0, maxAboveRs: 0, waivable: false},
            otherDrugs: {description: 'No Conduct or Drug waivers above RS', max:0, maxAboveRs: 0, waivable: false}
          },
          vision: {
            color: {
              description: 'Pass normal color perception (NCP) test with PIP (12 out of 14 correct) or FALANT. Verify by DD 2808. No Waivers',
              min: 12,
              waivable: false
            },
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
          toe: {description: 'Five (5) Year Term of Enlistment (toe)', val: 5},
          usCitizen: {has: true},
          clearance: {description: 'Eligible for SECRET Clearance (No Conduct or Drug waivers above RS).', val: 'SECRET'},
          el: {description: 'EL Score of 105 on the ASVAB', min: 105, waiver: 3},
          moral: {
            conduct: {description: 'No Conduct or Drug waivers above RS', max:0, maxAboveRs: 0, waivable: false},
            marijuana: {description: 'No Conduct or Drug waivers above RS', max:0, maxAboveRs: 0, waivable: false},
            otherDrugs: {description: 'No Conduct or Drug waivers above RS', max:0, maxAboveRs: 0, waivable: false}
          },
          algebra: {description: 'Successfully completed one year of High School Algebra or higher math', has: true},
          vision: {
            color: {
              description: 'Pass normal color perception (NCP) test with PIP (12 out of 14 correct) or FALANT. Verify by DD 2808. No Waivers',
              min: 12,
              waivable: false
            },
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
          toe: {description: 'Five (5) Year Term of Enlistment (toe)', val: 5},
          usCitizen: {has: true},
          clearance: {description: 'Eligible for SECRET Clearance (No Conduct or Drug waivers above RS.', val: 'SECRET'},
          el: {description: 'EL Score of 115 on the ASVAB', min: 115, waiver: 3},
          moral: {
            conduct: {description: 'No Conduct or Drug waivers above RS', max:0, maxAtRs: 0, maxAboveRs: 0},
            marijuana: {description: 'No Conduct or Drug waivers above RS', max:0, maxAboveRs: 0},
            otherDrugs: {description: 'No Conduct or Drug waivers above RS', max:0, maxAboveRs: 0}
          },
          algebra: {description: 'Successfully completed one year of High School Algebra or higher math', has: true},
          vision: {
            color: {description: 'Pass normal color perception (NCP) test with PIP (12 out of 14 correct) or FALANT. Verify by DD 2808. No Waivers', min: 12, waivable: false},
          }
        } //requirements
      },

      {//// CA
        pefCode: 'CA',
        description: 'TRANSPORTATION OPTION',
        mos: [{mos: '3500', description: '3500 Motor Transport'}, {mos: '3531', description: '3531 Motor Vehicle Operator'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Four Year Term of Enlistment', val: 4},
          mm: {description: 'MM 85', min: 85, waiver: 3},
          height: {
            description: 'Minimum height: 59 inches (actual height, no waiver). Maximum height: 75 inches (actual height, no waiver).',
            min: 59,
            max: 75,
            optional: false,
            waivable: false
          },
          driver: {
            license: {description: 'Possess a valid Civilian Driver\'s License (no waiver)', has: true, waivable: false},
            offenses: {description: 'No convictions of driving offenses other than traffic violations', max: 0, waivable: false}
          },
          vision: {
            correctable: {description: 'Vision correctable to 20/20', has: true, waivable: false},
            depth: {description: 'Normal Depth Perception Required (third degree binocular fusion)'},
            color: {description: 'Pass normal color perception (NCP) test with PIP (12 out of 14 correct) or FALANT. Verify by DD 2808. No Waivers', min: 12, waivable: false}
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
          toe: {description: 'Four (4) Year Term of Enlistment (toe)', val: 4},
          cl: {description: 'CL Score of 100 on the ASVAB', min: 100, waiver: 3}
        } //requirements
      },

      {     ///CC
        pefCode: 'CC',
        description: 'SUPPLY AND ACCOUNTING OPTIONS',
        mos: [{mos: '3000', description: '0000 MOS for RS'}, {mos: '3400', description: 'XXXX MOS for RS'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Four (4) Year Term of Enlistment (toe)', val: 4},
          cl: {description: 'CL Score of 105 on the ASVAB', min: 105, waiver: 3}
        } //requirements
      },

      {     ///CD
        pefCode: 'CD',
        description: 'EQUIPMENT/VEHICLE REPAIR OPTION',
        mos: [{mos: '1300', description: '0000 MOS for RS'}, {mos: '3500', description: 'XXXX MOS for RS'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Four (4) Year Term of Enlistment (toe)', val: 4},
          height: {
            description: 'height requirement minimum 59 inches, no waivers',
            min: 59,
            optional: false,   //only some MOSs in a PEF may have height requirements
            waivable: false,
            waiver: 0
          },
          vision: {
            color: {
              description: 'Pass normal color perception (NCP) test with PIP (12 out of 14 correct) or FALANT. Verify by DD 2808. No Waivers',
              min: 12,
              waivable: false
            },
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
          toe: {description: 'Four (4) Year Term of Enlistment (toe)', val: 4},
          sex: {description: 'Male Only', val: 'M'},
          gt: {description: 'GT Score of 90 on the ASVAB', min: 90, waiver: 3},
          vision: {
            color: {
              description: 'Pass normal color perception (NCP) test with PIP (12 out of 14 correct) or FALANT. Verify by DD 2808. No Waivers',
              min: 12,
              waivable: false
            },
          },
          waterQual: {
            description: 'Must have WS-B(+) Water Survival Qualification. Must perform the following: Crawl (25 yards), breast stroke (25 yards), ' +
            'side stroke (25 yards), elementary back stroke (25 yards), vertical fall from 12 foot platform, underwater swim without breaking surface (15 yards), ' +
            'tread water 2 1/2 minutes, front float 2 1/2 minutes', has: true, optional: false, waivable: false}
        } //requirements
      },

      {     ///CF
        pefCode: 'CF',
        description: 'ORDNANCE TECHNICIAN/METAL WORKS OPTION',
        mos: [{mos: '1300', description: '0000 MOS for RS'}, {mos: '2100', description: 'XXXX MOS for RS'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Four (4) Year Term of Enlistment (toe)', val: 4},
          mm: {description: 'MM Score of 95 on the ASVAB', min: 95, waiver: 3},
          moral: {conduct: {description: 'MOS 2111 - No Misconduct above RS Level', max:0, maxAboveRs: 0, optional: true}},
          vision: {
            color: {
              description: 'Pass normal color perception (NCP) test with PIP (12 out of 14 correct) or FALANT. Verify by DD 2808. No Waivers',
              min: 12,
              waivable: false
            },
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
          toe: {description: 'Four (4) Year Term of Enlistment (toe)', val: 4},
          usCitizen: {has: true},
          clearance: {description: 'Eligible for SECRET Clearance (No Conduct or Drug waivers above RS, to include misconduct offenses waived at the RS Level)', val: 'SECRET'},
          gt: {description: 'GT Score of 110 on the ASVAB', min: 110, waiver: 0},
          ve: {description: 'VE Score of 45 on the ASVAB', min: 45, waiver: 0},
          moral: {
            conduct: {description: 'No Conduct or Drug waivers above RS, to include misconduct offenses waived at the RS Level', max:0, maxAtRs: 0,maxAboveRs: 0},
            marijuana: {description: 'No Conduct or Drug waivers above RS', max:0, maxAboveRs: 0},
            otherDrugs: {description: 'No Conduct or Drug waivers above RS', max:0, maxAboveRs: 0}
          },
          vision: {
            color: {description: 'Pass normal color perception (NCP) test with PIP (12 out of 14 correct) or FALANT. Verify by DD 2808. No Waivers', min: 12, waivable: false},
          },
          speech: {description: 'Must possess Clarity of Speech', has: true},
          doncafScreening: {description: 'Be interviewed, screened, and accepted by RA NPA and District PA Chief or District PA OFficer', has: true},
        } //requirements
      },

      {     ///CH
        pefCode: 'CH',
        description: 'MEDIA OPTION',
        mos: [{mos: '4600', description: '0000 MOS for RS'}, {mos: '4612', description: 'XXXX MOS for RS'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Five (5) Year Term of Enlistment (toe)', val: 5},
          usCitizen: {has: true},
          clearance: {description: 'Eligible for SECRET Clearance (No Conduct or Drug waivers above RS, to include misconduct offenses waived at the RS Level)', val: 'SECRET'},
          gt: {description: 'GT Score of 100 on the ASVAB', min: 100, waiver: 3},
          moral: {
            conduct: {description: 'No Conduct or Drug waivers above RS to include misconduct offenses waived at RS.', max:0, maxAtRs: 0, maxAboveRs: 0},
            marijuana: {description: 'No Conduct or Drug waivers above RS', max:0, maxAboveRs: 0},
            otherDrugs: {description: 'No Conduct or Drug waivers above RS', max:0, maxAboveRs: 0}
          },
          vision: {
            color: {description: 'Pass normal color perception (NCP) test with PIP (12 out of 14 correct) or FALANT. Verify by DD 2808. No Waivers', min: 12, waivable: false},
          },
          additionalScreening: {description: 'Applicants must submit their portfolio to the Combat Camera Management, MCB Quantico, VA', has: true}
        } //requirements
      },

      {     ///CJ
        pefCode: 'CJ',
        description: 'LOGISTICS OPTION',
        mos: [{mos: '0400', description: '0000 MOS for RS'}, {mos: '2300', description: 'XXXX MOS for RS'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Four (4) Year Term of Enlistment (toe)', val: 4},
          usCitizen: {has: true},
          clearance: {description: 'Eligible for SECRET Clearance (No Conduct or Drug waivers above RS)', val: 'SECRET'},
          gt: {description: 'GT Score of 100 on the ASVAB', min: 100, waiver: 3},
          moral: {
            conduct: {description: 'No Conduct or Drug waivers above RS', max:0, maxAtRs: 0, maxAboveRs: 0},
            marijuana: {description: 'No Conduct or Drug waivers above RS', max:0, maxAboveRs: 0},
            otherDrugs: {description: 'No Conduct or Drug waivers above RS', max:0, maxAboveRs: 0}
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
          toe: {description: 'Four (4) Year Term of Enlistment (toe)', val: 4},
          usCitizen: {has: true},
          sex: {description: 'Male Only', val: 'M'},
          clearance: {description: 'Eligible for SECRET Clearance (No Conduct or Drug waivers above RS, to include misconduct offenses waived at the RS Level)', val: 'SECRET'},
          gt: {description: 'GT Score of 105 on the ASVAB', min: 105, waiver: 3},
          moral: {
            conduct: {description: 'No Conduct or Drug waivers above RS to include misconduct offenses waived at RS.', max:0, maxAtRs: 0, maxAboveRs: 0},
            marijuana: {description: 'No Conduct or Drug waivers above RS to include misconduct offenses waived at RS.', max:0, maxAboveRs: 0},
            otherDrugs: {description: 'No Conduct or Drug waivers above RS to include misconduct offenses waived at RS.', max:0, maxAboveRs: 0}
          },
          vision: {
            correctable: {description: 'Overall correctable to 20/20 (distant)', has: true, waivable: false},
            color: {description: 'Pass normal color perception (NCP) test with PIP (12 out of 14 correct) or FALANT. Verify by DD 2808. No Waivers', min: 12, waivable: false},
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
