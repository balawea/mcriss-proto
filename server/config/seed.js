/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import Recruit from '../api/recruit/recruit.model';
import PefReq from '../api/pefRequirement/pefRequirement.model';


PefReq.find({}).remove()
  .then(() => {
    PefReq.create(

      { //// FULL TEST
        pefCode: 'FULL TEST',
        description: 'Mission Impossible - all fields required',
        mos: [
          {mos: '6100', description: '6100 Aircraft Maintenance (Rotary Wing)'}, {mos: '6172', description: '6172 Helicopter Crew Chief CH-46'},
          {mos: '6173', description: '6173 Helicopter Crew Chief CH-53'}, {mos: '6174', description: '6174 Helicopter Crew Chief AH/UH-1'},
          {mos: '6176', description: '6176 Tiltrotor Crew Chief MV-22'}, {mos: '6200', description: '6200 Aircraft Maintenance (Fixed Wing)'},
          {mos: '6276', description: '6276 Fixed Wing Aircraft Crew Chief KC-130'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          age: {description:'Min age 140, max age 375', min:140, max:375},
          sex: {description:'Candidate must be a Vulcan', val:'V'},
          toe: {description: 'Twenty-five Year Term of Enlistment (toe)', min: 25},
          usCitizen: {description: 'Must NOT be a U.S. Citizen (no waiver)', has: false},
          usCitizenFamily: {description: 'All family members must NOT be U.S. Citizens (no waiver)', has: false, waivable: false},
          clearance: {description: 'Eligible for TOP SECRET Clearance.', min: 2},
          gt: {description: 'GT 1107', min: 1107},
          mm: {description: 'MM 1055', min: 1055},
          ve: {description: 'MM 1055', min: 1055},
          qt: {description: 'MM 1055', min: 1055},
          cl: {description: 'MM 1055', min: 1055},
          el: {description: 'MM 1065', min: 1065},
          dlab: {description: 'MM 1065', min: 1065},
          tierGrad: {description:'Must be Tier 0', max:-1},
          algebra: {description:'Must not have taken algebra', has:true},
          driving: {
            license: {has: true},
            offenses: {description: '-1 convictions of driving offenses other than Traffic Violations', max: -1, maxAboveRs: 0, waivable:true, waiver:2},
            violations: {description: '-1 convictions of driving offenses other than Traffic Violations', max: -1, waivable:true, waiver:2}
          },
          height: {
            description: 'Minimum height 80 inches (Actual height, no waivers). Maximum height 97 inches (Actual height, no waivers).',
            min: 80,
            max: 97,
            optional: false,
            waivable: true,
            waiver: 2
          },
          weight: {
            description: 'Minimum weight 250 inches (Actual height, no waivers). Maximum weight 375 inches (Actual weight, no waivers).',
            min: 350,
            max: 375,
            optional: false,
            waivable: true,
            waiver: 20
          },
          moral: {
            conduct: {description: 'No Conduct waivers above Recruiting Station Level', max:-1},
            marijuana: {description: 'No Drug waivers above Recruiting Station Level', max:-1},
            otherDrugs: {description: 'No Drug waivers above Recruiting Station Level', max:-1}
          },
          vision: {
            correctable: {description: 'Overall correctable to 20/20 (distant)', has: true},
            depth: {description: 'Does not have normal depth perception', has: true},
            color: {description: 'PASS normal color perception (NCP) with 15 out of 14', min: 15},
            acuity: {description: 'Vision no worse than 20/70 (distant) in one eye and 20/100 (distant) in the other', max: 0, max1: 20, max2: 20}
          },
          waterQual: {
            description: 'Must have WS-B(+) Water Survival Qualification. Must perform the following: Crawl (25 yards), breast stroke (25 yards), ' +
            'side stroke (25 yards), elementary back stroke (25 yards), vertical fall from 12 foot platform, underwater swim without breaking surface (15 yards), ' +
            'tread water 2 1/2 minutes, front float 2 1/2 minutes', has: true, optional: false
          },
          flightPhysical: {description: 'Must fail rigorous flight physical', has: true},
          pftClass1:{description:'Must not be PFT 1st Class', has:true},
          speech: {description: 'Must not have Clarity of Speech', has: true},
          prpScreen:{description:'Must FAIL PRP screen', max:-1},
          doncafScreening: {description: 'Be interviewed, screened, and REJECTED by RA NPA and District PA Chief or District PA OFficer', has: true},
          additionalScreening: {description: 'Agrees to required additional screening', has: true}
        } //requirements
      },

      
      {
        pefCode: 'TEST WAIVABLES',
        description: '',
        allocation: 455,
        shipDates: [],
        requirements: {
          age: {description:'Must be at least 19, waivable', min:40, waivable:true, waiver:25},
          sex: {description:'Must be Special, waivable', val:'S', waivable:true},
          toe: {description:'TOE = 30 years, waivable', min:30, waivable:true, waiver:30},
          gt: {description:'Score of 150 required, waivable', min:150, waivable:true, waiver:100},
          cl: {description:'Score of 150 required, waivable', min:150, waivable:true, waiver:100},
          el: {description:'Score of 150 required, waivable', min:150, waivable:true, waiver:100},
          mm: {description:'Score of 150 required, waivable', min:150, waivable:true, waiver:100},
          ve: {description:'Score of 150 required, waivable', min:150, waivable:true, waiver:100},
          qt: {description:'Score of 150 required, waivable', min:150, waivable:true, waiver:100},
          dlab: {description:'Score of 150 required, waivable', min:150, waivable:true, waiver:100},
      //    asvabOrList: {description:String, gt:Number, cl:Number, el:Number, mm:Number, ve:Number, qt:Number}, //Logical OR: exceeding any one of the included scores makes a match
          height: {description:'Must be really short, waivable', min:27, max:45, optional:true, waivable:true, waiver:60},
          weight: {description:'Must be really skinny, waivable', min:27, max:45, optional:true, waivable:true, waiver:200},
          driving: {
            license: {description: 'Must have it, waivable', has: true, waivable: true},
            offenses: {description: 'Max offenses/violations, waivable', max:-1, waivable:true, waiver:10},
            violations: {description: 'Max offenses/violations, waivable', max:-1, waivable:true, waiver:10},
          },
          moral: {
            conduct: {description: 'Max offenses/violations, waivable', max:-1, waivable:true, waiver:10},
            marijuana: {description: 'Max offenses/violations, waivable', max:-1, waivable:true, waiver:10},
            otherDrugs: {description: 'Max offenses/violations, waivable', max:-1, waivable:true, waiver:10},
          },
          tierGrad: {description:'this tier required, waivable', max:0, waivable:true, waiver:3},// 1=Highschool grad, 2=homeschooler. Using "max" as a simplification since rules never exclude tier 1 grads.
          algebra: {description:'must have algebra, waivable', has:true, waivable:true},
          vision: {
            correctable: {description:'This is required, but waivable', has:true, waivable:true},
            depth: {description:'This is required, but waivable', has:true, waivable:true},
            color: {description:'Color perception, 15 min required, but waivable', min:15, waivable:true, waiver:8},
            acuity: {description:'Acuity max 70/100. Waivable', max:170, max1:70, max2:100, waivable:true, waiver:100}
          },
          waterQual: {description:'Waterqual is required. Waivable', has:true, waivable:true},
          flightPhysical: {description:'flightphys is required. Waivable', has:true, waivable:true},
          speech: {description:'speech is required. Waivable', has:true, waivable:true},
          pftClass1: {description:'pfrclass1 is required. Waivable', has:true, waivable:true},
          prpScreen: {description:'prpscreen is required with at most -1 negative responses. Waivable', max:-1, waivable:true, waiver:10},
          } //requirements
      },
        
      {     ///AE
        pefCode: 'AE',
        description: 'AVIATION SUPPORT',
        mos: [{mos: '6500', description: '6500 Aviation Ordnance'}, {mos: '6531', description: '6531 Aviation Ordnance Technician'},
          {mos: '6541', description: '6541 Aviation Ordnance Systems Technician'}, {mos: '7000', description: '7000 Airfield Services'},
          {mos: '7011', description: '7011 Expeditionary Airfield Systems Technician'}, {mos: '7051', description: '7051 Aircraft Rescue and Firefighting Specialist'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        allocation: 400,
        shipDates: [new Date('12/3/2017'), new Date('9/3/2017'), new Date('6/3/2017'),new Date('3/3/2017')],
        requirements: {
          toe: {description: 'Four (4) Year Term of Enlistment (toe)', min: 4},
          usCitizen: {has: true},
          clearance: {description: 'Eligible for a SECRET Clearance', min: 1},
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
            offenses: {description: 'No convictions or Driving Offenses other than Traffic Violations', max: 0, maxAboveRs: 0},
            violations: {description: 'No convictions or Driving Offenses other than Traffic Violations', max: 0, waivable: true}
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
          toe: {description: 'Five (5) Year Term of Enlistment (toe)', min: 5},
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
          toe: {description: 'Five Year Term of Enlistment (toe)', min: 5},
          usCitizen: {description: 'U.S. Citizen (no waiver)', has: true},
          clearance: {description: 'Eligible for SECRET Clearance.', min: 1},
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
          toe: {description: 'Five (5) Year Term of Enlistment (toe)', min: 5},
          usCitizen: {has: true},
          clearance: {
            description: 'Eligible for SECRET Clearance (No Conduct or Drug waivers above RS.',
            min: 1
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
          toe: {description: 'Five (5) Year Term of Enlistment (toe)', min: 5},
          usCitizen: {has: true},
          clearance: {description: 'Eligible for SECRET Clearance (No Conduct or Drug waivers above RS).', min: 1},
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
          toe: {description: 'Five (5) Year Term of Enlistment (toe)', min: 5},
          usCitizen: {has: true},
          clearance: {description: 'Eligible for SECRET Clearance (No Conduct or Drug waivers above RS.', min: 1},
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
          toe: {description: 'Four Year Term of Enlistment', min: 4},
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
          toe: {description: 'Four (4) Year Term of Enlistment (toe)', min: 4},
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
          toe: {description: 'Four (4) Year Term of Enlistment (toe)', min: 4},
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
          toe: {description: 'Four (4) Year Term of Enlistment (toe)', min: 4},
          height: {
            description: 'Height requirement minimum 59 inches, no waivers',
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
          toe: {description: 'Four (4) Year Term of Enlistment (toe)', min: 4},
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
          toe: {description: 'Four (4) Year Term of Enlistment (toe)', min: 4},
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
          toe: {description: 'Four (4) Year Term of Enlistment (toe)', min: 4},
          usCitizen: {has: true},
          clearance: {description: 'Eligible for SECRET Clearance (No Conduct or Drug waivers above RS, to include misconduct offenses waived at the RS Level)', min: 1},
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
          toe: {description: 'Five (5) Year Term of Enlistment (toe)', min: 5},
          usCitizen: {has: true},
          clearance: {description: 'Eligible for SECRET Clearance (No Conduct or Drug waivers above RS, to include misconduct offenses waived at the RS Level)', min: 1},
          gt: {description: 'GT Score of 100 on the ASVAB', min: 100, waiver: 3},
          moral: {
            conduct: {description: 'No Conduct or Drug waivers above RS to include misconduct offenses waived at RS.', max:0, maxAtRs: 0, maxAboveRs: 0},
            marijuana: {description: 'No Conduct or Drug waivers above RS', max:0, maxAboveRs: 0},
            otherDrugs: {description: 'No Conduct or Drug waivers above RS', max:0, maxAboveRs: 0}
          },
          vision: {
            color: {description: 'Pass normal color perception (NCP) test with PIP (12 out of 14 correct) or FALANT. Verify by DD 2808. No Waivers', min: 12, waivable: false},
          },
          additionalScreening: {description: 'Applicants must submit their portfolio to the Combat Camera Management, MCB Quantico, VA', info: true}
        } //requirements
      },

      {     ///CJ
        pefCode: 'CJ',
        description: 'LOGISTICS OPTION',
        mos: [{mos: '0400', description: '0000 MOS for RS'}, {mos: '2300', description: 'XXXX MOS for RS'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Four (4) Year Term of Enlistment (toe)', min: 4},
          usCitizen: {has: true},
          clearance: {description: 'Eligible for SECRET Clearance (No Conduct or Drug waivers above RS)', min: 1},
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
          toe: {description: 'Four (4) Year Term of Enlistment (toe)', min: 4},
          usCitizen: {has: true},
          sex: {description: 'Male Only', val: 'M'},
          clearance: {description: 'Eligible for SECRET Clearance (No Conduct or Drug waivers above RS, to include misconduct offenses waived at the RS Level)', min: 1},
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
    )
    .then(() => {
      console.log('finished populating PEFREQS');
    });
  });

Recruit.find({}).remove()
  .then(() => {
    Recruit.create(
      
      {
        firstName: 'Howard',
        lastName: 'James',
        middleName: 'Leonard',
        dob: new Date('12/11/1989'),
        active: true,
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 1},
          sex: {val: 'M'},
          height: {val: 72},
          weight: {val: 181},
          tierGrad: {val: 1},
          toe: {val: 5},
          afqt: {val: 87},
          cl: {val: 122},
          gt: {val: 92},
          el: {val: 84},
          mm: {val: 109},
          qt: {val: 91},
          ve: {val: 80},
          dlab: {val: 80},
          driving: {
            license: {has: false},
            offenses: {val: 0},
            violations: {val: 5}
          },
          moral: {
            conduct: {val: 2},
            otherDrugs: {val: 3},
            marijuana: {val: 0}
          },
          vision: {
            correctable: {has: true},
            depth: {has: true},
            color: {val: 13},
            acuity: {val: 160, val1: 80, val2: 80}
          },
          prpScreen: {val:0}
        },
        personal: {
          ssn: 'XXX-XX-1224',
          address: {street: '1522 Western Rd. #448B', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '481 North Hemlock Ct.', city: 'Windsor Mill', state: 'MD', zip: 21244, country: 'United States'},
          citz: 'Native Born',
          sex: 'Male',
          ethnicity: 'Not Hispanic or Latino',
          marital: 'Divorced',
          dependents: 1,
          race: 'White',
          religion: 'Catholic',
          education: 'BS',
          language: 'N/A',
          licenseNum: 'MD41488909082',
          birthPlace: 'Egg Harbor Township, NJ\nUnited States'
        },
        exams: {
          afqt: 87,
          gs: 83,
          ar: 85,
          wk: 90,
          pc: 94,
          mk: 91,
          as: 77,
          mc: 81,
          ao: 89,
          ei: 92,
          es: '14',
          dep: new Date('05/05/2015'),
          activeDutyDateProjected: new Date('04/25/2015'),
          recruiterId: '101185',
          stnId: '812',
          pef: 'AF',
          teMosAfs: '12256',
          waiver: 'N/A',
          payGrade: 'N/A',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Valerie',
        lastName: 'Kuo',
        active: true,
        dob: new Date('08/20/1998'),
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 1},
          sex: {val: 'F'},
          height: {val: 68},
          weight: {val: 151},
          tierGrad: {val: 1},
          algebra: {has:true},
          toe: {val: 4},
          afqt: {val: 94},
          cl: {val: 105},
          gt: {val: 98},
          el: {val: 84},
          mm: {val: 98},
          qt: {val: 91},
          ve: {val: 82},
          dlab: {val: 90},
          driving: {
            license: {has: false},
            offenses: {val: 0},
            violations: {val: 0}
          },
          vision: {
            correctable: {has: true},
            depth: {has: true},
            color: {val: 11},
            acuity: {val:120, val1: 100, val2: 20}
          },
          moral: {
            conduct: {val: 2},
            otherDrugs: {val: 0},
            marijuana: {val: 1}
          },
          prpScreen: {val:0}
        },
        personal: {
          ssn: 'XXX-XX-7561',
          address: {street: '3885 Broad Blvd.', city: 'Windsor Mill', state: 'MD', zip: 21244, country: 'United States'},
          hor: {street: '3885 Broad Blvd.', city: 'Windsor Mill', state: 'MD', zip: 21244, country: 'United States'},
          citz: 'Native Born',
          sex: 'Male',
          ethnicity: 'Not Hispanic or Latino',
          marital: 'Single',
          dependents: 0,
          race: 'Asian',
          religion: 'Pentecostal',
          education: 'MA',
          language: 'Mandarin, French',
          licenseNum: 'MD0038585902',
          birthPlace: 'San Bernadino, CA\nUnited States'
        },
        exams: {
          afqt: 95,
          gs: 83,
          ar: 100,
          wk: 90,
          pc: 94,
          mk: 91,
          as: 97,
          mc: 81,
          ao: 89,
          ei: 92,
          es: '14',
          dep: new Date('05/04/2016'),
          activeDutyDateProjected: new Date('08/25/2016'),
          recruiterId: '101185',
          stnId: '819',
          pef: 'CB',
          teMosAfs: '12256',
          waiver: 'N/A',
          payGrade: 'N/A',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Ashley',
        lastName: 'Martinez',
        middleName: 'Ana',
        active: true,
        dob: new Date('03/16/1995'),
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          sex: {val: 'F'},
          height: {val: 66},
          weight: {val: 141},
          clearance: {val: 2},
          tierGrad: {val: 1},
          toe: {val: 4},
          afqt: {val: 97},
          cl: {val: 104},
          gt: {val: 109},
          el: {val: 118},
          mm: {val: 111},
          qt: {val: 91},
          ve: {val: 61},
          dlab: {val: 90},
          driving: {
            license: {has: true},
            offenses: {val: 3},
            violations: {val: 2}
          },
          vision: {
            correctable: {has: true},
            depth: {has: true},
            color: {val: 10},
            acuity: {val: 50, val1: 30, val2: 20}
          },
          moral: {
            conduct: {val: 0},
            otherDrugs: {val: 0},
            marijuana: {val: 0}
          },
          algebra: {has: true},
          speech: {has: true},
          prpScreen: {val:1}
        },
        personal: {
          ssn: 'XXX-XX-2880',
          address: {street: '39775 Bengal Rd.', city: 'Manchester', state: 'MD', zip: 21244, country: 'United States'},
          hor: {street: '10119 Heath Ct.', city: 'Chantilly', state: 'VA', zip: 20155, country: 'United States'},
          citz: 'Native Born',
          sex: 'Female',
          ethnicity: 'Hispanic or Latino',
          marital: 'Married',
          dependents: 3,
          race: 'American Indian or Alaska Native',
          religion: 'Presbytarian',
          education: 'BS',
          language: 'Mandarin',
          licenseNum: 'MD4402845573958',
          birthPlace: 'Chantilly, VA\nUnited States'
        },
        exams: {
          afqt: 87,
          gs: 83,
          ar: 85,
          wk: 90,
          pc: 94,
          mk: 91,
          as: 77,
          mc: 81,
          ao: 89,
          ei: 92,
          es: '14',
          dep: new Date('05/04/2016'),
          activeDutyDateProjected: new Date('08/25/2016'),
          recruiterId: '101185',
          stnId: '812',
          pef: 'N/A',
          teMosAfs: '12256',
          waiver: 'N/A',
          payGrade: 'O-1',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Andrew',
        lastName: 'Junior',
        middleName: 'Newman',
        active: true,
        dob: new Date('10/07/1996'),
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: false},
          clearance: {val: 0},
          sex: {val: 'M'},
          height: {val: 62},
          weight: {val: 131},
          tierGrad: {val: 2},
          toe: {val: 5},
          afqt: {val: 94},
          cl: {val: 97},
          gt: {val: 116},
          el: {val: 128},
          mm: {val: 121},
          qt: {val: 101},
          ve: {val: 81},
          dlab: {val: 90},
          driving: {
            license: {has: true},
            offenses: {val: 0},
            violations: {val: 0}
          },
          moral: {
            conduct: {val: 1, valAtRs: 1},
            otherDrugs: {val: 0},
            marijuana: {val: 3, valAtRs: 0}
          },
          vision: {
            correctable: {has: true},
            depth: {has: true},
            color: {val: 14},
            acuity: {val: 40, val1: 20, val2: 20}
          }
        },
        personal: {
          ssn: 'XXX-XX-9384',
          address: {street: '2855 Masala Rd. #84', city: 'Towson', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '2855 Masala Rd. #84', city: 'Towson', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
          sex: 'Male',
          ethnicity: 'Hispanic or Latino',
          marital: 'Single',
          dependents: 0,
          race: 'White',
          religion: 'N/A',
          education: 'MA',
          language: 'Spanish, German',
          licenseNum: 'MD19957023583',
          birthPlace: 'Towson, MD\nUnited States'
        },
        exams: {
          afqt: 95,
          gs: 83,
          ar: 85,
          wk: 90,
          pc: 94,
          mk: 91,
          as: 77,
          mc: 81,
          ao: 89,
          ei: 92,
          es: '14',
          dep: new Date('05/11/2016'),
          activeDutyDateProjected: new Date('11/25/2016'),
          recruiterId: '101185',
          stnId: '812',
          pef: 'N/A',
          teMosAfs: '12256',
          waiver: 'N/A',
          payGrade: 'O-2',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Milton',
        lastName: 'Bradley',
        middleName: 'J',
        active: false,
        dob: new Date('11/17/1945'),
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 1},
          sex: {val: 'M'},
          height: {val: 73},
          weight: {val: 171},
          tierGrad: {val: 2},
          toe: {val: 3},
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
            offenses: {val: 0},
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
        personal: {
          ssn: 'XXX-XX-0900',
          address: {street: '224 Severna Ln.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '224 Severna Ln.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
          sex: 'Male',
          ethnicity: 'Not Hispanic or Latino',
          marital: 'Married',
          dependents: 2,
          race: 'American Indian or Alaska Native',
          religion: 'Buddhist',
          education: 'BS',
          language: 'N/A',
          licenseNum: 'MD92775927701',
          birthPlace: 'Princeton, NJ\nUnited States'
        },
        exams: {
          afqt: 88,
          gs: 81,
          ar: 85,
          wk: 90,
          pc: 94,
          mk: 98,
          as: 100,
          mc: 71,
          ao: 79,
          ei: 82,
          es: '14',
          dep: new Date('06/04/2016'),
          activeDutyDateProjected: new Date('08/01/2016'),
          recruiterId: '101185',
          stnId: '632',
          pef: 'AF',
          teMosAfs: '14156',
          waiver: 'N/A',
          payGrade: 'E-2',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },
      
      
      {
        firstName: 'Gareth',
        lastName: 'Heart',
        middleName: 'Jason',
        active: true,
        dob: new Date('10/17/1994'),
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 1},
          sex: {val: 'M'},
          height: {val: 66},
          weight: {val: 136},
          tierGrad: {val: 2},
          toe: {val: 5},
          afqt: {val: 94},
          cl: {val: 97},
          gt: {val: 116},
          el: {val: 128},
          mm: {val: 121},
          qt: {val: 101},
          ve: {val: 81},
          dlab: {val: 90},
          driving: {
            license: {has: true},
            offenses: {val: 0},
            violations: {val: 0}
          },
          moral: {
            conduct: {val: 0, valAtRs: 1},
            otherDrugs: {val: 0},
            marijuana: {val: 0, valAtRs: 0}
          },
          vision: {
            correctable: {has: true},
            depth: {has: true},
            color: {val: 14},
            acuity: {val: 50, val1: 20, val2: 30}
          },
          speech: {has: true},
          algebra: {has: true},
          tierGrad: {val: 1}
        },
        personal: {
          ssn: 'XXX-XX-5084',
          address: {street: '2855 Caper Rd. #84', city: 'Towson', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '2855 Caper Rd. #84', city: 'Towson', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
          sex: 'Male',
          ethnicity: 'Hispanic or Latino',
          marital: 'Single',
          dependents: 0,
          race: 'White',
          religion: 'N/A',
          education: 'MA',
          language: 'Spanish',
          licenseNum: 'MD19957023583',
          birthPlace: 'Towson, MD\nUnited States'
        },
        exams: {
          afqt: 95,
          gs: 83,
          ar: 85,
          wk: 90,
          pc: 94,
          mk: 91,
          as: 77,
          mc: 81,
          ao: 89,
          ei: 92,
          es: '14',
          dep: new Date('05/11/2016'),
          activeDutyDateProjected: new Date('11/25/2016'),
          recruiterId: '17289',
          stnId: '812',
          pef: 'N/A',
          teMosAfs: '12256',
          waiver: 'N/A',
          payGrade: 'O-2',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Gurnsley',
        lastName: 'Woolsley',
        middleName: 'J',
        active: false,
        dob: new Date('11/13/1997'),
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 1},
          sex: {val: 'M'},
          height: {val: 68},
          weight: {val: 170},
          tierGrad: {val: 1},
          toe: {val: 4},
          afqt: {val: 52},
          cl: {val: 49},
          gt: {val: 72},
          el: {val: 102},
          mm: {val: 38},
          qt: {val: 101},
          ve: {val: 42},
          dlab: {val: 90},
          driving: {
            license: {has: true},
            offenses: {val: 0},
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
        personal: {
          ssn: 'XXX-XX-0804',
          address: {street: '481 South Ln.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '481 South Ln.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
          sex: 'Male',
          ethnicity: 'Not Hispanic or Latino',
          marital: 'Married',
          dependents: 2,
          race: 'White, Asian',
          religion: 'Muslim',
          education: 'BS',
          language: 'N/A',
          licenseNum: 'NJ92923792788',
          birthPlace: 'Fair Oaks, VA\nUnited States'
        },
        exams: {
          afqt: 88,
          gs: 81,
          ar: 85,
          wk: 90,
          pc: 94,
          mk: 98,
          as: 100,
          mc: 71,
          ao: 79,
          ei: 82,
          es: '14',
          dep: new Date('06/04/2016'),
          activeDutyDateProjected: new Date('08/21/2017'),
          recruiterId: '17289',
          stnId: '632',
          pef: 'AF',
          teMosAfs: '14156',
          waiver: 'N/A',
          payGrade: 'E-2',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Charlotte',
        lastName: 'Early',
        middleName: 'O\'Hara',
        active: false,
        dob: new Date('04/17/1994'),
        match: {
          usCitizen: {has: false},
          usCitizenFamily: {has: false},
          clearance: {val: 0},
          sex: {val: 'F'},
          height: {val: 58},
          weight: {val: 174},
          tierGrad: {val: 3},
          toe: {val: 5},
          afqt: {val: 68},
          cl: {val: 82},
          gt: {val: 84},
          el: {val: 102},
          mm: {val: 96},
          qt: {val: 52},
          ve: {val: 42},
          dlab: {val: 90},
          driving: {
            license: {has: true},
            offenses: {val: 1},
            violations: {val: 2}
          },
          moral: {
            marijuana: {val: 3},
            conduct: {val: 3},
            otherDrugs: {val: 2}
          },
          vision: {
            correctable: {has: false},
            depth: {has: false},
            color: {val: 14},
            acuity: {val: 220, val1: 120, val2: 100}
          }
        },
        personal: {
          address: {street: '1992 Hobarth Rd. #28', city: 'Arlington', state: 'VA', zip: 20115, country: 'United States'},
          hor: {street: '19084 S. Sydney Rd.', city: 'Falls Church', state: 'VA', zip: 20111, country: 'United States'},
          citz: 'Canadian',
          sex: 'Female',
          ethnicity: 'Not Hispanic or Latino',
          marital: 'Married',
          dependents: 4,
          race: 'White',
          religion: 'N/A',
          education: 'GED',
          language: 'French',
          birthPlace: 'Toronto, Ontario\nCanada'
        },
        exams: {
          afqt: 80,
          gs: 75,
          ar: 61,
          wk: 85,
          pc: 82,
          mk: 81,
          as: 67,
          mc: 91,
          ao: 84,
          es: '11',
          dep: new Date('05/05/2015'),
          dep: new Date('05/05/2015'),
          recruiterId: '17289',
          stnId: '957',
          pef: 'N/A',
          teMosAfs: '12846',
          waiver: 'N/A',
          payGrade: 'E-1',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'William',
        lastName: 'Franklin',
        middleName: 'Walter',
        active: true,
        dob: new Date('09/02/1968'),
        match : {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 2},
          sex: {val: 'M'},
          height: {val: 75},
          weight: {val: 210},
          tierGrad: {val: 1},
          toe: {val: 4},
          afqt: {val: 80},
          cl: {val: 80},
          gt: {val: 84},
          el: {val: 111},
          mm: {val: 95},
          qt: {val: 101},
          ve: {val: 45},
          dlab: {val: 80},
          driving: {
            license: {has: false},
            offenses: {val: 1},
            violations: {val: 4}
          },
          moral: {
            conduct: {val: 0},
            marijuana: {val: 0},
            otherDrugs: {val: 2}
          },
          vision: {
            correctable: {has: true},
            depth: {has: false},
            color: {val: 14},
            acuity: {val: 120, val1: 60, val2: 60}
          }
        },  //match
        personal: {
          ssn: 'XXX-XX-0028',
          address: {street: '150 Kepler Ct.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '150 Kepler Ct.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
          sex: 'Male',
          ethnicity: 'Not Hispanic or Latino',
          marital: 'Married',
          dependents: 1,
          race: 'Black',
          religion: 'N/A',
          education: 'BS',
          language: 'Portugese',
          licenseNum: 'MD41492775822',
          birthPlace: 'Fairfax, VA\nUnited States'
        },
        exams: {
          afqt: 92,
          gs: 83,
          ar: 85,
          wk: 94,
          pc: 118,
          mk: 88,
          as: 75,
          mc: 81,
          ao: 89,
          ei: 90,
          es: '14',
          recruiterId: '101185',
          stnId: '662',
          pef: 'CA',
          teMosAfs: '12258',
          waiver: 'N/A',
          payGrade: 'N/A',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },


      {
        firstName: 'Amir',
        lastName: 'Spencer',
        dob: new Date('12/11/1997'),
        active: true,
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 1},
          sex: {val: 'M'},
          height: {val: 72},
          weight: {val: 189},
          tierGrad: {val: 1},
          toe: {val: 5},
          afqt: {val: 87},
          cl: {val: 122},
          gt: {val: 92},
          el: {val: 84},
          mm: {val: 109},
          qt: {val: 91},
          ve: {val: 80},
          dlab: {val: 80},
          driving: {
            license: {has: false},
            offenses: {val: 0},
            violations: {val: 5}
          },
          moral: {
            conduct: {val: 2},
            otherDrugs: {val: 1},
            marijuana: {val: 0}
          },
          vision: {
            correctable: {has: true},
            depth: {has: true},
            color: {val: 13},
            acuity: {val: 100, val1: 20, val2: 80}
          }
        },
        personal: {
          ssn: 'XXX-XX-1996',
          address: {street: '1522 Western Rd. #448B', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '481 North Hemlock Ct.', city: 'Windsor Mill', state: 'MD', zip: 21244, country: 'United States'},
          citz: 'Native Born',
          sex: 'Male',
          ethnicity: 'Not Hispanic or Latino',
          marital: 'Divorced',
          dependents: 1,
          race: 'White',
          religion: 'Catholic',
          education: 'BS',
          language: 'N/A',
          licenseNum: 'MD42996809088',
          birthPlace: 'Egg Harbor Township, NJ\nUnited States'
        },
        exams: {
          afqt: 87,
          gs: 83,
          ar: 85,
          wk: 90,
          pc: 94,
          mk: 91,
          as: 77,
          mc: 81,
          ao: 89,
          ei: 92,
          es: '14',
          dep: new Date('05/05/2015'),
          activeDutyDateProjected: new Date('04/25/2015'),
          recruiterId: '101185',
          stnId: '812',
          pef: 'AF',
          teMosAfs: '12256',
          waiver: 'N/A',
          payGrade: 'N/A',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Vikram',
        lastName: 'Shah',
        active: true,
        dob: new Date('02/20/1999'),
        match : {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 1},
          sex: {val: 'M'},
          height: {val: 68},
          weight: {val: 151},
          tierGrad: {val: 1},
          algebra: {has: false},
          toe: {val: 4},
          afqt: {val: 94},
          cl: {val: 105},
          gt: {val: 98},
          el: {val: 84},
          mm: {val: 98},
          qt: {val: 91},
          ve: {val: 82},
          dlab: {val: 90},
          driving: {
            license: {has: false},
            offenses: {val: 0},
            violations: {val: 0}
          },
          vision: {
            correctable: {has: true},
            depth: {has: true},
            color: {val: 11},
            acuity: {val:120, val1: 100, val2: 20}
          },
          moral: {
            conduct: {val: 2},
            otherDrugs: {val: 0},
            marijuana: {val: 1}
          }
        },
        personal: {
          ssn: 'XXX-XX-3976',
          address: {street: '10028 Broad Blvd.', city: 'Windsor Mill', state: 'MD', zip: 21244, country: 'United States'},
          hor: {street: '10028 Broad Blvd.', city: 'Windsor Mill', state: 'MD', zip: 21244, country: 'United States'},
          citz: 'Native Born',
          sex: 'Male',
          ethnicity: 'Not Hispanic or Latino',
          marital: 'Single',
          dependents: 0,
          race: 'Asian',
          religion: 'Pentecostal',
          education: 'MA',
          language: 'Farsi, Italian',
          licenseNum: 'MD0038585902',
          birthPlace: 'San Bernadino, CA\nUnited States'
        },
        exams: {
          afqt: 95,
          gs: 83,
          ar: 100,
          wk: 90,
          pc: 94,
          mk: 91,
          as: 97,
          mc: 81,
          ao: 89,
          ei: 92,
          es: '14',
          dep: new Date('05/04/2016'),
          activeDutyDateProjected: new Date('08/25/2016'),
          recruiterId: '101185',
          stnId: '819',
          pef: 'CB',
          teMosAfs: '12256',
          waiver: 'N/A',
          payGrade: 'N/A',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Marta',
        lastName: 'Martinez',
        middleName: 'B',
        active: true,
        dob: new Date('03/16/97'),
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          sex: {val: 'M'},
          height: {val: 66},
          weight: {val: 147},
          clearance: {val: 2},
          tierGrad: {val: 1},
          toe: {val: 6},
          afqt: {val: 97},
          cl: {val: 104},
          gt: {val: 109},
          el: {val: 118},
          mm: {val: 111},
          qt: {val: 91},
          ve: {val: 61},
          dlab: {val: 90},
          driving: {
            license: {has: true},
            offenses: {val: 3},
            violations: {val: 2}
          },
          vision: {
            correctable: {has: true},
            depth: {has: true},
            color: {val: 10},
            acuity: {val: 50, val1: 30, val2: 20}
          },
          moral: {
            conduct: {val: 0},
            otherDrugs: {val: 0},
            marijuana: {val: 0}
          },
          algebra: {has: true},
          speech: {has: true},
          prpScreen: {val: 2}
        },
        personal: {
          ssn: 'XXX-XX-2880',
          address: {street: '39775 Tiger Rd.', city: 'Manchester', state: 'MD', zip: 21244, country: 'United States'},
          hor: {street: '10119 Moore Ct.', city: 'Chantilly', state: 'VA', zip: 20155, country: 'United States'},
          citz: 'Native Born',
          sex: 'Female',
          ethnicity: 'Hispanic or Latino',
          marital: 'Married',
          dependents: 3,
          race: 'American Indian or Alaska Native',
          religion: 'Presbytarian',
          education: 'BS',
          language: 'Hebrew',
          licenseNum: 'MD4402845573958',
          birthPlace: 'Chantilly, VA\nUnited States'
        },
        exams: {
          afqt: 87,
          gs: 83,
          ar: 85,
          wk: 90,
          pc: 94,
          mk: 91,
          as: 77,
          mc: 81,
          ao: 89,
          ei: 92,
          es: '14',
          dep: new Date('05/04/2016'),
          activeDutyDateProjected: new Date('08/25/2016'),
          recruiterId: '101185',
          stnId: '812',
          pef: 'N/A',
          teMosAfs: '12256',
          waiver: 'N/A',
          payGrade: 'O-2',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Josh',
        lastName: 'Olguin',
        active: true,
        dob: new Date('10/07/1999'),
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 2},
          sex: {val: 'M'},
          height: {val: 67},
          weight: {val: 179},
          tierGrad: {val: 2},
          toe: {val: 6},
          afqt: {val: 94},
          cl: {val: 114},
          gt: {val: 119},
          el: {val: 128},
          mm: {val: 121},
          qt: {val: 101},
          ve: {val: 81},
          dlab: {val: 90},
          driving: {
            license: {has: true},
            offenses: {val: 0},
            violations: {val: 0}
          },
          moral: {
            conduct: {val: 0},
            otherDrugs: {val: 0},
            marijuana: {val: 0, valAtRs: 1}
          },
          vision: {
            correctable: {has: true},
            depth: {has: true},
            color: {val: 14},
            acuity: {val: 40, val1: 20, val2: 20}
          },
          speech: {has: true},
          algebra: {has: true},
          tierGrad: {val: 1},
          flightPhysical: {has: true},
          pftClass1: {has: true},
          waterQual: {has: true},
          prpScreen: {val: 0}
        },
        personal: {
          ssn: 'XXX-XX-9384',
          address: {street: '2855 Fire Rd. #84', city: 'Towson', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '2855 Fire Rd. #84', city: 'Towson', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
          sex: 'Male',
          ethnicity: 'Hispanic or Latino',
          marital: 'Single',
          dependents: 0,
          race: 'White',
          religion: 'N/A',
          education: 'MA',
          language: 'Hindi',
          licenseNum: 'VA147576434841',
          birthPlace: 'Towson, MD\nUnited States'
        },
        exams: {
          afqt: 95,
          gs: 83,
          ar: 85,
          wk: 90,
          pc: 94,
          mk: 91,
          as: 77,
          mc: 81,
          ao: 89,
          ei: 92,
          es: '14',
          dep: new Date('12/11/2016'),
          activeDutyDateProjected: new Date('03/25/2017'),
          recruiterId: '101185',
          stnId: '812',
          pef: 'N/A',
          teMosAfs: '12256',
          waiver: 'N/A',
          payGrade: 'O-2',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Brighton',
        lastName: 'Hamid',
        middleName: 'J',
        active: false,
        dob: new Date('01/30/1998'),
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 1},
          sex: {val: 'M'},
          height: {val: 73},
          weight: {val: 171},
          tierGrad: {val: 1},
          toe: {val: 4},
          afqt: {val: 89},
          cl: {val: 96},
          gt: {val: 98},
          el: {val: 102},
          mm: {val: 96},
          qt: {val: 101},
          ve: {val: 42},
          dlab: {val: 90},
          driving: {
            license: {has: true},
            offenses: {val: 0},
            violations: {val: 2}
          },
          moral: {
            conduct: {val: 0, valAtRs: 1},
            marijuana: {val: 0, valBeforeDep: 1},
            otherDrugs: {val: 0, valAfterRs: 1}
          },
          vision: {
            correctable: {has: true},
            depth: {has: true},
            color: {val: 14},
            acuity: {val: 120, val1: 20, val2: 100}
          },
          speech: {has: true},
          algebra: {has: true},
          tierGrad: {val: 1},
          flightPhysical: {has: true},
          pftClass1: {has:true},
          waterQual: {has: true},
          prpScreen: {val: 0}
        },
        personal: {
          ssn: 'XXX-XX-0900',
          address: {street: '224 Severna Ln.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '224 Severna Ln.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
          sex: 'Male',
          ethnicity: 'Not Hispanic or Latino',
          marital: 'Married',
          dependents: 2,
          race: 'American Indian or Alaska Native',
          religion: 'Jesuit',
          education: 'BS',
          language: 'N/A',
          licenseNum: 'MD92775927701',
          birthPlace: 'Princeton, NJ\nUnited States'
        },
        exams: {
          afqt: 88,
          gs: 81,
          ar: 85,
          wk: 90,
          pc: 94,
          mk: 98,
          as: 100,
          mc: 71,
          ao: 79,
          ei: 82,
          es: '14',
          dep: new Date('06/04/2016'),
          activeDutyDateProjected: new Date('08/01/2016'),
          recruiterId: '101185',
          stnId: '632',
          pef: 'AF',
          teMosAfs: '14156',
          waiver: 'N/A',
          payGrade: 'E-2',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },
      

      {
        firstName: 'Brian',
        lastName: 'Lucas',
        middleName: 'Ricardo',
        active: true,
        dob: new Date('10/17/1998'),
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 1},
          sex: {val: 'M'},
          height: {val: 62},
          weight: {val: 132},
          tierGrad: {val: 2},
          toe: {val: 6},
          afqt: {val: 93},
          cl: {val: 101},
          gt: {val: 116},
          el: {val: 128},
          mm: {val: 121},
          qt: {val: 101},
          ve: {val: 81},
          dlab: {val: 90},
          driving: {
            license: {has: true},
            offenses: {val: 0},
            violations: {val: 2}
          },
          moral: {
            conduct: {val: 0, valAtRs: 1},
            otherDrugs: {val: 0},
            marijuana: {val: 0, valAtRs: 0}
          },
          vision: {
            correctable: {has: true},
            depth: {has: true},
            color: {val: 14},
            acuity: {val: 50, val1: 20, val2: 20}
          },
          speech: {has: true},
          algebra: {has: true},
          tierGrad: {val: 1},
          flightPhysical: {has: true},
          pftClass1: {has:true},
          waterQual: {has: true},
          prpScreen: {val: 0}
        },
        personal: {
          ssn: 'XXX-XX-3006',
          address: {street: '10 Casper Rd.', city: 'Towson', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '10 Casper Rd.', city: 'Towson', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
          sex: 'Male',
          ethnicity: 'Hispanic or Latino',
          marital: 'Single',
          dependents: 0,
          race: 'Black',
          religion: 'N/A',
          education: 'MA',
          language: 'Spanish',
          licenseNum: 'MD19957023583',
          birthPlace: 'Towson, MD\nUnited States'
        },
        exams: {
          afqt: 95,
          gs: 83,
          ar: 85,
          wk: 90,
          pc: 94,
          mk: 91,
          as: 77,
          mc: 81,
          ao: 89,
          ei: 92,
          es: '14',
          dep: new Date('05/11/2016'),
          activeDutyDateProjected: new Date('11/25/2016'),
          recruiterId: '17289',
          stnId: '812',
          pef: 'N/A',
          teMosAfs: '12256',
          waiver: 'N/A',
          payGrade: 'O-2',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Cheryl',
        lastName: 'Lindh',
        middleName: 'J',
        active: false,
        dob: new Date('08/13/1997'),
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 1},
          sex: {val: 'F'},
          height: {val: 71},
          weight: {val: 150},
          tierGrad: {val: 1},
          toe: {val: 5},
          afqt: {val: 72},
          cl: {val: 72},
          gt: {val: 72},
          el: {val: 105},
          mm: {val: 68},
          qt: {val: 101},
          ve: {val: 42},
          dlab: {val: 55},
          driving: {
            license: {has: true},
            offenses: {val: 0},
            violations: {val: 2}
          },
          moral: {
            conduct: {val: 0, valAtRs: 1},
            marijuana: {val: 3, valBeforeDep: 1},
            otherDrugs: {val: 1, valAfterRs: 1}
          },
          vision: {
            correctable: {has: false},
            depth: {has: true},
            color: {val: 14},
            acuity: {val: 120, val1: 20, val2: 100}
          }
        },
        personal: {
          ssn: 'XXX-XX-6804',
          address: {street: '481 South Ln.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '481 South Ln.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
          sex: 'Female',
          ethnicity: 'Not Hispanic or Latino',
          marital: 'Married',
          dependents: 0,
          race: 'White',
          religion: 'N/A',
          education: 'BS',
          language: 'N/A',
          licenseNum: 'VA92379278G08',
          birthPlace: 'Fair Oaks, VA\nUnited States'
        },
        exams: {
          afqt: 88,
          gs: 81,
          ar: 85,
          wk: 90,
          pc: 94,
          mk: 98,
          as: 100,
          mc: 71,
          ao: 79,
          ei: 82,
          es: '14',
          dep: new Date('01/04/2017'),
          activeDutyDateProjected: new Date('08/21/2017'),
          recruiterId: '17289',
          stnId: '632',
          pef: 'AF',
          teMosAfs: '14156',
          waiver: 'N/A',
          payGrade: 'E-2',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Charon',
        lastName: 'Bly',
        middleName: 'Winfred',
        active: true,
        dob: new Date('04/17/1993'),
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: false},
          clearance: {val: 0},
          sex: {val: 'F'},
          height: {val: 58},
          weight: {val: 122},
          tierGrad: {val: 3},
          toe: {val: 5},
          afqt: {val: 68},
          cl: {val: 82},
          gt: {val: 84},
          el: {val: 102},
          mm: {val: 96},
          qt: {val: 52},
          ve: {val: 42},
          dlab: {val: 90},
          driving: {
            license: {has: true},
            offenses: {val: 1},
            violations: {val: 2}
          },
          moral: {
            marijuana: {val: 3},
            conduct: {val: 3},
            otherDrugs: {val: 2}
          },
          vision: {
            correctable: {has: true},
            depth: {has: true},
            color: {val: 14},
            acuity: {val: 70, val1: 20, val2: 50}
          }
        },
        personal: {
          address: {street: '1992 Hobarth Rd. #28', city: 'Arlington', state: 'VA', zip: 20115, country: 'United States'},
          hor: {street: '19084 S. Sydney Rd.', city: 'Falls Church', state: 'VA', zip: 20111, country: 'United States'},
          citz: 'Canadian',
          sex: 'Female',
          ethnicity: 'Not Hispanic or Latino',
          marital: 'Married',
          dependents: 4,
          race: 'White',
          religion: 'N/A',
          education: 'GED',
          language: 'Japanese',
          birthPlace: 'Toronto, Ontario\nCanada'
        },
        exams: {
          afqt: 80,
          gs: 75,
          ar: 61,
          wk: 85,
          pc: 82,
          mk: 81,
          as: 67,
          mc: 91,
          ao: 84,
          es: '11',
          dep: new Date('05/05/2017'),
          activeDutyDateProjected: new Date('09/05/2017'),
          recruiterId: '17289',
          stnId: '957',
          pef: 'N/A',
          teMosAfs: '12846',
          waiver: 'N/A',
          payGrade: 'E-1',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Marcus',
        lastName: 'Williams',
        middleName: 'Elliott',
        active: true,
        dob: new Date('09/02/1999'),
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 2},
          sex: {val: 'M'},
          height: {val: 75},
          weight: {val: 210},
          tierGrad: {val: 1},
          toe: {val: 4},
          afqt: {val: 80},
          cl: {val: 80},
          gt: {val: 84},
          el: {val: 111},
          mm: {val: 95},
          qt: {val: 101},
          ve: {val: 45},
          dlab: {val: 80},
          driving: {
            license: {has: false},
            offenses: {val: 1},
            violations: {val: 4}
          },
          moral: {
            conduct: {val: 0},
            marijuana: {val: 0},
            otherDrugs: {val: 2}
          },
          vision: {
            correctable: {has: true},
            depth: {has: false},
            color: {val: 14},
            acuity: {val: 120, val1: 60, val2: 60}
          }
        },  //match
        personal: {
          ssn: 'XXX-XX-3096',
          address: {street: '150 Kepler Ct.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '150 Kepler Ct.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
          sex: 'Male',
          ethnicity: 'Not Hispanic or Latino',
          marital: 'Married',
          dependents: 0,
          race: 'Black',
          religion: 'N/A',
          education: 'BS',
          language: 'Arabic',
          licenseNum: 'MD41492775822',
          birthPlace: 'Fairfax, VA\nUnited States'
        },
        exams: {
          afqt: 92,
          gs: 83,
          ar: 85,
          wk: 94,
          pc: 118,
          mk: 88,
          as: 75,
          mc: 81,
          ao: 89,
          ei: 90,
          es: '14',
          recruiterId: '101185',
          stnId: '662',
          pef: 'CA',
          teMosAfs: '12258',
          waiver: 'N/A',
          payGrade: 'N/A',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },
      
      
      {
        firstName: 'Opal',
        lastName: 'Olomide',
        dob: new Date('12/11/1989'),
        active: true,
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 1},
          sex: {val: 'F'},
          height: {val: 67},
          weight: {val: 165},
          tierGrad: {val: 1},
          toe: {val: 5},
          afqt: {val: 96},
          cl: {val: 122},
          gt: {val: 114},
          el: {val: 104},
          mm: {val: 109},
          qt: {val: 91},
          ve: {val: 80},
          dlab: {val: 80},
          driving: {
            license: {has: true},
            offenses: {val: 0},
            violations: {val: 0}
          },
          moral: {
            conduct: {val: 0},
            otherDrugs: {val: 0},
            marijuana: {val: 0}
          },
          vision: {
            correctable: {has: true},
            depth: {has: true},
            color: {val: 13},
            acuity: {val: 60, val1: 40, val2: 20}
          },
          speech: {has: true},
          algebra: {has: true},
          tierGrad: {val: 1},
          flightPhysical: {has: true},
          pftClass1: {has:true}
        },
        personal: {
          ssn: 'XXX-XX-1224',
          address: {street: '1522 Western Rd. #448B', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '481 North Hemlock Ct.', city: 'Windsor Mill', state: 'MD', zip: 21244, country: 'United States'},
          citz: 'Native Born',
          sex: 'Female',
          ethnicity: 'Not Hispanic or Latino',
          marital: 'Divorced',
          dependents: 2,
          race: 'Black',
          religion: 'Catholic',
          education: 'BS',
          language: '',
          licenseNum: 'MD41488909082',
          birthPlace: 'Trenton, NJ\nUnited States'
        },
        exams: {
          afqt: 87,
          gs: 83,
          ar: 85,
          wk: 90,
          pc: 94,
          mk: 91,
          as: 77,
          mc: 81,
          ao: 89,
          ei: 92,
          es: '14',
          dep: new Date('01/05/2017'),
          activeDutyDateProjected: new Date('04/25/2017'),
          recruiterId: '101185',
          stnId: '812',
          pef: 'AF',
          teMosAfs: '12256',
          waiver: 'N/A',
          payGrade: 'N/A',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Gia',
        lastName: 'Masuda',
        active: true,
        dob: new Date('08/20/1998'),
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 1},
          sex: {val: 'F'},
          height: {val: 68},
          weight: {val: 140},
          tierGrad: {val: 1},
          algebra: {has: false},
          toe: {val: 6},
          afqt: {val: 94},
          cl: {val: 105},
          gt: {val: 98},
          el: {val: 84},
          mm: {val: 98},
          qt: {val: 91},
          ve: {val: 82},
          dlab: {val: 90},
          driving: {
            license: {has: false},
            offenses: {val: 0},
            violations: {val: 0}
          },
          vision: {
            correctable: {has: true},
            depth: {has: true},
            color: {val: 11},
            acuity: {val:120, val1: 100, val2: 20}
          },
          moral: {
            conduct: {val: 1},
            otherDrugs: {val: 0},
            marijuana: {val: 1}
          },
          speech: {has: true},
          algebra: {has: true},
          tierGrad: {val: 1},
          flightPhysical: {has: true},
        },
        personal: {
          ssn: 'XXX-XX-7561',
          address: {street: '3885 Broad Blvd.', city: 'Windsor Mill', state: 'MD', zip: 21244, country: 'United States'},
          hor: {street: '3885 Broad Blvd.', city: 'Windsor Mill', state: 'MD', zip: 21244, country: 'United States'},
          citz: 'Native Born',
          sex: 'Female',
          ethnicity: 'Not Hispanic or Latino',
          marital: 'Single',
          dependents: 0,
          race: 'Asian',
          religion: 'Pentecostal',
          education: 'MA',
          language: 'Japanese, Italian',
          licenseNum: 'MD0038585902',
          birthPlace: 'San Bernadino, CA\nUnited States'
        },
        exams: {
          afqt: 95,
          gs: 83,
          ar: 100,
          wk: 90,
          pc: 94,
          mk: 91,
          as: 97,
          mc: 81,
          ao: 89,
          ei: 92,
          es: '14',
          dep: new Date('01/05/2017'),
          activeDutyDateProjected: new Date('04/25/2017'),
          recruiterId: '101185',
          stnId: '819',
          pef: 'CB',
          teMosAfs: '12256',
          waiver: 'N/A',
          payGrade: 'N/A',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Eva',
        lastName: 'Hammer',
        middleName: 'Anna',
        active: true,
        dob: new Date('03/16/1998'),
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          sex: {val: 'F'},
          height: {val: 66},
          weight: {val: 141},
          clearance: {val: 2},
          tierGrad: {val: 1},
          toe: {val: 6},
          afqt: {val: 97},
          cl: {val: 104},
          gt: {val: 109},
          el: {val: 118},
          mm: {val: 111},
          qt: {val: 91},
          ve: {val: 61},
          dlab: {val: 90},
          driving: {
            license: {has: true},
            offenses: {val: 3},
            violations: {val: 2}
          },
          vision: {
            correctable: {has: true},
            depth: {has: true},
            color: {val: 10},
            acuity: {val: 50, val1: 30, val2: 20}
          },
          moral: {
            conduct: {val: 0},
            otherDrugs: {val: 0},
            marijuana: {val: 0}
          },
          speech: {has: true},
          algebra: {has: true},
          tierGrad: {val: 1}
        },
        personal: {
          ssn: 'XXX-XX-2880',
          address: {street: '39775 Bengal Rd.', city: 'Manchester', state: 'MD', zip: 21244, country: 'United States'},
          hor: {street: '10119 Heath Ct.', city: 'Chantilly', state: 'VA', zip: 20155, country: 'United States'},
          citz: 'Native Born',
          sex: 'Female',
          ethnicity: 'Hispanic or Latino',
          marital: 'Married',
          dependents: 3,
          race: 'American Indian or Alaska Native',
          religion: 'Presbytarian',
          education: 'BS',
          language: 'Mandarin',
          licenseNum: 'MD4402845573958',
          birthPlace: 'Chantilly, VA\nUnited States'
        },
        exams: {
          afqt: 87,
          gs: 83,
          ar: 85,
          wk: 90,
          pc: 94,
          mk: 91,
          as: 77,
          mc: 81,
          ao: 89,
          ei: 92,
          es: '14',
          dep: new Date('01/05/2017'),
          activeDutyDateProjected: new Date('04/25/2017'),
          recruiterId: '101185',
          stnId: '812',
          pef: 'N/A',
          teMosAfs: '12256',
          waiver: 'N/A',
          payGrade: 'O-1',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Benny',
        lastName: 'Rosen',
        middleName: 'P',
        active: true,
        dob: new Date('09/07/1996'),
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: false},
          clearance: {val: 0},
          sex: {val: 'M'},
          height: {val: 62},
          weight: {val: 130},
          tierGrad: {val: 2},
          toe: {val: 5},
          afqt: {val: 94},
          cl: {val: 97},
          gt: {val: 116},
          el: {val: 128},
          mm: {val: 121},
          qt: {val: 101},
          ve: {val: 81},
          dlab: {val: 90},
          driving: {
            license: {has: true},
            offenses: {val: 0},
            violations: {val: 0}
          },
          moral: {
            conduct: {val: 1, valAtRs: 1},
            otherDrugs: {val: 0},
            marijuana: {val: 3, valAtRs: 0}
          },
          vision: {
            correctable: {has: true},
            depth: {has: true},
            color: {val: 14},
            acuity: {val: 40, val1: 20, val2: 20}
          }
        },
        personal: {
          ssn: 'XXX-XX-3042',
          address: {street: '2855 Masala Rd. #84', city: 'Towson', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '2855 Masala Rd. #84', city: 'Towson', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
          sex: 'Male',
          ethnicity: 'Hispanic or Latino',
          marital: 'Single',
          dependents: 0,
          race: 'White',
          religion: 'N/A',
          education: 'MA',
          language: 'Spanish, German',
          licenseNum: 'MD19957023583',
          birthPlace: 'Towson, MD\nUnited States'
        },
        exams: {
          afqt: 95,
          gs: 83,
          ar: 85,
          wk: 90,
          pc: 94,
          mk: 91,
          as: 77,
          mc: 81,
          ao: 89,
          ei: 92,
          es: '14',
          dep: new Date('02/11/2017'),
          activeDutyDateProjected: new Date('06/15/2017'),
          recruiterId: '002995',
          stnId: '812',
          pef: 'N/A',
          teMosAfs: '12256',
          waiver: 'N/A',
          payGrade: 'O-2',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Lee',
        lastName: 'Bradley',
        middleName: 'Johan',
        active: true,
        dob: new Date('04/22/1999'),
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 1},
          sex: {val: 'M'},
          height: {val: 73},
          weight: {val: 170},
          tierGrad: {val: 2},
          toe: {val: 3},
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
            offenses: {val: 0},
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
          },
          speech: {has: true},
          algebra: {has: true},
          tierGrad: {val: 1}
        },
        personal: {
          ssn: 'XXX-XX-0950',
          address: {street: '224 Severna Ln.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '224 Severna Ln.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
          sex: 'Male',
          ethnicity: 'Not Hispanic or Latino',
          marital: 'Married',
          dependents: 2,
          race: 'White',
          religion: 'Baptist',
          education: 'BS',
          language: 'N/A',
          licenseNum: 'MD92775927701',
          birthPlace: 'Princeton, NJ\nUnited States'
        },
        exams: {
          afqt: 88,
          gs: 81,
          ar: 85,
          wk: 90,
          pc: 94,
          mk: 98,
          as: 100,
          mc: 71,
          ao: 79,
          ei: 82,
          es: '12',
          dep: new Date('01/05/2017'),
          activeDutyDateProjected: new Date('04/25/2017'),
          recruiterId: '002995',
          stnId: '632',
          pef: 'AF',
          teMosAfs: '14156',
          waiver: 'N/A',
          payGrade: 'E-2',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },
      
      {
        firstName: 'Cesar',
        lastName: 'Hing',
        active: true,
        dob: new Date('10/17/1994'),
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 1},
          sex: {val: 'M'},
          height: {val: 68},
          weight: {val: 155},
          tierGrad: {val: 2},
          toe: {val: 5},
          afqt: {val: 94},
          cl: {val: 97},
          gt: {val: 116},
          el: {val: 128},
          mm: {val: 121},
          qt: {val: 101},
          ve: {val: 81},
          dlab: {val: 90},
          driving: {
            license: {has: true},
            offenses: {val: 0},
            violations: {val: 2}
          },
          moral: {
            conduct: {val: 0, valAtRs: 1},
            otherDrugs: {val: 0},
            marijuana: {val: 0, valAtRs: 0}
          },
          vision: {
            correctable: {has: true},
            depth: {has: true},
            color: {val: 14},
            acuity: {val: 50, val1: 20, val2: 20}
          }
        },
        personal: {
          ssn: 'XXX-XX-5084',
          address: {street: '2855 Caper Rd. #84', city: 'Towson', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '2855 Caper Rd. #84', city: 'Towson', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
          sex: 'Male',
          ethnicity: 'Not Hispanic or Latino',
          marital: 'Single',
          dependents: 0,
          race: 'White',
          religion: 'N/A',
          education: 'MA',
          language: 'Spanish',
          licenseNum: 'MD19957023583',
          birthPlace: 'Towson, MD\nUnited States'
        },
        exams: {
          afqt: 95,
          gs: 83,
          ar: 85,
          wk: 90,
          pc: 94,
          mk: 91,
          as: 77,
          mc: 81,
          ao: 89,
          ei: 92,
          es: '14',
          dep: new Date('01/05/2017'),
          activeDutyDateProjected: new Date('07/01/2017'),
          recruiterId: '17289',
          stnId: '812',
          pef: 'N/A',
          teMosAfs: '12256',
          waiver: 'N/A',
          payGrade: 'O-2',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Brian',
        lastName: 'Babcock',
        middleName: 'Allen',
        active: false,
        dob: new Date('06/14/1997'),
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 0},
          sex: {val: 'M'},
          height: {val: 65},
          weight: {val: 175},
          tierGrad: {val: 1},
          toe: {val: 4},
          afqt: {val: 52},
          cl: {val: 49},
          gt: {val: 72},
          el: {val: 33},
          mm: {val: 38},
          qt: {val: 64},
          ve: {val: 42},
          dlab: {val: 90},
          driving: {
            license: {has: true},
            offenses: {val: 0},
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
        personal: {
          ssn: 'XXX-XX-8049',
          address: {street: '481 South Ln.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '481 South Ln.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
          sex: 'Male',
          ethnicity: 'Not Hispanic or Latino',
          marital: 'Married',
          dependents: 2,
          race: 'White',
          religion: 'Muslim',
          education: 'BS',
          language: 'N/A',
          licenseNum: 'NJ92923792788',
          birthPlace: 'Fair Oaks, VA\nUnited States'
        },
        exams: {
          afqt: 88,
          gs: 81,
          ar: 85,
          wk: 90,
          pc: 94,
          mk: 98,
          as: 100,
          mc: 71,
          ao: 79,
          ei: 82,
          es: '14',
          dep: new Date('06/04/2016'),
          activeDutyDateProjected: new Date('08/21/2017'),
          recruiterId: '17289',
          stnId: '632',
          pef: 'AF',
          teMosAfs: '14156',
          waiver: 'N/A',
          payGrade: 'E-2',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Claire',
        lastName: 'Greenwald',
        middleName: 'Cara',
        active: true,
        dob: new Date('04/17/1997'),
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          sex: {val: 'F'},
          height: {val: 69},
          weight: {val: 168},
          tierGrad: {val: 3},
          toe: {val: 5},
          afqt: {val: 68},
          cl: {val: 82},
          gt: {val: 84},
          el: {val: 102},
          mm: {val: 96},
          qt: {val: 52},
          ve: {val: 42},
          dlab: {val: 90},
          driving: {
            license: {has: true},
            offenses: {val: 1},
            violations: {val: 2}
          },
          moral: {
            marijuana: {val: 3},
            conduct: {val: 3},
            otherDrugs: {val: 2}
          },
          vision: {
            correctable: {has: false},
            depth: {has: false},
            color: {val: 14},
            acuity: {val: 60, val1: 20, val2: 40}
          }
        },
        personal: {
          address: {street: '1992 Hobarth Rd. #28', city: 'Arlington', state: 'VA', zip: 20115, country: 'United States'},
          hor: {street: '19084 S. Sydney Rd.', city: 'Falls Church', state: 'VA', zip: 20111, country: 'United States'},
          citz: 'US',
          sex: 'Female',
          ethnicity: 'Not Hispanic or Latino',
          marital: 'Married',
          dependents: 4,
          race: 'White',
          religion: 'N/A',
          education: 'GED',
          language: 'Hebrew',
          birthPlace: 'Toronto, Ontario\nCanada'
        },
        exams: {
          afqt: 80,
          gs: 75,
          ar: 61,
          wk: 85,
          pc: 82,
          mk: 81,
          as: 67,
          mc: 91,
          ao: 84,
          es: '11',
          dep: new Date('01/05/2017'),
          activeDutyDateProjected: new Date('04/25/2017'),
          recruiterId: '17289',
          stnId: '957',
          pef: 'N/A',
          teMosAfs: '12846',
          waiver: 'N/A',
          payGrade: 'E-1',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Li',
        lastName: 'Chen',
        active: true,
        dob: new Date('09/02/1998'),
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 2},
          sex: {val: 'F'},
          height: {val: 66},
          weight: {val: 140},
          tierGrad: {val: 1},
          toe: {val: 4},
          afqt: {val: 80},
          cl: {val: 80},
          gt: {val: 84},
          el: {val: 111},
          mm: {val: 95},
          qt: {val: 101},
          ve: {val: 45},
          dlab: {val: 80},
          driving: {
            license: {has: true},
            offenses: {val: 1},
            violations: {val: 1}
          },
          moral: {
            conduct: {val: 0},
            marijuana: {val: 2},
            otherDrugs: {val: 0}
          },
          vision: {
            correctable: {has: true},
            depth: {has: false},
            color: {val: 14},
            acuity: {val: 120, val1: 60, val2: 60}
          }
        },  //match
        personal: {
          ssn: 'XXX-XX-8829',
          address: {street: '150 Kepler Ct.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '150 Kepler Ct.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
          sex: 'Female',
          ethnicity: 'Hispanic or Latino',
          marital: 'Single',
          dependents: 1,
          race: 'Black',
          religion: 'N/A',
          education: 'BS',
          language: 'Portugese',
          licenseNum: 'MD41492775822',
          birthPlace: 'Fairfax, VA\nUnited States'
        },
        exams: {
          afqt: 92,
          gs: 83,
          ar: 85,
          wk: 94,
          pc: 118,
          mk: 88,
          as: 75,
          mc: 81,
          ao: 89,
          ei: 90,
          es: '14',
          dep: new Date('01/12/2017'),
          activeDutyDateProjected: new Date('04/04/2017'),
          recruiterId: '002995',
          stnId: '662',
          pef: 'CA',
          teMosAfs: '12258',
          waiver: 'N/A',
          payGrade: 'N/A',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      ///TEST
      {
        firstName: 'Neil',
        lastName: 'Young',
        active: false,
        dob: '09/02/2016',
        match: {
          usCitizen: {has: false},
          usCitizenFamily: {has: false},
          clearance: {val: 0},
          sex: {val: 'M'},
          height: {val: 19},
          weight: {val: 7},
          tierGrad: {val: 0},
          toe: {val: 0},
          afqt: {val: 20},
          cl: {val: 8},
          gt: {val: 14},
          el: {val: 11},
          mm: {val: 59},
          qt: {val: 10},
          ve: {val: 4},
          dlab: {val: 7},
          driving: {
            license: {has: false},
            offenses: {val: 11},
            violations: {val: 4}
          },
          moral: {
            conduct: {val: 6},
            marijuana: {val: 0},
            otherDrugs: {val: 0}
          },
          vision: {
            correctable: {has: false},
            depth: {has: false},
            color: {val: 6},
            acuity: {val: 220, val1: 120, val2: 100}
          },
          pftClass1: {has:false},
          prpScreen: {val: 11},
          waterQual: {has: false},
          flightPhysical: {has: false}
        },
        personal: {
          ssn: 'XXX-XX-9337',
          address: {street: '42018 Braddock Pike Rd.', city: 'Lancaster', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '42018 Braddock Pike Rd.', city: 'Lancaster', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
          sex: 'Male',
          ethnicity: 'Hispanic or Latino',
          marital: 'Single',
          dependents: 0,
          race: 'White',
          religion: 'Unitarian',
          language: 'N/A',
          birthPlace: 'Lancaster, MD\nUnited States'
        },
        exams: {
          afqt: 80,
          gs: 83,
          ar: 85,
          wk: 80,
          pc: 90,
          mk: 82,
          as: 80,
          mc: 71,
          ao: 79,
          ei: 82,
          es: '14',
          recruiterId: '101185',
          stnId: '815',
          pef: 'N/A',
          teMosAfs: '12256',
          waiver: 'N/A',
          payGrade: 'N/A',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Bernard',
        lastName: 'Bernhart',
        active: true,
        dob: '09/02/1995',
        match: {
        },
        personal: {
          ssn: 'XXX-XX-9337',
          address: {street: '42018 Braddock Pike Rd.', city: 'Lancaster', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '42018 Braddock Pike Rd.', city: 'Lancaster', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
            sex: 'Other',
            ethnicity: 'Not Hispanic or Latino',
            marital: 'Single',
            dependents: 0,
            race: 'None',
            religion: 'N/A',
            language: 'N/A',
            birthPlace: 'Lancaster, MD\nUnited States'
        },
        exams: {
          afqt: 30,
            gs: 44,
            ar: 8,
            wk: 17,
            pc: 29,
            mk: 15,
            as: 28,
            mc: 22,
            ao: 31,
            ei: 33,
            es: '14',
            recruiterId: '002995',
            stnId: '815',
            pef: 'N/A',
            teMosAfs: '12256',
            waiver: 'N/A',
            payGrade: 'N/A',
            svcAnnexCode: 'N/A',
            mso: 'N/A',
            adObligation: 'N/A'
        }
      }
    )
    .then(() => {
      console.log('finished populating RECRUITS');
    });
  });

User.find({}).remove()
  .then(() => {
    User.create(
      {
        provider: 'local',
        name: 'Test User',
        email: 'test@example.com',
        password: 'test'
      }, {
        provider: 'local',
        role: 'admin',
        name: 'Admin',
        email: 'admin@usmc.mil',
        password: 'admin'
      }, {
        provider: 'local',
        role: 'recruiter',
        name: 'Kai Recruiter',
        email: 'kai@usmc.mil',
        password: 'recruiter',
        recruiterId : '101185',
        priorityPefs: ['CA', 'AG', 'CD'],
        goals : {
          m1: [{pef: 'CA', actual: 36, target: 30}, {pef: 'AG', actual: 17, target: 17}, {pef: 'CD', actual: 15, target: 22}], //FY month 1, OCT
          m2: [{pef: 'CA', actual: 32, target: 35}, {pef: 'AG', actual: 18, target: 14}, {pef: 'CD', actual: 27, target: 24}],
          m3: [{pef: 'CA', actual: 14, target: 26}, {pef: 'AG', actual: 22, target: 20}, {pef: 'CD', actual: 0, target: 26}],
          m4: [{pef: 'CA', actual: 0, target: 31}, {pef: 'AG', actual: 0, target: 25}, {pef: 'CD', actual: 0, target: 31}],
          m5: [{pef: 'CA', actual: 0, target: 37}, {pef: 'AG', actual: 0, target: 24}, {pef: 'CD', actual: 0, target: 28}],
          m6: [{pef: 'CA', actual: 0, target: 48}, {pef: 'AG', actual: 0, target: 25}, {pef: 'CD', actual: 0, target: 30}],
          m7: [{pef: 'CA', actual: 0, target: 48}, {pef: 'AG', actual: 0, target: 22}, {pef: 'CD', actual: 0, target: 25}],
          m8: [{pef: 'CA', actual: 0, target: 37}, {pef: 'AG', actual: 0, target: 21}, {pef: 'CD', actual: 0, target: 25}],
          m9: [{pef: 'CA', actual: 0, target: 45}, {pef: 'AG', actual: 0, target: 22}, {pef: 'CD', actual: 0, target: 16}],
          m10: [{pef: 'CA', actual: 0, target: 40}, {pef: 'AG', actual: 0, target: 18}, {pef: 'CD', actual: 0, target: 16}],
          m11: [{pef: 'CA', actual: 0, target: 35}, {pef: 'AG', actual: 0, target: 16}, {pef: 'CD', actual: 0, target: 15}],
          m12: [{pef: 'CA', actual: 0, target: 35}, {pef: 'AG', actual: 0, target: 16}, {pef: 'CD', actual: 0, target: 13}]
        }
      }, {
        provider: 'local',
        role: 'recruiter',
        name: 'Judy Recruiter',
        email: 'judy@usmc.mil',
        password: 'recruiter',
        recruiterId : '17289',
        priorityPefs: ['CH'],
        goals : {
          m1: [{pef: 'CH', actual: 21, target: 30}, {pef: 'CK', actual: 15, target: 17}, {pef: 'CD', actual: 11, target: 20}], //FY month 1, OCT
          m2: [{pef: 'CH', actual: 32, target: 35}, {pef: 'CK', actual: 18, target: 17}, {pef: 'CD', actual: 8, target: 21}],
          m3: [{pef: 'CH', actual: 21, target: 26}, {pef: 'CK', actual: 28, target: 25}, {pef: 'CD', actual: 18, target: 26}],
          m4: [{pef: 'CH', actual: 0, target: 31}, {pef: 'CK', actual: 0, target: 25}, {pef: 'CD', actual: 0, target: 30}],
          m5: [{pef: 'CH', actual: 0, target: 44}, {pef: 'CK', actual: 0, target: 24}, {pef: 'CD', actual: 0, target: 26}],
          m6: [{pef: 'CH', actual: 0, target: 48}, {pef: 'CK', actual: 0, target: 25}, {pef: 'CD', actual: 0, target: 36}],
          m7: [{pef: 'CH', actual: 0, target: 48}, {pef: 'CK', actual: 0, target: 22}, {pef: 'CD', actual: 0, target: 26}],
          m8: [{pef: 'CH', actual: 0, target: 37}, {pef: 'CK', actual: 0, target: 21}, {pef: 'CD', actual: 0, target: 25}],
          m9: [{pef: 'CH', actual: 0, target: 45}, {pef: 'CK', actual: 0, target: 22}, {pef: 'CD', actual: 0, target: 16}],
          m10: [{pef: 'CH', actual: 0, target: 40}, {pef: 'CK', actual: 0, target: 20}, {pef: 'CD', actual: 0, target: 14}],
          m11: [{pef: 'CH', actual: 0, target: 35}, {pef: 'CK', actual: 0, target: 20}, {pef: 'CD', actual: 0, target: 13}],
          m12: [{pef: 'CH', actual: 0, target: 35}, {pef: 'CK', actual: 0, target: 22}, {pef: 'CD', actual: 0, target: 10}]
        }
      }, {
        provider: 'local',
        role: 'recruiter',
        name: 'Omar Recruiter',
        email: 'omar@usmc.mil',
        password: 'recruiter',
        recruiterId : '198848',
        priorityPefs: ['CE', 'BA', 'AJ', 'CJ'],
        goals : {
          m1: [{pef: 'CE', actual: 21, target: 30}, {pef: 'AJ', actual: 15, target: 14}, {pef: 'BA', actual: 11, target: 22}, {pef: 'CJ', actual: 6, target: 5}],
          m2: [{pef: 'CE', actual: 29, target: 35}, {pef: 'AJ', actual: 20, target: 14}, {pef: 'BA', actual: 24, target: 24}, {pef: 'CJ', actual: 3, target: 10}],
          m3: [{pef: 'CE', actual: 15, target: 26}, {pef: 'AJ', actual: 19, target: 20}, {pef: 'BA', actual: 12, target: 26}, {pef: 'CJ', actual: 8, target: 9}],
          m4: [{pef: 'CE', actual: 0, target: 32}, {pef: 'AJ', actual: 0, target: 25}, {pef: 'BA', actual: 0, target: 31}, {pef: 'CJ', actual: 4, target: 6}],
          m5: [{pef: 'CE', actual: 0, target: 54}, {pef: 'AJ', actual: 0, target: 24}, {pef: 'BA', actual: 0, target: 28}, {pef: 'CJ', actual: 0, target: 5}],
          m6: [{pef: 'CE', actual: 0, target: 45}, {pef: 'AJ', actual: 0, target: 25}, {pef: 'BA', actual: 0, target: 30}, {pef: 'CJ', actual: 0, target: 5}],
          m7: [{pef: 'CE', actual: 0, target: 49}, {pef: 'AJ', actual: 0, target: 22}, {pef: 'BA', actual: 0, target: 25}, {pef: 'CJ', actual: 0, target: 5}],
          m8: [{pef: 'CE', actual: 0, target: 39}, {pef: 'AJ', actual: 0, target: 21}, {pef: 'BA', actual: 0, target: 25}, {pef: 'CJ', actual: 0, target: 5}],
          m9: [{pef: 'CE', actual: 0, target: 41}, {pef: 'AJ', actual: 0, target: 20}, {pef: 'BA', actual: 0, target: 16}, {pef: 'CJ', actual: 0, target: 3}],
          m10: [{pef: 'CE', actual: 0, target: 40}, {pef: 'AJ', actual: 0, target: 18}, {pef: 'BA', actual: 0, target: 16}, {pef: 'CJ', actual: 0, target: 3}],
          m11: [{pef: 'CE', actual: 0, target: 35}, {pef: 'AJ', actual: 0, target: 12}, {pef: 'BA', actual: 0, target: 15}, {pef: 'CJ', actual: 0, target: 1}],
          m12: [{pef: 'CE', actual: 0, target: 35}, {pef: 'AJ', actual: 0, target: 11}, {pef: 'BA', actual: 0, target: 13}, {pef: 'CJ', actual: 0, target: 1}]
        }
      }, {
        provider: 'local',
        role: 'recruiter',
        name: 'Amber Recruiter',
        email: 'amber@usmc.mil',
        password: 'recruiter',
        recruiterId : '002995',
        priorityPefs: ['CF', 'AG', 'BY'],
        goals : {
          m1: [{pef: 'CE', actual: 24, target: 30}, {pef: 'CF', actual: 15, target: 14}, {pef: 'BY', actual: 15, target: 21}], //FY month 1, OCT
          m2: [{pef: 'CE', actual: 41, target: 35}, {pef: 'CF', actual: 18, target: 14}, {pef: 'BY', actual: 27, target: 23}],
          m3: [{pef: 'CE', actual: 3, target: 26}, {pef: 'CF', actual: 22, target: 20}, {pef: 'BY', actual: 13, target: 22}],
          m4: [{pef: 'CE', actual: 0, target: 31}, {pef: 'CF', actual: 0, target: 25}, {pef: 'BY', actual: 0, target: 30}],
          m5: [{pef: 'CE', actual: 0, target: 44}, {pef: 'CF', actual: 0, target: 24}, {pef: 'BY', actual: 0, target: 28}],
          m6: [{pef: 'CE', actual: 0, target: 48}, {pef: 'CF', actual: 0, target: 25}, {pef: 'BY', actual: 0, target: 32}],
          m7: [{pef: 'CE', actual: 0, target: 48}, {pef: 'CF', actual: 0, target: 22}, {pef: 'BY', actual: 0, target: 25}],
          m8: [{pef: 'CE', actual: 0, target: 37}, {pef: 'CF', actual: 0, target: 21}, {pef: 'BY', actual: 0, target: 22}],
          m9: [{pef: 'CE', actual: 0, target: 45}, {pef: 'CF', actual: 0, target: 22}, {pef: 'BY', actual: 0, target: 16}],
          m10: [{pef: 'CE', actual: 0, target: 40}, {pef: 'CF', actual: 0, target: 18}, {pef: 'BY', actual: 0, target: 16}],
          m11: [{pef: 'CE', actual: 0, target: 35}, {pef: 'CF', actual: 0, target: 18}, {pef: 'BY', actual: 0, target: 14}],
          m12: [{pef: 'CE', actual: 0, target: 35}, {pef: 'CF', actual: 0, target: 16}, {pef: 'BY', actual: 0, target: 10}]
        }
    })
      .then(() => {
        console.log('finished populating USERS');
      });
  });
