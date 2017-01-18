import PefReq from '../api/pefRequirement/pefRequirement.model';

PefReq.find({}).remove()
  .then(() => {
    PefReq.create(

  //      { //// FULL TEST
  //        pefCode: 'FULL TEST',
  //        description: 'Mission Impossible - all fields required',
  //        mos: [
  //          {mos: '6100', description: '6100 Aircraft Maintenance (Rotary Wing)'}, {mos: '6172', description: '6172 Helicopter Crew Chief CH-46'},
  //          {mos: '6173', description: '6173 Helicopter Crew Chief CH-53'}, {mos: '6174', description: '6174 Helicopter Crew Chief AH/UH-1'},
  //          {mos: '6176', description: '6176 Tiltrotor Crew Chief MV-22'}, {mos: '6200', description: '6200 Aircraft Maintenance (Fixed Wing)'},
  //          {mos: '6276', description: '6276 Fixed Wing Aircraft Crew Chief KC-130'}],
  //        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
  //          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
  //        requirements: {
  //          age: {description:'Min age 140, max age 375', min:140, max:375},
  //          sex: {description:'Candidate must be a Vulcan', val:'V'},
  //          toe: {description: 'Twenty-five Year Term of Enlistment (toe)', min: 25},
  //          usCitizen: {description: 'Must NOT be a U.S. Citizen (no waiver)', has: false},
  //          usCitizenFamily: {description: 'All family members must NOT be U.S. Citizens (no waiver)', has: false, waivable: false},
  //          clearance: {description: 'Eligible for TOP SECRET Clearance.', min: 2},
  //          gt: {description: 'GT 1107', min: 1107},
  //          mm: {description: 'MM 1055', min: 1055},
  //          ve: {description: 'MM 1055', min: 1055},
  //          qt: {description: 'MM 1055', min: 1055},
  //          cl: {description: 'MM 1055', min: 1055},
  //          el: {description: 'MM 1065', min: 1065},
  //          dlab: {description: 'MM 1065', min: 1065},
  //          tierGrad: {description:'Must be Tier 0', max:-1},
  //          algebra: {description:'Must not have taken algebra', has:true},
  //          driving: {
  //            license: {has: true},
  //            offenses: {description: '-1 convictions of driving offenses other than Traffic Violations', max: -1, maxAboveRs: 0, waivable:true, waiver:2},
  //            violations: {description: '-1 convictions of driving offenses other than Traffic Violations', max: -1, waivable:true, waiver:2}
  //          },
  //          height: {
  //            description: 'Minimum height 80 inches (Actual height, no waivers). Maximum height 97 inches (Actual height, no waivers).',
  //            min: 80,
  //            max: 97,
  //            optional: false,
  //            waivable: true,
  //            waiver: 2
  //          },
  //          weight: {
  //            description: 'Minimum weight 250 inches (Actual height, no waivers). Maximum weight 375 inches (Actual weight, no waivers).',
  //            min: 350,
  //            max: 375,
  //            optional: false,
  //            waivable: true,
  //            waiver: 20
  //          },
  //          moral: {
  //            conduct: {description: 'No Conduct waivers above Recruiting Station Level', max:-1},
  //            marijuana: {description: 'No Drug waivers above Recruiting Station Level', max:-1},
  //            otherDrugs: {description: 'No Drug waivers above Recruiting Station Level', max:-1}
  //          },
  //          vision: {
  //            correctable: {description: 'Overall correctable to 20/20 (distant)', has: true},
  //            depth: {description: 'Does not have normal depth perception', has: true},
  //            color: {description: 'PASS normal color perception (NCP) with 15 out of 14', min: 15},
  //            acuity: {description: 'Vision no worse than 20/70 (distant) in one eye and 20/100 (distant) in the other', max: 0, max1: 20, max2: 20}
  //          },
  //          waterQual: {
  //            description: 'Must have WS-B(+) Water Survival Qualification. Must perform the following: Crawl (25 yards), breast stroke (25 yards), ' +
  //            'side stroke (25 yards), elementary back stroke (25 yards), vertical fall from 12 foot platform, underwater swim without breaking surface (15 yards), ' +
  //            'tread water 2 1/2 minutes, front float 2 1/2 minutes', has: true, optional: false
  //          },
  //          flightPhysical: {description: 'Must fail rigorous flight physical', has: true},
  //          pftClass1:{description:'Must not be PFT 1st Class', has:true},
  //          speech: {description: 'Must not have Clarity of Speech', has: true},
  //          prpScreen:{description:'Must FAIL PRP screen', max:-1},
  //          doncafScreening: {description: 'Be interviewed, screened, and REJECTED by RA NPA and District PA Chief or District PA OFficer', has: true},
  //          additionalScreening: {description: 'Agrees to required additional screening', has: true}
  //        } //requirements
  //      },
  //
  //      {
  //        pefCode: 'TEST WAIVABLES',
  //        description: '',
  //        allocation: 455,
  //        shipDates: [],
  //        requirements: {
  //          age: {description:'Must be at least 19, waivable', min:40, waivable:true, waiver:25},
  //          sex: {description:'Must be Special, waivable', val:'S', waivable:true},
  //          toe: {description:'TOE = 30 years, waivable', min:30, waivable:true, waiver:30},
  //          gt: {description:'Score of 150 required, waivable', min:150, waivable:true, waiver:100},
  //          cl: {description:'Score of 150 required, waivable', min:150, waivable:true, waiver:100},
  //          el: {description:'Score of 150 required, waivable', min:150, waivable:true, waiver:100},
  //          mm: {description:'Score of 150 required, waivable', min:150, waivable:true, waiver:100},
  //          ve: {description:'Score of 150 required, waivable', min:150, waivable:true, waiver:100},
  //          qt: {description:'Score of 150 required, waivable', min:150, waivable:true, waiver:100},
  //          dlab: {description:'Score of 150 required, waivable', min:150, waivable:true, waiver:100},
  //      //    asvabOrList: {description:String, gt:Number, cl:Number, el:Number, mm:Number, ve:Number, qt:Number}, //Logical OR: exceeding any one of the included scores makes a match
  //          height: {description:'Must be really short, waivable', min:27, max:45, optional:true, waivable:true, waiver:60},
  //          weight: {description:'Must be really skinny, waivable', min:27, max:45, optional:true, waivable:true, waiver:200},
  //          driving: {
  //            license: {description: 'Must have it, waivable', has: true, waivable: true},
  //            offenses: {description: 'Max offenses/violations, waivable', max:-1, waivable:true, waiver:10},
  //            violations: {description: 'Max offenses/violations, waivable', max:-1, waivable:true, waiver:10},
  //          },
  //          moral: {
  //            conduct: {description: 'Max offenses/violations, waivable', max:-1, waivable:true, waiver:10},
  //            marijuana: {description: 'Max offenses/violations, waivable', max:-1, waivable:true, waiver:10},
  //            otherDrugs: {description: 'Max offenses/violations, waivable', max:-1, waivable:true, waiver:10},
  //          },
  //          tierGrad: {description:'this tier required, waivable', max:0, waivable:true, waiver:3},// 1=Highschool grad, 2=homeschooler. Using "max" as a simplification since rules never exclude tier 1 grads.
  //          algebra: {description:'must have algebra, waivable', has:true, waivable:true},
  //          vision: {
  //            correctable: {description:'This is required, but waivable', has:true, waivable:true},
  //            depth: {description:'This is required, but waivable', has:true, waivable:true},
  //            color: {description:'Color perception, 15 min required, but waivable', min:15, waivable:true, waiver:8},
  //            acuity: {description:'Acuity max 70/100. Waivable', max:170, max1:70, max2:100, waivable:true, waiver:100}
  //          },
  //          waterQual: {description:'Waterqual is required. Waivable', has:true, waivable:true},
  //          flightPhysical: {description:'flightphys is required. Waivable', has:true, waivable:true},
  //          speech: {description:'speech is required. Waivable', has:true, waivable:true},
  //          pftClass1: {description:'pfrclass1 is required. Waivable', has:true, waivable:true},
  //          prpScreen: {description:'prpscreen is required with at most -1 negative responses. Waivable', max:-1, waivable:true, waiver:10},
  //          } //requirements
  //      },

      {     ///AE
        pefCode: 'AE',
        description: 'AVIATION SUPPORT',
        desc: 'Aviation Support',
        pefvis: {per: true, edu: false, toe: true, cle: true, sco: true, cit: true, vis: true, dri: true, mor: true, cer: false, scr: false},
        mos: [{mos: '6500', description: '6500 Aviation Ordnance'}, {mos: '6531', description: '6531 Aviation Ordnance Technician'},
          {mos: '6541', description: '6541 Aviation Ordnance Systems Technician'}, {mos: '7000', description: '7000 Airfield Services'},
          {mos: '7011', description: '7011 Expeditionary Airfield Systems Technician'}, {mos: '7051', description: '7051 Aircraft Rescue and Firefighting Specialist'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        allocation: 400,
        shipDates: ['12/3/2017', '9/3/2017', '6/3/2017','3/3/2017'],
        requirements: {
          toe: {description: 'Four (4) Year Term of Enlistment (toe)', min: 4},
          usCitizen: {description: 'U.S. Citizen (no waiver)', has: true},
          clearance: {description: 'Eligible for a SECRET Clearance', min: 1},
          gt: {description: 'GT 105', min: 105, waiver: 3, waivable: true},
          mm: {description: 'MM 95', min: 95, waiver: 3, waivable: true},
          height: {
            description: 'Minimum height 64 inches (Actual height, no waivers). Maximum height 75 inches (Actual height, no waivers).',
            min: 64,
            max: 75,
            optional: false,   //only some MOSs in a PEF may have height requirements
            waivable: false
          },
          driving: {
            license: {has: true, description: 'Possess a valid Civilian Drivers License at the time of ship to recruit training', waivable: false},
            offenses: {description: 'No convictions or Driving Offenses other than Traffic Violations', max: 0, maxAboveRs: 0}
          },
          moral: {
            conduct: {
              description: 'No Conduct Waivers above RS. No Waivers.', max:0, waivable: false },
              marijuana: {description: 'No Drug Waivers above RS. No Waivers.', max:0, waivable: false},
              otherDrugs: {description: 'No Drug Waivers above RS. No Waivers.', max:0, waivable: false}
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
        desc: 'Aviation Mechanic',
        pefvis: {per: false, edu: false, toe: true, cle: false, sco: true, cit: false, vis: false, dri: false, mor: false, cer: false, scr: false},
        mos: [{mos: '6000', description: '0000 MOS for RS'}, {mos: '6100', description: 'XXXX MOS for RS'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Five (5) Year Term of Enlistment (toe)', min: 5},
          mm: {description: 'MM Score of 105 on the ASVAB. (Max 3-point waiver)', waivable: true, waiver: 3, min: 105}
        } //requirements
      },

      { //// AG
        pefCode: 'AG',
        description: 'ENLISTED AIRCREW',
        desc: 'Enlisted Aircrew',
        pefvis: {per: false, edu: false, toe: true, cle: true, sco: true, cit: true, vis: true, dri: false, mor: true, cer: true, scr: false},
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
          gt: {description: 'GT 110 (Max 3-point waiver)', min: 110, waiver: 3, waivable: true},
          mm: {description: 'MM 105 (Max 3-point waiver)', min: 105, waiver: 3, waivable: true},
          moral: {
            conduct: {description: 'No Conduct waivers above Recruiting Station Level', max:0},
            marijuana: {description: 'No Drug waivers above Recruiting Station Level', max:0},
            otherDrugs: {description: 'No Drug waivers above Recruiting Station Level', max:0}
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
        desc: 'Aviation Operations',
        pefvis: {per: false, edu: false, toe: true, cle: true, sco: true, cit: true, vis: true, dri: false, mor: true, cer: false, scr: false},
        mos: [{mos: '7200', description: '0000 MOS for RS'}, {mos: '7300', description: 'XXXX MOS for RS'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Five (5) Year Term of Enlistment (toe)', min: 5},
          usCitizen: {description: 'U.S. Citizen (no waiver)', has: true},
          clearance: {description: 'Eligible for SECRET Clearance (No Conduct or Drug waivers above RS.', min: 1},
          gt: {description: 'GT Score of 105 on the ASVAB (Max 3-point waiver).', min: 105, waiver: 3, waivable: true},
          moral: {
            conduct: {description: 'No Conduct or Drug waivers above RS', max:0, waivable: false},
            marijuana: {description: 'No Conduct or Drug waivers above RS', max:0, waivable: false},
            otherDrugs: {description: 'No Conduct or Drug waivers above RS', max:0, waivable: false}
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
        desc: 'Aviation Elec Tech',
        pefvis: {per: false, edu: true, toe: true, cle: true, sco: true, cit: true, vis: true, dri: false, mor: true, cer: false, scr: false},
        mos: [{mos: '5900', description: '0000 MOS for RS'}, {mos: '6300', description: 'XXXX MOS for RS'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Five (5) Year Term of Enlistment (toe)', min: 5},
          usCitizen: {description: 'U.S. Citizen (no waiver)', has: true},
          clearance: {description: 'Eligible for SECRET Clearance (No Conduct or Drug waivers above RS).', min: 1},
          el: {description: 'EL Score of 105 on the ASVAB (Max 3-point waiver)', min: 105, waiver: 3, waivable: true},
          moral: {
            conduct: {description: 'No Conduct or Drug waivers above RS', max:0, waivable: false},
            marijuana: {description: 'No Conduct or Drug waivers above RS', max:0, waivable: false},
            otherDrugs: {description: 'No Conduct or Drug waivers above RS', max:0, waivable: false}
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
        desc: 'Electronics Maint',
        pefvis: {per: false, edu: true, toe: true, cle: true, sco: true, cit: true, vis: true, dri: false, mor: true, cer: false, scr: false},
        mos: [{mos: '2100', description: '0000 MOS for RS'}, {mos: '2800', description: 'XXXX MOS for RS'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Five (5) Year Term of Enlistment (toe)', min: 5},
          usCitizen: {description: 'U.S. Citizen (no waiver)', has: true},
          clearance: {description: 'Eligible for SECRET Clearance (No Conduct or Drug waivers above RS.', min: 1},
          el: {description: 'EL Score of 115 on the ASVAB. No waivers.', min: 115},
          moral: {
            conduct: {description: 'No Conduct or Drug waivers above RS', max:0, waivable: false},
            marijuana: {description: 'No Conduct or Drug waivers above RS', max:0, waivable: false},
            otherDrugs: {description: 'No Conduct or Drug waivers above RS', max:0, waivable: false}
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
        desc: 'Transportation',
        pefvis: {per: true, edu: false, toe: true, cle: false, sco: true, cit: false, vis: true, dri: true, mor: false, cer: false, scr: false},
        mos: [{mos: '3500', description: '3500 Motor Transport'}, {mos: '3531', description: '3531 Motor Vehicle Operator'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Four Year Term of Enlistment', min: 4},
          mm: {description: 'MM Score of 85 on the ASVAB (Max 3-point waiver)', min: 85, waiver: 3, waivable: true},
          height: {
            description: 'Minimum height: 59 inches (actual height, no waiver). Maximum height: 75 inches (actual height, no waiver).',
            min: 59,
            max: 75,
            optional: false,
            waivable: false
          },
          driving: {
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
        desc: 'Legal & Admin',
        pefvis: {per: false, edu: false, toe: true, cle: false, sco: true, cit: false, vis: false, dri: false, mor: false, cer: false, scr: false},
        mos: [{mos: '0100', description: '0000 MOS for RS'}, {mos: '4400', description: 'XXXX MOS for RS'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Four (4) Year Term of Enlistment (toe)', min: 4},
          cl: {description: 'CL Score of 100 on the ASVAB (Max 3-point waiver)', min: 100, waiver: 3, waivable: true}
        } //requirements
      },

      {     ///CC
        pefCode: 'CC',
        description: 'SUPPLY AND ACCOUNTING OPTIONS',
        desc: 'Supply & Accounting',
        pefvis: {per: false, edu: false, toe: true, cle: false, sco: true, cit: false, vis: false, dri: false, mor: false, cer: false, scr: false},
        mos: [{mos: '3000', description: '0000 MOS for RS'}, {mos: '3400', description: 'XXXX MOS for RS'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Four (4) Year Term of Enlistment (toe)', min: 4},
          cl: {description: 'CL Score of 105 on the ASVAB. No waivers.', min: 105}
        } //requirements
      },

      {     ///CD
        pefCode: 'CD',
        description: 'EQUIPMENT/VEHICLE REPAIR OPTION',
        desc: 'Equip/Vehic Repair',
        pefvis: {per: true, edu: false, toe: true, cle: false, sco: true, cit: false, vis: true, dri: false, mor: false, cer: false, scr: false},
        mos: [{mos: '1300', description: '0000 MOS for RS'}, {mos: '3500', description: 'XXXX MOS for RS'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Four (4) Year Term of Enlistment (toe)', min: 4},
          mm: {description: 'MM Score of 95 on the ASVAB (Max 3-point waiver)', min: 95, waiver: 3, waivable: true},
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
        desc: 'Combat Support',
        pefvis: {per: true, edu: false, toe: true, cle: false, sco: true, cit: false, vis: true, dri: false, mor: false, cer: true, scr: false},
        mos: [{mos: '0800', description: '0000 MOS for RS'}, {mos: '1800', description: 'XXXX MOS for RS'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Four (4) Year Term of Enlistment (toe)', min: 4},
          sex: {description: 'Male Only', val: 'M'},
          gt: {description: 'GT Score of 90 on the ASVAB (Max 3-point waiver)', min: 90, waiver: 3, waivable: true},
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
        desc: 'Ordnance Technician',
        pefvis: {per: false, edu: false, toe: true, cle: false, sco: true, cit: false, vis: true, dri: false, mor: true, cer: false, scr: false},
        mos: [{mos: '1300', description: '0000 MOS for RS'}, {mos: '2100', description: 'XXXX MOS for RS'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Four (4) Year Term of Enlistment (toe)', min: 4},
          mm: {description: 'MM Score of 95 on the ASVAB (Max 3-point waiver)', min: 95, waiver: 3, waivable: true},
          moral: {conduct: {description: 'MOS 2111 - No Misconduct above RS Level', max:0, optional: true}},
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
        desc: 'Public Affairs',
        pefvis: {per: false, edu: false, toe: true, cle: true, sco: true, cit: true, vis: true, dri: false, mor: true, cer: false, scr: true},
        mos: [{mos: '4300', description: '0000 MOS for RS'}, {mos: '7300', description: 'XXXX MOS for RS'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Four (4) Year Term of Enlistment (toe)', min: 4},
          usCitizen: {description: 'U.S. Citizen (no waiver)', has: true},
          clearance: {description: 'Eligible for SECRET Clearance (No Conduct or Drug waivers above RS, to include misconduct offenses waived at the RS Level)', min: 1},
          gt: {description: 'GT Score of 110 on the ASVAB. No waivers.', min: 110},
          ve: {description: 'VE Score of 45 on the ASVAB. No waivers.', min: 45},
          moral: {
            conduct: {description: 'No Conduct or Drug waivers above RS, to include misconduct offenses waived at the RS Level', max:0},
            marijuana: {description: 'No Conduct or Drug waivers above RS', max:0},
            otherDrugs: {description: 'No Conduct or Drug waivers above RS', max:0}
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
        desc: 'Media Option',
        pefvis: {per: false, edu: false, toe: true, cle: true, sco: true, cit: true, vis: true, dri: false, mor: true, cer: false, scr: false},
        mos: [{mos: '4600', description: '0000 MOS for RS'}, {mos: '4612', description: 'XXXX MOS for RS'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Five (5) Year Term of Enlistment (toe)', min: 5},
          usCitizen: {description: 'U.S. Citizen (no waiver)', has: true},
          clearance: {description: 'Eligible for SECRET Clearance (No Conduct or Drug waivers above RS, to include misconduct offenses waived at the RS Level)', min: 1},
          gt: {description: 'GT Score of 100 on the ASVAB (Max 3-point waiver)', min: 100, waiver: 3, waivable: true},
          moral: {
            conduct: {description: 'No Conduct or Drug waivers above RS to include misconduct offenses waived at RS.', max:0},
            marijuana: {description: 'No Conduct or Drug waivers above RS', max:0},
            otherDrugs: {description: 'No Conduct or Drug waivers above RS', max:0}
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
        desc: 'Logistics Option',
        pefvis: {per: false, edu: false, toe: true, cle: true, sco: true, cit: true, vis: false, dri: false, mor: true, cer: false, scr: false},
        mos: [{mos: '0400', description: '0000 MOS for RS'}, {mos: '2300', description: 'XXXX MOS for RS'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Four (4) Year Term of Enlistment (toe)', min: 4},
          usCitizen: {description: 'U.S. Citizen (no waiver)', has: true},
          clearance: {description: 'Eligible for SECRET Clearance (No Conduct or Drug waivers above RS)', min: 1},
          gt: {description: 'GT Score of 100 on the ASVAB (Max 3-point waiver)', min: 100, waiver: 3, waivable: true},
          moral: {
            conduct: {description: 'No Conduct or Drug waivers above RS', max:0, waivable: false},
            marijuana: {description: 'No Conduct or Drug waivers above RS', max:0, waivable: false},
            otherDrugs: {description: 'No Conduct or Drug waivers above RS', max:0, waivable: false}
          }
        } //requirements
      },

      {     ///CK
        pefCode: 'CK',
        description: 'FIRE DIRECTION/CONTROL SPECIALIST',
        desc: 'Fire D/C Specialist',
        pefvis: {per: true, edu: false, toe: true, cle: true, sco: true, cit: true, vis: true, dri: false, mor: true, cer: false, scr: false},
        mos: [{mos: '0800', description: '0000 MOS for RS'}, {mos: '7300', description: 'XXXX MOS for RS'}],
        disqualifications: ['Use drugs while in Delayed Entry Program', 'Fail a required course of training and fail to obtain the MOS Assigned', 'Is disciplined at any time due to behavior',
          'Cannot acquire the appropriate security clearance', 'Have lied about education or other qualifications for program or enlistment', 'Fail to meet required mental, physical or conduct standards'],
        requirements: {
          toe: {description: 'Four (4) Year Term of Enlistment (toe)', min: 4},
          usCitizen: {description: 'U.S. Citizen (no waiver)', has: true},
          sex: {description: 'Male Only', val: 'M'},
          clearance: {description: 'Eligible for SECRET Clearance (No Conduct or Drug waivers above RS, to include misconduct offenses waived at the RS Level)', min: 1},
          gt: {description: 'GT Score of 105 on the ASVAB (Max 3-point waiver)', min: 105, waiver: 3, waivable: true},
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
