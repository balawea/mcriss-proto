import Recruit from '../api/recruit/recruit.model';

Recruit.find({}).remove()
  .then(() => {
    Recruit.create(
      {
        firstName: 'Howard',
        lastName: 'James',
        middleName: 'Leonard',
        dob: '12/11/1989',
        active: true,
        status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
        notif: {daysuntil: 3, activity: 'TC', active: true, note: 'Home visit scheduled.'},
        recruiter: {recruiterId: '979101185', rs: 'ERR', fullname: 'Kai Recruiter'},
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 1},
          sex: {val: 'M'},
          height: {val: 72},
          weight: {val: 181},
          tierGrad: {val: 1},
          toe: {val: 5},
          afqt: {val: 92},
          cl: {val: 122},
          gt: {val: 108},
          el: {val: 84},
          mm: {val: 109},
          qt: {val: 91},
          ve: {val: 80},
          dlab: {val: 80},
          driving: {
            license: {has: true},
            offenses: {val: 0},
            violations: {val: 5}
          },
          moral: {
            conduct: {val: 1},
            otherDrugs: {val: 0},
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
          ssn: '1224',
          address: {street: '1522 Western Rd. #448B', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '481 North Hemlock Ct.', city: 'Windsor Mill', state: 'MD', zip: 21244, country: 'United States'},
          citz: 'Native Born',
          
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
          dep: '05/05/2015',
          activeDutyDateProjected: '10/12/2015',
          stnId: '812',
          pef: '',
          teMosAfs: '12256',
          waiver: '',
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
        status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
        mcroc: '201610CC-XX-XXX-07/21/2016',
        assignedPef: { pefCode: 'CC', recruiter: '17289', month:0},
        notif: {daysuntil: 0, activity: 'EM', active: true, note:'Send email on birthday.'},
        dob: '12/22/1998',
        recruiter: {recruiterId: '172891922', rs: '4MCD'},
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 1},
          sex: {val: 'F'},
          height: {val: 68},
          weight: {val: 151},
          tierGrad: {val: 1},
          algebra: {has: true},
          toe: {val: 5},
          afqt: {val: 94},
          cl: {val: 122},
          gt: {val: 105},
          el: {val: 84},
          mm: {val: 120},
          qt: {val: 131},
          ve: {val: 82},
          dlab: {val: 90},
          driving: {
            license: {has: true},
            offenses: {val: 0},
            violations: {val: 1}
          },
          vision: {
            correctable: {has: true},
            depth: {has: true},
            color: {val: 13},
            acuity: {val:25},
            acuity: {val:20},
            acuity: {val:40}
          },
          moral: {
            conduct: {val: 0},
            otherDrugs: {val: 0},
            marijuana: {val: 1}
          },
          speech: {has: true},
          flightPhysical: {has: true},
          pftClass1: {has: true},
          waterQual: {has: false},
          prpScreen: {val: 0}
        },
        personal: {
          ssn: '7561',
          address: {street: '3885 Broad Blvd.', city: 'Windsor Mill', state: 'MD', zip: 21244, country: 'United States'},
          hor: {street: '3885 Broad Blvd.', city: 'Windsor Mill', state: 'MD', zip: 21244, country: 'United States'},
          citz: 'Native Born',
          ethnicity: 'Not Hispanic or Latino',
          marital: 'Single',
          dependents: 0,
          race: 'American Indian',
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
          dep: '01/25/2017',
          activeDutyDateProjected: '08/25/2017',
          stnId: '819',
          teMosAfs: '12256',
          waiver: '',
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
        status: 'Approved',
        dob: '03/16/1995',
        recruiter: {recruiterId: '979101185', rs: 'ERR', fullname: 'Kai Recruiter'},
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
          cl: {val: 130},
          gt: {val: 122},
          el: {val: 118},
          mm: {val: 111},
          qt: {val: 91},
          ve: {val: 61},
          dlab: {val: 82},
          driving: {
            license: {has: true},
            offenses: {val: 0},
            violations: {val: 2}
          },
          vision: {
            correctable: {has: true},
            depth: {has: true},
            color: {val: 12},
            acuity: {val: 20, val1: 30, val2: 20},
            acuity1: {val: 20},
            acuity2: {val: 20}
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
          ssn: '2980',
          address: {street: '39775 Bengal Rd.', city: 'Manchester', state: 'MD', zip: 21244, country: 'United States'},
          hor: {street: '10119 Heath Ct.', city: 'Chantilly', state: 'VA', zip: 20155, country: 'United States'},
          citz: 'Native Born',
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
          dep: '05/04/2016',
          activeDutyDateProjected: '08/25/2016',
          stnId: '812',
          pef: 'N/A',
          teMosAfs: '12256',
          waiver: '',
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
        status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
        dob: '10/07/1996',
        recruiter: {recruiterId: '979101185', rs: 'ERR', fullname: 'Kai Recruiter'},
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: false},
          clearance: {val: 1},
          sex: {val: 'M'},
          height: {val: 62},
          weight: {val: 131},
          tierGrad: {val: 1},
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
            conduct: {val: 1},
            otherDrugs: {val: 0},
            marijuana: {val: 0}
          },
          vision: {
            correctable: {has: true},
            depth: {has: true},
            color: {val: 14},
            acuity: {val: 40},
            acuity1: {val: 40},
            acuity2: {val: 40}
          },
          speech: {has: true},
          flightPhysical: {has: false},
          pftClass1: {has: true},
          waterQual: {has: true},
          prpScreen: {val: 0}
        },
        personal: {
          ssn: '9384',
          address: {street: '2855 Masala Rd. #84', city: 'Towson', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '2855 Masala Rd. #84', city: 'Towson', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
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
          dep: '05/11/2016',
          activeDutyDateProjected: '11/25/2016',
          stnId: '812',
          pef: 'N/A',
          teMosAfs: '12256',
          waiver: '',
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
        status: 'Prospect',
        notif: {daysuntil: 8, activity: 'HV', active: true, note:'Home visit scheduled.'},
        dob: '11/17/1985',
        recruiter: {recruiterId: '979101185', rs: 'ERR', fullname: 'Kai Recruiter'},
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
            conduct: {val: 0},
            marijuana: {val: 2},
            otherDrugs: {val: 0}
          },
          vision: {
            correctable: {has: true},
            depth: {has: true},
            color: {val: 14},
            acuity: {val: 120, val1: 20, val2: 100}
          }
        },
        personal: {
          ssn: '0406',
          address: {street: '224 Severna Ln.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '224 Severna Ln.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
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
          dep: '06/04/2016',
          activeDutyDateProjected: '08/01/2016',
          stnId: '632',
          pef: 'AF',
          teMosAfs: '14156',
          waiver: '',
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
        status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
        dob: '10/17/1994',
        recruiter: {recruiterId: '172891922', rs: '4MCD', fullname: 'Judy Recruiter'},
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 2},
          sex: {val: 'M'},
          height: {val: 66},
          weight: {val: 136},
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
          ssn: '5084',
          address: {street: '2855 Caper Rd. #84', city: 'Towson', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '2855 Caper Rd. #84', city: 'Towson', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
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
          dep: '05/11/2016',
          activeDutyDateProjected: '11/25/2016',
          stnId: '812',
          pef: 'N/A',
          teMosAfs: '12256',
          waiver: '',
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
        status: 'Contract/Poolee',
        dutyType: {id:1, desc: 'DMV'},
        notif: {daysuntil: 14, activity: 'EM', active: true, note:'End of semester check-in.'},
        dob: '11/13/1997',
        recruiter: {recruiterId: '172891922', rs: '4MCD', fullname: 'Judy Recruiter'},
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 1},
          sex: {val: 'M'},
          height: {val: 68},
          weight: {val: 170},
          tierGrad: {val: 1},
          algebra: {has: true},
          toe: {val: 4},
          afqt: {val: 89},
          cl: {val: 104},
          gt: {val: 111},
          el: {val: 102},
          mm: {val: 95},
          qt: {val: 101},
          ve: {val: 46},
          dlab: {val: 90},
          driving: {
            license: {has: true},
            offenses: {val: 0},
            violations: {val: 2}
          },
          moral: {
            conduct: {val: 0},
            marijuana: {val: 0},
            otherDrugs: {val: 1}
          },
          vision: {
            correctable: {has: true},
            depth: {has: true},
            color: {val: 14},
            acuity: {val: 120, val1: 20, val2: 100}
          },
          speech: {has: true},
          flightPhysical: {has: true},
          pftClass1: {has: true},
          waterQual: {has: false},
          prpScreen: {val: 0}
        },
        personal: {
          ssn: '0804',
          address: {street: '481 South Ln.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '481 South Ln.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
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
          dep: '06/04/2016',
          activeDutyDateProjected: '08/21/2017',
          stnId: '632',
          pef: 'AF',
          teMosAfs: '14156',
          waiver: '',
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
        status: 'MEPS DQ',
        dob: '04/17/1994',
        recruiter: {recruiterId: '172891922', rs: '4MCD', fullname: 'Judy Recruiter'},
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
          dep: '05/05/2015',
          stnId: '957',
          pef: 'N/A',
          teMosAfs: '12846',
          waiver: '',
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
        status: 'Pending Info',
        dob: '09/02/1988',
        recruiter: {recruiterId: '979101185', rs: 'ERR', fullname: 'Kai Recruiter'},
        match : {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 2},
          sex: {val: 'M'},
          height: {val: 75},
          weight: {val: 210},
          tierGrad: {val: 1},
          algebra: {has: true},
          toe: {val: 4},
          afqt: {val: 88},
          cl: {val: 118},
          gt: {val: 106},
          el: {val: 111},
          mm: {val: 120},
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
            otherDrugs: {val: 0}
          },
          vision: {
            correctable: {has: true},
            depth: {has: false},
            color: {val: 14},
            acuity: {val: 120, val1: 60, val2: 60}
          },
          speech: {has: true},
          flightPhysical: {has: true},
          pftClass1: {has: true},
          waterQual: {has: false},
          prpScreen: {val: 0}
        },  //match
        personal: {
          ssn: '0028',
          address: {street: '150 Kepler Ct.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '150 Kepler Ct.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
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
          stnId: '662',
          pef: 'CA',
          teMosAfs: '12258',
          waiver: '',
          payGrade: 'N/A',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Amir',
        lastName: 'Spencer',
        dob: '12/11/1997',
        active: true,
        status: 'Contract/Poolee',
        dutyType: {id: 2, desc: 'DMV'},
        recruiter: {recruiterId: '979101185', rs: 'ERR', fullname: 'Kai Recruiter'},
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
          gt: {val: 108},
          el: {val: 84},
          mm: {val: 109},
          qt: {val: 91},
          ve: {val: 80},
          dlab: {val: 80},
          driving: {
            license: {has: true},
            offenses: {val: 0},
            violations: {val: 5}
          },
          moral: {
            conduct: {val: 0},
            otherDrugs: {val: 1},
            marijuana: {val: 0}
          },
          vision: {
            correctable: {has: true},
            depth: {has: true},
            color: {val: 13},
            acuity: {val: 100, val1: 20, val2: 80}
          },
          speech: {has: true},
          algebra: {has: true},
          flightPhysical: {has: true},
        },
        personal: {
          ssn: '1996',
          address: {street: '1522 Western Rd. #448B', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '481 North Hemlock Ct.', city: 'Windsor Mill', state: 'MD', zip: 21244, country: 'United States'},
          citz: 'Native Born',
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
          dep: '05/05/2015',
          activeDutyDateProjected: '04/25/2015',
          stnId: '812',
          pef: 'AF',
          teMosAfs: '12256',
          waiver: '',
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
        status: 'Incomplete',
        dob: '02/20/1999',
        recruiter: {recruiterId: '979101185', rs: 'ERR', fullname: 'Kai Recruiter'},
        match : {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 2},
          sex: {val: 'M'},
          height: {val: 68},
          weight: {val: 151},
          tierGrad: {val: 1},
          algebra: {has: true},
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
            license: {has: true},
            offenses: {val: 0},
            violations: {val: 0}
          },
          vision: {
            correctable: {has: true},
            depth: {has: true},
            color: {val: 12},
            acuity: {val:120, val1: 100, val2: 20}
          },
          moral: {
            conduct: {val: 2},
            otherDrugs: {val: 0},
            marijuana: {val: 1}
          },
          speech: {has: true},
          flightPhysical: {has: true},
          prpScreen: {val: 0}
        },
        personal: {
          ssn: '3976',
          address: {street: '10028 Broad Blvd.', city: 'Windsor Mill', state: 'MD', zip: 21244, country: 'United States'},
          hor: {street: '10028 Broad Blvd.', city: 'Windsor Mill', state: 'MD', zip: 21244, country: 'United States'},
          citz: 'Native Born',
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
          dep: '05/04/2016',
          activeDutyDateProjected: '08/25/2016',
          stnId: '819',
          pef: 'CB',
          teMosAfs: '12256',
          waiver: '',
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
        status: 'Approved',
        dob: '03/16/97',
        recruiter: {recruiterId: '979101185', rs: 'ERR', fullname: 'Kai Recruiter'},
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          sex: {val: 'F'},
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
          ssn: '1038',
          address: {street: '39775 Tiger Rd.', city: 'Manchester', state: 'MD', zip: 21244, country: 'United States'},
          hor: {street: '10119 Moore Ct.', city: 'Chantilly', state: 'VA', zip: 20155, country: 'United States'},
          citz: 'Native Born',
          
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
          dep: '05/04/2016',
          activeDutyDateProjected: '08/25/2016',
          stnId: '812',
          pef: 'N/A',
          teMosAfs: '12256',
          waiver: '',
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
        status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
        dob: '10/07/1999',
        recruiter: {recruiterId: '979101185', rs: 'ERR', fullname: 'Kai Recruiter'},
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 2},
          sex: {val: 'M'},
          height: {val: 67},
          weight: {val: 179},
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
          ssn: '9384',
          address: {street: '2855 Fire Rd. #84', city: 'Towson', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '2855 Fire Rd. #84', city: 'Towson', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
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
          dep: '12/11/2016',
          activeDutyDateProjected: '03/25/2017',
          stnId: '812',
          pef: 'N/A',
          teMosAfs: '12256',
          waiver: '',
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
        status: 'Approved',
        notif: {daysuntil: 2, activity: 'HV', active: true, note:'Meeting/Presentation scheduled.'},
        dob: '01/30/1998',
        recruiter: {recruiterId: '979101185', rs: 'ERR', fullname: 'Kai Recruiter'},
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
          flightPhysical: {has: true},
          pftClass1: {has:true},
          waterQual: {has: true},
          prpScreen: {val: 0}
        },
        personal: {
          ssn: '0900',
          address: {street: '224 Severna Ln.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '224 Severna Ln.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
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
          dep: '06/04/2016',
          activeDutyDateProjected: '08/01/2016',
          stnId: '632',
          pef: 'AF',
          teMosAfs: '14156',
          waiver: '',
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
        status: 'Approved',
        dob: '10/17/1998',
        recruiter: {recruiterId: '172891922', rs: '4MCD', fullname: 'Judy Recruiter'},
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 1},
          sex: {val: 'M'},
          height: {val: 62},
          weight: {val: 132},
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
          ssn: '3006',
          address: {street: '10 Casper Rd.', city: 'Towson', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '10 Casper Rd.', city: 'Towson', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
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
          dep: '05/11/2016',
          activeDutyDateProjected: '11/25/2016',
          stnId: '812',
          pef: 'N/A',
          teMosAfs: '12256',
          waiver: '',
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
        status: 'Pending Info',
        dob: '08/13/1997',
        recruiter: {recruiterId: '172891922', rs: '4MCD', fullname: 'Judy Recruiter'},
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
          ssn: '6804',
          address: {street: '481 South Ln.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '481 South Ln.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
          
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
          dep: '01/04/2017',
          activeDutyDateProjected: '08/21/2017',
          stnId: '632',
          pef: 'AF',
          teMosAfs: '14156',
          waiver: '',
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
        status: 'Pending Info',
        dob: '04/17/1993',
        recruiter: {recruiterId: '172891922', rs: '4MCD', fullname: 'Judy Recruiter'},
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
          dep: '05/05/2017',
          activeDutyDateProjected: '09/05/2017',
          stnId: '957',
          pef: 'N/A',
          teMosAfs: '12846',
          waiver: '',
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
        status: 'Approved',
        notif: {daysuntil: 1, activity: 'HV', active: true, note:'Home visit scheduled.'},
        dob: '09/02/1999',
        recruiter: {recruiterId: '979101185', rs: 'ERR', fullname: 'Kai Recruiter'},
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
          },
          speech: {has: true},
          algebra: {has: true},
          flightPhysical: {has: true},
        },  //match
        personal: {
          ssn: '3096',
          address: {street: '150 Kepler Ct.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '150 Kepler Ct.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
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
          stnId: '662',
          pef: 'CA',
          teMosAfs: '12258',
          waiver: '',
          payGrade: 'N/A',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Opal',
        lastName: 'Olomide',
        dob: '12/11/1989',
        active: true,
        status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
        notif: {daysuntil: 10, activity: 'TC', active: true, note:'Check in at the end of bootcamp'},
        recruiter: {recruiterId: '979101185', rs: 'ERR', fullname: 'Kai Recruiter'},
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
          flightPhysical: {has: true},
          pftClass1: {has:true}
        },
        personal: {
          ssn: '1224',
          address: {street: '1522 Western Rd. #448B', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '481 North Hemlock Ct.', city: 'Windsor Mill', state: 'MD', zip: 21244, country: 'United States'},
          citz: 'Native Born',
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
          dep: '01/05/2017',
          activeDutyDateProjected: '04/25/2017',
          stnId: '812',
          pef: 'AF',
          teMosAfs: '12256',
          waiver: '',
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
        dob: '08/20/1998',
        status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
        recruiter: {recruiterId: '979101185', rs: 'ERR', fullname: 'Kai Recruiter'},
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 1},
          sex: {val: 'F'},
          height: {val: 68},
          weight: {val: 140},
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
          ssn: '7791',
          address: {street: '3885 Broad Blvd.', city: 'Windsor Mill', state: 'MD', zip: 21244, country: 'United States'},
          hor: {street: '3885 Broad Blvd.', city: 'Windsor Mill', state: 'MD', zip: 21244, country: 'United States'},
          citz: 'Native Born',
          
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
          dep: '01/05/2017',
          activeDutyDateProjected: '04/25/2017',
          stnId: '819',
          pef: 'CB',
          teMosAfs: '12256',
          waiver: '',
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
        dob: '03/16/1998',
        status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
        notif: {daysuntil: 5, activity: 'TC', active: true, note:'Last contacted 12/10.'},
        recruiter: {recruiterId: '979101185', rs: 'ERR', fullname: 'Kai Recruiter'},
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
          algebra: {has: true}
        },
        personal: {
          ssn: '1195',
          address: {street: '39775 Bengal Rd.', city: 'Manchester', state: 'MD', zip: 21244, country: 'United States'},
          hor: {street: '10119 Heath Ct.', city: 'Chantilly', state: 'VA', zip: 20155, country: 'United States'},
          citz: 'Native Born',
          
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
          dep: '01/05/2017',
          activeDutyDateProjected: '04/25/2017',
          stnId: '812',
          pef: '',
          teMosAfs: '12256',
          waiver: '',
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
        status: 'Incomplete',
        notif: {daysuntil: 4, activity: 'EM', active: true, note:'No contact since 10/14.'},
        dob: '09/07/1996',
        recruiter: {recruiterId: '002995102', rs: 'Chantilly', fullname: 'Amber Recruiter'},
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
          ssn: '3042',
          address: {street: '2855 Masala Rd. #84', city: 'Towson', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '2855 Masala Rd. #84', city: 'Towson', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
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
          dep: '02/11/2017',
          activeDutyDateProjected: '06/15/2017',
          stnId: '812',
          pef: 'N/A',
          teMosAfs: '12256',
          waiver: '',
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
        status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
        notif: {daysuntil: 0, activity: 'TC', active: true, note:'No contact since 10/14.'},
        dob: '04/22/1999',
        recruiter: {recruiterId: '002995102', rs: 'Chantilly', fullname: 'Amber Recruiter'},
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
          algebra: {has: true}
        },
        personal: {
          ssn: '0950',
          address: {street: '224 Severna Ln.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '224 Severna Ln.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
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
          dep: '01/05/2017',
          activeDutyDateProjected: '04/25/2017',
          stnId: '632',
          pef: 'AF',
          teMosAfs: '14156',
          waiver: '',
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
        dob: '10/17/1994',
        status: 'Incomplete',
        notif: {daysuntil: 2, activity: 'TC', active: true, note:'Prospect might be waivering.'},
        recruiter: {recruiterId: '172891922', rs: '4MCD', fullname: 'Judy Recruiter'},
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
          ssn: '9084',
          address: {street: '2855 Caper Rd. #84', city: 'Towson', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '2855 Caper Rd. #84', city: 'Towson', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
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
          dep: '01/05/2017',
          activeDutyDateProjected: '07/01/2017',
          stnId: '812',
          pef: 'N/A',
          teMosAfs: '12256',
          waiver: '',
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
        status: 'Pending Info',
        dob: '06/14/1997',
        recruiter: {recruiterId: '172891922', rs: '4MCD', fullname: 'Judy Recruiter'},
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
          ssn: '8049',
          address: {street: '481 South Ln.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '481 South Ln.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
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
          dep: '06/04/2016',
          activeDutyDateProjected: '08/21/2017',
          stnId: '632',
          pef: 'AF',
          teMosAfs: '14156',
          waiver: '',
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
        status: 'Pending Info',
        dob: '04/17/1997',
        recruiter: {recruiterId: '172891922', rs: '4MCD', fullname: 'Judy Recruiter'},
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
          dep: '01/05/2017',
          activeDutyDateProjected: '04/25/2017',
          stnId: '957',
          pef: 'N/A',
          teMosAfs: '12846',
          waiver: '',
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
        dob: '09/02/1998',
        status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
        recruiter: {recruiterId: '002995102', rs: 'Chantilly', fullname: 'Amber Recruiter'},
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 2},
          sex: {val: 'F'},
          height: {val: 66},
          weight: {val: 140},
          tierGrad: {val: 1},
          algebra: {has: true},
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
          ssn: '8829',
          address: {street: '150 Kepler Ct.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '150 Kepler Ct.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
          
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
          dep: '01/12/2017',
          activeDutyDateProjected: '04/04/2017',
          stnId: '662',
          pef: 'CA',
          teMosAfs: '12258',
          waiver: '',
          payGrade: 'N/A',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Hayden',
        lastName: 'Spencer',
        dob: '02/11/1997',
        active: true,
        status: 'Approved',
        notif: {daysuntil: 2, activity: 'TC', active: true, note:'Prospect\'s mother is against him enlisting.'},
        recruiter: {recruiterId: '198848953', rs: 'Frederick', fullname: 'Omar Recruiter'},
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
          },
          algebra: {has: true},
          speech: {has: true},
          prpScreen: {val: 2}
        },
        personal: {
          ssn: '1976',
          address: {street: '1522 Western Rd. #448B', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '481 North Hemlock Ct.', city: 'Windsor Mill', state: 'MD', zip: 21244, country: 'United States'},
          citz: 'Native Born',
          ethnicity: 'Not Hispanic or Latino',
          marital: 'Divorced',
          dependents: 1,
          race: 'White',
          religion: 'Catholic',
          education: 'HS',
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
          dep: '05/05/2015',
          activeDutyDateProjected: '04/25/2015',
          stnId: '812',
          pef: '',
          teMosAfs: '12256',
          waiver: '',
          payGrade: 'N/A',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Preston',
        lastName: 'Harris',
        active: true,
        dob: '02/20/1999',
        status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
        notif: {daysuntil: 2, activity: 'EM', active: true, note:'Prospect is waivering.'},
        recruiter: {recruiterId: '198848953', rs: 'Frederick', fullname: 'Omar Recruiter'},
        match : {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 1},
          sex: {val: 'M'},
          height: {val: 68},
          weight: {val: 151},
          tierGrad: {val: 1},
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
            license: {has: true},
            offenses: {val: 0},
            violations: {val: 0}
          },
          vision: {
            correctable: {has: true},
            depth: {has: true},
            color: {val: 14},
            acuity: {val:60, val1: 40, val2: 20}
          },
          moral: {
            conduct: {val: 1},
            otherDrugs: {val: 0},
            marijuana: {val: 1}
          },
          algebra: {has: true},
          speech: {has: true},
          prpScreen: {val: 2}
        },
        personal: {
          ssn: '3976',
          address: {street: '10028 Broad Blvd.', city: 'Windsor Mill', state: 'MD', zip: 21244, country: 'United States'},
          hor: {street: '10028 Broad Blvd.', city: 'Windsor Mill', state: 'MD', zip: 21244, country: 'United States'},
          citz: 'Native Born',
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
          dep: '05/04/2016',
          activeDutyDateProjected: '08/25/2016',
          stnId: '819',
          pef: 'CB',
          teMosAfs: '12256',
          waiver: '',
          payGrade: 'N/A',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Jenna',
        lastName: 'Harris',
        middleName: 'Brenda',
        active: true,
        status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
        notif: {daysuntil: 11, activity: 'EM', active: true, note:'2nd contact, need to complete forms.'},
        dob: '03/16/97',
        recruiter: {recruiterId: '198848953', rs: 'Frederick', fullname: 'Omar Recruiter'},
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          sex: {val: 'F'},
          height: {val: 64},
          weight: {val: 147},
          clearance: {val: 2},
          tierGrad: {val: 1},
          toe: {val: 6},
          afqt: {val: 97},
          cl: {val: 104},
          gt: {val: 116},
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
            color: {val: 13},
            acuity: {val: 50, val1: 30, val2: 20}
          },
          moral: {
            conduct: {val: 0},
            otherDrugs: {val: 0},
            marijuana: {val: 1}
          },
          algebra: {has: true},
          speech: {has: true},
          prpScreen: {val: 0}
        },
        personal: {
          ssn: '5880',
          address: {street: '39775 Tiger Rd.', city: 'Manchester', state: 'MD', zip: 21244, country: 'United States'},
          hor: {street: '10119 Moore Ct.', city: 'Chantilly', state: 'VA', zip: 20155, country: 'United States'},
          citz: 'Native Born',
          
          ethnicity: 'Not Hispanic or Latino',
          marital: 'Married',
          dependents: 3,
          race: 'White',
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
          dep: '05/04/2016',
          activeDutyDateProjected: '08/25/2016',
          stnId: '812',
          pef: 'N/A',
          teMosAfs: '12256',
          waiver: '',
          payGrade: 'O-2',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Kris',
        lastName: 'Oberlin',
        active: true,
        dob: '10/15/1998',
        status: 'Approved',
        recruiter: {recruiterId: '198848953', rs: 'Frederick', fullname: 'Omar Recruiter'},
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 2},
          sex: {val: 'M'},
          height: {val: 67},
          weight: {val: 179},
          tierGrad: {val: 1},
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
            marijuana: {val: 0}
          },
          vision: {
            correctable: {has: true},
            depth: {has: true},
            color: {val: 12},
            acuity: {val: 40, val1: 20, val2: 20}
          },
          speech: {has: true},
          algebra: {has: true},
          flightPhysical: {has: true},
          pftClass1: {has: true},
          prpScreen: {val: 0}
        },
        personal: {
          ssn: '9384',
          address: {street: '2855 Fire Rd. #84', city: 'Towson', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '2855 Fire Rd. #84', city: 'Towson', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
          ethnicity: 'Hispanic or Latino',
          marital: 'Single',
          dependents: 0,
          race: 'Asian',
          religion: 'N/A',
          education: 'MA',
          language: 'Hindi, Urdu',
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
          dep: '12/11/2016',
          activeDutyDateProjected: '03/25/2017',
          stnId: '812',
          pef: 'N/A',
          teMosAfs: '12256',
          waiver: '',
          payGrade: 'O-2',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Samson',
        lastName: 'Rudolfo',
        middleName: 'W',
        active: true,
        status: 'Approved',
        notif: {daysuntil: 1, activity: 'HV', active: true, note:'Interview at Garfield HS. Bring brochures.'},
        dob: '08/30/1999',
        recruiter: {recruiterId: '198848953', rs: 'Frederick', fullname: 'Omar Recruiter'},
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 1},
          sex: {val: 'M'},
          height: {val: 71},
          weight: {val: 170},
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
            conduct: {val: 0},
            marijuana: {val: 1},
            otherDrugs: {val: 0}
          },
          vision: {
            correctable: {has: true},
            depth: {has: true},
            color: {val: 12},
            acuity: {val: 120, val1: 20, val2: 100}
          },
          speech: {has: true},
          algebra: {has: true},
          pftClass1: {has:true},
          waterQual: {has: true},
          prpScreen: {val: 1}
        },
        personal: {
          ssn: '2940',
          address: {street: '224 Severna Ln.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '224 Severna Ln.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
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
          dep: '06/04/2017',
          activeDutyDateProjected: '08/01/2017',
          stnId: '632',
          pef: 'AF',
          teMosAfs: '14156',
          waiver: '',
          payGrade: 'E-2',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Adrian',
        middleName: 'Alexander',
        lastName: 'Garoua',
        active: true,
        status: 'MEPS Check-in',
        dob: '01/10/1999',
        notif: {daysuntil: 9, activity: 'HV', active: true, note:'MEPS checkin.'},
        recruiter: {recruiterId: '198848953', rs: 'Frederick', fullname: 'Omar Recruiter'},
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: false},
          clearance: {val: 2},
          sex: {val: 'M'},
          height: {val: 72},
          weight: {val: 188},
          tierGrad: {val: 1},
          toe: {val: 6},
          afqt: {val: 98},
          cl: {val: 138},
          gt: {val: 141},
          el: {val: 151},
          mm: {val: 126},
          qt: {val: 129},
          ve: {val: 95},
          dlab: {val: 90},
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
            color: {val: 14},
            acuity: {val: 50, val1: 30, val2: 20}
          },
          speech: {has: true},
          algebra: {has: true},
          flightPhysical: {has: true},
          pftClass1: {has:true},
          waterQual: {has: true},
          prpScreen: {val: 0}
        },
        personal: {
          ssn: '0038',
          address: {street: '10 Casper Rd.', city: 'Towson', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '10 Casper Rd.', city: 'Towson', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
          ethnicity: 'Not Hispanic or Latino',
          marital: 'Single',
          dependents: 0,
          race: 'Black',
          religion: 'N/A',
          education: 'MA',
          language: 'French, Catalan',
          licenseNum: 'MD19957029983',
          birthPlace: 'Landover, MD\nUnited States'
        },
        exams: {
          afqt: 98,
          gs: 98,
          ar: 95,
          wk: 90,
          pc: 94,
          mk: 91,
          as: 99,
          mc: 99,
          ao: 91,
          ei: 96,
          es: '14',
          dep: '05/11/2016',
          activeDutyDateProjected: '11/25/2016',
          stnId: '812',
          pef: 'N/A',
          teMosAfs: '12256',
          waiver: '',
          payGrade: 'O-2',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Melissa',
        lastName: 'Lehrer',
        middleName: 'Rachel',
        active: true,
        status: 'Contract/Poolee',
        dutyType: {id: 3, desc: 'DMV'},
        dob: '11/13/1998',
        recruiter: {recruiterId: '198848953', rs: 'Frederick', fullname: 'Omar Recruiter'},
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 1},
          sex: {val: 'F'},
          height: {val: 71},
          weight: {val: 170},
          tierGrad: {val: 1},
          toe: {val: 5},
          afqt: {val: 72},
          cl: {val: 72},
          gt: {val: 72},
          el: {val: 69},
          mm: {val: 68},
          qt: {val: 86},
          ve: {val: 58},
          dlab: {val: 55},
          driving: {
            license: {has: true},
            offenses: {val: 0},
            violations: {val: 2}
          },
          moral: {
            conduct: {val: 0},
            marijuana: {val: 0},
            otherDrugs: {val: 0}
          },
          vision: {
            correctable: {has: true},
            depth: {has: true},
            color: {val: 14},
            acuity: {val: 120, val1: 60, val2: 60}
          },
          speech: {has: true},
          algebra: {has: true},
          flightPhysical: {has: true},
          waterQual: {has: true},
          prpScreen: {val: 0}
        },
        personal: {
          ssn: '6804',
          address: {street: '481 South Ln.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '481 South Ln.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
          ethnicity: 'Not Hispanic or Latino',
          marital: 'Married',
          dependents: 0,
          race: 'Black',
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
          dep: '01/04/2017',
          activeDutyDateProjected: '08/21/2017',
          stnId: '632',
          pef: 'AF',
          teMosAfs: '14156',
          waiver: '',
          payGrade: 'E-2',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Cheryl',
        lastName: 'McArless',
        middleName: 'L',
        active: true,
        status: 'Prospect',
        dob: '06/11/1999',
        recruiter: {recruiterId: '198848953', rs: 'Frederick', fullname: 'Omar Recruiter'},
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 0},
          sex: {val: 'F'},
          height: {val: 58},
          weight: {val: 122},
          tierGrad: {val: 1},
          toe: {val: 5},
          afqt: {val: 78},
          cl: {val: 82},
          gt: {val: 90},
          el: {val: 102},
          mm: {val: 96},
          qt: {val: 52},
          ve: {val: 42},
          dlab: {val: 90},
          driving: {
            license: {has: true},
            offenses: {val: 0},
            violations: {val: 0}
          },
          moral: {
            marijuana: {val: 0},
            conduct: {val: 4},
            otherDrugs: {val: 0}
          },
          vision: {
            correctable: {has: true},
            depth: {has: true},
            color: {val: 14},
            acuity: {val: 70, val1: 20, val2: 50}
          },
          speech: {has: true},
          algebra: {has: true},
          flightPhysical: {has: true},
          waterQual: {has: true},
          prpScreen: {val: 0}
        },
        personal: {
          address: {street: '1992 Hobarth Rd. #28', city: 'Arlington', state: 'VA', zip: 20115, country: 'United States'},
          hor: {street: '19084 S. Sydney Rd.', city: 'Falls Church', state: 'VA', zip: 20111, country: 'United States'},
          citz: 'Canadian',
          
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
          dep: '05/05/2017',
          activeDutyDateProjected: '09/05/2017',
          stnId: '957',
          pef: 'N/A',
          teMosAfs: '12846',
          waiver: '',
          payGrade: 'E-1',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Kristie',
        lastName: 'Fielding',
        middleName: 'R',
        active: true,
        status: 'Incomplete',
        notif: {daysuntil: 20, activity: 'HV', active: true, note:'Home visit scheduled.'},
        dob: '08/16/1998',
        recruiter: {recruiterId: '198848953', rs: 'Frederick', fullname: 'Omar Recruiter'},
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
          cl: {val: 124},
          gt: {val: 129},
          el: {val: 118},
          mm: {val: 111},
          qt: {val: 91},
          ve: {val: 61},
          dlab: {val: 83},
          driving: {
            license: {has: true},
            offenses: {val: 1},
            violations: {val: 1}
          },
          vision: {
            correctable: {has: true},
            depth: {has: true},
            color: {val: 13},
            acuity: {val: 50, val1: 30, val2: 20}
          },
          moral: {
            conduct: {val: 0},
            otherDrugs: {val: 0},
            marijuana: {val: 0}
          },
          speech: {has: true},
          algebra: {has: true},
          prpScreen: {val:0}
        },
        personal: {
          ssn: '2880',
          address: {street: '39775 Bengal Rd.', city: 'Manchester', state: 'MD', zip: 21244, country: 'United States'},
          hor: {street: '10119 Heath Ct.', city: 'Chantilly', state: 'VA', zip: 20155, country: 'United States'},
          citz: 'Native Born',
          
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
          dep: '01/05/2017',
          activeDutyDateProjected: '04/25/2017',
          stnId: '812',
          pef: 'N/A',
          teMosAfs: '12256',
          waiver: '',
          payGrade: 'O-1',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Gary',
        lastName: 'Clark',
        middleName: 'Prince',
        active: true,
        status: 'MEPS Check-in',
        dob: '09/27/1998',
        recruiter: {recruiterId: '198848953', rs: 'Frederick', fullname: 'Omar Recruiter'},
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: false},
          clearance: {val: 1},
          sex: {val: 'M'},
          height: {val: 69},
          weight: {val: 160},
          tierGrad: {val: 1},
          toe: {val: 6},
          afqt: {val: 94},
          cl: {val: 110},
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
            conduct: {val: 0},
            otherDrugs: {val: 0},
            marijuana: {val: 0, valAtRs: 0}
          },
          vision: {
            correctable: {has: true},
            depth: {has: true},
            color: {val: 14},
            acuity: {val: 40, val1: 20, val2: 20}
          },
          speech: {has: true},
          algebra: {has: true},
          flightPhysical: {has: true},
          waterQual: {has: true},
          prpScreen: {val: 0}
        },
        personal: {
          ssn: '3252',
          address: {street: '2855 Masala Rd. #84', city: 'Towson', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '2855 Masala Rd. #84', city: 'Towson', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
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
          dep: '02/11/2017',
          activeDutyDateProjected: '06/15/2017',
          stnId: '812',
          pef: 'N/A',
          teMosAfs: '12256',
          waiver: '',
          payGrade: 'O-2',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Arthur',
        lastName: 'Bradley',
        middleName: 'John',
        active: true,
        status: 'Incomplete',
        notif: {daysuntil: 3, activity: 'HV', active: false, resolution: 'Canceled', note:'Home visit scheduled.'},
        dob: '04/12/1999',
        recruiter: {recruiterId: '198848953', rs: 'Frederick', fullname: 'Omar Recruiter'},
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 1},
          sex: {val: 'M'},
          height: {val: 73},
          weight: {val: 170},
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
            conduct: {val: 0},
            marijuana: {val: 1},
            otherDrugs: {val: 0}
          },
          vision: {
            correctable: {has: true},
            depth: {has: true},
            color: {val: 14},
            acuity: {val: 120, val1: 20, val2: 100}
          },
          speech: {has: true},
          algebra: {has: true},
          tierGrad: {val: 1}
        },
        personal: {
          ssn: '0950',
          address: {street: '224 Severna Ln.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '224 Severna Ln.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
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
          afqt: 92,
          gs: 108,
          ar: 85,
          wk: 90,
          pc: 94,
          mk: 98,
          as: 100,
          mc: 71,
          ao: 79,
          ei: 82,
          es: '12',
          dep: '01/05/2017',
          activeDutyDateProjected: '04/25/2017',
          stnId: '632',
          pef: 'AF',
          teMosAfs: '14156',
          waiver: '',
          payGrade: 'E-2',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Jason',
        lastName: 'Tsai',
        active: true,
        status: 'Incomplete',
        dob: '10/12/1994',
        notif: {daysuntil: 0, activity: 'TC', active: true, note:'Still awaiting completed medical forms.'},
        recruiter: {recruiterId: '198848953', rs: 'Frederick', fullname: 'Omar Recruiter'},
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          clearance: {val: 1},
          sex: {val: 'M'},
          height: {val: 68},
          weight: {val: 155},
          tierGrad: {val: 1},
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
            conduct: {val: 0},
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
          ssn: '5054',
          address: {street: '2855 Caper Rd. #84', city: 'Towson', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '2855 Caper Rd. #84', city: 'Towson', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
          ethnicity: 'Hispanic or Latino',
          marital: 'Single',
          dependents: 0,
          race: 'White',
          religion: 'N/A',
          education: 'MA',
          language: 'Gaelic',
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
          dep: '01/05/2017',
          activeDutyDateProjected: '07/01/2017',
          stnId: '812',
          pef: 'N/A',
          teMosAfs: '12256',
          waiver: '',
          payGrade: 'O-2',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Brian',
        lastName: 'Bayless',
        middleName: 'Archer',
        active: false,
        status: 'Incomplete',
        dob: '06/14/1998',
        notif: {daysuntil: 0, activity: 'TC', active: true, note:'Weekly checkin.'},
        recruiter: {recruiterId: '198848953', rs: 'Frederick', fullname: 'Omar Recruiter'},
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
          ssn: '8049',
          address: {street: '481 South Ln.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '481 South Ln.', city: 'Manchester', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
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
          dep: '06/04/2016',
          activeDutyDateProjected: '08/21/2017',
          stnId: '632',
          pef: 'AF',
          teMosAfs: '14156',
          waiver: '',
          payGrade: 'E-2',
          svcAnnexCode: 'N/A',
          mso: 'N/A',
          adObligation: 'N/A'
        }
      },

      {
        firstName: 'Neil',
        lastName: 'Young',
        active: false,
        dob: '09/02/2000',
        status: 'Prospect',
        notif: {daysuntil: 1, activity: 'TC', active: true, note:'Weekly checkin.'},
        recruiter: {recruiterId: '979101185', rs: 'ERR', fullname: 'Kai Recruiter'},
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
          ssn: '9337',
          address: {street: '42018 Braddock Pike Rd.', city: 'Lancaster', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '42018 Braddock Pike Rd.', city: 'Lancaster', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
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
          stnId: '815',
          pef: 'N/A',
          teMosAfs: '12256',
          waiver: '',
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
        status: 'MEPS DQ',
        dob: '09/02/1995',
        notif: {daysuntil: 1, activity: 'TC', active: true, note:'Touch base - getting contact info on two HS friends.'},
        recruiter: {recruiterId: '002995102', rs: 'Chantilly', fullname: 'Amber Recruiter'},
        match: {
          sex: {val: 'M'}
        },
        personal: {
          ssn: '9337',
          address: {street: '42018 Braddock Pike Rd.', city: 'Lancaster', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '42018 Braddock Pike Rd.', city: 'Lancaster', state: 'MD', zip: 21102, country: 'United States'},
          citz: 'Native Born',
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
            stnId: '815',
            pef: '',
            teMosAfs: '12256',
            waiver: '',
            payGrade: 'N/A',
            svcAnnexCode: 'N/A',
            mso: 'N/A',
            adObligation: 'N/A'
        }
      },

      {
        firstName: 'Howard',
        lastName: 'McRory',
        middleName: 'Ellis',
        dob: '03/31/1997',
        active: true,
        status: 'Prospect',
        notif: {daysuntil: 3, activity: 'HV', active: true, note: 'Home visit scheduled.'},
        recruiter: {recruiterId: '979101185', rs: 'ERR', fullname: 'Kai Recruiter'},
        match: {
          usCitizen: {has: true},
          usCitizenFamily: {has: true},
          sex: {val: 'M'},
          height: {val: 72},
          weight: {val: 181},
          tierGrad: {val: 1},
        },
        personal: {
          ssn: '5274',
          address: {street: '1522 Western Rd. #448B', city: 'Baltimore', state: 'MD', zip: 21102, country: 'United States'},
          hor: {street: '481 North French Ct.', city: 'Windsor Mill', state: 'MD', zip: 21244, country: 'United States'},
          citz: 'Native Born',
          ethnicity: 'Not Hispanic or Latino',
          marital: 'Divorced',
          dependents: 0,
          race: 'White',
          religion: 'Catholic',
          education: 'BS',
          language: 'N/A',
          licenseNum: 'MD41488909082',
          birthPlace: 'Baltimore, MD\nUnited States'
        },
        exams: {}
      },




  //PROSPECTS

  {
    firstName: 'Barrett',
    lastName: 'Barr',
    active: true,
    dob: '1995-08-03',
    status: 'Prospect',
    notif: {
      daysuntil: 2,
      activity: 'EM',
      active: true,
      note: 'Second contact, reviewing materials'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      height: {
        val: 75
      },
      weight: {
        val: 148
      }
    },
    personal: {
      email: 'barrettbarr@hotmail.com',
      phone: '(703) 316 7661',
      mobile: '(703) 693 5688',
      address: {street:'13513 Summit Street', city:'Rockville', state: 'VA', zip: '20192', country: 'United States'},
      hor: {street: '3396 Beekman Place', city: 'Urie', state: 'MD', zip: '20686', country: 'United States'},
      ssn: '4097',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 1,
      race: 'White',
      religion: 'Buddhist',
      education: 'MA',
      language: 'Hindi',
      licenseNum: 'MD974373311',
      birthPlace: 'Salunga, MD\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Hamilton',
    lastName: 'Irwin',
    active: false,
    dob: '1998-01-29',
    status: 'Prospect',
    notif: {
      daysuntil: 0,
      activity: 'HV',
      active: true,
      note: 'Initial contact'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      height: {
        val: 65
      },
      weight: {
        val: 186
      }
    },
    personal: {
      email: 'hamiltonirwin@hotmail.com',
      phone: '(703) 596 1600',
      mobile: '(703) 259 6676',
      address: {street: '3163 Seigel Street', city: 'Emory', state: 'VA', zip: '20676', country: 'United States'},
      hor: {street: '16980 Granite Street', city: 'Ballico', state: 'MD', zip: '20434', country: 'United States'},
      ssn: '8657',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 1,
      race: 'White',
      religion: 'Catholic',
      education: 'HS',
      language: 'Czech',
      licenseNum: 'MD500793501',
      birthPlace: 'Eastmont, VA\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Angelo',
    lastName: 'Schroeder',
    active: false,
    dob: '1996-10-13',
    status: 'Prospect',
    notif: {
      daysuntil: 7,
      activity: 'HV',
      active: true,
      note: 'Verify graduation info'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      height: {
        val: 70
      },
      weight: {
        val: 210
      }
    },
    personal: {
      email: 'angeloschroeder@hotmail.com',
      phone: '(703) 509 3711',
      mobile: '(703) 658 4168',
      address: {street: '3114 Schermerhorn Street', city: 'Williamson', state: 'MD', zip: '20905', country: 'United States'},
      hor: {street: '16197 Conklin Avenue', city: 'Derwood', state: 'VA', zip: '20930', country: 'United States'},
      ssn: '4765',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'Buddhist',
      education: 'BS',
      language: 'Spanish',
      licenseNum: 'MD180027411',
      birthPlace: 'Rushford, MD\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Finley',
    lastName: 'Fletcher',
    
    active: false,
    dob: '1995-01-25',
    status: 'Prospect',
    notif: {
      daysuntil: 1,
      activity: 'TC',
      active: true,
      note: 'Initial contact'
    },
    recruiter: {
      recruiterId: '1503303857', rs: 'MCRC',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      height: {
        val: 66
      },
      weight: {
        val: 199
      }
    },
    personal: {
      email: 'finleyfletcher@university.com',
      phone: '(703) 746 6612',
      mobile: '(703) 670 5076',
      address: {street: '9771 Essex Street', city: 'Noblestown', state: 'MD', zip: '20221', country: 'United States'},
      hor: {street: '3947 Fountain Avenue', city: 'Corinne', state: 'MD', zip: '20855', country: 'United States'},
      ssn: '8466',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 1,
      race: 'Pacific Islander',
      religion: 'Jewish',
      education: 'BS',
      language: 'Greek',
      licenseNum: 'MD290792728',
      birthPlace: 'Itmann, MD\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Prince',
    lastName: 'Austin',
    active: false,
    dob: '1998-03-16',
    status: 'Prospect',
    notif: {
      daysuntil: 2,
      activity: 'OT',
      active: true,
      note: 'Second contact, reviewing materials'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      height: {
        val: 69
      },
      weight: {
        val: 197
      }
    },
    personal: {
      email: 'princeaustin@university.com',
      phone: '(703) 518 2872',
      mobile: '(703) 159 4863',
      address: {street: '11807 Noble Street', city: 'Gibsonia', state: 'MD', zip: '20870', country: 'United States'},
      hor: {street: '14039 Driggs Avenue', city: 'Juntura', state: 'VA', zip: '20411', country: 'United States'},
      ssn: '8817',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 1,
      race: 'White',
      religion: 'Protestant',
      education: 'GED',
      language: 'Czech',
      licenseNum: 'VA451553948',
      birthPlace: 'Lacomb, VA\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Michael',
    lastName: 'Eaton',
    active: true,
    dob: '1998-07-24',
    status: 'Prospect',
    notif: {
      daysuntil: 8,
      activity: 'OT',
      active: true,
      note: 'Initial contact'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD'
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      height: {
        val: 77
      },
      weight: {
        val: 156
      }
    },
    personal: {
      email: 'michaeleaton@outlook.com',
      phone: '(703) 725 6136',
      mobile: '(703) 475 2601',
      address: {street: '9712 Losee Terrace', city: 'Saticoy', state: 'MD', zip: '20825', country: 'United States'},
      hor: {street: '10480 Coventry Road', city: 'Norwood', state: 'VA', zip: '20104', country: 'United States'},
      ssn: '9993',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'Pacific Islander',
      religion: 'N/A',
      education: 'MA',
      language: 'Spanish',
      licenseNum: 'MD272112425',
      birthPlace: 'Riceville, VA\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Mitchell',
    lastName: 'Griffith',
    active: false,
    dob: '1994-04-23',
    status: 'Prospect',
    notif: {
      daysuntil: 5,
      activity: 'HV',
      active: true,
      note: 'Second contact, reviewing materials'
    },
    recruiter: {recruiterId: '002995102', rs: 'Chantilly'},
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      height: {
        val: 69
      },
      weight: {
        val: 165
      }
    },
    personal: {
      email: 'mitchellgriffith@outlook.com',
      phone: '(703) 656 5586',
      mobile: '(703) 702 5127',
      address: {street: '13157 Delmonico Place', city: 'Forbestown', state: 'MD', zip: '20247', country: 'United States'},
      hor: {street: '8936 Autumn Avenue', city: 'Leeper', state: 'MD', zip: '20337', country: 'United States'},
      ssn: '5280',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Asian',
      religion: 'N/A',
      education: 'GED',
      language: 'Czech',
      licenseNum: 'MD804631176',
      birthPlace: 'Murillo, VA\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'James',
    lastName: 'Rush',
    active: false,
    dob: '1998-09-02',
    status: 'Prospect',
    notif: {
      daysuntil: 9,
      activity: 'EM',
      active: true,
      note: 'Initial contact'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      height: {
        val: 68
      },
      weight: {
        val: 213
      }
    },
    personal: {
      email: 'jamesrush@hotmail.com',
      phone: '(703) 566 9982',
      mobile: '(703) 179 8482',
      address: {street: '4066 Pierrepont Street', city: 'Dante', state: 'VA', zip: '20856', country: 'United States'},
      hor: {street: '6206 Stratford Road', city: 'Fannett', state: 'VA', zip: '20764', country: 'United States'},
      ssn: '5533',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'Jewish',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'MD256549502',
      birthPlace: 'Tuttle, MD\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Viola',
    lastName: 'Langley',
    active: false,
    dob: '1994-08-03',
    status: 'Prospect',
    notif: {
      daysuntil: 3,
      activity: 'HV',
      active: true,
      note: 'Initial contact'
    },
    recruiter: {recruiterId: '1503303857', rs: 'MCRC',fullname: ''},
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      height: {
        val: 74
      },
      weight: {
        val: 146
      }
    },
    personal: {
      email: 'violalangley@aol.com',
      phone: '(703) 147 5928',
      mobile: '(703) 651 2096',
      address: {street: '7018 Bokee Court', city: 'Morriston', state: 'VA', zip: '20418', country: 'United States'},
      hor: {street: '4648 Taylor Street', city: 'Winchester', state: 'MD', zip: '20109', country: 'United States'},
      ssn: '3194',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'Jewish',
      education: 'HS',
      language: 'Arabic',
      licenseNum: 'MD852345278',
      birthPlace: 'Tooleville, VA\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Harley',
    lastName: 'Mendoza',
    active: true,
    dob: '1994-10-07',
    status: 'Prospect',
    notif: {
      daysuntil: 4,
      activity: 'OT',
      active: true,
      note: 'Verify graduation info'
    },
    recruiter: {
      recruiterId: '1503303857', rs: 'MCRC',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      height: {
        val: 76
      },
      weight: {
        val: 158
      }
    },
    personal: {
      email: 'harleymendoza@pizzapalace.com',
      phone: '(703) 430 5530',
      mobile: '(703) 413 8934',
      address: {street: '9392 Heyward Street', city: 'Lynn', state: 'MD', zip: '20759', country: 'United States'},
      hor: {street: '14110 Linden Street', city: 'Gardners', state: 'VA', zip: '20203', country: 'United States'},
      ssn: '8978',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Asian',
      religion: 'Protestant',
      education: 'HS',
      language: 'Greek',
      licenseNum: 'VA836060345',
      birthPlace: 'Cherokee, VA\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Madelyn',
    lastName: 'Stanley',
    active: true,
    dob: '1998-07-02',
    status: 'Prospect',
    notif: {
      daysuntil: 4,
      activity: 'HV',
      active: true,
      note: 'Verify graduation info'
    },
    recruiter: {
      recruiterId: '1503303857', rs: 'MCRC',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      height: {
        val: 77
      },
      weight: {
        val: 161
      }
    },
    personal: {
      email: 'madelynstanley@hotmail.com',
      phone: '(703) 442 7168',
      mobile: '(703) 622 9589',
      address: {street: '3758 Bragg Street', city: 'Cecilia', state: 'MD', zip: '20489', country: 'United States'},
      hor: {street: '2627 Amber Street', city: 'Croom', state: 'MD', zip: '20060', country: 'United States'},
      ssn: '3845',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'Pacific Islander',
      religion: 'N/A',
      education: 'HS',
      language: 'Greek',
      licenseNum: 'VA847519562',
      birthPlace: 'Barclay, MD\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Jimmie',
    lastName: 'Finch',
    active: false,
    dob: '1998-05-22',
    status: 'Prospect',
    notif: {
      daysuntil: 6,
      activity: 'TC',
      active: true,
      note: 'Interview'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      height: {
        val: 69
      },
      weight: {
        val: 159
      }
    },
    personal: {
      email: 'jimmiefinch@hotmail.com',
      phone: '(703) 347 5574',
      mobile: '(703) 223 5892',
      address: {street: '4338 Imlay Street', city: 'Tecolotito', state: 'MD', zip: '20116', country: 'United States'},
      hor: {street: '16923 Hubbard Street', city: 'Warsaw', state: 'VA', zip: '20590', country: 'United States'},
      ssn: '3235',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 1,
      race: 'White',
      religion: 'Jewish',
      education: 'HS',
      language: 'Arabic',
      licenseNum: 'VA156684288',
      birthPlace: 'Courtland, MD\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Alexandria',
    lastName: 'Daniels',
    active: true,
    dob: '1994-02-27',
    status: 'Prospect',
    notif: {
      daysuntil: 0,
      activity: 'TC',
      active: true,
      note: 'Initial contact'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      height: {
        val: 61
      },
      weight: {
        val: 203
      }
    },
    personal: {
      email: 'alexandriadaniels@hotmail.com',
      phone: '(703) 735 5527',
      mobile: '(703) 661 4849',
      address: {street: '2226 Ridgecrest Terrace', city: 'Wakarusa', state: 'MD', zip: '20819', country: 'United States'},
      hor: {street: '14339 Doughty Street', city: 'Temperanceville', state: 'VA', zip: '20294', country: 'United States'},
      ssn: '7192',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'Protestant',
      education: 'MA',
      language: 'Spanish',
      licenseNum: 'MD93433686',
      birthPlace: 'Mooresburg, MD\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Wade',
    lastName: 'Holcomb',
    active: false,
    dob: '1994-02-01',
    status: 'Prospect',
    notif: {
      daysuntil: 9,
      activity: 'OT',
      active: true,
      note: 'Verify graduation info'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      height: {
        val: 74
      },
      weight: {
        val: 140
      }
    },
    personal: {
      email: 'wadeholcomb@university.com',
      phone: '(703) 270 9222',
      mobile: '(703) 389 4377',
      address: {street: '7023 Butler Street', city: 'Ypsilanti', state: 'MD', zip: '20464', country: 'United States'},
      hor: {street: '482 Dahl Court', city: 'Lithium', state: 'MD', zip: '20447', country: 'United States'},
      ssn: '4360',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 1,
      race: 'Black',
      religion: 'Jewish',
      education: 'GED',
      language: 'Korean',
      licenseNum: 'MD40277720',
      birthPlace: 'Chical, MD\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Clark',
    lastName: 'Wall',
    active: false,
    dob: '1998-05-06',
    status: 'Prospect',
    notif: {
      daysuntil: 5,
      activity: 'OT',
      active: true,
      note: 'Initial contact'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      height: {
        val: 76
      },
      weight: {
        val: 159
      }
    },
    personal: {
      email: 'clarewall@university.com',
      phone: '(703) 665 6504',
      mobile: '(703) 473 6277',
      address: {street: '16328 Keen Court', city: 'Allamuchy', state: 'MD', zip: '20864', country: 'United States'},
      hor: {street: '512 Tudor Terrace', city: 'Bennett', state: 'MD', zip: '20568', country: 'United States'},
      ssn: '8497',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 1,
      race: 'Pacific Islander',
      religion: 'N/A',
      education: 'HS',
      language: 'Korean',
      licenseNum: 'VA994616318',
      birthPlace: 'Crayne, MD\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Wallace',
    lastName: 'Macias',
    active: false,
    dob: '1998-02-02',
    status: 'Prospect',
    notif: {
      daysuntil: 4,
      activity: 'EM',
      active: true,
      note: 'Second contact, reviewing materials'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      height: {
        val: 70
      },
      weight: {
        val: 153
      }
    },
    personal: {
      email: 'wallacemacias@university.com',
      phone: '(703) 739 6832',
      mobile: '(703) 305 6380',
      address: {street: '8523 Dennett Place', city: 'Abiquiu', state: 'MD', zip: '21000', country: 'United States'},
      hor: {street: '7805 Whitty Lane', city: 'Eden', state: 'MD', zip: '20671', country: 'United States'},
      ssn: '7516',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'Black',
      religion: 'Muslim',
      education: 'BS',
      language: 'Spanish',
      licenseNum: 'MD60318371',
      birthPlace: 'Brecon, VA\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'May',
    lastName: 'Good',
    active: true,
    dob: '1996-03-10',
    status: 'Prospect',
    notif: {
      daysuntil: 2,
      activity: 'EM',
      active: true,
      note: 'Second contact, reviewing materials'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      height: {
        val: 78
      },
      weight: {
        val: 183
      }
    },
    personal: {
      email: 'maygood@university.com',
      phone: '(703) 269 2095',
      mobile: '(703) 121 9875',
      address: {street: '2420 Coyle Street', city: 'Rose', state: 'VA', zip: '20640', country: 'United States'},
      hor: {street: '1256 Madison Place', city: 'Calverton', state: 'MD', zip: '20060', country: 'United States'},
      ssn: '5067',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'HS',
      language: 'Arabic',
      licenseNum: 'VA24313287',
      birthPlace: 'Day, MD\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'English',
    lastName: 'Whitaker',
    active: true,
    dob: '1998-04-04',
    status: 'Prospect',
    notif: {
      daysuntil: 1,
      activity: 'EM',
      active: true,
      note: 'Interview'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      height: {
        val: 70
      },
      weight: {
        val: 150
      }
    },
    personal: {
      email: 'englishwhitaker@university.com',
      phone: '(703) 163 9002',
      mobile: '(703) 485 3172',
      address: {street: '6568 Albany Avenue', city: 'Loma', state: 'MD', zip: '20135', country: 'United States'},
      hor: {street: '11400 Bergen Court', city: 'Zeba', state: 'VA', zip: '20586', country: 'United States'},
      ssn: '9252',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 1,
      race: 'Asian',
      religion: 'N/A',
      education: 'BS',
      language: 'Arabic',
      licenseNum: 'VA521018260',
      birthPlace: 'Cressey, MD\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Lorrie',
    lastName: 'Moss',
    active: true,
    dob: '1996-12-31',
    status: 'Prospect',
    notif: {
      daysuntil: 10,
      activity: 'OT',
      active: true,
      note: 'Verify graduation info'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly'
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      height: {
        val: 77
      },
      weight: {
        val: 197
      }
    },
    personal: {
      email: 'lorriemoss@university.com',
      phone: '(703) 707 4436',
      mobile: '(703) 354 4669',
      address: {street: '157 Christopher Avenue', city: 'Juarez', state: 'VA', zip: '20070', country: 'United States'},
      hor: {street: '616 Wilson Avenue', city: 'Tolu', state: 'VA', zip: '20349', country: 'United States'},
      ssn: '6873',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Married',
      dependents: 1,
      race: 'Pacific Islander',
      religion: 'N/A',
      education: 'HS',
      language: 'Czech',
      licenseNum: 'VA825420446',
      birthPlace: 'Calvary, MD\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Bianca',
    lastName: 'Roman',
    active: true,
    dob: '1994-06-16',
    status: 'Prospect',
    notif: {
      daysuntil: 7,
      activity: 'OT',
      active: true,
      note: 'Verify graduation info'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick'
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      height: {
        val: 74
      },
      weight: {
        val: 182
      }
    },
    personal: {
      email: 'biancaroman@university.com',
      phone: '(703) 131 8768',
      mobile: '(703) 750 9939',
      address: {street: '2337 Drew Street', city: 'Yorklyn', state: 'VA', zip: '20689', country: 'United States'},
      hor: {street: '8629 Olive Street', city: 'Vicksburg', state: 'MD', zip: '20766', country: 'United States'},
      ssn: '5112',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 1,
      race: 'White',
      religion: 'Buddhist',
      education: 'HS',
      language: 'Greek',
      licenseNum: 'MD457987628',
      birthPlace: 'Lutsen, VA\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Margie',
    lastName: 'Bernard',
    active: true,
    dob: '1998-03-16',
    status: 'Prospect',
    notif: {
      daysuntil: 6,
      activity: 'HV',
      active: true,
      note: 'Second contact, reviewing materials'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD'
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      height: {
        val: 72
      },
      weight: {
        val: 180
      }
    },
    personal: {
      email: 'margiebernard@university.com',
      phone: '(703) 190 7870',
      mobile: '(703) 795 6529',
      address: {street: '2127 Dodworth Street', city: 'Defiance', state: 'MD', zip: '20897', country: 'United States'},
      hor: {street: '11832 Amity Street', city: 'Wolcott', state: 'MD', zip: '20788', country: 'United States'},
      ssn: '5912',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'Black',
      religion: 'N/A',
      education: 'HS',
      language: 'Hindi',
      licenseNum: 'MD226337975',
      birthPlace: 'Otranto, MD\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Melissa',
    lastName: 'Whitfield',
    active: false,
    dob: '1994-10-17',
    status: 'Prospect',
    notif: {
      daysuntil: 9,
      activity: 'OT',
      active: true,
      note: 'Second contact, reviewing materials'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      height: {
        val: 76
      },
      weight: {
        val: 214
      }
    },
    personal: {
      email: 'melissawhitfield@university.com',
      phone: '(703) 289 5265',
      mobile: '(703) 558 7606',
      address: {street: '6270 Winthrop Street', city: 'Nelson', state: 'MD', zip: '20270', country: 'United States'},
      hor: {street: '10330 Vandervoort Avenue', city: 'Cawood', state: 'VA', zip: '20506', country: 'United States'},
      ssn: '9483',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 1,
      race: 'Black',
      religion: 'N/A',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'VA350261614',
      birthPlace: 'Rivers, VA\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Wilder',
    lastName: 'Sullivan',
    active: false,
    dob: '1997-04-15',
    status: 'Prospect',
    notif: {
      daysuntil: 7,
      activity: 'EM',
      active: true,
      note: 'Second contact, reviewing materials'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      height: {
        val: 72
      },
      weight: {
        val: 145
      }
    },
    personal: {
      email: 'wildersullivan@university.com',
      phone: '(703) 159 4177',
      mobile: '(703) 662 7499',
      address: {street: '4357 Love Lane', city: 'Independence', state: 'VA', zip: '20105', country: 'United States'},
      hor: {street: '16592 Hanover Place', city: 'Chase', state: 'VA', zip: '20429', country: 'United States'},
      ssn: '4553',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'Muslim',
      education: 'HS',
      language: 'Greek',
      licenseNum: 'MD904698597',
      birthPlace: 'Keller, VA\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Foley',
    lastName: 'Barrera',
    active: true,
    dob: '1997-12-27',
    status: 'Prospect',
    notif: {
      daysuntil: 1,
      activity: 'HV',
      active: true,
      note: 'Second contact, reviewing materials'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      height: {
        val: 61
      },
      weight: {
        val: 156
      }
    },
    personal: {
      email: 'foleybarrera@university.com',
      phone: '(703) 380 2234',
      mobile: '(703) 734 1225',
      address: {street: '14603 John Street', city: 'Blodgett', state: 'VA', zip: '20446', country: 'United States'},
      hor: {street: '12054 Alice Court', city: 'Columbus', state: 'VA', zip: '20735', country: 'United States'},
      ssn: '7236',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'N/A',
      education: 'GED',
      language: 'Greek',
      licenseNum: 'VA334750371',
      birthPlace: 'Vienna, MD\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Rivers',
    lastName: 'Kidd',
    active: true,
    dob: '1997-09-30',
    status: 'Prospect',
    notif: {
      daysuntil: 8,
      activity: 'OT',
      active: true,
      note: 'Initial contact'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      height: {
        val: 66
      },
      weight: {
        val: 167
      }
    },
    personal: {
      email: 'riverskidd@university.com',
      phone: '(703) 186 6054',
      mobile: '(703) 685 5939',
      address: {street: '7007 Auburn Place', city: 'Brownlee', state: 'VA', zip: '20755', country: 'United States'},
      hor: {street: '2478 Alton Place', city: 'Ernstville', state: 'MD', zip: '20547', country: 'United States'},
      ssn: '8538',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'GED',
      language: 'Korean',
      licenseNum: 'VA255830314',
      birthPlace: 'Freetown, VA\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Anthony',
    lastName: 'Albert',
    active: false,
    dob: '1996-06-15',
    status: 'Prospect',
    notif: {
      daysuntil: 10,
      activity: 'OT',
      active: true,
      note: 'Interview'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      height: {
        val: 75
      },
      weight: {
        val: 188
      }
    },
    personal: {
      email: 'anthonyalbert@university.com',
      phone: '(703) 516 5673',
      mobile: '(703) 444 8913',
      address: {street: '7382 Legion Street', city: 'Fillmore', state: 'MD', zip: '20876', country: 'United States'},
      hor: {street: '5639 Gotham Avenue', city: 'Munjor', state: 'MD', zip: '20890', country: 'United States'},
      ssn: '3762',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 1,
      race: 'White',
      religion: 'N/A',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'MD433652824',
      birthPlace: 'Kersey, VA\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Christian',
    lastName: 'Chan',
    active: true,
    dob: '1995-04-16',
    status: 'Prospect',
    notif: {
      daysuntil: 2,
      activity: 'OT',
      active: true,
      note: 'Interview'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      height: {
        val: 70
      },
      weight: {
        val: 169
      }
    },
    personal: {
      email: 'christianwhitehead@aol.com',
      phone: '(703) 747 9444',
      mobile: '(703) 563 5638',
      address: {street: '6386 Ryder Street', city: 'Skyland', state: 'MD', zip: '20553', country: 'United States'},
      hor: {street: '16177 Hill Street', city: 'Beyerville', state: 'VA', zip: '20822', country: 'United States'},
      ssn: '7077',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Muslim',
      education: 'HS',
      language: 'Arabic',
      licenseNum: 'MD770819017',
      birthPlace: 'Whitestone, VA\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Austin',
    lastName: 'Cooley',
    active: true,
    dob: '1997-10-23',
    status: 'Prospect',
    notif: {
      daysuntil: 7,
      activity: 'HV',
      active: true,
      note: 'Verify graduation info'
    },
    recruiter: {
      recruiterId: '1503303857', rs: 'MCRC',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      height: {
        val: 78
      },
      weight: {
        val: 192
      }
    },
    personal: {
      email: 'austincooley@gmail.com',
      phone: '(703) 766 2803',
      mobile: '(703) 537 3169',
      address: {street: '576 Middleton Street', city: 'Homeworth', state: 'MD', zip: '20466', country: 'United States'},
      hor: {street: '12414 Hamilton Walk', city: 'Cochranville', state: 'MD', zip: '20910', country: 'United States'},
      ssn: '5875',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 1,
      race: 'Asian',
      religion: 'Catholic',
      education: 'BS',
      language: 'Hindi',
      licenseNum: 'MD815339307',
      birthPlace: 'Kempton, MD\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Drina',
    lastName: 'Malone',
    active: true,
    dob: '1995-11-08',
    status: 'Prospect',
    notif: {
      daysuntil: 5,
      activity: 'EM',
      active: true,
      note: 'Interview'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      height: {
        val: 67
      },
      weight: {
        val: 204
      }
    },
    personal: {
      email: 'drinamalone@hotmail.com',
      phone: '(703) 476 6932',
      mobile: '(703) 181 4340',
      address: {street: '9343 Easter Woods Place', city: 'Shawmut', state: 'MD', zip: '20991', country: 'United States'},
      hor: {street: '1912 Ridgewood Place', city: 'Tyhee', state: 'MD', zip: '20905', country: 'United States'},
      ssn: '6964',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Buddhist',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'MD936359994',
      birthPlace: 'Klondike, MD\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Diana',
    lastName: 'Baker',
    active: false,
    dob: '1996-10-19',
    status: 'Prospect',
    notif: {
      daysuntil: 2,
      activity: 'HV',
      active: true,
      note: 'Verify graduation info'
    },
    recruiter: {recruiterId: '979101185', rs: 'ERR',fullname: ''},
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      height: {
        val: 78
      },
      weight: {
        val: 178
      }
    },
    personal: {
      email: 'dianabaker@hotmail.com',
      phone: '(703) 173 3798',
      mobile: '(703) 705 2756',
      address: {street: '9298 Bedford Avenue', city: 'Orovada', state: 'VA', zip: '20621', country: 'United States'},
      hor: {street: '13972 Ridgewood Avenue', city: 'Marshall', state: 'MD', zip: '20145', country: 'United States'},
      ssn: '9469',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 1,
      race: 'White',
      religion: 'Catholic',
      education: 'MA',
      language: 'Greek',
      licenseNum: 'MD141919099',
      birthPlace: 'Trexlertown, MD\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Dean',
    lastName: 'James',
    active: false,
    dob: '1998-02-11',
    status: 'Prospect',
    notif: {
      daysuntil: 4,
      activity: 'TC',
      active: true,
      note: 'Initial contact'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      height: {
        val: 71
      },
      weight: {
        val: 144
      }
    },
    personal: {
      email: 'deanjames@outlook.com',
      phone: '(703) 392 8864',
      mobile: '(703) 675 3030',
      address: {street: '12668 Cook Street', city: 'Edneyville', state: 'MD', zip: '20774', country: 'United States'},
      hor: {street: '13628 Joval Court', city: 'Jugtown', state: 'MD', zip: '20466', country: 'United States'},
      ssn: '3144',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 1,
      race: 'Black',
      religion: 'Protestant',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'VA876424105',
      birthPlace: 'Wollochet, VA\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Rosanna',
    lastName: 'Howe',
    active: true,
    dob: '1995-05-13',
    status: 'Prospect',
    notif: {
      daysuntil: 9,
      activity: 'TC',
      active: true,
      note: 'Initial contact'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      height: {
        val: 66
      },
      weight: {
        val: 189
      }
    },
    personal: {
      email: 'rosannahowe@aol.com',
      phone: '(703) 467 3326',
      mobile: '(703) 370 4273',
      address: {street: '3317 Vista Place', city: 'Sunwest', state: 'MD', zip: '20873', country: 'United States'},
      hor: {street: '1205 Sapphire Street', city: 'Utting', state: 'VA', zip: '20146', country: 'United States'},
      ssn: '8631',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 1,
      race: 'White',
      religion: 'N/A',
      education: 'HS',
      language: 'Hindi',
      licenseNum: 'VA218952309',
      birthPlace: 'Bethpage, MD\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Amelia',
    lastName: 'Castro',
    active: false,
    dob: '1996-07-28',
    status: 'Prospect',
    notif: {
      daysuntil: 3,
      activity: 'OT',
      active: true,
      note: 'Initial contact'
    },
    recruiter: {
      recruiterId: '1503303857', rs: 'MCRC',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      height: {
        val: 70
      },
      weight: {
        val: 158
      }
    },
    personal: {
      email: 'ameliacastro@comvex.com',
      phone: '(703) 170 5940',
      mobile: '(703) 402 4246',
      address: {street: '626 Cyrus Avenue', city: 'Hessville', state: 'MD', zip: '20811', country: 'United States'},
      hor: {street: '14786 Dank Court', city: 'Babb', state: 'MD', zip: '20541', country: 'United States'},
      ssn: '7197',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'Buddhist',
      education: 'HS',
      language: 'Czech',
      licenseNum: 'VA456563243',
      birthPlace: 'Wilmington, VA\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Karen',
    lastName: 'Goodwin',
    active: true,
    dob: '1996-06-18',
    status: 'Prospect',
    notif: {
      daysuntil: 5,
      activity: 'TC',
      active: true,
      note: 'Initial contact'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      height: {
        val: 65
      },
      weight: {
        val: 158
      }
    },
    personal: {
      email: 'karengoodwin@pizzapalace.com',
      phone: '(703) 524 6589',
      mobile: '(703) 268 2974',
      address: {street: '16607 Banner Avenue', city: 'Stewartville', state: 'MD', zip: '20909', country: 'United States'},
      hor: {street: '12388 Stillwell Avenue', city: 'Seymour', state: 'MD', zip: '20893', country: 'United States'},
      ssn: '5165',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Asian',
      religion: 'N/A',
      education: 'HS',
      language: 'Korean',
      licenseNum: 'VA400366066',
      birthPlace: 'Herbster, MD\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Freddy',
    lastName: 'Mercado',
    active: false,
    dob: '1996-04-22',
    status: 'Prospect',
    notif: {
      daysuntil: 1,
      activity: 'EM',
      active: true,
      note: 'Initial contact'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      height: {
        val: 76
      },
      weight: {
        val: 206
      }
    },
    personal: {
      email: 'freddymercado@aol.com',
      phone: '(703) 433 2717',
      mobile: '(703) 247 4164',
      address: {street: '4527 Aster Court', city: 'Idamay', state: 'VA', zip: '20848', country: 'United States'},
      hor: {street: '10067 Brightwater Avenue', city: 'Curtice', state: 'VA', zip: '20605', country: 'United States'},
      ssn: '7577',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 1,
      race: 'Pacific Islander',
      religion: 'Buddhist',
      education: 'HS',
      language: 'Korean',
      licenseNum: 'VA586823804',
      birthPlace: 'Hayden, MD\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Ally',
    lastName: 'Blake',
    active: false,
    dob: '1995-06-04',
    status: 'Prospect',
    notif: {
      daysuntil: 3,
      activity: 'EM',
      active: true,
      note: 'Verify graduation info'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      height: {
        val: 68
      },
      weight: {
        val: 138
      }
    },
    personal: {
      email: 'allyblake@university.com',
      phone: '(703) 413 7197',
      mobile: '(703) 680 9174',
      address: {street: '4515 Diamond Street', city: 'Riviera', state: 'VA', zip: '20443', country: 'United States'},
      hor: {street: '9692 Little Street', city: 'Kidder', state: 'MD', zip: '20154', country: 'United States'},
      ssn: '9362',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'N/A',
      education: 'HS',
      language: 'Greek',
      licenseNum: 'VA323181921',
      birthPlace: 'Floriston, MD\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Kyle',
    lastName: 'Burt',
    active: true,
    dob: '1996-08-07',
    status: 'Prospect',
    notif: {
      daysuntil: 3,
      activity: 'HV',
      active: true,
      note: 'Second contact, reviewing materials'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      height: {
        val: 75
      },
      weight: {
        val: 182
      }
    },
    personal: {
      email: 'kyleburt@university.com',
      phone: '(703) 160 6342',
      mobile: '(703) 416 5193',
      address: {street: '6576 Sheffield Avenue', city: 'Logan', state: 'MD', zip: '20285', country: 'United States'},
      hor: {street: '6475 Lamont Court', city: 'Interlochen', state: 'VA', zip: '20950', country: 'United States'},
      ssn: '7526',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 1,
      race: 'Pacific Islander',
      religion: 'N/A',
      education: 'HS',
      language: 'Greek',
      licenseNum: 'MD29868248',
      birthPlace: 'Summerset, VA\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Thomas',
    lastName: 'Mann',
    active: true,
    dob: '1995-02-18',
    status: 'Prospect',
    notif: {
      daysuntil: 6,
      activity: 'OT',
      active: true,
      note: 'Verify graduation info'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      height: {
        val: 74
      },
      weight: {
        val: 145
      }
    },
    personal: {
      email: 'kathrinemann@university.com',
      phone: '(703) 214 7938',
      mobile: '(703) 683 7627',
      address: {street: '7178 Fanchon Place', city: 'Valle', state: 'VA', zip: '20832', country: 'United States'},
      hor: {street: '14898 Boynton Place', city: 'Bellamy', state: 'VA', zip: '20204', country: 'United States'},
      ssn: '4564',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Muslim',
      education: 'HS',
      language: 'Czech',
      licenseNum: 'MD757120353',
      birthPlace: 'Richmond, VA\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Noel',
    lastName: 'Frederick',
    active: false,
    dob: '1996-10-09',
    status: 'Prospect',
    notif: {
      daysuntil: 2,
      activity: 'HV',
      active: true,
      note: 'Initial contact'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      height: {
        val: 76
      },
      weight: {
        val: 179
      }
    },
    personal: {
      email: 'noellefrederick@university.com',
      phone: '(703) 322 2316',
      mobile: '(703) 680 6214',
      address: {street: '3442 Cove Lane', city: 'Gwynn', state: 'VA', zip: '20795', country: 'United States'},
      hor: {street: '15752 Central Avenue', city: 'Tetherow', state: 'MD', zip: '20123', country: 'United States'},
      ssn: '7755',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Catholic',
      education: 'MA',
      language: 'Greek',
      licenseNum: 'MD474117116',
      birthPlace: 'Smock, MD\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Lyn',
    lastName: 'Perry',
    active: false,
    dob: '1995-08-03',
    status: 'Prospect',
    notif: {
      daysuntil: 7,
      activity: 'HV',
      active: true,
      note: 'Initial contact'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      height: {
        val: 72
      },
      weight: {
        val: 213
      }
    },
    personal: {
      email: 'lindaperry@university.com',
      phone: '(703) 309 9910',
      mobile: '(703) 500 7855',
      address: {street: '5492 Provost Street', city: 'Fairacres', state: 'VA', zip: '20583', country: 'United States'},
      hor: {street: '2678 Wyckoff Street', city: 'Lydia', state: 'VA', zip: '20851', country: 'United States'},
      ssn: '9360',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 1,
      race: 'Asian',
      religion: 'N/A',
      education: 'MA',
      language: 'Spanish',
      licenseNum: 'VA33885682',
      birthPlace: 'Longbranch, MD\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Ila',
    lastName: 'Brennan',
    active: true,
    dob: '1997-12-22',
    status: 'Prospect',
    notif: {
      daysuntil: 10,
      activity: 'HV',
      active: true,
      note: 'Second contact, reviewing materials'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      height: {
        val: 70
      },
      weight: {
        val: 182
      }
    },
    personal: {
      email: 'ilabrennan@university.com',
      phone: '(703) 419 1994',
      mobile: '(703) 718 1659',
      address: {street: '9439 Monitor Street', city: 'Fostoria', state: 'MD', zip: '20265', country: 'United States'},
      hor: {street: '11221 Tehama Street', city: 'Cumminsville', state: 'VA', zip: '20273', country: 'United States'},
      ssn: '8403',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'Pacific Islander',
      religion: 'N/A',
      education: 'BS',
      language: 'Greek',
      licenseNum: 'MD724747362',
      birthPlace: 'Roland, VA\nUnited States'
    },
    exams: {}
  },
  {
    firstName: 'Darren',
    lastName: 'Hendricks',
    active: false,
    dob: '1997-11-09',
    status: 'Prospect',
    notif: {
      daysuntil: 9,
      activity: 'EM',
      active: true,
      note: 'Verify graduation info'
    },
    recruiter: {recruiterId: '1503303857', rs: 'MCRC',fullname: ''},
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      height: {
        val: 62
      },
      weight: {
        val: 159
      }
    },
    personal: {
      email: 'darrenhendricks@university.com',
      phone: '(703) 322 7134',
      mobile: '(703) 734 5540',
      address: {street: '8750 Rutland Road', city: 'Bergoo', state: 'VA', zip: '20151', country: 'United States'},
      hor: {street: '5844 Metrotech Courtr', city: 'Eagletown', state: 'MD', zip: '20878', country: 'United States'},
      ssn: '9465',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Married',
      dependents: 1,
      race: 'White',
      religion: 'Protestant',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'MD925852790',
      birthPlace: 'Norfolk, MD\nUnited States'
    },
    exams: {}
  },



  // CONTRACTS
  {
    firstName: 'Dorsey',
    lastName: 'Whitaker',
    active: true,
    dob: '1995-07-02',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 5,
      activity: 'EM',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {recruiterId: '979101185', rs: 'ERR', fullname: ''},
    match: {
      usCitizen: {has: true},
      usCitizenFamily: {has: true},
      sex: {
        val: 'M'
      },
      clearance: {
        val: 0
      },
      height: {
        val: 62
      },
      weight: {
        val: 140
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 77
      },
      cl: {
        val: 80
      },
      gt: {
        val: 83
      },
      el: {
        val: 136
      },
      mm: {
        val: 73
      },
      qt: {
        val: 63
      },
      ve: {
        val: 96
      },
      dlab: {
        val: 57
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 4
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 4
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 40
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 40
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'dorseywhitaker@university.com',
      phone: '(703) 121 1160',
      mobile: '(703) 599 5466',
      address: {street: '11540 Schermerhorn Street', city: 'Fairacres', state: 'VA', zip: '20215', country: 'United States'},
      hor: {street: '16239 Moultrie Street', city: 'Geyserville', state: 'VA', zip: '20920', country: 'United States'},
      ssn: '1613',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 1,
      race: 'White',
      religion: 'Protestant',
      education: 'GED',
      language: '',
      licenseNum: 'MD334429438',
      birthPlace: 'Finzel, VA\nUnited States'
    },
    exams: {
      afqt: 91,
      gs: 44,
      ar: 48,
      wk: 44,
      pc: 49,
      mk: 92,
      as: 65,
      mc: 96,
      ao: 95,
      ei: 92,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Langley',
    lastName: 'Fernandez',
    active: true,
    dob: '1995-06-29',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 2,
      activity: 'EM',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 64
      },
      weight: {
        val: 169
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 75
      },
      cl: {
        val: 75
      },
      gt: {
        val: 62
      },
      el: {
        val: 133
      },
      mm: {
        val: 131
      },
      qt: {
        val: 124
      },
      ve: {
        val: 79
      },
      dlab: {
        val: 107
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 2
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 13
        },
        acuity: {
          val: 20
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'langleyfernandez@university.com',
      phone: '(703) 471 4418',
      mobile: '(703) 729 4524',
      address: {street: '14842 Estate Road', city: 'Darrtown', state: 'MD', zip: '20678', country: 'United States'},
      hor: {street: '16334 Boulevard Court', city: 'Shelby', state: 'MD', zip: '21300', country: 'United States'},
      ssn: '1461',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 1,
      race: 'White',
      religion: 'Muslim',
      education: 'GED',
      language: 'Arabic',
      licenseNum: 'MD238598258',
      birthPlace: 'Buxton, MD\nUnited States'
    },
    exams: {
      afqt: 89,
      gs: 79,
      ar: 37,
      wk: 99,
      pc: 92,
      mk: 57,
      as: 44,
      mc: 60,
      ao: 50,
      ei: 48,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Mark',
    lastName: 'Boyle',
    active: true,
    dob: '1996-01-20',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 2,
      activity: 'EM',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 73
      },
      weight: {
        val: 162
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 76
      },
      cl: {
        val: 132
      },
      gt: {
        val: 97
      },
      el: {
        val: 88
      },
      mm: {
        val: 112
      },
      qt: {
        val: 66
      },
      ve: {
        val: 76
      },
      dlab: {
        val: 120
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: false
        },
        color: {
          val: 13
        },
        acuity: {
          val: 20
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 200
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'marksboyle@university.com',
      phone: '(703) 201 6235',
      mobile: '(703) 185 5274',
      address: {street: '15286 Bleecker Street', city: 'Siglerville', state: 'VA', zip: '20783', country: 'United States'},
      hor: {street: '13376 Harwood Place', city: 'Kanauga', state: 'MD', zip: '20204', country: 'United States'},
      ssn: '4821',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'Pacific Islander',
      religion: 'Buddhist',
      education: 'GED',
      language: 'Spanish',
      licenseNum: 'MD806338561',
      birthPlace: 'Como, VA\nUnited States'
    },
    exams: {
      afqt: 76,
      gs: 59,
      ar: 93,
      wk: 99,
      pc: 34,
      mk: 30,
      as: 66,
      mc: 99,
      ao: 73,
      ei: 64,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Phillip',
    lastName: 'Thompson',
    active: true,
    dob: '1994-11-01',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 6,
      activity: 'OT',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 0
      },
      height: {
        val: 68
      },
      weight: {
        val: 192
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 46
      },
      cl: {
        val: 110
      },
      gt: {
        val: 123
      },
      el: {
        val: 95
      },
      mm: {
        val: 114
      },
      qt: {
        val: 81
      },
      ve: {
        val: 70
      },
      dlab: {
        val: 85
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 4
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 60
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 70
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'phillipsthompson@university.com',
      phone: '(703) 477 4583',
      mobile: '(703) 182 6343',
      address: {street: '13331 Hart Street', city: 'Clinton', state: 'MD', zip: '20816', country: 'United States'},
      hor: {street: '15398 Amber Street', city: 'Chicopee', state: 'MD', zip: '21359', country: 'United States'},
      ssn: '5911',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'N/A',
      education: 'HS',
      language: 'Portuguese',
      licenseNum: 'MD37708301',
      birthPlace: 'Hailesboro, VA\nUnited States'
    },
    exams: {
      afqt: 90,
      gs: 47,
      ar: 71,
      wk: 92,
      pc: 33,
      mk: 48,
      as: 54,
      mc: 88,
      ao: 58,
      ei: 32,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Parker',
    lastName: 'Cohen',
    active: true,
    dob: '1997-02-21',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {daysuntil: 6, activity: 'OT', active: true,note: 'PRP Screen'},
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 63
      },
      weight: {
        val: 206
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 79
      },
      cl: {
        val: 97
      },
      gt: {
        val: 115
      },
      el: {
        val: 85
      },
      mm: {
        val: 112
      },
      qt: {
        val: 121
      },
      ve: {
        val: 39
      },
      dlab: {
        val: 52
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 4
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 2
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 5
        },
        acuity: {
          val: 25
        },
        acuity1: {
          val: 60
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'parkercohen@ecbi.com',
      phone: '(703) 328 5221',
      mobile: '(703) 433 3117',
      address: {street: '8150 Nolans Lane', city: 'Gorst', state: 'MD', zip: '20409', country: 'United States'},
      hor: {street: '16171 Harkness Avenue', city: 'Derwood', state: 'MD', zip: '21857', country: 'United States'},
      ssn: '1980',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 1,
      race: 'Black',
      religion: 'Buddhist',
      education: 'GED',
      language: 'Portuguese',
      licenseNum: 'MD279950266',
      birthPlace: 'Verdi, MD\nUnited States'
    },
    exams: {
      afqt: 86,
      gs: 76,
      ar: 46,
      wk: 71,
      pc: 67,
      mk: 60,
      as: 65,
      mc: 40,
      ao: 62,
      ei: 55,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'John',
    lastName: 'Norris',
    active: true,
    dob: '1998-07-19',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 3,
      activity: 'OT',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 69
      },
      weight: {
        val: 149
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 39
      },
      cl: {
        val: 99
      },
      gt: {
        val: 82
      },
      el: {
        val: 68
      },
      mm: {
        val: 99
      },
      qt: {
        val: 88
      },
      ve: {
        val: 44
      },
      dlab: {
        val: 32
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 3
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 2
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 3
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 2
      }
    },
    personal: {
      email: 'karennorris@university.com',
      phone: '(703) 321 6504',
      mobile: '(703) 635 2116',
      address: {street: '8165 Varick Avenue', city: 'Colton', state: 'MD', zip: '20554', country: 'United States'},
      hor: {street: '6459 Ovington Court', city: 'Hardyville', state: 'MD', zip: '20861', country: 'United States'},
      ssn: '7540',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 1,
      race: 'White',
      religion: 'Buddhist',
      education: 'HS',
      language: '',
      licenseNum: 'MD734828626',
      birthPlace: 'Websterville, VA\nUnited States'
    },
    exams: {
      afqt: 75,
      gs: 47,
      ar: 31,
      wk: 37,
      pc: 45,
      mk: 67,
      as: 42,
      mc: 42,
      ao: 64,
      ei: 78,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Cameron',
    lastName: 'Love',
    active: true,
    dob: '1994-09-24',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 5,
      activity: 'HV',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 64
      },
      weight: {
        val: 190
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 87
      },
      cl: {
        val: 100
      },
      gt: {
        val: 134
      },
      el: {
        val: 123
      },
      mm: {
        val: 107
      },
      qt: {
        val: 91
      },
      ve: {
        val: 94
      },
      dlab: {
        val: 56
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 20
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 50
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'cameronlove@university.com',
      phone: '(703) 555 9232',
      mobile: '(703) 670 7503',
      address: {street: '14128 Adelphi Street', city: 'Morriston', state: 'VA', zip: '20099', country: 'United States'},
      hor: {street: '5722 Hamilton Walk', city: 'Wintersburg', state: 'MD', zip: '20704', country: 'United States'},
      ssn: '2444',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'Black',
      religion: 'Muslim',
      education: 'GED',
      language: '',
      licenseNum: 'MD27394526',
      birthPlace: 'Boomer, MD\nUnited States'
    },
    exams: {
      afqt: 64,
      gs: 85,
      ar: 90,
      wk: 54,
      pc: 96,
      mk: 68,
      as: 37,
      mc: 88,
      ao: 58,
      ei: 68,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Ibrahim',
    lastName: 'Holland',
    active: true,
    dob: '1997-01-20',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 8,
      activity: 'TC',
      active: true,
      note: 'Pre-Shipping discussion'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 66
      },
      weight: {
        val: 164
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 96
      },
      cl: {
        val: 134
      },
      gt: {
        val: 125
      },
      el: {
        val: 106
      },
      mm: {
        val: 122
      },
      qt: {
        val: 140
      },
      ve: {
        val: 116
      },
      dlab: {
        val: 87
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 60
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'ibrahimholland@university.com',
      phone: '(703) 607 8798',
      mobile: '(703) 559 5050',
      address: {street: '10798 Seaview Court', city: 'Homeworth', state: 'VA', zip: '20754', country: 'United States'},
      hor: {street: '12387 Dorset Street', city: 'Trexlertown', state: 'VA', zip: '21775', country: 'United States'},
      ssn: '4231',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'Buddhist',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'VA286220423',
      birthPlace: 'Lafferty, MD\nUnited States'
    },
    exams: {
      afqt: 57,
      gs: 55,
      ar: 78,
      wk: 52,
      pc: 87,
      mk: 95,
      as: 83,
      mc: 85,
      ao: 54,
      ei: 54,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Ricky',
    lastName: 'Hurley',
    active: true,
    dob: '1996-02-24',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 10,
      activity: 'EM',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 68
      },
      weight: {
        val: 148
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 86
      },
      cl: {
        val: 99
      },
      gt: {
        val: 113
      },
      el: {
        val: 124
      },
      mm: {
        val: 75
      },
      qt: {
        val: 75
      },
      ve: {
        val: 87
      },
      dlab: {
        val: 163
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 3
        },
        violations: {
          val: 2
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 2
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 200
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'orahurley@university.com',
      phone: '(703) 639 7585',
      mobile: '(703) 705 5635',
      address: {street: '12608 Bevy Court', city: 'Allamuchy', state: 'MD', zip: '20518', country: 'United States'},
      hor: {street: '8996 Court Street', city: 'Smeltertown', state: 'MD', zip: '20601', country: 'United States'},
      ssn: '5099',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Married',
      dependents: 1,
      race: 'Black',
      religion: 'Protestant',
      education: 'GED',
      language: 'French',
      licenseNum: 'MD520659150',
      birthPlace: 'Virgie, MD\nUnited States'
    },
    exams: {
      afqt: 60,
      gs: 90,
      ar: 60,
      wk: 31,
      pc: 99,
      mk: 93,
      as: 63,
      mc: 85,
      ao: 39,
      ei: 40,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Lonny',
    lastName: 'Tate',
    active: true,
    dob: '1998-07-26',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 9,
      activity: 'TC',
      active: true,
      note: 'Pre-Shipping discussion'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 0
      },
      height: {
        val: 65
      },
      weight: {
        val: 189
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 53
      },
      cl: {
        val: 116
      },
      gt: {
        val: 128
      },
      el: {
        val: 55
      },
      mm: {
        val: 73
      },
      qt: {
        val: 93
      },
      ve: {
        val: 99
      },
      dlab: {
        val: 114
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 5
        },
        acuity: {
          val: 60
        },
        acuity1: {
          val: 25
        },
        acuity2: {
          val: 70
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'lorietate@university.com',
      phone: '(703) 583 5595',
      mobile: '(703) 792 8850',
      address: {street: '858 Clymer Street', city: 'Worcester', state: 'VA', zip: '20537', country: 'United States'},
      hor: {street: '3413 Highland Avenue', city: 'Sexton', state: 'MD', zip: '21457', country: 'United States'},
      ssn: '3193',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'Black',
      religion: 'N/A',
      education: 'BS',
      language: 'Spanish',
      licenseNum: 'MD503217402',
      birthPlace: 'Nelson, VA\nUnited States'
    },
    exams: {
      afqt: 75,
      gs: 91,
      ar: 89,
      wk: 99,
      pc: 40,
      mk: 34,
      as: 67,
      mc: 48,
      ao: 62,
      ei: 67,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },



    //300 CONTRACTS
  {
    firstName: 'Cesaria',
    lastName: 'Tayyib',
    active: true,
    dob: '1996-04-26',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 3,
      activity: 'EM',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 71
      },
      weight: {
        val: 192
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 64
      },
      cl: {
        val: 148
      },
      gt: {
        val: 73
      },
      el: {
        val: 107
      },
      mm: {
        val: 97
      },
      qt: {
        val: 52
      },
      ve: {
        val: 99
      },
      dlab: {
        val: 80
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 2
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 100
        },
        acuity1: {
          val: 60
        },
        acuity2: {
          val: 40
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'cesariatayyib@pizzapalace.com',
      phone: '(703) 202 1678',
      mobile: '(703) 426 8753',
      address: {street: '2077 Columbia Place', city: 'Slovan', state: 'VA', zip: '20326', country: 'United States'},
      hor: {street: '23078 Linden Street', city: 'Florence', state: 'MD', zip: '21315', country: 'United States'},
      ssn: '3975',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Buddhist',
      education: 'MA',
      language: 'Spanish',
      licenseNum: 'VA175243720',
      birthPlace: 'Falconaire, VA\nUnited States'
    },
    exams: {
      afqt: 63,
      gs: 33,
      ar: 77,
      wk: 54,
      pc: 45,
      mk: 74,
      as: 65,
      mc: 52,
      ao: 98,
      ei: 76,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'William',
    lastName: 'Foley',
    active: true,
    dob: '1998-09-14',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 4,
      activity: 'OT',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 69
      },
      weight: {
        val: 200
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 50
      },
      cl: {
        val: 83
      },
      gt: {
        val: 90
      },
      el: {
        val: 111
      },
      mm: {
        val: 71
      },
      qt: {
        val: 83
      },
      ve: {
        val: 40
      },
      dlab: {
        val: 162
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 2
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 8
        },
        acuity: {
          val: 40
        },
        acuity1: {
          val: 200
        },
        acuity2: {
          val: 100
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 2
      }
    },
    personal: {
      email: 'wfoley@aol.com',
      phone: '(703) 782 1654',
      mobile: '(703) 164 5187',
      address: {street: '15617 Oxford Street', city: 'Stagecoach', state: 'MD', zip: '20727', country: 'United States'},
      hor: {street: '8776 Eckford Street', city: 'Katonah', state: 'VA', zip: '20595', country: 'United States'},
      ssn: '5456',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'Muslim',
      education: 'GED',
      language: '',
      licenseNum: 'MD37835041',
      birthPlace: 'Urie, VA\nUnited States'
    },
    exams: {
      afqt: 92,
      gs: 61,
      ar: 91,
      wk: 83,
      pc: 36,
      mk: 76,
      as: 45,
      mc: 82,
      ao: 62,
      ei: 42,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Dennis',
    lastName: 'Franks',
    active: true,
    dob: '1995-06-04',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 3,
      activity: 'HV',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 64
      },
      weight: {
        val: 221
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 75
      },
      cl: {
        val: 78
      },
      gt: {
        val: 57
      },
      el: {
        val: 95
      },
      mm: {
        val: 129
      },
      qt: {
        val: 105
      },
      ve: {
        val: 83
      },
      dlab: {
        val: 87
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 3
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 200
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'dennisfranks@gmail.com',
      phone: '(703) 305 5365',
      mobile: '(703) 464 6822',
      address: {street: '14409 Lott Avenue', city: 'Oley', state: 'VA', zip: '20169', country: 'United States'},
      hor: {street: '19752 Coventry Road', city: 'Courtland', state: 'MD', zip: '21853', country: 'United States'},
      ssn: '3428',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Pacific Islander',
      religion: 'Buddhist',
      education: 'GED',
      language: '',
      licenseNum: 'MD271571527',
      birthPlace: 'Aurora, MD\nUnited States'
    },
    exams: {
      afqt: 55,
      gs: 53,
      ar: 73,
      wk: 44,
      pc: 33,
      mk: 32,
      as: 31,
      mc: 62,
      ao: 54,
      ei: 97,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Alexander',
    lastName: 'Miller',
    active: true,
    dob: '1995-09-05',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 3,
      activity: 'HV',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 73
      },
      weight: {
        val: 171
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 86
      },
      cl: {
        val: 135
      },
      gt: {
        val: 114
      },
      el: {
        val: 139
      },
      mm: {
        val: 58
      },
      qt: {
        val: 71
      },
      ve: {
        val: 38
      },
      dlab: {
        val: 121
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 11
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 100
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'collinsmiller@gmail.com',
      phone: '(703) 197 9546',
      mobile: '(703) 718 7297',
      address: {street: '4974 Kiely Place', city: 'Ironton', state: 'VA', zip: '20420', country: 'United States'},
      hor: {street: '18566 Royce Place', city: 'Brownlee', state: 'MD', zip: '21521', country: 'United States'},
      ssn: '4353',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Jewish',
      education: 'MA',
      language: 'Spanish',
      licenseNum: 'VA211555910',
      birthPlace: 'Gambrills, VA\nUnited States'
    },
    exams: {
      afqt: 90,
      gs: 84,
      ar: 90,
      wk: 80,
      pc: 84,
      mk: 45,
      as: 49,
      mc: 86,
      ao: 36,
      ei: 35,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Scott',
    lastName: 'Castro',
    active: true,
    dob: '1995-06-02',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 0,
      activity: 'HV',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 0
      },
      height: {
        val: 61
      },
      weight: {
        val: 209
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 96
      },
      cl: {
        val: 68
      },
      gt: {
        val: 115
      },
      el: {
        val: 93
      },
      mm: {
        val: 55
      },
      qt: {
        val: 77
      },
      ve: {
        val: 48
      },
      dlab: {
        val: 119
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: true
        },
        color: {
          val: 8
        },
        acuity: {
          val: 20
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 25
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'scottcastro@gmail.com',
      phone: '(703) 724 3918',
      mobile: '(703) 334 1172',
      address: {street: '10426 Hart Place', city: 'Seymour', state: 'MD', zip: '20936', country: 'United States'},
      hor: {street: '12654 Beaver Street', city: 'Byrnedale', state: 'MD', zip: '21477', country: 'United States'},
      ssn: '1780',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'BS',
      language: 'Arabic',
      licenseNum: 'MD652524939',
      birthPlace: 'Emison, VA\nUnited States'
    },
    exams: {
      afqt: 72,
      gs: 41,
      ar: 98,
      wk: 49,
      pc: 42,
      mk: 68,
      as: 53,
      mc: 45,
      ao: 31,
      ei: 81,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Stacie',
    lastName: 'Mustafa',
    active: true,
    dob: '1998-04-21',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 2,
      activity: 'OT',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 70
      },
      weight: {
        val: 219
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 43
      },
      cl: {
        val: 94
      },
      gt: {
        val: 101
      },
      el: {
        val: 85
      },
      mm: {
        val: 121
      },
      qt: {
        val: 95
      },
      ve: {
        val: 74
      },
      dlab: {
        val: 112
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 4
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'staciemustafa@gmail.com',
      phone: '(703) 370 7298',
      mobile: '(703) 336 5515',
      address: {street: '16333 Grove Street', city: 'Fruitdale', state: 'MD', zip: '20107', country: 'United States'},
      hor: {street: '7924 Bethel Loop', city: 'Kaka', state: 'MD', zip: '20345', country: 'United States'},
      ssn: '3305',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'Catholic',
      education: 'HS',
      language: '',
      licenseNum: 'VA662289283',
      birthPlace: 'Kanauga, VA\nUnited States'
    },
    exams: {
      afqt: 83,
      gs: 74,
      ar: 62,
      wk: 79,
      pc: 57,
      mk: 84,
      as: 91,
      mc: 49,
      ao: 60,
      ei: 56,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Lee',
    lastName: 'Moody',
    active: true,
    dob: '1997-04-27',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 2,
      activity: 'OT',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 64
      },
      weight: {
        val: 162
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 77
      },
      cl: {
        val: 140
      },
      gt: {
        val: 96
      },
      el: {
        val: 105
      },
      mm: {
        val: 83
      },
      qt: {
        val: 88
      },
      ve: {
        val: 104
      },
      dlab: {
        val: 66
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 4
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 40
        },
        acuity2: {
          val: 60
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'franciscamoody@gmail.com',
      phone: '(703) 125 5650',
      mobile: '(703) 401 2106',
      address: {street: '16541 Broome Street', city: 'Fredericktown', state: 'MD', zip: '20510', country: 'United States'},
      hor: {street: '7089 Cropsey Avenue', city: 'Riverton', state: 'VA', zip: '21481', country: 'United States'},
      ssn: '8786',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 1,
      race: 'Pacific Islander',
      religion: 'Protestant',
      education: 'GED',
      language: 'Akan',
      licenseNum: 'MD650030342',
      birthPlace: 'Crumpler, MD\nUnited States'
    },
    exams: {
      afqt: 61,
      gs: 47,
      ar: 69,
      wk: 58,
      pc: 42,
      mk: 97,
      as: 65,
      mc: 63,
      ao: 31,
      ei: 72,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Vasha',
    lastName: 'German',
    active: true,
    dob: '1997-09-02',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 6,
      activity: 'OT',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 71
      },
      weight: {
        val: 225
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 99
      },
      cl: {
        val: 55
      },
      gt: {
        val: 98
      },
      el: {
        val: 112
      },
      mm: {
        val: 97
      },
      qt: {
        val: 74
      },
      ve: {
        val: 53
      },
      dlab: {
        val: 46
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 4
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 8
        },
        acuity: {
          val: 40
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'jerismith@aol.com',
      phone: '(703) 670 6431',
      mobile: '(703) 469 9480',
      address: {street: '6799 Gunther Place', city: 'Dowling', state: 'MD', zip: '20218', country: 'United States'},
      hor: {street: '1097 Degraw Street', city: 'Bloomington', state: 'MD', zip: '20447', country: 'United States'},
      ssn: '2041',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'Jewish',
      education: 'HS',
      language: 'French',
      licenseNum: 'MD466120367',
      birthPlace: 'Leola, MD\nUnited States'
    },
    exams: {
      afqt: 67,
      gs: 75,
      ar: 85,
      wk: 92,
      pc: 88,
      mk: 93,
      as: 97,
      mc: 44,
      ao: 62,
      ei: 59,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Owen',
    lastName: 'Fitzgerald',
    active: true,
    dob: '1994-04-20',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 2,
      activity: 'EM',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 0
      },
      height: {
        val: 69
      },
      weight: {
        val: 151
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 93
      },
      cl: {
        val: 94
      },
      gt: {
        val: 128
      },
      el: {
        val: 131
      },
      mm: {
        val: 70
      },
      qt: {
        val: 87
      },
      ve: {
        val: 73
      },
      dlab: {
        val: 40
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 11
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 25
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'myrtlefitzgerald@gmail.com',
      phone: '(703) 692 4593',
      mobile: '(703) 351 3062',
      address: {street: '12790 Alton Place', city: 'Blue', state: 'VA', zip: '20722', country: 'United States'},
      hor: {street: '15565 Roosevelt Court', city: 'Muse', state: 'VA', zip: '20626', country: 'United States'},
      ssn: '8795',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Asian',
      religion: 'Muslim',
      education: 'MA',
      language: 'Arabic',
      licenseNum: 'MD723420631',
      birthPlace: 'Lookingglass, MD\nUnited States'
    },
    exams: {
      afqt: 80,
      gs: 30,
      ar: 63,
      wk: 84,
      pc: 74,
      mk: 97,
      as: 36,
      mc: 56,
      ao: 85,
      ei: 74,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Lars',
    lastName: 'Spears',
    active: true,
    dob: '2000-03-28',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 0,
      activity: 'TC',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 0
      },
      height: {
        val: 62
      },
      weight: {
        val: 217
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 39
      },
      cl: {
        val: 145
      },
      gt: {
        val: 105
      },
      el: {
        val: 63
      },
      mm: {
        val: 89
      },
      qt: {
        val: 83
      },
      ve: {
        val: 82
      },
      dlab: {
        val: 140
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 3
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 4
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 13
        },
        acuity: {
          val: 100
        },
        acuity1: {
          val: 25
        },
        acuity2: {
          val: 70
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'duffyspears@aol.com',
      phone: '(703) 313 7187',
      mobile: '(703) 492 1614',
      address: {street: '14420 Schenck Avenue', city: 'Kipp', state: 'VA', zip: '20408', country: 'United States'},
      hor: {street: '4024 Ovington Avenue', city: 'Waverly', state: 'MD', zip: '21397', country: 'United States'},
      ssn: '8722',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'Muslim',
      education: 'HS',
      language: 'French',
      licenseNum: 'VA793891607',
      birthPlace: 'Topaz, MD\nUnited States'
    },
    exams: {
      afqt: 55,
      gs: 69,
      ar: 84,
      wk: 53,
      pc: 83,
      mk: 84,
      as: 95,
      mc: 63,
      ao: 38,
      ei: 60,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Jorje',
    lastName: 'Vasquez',
    active: true,
    dob: '1995-11-27',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 5,
      activity: 'EM',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 68
      },
      weight: {
        val: 151
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 49
      },
      cl: {
        val: 127
      },
      gt: {
        val: 124
      },
      el: {
        val: 108
      },
      mm: {
        val: 104
      },
      qt: {
        val: 55
      },
      ve: {
        val: 97
      },
      dlab: {
        val: 101
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 4
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 8
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'mooneyvasquez@aol.com',
      phone: '(703) 620 6688',
      mobile: '(703) 662 7675',
      address: {street: '6869 Malta Street', city: 'Weogufka', state: 'VA', zip: '20267', country: 'United States'},
      hor: {street: '7015 Mersereau Court', city: 'Salunga', state: 'MD', zip: '20117', country: 'United States'},
      ssn: '8522',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 1,
      race: 'White',
      religion: 'Buddhist',
      education: 'BS',
      language: 'French',
      licenseNum: 'MD613872349',
      birthPlace: 'Williams, VA\nUnited States'
    },
    exams: {
      afqt: 94,
      gs: 96,
      ar: 60,
      wk: 82,
      pc: 69,
      mk: 69,
      as: 53,
      mc: 30,
      ao: 66,
      ei: 71,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Max',
    lastName: 'Guerrero',
    active: true,
    dob: '1995-07-16',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 2,
      activity: 'OT',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 61
      },
      weight: {
        val: 144
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 78
      },
      cl: {
        val: 123
      },
      gt: {
        val: 96
      },
      el: {
        val: 94
      },
      mm: {
        val: 98
      },
      qt: {
        val: 50
      },
      ve: {
        val: 73
      },
      dlab: {
        val: 114
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 12
        },
        acuity: {
          val: 100
        },
        acuity1: {
          val: 70
        },
        acuity2: {
          val: 70
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'guerrerohunt@aol.com',
      phone: '(703) 627 4004',
      mobile: '(703) 759 2572',
      address: {street: '4134 Aberdeen Street', city: 'Roeville', state: 'MD', zip: '20447', country: 'United States'},
      hor: {street: '22363 Clara Street', city: 'Roulette', state: 'VA', zip: '20550', country: 'United States'},
      ssn: '8187',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'N/A',
      education: 'GED',
      language: 'Spanish',
      licenseNum: 'MD154735156',
      birthPlace: 'Hoagland, MD\nUnited States'
    },
    exams: {
      afqt: 59,
      gs: 92,
      ar: 49,
      wk: 91,
      pc: 62,
      mk: 45,
      as: 55,
      mc: 30,
      ao: 53,
      ei: 87,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Ella',
    lastName: 'Bird',
    active: true,
    dob: '1996-11-03',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 2,
      activity: 'TC',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 61
      },
      weight: {
        val: 224
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 98
      },
      cl: {
        val: 117
      },
      gt: {
        val: 87
      },
      el: {
        val: 90
      },
      mm: {
        val: 66
      },
      qt: {
        val: 51
      },
      ve: {
        val: 107
      },
      dlab: {
        val: 140
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 11
        },
        acuity: {
          val: 200
        },
        acuity1: {
          val: 70
        },
        acuity2: {
          val: 40
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'ellabird@aol.com',
      phone: '(703) 595 6314',
      mobile: '(703) 692 3750',
      address: {street: '13500 Rochester Avenue', city: 'Sylvanite', state: 'MD', zip: '20357', country: 'United States'},
      hor: {street: '8151 Baltic Street', city: 'Ribera', state: 'VA', zip: '21014', country: 'United States'},
      ssn: '9448',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'GED',
      language: '',
      licenseNum: 'VA747438781',
      birthPlace: 'Carrsville, VA\nUnited States'
    },
    exams: {
      afqt: 77,
      gs: 50,
      ar: 54,
      wk: 70,
      pc: 63,
      mk: 66,
      as: 54,
      mc: 58,
      ao: 86,
      ei: 62,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Snider',
    lastName: 'Hays',
    active: true,
    dob: '2000-10-01',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 7,
      activity: 'OT',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 66
      },
      weight: {
        val: 198
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 71
      },
      cl: {
        val: 87
      },
      gt: {
        val: 72
      },
      el: {
        val: 127
      },
      mm: {
        val: 121
      },
      qt: {
        val: 102
      },
      ve: {
        val: 41
      },
      dlab: {
        val: 43
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 4
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 25
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'sniderhays@gmail.com',
      phone: '(703) 486 4404',
      mobile: '(703) 253 3241',
      address: {street: '2867 Montgomery Place', city: 'Gouglersville', state: 'MD', zip: '20274', country: 'United States'},
      hor: {street: '3242 Thames Street', city: 'Spelter', state: 'VA', zip: '21872', country: 'United States'},
      ssn: '5534',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'N/A',
      education: 'GED',
      language: '',
      licenseNum: 'MD563289681',
      birthPlace: 'Bynum, MD\nUnited States'
    },
    exams: {
      afqt: 50,
      gs: 44,
      ar: 67,
      wk: 76,
      pc: 81,
      mk: 81,
      as: 68,
      mc: 41,
      ao: 73,
      ei: 69,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Antony',
    lastName: 'Gutierrez',
    active: true,
    dob: '1994-09-23',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 8,
      activity: 'OT',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 65
      },
      weight: {
        val: 192
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 63
      },
      cl: {
        val: 131
      },
      gt: {
        val: 55
      },
      el: {
        val: 131
      },
      mm: {
        val: 74
      },
      qt: {
        val: 129
      },
      ve: {
        val: 77
      },
      dlab: {
        val: 105
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: true
        },
        color: {
          val: 5
        },
        acuity: {
          val: 60
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 50
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'corneliagutierrez@aol.com',
      phone: '(703) 269 1914',
      mobile: '(703) 797 2119',
      address: {street: '5880 Desmond Court', city: 'Washington', state: 'VA', zip: '20912', country: 'United States'},
      hor: {street: '13285 Lamont Court', city: 'Gasquet', state: 'VA', zip: '21262', country: 'United States'},
      ssn: '6642',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'N/A',
      education: 'GED',
      language: 'Arabic',
      licenseNum: 'MD878343291',
      birthPlace: 'Noblestown, MD\nUnited States'
    },
    exams: {
      afqt: 83,
      gs: 36,
      ar: 89,
      wk: 69,
      pc: 36,
      mk: 48,
      as: 62,
      mc: 62,
      ao: 59,
      ei: 54,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Andy',
    lastName: 'Simpson',
    active: true,
    dob: '1994-08-14',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 9,
      activity: 'HV',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 72
      },
      weight: {
        val: 195
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 73
      },
      cl: {
        val: 77
      },
      gt: {
        val: 85
      },
      el: {
        val: 106
      },
      mm: {
        val: 101
      },
      qt: {
        val: 112
      },
      ve: {
        val: 110
      },
      dlab: {
        val: 159
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 14
        },
        acuity: {
          val: 40
        },
        acuity1: {
          val: 60
        },
        acuity2: {
          val: 200
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'fryesimpson@outlook.com',
      phone: '(703) 586 7639',
      mobile: '(703) 261 1285',
      address: {street: '8853 Wolf Place', city: 'Marne', state: 'MD', zip: '20746', country: 'United States'},
      hor: {street: '15895 Holly Street', city: 'Warsaw', state: 'VA', zip: '21473', country: 'United States'},
      ssn: '7374',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'MA',
      language: 'Arabic',
      licenseNum: 'VA898737939',
      birthPlace: 'Idledale, VA\nUnited States'
    },
    exams: {
      afqt: 54,
      gs: 57,
      ar: 31,
      wk: 82,
      pc: 37,
      mk: 83,
      as: 58,
      mc: 55,
      ao: 92,
      ei: 59,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Kendrick',
    lastName: 'Padilla',
    active: true,
    dob: '1994-10-08',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 10,
      activity: 'HV',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 65
      },
      weight: {
        val: 138
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 91
      },
      cl: {
        val: 75
      },
      gt: {
        val: 65
      },
      el: {
        val: 118
      },
      mm: {
        val: 129
      },
      qt: {
        val: 76
      },
      ve: {
        val: 68
      },
      dlab: {
        val: 69
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 2
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 12
        },
        acuity: {
          val: 40
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'kittypadilla@aol.com',
      phone: '(703) 681 5224',
      mobile: '(703) 648 7444',
      address: {street: '16685 Noll Street', city: 'Bowmansville', state: 'VA', zip: '20204', country: 'United States'},
      hor: {street: '2237 Corbin Place', city: 'Bourg', state: 'MD', zip: '20987', country: 'United States'},
      ssn: '5875',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'Black',
      religion: 'Catholic',
      education: 'BS',
      language: 'French',
      licenseNum: 'MD465852555',
      birthPlace: 'Dalton, VA\nUnited States'
    },
    exams: {
      afqt: 74,
      gs: 74,
      ar: 41,
      wk: 43,
      pc: 32,
      mk: 77,
      as: 70,
      mc: 99,
      ao: 45,
      ei: 78,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Marco',
    lastName: 'Langley',
    active: true,
    dob: '2000-12-29',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 9,
      activity: 'TC',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 61
      },
      weight: {
        val: 177
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 46
      },
      cl: {
        val: 119
      },
      gt: {
        val: 121
      },
      el: {
        val: 116
      },
      mm: {
        val: 88
      },
      qt: {
        val: 57
      },
      ve: {
        val: 68
      },
      dlab: {
        val: 56
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 200
        },
        acuity1: {
          val: 200
        },
        acuity2: {
          val: 40
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 2
      }
    },
    personal: {
      email: 'marianlangley@gmail.com',
      phone: '(703) 655 4473',
      mobile: '(703) 199 7573',
      address: {street: '2591 Gain Court', city: 'Iberia', state: 'MD', zip: '20624', country: 'United States'},
      hor: {street: '3770 Lombardy Street', city: 'Tryon', state: 'VA', zip: '20167', country: 'United States'},
      ssn: '9879',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Buddhist',
      education: 'MA',
      language: 'Spanish',
      licenseNum: 'VA272284835',
      birthPlace: 'Coldiron, VA\nUnited States'
    },
    exams: {
      afqt: 83,
      gs: 91,
      ar: 93,
      wk: 84,
      pc: 90,
      mk: 39,
      as: 54,
      mc: 31,
      ao: 41,
      ei: 62,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Idris',
    lastName: 'Keith',
    active: true,
    dob: '1995-06-11',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 6,
      activity: 'EM',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 63
      },
      weight: {
        val: 221
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 72
      },
      cl: {
        val: 72
      },
      gt: {
        val: 89
      },
      el: {
        val: 79
      },
      mm: {
        val: 128
      },
      qt: {
        val: 65
      },
      ve: {
        val: 103
      },
      dlab: {
        val: 141
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 3
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: true
        },
        color: {
          val: 11
        },
        acuity: {
          val: 20
        },
        acuity1: {
          val: 40
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'concepcionkeith@gmail.com',
      phone: '(703) 771 9682',
      mobile: '(703) 246 8476',
      address: {street: '6467 Matthews Place', city: 'Cumberland', state: 'VA', zip: '20243', country: 'United States'},
      hor: {street: '16305 Legion Street', city: 'Clara', state: 'MD', zip: '20855', country: 'United States'},
      ssn: '1447',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 3,
      race: 'White',
      religion: 'Catholic',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'MD594263038',
      birthPlace: 'Blairstown, MD\nUnited States'
    },
    exams: {
      afqt: 76,
      gs: 74,
      ar: 91,
      wk: 81,
      pc: 99,
      mk: 45,
      as: 44,
      mc: 66,
      ao: 63,
      ei: 67,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Wyatt',
    lastName: 'Neal',
    active: true,
    dob: '1997-11-03',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 8,
      activity: 'TC',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 61
      },
      weight: {
        val: 192
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 91
      },
      cl: {
        val: 149
      },
      gt: {
        val: 108
      },
      el: {
        val: 95
      },
      mm: {
        val: 88
      },
      qt: {
        val: 108
      },
      ve: {
        val: 32
      },
      dlab: {
        val: 110
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 5
        },
        acuity: {
          val: 25
        },
        acuity1: {
          val: 25
        },
        acuity2: {
          val: 60
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'weaverneal@gmail.com',
      phone: '(703) 347 1469',
      mobile: '(703) 340 9613',
      address: {street: '15272 Vandam Street', city: 'Ola', state: 'MD', zip: '20422', country: 'United States'},
      hor: {street: '18867 Dakota Place', city: 'Sunwest', state: 'VA', zip: '21121', country: 'United States'},
      ssn: '6919',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'N/A',
      education: 'HS',
      language: 'Arabic',
      licenseNum: 'MD519515311',
      birthPlace: 'Ezel, MD\nUnited States'
    },
    exams: {
      afqt: 99,
      gs: 78,
      ar: 71,
      wk: 73,
      pc: 95,
      mk: 58,
      as: 63,
      mc: 79,
      ao: 95,
      ei: 86,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Ibrahim',
    lastName: 'Azikiwe',
    active: true,
    dob: '2000-10-19',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 6,
      activity: 'TC',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 66
      },
      weight: {
        val: 138
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 45
      },
      cl: {
        val: 94
      },
      gt: {
        val: 73
      },
      el: {
        val: 82
      },
      mm: {
        val: 79
      },
      qt: {
        val: 80
      },
      ve: {
        val: 51
      },
      dlab: {
        val: 160
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: true
        },
        color: {
          val: 5
        },
        acuity: {
          val: 100
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 70
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'ibazikiwe@gmail.com',
      phone: '(703) 342 2727',
      mobile: '(703) 678 2377',
      address: {street: '2394 Elizabeth Place', city: 'Remington', state: 'VA', zip: '20283', country: 'United States'},
      hor: {street: '5086 Christopher Avenue', city: 'Farmington', state: 'VA', zip: '20221', country: 'United States'},
      ssn: '1704',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'GED',
      language: 'Arabic',
      licenseNum: 'MD264813268',
      birthPlace: 'Robbins, VA\nUnited States'
    },
    exams: {
      afqt: 58,
      gs: 39,
      ar: 65,
      wk: 58,
      pc: 73,
      mk: 98,
      as: 38,
      mc: 67,
      ao: 96,
      ei: 44,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Harry',
    lastName: 'Levin',
    active: true,
    dob: '1999-03-15',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 2,
      activity: 'OT',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 73
      },
      weight: {
        val: 176
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 79
      },
      cl: {
        val: 95
      },
      gt: {
        val: 134
      },
      el: {
        val: 75
      },
      mm: {
        val: 88
      },
      qt: {
        val: 79
      },
      ve: {
        val: 67
      },
      dlab: {
        val: 77
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 5
        },
        acuity: {
          val: 70
        },
        acuity1: {
          val: 40
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'harrylevin@gmail.com',
      phone: '(703) 448 3417',
      mobile: '(703) 262 6228',
      address: {street: '1551 Hutchinson Court', city: 'Lutsen', state: 'MD', zip: '20129', country: 'United States'},
      hor: {street: '19827 Knickerbocker Avenue', city: 'Waukeenah', state: 'VA', zip: '20452', country: 'United States'},
      ssn: '9250',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'Asian',
      religion: 'Jewish',
      education: 'HS',
      language: '',
      licenseNum: 'MD28167015',
      birthPlace: 'Dargan, VA\nUnited States'
    },
    exams: {
      afqt: 69,
      gs: 35,
      ar: 63,
      wk: 45,
      pc: 48,
      mk: 77,
      as: 65,
      mc: 92,
      ao: 60,
      ei: 66,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Asa',
    lastName: 'Hickman',
    active: true,
    dob: '1995-03-01',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 8,
      activity: 'TC',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 66
      },
      weight: {
        val: 166
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 68
      },
      cl: {
        val: 115
      },
      gt: {
        val: 100
      },
      el: {
        val: 91
      },
      mm: {
        val: 112
      },
      qt: {
        val: 92
      },
      ve: {
        val: 61
      },
      dlab: {
        val: 45
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 2
        },
        violations: {
          val: 2
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 2
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 8
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 100
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'asahickman@gmail.com',
      phone: '(703) 311 2697',
      mobile: '(703) 391 7022',
      address: {street: '7408 Dobbin Street', city: 'Lindcove', state: 'MD', zip: '20631', country: 'United States'},
      hor: {street: '12545 Montieth Street', city: 'Curtice', state: 'MD', zip: '21029', country: 'United States'},
      ssn: '5927',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Muslim',
      education: 'GED',
      language: 'Spanish',
      licenseNum: 'VA97311833',
      birthPlace: 'Healy, MD\nUnited States'
    },
    exams: {
      afqt: 92,
      gs: 71,
      ar: 47,
      wk: 78,
      pc: 31,
      mk: 32,
      as: 30,
      mc: 81,
      ao: 72,
      ei: 63,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Krishna',
    lastName: 'Mandavi',
    active: true,
    dob: '1994-04-17',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 1,
      activity: 'OT',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 63
      },
      weight: {
        val: 161
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 49
      },
      cl: {
        val: 79
      },
      gt: {
        val: 113
      },
      el: {
        val: 126
      },
      mm: {
        val: 52
      },
      qt: {
        val: 98
      },
      ve: {
        val: 76
      },
      dlab: {
        val: 61
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 4
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 3
        },
        acuity: {
          val: 40
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 100
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'krishnamandavi@outlook.com',
      phone: '(703) 579 1078',
      mobile: '(703) 755 2078',
      address: {street: '326 Hampton Place', city: 'Kenmar', state: 'VA', zip: '20197', country: 'United States'},
      hor: {street: '19962 Dumont Avenue', city: 'Eggertsville', state: 'MD', zip: '20391', country: 'United States'},
      ssn: '9789',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'N/A',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'MD315216329',
      birthPlace: 'Martell, MD\nUnited States'
    },
    exams: {
      afqt: 81,
      gs: 61,
      ar: 32,
      wk: 55,
      pc: 48,
      mk: 96,
      as: 81,
      mc: 51,
      ao: 77,
      ei: 71,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Chris',
    lastName: 'Campbell',
    active: true,
    dob: '1996-04-19',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 4,
      activity: 'TC',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 70
      },
      weight: {
        val: 184
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 59
      },
      cl: {
        val: 111
      },
      gt: {
        val: 116
      },
      el: {
        val: 112
      },
      mm: {
        val: 130
      },
      qt: {
        val: 58
      },
      ve: {
        val: 32
      },
      dlab: {
        val: 122
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 5
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 40
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'chriscampbell003@gmail.com',
      phone: '(703) 377 6792',
      mobile: '(703) 674 4078',
      address: {street: '2127 Doscher Street', city: 'Blackgum', state: 'MD', zip: '20513', country: 'United States'},
      hor: {street: '15749 Whitty Lane', city: 'Belva', state: 'MD', zip: '20070', country: 'United States'},
      ssn: '5112',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'Protestant',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'VA754934682',
      birthPlace: 'Gwynn, MD\nUnited States'
    },
    exams: {
      afqt: 97,
      gs: 83,
      ar: 92,
      wk: 63,
      pc: 86,
      mk: 52,
      as: 34,
      mc: 40,
      ao: 42,
      ei: 98,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Juan',
    lastName: 'Herman',
    active: true,
    dob: '1997-04-08',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 6,
      activity: 'TC',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 0
      },
      height: {
        val: 62
      },
      weight: {
        val: 161
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 66
      },
      cl: {
        val: 91
      },
      gt: {
        val: 103
      },
      el: {
        val: 74
      },
      mm: {
        val: 86
      },
      qt: {
        val: 96
      },
      ve: {
        val: 91
      },
      dlab: {
        val: 129
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 50
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 2
      }
    },
    personal: {
      email: 'juanherman@gmail.com',
      phone: '(703) 796 8954',
      mobile: '(703) 212 8506',
      address: {street: '3082 Woods Place', city: 'Concho', state: 'VA', zip: '20769', country: 'United States'},
      hor: {street: '3047 Micieli Place', city: 'Omar', state: 'VA', zip: '20586', country: 'United States'},
      ssn: '5363',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Muslim',
      education: 'GED',
      language: 'Spanish',
      licenseNum: 'VA468690936',
      birthPlace: 'Sabillasville, VA\nUnited States'
    },
    exams: {
      afqt: 69,
      gs: 99,
      ar: 73,
      wk: 58,
      pc: 81,
      mk: 48,
      as: 35,
      mc: 43,
      ao: 42,
      ei: 51,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Emil',
    lastName: 'Sosa',
    active: true,
    dob: '1999-09-10',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 5,
      activity: 'TC',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 64
      },
      weight: {
        val: 152
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 60
      },
      cl: {
        val: 143
      },
      gt: {
        val: 121
      },
      el: {
        val: 93
      },
      mm: {
        val: 66
      },
      qt: {
        val: 71
      },
      ve: {
        val: 106
      },
      dlab: {
        val: 163
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 5
        },
        acuity: {
          val: 60
        },
        acuity1: {
          val: 200
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'emilsosa@outlook.com',
      phone: '(703) 585 6232',
      mobile: '(703) 788 6386',
      address: {street: '14447 Bartlett Street', city: 'Camino', state: 'MD', zip: '20595', country: 'United States'},
      hor: {street: '5849 Lloyd Street', city: 'Cornfields', state: 'VA', zip: '21351', country: 'United States'},
      ssn: '1330',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 1,
      race: 'White',
      religion: 'Buddhist',
      education: 'MA',
      language: '',
      licenseNum: 'MD469613095',
      birthPlace: 'Cumminsville, MD\nUnited States'
    },
    exams: {
      afqt: 99,
      gs: 99,
      ar: 56,
      wk: 57,
      pc: 63,
      mk: 68,
      as: 73,
      mc: 65,
      ao: 66,
      ei: 82,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Judith',
    lastName: 'Golden',
    active: true,
    dob: '1994-07-20',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 7,
      activity: 'HV',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 0
      },
      height: {
        val: 73
      },
      weight: {
        val: 175
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 97
      },
      cl: {
        val: 115
      },
      gt: {
        val: 134
      },
      el: {
        val: 140
      },
      mm: {
        val: 67
      },
      qt: {
        val: 89
      },
      ve: {
        val: 52
      },
      dlab: {
        val: 115
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 2
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 8
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 200
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'jbgolden@hotmail.com',
      phone: '(703) 133 9156',
      mobile: '(703) 604 1861',
      address: {street: '11043 Cass Place', city: 'Morriston', state: 'VA', zip: '20827', country: 'United States'},
      hor: {street: '13813 Lincoln Terrace', city: 'Nadine', state: 'MD', zip: '20301', country: 'United States'},
      ssn: '4827',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'Black',
      religion: 'N/A',
      education: 'MA',
      language: '',
      licenseNum: 'VA654488748',
      birthPlace: 'Strong, MD\nUnited States'
    },
    exams: {
      afqt: 98,
      gs: 92,
      ar: 49,
      wk: 48,
      pc: 37,
      mk: 32,
      as: 53,
      mc: 79,
      ao: 95,
      ei: 71,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Kenra',
    lastName: 'Conrad',
    active: true,
    dob: '2000-05-22',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 7,
      activity: 'HV',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 61
      },
      weight: {
        val: 190
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 65
      },
      cl: {
        val: 95
      },
      gt: {
        val: 125
      },
      el: {
        val: 69
      },
      mm: {
        val: 106
      },
      qt: {
        val: 71
      },
      ve: {
        val: 65
      },
      dlab: {
        val: 163
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 2
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 25
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'kenraconrad@gmail.com',
      phone: '(703) 445 5164',
      mobile: '(703) 701 8510',
      address: {street: '702 Garnet Street', city: 'Grantville', state: 'MD', zip: '20636', country: 'United States'},
      hor: {street: '1371 Fuller Place', city: 'Walland', state: 'VA', zip: '20445', country: 'United States'},
      ssn: '7463',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Muslim',
      education: 'HS',
      language: '',
      licenseNum: 'VA7383667',
      birthPlace: 'Sunriver, MD\nUnited States'
    },
    exams: {
      afqt: 99,
      gs: 70,
      ar: 65,
      wk: 73,
      pc: 50,
      mk: 65,
      as: 58,
      mc: 70,
      ao: 81,
      ei: 34,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Solomon',
    lastName: 'Torres',
    active: true,
    dob: '1994-03-15',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 1,
      activity: 'HV',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 73
      },
      weight: {
        val: 142
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 50
      },
      cl: {
        val: 86
      },
      gt: {
        val: 69
      },
      el: {
        val: 62
      },
      mm: {
        val: 64
      },
      qt: {
        val: 90
      },
      ve: {
        val: 46
      },
      dlab: {
        val: 116
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 3
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 100
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'solomontorres@hotmail.com',
      phone: '(703) 487 3467',
      mobile: '(703) 589 2039',
      address: {street: '4255 Beard Street', city: 'Bentonville', state: 'MD', zip: '20271', country: 'United States'},
      hor: {street: '1328 Sullivan Place', city: 'Irwin', state: 'MD', zip: '21246', country: 'United States'},
      ssn: '2384',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Pacific Islander',
      religion: 'N/A',
      education: 'MA',
      language: 'Portuguese',
      licenseNum: 'MD526763267',
      birthPlace: 'Walker, VA\nUnited States'
    },
    exams: {
      afqt: 84,
      gs: 97,
      ar: 68,
      wk: 87,
      pc: 50,
      mk: 64,
      as: 60,
      mc: 62,
      ao: 52,
      ei: 78,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Kim',
    lastName: 'Kirby',
    active: true,
    dob: '1996-11-10',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 1,
      activity: 'OT',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 64
      },
      weight: {
        val: 212
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 84
      },
      cl: {
        val: 77
      },
      gt: {
        val: 81
      },
      el: {
        val: 83
      },
      mm: {
        val: 120
      },
      qt: {
        val: 119
      },
      ve: {
        val: 45
      },
      dlab: {
        val: 143
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: false
        },
        color: {
          val: 3
        },
        acuity: {
          val: 50
        },
        acuity1: {
          val: 40
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'kimkirby@hotmail.com',
      phone: '(703) 760 5468',
      mobile: '(703) 223 2008',
      address: {street: '6329 Celeste Court', city: 'Coyote', state: 'MD', zip: '20623', country: 'United States'},
      hor: {street: '24630 Myrtle Avenue', city: 'Herald', state: 'MD', zip: '21076', country: 'United States'},
      ssn: '2466',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'GED',
      language: 'Spanish',
      licenseNum: 'MD395449263',
      birthPlace: 'Hillsboro, VA\nUnited States'
    },
    exams: {
      afqt: 59,
      gs: 70,
      ar: 84,
      wk: 49,
      pc: 57,
      mk: 86,
      as: 69,
      mc: 44,
      ao: 49,
      ei: 32,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Andrew',
    lastName: 'McCoy',
    active: true,
    dob: '1998-03-30',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 2,
      activity: 'EM',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '1503303857', rs: 'MCRC',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 61
      },
      weight: {
        val: 145
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 65
      },
      cl: {
        val: 129
      },
      gt: {
        val: 131
      },
      el: {
        val: 64
      },
      mm: {
        val: 131
      },
      qt: {
        val: 108
      },
      ve: {
        val: 53
      },
      dlab: {
        val: 114
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 8
        },
        acuity: {
          val: 200
        },
        acuity1: {
          val: 40
        },
        acuity2: {
          val: 40
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'andymccoy@outlook.com',
      phone: '(703) 222 7182',
      mobile: '(703) 198 2886',
      address: {street: '3681 Albemarle Road', city: 'Richford', state: 'MD', zip: '20510', country: 'United States'},
      hor: {street: '5005 Elliott Walk', city: 'Blanford', state: 'MD', zip: '21825', country: 'United States'},
      ssn: '8501',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'Protestant',
      education: 'BS',
      language: 'Arabic',
      licenseNum: 'VA894333452',
      birthPlace: 'Carbonville, MD\nUnited States'
    },
    exams: {
      afqt: 96,
      gs: 40,
      ar: 95,
      wk: 86,
      pc: 38,
      mk: 79,
      as: 36,
      mc: 55,
      ao: 96,
      ei: 39,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Kim',
    lastName: 'Pena',
    active: true,
    dob: '1998-09-25',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 10,
      activity: 'OT',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 65
      },
      weight: {
        val: 187
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 79
      },
      cl: {
        val: 72
      },
      gt: {
        val: 119
      },
      el: {
        val: 105
      },
      mm: {
        val: 80
      },
      qt: {
        val: 60
      },
      ve: {
        val: 109
      },
      dlab: {
        val: 89
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 4
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 12
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 60
        },
        acuity2: {
          val: 200
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 2
      }
    },
    personal: {
      email: 'kimpena@hotmail.com',
      phone: '(703) 296 2962',
      mobile: '(703) 779 2435',
      address: {street: '14922 Lancaster Avenue', city: 'Draper', state: 'MD', zip: '20280', country: 'United States'},
      hor: {street: '2366 Tennis Court', city: 'Fairforest', state: 'MD', zip: '20878', country: 'United States'},
      ssn: '7448',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 3,
      race: 'Black',
      religion: 'Catholic',
      education: 'BS',
      language: 'Arabic',
      licenseNum: 'VA251791233',
      birthPlace: 'Edenburg, MD\nUnited States'
    },
    exams: {
      afqt: 61,
      gs: 82,
      ar: 40,
      wk: 69,
      pc: 81,
      mk: 45,
      as: 58,
      mc: 50,
      ao: 67,
      ei: 38,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Whitney',
    lastName: 'Chen',
    active: true,
    dob: '2000-07-19',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 3,
      activity: 'TC',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 68
      },
      weight: {
        val: 159
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 41
      },
      cl: {
        val: 86
      },
      gt: {
        val: 66
      },
      el: {
        val: 122
      },
      mm: {
        val: 84
      },
      qt: {
        val: 90
      },
      ve: {
        val: 87
      },
      dlab: {
        val: 36
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 2
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 11
        },
        acuity: {
          val: 60
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'whitneychen@gmail.com',
      phone: '(703) 566 3087',
      mobile: '(703) 425 5286',
      address: {street: '16723 Aurelia Court', city: 'Galesville', state: 'MD', zip: '20227', country: 'United States'},
      hor: {street: '1580 Fleet Place', city: 'Rew', state: 'MD', zip: '21439', country: 'United States'},
      ssn: '3130',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 3,
      race: 'White',
      religion: 'Buddhist',
      education: 'MA',
      language: 'Spanish',
      licenseNum: 'MD56407726',
      birthPlace: 'Gardiner, MD\nUnited States'
    },
    exams: {
      afqt: 97,
      gs: 93,
      ar: 41,
      wk: 71,
      pc: 82,
      mk: 63,
      as: 44,
      mc: 90,
      ao: 84,
      ei: 87,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Kimberley',
    lastName: 'Rosales',
    active: true,
    dob: '1999-10-15',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 10,
      activity: 'HV',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 72
      },
      weight: {
        val: 152
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 78
      },
      cl: {
        val: 138
      },
      gt: {
        val: 76
      },
      el: {
        val: 88
      },
      mm: {
        val: 63
      },
      qt: {
        val: 74
      },
      ve: {
        val: 54
      },
      dlab: {
        val: 48
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 2
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 5
        },
        acuity: {
          val: 20
        },
        acuity1: {
          val: 200
        },
        acuity2: {
          val: 25
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'kimberleyrosales@hotmail.com',
      phone: '(703) 326 8845',
      mobile: '(703) 555 7443',
      address: {street: '9928 Townsend Street', city: 'Rivers', state: 'VA', zip: '20742', country: 'United States'},
      hor: {street: '2358 Village Court', city: 'Escondida', state: 'VA', zip: '20774', country: 'United States'},
      ssn: '6649',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Muslim',
      education: 'HS',
      language: 'Akan',
      licenseNum: 'VA175712523',
      birthPlace: 'Stevens, MD\nUnited States'
    },
    exams: {
      afqt: 72,
      gs: 87,
      ar: 52,
      wk: 66,
      pc: 52,
      mk: 37,
      as: 55,
      mc: 59,
      ao: 99,
      ei: 73,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Dawn',
    lastName: 'Jefferson',
    active: true,
    dob: '1995-06-20',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 6,
      activity: 'HV',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 69
      },
      weight: {
        val: 164
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 80
      },
      cl: {
        val: 80
      },
      gt: {
        val: 92
      },
      el: {
        val: 89
      },
      mm: {
        val: 95
      },
      qt: {
        val: 57
      },
      ve: {
        val: 62
      },
      dlab: {
        val: 71
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 12
        },
        acuity: {
          val: 70
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 100
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'dawnjefferson@hotmail.com',
      phone: '(703) 431 8635',
      mobile: '(703) 152 2799',
      address: {street: '16263 Ivan Court', city: 'Calvary', state: 'VA', zip: '20433', country: 'United States'},
      hor: {street: '906 Surf Avenue', city: 'Sanford', state: 'VA', zip: '20606', country: 'United States'},
      ssn: '9513',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Buddhist',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'VA716032575',
      birthPlace: 'Mahtowa, VA\nUnited States'
    },
    exams: {
      afqt: 65,
      gs: 95,
      ar: 79,
      wk: 34,
      pc: 78,
      mk: 30,
      as: 44,
      mc: 47,
      ao: 62,
      ei: 53,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Moon',
    lastName: 'Berger',
    active: true,
    dob: '1999-09-15',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 10,
      activity: 'EM',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 65
      },
      weight: {
        val: 173
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 70
      },
      cl: {
        val: 63
      },
      gt: {
        val: 100
      },
      el: {
        val: 50
      },
      mm: {
        val: 85
      },
      qt: {
        val: 111
      },
      ve: {
        val: 107
      },
      dlab: {
        val: 145
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 4
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 3
        },
        acuity: {
          val: 25
        },
        acuity1: {
          val: 100
        },
        acuity2: {
          val: 200
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'moonberger@gmail.com',
      phone: '(703) 427 9504',
      mobile: '(703) 299 1002',
      address: {street: '6086 Beadel Street', city: 'Moscow', state: 'MD', zip: '20730', country: 'United States'},
      hor: {street: '9902 Croton Loop', city: 'Staples', state: 'VA', zip: '21526', country: 'United States'},
      ssn: '9084',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'N/A',
      education: 'GED',
      language: 'Akan',
      licenseNum: 'MD115746472',
      birthPlace: 'Sardis, VA\nUnited States'
    },
    exams: {
      afqt: 82,
      gs: 71,
      ar: 62,
      wk: 46,
      pc: 61,
      mk: 85,
      as: 92,
      mc: 78,
      ao: 65,
      ei: 46,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Thornton',
    lastName: 'Nguyen',
    active: true,
    dob: '1994-11-30',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 5,
      activity: 'HV',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 69
      },
      weight: {
        val: 221
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 50
      },
      cl: {
        val: 101
      },
      gt: {
        val: 130
      },
      el: {
        val: 97
      },
      mm: {
        val: 80
      },
      qt: {
        val: 131
      },
      ve: {
        val: 75
      },
      dlab: {
        val: 93
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 2
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: true
        },
        color: {
          val: 11
        },
        acuity: {
          val: 100
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 200
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'thorntonnguyen@outlook.com',
      phone: '(703) 277 3375',
      mobile: '(703) 788 9548',
      address: {street: '9230 Louise Terrace', city: 'Enlow', state: 'VA', zip: '20840', country: 'United States'},
      hor: {street: '15350 Bouck Court', city: 'Lindisfarne', state: 'MD', zip: '20244', country: 'United States'},
      ssn: '1916',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'N/A',
      education: 'BS',
      language: 'French',
      licenseNum: 'VA182611212',
      birthPlace: 'Dana, MD\nUnited States'
    },
    exams: {
      afqt: 73,
      gs: 70,
      ar: 92,
      wk: 87,
      pc: 92,
      mk: 39,
      as: 69,
      mc: 81,
      ao: 35,
      ei: 54,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Bryce',
    lastName: 'Carney',
    active: true,
    dob: '2000-02-23',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 3,
      activity: 'OT',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 66
      },
      weight: {
        val: 141
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 96
      },
      cl: {
        val: 119
      },
      gt: {
        val: 65
      },
      el: {
        val: 126
      },
      mm: {
        val: 73
      },
      qt: {
        val: 63
      },
      ve: {
        val: 98
      },
      dlab: {
        val: 163
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 100
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'bryceecarney@hotmail.com',
      phone: '(703) 357 6069',
      mobile: '(703) 133 8369',
      address: {street: '9746 Keen Court', city: 'Chemung', state: 'VA', zip: '20280', country: 'United States'},
      hor: {street: '13047 Marconi Place', city: 'Johnsonburg', state: 'VA', zip: '21710', country: 'United States'},
      ssn: '8491',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'N/A',
      education: 'BS',
      language: '',
      licenseNum: 'VA805798886',
      birthPlace: 'Moraida, MD\nUnited States'
    },
    exams: {
      afqt: 86,
      gs: 78,
      ar: 63,
      wk: 45,
      pc: 35,
      mk: 78,
      as: 79,
      mc: 56,
      ao: 41,
      ei: 58,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Cole',
    lastName: 'Eng',
    active: true,
    dob: '1996-05-22',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 1,
      activity: 'HV',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 61
      },
      weight: {
        val: 187
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 49
      },
      cl: {
        val: 126
      },
      gt: {
        val: 74
      },
      el: {
        val: 110
      },
      mm: {
        val: 126
      },
      qt: {
        val: 110
      },
      ve: {
        val: 65
      },
      dlab: {
        val: 93
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 4
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 13
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'coleeng@gmail.com',
      phone: '(703) 237 8538',
      mobile: '(703) 776 6262',
      address: {street: '4565 Kansas Place', city: 'Limestone', state: 'VA', zip: '20091', country: 'United States'},
      hor: {street: '4472 Furman Street', city: 'Westwood', state: 'VA', zip: '21762', country: 'United States'},
      ssn: '2738',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'HS',
      language: '',
      licenseNum: 'MD630749245',
      birthPlace: 'Nipinnawasee, MD\nUnited States'
    },
    exams: {
      afqt: 55,
      gs: 35,
      ar: 87,
      wk: 35,
      pc: 79,
      mk: 53,
      as: 63,
      mc: 45,
      ao: 50,
      ei: 59,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Garrison',
    lastName: 'Holden',
    active: true,
    dob: '1996-07-12',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 5,
      activity: 'HV',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 65
      },
      weight: {
        val: 162
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 56
      },
      cl: {
        val: 148
      },
      gt: {
        val: 117
      },
      el: {
        val: 71
      },
      mm: {
        val: 54
      },
      qt: {
        val: 71
      },
      ve: {
        val: 98
      },
      dlab: {
        val: 125
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 2
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 2
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 5
        },
        acuity: {
          val: 100
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'garrisonholden@hotmail.com',
      phone: '(703) 316 3959',
      mobile: '(703) 788 6430',
      address: {street: '14637 Rockaway Parkway', city: 'Bancroft', state: 'VA', zip: '20337', country: 'United States'},
      hor: {street: '13690 Downing Street', city: 'Baker', state: 'VA', zip: '21035', country: 'United States'},
      ssn: '1088',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Muslim',
      education: 'GED',
      language: '',
      licenseNum: 'MD974538011',
      birthPlace: 'Whitmer, VA\nUnited States'
    },
    exams: {
      afqt: 60,
      gs: 59,
      ar: 94,
      wk: 91,
      pc: 38,
      mk: 50,
      as: 75,
      mc: 59,
      ao: 86,
      ei: 38,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Jens',
    lastName: 'Burt',
    active: true,
    dob: '1995-06-01',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 8,
      activity: 'TC',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 0
      },
      height: {
        val: 65
      },
      weight: {
        val: 199
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 63
      },
      cl: {
        val: 110
      },
      gt: {
        val: 110
      },
      el: {
        val: 72
      },
      mm: {
        val: 88
      },
      qt: {
        val: 93
      },
      ve: {
        val: 107
      },
      dlab: {
        val: 114
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 11
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 100
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 2
      }
    },
    personal: {
      email: 'jensburt@hotmail.com',
      phone: '(703) 650 6756',
      mobile: '(703) 592 7320',
      address: {street: '9511 Stillwell Avenue', city: 'Vale', state: 'MD', zip: '20070', country: 'United States'},
      hor: {street: '19390 Bulwer Place', city: 'Jennings', state: 'MD', zip: '20900', country: 'United States'},
      ssn: '5404',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'N/A',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'MD800222834',
      birthPlace: 'Brule, VA\nUnited States'
    },
    exams: {
      afqt: 68,
      gs: 79,
      ar: 70,
      wk: 92,
      pc: 64,
      mk: 30,
      as: 44,
      mc: 72,
      ao: 69,
      ei: 33,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Ari',
    lastName: 'Eaton',
    active: true,
    dob: '1999-01-18',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 5,
      activity: 'TC',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 62
      },
      weight: {
        val: 217
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 73
      },
      cl: {
        val: 100
      },
      gt: {
        val: 80
      },
      el: {
        val: 123
      },
      mm: {
        val: 105
      },
      qt: {
        val: 74
      },
      ve: {
        val: 34
      },
      dlab: {
        val: 31
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 2
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 11
        },
        acuity: {
          val: 40
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 40
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'arieaton@gmail.com',
      phone: '(703) 531 7924',
      mobile: '(703) 281 8196',
      address: {street: '7261 Elmwood Avenue', city: 'Gorham', state: 'MD', zip: '20198', country: 'United States'},
      hor: {street: '21533 Glendale Court', city: 'Harviell', state: 'VA', zip: '20321', country: 'United States'},
      ssn: '4909',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 1,
      race: 'Black',
      religion: 'Protestant',
      education: 'HS',
      language: 'Portuguese',
      licenseNum: 'VA541869823',
      birthPlace: 'Garnet, MD\nUnited States'
    },
    exams: {
      afqt: 84,
      gs: 53,
      ar: 99,
      wk: 36,
      pc: 78,
      mk: 68,
      as: 34,
      mc: 90,
      ao: 69,
      ei: 59,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Jack',
    lastName: 'Serrano',
    active: true,
    dob: '1996-01-02',
    status: 'Contract/Poolee',
    dutyType: {id: 1, desc: 'DMR'},
    mcroc: '201611CC-XX-XXX-07/19/2016',
    assignedPef: {pefCode: 'CC', recruiter: '979101185', month: 0},
    notif: {
      daysuntil: 0,
      activity: 'EM',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 63
      },
      weight: {
        val: 198
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 77
      },
      cl: {
        val: 128
      },
      gt: {
        val: 101
      },
      el: {
        val: 91
      },
      mm: {
        val: 82
      },
      qt: {
        val: 57
      },
      ve: {
        val: 65
      },
      dlab: {
        val: 122
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 2
      }
    },
    personal: {
      email: 'jackserrano@hotmail.com',
      phone: '(703) 798 1978',
      mobile: '(703) 551 4276',
      address: {street: '5849 Division Avenue', city: 'Volta', state: 'VA', zip: '20941', country: 'United States'},
      hor: {street: '3932 Seaview Court', city: 'Guilford', state: 'VA', zip: '21672', country: 'United States'},
      ssn: '2326',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'HS',
      language: 'Portuguese',
      licenseNum: 'MD373636257',
      birthPlace: 'Brandermill, VA\nUnited States'
    },
    exams: {
      afqt: 75,
      gs: 75,
      ar: 48,
      wk: 66,
      pc: 82,
      mk: 80,
      as: 39,
      mc: 77,
      ao: 34,
      ei: 32,
      es: 12,
      dep: '10/25/2016',
      activeDutyDateProjected: '07/20/2017',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Branson',
    lastName: 'Olomide',
    active: true,
    dob: '1996-08-18',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 4,
      activity: 'EM',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 70
      },
      weight: {
        val: 214
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 49
      },
      cl: {
        val: 112
      },
      gt: {
        val: 134
      },
      el: {
        val: 138
      },
      mm: {
        val: 103
      },
      qt: {
        val: 126
      },
      ve: {
        val: 36
      },
      dlab: {
        val: 42
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 5
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 50
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'bransonolomide@hotmail.com',
      phone: '(703) 588 9602',
      mobile: '(703) 426 6954',
      address: {street: '9683 Menahan Street', city: 'Sussex', state: 'VA', zip: '20074', country: 'United States'},
      hor: {street: '14411 Jewel Street', city: 'Disautel', state: 'MD', zip: '20529', country: 'United States'},
      ssn: '4572',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'Asian',
      religion: 'Protestant',
      education: 'HS',
      language: '',
      licenseNum: 'MD392616036',
      birthPlace: 'Charco, MD\nUnited States'
    },
    exams: {
      afqt: 91,
      gs: 52,
      ar: 57,
      wk: 43,
      pc: 35,
      mk: 51,
      as: 64,
      mc: 30,
      ao: 77,
      ei: 31,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Gabriel',
    lastName: 'Hull',
    active: true,
    dob: '2000-04-16',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 5,
      activity: 'OT',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 69
      },
      weight: {
        val: 171
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 46
      },
      cl: {
        val: 132
      },
      gt: {
        val: 137
      },
      el: {
        val: 56
      },
      mm: {
        val: 86
      },
      qt: {
        val: 81
      },
      ve: {
        val: 108
      },
      dlab: {
        val: 161
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: false
        },
        color: {
          val: 8
        },
        acuity: {
          val: 200
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 50
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'gabrielhull@unimail.com',
      phone: '(703) 690 1053',
      mobile: '(703) 134 9080',
      address: {street: '12350 Hanson Place', city: 'Rossmore', state: 'VA', zip: '20295', country: 'United States'},
      hor: {street: '18477 Dunham Place', city: 'Leroy', state: 'MD', zip: '21688', country: 'United States'},
      ssn: '3795',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 3,
      race: 'White',
      religion: 'Buddhist',
      education: 'BS',
      language: '',
      licenseNum: 'MD860921453',
      birthPlace: 'Wacissa, MD\nUnited States'
    },
    exams: {
      afqt: 92,
      gs: 99,
      ar: 86,
      wk: 40,
      pc: 76,
      mk: 70,
      as: 44,
      mc: 89,
      ao: 85,
      ei: 30,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Kendra',
    lastName: 'Roberts',
    active: true,
    dob: '1996-06-19',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 4,
      activity: 'TC',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 73
      },
      weight: {
        val: 139
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 66
      },
      cl: {
        val: 68
      },
      gt: {
        val: 60
      },
      el: {
        val: 134
      },
      mm: {
        val: 109
      },
      qt: {
        val: 91
      },
      ve: {
        val: 79
      },
      dlab: {
        val: 126
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 4
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 50
        },
        acuity1: {
          val: 25
        },
        acuity2: {
          val: 25
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'kendraroberts@gmail.com',
      phone: '(703) 432 9930',
      mobile: '(703) 131 8449',
      address: {street: '11155 Raleigh Place', city: 'Epworth', state: 'MD', zip: '20682', country: 'United States'},
      hor: {street: '5060 Melba Court', city: 'Deltaville', state: 'MD', zip: '21587', country: 'United States'},
      ssn: '1127',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Jewish',
      education: 'GED',
      language: 'Spanish',
      licenseNum: 'VA293562094',
      birthPlace: 'Dubois, VA\nUnited States'
    },
    exams: {
      afqt: 73,
      gs: 82,
      ar: 49,
      wk: 35,
      pc: 34,
      mk: 48,
      as: 93,
      mc: 52,
      ao: 71,
      ei: 87,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Leslie',
    lastName: 'Gould',
    active: true,
    dob: '2000-09-30',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 8,
      activity: 'EM',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 69
      },
      weight: {
        val: 161
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 39
      },
      cl: {
        val: 147
      },
      gt: {
        val: 119
      },
      el: {
        val: 79
      },
      mm: {
        val: 75
      },
      qt: {
        val: 120
      },
      ve: {
        val: 98
      },
      dlab: {
        val: 126
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 12
        },
        acuity: {
          val: 50
        },
        acuity1: {
          val: 60
        },
        acuity2: {
          val: 40
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'lesliegould@gmail.com',
      phone: '(703) 509 6924',
      mobile: '(703) 472 5354',
      address: {street: '1703 Highland Boulevard', city: 'Marbury', state: 'MD', zip: '20212', country: 'United States'},
      hor: {street: '858 Williams Avenue', city: 'Leyner', state: 'VA', zip: '20568', country: 'United States'},
      ssn: '2337',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 3,
      race: 'Black',
      religion: 'Buddhist',
      education: 'MA',
      language: '',
      licenseNum: 'VA116861607',
      birthPlace: 'Chamberino, MD\nUnited States'
    },
    exams: {
      afqt: 69,
      gs: 41,
      ar: 99,
      wk: 73,
      pc: 48,
      mk: 40,
      as: 49,
      mc: 44,
      ao: 50,
      ei: 67,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Zain',
    lastName: 'Shawkat',
    active: true,
    dob: '1997-07-07',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 2,
      activity: 'OT',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 67
      },
      weight: {
        val: 137
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 90
      },
      cl: {
        val: 139
      },
      gt: {
        val: 92
      },
      el: {
        val: 79
      },
      mm: {
        val: 95
      },
      qt: {
        val: 127
      },
      ve: {
        val: 82
      },
      dlab: {
        val: 100
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: true
        },
        color: {
          val: 5
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 60
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'zainshawkat@gmail.com',
      phone: '(703) 595 6903',
      mobile: '(703) 736 8879',
      address: {street: '13039 Jodie Court', city: 'Chapin', state: 'MD', zip: '20064', country: 'United States'},
      hor: {street: '14344 Doone Court', city: 'Shindler', state: 'MD', zip: '21234', country: 'United States'},
      ssn: '9809',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'Jewish',
      education: 'HS',
      language: 'Arabic',
      licenseNum: 'MD730115561',
      birthPlace: 'Riviera, VA\nUnited States'
    },
    exams: {
      afqt: 86,
      gs: 86,
      ar: 54,
      wk: 54,
      pc: 99,
      mk: 95,
      as: 40,
      mc: 83,
      ao: 81,
      ei: 73,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Harmony',
    lastName: 'Norton',
    active: true,
    dob: '1996-02-16',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 8,
      activity: 'TC',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 0
      },
      height: {
        val: 72
      },
      weight: {
        val: 144
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 85
      },
      cl: {
        val: 99
      },
      gt: {
        val: 59
      },
      el: {
        val: 109
      },
      mm: {
        val: 89
      },
      qt: {
        val: 106
      },
      ve: {
        val: 54
      },
      dlab: {
        val: 146
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 3
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 70
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'harmonynorton@outlook.com',
      phone: '(703) 274 1605',
      mobile: '(703) 573 5119',
      address: {street: '5423 Atkins Avenue', city: 'Vivian', state: 'MD', zip: '20822', country: 'United States'},
      hor: {street: '21479 Clermont Avenue', city: 'Clay', state: 'VA', zip: '20592', country: 'United States'},
      ssn: '2545',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 3,
      race: 'White',
      religion: 'Catholic',
      education: 'HS',
      language: '',
      licenseNum: 'MD95951373',
      birthPlace: 'Cucumber, MD\nUnited States'
    },
    exams: {
      afqt: 65,
      gs: 42,
      ar: 73,
      wk: 36,
      pc: 87,
      mk: 57,
      as: 78,
      mc: 82,
      ao: 33,
      ei: 63,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Sanders',
    lastName: 'Morrison',
    active: true,
    dob: '2000-02-04',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 9,
      activity: 'OT',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 72
      },
      weight: {
        val: 186
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 62
      },
      cl: {
        val: 76
      },
      gt: {
        val: 58
      },
      el: {
        val: 118
      },
      mm: {
        val: 97
      },
      qt: {
        val: 78
      },
      ve: {
        val: 53
      },
      dlab: {
        val: 78
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 200
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'sandersmorrison@outlook.com',
      phone: '(703) 248 2697',
      mobile: '(703) 397 7050',
      address: {street: '7773 Bergen Court', city: 'Northridge', state: 'MD', zip: '20632', country: 'United States'},
      hor: {street: '13977 Dover Street', city: 'Bethpage', state: 'VA', zip: '20669', country: 'United States'},
      ssn: '1991',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Catholic',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'MD924550395',
      birthPlace: 'Edneyville, MD\nUnited States'
    },
    exams: {
      afqt: 57,
      gs: 38,
      ar: 78,
      wk: 98,
      pc: 38,
      mk: 32,
      as: 48,
      mc: 99,
      ao: 56,
      ei: 39,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Pryce',
    lastName: 'Farley',
    active: true,
    dob: '1997-02-27',
    status: 'Contract/Poolee',
    dutyType: {id: 1, desc: 'DMR'},
    mcroc: '201608CJ-XX-XXX-10/05/2016',
    assignedPef: {pefCode: 'CJ', recruiter: '002995102', month: 2},
    notif: {
      daysuntil: 0,
      activity: 'TC',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {recruiterId: '002995102', rs: 'Chantilly'},
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 63
      },
      weight: {
        val: 164
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 79
      },
      cl: {
        val: 92
      },
      gt: {
        val: 113
      },
      el: {
        val: 108
      },
      mm: {
        val: 129
      },
      qt: {
        val: 53
      },
      ve: {
        val: 63
      },
      dlab: {
        val: 108
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 5
        },
        acuity: {
          val: 60
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'pfarley@comvex.com',
      phone: '(703) 433 4917',
      mobile: '(703) 655 2765',
      address: {street: '9852 Kane Street', city: 'Yorklyn', state: 'MD', zip: '20063', country: 'United States'},
      hor: {street: '19149 Village Road', city: 'Tonopah', state: 'VA', zip: '20771', country: 'United States'},
      ssn: '9150',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'Muslim',
      education: 'GED',
      language: 'French',
      licenseNum: 'MD880267447',
      birthPlace: 'Barclay, MD\nUnited States'
    },
    exams: {
      afqt: 56,
      gs: 80,
      ar: 95,
      wk: 52,
      pc: 75,
      mk: 36,
      as: 31,
      mc: 81,
      ao: 78,
      ei: 36,
      es: 12,
      dep: '01/25/2017',
      activeDutyDateProjected: '08/25/2017',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Estelle',
    lastName: 'Blankenship',
    active: true,
    dob: '1998-01-11',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 7,
      activity: 'EM',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 62
      },
      weight: {
        val: 202
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 44
      },
      cl: {
        val: 81
      },
      gt: {
        val: 106
      },
      el: {
        val: 54
      },
      mm: {
        val: 108
      },
      qt: {
        val: 67
      },
      ve: {
        val: 66
      },
      dlab: {
        val: 44
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 5
        },
        acuity: {
          val: 200
        },
        acuity1: {
          val: 40
        },
        acuity2: {
          val: 200
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'estelleblankenship@gmail.com',
      phone: '(703) 683 4741',
      mobile: '(703) 676 7393',
      address: {street: '8245 Havemeyer Street', city: 'Kula', state: 'VA', zip: '20583', country: 'United States'},
      hor: {street: '687 Herkimer Court', city: 'Eden', state: 'MD', zip: '20883', country: 'United States'},
      ssn: '4480',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 1,
      race: 'White',
      religion: 'Protestant',
      education: 'MA',
      language: 'Spanish',
      licenseNum: 'MD714187297',
      birthPlace: 'Eureka, MD\nUnited States'
    },
    exams: {
      afqt: 89,
      gs: 99,
      ar: 96,
      wk: 72,
      pc: 95,
      mk: 32,
      as: 50,
      mc: 62,
      ao: 53,
      ei: 84,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Iris',
    lastName: 'Joyce',
    active: true,
    dob: '1998-12-29',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 10,
      activity: 'TC',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 73
      },
      weight: {
        val: 181
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 45
      },
      cl: {
        val: 122
      },
      gt: {
        val: 68
      },
      el: {
        val: 123
      },
      mm: {
        val: 63
      },
      qt: {
        val: 76
      },
      ve: {
        val: 61
      },
      dlab: {
        val: 80
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 11
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 25
        },
        acuity2: {
          val: 200
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'irisjoyce@gmail.com',
      phone: '(703) 238 2067',
      mobile: '(703) 328 3018',
      address: {street: '7029 Prospect Street', city: 'Emerald', state: 'VA', zip: '20481', country: 'United States'},
      hor: {street: '24908 Locust Avenue', city: 'Wauhillau', state: 'MD', zip: '21276', country: 'United States'},
      ssn: '2706',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'HS',
      language: '',
      licenseNum: 'VA374725031',
      birthPlace: 'Diaperville, MD\nUnited States'
    },
    exams: {
      afqt: 69,
      gs: 66,
      ar: 86,
      wk: 41,
      pc: 78,
      mk: 67,
      as: 48,
      mc: 68,
      ao: 65,
      ei: 86,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Sawyer',
    lastName: 'Skinner',
    active: true,
    dob: '1999-01-23',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 10,
      activity: 'TC',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 67
      },
      weight: {
        val: 174
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 56
      },
      cl: {
        val: 98
      },
      gt: {
        val: 85
      },
      el: {
        val: 68
      },
      mm: {
        val: 99
      },
      qt: {
        val: 126
      },
      ve: {
        val: 62
      },
      dlab: {
        val: 150
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 3
        },
        acuity: {
          val: 60
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'skinnersawyer@comvex.com',
      phone: '(703) 219 4364',
      mobile: '(703) 202 2030',
      address: {street: '5721 Murdock Court', city: 'Colton', state: 'MD', zip: '20599', country: 'United States'},
      hor: {street: '13589 Kenmore Court', city: 'Nash', state: 'VA', zip: '21749', country: 'United States'},
      ssn: '1522',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'Black',
      religion: 'Muslim',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'VA687578244',
      birthPlace: 'Cliffside, VA\nUnited States'
    },
    exams: {
      afqt: 62,
      gs: 92,
      ar: 58,
      wk: 41,
      pc: 32,
      mk: 32,
      as: 61,
      mc: 57,
      ao: 91,
      ei: 68,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Jennifer',
    lastName: 'Sheppard',
    active: true,
    dob: '1996-05-06',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 10,
      activity: 'OT',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 68
      },
      weight: {
        val: 199
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 45
      },
      cl: {
        val: 73
      },
      gt: {
        val: 103
      },
      el: {
        val: 54
      },
      mm: {
        val: 97
      },
      qt: {
        val: 83
      },
      ve: {
        val: 81
      },
      dlab: {
        val: 93
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 2
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 12
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 40
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'jennifersheppard@outlook.com',
      phone: '(703) 616 9708',
      mobile: '(703) 408 4249',
      address: {street: '12526 Stone Avenue', city: 'Hayden', state: 'VA', zip: '20464', country: 'United States'},
      hor: {street: '19717 Linwood Street', city: 'Adelino', state: 'VA', zip: '21489', country: 'United States'},
      ssn: '2182',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Pacific Islander',
      religion: 'Catholic',
      education: 'HS',
      language: '',
      licenseNum: 'VA752214563',
      birthPlace: 'Brethren, VA\nUnited States'
    },
    exams: {
      afqt: 91,
      gs: 76,
      ar: 78,
      wk: 70,
      pc: 30,
      mk: 81,
      as: 42,
      mc: 56,
      ao: 51,
      ei: 67,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Walker',
    lastName: 'Nash',
    active: true,
    dob: '1998-09-22',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 3,
      activity: 'HV',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 65
      },
      weight: {
        val: 201
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 79
      },
      cl: {
        val: 127
      },
      gt: {
        val: 135
      },
      el: {
        val: 123
      },
      mm: {
        val: 113
      },
      qt: {
        val: 50
      },
      ve: {
        val: 36
      },
      dlab: {
        val: 147
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 13
        },
        acuity: {
          val: 70
        },
        acuity1: {
          val: 40
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'walkernash@gmail.com',
      phone: '(703) 334 8709',
      mobile: '(703) 771 9327',
      address: {street: '16594 Barlow Drive', city: 'Deputy', state: 'VA', zip: '20334', country: 'United States'},
      hor: {street: '9701 Clifton Place', city: 'Noxen', state: 'MD', zip: '20605', country: 'United States'},
      ssn: '9001',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Pacific Islander',
      religion: 'Protestant',
      education: 'GED',
      language: '',
      licenseNum: 'MD50258625',
      birthPlace: 'Maplewood, VA\nUnited States'
    },
    exams: {
      afqt: 64,
      gs: 50,
      ar: 73,
      wk: 64,
      pc: 78,
      mk: 80,
      as: 50,
      mc: 89,
      ao: 57,
      ei: 40,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Chris',
    lastName: 'Norris',
    active: true,
    dob: '1999-04-19',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 3,
      activity: 'HV',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 66
      },
      weight: {
        val: 185
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 74
      },
      cl: {
        val: 137
      },
      gt: {
        val: 135
      },
      el: {
        val: 95
      },
      mm: {
        val: 53
      },
      qt: {
        val: 75
      },
      ve: {
        val: 65
      },
      dlab: {
        val: 106
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 3
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 20
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 60
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'chrisnorris@gmail.com',
      phone: '(703) 218 3566',
      mobile: '(703) 774 5884',
      address: {street: '6398 Scott Avenue', city: 'Gordon', state: 'MD', zip: '20237', country: 'United States'},
      hor: {street: '9495 Underhill Avenue', city: 'Choctaw', state: 'MD', zip: '21466', country: 'United States'},
      ssn: '5529',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Muslim',
      education: 'GED',
      language: 'Akan',
      licenseNum: 'VA804218360',
      birthPlace: 'Hanover, MD\nUnited States'
    },
    exams: {
      afqt: 51,
      gs: 99,
      ar: 99,
      wk: 50,
      pc: 30,
      mk: 52,
      as: 75,
      mc: 94,
      ao: 80,
      ei: 73,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Jeremiah',
    lastName: 'Sanders',
    active: true,
    dob: '1994-08-31',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 5,
      activity: 'HV',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 70
      },
      weight: {
        val: 182
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 60
      },
      cl: {
        val: 94
      },
      gt: {
        val: 127
      },
      el: {
        val: 119
      },
      mm: {
        val: 75
      },
      qt: {
        val: 51
      },
      ve: {
        val: 73
      },
      dlab: {
        val: 89
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 2
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 100
        },
        acuity1: {
          val: 40
        },
        acuity2: {
          val: 60
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'jsanders@outlook.com',
      phone: '(703) 301 5169',
      mobile: '(703) 275 5974',
      address: {street: '8326 Evans Street', city: 'Mammoth', state: 'MD', zip: '20807', country: 'United States'},
      hor: {street: '12477 Farragut Place', city: 'Hobucken', state: 'MD', zip: '21133', country: 'United States'},
      ssn: '5001',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Buddhist',
      education: 'BS',
      language: 'Akan',
      licenseNum: 'VA735195118',
      birthPlace: 'Saddlebrooke, VA\nUnited States'
    },
    exams: {
      afqt: 62,
      gs: 44,
      ar: 79,
      wk: 98,
      pc: 30,
      mk: 54,
      as: 50,
      mc: 97,
      ao: 34,
      ei: 71,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Augusta',
    lastName: 'Simon',
    active: true,
    dob: '1994-10-14',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 0,
      activity: 'EM',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 68
      },
      weight: {
        val: 225
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 87
      },
      cl: {
        val: 137
      },
      gt: {
        val: 90
      },
      el: {
        val: 56
      },
      mm: {
        val: 96
      },
      qt: {
        val: 125
      },
      ve: {
        val: 56
      },
      dlab: {
        val: 83
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 40
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'asimon@gmail.com',
      phone: '(703) 706 4301',
      mobile: '(703) 757 7277',
      address: {street: '10498 Rose Street', city: 'Alamo', state: 'VA', zip: '20830', country: 'United States'},
      hor: {street: '4005 Grattan Street', city: 'Hilltop', state: 'VA', zip: '20117', country: 'United States'},
      ssn: '9996',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 3,
      race: 'White',
      religion: 'Buddhist',
      education: 'GED',
      language: 'Spanish',
      licenseNum: 'MD321239361',
      birthPlace: 'Outlook, VA\nUnited States'
    },
    exams: {
      afqt: 99,
      gs: 69,
      ar: 43,
      wk: 67,
      pc: 66,
      mk: 84,
      as: 41,
      mc: 89,
      ao: 78,
      ei: 81,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Errol',
    lastName: 'Simmons',
    active: true,
    dob: '1999-08-11',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 3,
      activity: 'EM',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 61
      },
      weight: {
        val: 213
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 86
      },
      cl: {
        val: 63
      },
      gt: {
        val: 125
      },
      el: {
        val: 110
      },
      mm: {
        val: 81
      },
      qt: {
        val: 104
      },
      ve: {
        val: 36
      },
      dlab: {
        val: 78
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 8
        },
        acuity: {
          val: 25
        },
        acuity1: {
          val: 40
        },
        acuity2: {
          val: 50
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 2
      }
    },
    personal: {
      email: 'errolsimmons@gmail.com',
      phone: '(703) 477 7656',
      mobile: '(703) 398 9935',
      address: {street: '13856 Stuyvesant Avenue', city: 'Yogaville', state: 'MD', zip: '20570', country: 'United States'},
      hor: {street: '19682 Williamsburg Street', city: 'Bartley', state: 'VA', zip: '20650', country: 'United States'},
      ssn: '6535',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'GED',
      language: 'Spanish',
      licenseNum: 'VA808348194',
      birthPlace: 'Datil, VA\nUnited States'
    },
    exams: {
      afqt: 90,
      gs: 48,
      ar: 49,
      wk: 81,
      pc: 55,
      mk: 95,
      as: 73,
      mc: 92,
      ao: 39,
      ei: 47,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Langston',
    lastName: 'Nguyen',
    active: true,
    dob: '1994-05-30',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 2,
      activity: 'EM',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 64
      },
      weight: {
        val: 205
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 52
      },
      cl: {
        val: 131
      },
      gt: {
        val: 89
      },
      el: {
        val: 51
      },
      mm: {
        val: 79
      },
      qt: {
        val: 102
      },
      ve: {
        val: 31
      },
      dlab: {
        val: 43
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 5
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 70
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'langstonnguyen@comvex.com',
      phone: '(703) 464 1462',
      mobile: '(703) 119 7337',
      address: {street: '9008 Pleasant Place', city: 'Fontanelle', state: 'VA', zip: '20140', country: 'United States'},
      hor: {street: '18598 Conover Street', city: 'Helen', state: 'MD', zip: '21612', country: 'United States'},
      ssn: '3733',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'Protestant',
      education: 'HS',
      language: '',
      licenseNum: 'VA872983794',
      birthPlace: 'Marenisco, MD\nUnited States'
    },
    exams: {
      afqt: 55,
      gs: 76,
      ar: 80,
      wk: 81,
      pc: 53,
      mk: 80,
      as: 36,
      mc: 81,
      ao: 59,
      ei: 78,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Jordan',
    lastName: 'Velasquez',
    active: true,
    dob: '2000-01-15',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 7,
      activity: 'OT',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 62
      },
      weight: {
        val: 199
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 93
      },
      cl: {
        val: 151
      },
      gt: {
        val: 58
      },
      el: {
        val: 92
      },
      mm: {
        val: 73
      },
      qt: {
        val: 80
      },
      ve: {
        val: 42
      },
      dlab: {
        val: 39
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 11
        },
        acuity: {
          val: 70
        },
        acuity1: {
          val: 60
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'jordanvelasquez@outlook.com',
      phone: '(703) 397 7022',
      mobile: '(703) 389 6208',
      address: {street: '11406 Boardwalk ', city: 'Dotsero', state: 'MD', zip: '20927', country: 'United States'},
      hor: {street: '8963 Frank Court', city: 'Abrams', state: 'MD', zip: '20164', country: 'United States'},
      ssn: '3455',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'Buddhist',
      education: 'HS',
      language: 'French',
      licenseNum: 'VA117630176',
      birthPlace: 'Nescatunga, VA\nUnited States'
    },
    exams: {
      afqt: 65,
      gs: 54,
      ar: 52,
      wk: 65,
      pc: 76,
      mk: 35,
      as: 85,
      mc: 72,
      ao: 42,
      ei: 33,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Avigdor',
    lastName: 'Keller',
    active: true,
    dob: '2000-03-08',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 8,
      activity: 'TC',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 66
      },
      weight: {
        val: 138
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 56
      },
      cl: {
        val: 92
      },
      gt: {
        val: 117
      },
      el: {
        val: 112
      },
      mm: {
        val: 60
      },
      qt: {
        val: 108
      },
      ve: {
        val: 33
      },
      dlab: {
        val: 164
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 2
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 12
        },
        acuity: {
          val: 70
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 2
      }
    },
    personal: {
      email: 'hernandezkeller@gmail.com',
      phone: '(703) 376 5083',
      mobile: '(703) 314 2764',
      address: {street: '1782 Holmes Lane', city: 'Sunbury', state: 'VA', zip: '20580', country: 'United States'},
      hor: {street: '18355 Falmouth Street', city: 'Herlong', state: 'VA', zip: '21596', country: 'United States'},
      ssn: '7526',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Jewish',
      education: 'BS',
      language: '',
      licenseNum: 'VA289247539',
      birthPlace: 'Iola, VA\nUnited States'
    },
    exams: {
      afqt: 82,
      gs: 65,
      ar: 61,
      wk: 60,
      pc: 67,
      mk: 30,
      as: 96,
      mc: 43,
      ao: 59,
      ei: 78,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Fasi',
    lastName: 'Young',
    active: true,
    dob: '1998-09-04',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 5,
      activity: 'HV',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 65
      },
      weight: {
        val: 199
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 60
      },
      cl: {
        val: 126
      },
      gt: {
        val: 125
      },
      el: {
        val: 114
      },
      mm: {
        val: 130
      },
      qt: {
        val: 92
      },
      ve: {
        val: 69
      },
      dlab: {
        val: 118
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 8
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 70
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 2
      }
    },
    personal: {
      email: 'gingeryoung@gmail.com',
      phone: '(703) 592 3780',
      mobile: '(703) 626 1925',
      address: {street: '16860 Belmont Avenue', city: 'Kimmell', state: 'MD', zip: '20477', country: 'United States'},
      hor: {street: '14982 Amboy Street', city: 'Freetown', state: 'MD', zip: '20691', country: 'United States'},
      ssn: '4708',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 3,
      race: 'Pacific Islander',
      religion: 'Jewish',
      education: 'HS',
      language: 'Arabic',
      licenseNum: 'VA981635077',
      birthPlace: 'Thornport, VA\nUnited States'
    },
    exams: {
      afqt: 76,
      gs: 86,
      ar: 45,
      wk: 97,
      pc: 96,
      mk: 75,
      as: 91,
      mc: 66,
      ao: 35,
      ei: 71,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Fox',
    lastName: 'Mayo',
    active: true,
    dob: '2000-01-09',
    status: 'Contract/Poolee',
        dutyType: {id: 2, desc: 'DMV'},
    notif: {
      daysuntil: 10,
      activity: 'TC',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 73
      },
      weight: {
        val: 198
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 70
      },
      cl: {
        val: 134
      },
      gt: {
        val: 97
      },
      el: {
        val: 53
      },
      mm: {
        val: 128
      },
      qt: {
        val: 53
      },
      ve: {
        val: 96
      },
      dlab: {
        val: 60
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: true
        },
        color: {
          val: 12
        },
        acuity: {
          val: 50
        },
        acuity1: {
          val: 100
        },
        acuity2: {
          val: 200
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'foxmayo@gmail.com',
      phone: '(703) 667 5975',
      mobile: '(703) 169 7451',
      address: {street: '3100 Dupont Street', city: 'Hachita', state: 'VA', zip: '20451', country: 'United States'},
      hor: {street: '12662 Argyle Road', city: 'Golconda', state: 'VA', zip: '21474', country: 'United States'},
      ssn: '3654',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'HS',
      language: 'Akan',
      licenseNum: 'MD331561941',
      birthPlace: 'Nicholson, VA\nUnited States'
    },
    exams: {
      afqt: 87,
      gs: 96,
      ar: 39,
      wk: 75,
      pc: 45,
      mk: 57,
      as: 69,
      mc: 97,
      ao: 69,
      ei: 59,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Isidor',
    lastName: 'Webb',
    active: true,
    dob: '1996-10-15',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 7,
      activity: 'TC',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 0
      },
      height: {
        val: 62
      },
      weight: {
        val: 154
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 66
      },
      cl: {
        val: 120
      },
      gt: {
        val: 111
      },
      el: {
        val: 116
      },
      mm: {
        val: 91
      },
      qt: {
        val: 70
      },
      ve: {
        val: 83
      },
      dlab: {
        val: 90
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 2
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 11
        },
        acuity: {
          val: 60
        },
        acuity1: {
          val: 200
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'isabellawebb@outlook.com',
      phone: '(703) 199 1982',
      mobile: '(703) 533 9698',
      address: {street: '15063 Rockaway Avenue', city: 'Keller', state: 'MD', zip: '20163', country: 'United States'},
      hor: {street: '16236 Royce Street', city: 'Chicopee', state: 'VA', zip: '20897', country: 'United States'},
      ssn: '8288',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 3,
      race: 'Black',
      religion: 'N/A',
      education: 'HS',
      language: 'Akan',
      licenseNum: 'MD347065368',
      birthPlace: 'Ogema, MD\nUnited States'
    },
    exams: {
      afqt: 84,
      gs: 97,
      ar: 98,
      wk: 86,
      pc: 84,
      mk: 94,
      as: 60,
      mc: 52,
      ao: 46,
      ei: 40,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Jewell',
    lastName: 'Trujillo',
    active: true,
    dob: '2000-11-17',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 5,
      activity: 'TC',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 65
      },
      weight: {
        val: 197
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 39
      },
      cl: {
        val: 112
      },
      gt: {
        val: 127
      },
      el: {
        val: 68
      },
      mm: {
        val: 72
      },
      qt: {
        val: 57
      },
      ve: {
        val: 42
      },
      dlab: {
        val: 148
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 2
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 13
        },
        acuity: {
          val: 50
        },
        acuity1: {
          val: 25
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'jewelltrujillo@outlook.com',
      phone: '(703) 569 1455',
      mobile: '(703) 774 8278',
      address: {street: '12530 McKinley Avenue', city: 'Wadsworth', state: 'MD', zip: '20438', country: 'United States'},
      hor: {street: '4941 Strickland Avenue', city: 'Falmouth', state: 'VA', zip: '20715', country: 'United States'},
      ssn: '8075',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 1,
      race: 'White',
      religion: 'Protestant',
      education: 'GED',
      language: 'Arabic',
      licenseNum: 'MD811773465',
      birthPlace: 'Thatcher, MD\nUnited States'
    },
    exams: {
      afqt: 96,
      gs: 44,
      ar: 54,
      wk: 93,
      pc: 59,
      mk: 83,
      as: 35,
      mc: 44,
      ao: 38,
      ei: 64,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Mona',
    lastName: 'Berry',
    active: true,
    dob: '1995-08-09',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 6,
      activity: 'HV',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 64
      },
      weight: {
        val: 146
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 99
      },
      cl: {
        val: 121
      },
      gt: {
        val: 104
      },
      el: {
        val: 102
      },
      mm: {
        val: 117
      },
      qt: {
        val: 92
      },
      ve: {
        val: 97
      },
      dlab: {
        val: 80
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 4
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 11
        },
        acuity: {
          val: 70
        },
        acuity1: {
          val: 25
        },
        acuity2: {
          val: 200
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'monaberry@gmail.com',
      phone: '(703) 314 3092',
      mobile: '(703) 127 6948',
      address: {street: '5378 Hale Avenue', city: 'Imperial', state: 'MD', zip: '20542', country: 'United States'},
      hor: {street: '12600 Everett Avenue', city: 'Southview', state: 'MD', zip: '21392', country: 'United States'},
      ssn: '3035',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 2,
      race: 'Black',
      religion: 'Protestant',
      education: 'HS',
      language: '',
      licenseNum: 'MD983795429',
      birthPlace: 'Joes, VA\nUnited States'
    },
    exams: {
      afqt: 88,
      gs: 83,
      ar: 54,
      wk: 64,
      pc: 79,
      mk: 66,
      as: 70,
      mc: 86,
      ao: 30,
      ei: 40,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Everett',
    lastName: 'Reeves',
    active: true,
    dob: '1998-08-05',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 0,
      activity: 'TC',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 62
      },
      weight: {
        val: 146
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 85
      },
      cl: {
        val: 146
      },
      gt: {
        val: 117
      },
      el: {
        val: 93
      },
      mm: {
        val: 64
      },
      qt: {
        val: 91
      },
      ve: {
        val: 81
      },
      dlab: {
        val: 50
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 4
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 4
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 13
        },
        acuity: {
          val: 50
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'everettreeves@gmail.com',
      phone: '(703) 330 8795',
      mobile: '(703) 731 9107',
      address: {street: '13186 Kings Hwy', city: 'Suitland', state: 'MD', zip: '20450', country: 'United States'},
      hor: {street: '9873 Waldorf Court', city: 'Hiwasse', state: 'MD', zip: '20239', country: 'United States'},
      ssn: '9383',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'N/A',
      education: 'GED',
      language: 'Portuguese',
      licenseNum: 'VA158380982',
      birthPlace: 'Montura, VA\nUnited States'
    },
    exams: {
      afqt: 56,
      gs: 34,
      ar: 36,
      wk: 35,
      pc: 65,
      mk: 93,
      as: 64,
      mc: 34,
      ao: 56,
      ei: 91,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Evan',
    lastName: 'Schroeder',
    active: true,
    dob: '1995-04-22',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 8,
      activity: 'EM',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 0
      },
      height: {
        val: 63
      },
      weight: {
        val: 208
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 58
      },
      cl: {
        val: 105
      },
      gt: {
        val: 137
      },
      el: {
        val: 109
      },
      mm: {
        val: 107
      },
      qt: {
        val: 77
      },
      ve: {
        val: 97
      },
      dlab: {
        val: 64
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 5
        },
        acuity: {
          val: 25
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 70
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'evansschroeder@gmail.com',
      phone: '(703) 123 7014',
      mobile: '(703) 446 9299',
      address: {street: '5480 Louis Place', city: 'Bawcomville', state: 'MD', zip: '20927', country: 'United States'},
      hor: {street: '1791 Mill Road', city: 'Bartonsville', state: 'MD', zip: '21037', country: 'United States'},
      ssn: '9062',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Pacific Islander',
      religion: 'Buddhist',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'MD192281365',
      birthPlace: 'Bagtown, VA\nUnited States'
    },
    exams: {
      afqt: 74,
      gs: 77,
      ar: 80,
      wk: 69,
      pc: 73,
      mk: 56,
      as: 87,
      mc: 44,
      ao: 62,
      ei: 34,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Monica',
    lastName: 'Vance',
    active: true,
    dob: '1999-08-09',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 3,
      activity: 'OT',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 66
      },
      weight: {
        val: 172
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 81
      },
      cl: {
        val: 100
      },
      gt: {
        val: 95
      },
      el: {
        val: 61
      },
      mm: {
        val: 64
      },
      qt: {
        val: 88
      },
      ve: {
        val: 54
      },
      dlab: {
        val: 63
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 50
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 100
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'monicavance@gmail.com',
      phone: '(703) 609 3782',
      mobile: '(703) 203 6913',
      address: {street: '7243 Senator Street', city: 'Deseret', state: 'VA', zip: '20824', country: 'United States'},
      hor: {street: '14126 Revere Place', city: 'Germanton', state: 'MD', zip: '20464', country: 'United States'},
      ssn: '1311',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'Buddhist',
      education: 'HS',
      language: '',
      licenseNum: 'MD783667366',
      birthPlace: 'Rockbridge, MD\nUnited States'
    },
    exams: {
      afqt: 95,
      gs: 60,
      ar: 90,
      wk: 33,
      pc: 47,
      mk: 77,
      as: 45,
      mc: 89,
      ao: 62,
      ei: 45,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Beverly',
    lastName: 'James',
    active: true,
    dob: '1995-06-07',
    status: 'Contract/Poolee',
        dutyType: {id: 3, desc: 'DMV'},
    notif: {
      daysuntil: 2,
      activity: 'TC',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 68
      },
      weight: {
        val: 172
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 73
      },
      cl: {
        val: 81
      },
      gt: {
        val: 106
      },
      el: {
        val: 138
      },
      mm: {
        val: 83
      },
      qt: {
        val: 123
      },
      ve: {
        val: 68
      },
      dlab: {
        val: 47
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 2
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 4
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: false
        },
        color: {
          val: 13
        },
        acuity: {
          val: 25
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 50
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'beverlyjames@gmail.com',
      phone: '(703) 661 6584',
      mobile: '(703) 735 8140',
      address: {street: '1079 Havens Place', city: 'Henrietta', state: 'MD', zip: '20181', country: 'United States'},
      hor: {street: '10418 Bushwick Place', city: 'Lawrence', state: 'MD', zip: '21214', country: 'United States'},
      ssn: '5652',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'Asian',
      religion: 'Jewish',
      education: 'HS',
      language: '',
      licenseNum: 'MD95082309',
      birthPlace: 'Crayne, MD\nUnited States'
    },
    exams: {
      afqt: 59,
      gs: 80,
      ar: 34,
      wk: 54,
      pc: 64,
      mk: 93,
      as: 88,
      mc: 86,
      ao: 85,
      ei: 30,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Summer',
    lastName: 'Boyer',
    active: true,
    dob: '1994-07-08',
    status: 'Contract/Poolee',
        dutyType: {id: 2, desc: 'DMV'},
    notif: {
      daysuntil: 7,
      activity: 'HV',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 63
      },
      weight: {
        val: 175
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 89
      },
      cl: {
        val: 119
      },
      gt: {
        val: 135
      },
      el: {
        val: 134
      },
      mm: {
        val: 94
      },
      qt: {
        val: 77
      },
      ve: {
        val: 104
      },
      dlab: {
        val: 33
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 60
        },
        acuity1: {
          val: 70
        },
        acuity2: {
          val: 50
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'summerboyer@gmail.com',
      phone: '(703) 173 8545',
      mobile: '(703) 391 1837',
      address: {street: '14340 Barbey Street', city: 'Beechmont', state: 'VA', zip: '20889', country: 'United States'},
      hor: {street: '9383 Prescott Place', city: 'Southmont', state: 'VA', zip: '21746', country: 'United States'},
      ssn: '4067',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'GED',
      language: 'Spanish',
      licenseNum: 'MD472011873',
      birthPlace: 'Flintville, VA\nUnited States'
    },
    exams: {
      afqt: 62,
      gs: 46,
      ar: 76,
      wk: 55,
      pc: 35,
      mk: 99,
      as: 70,
      mc: 51,
      ao: 72,
      ei: 75,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Wade',
    lastName: 'Fujimori',
    active: true,
    dob: '1995-05-21',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 2,
      activity: 'OT',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 68
      },
      weight: {
        val: 212
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 80
      },
      cl: {
        val: 84
      },
      gt: {
        val: 69
      },
      el: {
        val: 74
      },
      mm: {
        val: 100
      },
      qt: {
        val: 80
      },
      ve: {
        val: 81
      },
      dlab: {
        val: 163
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 2
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 40
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 25
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 2
      }
    },
    personal: {
      email: 'oneilwarren@gmail.com',
      phone: '(703) 508 1046',
      mobile: '(703) 515 7821',
      address: {street: '14967 Blake Court', city: 'Naomi', state: 'MD', zip: '20416', country: 'United States'},
      hor: {street: '3807 Fay Court', city: 'Watrous', state: 'VA', zip: '21634', country: 'United States'},
      ssn: '3593',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 2,
      race: 'Pacific Islander',
      religion: 'Protestant',
      education: 'HS',
      language: 'French',
      licenseNum: 'VA7373744',
      birthPlace: 'Weedville, VA\nUnited States'
    },
    exams: {
      afqt: 99,
      gs: 51,
      ar: 58,
      wk: 91,
      pc: 49,
      mk: 48,
      as: 82,
      mc: 93,
      ao: 95,
      ei: 54,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Butler',
    lastName: 'Ross',
    active: true,
    dob: '1998-08-26',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 8,
      activity: 'HV',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 62
      },
      weight: {
        val: 212
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 58
      },
      cl: {
        val: 73
      },
      gt: {
        val: 137
      },
      el: {
        val: 130
      },
      mm: {
        val: 94
      },
      qt: {
        val: 91
      },
      ve: {
        val: 70
      },
      dlab: {
        val: 149
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 4
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 13
        },
        acuity: {
          val: 70
        },
        acuity1: {
          val: 25
        },
        acuity2: {
          val: 200
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'butlerross@gmail.com',
      phone: '(703) 507 2866',
      mobile: '(703) 484 8092',
      address: {street: '1756 Neptune Court', city: 'Vaughn', state: 'VA', zip: '20646', country: 'United States'},
      hor: {street: '355 Church Lane', city: 'Vandiver', state: 'MD', zip: '20480', country: 'United States'},
      ssn: '3327',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 2,
      race: 'Pacific Islander',
      religion: 'Catholic',
      education: 'BS',
      language: 'Arabic',
      licenseNum: 'VA766784387',
      birthPlace: 'Edgewater, VA\nUnited States'
    },
    exams: {
      afqt: 61,
      gs: 78,
      ar: 73,
      wk: 58,
      pc: 42,
      mk: 47,
      as: 40,
      mc: 65,
      ao: 56,
      ei: 67,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Kelly',
    lastName: 'Watts',
    active: true,
    dob: '1998-06-30',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 7,
      activity: 'TC',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 64
      },
      weight: {
        val: 160
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 89
      },
      cl: {
        val: 66
      },
      gt: {
        val: 82
      },
      el: {
        val: 98
      },
      mm: {
        val: 67
      },
      qt: {
        val: 60
      },
      ve: {
        val: 43
      },
      dlab: {
        val: 97
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 3
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: false
        },
        color: {
          val: 13
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 25
        },
        acuity2: {
          val: 60
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'kellywatts@outlook.com',
      phone: '(703) 505 1672',
      mobile: '(703) 539 4774',
      address: {street: '13971 Furman Avenue', city: 'Waumandee', state: 'VA', zip: '20418', country: 'United States'},
      hor: {street: '11752 Cadman Plaza', city: 'Delwood', state: 'VA', zip: '20349', country: 'United States'},
      ssn: '6616',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'Pacific Islander',
      religion: 'Protestant',
      education: 'MA',
      language: '',
      licenseNum: 'VA864140009',
      birthPlace: 'Bannock, VA\nUnited States'
    },
    exams: {
      afqt: 66,
      gs: 63,
      ar: 60,
      wk: 94,
      pc: 31,
      mk: 82,
      as: 97,
      mc: 59,
      ao: 47,
      ei: 30,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Rollo',
    lastName: 'Pruitt',
    active: true,
    dob: '1997-01-29',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 0,
      activity: 'TC',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 63
      },
      weight: {
        val: 200
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 86
      },
      cl: {
        val: 106
      },
      gt: {
        val: 110
      },
      el: {
        val: 105
      },
      mm: {
        val: 117
      },
      qt: {
        val: 80
      },
      ve: {
        val: 50
      },
      dlab: {
        val: 115
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 20
        },
        acuity1: {
          val: 40
        },
        acuity2: {
          val: 50
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'morsepruitt@comvex.com',
      phone: '(703) 175 7854',
      mobile: '(703) 564 5792',
      address: {street: '15313 Bowne Street', city: 'Rosine', state: 'VA', zip: '20677', country: 'United States'},
      hor: {street: '8900 Scholes Street', city: 'Freeburn', state: 'VA', zip: '20937', country: 'United States'},
      ssn: '8523',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Asian',
      religion: 'N/A',
      education: 'GED',
      language: 'French',
      licenseNum: 'MD298454847',
      birthPlace: 'Hemlock, MD\nUnited States'
    },
    exams: {
      afqt: 92,
      gs: 53,
      ar: 34,
      wk: 89,
      pc: 34,
      mk: 42,
      as: 90,
      mc: 58,
      ao: 50,
      ei: 85,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Hayden',
    lastName: 'Hardwick',
    active: true,
    dob: '1999-04-30',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 4,
      activity: 'OT',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 69
      },
      weight: {
        val: 225
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 64
      },
      cl: {
        val: 104
      },
      gt: {
        val: 66
      },
      el: {
        val: 130
      },
      mm: {
        val: 108
      },
      qt: {
        val: 91
      },
      ve: {
        val: 42
      },
      dlab: {
        val: 100
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 2
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 8
        },
        acuity: {
          val: 25
        },
        acuity1: {
          val: 40
        },
        acuity2: {
          val: 200
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'jewelhardin@comvex.com',
      phone: '(703) 523 1871',
      mobile: '(703) 675 2233',
      address: {street: '15411 Saratoga Avenue', city: 'Ruffin', state: 'VA', zip: '20650', country: 'United States'},
      hor: {street: '3674 Dahl Court', city: 'Ryderwood', state: 'VA', zip: '20735', country: 'United States'},
      ssn: '6559',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Muslim',
      education: 'HS',
      language: 'French',
      licenseNum: 'VA10827105',
      birthPlace: 'Camptown, VA\nUnited States'
    },
    exams: {
      afqt: 84,
      gs: 36,
      ar: 80,
      wk: 37,
      pc: 65,
      mk: 61,
      as: 97,
      mc: 36,
      ao: 56,
      ei: 71,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Kai',
    lastName: 'Randall',
    active: true,
    dob: '1995-07-14',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 6,
      activity: 'OT',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 73
      },
      weight: {
        val: 216
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 46
      },
      cl: {
        val: 128
      },
      gt: {
        val: 127
      },
      el: {
        val: 107
      },
      mm: {
        val: 91
      },
      qt: {
        val: 88
      },
      ve: {
        val: 49
      },
      dlab: {
        val: 144
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 3
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 2
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 8
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 25
        },
        acuity2: {
          val: 25
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'lizrandall@outlook.com',
      phone: '(703) 258 9257',
      mobile: '(703) 228 9709',
      address: {street: '8616 Sedgwick Place', city: 'Kirk', state: 'MD', zip: '20556', country: 'United States'},
      hor: {street: '21548 Lott Street', city: 'Caroline', state: 'MD', zip: '21721', country: 'United States'},
      ssn: '9935',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'Catholic',
      education: 'HS',
      language: 'Portuguese',
      licenseNum: 'MD447183584',
      birthPlace: 'Stonybrook, MD\nUnited States'
    },
    exams: {
      afqt: 71,
      gs: 43,
      ar: 60,
      wk: 59,
      pc: 89,
      mk: 55,
      as: 71,
      mc: 53,
      ao: 31,
      ei: 80,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Canton',
    lastName: 'Hambra',
    active: true,
    dob: '1998-06-28',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 1,
      activity: 'OT',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 0
      },
      height: {
        val: 61
      },
      weight: {
        val: 191
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 46
      },
      cl: {
        val: 57
      },
      gt: {
        val: 69
      },
      el: {
        val: 140
      },
      mm: {
        val: 53
      },
      qt: {
        val: 83
      },
      ve: {
        val: 98
      },
      dlab: {
        val: 122
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 4
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 4
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 11
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 70
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'cantonhambra@comvex.com',
      phone: '(703) 139 2817',
      mobile: '(703) 681 6280',
      address: {street: '11623 Bradford Street', city: 'Malo', state: 'VA', zip: '20636', country: 'United States'},
      hor: {street: '14851 Verona Place', city: 'Ellerslie', state: 'VA', zip: '20862', country: 'United States'},
      ssn: '4792',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'N/A',
      education: 'HS',
      language: 'Akan',
      licenseNum: 'MD310347572',
      birthPlace: 'Kohatk, VA\nUnited States'
    },
    exams: {
      afqt: 86,
      gs: 94,
      ar: 95,
      wk: 72,
      pc: 64,
      mk: 65,
      as: 86,
      mc: 49,
      ao: 41,
      ei: 60,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Sargent',
    lastName: 'Lourng',
    active: true,
    dob: '1995-03-23',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 9,
      activity: 'HV',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 0
      },
      height: {
        val: 61
      },
      weight: {
        val: 153
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 71
      },
      cl: {
        val: 106
      },
      gt: {
        val: 83
      },
      el: {
        val: 65
      },
      mm: {
        val: 100
      },
      qt: {
        val: 88
      },
      ve: {
        val: 94
      },
      dlab: {
        val: 33
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 2
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 13
        },
        acuity: {
          val: 60
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 200
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'sargentburke@gmail.com',
      phone: '(703) 620 3875',
      mobile: '(703) 701 5906',
      address: {street: '2950 Cranberry Street', city: 'Zeba', state: 'MD', zip: '20637', country: 'United States'},
      hor: {street: '16465 Wakeman Place', city: 'Kempton', state: 'MD', zip: '20338', country: 'United States'},
      ssn: '6225',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Pacific Islander',
      religion: 'N/A',
      education: 'GED',
      language: 'Akan',
      licenseNum: 'MD649943721',
      birthPlace: 'Cuylerville, MD\nUnited States'
    },
    exams: {
      afqt: 76,
      gs: 58,
      ar: 78,
      wk: 92,
      pc: 72,
      mk: 54,
      as: 78,
      mc: 41,
      ao: 47,
      ei: 90,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Stuart',
    lastName: 'Floyd',
    active: true,
    dob: '1997-05-18',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 2,
      activity: 'OT',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 70
      },
      weight: {
        val: 170
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 84
      },
      cl: {
        val: 130
      },
      gt: {
        val: 71
      },
      el: {
        val: 53
      },
      mm: {
        val: 107
      },
      qt: {
        val: 127
      },
      ve: {
        val: 66
      },
      dlab: {
        val: 161
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 60
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'stuartfloyd@gmail.com',
      phone: '(703) 699 1029',
      mobile: '(703) 756 6575',
      address: {street: '2423 Decatur Street', city: 'Woodlands', state: 'VA', zip: '20341', country: 'United States'},
      hor: {street: '13184 Hemlock Street', city: 'Cataract', state: 'VA', zip: '21200', country: 'United States'},
      ssn: '4797',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Jewish',
      education: 'HS',
      language: 'Portuguese',
      licenseNum: 'VA617844905',
      birthPlace: 'Allamuchy, MD\nUnited States'
    },
    exams: {
      afqt: 77,
      gs: 71,
      ar: 57,
      wk: 93,
      pc: 64,
      mk: 62,
      as: 56,
      mc: 83,
      ao: 50,
      ei: 65,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Shirley',
    lastName: 'Chambers',
    active: true,
    dob: '1995-02-05',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 8,
      activity: 'TC',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 64
      },
      weight: {
        val: 193
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 48
      },
      cl: {
        val: 104
      },
      gt: {
        val: 93
      },
      el: {
        val: 97
      },
      mm: {
        val: 78
      },
      qt: {
        val: 122
      },
      ve: {
        val: 88
      },
      dlab: {
        val: 159
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 2
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 8
        },
        acuity: {
          val: 100
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'shirleychambers@outlook.com',
      phone: '(703) 303 5239',
      mobile: '(703) 258 9977',
      address: {street: '10831 Harrison Avenue', city: 'Lupton', state: 'VA', zip: '20676', country: 'United States'},
      hor: {street: '2272 Poplar Avenue', city: 'Hollins', state: 'VA', zip: '20575', country: 'United States'},
      ssn: '9633',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'Buddhist',
      education: 'HS',
      language: 'Akan',
      licenseNum: 'MD85436492',
      birthPlace: 'Taft, MD\nUnited States'
    },
    exams: {
      afqt: 69,
      gs: 92,
      ar: 76,
      wk: 91,
      pc: 59,
      mk: 63,
      as: 94,
      mc: 45,
      ao: 72,
      ei: 34,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Rhonda',
    lastName: 'Fields',
    active: true,
    dob: '2000-07-05',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 10,
      activity: 'HV',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 0
      },
      height: {
        val: 72
      },
      weight: {
        val: 158
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 78
      },
      cl: {
        val: 122
      },
      gt: {
        val: 104
      },
      el: {
        val: 106
      },
      mm: {
        val: 52
      },
      qt: {
        val: 81
      },
      ve: {
        val: 67
      },
      dlab: {
        val: 158
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: true
        },
        color: {
          val: 11
        },
        acuity: {
          val: 60
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 25
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'rhondafields@gmail.com',
      phone: '(703) 446 9632',
      mobile: '(703) 221 2314',
      address: {street: '1656 Kent Street', city: 'Mathews', state: 'MD', zip: '20977', country: 'United States'},
      hor: {street: '3998 Ryder Avenue', city: 'Richville', state: 'MD', zip: '20891', country: 'United States'},
      ssn: '5659',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Pacific Islander',
      religion: 'N/A',
      education: 'GED',
      language: 'Spanish',
      licenseNum: 'VA271548836',
      birthPlace: 'Norvelt, VA\nUnited States'
    },
    exams: {
      afqt: 53,
      gs: 65,
      ar: 53,
      wk: 41,
      pc: 94,
      mk: 94,
      as: 93,
      mc: 75,
      ao: 91,
      ei: 59,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Shelby',
    lastName: 'Burris',
    active: true,
    dob: '1996-05-14',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 5,
      activity: 'EM',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 63
      },
      weight: {
        val: 212
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 66
      },
      cl: {
        val: 109
      },
      gt: {
        val: 123
      },
      el: {
        val: 85
      },
      mm: {
        val: 89
      },
      qt: {
        val: 60
      },
      ve: {
        val: 104
      },
      dlab: {
        val: 41
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 4
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 14
        },
        acuity: {
          val: 25
        },
        acuity1: {
          val: 70
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'shelbyburris@gmail.com',
      phone: '(703) 253 7148',
      mobile: '(703) 598 6725',
      address: {street: '10871 Kent Avenue', city: 'Kraemer', state: 'VA', zip: '20276', country: 'United States'},
      hor: {street: '12443 Troutman Street', city: 'Coventry', state: 'VA', zip: '21141', country: 'United States'},
      ssn: '8608',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Asian',
      religion: 'Muslim',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'VA582429938',
      birthPlace: 'Elizaville, MD\nUnited States'
    },
    exams: {
      afqt: 69,
      gs: 84,
      ar: 70,
      wk: 45,
      pc: 57,
      mk: 30,
      as: 58,
      mc: 78,
      ao: 71,
      ei: 84,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Robert',
    lastName: 'Sargento',
    active: true,
    dob: '1996-09-27',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 7,
      activity: 'OT',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 62
      },
      weight: {
        val: 217
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 81
      },
      cl: {
        val: 103
      },
      gt: {
        val: 123
      },
      el: {
        val: 124
      },
      mm: {
        val: 105
      },
      qt: {
        val: 126
      },
      ve: {
        val: 89
      },
      dlab: {
        val: 109
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 60
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 100
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'robertsargento@gmail.com',
      phone: '(703) 599 2588',
      mobile: '(703) 612 7446',
      address: {street: '726 Kingsway Place', city: 'Springdale', state: 'VA', zip: '20361', country: 'United States'},
      hor: {street: '23429 Willoughby Street', city: 'Ferney', state: 'VA', zip: '20772', country: 'United States'},
      ssn: '6540',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Buddhist',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'VA973264634',
      birthPlace: 'Winston, VA\nUnited States'
    },
    exams: {
      afqt: 80,
      gs: 38,
      ar: 47,
      wk: 70,
      pc: 78,
      mk: 80,
      as: 44,
      mc: 45,
      ao: 82,
      ei: 42,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Boone',
    lastName: 'Moore',
    active: true,
    dob: '1994-11-29',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 6,
      activity: 'HV',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 73
      },
      weight: {
        val: 145
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 97
      },
      cl: {
        val: 106
      },
      gt: {
        val: 56
      },
      el: {
        val: 140
      },
      mm: {
        val: 115
      },
      qt: {
        val: 96
      },
      ve: {
        val: 95
      },
      dlab: {
        val: 154
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 11
        },
        acuity: {
          val: 50
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'boonemoore@gmail.com',
      phone: '(703) 525 3068',
      mobile: '(703) 620 9928',
      address: {street: '15679 Grafton Street', city: 'Wildwood', state: 'MD', zip: '20298', country: 'United States'},
      hor: {street: '1289 Strauss Street', city: 'Wintersburg', state: 'VA', zip: '20897', country: 'United States'},
      ssn: '6288',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'Protestant',
      education: 'HS',
      language: '',
      licenseNum: 'MD940073256',
      birthPlace: 'Babb, MD\nUnited States'
    },
    exams: {
      afqt: 87,
      gs: 41,
      ar: 45,
      wk: 40,
      pc: 86,
      mk: 95,
      as: 55,
      mc: 97,
      ao: 44,
      ei: 49,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Michael',
    lastName: 'Flowers',
    active: true,
    dob: '1998-02-28',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 0,
      activity: 'HV',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 65
      },
      weight: {
        val: 196
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 43
      },
      cl: {
        val: 66
      },
      gt: {
        val: 109
      },
      el: {
        val: 80
      },
      mm: {
        val: 93
      },
      qt: {
        val: 65
      },
      ve: {
        val: 31
      },
      dlab: {
        val: 103
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 3
        },
        violations: {
          val: 4
        }
      },
      moral: {
        conduct: {
          val: 2
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 70
        },
        acuity1: {
          val: 200
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'mflowers@gmail.com',
      phone: '(703) 256 7092',
      mobile: '(703) 364 1941',
      address: {street: '4511 Lott Place', city: 'Balm', state: 'MD', zip: '20482', country: 'United States'},
      hor: {street: '24591 Cyrus Avenue', city: 'Northchase', state: 'VA', zip: '20455', country: 'United States'},
      ssn: '2299',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'Pacific Islander',
      religion: 'Buddhist',
      education: 'HS',
      language: 'Akan',
      licenseNum: 'MD902225952',
      birthPlace: 'Thynedale, VA\nUnited States'
    },
    exams: {
      afqt: 90,
      gs: 65,
      ar: 58,
      wk: 69,
      pc: 50,
      mk: 42,
      as: 90,
      mc: 94,
      ao: 34,
      ei: 60,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Morris',
    lastName: 'Donaldson',
    active: true,
    dob: '1999-07-09',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 7,
      activity: 'HV',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 67
      },
      weight: {
        val: 225
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 49
      },
      cl: {
        val: 76
      },
      gt: {
        val: 63
      },
      el: {
        val: 102
      },
      mm: {
        val: 101
      },
      qt: {
        val: 124
      },
      ve: {
        val: 101
      },
      dlab: {
        val: 98
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 2
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 2
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: false
        },
        color: {
          val: 13
        },
        acuity: {
          val: 25
        },
        acuity1: {
          val: 25
        },
        acuity2: {
          val: 100
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'morrisdonaldson@gmail.com',
      phone: '(703) 748 3107',
      mobile: '(703) 144 4843',
      address: {street: '11695 Oceanview Avenue', city: 'Grandview', state: 'MD', zip: '20471', country: 'United States'},
      hor: {street: '11814 Nichols Avenue', city: 'Onton', state: 'VA', zip: '21213', country: 'United States'},
      ssn: '6384',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'N/A',
      education: 'HS',
      language: 'Arabic',
      licenseNum: 'VA903857805',
      birthPlace: 'Barstow, VA\nUnited States'
    },
    exams: {
      afqt: 58,
      gs: 85,
      ar: 96,
      wk: 89,
      pc: 90,
      mk: 77,
      as: 69,
      mc: 60,
      ao: 78,
      ei: 66,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Rosa',
    lastName: 'Fuentes',
    active: true,
    dob: '1997-07-28',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 3,
      activity: 'HV',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 68
      },
      weight: {
        val: 171
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 56
      },
      cl: {
        val: 66
      },
      gt: {
        val: 127
      },
      el: {
        val: 112
      },
      mm: {
        val: 125
      },
      qt: {
        val: 112
      },
      ve: {
        val: 40
      },
      dlab: {
        val: 78
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 4
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 12
        },
        acuity: {
          val: 25
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 40
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'rosafuentes@outlook.com',
      phone: '(703) 421 6623',
      mobile: '(703) 267 9335',
      address: {street: '7644 Colonial Road', city: 'Rockingham', state: 'MD', zip: '20503', country: 'United States'},
      hor: {street: '1976 Lyme Avenue', city: 'Saranap', state: 'VA', zip: '21075', country: 'United States'},
      ssn: '5369',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'Pacific Islander',
      religion: 'Protestant',
      education: 'MA',
      language: '',
      licenseNum: 'VA894249103',
      birthPlace: 'Savannah, MD\nUnited States'
    },
    exams: {
      afqt: 95,
      gs: 88,
      ar: 70,
      wk: 63,
      pc: 62,
      mk: 78,
      as: 45,
      mc: 81,
      ao: 38,
      ei: 72,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Annie',
    lastName: 'Fitzpatrick',
    active: true,
    dob: '1994-01-19',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 2,
      activity: 'OT',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 69
      },
      weight: {
        val: 151
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 93
      },
      cl: {
        val: 138
      },
      gt: {
        val: 131
      },
      el: {
        val: 108
      },
      mm: {
        val: 129
      },
      qt: {
        val: 120
      },
      ve: {
        val: 50
      },
      dlab: {
        val: 32
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 25
        },
        acuity1: {
          val: 70
        },
        acuity2: {
          val: 200
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'anniefitzpatrick@gmail.com',
      phone: '(703) 643 3606',
      mobile: '(703) 122 1879',
      address: {street: '7249 Trucklemans Lane', city: 'Ruckersville', state: 'MD', zip: '20465', country: 'United States'},
      hor: {street: '5795 Brown Street', city: 'Mooresburg', state: 'VA', zip: '20418', country: 'United States'},
      ssn: '6390',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'Muslim',
      education: 'HS',
      language: 'French',
      licenseNum: 'VA632274399',
      birthPlace: 'Sperryville, VA\nUnited States'
    },
    exams: {
      afqt: 51,
      gs: 55,
      ar: 75,
      wk: 42,
      pc: 68,
      mk: 77,
      as: 37,
      mc: 75,
      ao: 93,
      ei: 67,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Henry',
    lastName: 'Long',
    active: true,
    dob: '1998-08-11',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 5,
      activity: 'OT',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '1503303857', rs: 'MCRC',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 64
      },
      weight: {
        val: 201
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 99
      },
      cl: {
        val: 97
      },
      gt: {
        val: 81
      },
      el: {
        val: 109
      },
      mm: {
        val: 70
      },
      qt: {
        val: 71
      },
      ve: {
        val: 47
      },
      dlab: {
        val: 101
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 3
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 13
        },
        acuity: {
          val: 70
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 70
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'henrylong@gmail.com',
      phone: '(703) 161 6472',
      mobile: '(703) 282 3982',
      address: {street: '5010 Brooklyn Avenue', city: 'Sultana', state: 'MD', zip: '20145', country: 'United States'},
      hor: {street: '4829 Jaffray Street', city: 'Lisco', state: 'MD', zip: '21590', country: 'United States'},
      ssn: '8388',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'N/A',
      education: 'HS',
      language: '',
      licenseNum: 'VA2134958',
      birthPlace: 'Hebron, VA\nUnited States'
    },
    exams: {
      afqt: 97,
      gs: 84,
      ar: 57,
      wk: 81,
      pc: 93,
      mk: 56,
      as: 64,
      mc: 67,
      ao: 84,
      ei: 47,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Meyer',
    lastName: 'Carr',
    active: true,
    dob: '2000-08-16',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 8,
      activity: 'TC',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 71
      },
      weight: {
        val: 149
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 70
      },
      cl: {
        val: 143
      },
      gt: {
        val: 115
      },
      el: {
        val: 50
      },
      mm: {
        val: 60
      },
      qt: {
        val: 99
      },
      ve: {
        val: 66
      },
      dlab: {
        val: 149
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 2
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 3
        },
        acuity: {
          val: 20
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 70
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'meyercarr@outlook.com',
      phone: '(703) 670 5535',
      mobile: '(703) 466 9353',
      address: {street: '12231 Herkimer Street', city: 'Hinsdale', state: 'MD', zip: '20669', country: 'United States'},
      hor: {street: '23998 Evergreen Avenue', city: 'Hailesboro', state: 'VA', zip: '20930', country: 'United States'},
      ssn: '1050',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'Protestant',
      education: 'HS',
      language: '',
      licenseNum: 'VA642895300',
      birthPlace: 'Rivereno, VA\nUnited States'
    },
    exams: {
      afqt: 55,
      gs: 58,
      ar: 42,
      wk: 39,
      pc: 44,
      mk: 40,
      as: 88,
      mc: 51,
      ao: 68,
      ei: 59,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Matilda',
    lastName: 'Vazquez',
    active: true,
    dob: '1994-06-23',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 6,
      activity: 'OT',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 66
      },
      weight: {
        val: 194
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 56
      },
      cl: {
        val: 110
      },
      gt: {
        val: 73
      },
      el: {
        val: 101
      },
      mm: {
        val: 75
      },
      qt: {
        val: 112
      },
      ve: {
        val: 102
      },
      dlab: {
        val: 73
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 13
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'matildavazquez@outlook.com',
      phone: '(703) 585 7070',
      mobile: '(703) 166 7542',
      address: {street: '4319 Harway Avenue', city: 'Munjor', state: 'MD', zip: '20901', country: 'United States'},
      hor: {street: '10863 Bragg Court', city: 'Greenock', state: 'VA', zip: '20599', country: 'United States'},
      ssn: '2616',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'Pacific Islander',
      religion: 'Protestant',
      education: 'GED',
      language: 'French',
      licenseNum: 'VA230051058',
      birthPlace: 'Bison, VA\nUnited States'
    },
    exams: {
      afqt: 73,
      gs: 56,
      ar: 85,
      wk: 38,
      pc: 73,
      mk: 48,
      as: 32,
      mc: 38,
      ao: 47,
      ei: 43,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Collier',
    lastName: 'Wilder',
    active: true,
    dob: '2000-07-22',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 4,
      activity: 'OT',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 68
      },
      weight: {
        val: 143
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 59
      },
      cl: {
        val: 78
      },
      gt: {
        val: 99
      },
      el: {
        val: 136
      },
      mm: {
        val: 87
      },
      qt: {
        val: 78
      },
      ve: {
        val: 36
      },
      dlab: {
        val: 113
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 3
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 20
        },
        acuity1: {
          val: 60
        },
        acuity2: {
          val: 100
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'collierwilder@outlook.com',
      phone: '(703) 729 4703',
      mobile: '(703) 219 5550',
      address: {street: '7830 Malbone Street', city: 'Wilmington', state: 'VA', zip: '20344', country: 'United States'},
      hor: {street: '10339 Box Street', city: 'Dundee', state: 'MD', zip: '20122', country: 'United States'},
      ssn: '9940',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'GED',
      language: '',
      licenseNum: 'MD695440149',
      birthPlace: 'Gilmore, VA\nUnited States'
    },
    exams: {
      afqt: 92,
      gs: 52,
      ar: 31,
      wk: 50,
      pc: 78,
      mk: 68,
      as: 38,
      mc: 53,
      ao: 50,
      ei: 34,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Florino',
    lastName: 'Guerra',
    active: true,
    dob: '1998-05-23',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 7,
      activity: 'EM',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 62
      },
      weight: {
        val: 204
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 81
      },
      cl: {
        val: 104
      },
      gt: {
        val: 133
      },
      el: {
        val: 121
      },
      mm: {
        val: 118
      },
      qt: {
        val: 50
      },
      ve: {
        val: 65
      },
      dlab: {
        val: 146
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 60
        },
        acuity1: {
          val: 100
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'florinoguerra@gmail.com',
      phone: '(703) 600 2480',
      mobile: '(703) 509 2398',
      address: {street: '8147 Boerum Place', city: 'Cowiche', state: 'VA', zip: '20091', country: 'United States'},
      hor: {street: '18654 Railroad Avenue', city: 'Gadsden', state: 'MD', zip: '20546', country: 'United States'},
      ssn: '8805',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'Black',
      religion: 'N/A',
      education: 'BS',
      language: '',
      licenseNum: 'MD993979310',
      birthPlace: 'Dennard, MD\nUnited States'
    },
    exams: {
      afqt: 54,
      gs: 61,
      ar: 30,
      wk: 95,
      pc: 62,
      mk: 83,
      as: 52,
      mc: 46,
      ao: 46,
      ei: 47,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Garner',
    lastName: 'Green',
    active: true,
    dob: '1998-12-17',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 2,
      activity: 'OT',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 62
      },
      weight: {
        val: 192
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 39
      },
      cl: {
        val: 122
      },
      gt: {
        val: 133
      },
      el: {
        val: 74
      },
      mm: {
        val: 63
      },
      qt: {
        val: 98
      },
      ve: {
        val: 100
      },
      dlab: {
        val: 92
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 20
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 2
      }
    },
    personal: {
      email: 'garnergreen@comvex.com',
      phone: '(703) 244 3488',
      mobile: '(703) 336 5882',
      address: {street: '16333 Fenimore Street', city: 'Lloyd', state: 'MD', zip: '20091', country: 'United States'},
      hor: {street: '3157 Jamison Lane', city: 'Sidman', state: 'VA', zip: '20628', country: 'United States'},
      ssn: '9654',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'N/A',
      education: 'HS',
      language: 'Portuguese',
      licenseNum: 'MD8983692',
      birthPlace: 'Lithium, MD\nUnited States'
    },
    exams: {
      afqt: 91,
      gs: 32,
      ar: 64,
      wk: 35,
      pc: 81,
      mk: 71,
      as: 60,
      mc: 52,
      ao: 93,
      ei: 70,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Shauna',
    lastName: 'Gill',
    active: true,
    dob: '1995-05-31',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 3,
      activity: 'HV',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 73
      },
      weight: {
        val: 225
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 74
      },
      cl: {
        val: 72
      },
      gt: {
        val: 120
      },
      el: {
        val: 124
      },
      mm: {
        val: 99
      },
      qt: {
        val: 110
      },
      ve: {
        val: 57
      },
      dlab: {
        val: 47
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 25
        },
        acuity1: {
          val: 25
        },
        acuity2: {
          val: 40
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'shaunagill@outlook.com',
      phone: '(703) 261 5581',
      mobile: '(703) 287 7507',
      address: {street: '7230 Division Place', city: 'Mansfield', state: 'MD', zip: '20554', country: 'United States'},
      hor: {street: '5917 Livingston Street', city: 'Fostoria', state: 'MD', zip: '20669', country: 'United States'},
      ssn: '8542',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'Black',
      religion: 'Jewish',
      education: 'BS',
      language: '',
      licenseNum: 'VA181587315',
      birthPlace: 'Nile, VA\nUnited States'
    },
    exams: {
      afqt: 76,
      gs: 74,
      ar: 79,
      wk: 73,
      pc: 67,
      mk: 49,
      as: 96,
      mc: 82,
      ao: 89,
      ei: 45,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'James',
    lastName: 'Johnson',
    active: true,
    dob: '1995-08-28',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 0,
      activity: 'EM',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 66
      },
      weight: {
        val: 162
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 88
      },
      cl: {
        val: 151
      },
      gt: {
        val: 104
      },
      el: {
        val: 106
      },
      mm: {
        val: 119
      },
      qt: {
        val: 63
      },
      ve: {
        val: 55
      },
      dlab: {
        val: 35
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 4
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 2
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 11
        },
        acuity: {
          val: 20
        },
        acuity1: {
          val: 40
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'jamesjohnson@gmail.com',
      phone: '(703) 115 3281',
      mobile: '(703) 576 4217',
      address: {street: '9994 Plymouth Street', city: 'Verdi', state: 'VA', zip: '20747', country: 'United States'},
      hor: {street: '9302 Fountain Avenue', city: 'Santel', state: 'VA', zip: '20549', country: 'United States'},
      ssn: '9777',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'N/A',
      education: 'HS',
      language: 'Portuguese',
      licenseNum: 'VA729878689',
      birthPlace: 'Nelson, VA\nUnited States'
    },
    exams: {
      afqt: 76,
      gs: 69,
      ar: 62,
      wk: 35,
      pc: 50,
      mk: 78,
      as: 87,
      mc: 42,
      ao: 81,
      ei: 54,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Ryan',
    lastName: 'Meyers',
    active: true,
    dob: '1999-01-24',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 8,
      activity: 'OT',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 64
      },
      weight: {
        val: 188
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 46
      },
      cl: {
        val: 107
      },
      gt: {
        val: 118
      },
      el: {
        val: 118
      },
      mm: {
        val: 125
      },
      qt: {
        val: 81
      },
      ve: {
        val: 51
      },
      dlab: {
        val: 116
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 2
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 5
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 25
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'ryanmeyers@comvex.com',
      phone: '(703) 569 4814',
      mobile: '(703) 798 7232',
      address: {street: '6623 Llama Court', city: 'Troy', state: 'VA', zip: '20470', country: 'United States'},
      hor: {street: '16423 Jerome Street', city: 'Glenville', state: 'MD', zip: '20748', country: 'United States'},
      ssn: '8047',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'HS',
      language: 'Arabic',
      licenseNum: 'MD554785705',
      birthPlace: 'Dixonville, VA\nUnited States'
    },
    exams: {
      afqt: 72,
      gs: 46,
      ar: 33,
      wk: 58,
      pc: 35,
      mk: 50,
      as: 75,
      mc: 62,
      ao: 72,
      ei: 46,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Sean',
    lastName: 'O\'Brien',
    active: true,
    dob: '1996-02-05',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 2,
      activity: 'HV',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 64
      },
      weight: {
        val: 205
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 82
      },
      cl: {
        val: 151
      },
      gt: {
        val: 117
      },
      el: {
        val: 63
      },
      mm: {
        val: 120
      },
      qt: {
        val: 87
      },
      ve: {
        val: 106
      },
      dlab: {
        val: 145
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 2
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 5
        },
        acuity: {
          val: 100
        },
        acuity1: {
          val: 25
        },
        acuity2: {
          val: 60
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'seanobrien@outlook.com',
      phone: '(703) 527 5385',
      mobile: '(703) 384 9745',
      address: {street: '15492 Eaton Court', city: 'Brookfield', state: 'MD', zip: '20445', country: 'United States'},
      hor: {street: '1095 Nautilus Avenue', city: 'Terlingua', state: 'MD', zip: '20683', country: 'United States'},
      ssn: '9343',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Pacific Islander',
      religion: 'Protestant',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'VA520237073',
      birthPlace: 'Laurelton, VA\nUnited States'
    },
    exams: {
      afqt: 94,
      gs: 90,
      ar: 69,
      wk: 82,
      pc: 87,
      mk: 47,
      as: 97,
      mc: 94,
      ao: 69,
      ei: 60,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Daniel',
    lastName: 'Hogan',
    active: true,
    dob: '1995-08-22',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 9,
      activity: 'EM',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 62
      },
      weight: {
        val: 171
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 59
      },
      cl: {
        val: 113
      },
      gt: {
        val: 105
      },
      el: {
        val: 64
      },
      mm: {
        val: 57
      },
      qt: {
        val: 58
      },
      ve: {
        val: 46
      },
      dlab: {
        val: 106
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 2
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 40
        },
        acuity1: {
          val: 70
        },
        acuity2: {
          val: 60
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'danielshogan@outlook.com',
      phone: '(703) 255 6211',
      mobile: '(703) 489 3127',
      address: {street: '14751 Meadow Street', city: 'Greenbush', state: 'VA', zip: '20501', country: 'United States'},
      hor: {street: '17178 Vermont Street', city: 'Knowlton', state: 'VA', zip: '20851', country: 'United States'},
      ssn: '1311',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Buddhist',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'MD632670457',
      birthPlace: 'Thomasville, MD\nUnited States'
    },
    exams: {
      afqt: 88,
      gs: 60,
      ar: 65,
      wk: 55,
      pc: 62,
      mk: 70,
      as: 64,
      mc: 96,
      ao: 36,
      ei: 47,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Kristine',
    lastName: 'Fischer',
    active: true,
    dob: '1998-08-17',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 3,
      activity: 'TC',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 66
      },
      weight: {
        val: 182
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 87
      },
      cl: {
        val: 81
      },
      gt: {
        val: 56
      },
      el: {
        val: 85
      },
      mm: {
        val: 74
      },
      qt: {
        val: 77
      },
      ve: {
        val: 68
      },
      dlab: {
        val: 147
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 2
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 4
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 20
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 25
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'kristinefischer@hotmail.com',
      phone: '(703) 517 8787',
      mobile: '(703) 207 2789',
      address: {street: '9693 Seigel Street', city: 'Cade', state: 'VA', zip: '20220', country: 'United States'},
      hor: {street: '13944 Middagh Street', city: 'Mappsville', state: 'MD', zip: '20304', country: 'United States'},
      ssn: '6493',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Asian',
      religion: 'Protestant',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'MD569661306',
      birthPlace: 'Eagleville, VA\nUnited States'
    },
    exams: {
      afqt: 83,
      gs: 96,
      ar: 89,
      wk: 48,
      pc: 79,
      mk: 72,
      as: 66,
      mc: 86,
      ao: 70,
      ei: 81,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Barron',
    lastName: 'Villarreal',
    active: true,
    dob: '1994-07-09',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 6,
      activity: 'OT',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 67
      },
      weight: {
        val: 166
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 42
      },
      cl: {
        val: 145
      },
      gt: {
        val: 61
      },
      el: {
        val: 57
      },
      mm: {
        val: 63
      },
      qt: {
        val: 65
      },
      ve: {
        val: 43
      },
      dlab: {
        val: 116
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 2
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 70
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 40
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'barronvillarreal@hotmail.com',
      phone: '(703) 618 2507',
      mobile: '(703) 173 6672',
      address: {street: '15721 Dennett Place', city: 'Jugtown', state: 'VA', zip: '20624', country: 'United States'},
      hor: {street: '17154 Schenck Street', city: 'Wattsville', state: 'MD', zip: '21735', country: 'United States'},
      ssn: '1938',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'N/A',
      education: 'GED',
      language: 'Spanish',
      licenseNum: 'MD315288979',
      birthPlace: 'Bentley, MD\nUnited States'
    },
    exams: {
      afqt: 73,
      gs: 74,
      ar: 73,
      wk: 59,
      pc: 39,
      mk: 54,
      as: 95,
      mc: 87,
      ao: 49,
      ei: 84,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Robert',
    lastName: 'Mosley',
    active: true,
    dob: '1996-07-28',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 10,
      activity: 'HV',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 0
      },
      height: {
        val: 71
      },
      weight: {
        val: 170
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 83
      },
      cl: {
        val: 58
      },
      gt: {
        val: 78
      },
      el: {
        val: 118
      },
      mm: {
        val: 60
      },
      qt: {
        val: 122
      },
      ve: {
        val: 81
      },
      dlab: {
        val: 83
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 3
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 12
        },
        acuity: {
          val: 60
        },
        acuity1: {
          val: 100
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'robertmosley@outlook.com',
      phone: '(703) 736 4719',
      mobile: '(703) 723 4644',
      address: {street: '15371 Krier Place', city: 'Tecolotito', state: 'MD', zip: '20982', country: 'United States'},
      hor: {street: '14701 Stewart Street', city: 'Boling', state: 'VA', zip: '21385', country: 'United States'},
      ssn: '2686',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'Black',
      religion: 'Buddhist',
      education: 'HS',
      language: '',
      licenseNum: 'MD482887617',
      birthPlace: 'Swartzville, MD\nUnited States'
    },
    exams: {
      afqt: 77,
      gs: 95,
      ar: 64,
      wk: 53,
      pc: 39,
      mk: 47,
      as: 38,
      mc: 97,
      ao: 56,
      ei: 79,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Jason',
    lastName: 'Downs',
    active: true,
    dob: '1998-04-21',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 9,
      activity: 'HV',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 63
      },
      weight: {
        val: 170
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 60
      },
      cl: {
        val: 132
      },
      gt: {
        val: 135
      },
      el: {
        val: 56
      },
      mm: {
        val: 59
      },
      qt: {
        val: 72
      },
      ve: {
        val: 108
      },
      dlab: {
        val: 144
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 12
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 25
        },
        acuity2: {
          val: 60
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 2
      }
    },
    personal: {
      email: 'jasondowns@gmail.com',
      phone: '(703) 639 9131',
      mobile: '(703) 263 2374',
      address: {street: '4494 Heath Place', city: 'Marshall', state: 'MD', zip: '20843', country: 'United States'},
      hor: {street: '22235 Crystal Street', city: 'Martinsville', state: 'MD', zip: '20648', country: 'United States'},
      ssn: '3227',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'BS',
      language: '',
      licenseNum: 'VA32912809',
      birthPlace: 'Loyalhanna, VA\nUnited States'
    },
    exams: {
      afqt: 67,
      gs: 96,
      ar: 44,
      wk: 60,
      pc: 54,
      mk: 73,
      as: 71,
      mc: 95,
      ao: 55,
      ei: 42,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Alejandra',
    lastName: 'Gay',
    active: true,
    dob: '1997-11-01',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 7,
      activity: 'EM',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 71
      },
      weight: {
        val: 225
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 59
      },
      cl: {
        val: 142
      },
      gt: {
        val: 89
      },
      el: {
        val: 123
      },
      mm: {
        val: 112
      },
      qt: {
        val: 86
      },
      ve: {
        val: 100
      },
      dlab: {
        val: 117
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 4
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: false
        },
        color: {
          val: 13
        },
        acuity: {
          val: 25
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'alejandragay@hotmail.com',
      phone: '(703) 571 7119',
      mobile: '(703) 577 1884',
      address: {street: '16734 Arion Place', city: 'Cornucopia', state: 'MD', zip: '20693', country: 'United States'},
      hor: {street: '23554 Veranda Place', city: 'Hamilton', state: 'VA', zip: '21848', country: 'United States'},
      ssn: '5340',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 2,
      race: 'White',
      religion: 'Muslim',
      education: 'GED',
      language: 'Portuguese',
      licenseNum: 'MD43172453',
      birthPlace: 'Madrid, VA\nUnited States'
    },
    exams: {
      afqt: 58,
      gs: 55,
      ar: 89,
      wk: 90,
      pc: 35,
      mk: 77,
      as: 74,
      mc: 67,
      ao: 31,
      ei: 58,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Pauline',
    lastName: 'Guy',
    active: true,
    dob: '2000-08-01',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 1,
      activity: 'HV',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 70
      },
      weight: {
        val: 201
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 93
      },
      cl: {
        val: 91
      },
      gt: {
        val: 113
      },
      el: {
        val: 113
      },
      mm: {
        val: 56
      },
      qt: {
        val: 61
      },
      ve: {
        val: 52
      },
      dlab: {
        val: 73
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 13
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 100
        },
        acuity2: {
          val: 50
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 2
      }
    },
    personal: {
      email: 'paulineguy@hotmail.com',
      phone: '(703) 688 6891',
      mobile: '(703) 466 7735',
      address: {street: '13626 Times Placez', city: 'Genoa', state: 'MD', zip: '20725', country: 'United States'},
      hor: {street: '13741 Huntington Street', city: 'Beaverdale', state: 'VA', zip: '20840', country: 'United States'},
      ssn: '4913',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'Asian',
      religion: 'Buddhist',
      education: 'HS',
      language: '',
      licenseNum: 'MD711640223',
      birthPlace: 'Rose, VA\nUnited States'
    },
    exams: {
      afqt: 85,
      gs: 78,
      ar: 92,
      wk: 65,
      pc: 58,
      mk: 48,
      as: 61,
      mc: 79,
      ao: 55,
      ei: 46,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Wilson',
    lastName: 'Puckett',
    active: true,
    dob: '1999-04-20',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 3,
      activity: 'OT',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 0
      },
      height: {
        val: 69
      },
      weight: {
        val: 166
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 81
      },
      cl: {
        val: 129
      },
      gt: {
        val: 75
      },
      el: {
        val: 68
      },
      mm: {
        val: 116
      },
      qt: {
        val: 59
      },
      ve: {
        val: 65
      },
      dlab: {
        val: 57
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 2
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 5
        },
        acuity: {
          val: 200
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'wilkersonpuckett@hotmail.com',
      phone: '(703) 434 7438',
      mobile: '(703) 331 4815',
      address: {street: '14503 Plaza Street', city: 'Homestead', state: 'VA', zip: '20424', country: 'United States'},
      hor: {street: '2762 Tehama Street', city: 'Harold', state: 'VA', zip: '21746', country: 'United States'},
      ssn: '3827',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Jewish',
      education: 'MA',
      language: 'Arabic',
      licenseNum: 'MD347754367',
      birthPlace: 'Maxville, VA\nUnited States'
    },
    exams: {
      afqt: 67,
      gs: 55,
      ar: 54,
      wk: 59,
      pc: 74,
      mk: 91,
      as: 37,
      mc: 47,
      ao: 41,
      ei: 89,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Cobra',
    lastName: 'Gibbs',
    active: true,
    dob: '1994-02-21',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 3,
      activity: 'OT',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 73
      },
      weight: {
        val: 188
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 72
      },
      cl: {
        val: 58
      },
      gt: {
        val: 57
      },
      el: {
        val: 128
      },
      mm: {
        val: 70
      },
      qt: {
        val: 116
      },
      ve: {
        val: 62
      },
      dlab: {
        val: 62
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 2
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 5
        },
        acuity: {
          val: 20
        },
        acuity1: {
          val: 60
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'cobbgibbs@hotmail.com',
      phone: '(703) 509 1167',
      mobile: '(703) 274 8288',
      address: {street: '12997 College Place', city: 'Glendale', state: 'VA', zip: '20580', country: 'United States'},
      hor: {street: '11483 Manhattan Avenue', city: 'Ventress', state: 'VA', zip: '21990', country: 'United States'},
      ssn: '6454',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'N/A',
      education: 'GED',
      language: '',
      licenseNum: 'MD620251117',
      birthPlace: 'Itmann, MD\nUnited States'
    },
    exams: {
      afqt: 93,
      gs: 35,
      ar: 30,
      wk: 54,
      pc: 70,
      mk: 58,
      as: 77,
      mc: 50,
      ao: 93,
      ei: 66,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Peyton',
    lastName: 'Michaels',
    active: true,
    dob: '1995-03-26',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 2,
      activity: 'EM',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 66
      },
      weight: {
        val: 215
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 97
      },
      cl: {
        val: 60
      },
      gt: {
        val: 138
      },
      el: {
        val: 77
      },
      mm: {
        val: 71
      },
      qt: {
        val: 57
      },
      ve: {
        val: 104
      },
      dlab: {
        val: 127
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: true
        },
        color: {
          val: 12
        },
        acuity: {
          val: 100
        },
        acuity1: {
          val: 40
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'pmichaels@hotmail.com',
      phone: '(703) 149 6136',
      mobile: '(703) 298 8899',
      address: {street: '1538 Bainbridge Street', city: 'Stockdale', state: 'MD', zip: '20486', country: 'United States'},
      hor: {street: '23209 Montauk Avenue', city: 'Berlin', state: 'VA', zip: '21108', country: 'United States'},
      ssn: '2815',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'N/A',
      education: 'HS',
      language: 'French',
      licenseNum: 'VA583549977',
      birthPlace: 'Grahamtown, MD\nUnited States'
    },
    exams: {
      afqt: 91,
      gs: 60,
      ar: 37,
      wk: 40,
      pc: 69,
      mk: 74,
      as: 35,
      mc: 54,
      ao: 91,
      ei: 30,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Casey',
    lastName: 'Vang',
    active: true,
    dob: '1995-04-06',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 2,
      activity: 'TC',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 62
      },
      weight: {
        val: 208
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 75
      },
      cl: {
        val: 78
      },
      gt: {
        val: 92
      },
      el: {
        val: 88
      },
      mm: {
        val: 54
      },
      qt: {
        val: 88
      },
      ve: {
        val: 97
      },
      dlab: {
        val: 129
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 2
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: false
        },
        color: {
          val: 12
        },
        acuity: {
          val: 25
        },
        acuity1: {
          val: 70
        },
        acuity2: {
          val: 100
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'caseyvang@gmail.com',
      phone: '(703) 331 5501',
      mobile: '(703) 747 6052',
      address: {street: '12388 Nostrand Avenue', city: 'Dunbar', state: 'MD', zip: '20074', country: 'United States'},
      hor: {street: '13584 Wilson Street', city: 'Manitou', state: 'VA', zip: '21409', country: 'United States'},
      ssn: '3191',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Jewish',
      education: 'GED',
      language: 'French',
      licenseNum: 'MD12243325',
      birthPlace: 'Gila, VA\nUnited States'
    },
    exams: {
      afqt: 85,
      gs: 64,
      ar: 85,
      wk: 64,
      pc: 96,
      mk: 87,
      as: 96,
      mc: 34,
      ao: 73,
      ei: 82,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Roth',
    lastName: 'Pugh',
    active: true,
    dob: '1999-09-07',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 1,
      activity: 'TC',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 61
      },
      weight: {
        val: 223
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 48
      },
      cl: {
        val: 137
      },
      gt: {
        val: 136
      },
      el: {
        val: 84
      },
      mm: {
        val: 109
      },
      qt: {
        val: 84
      },
      ve: {
        val: 99
      },
      dlab: {
        val: 147
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 5
        },
        acuity: {
          val: 100
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'rothpugh@hotmail.com',
      phone: '(703) 274 8794',
      mobile: '(703) 611 6111',
      address: {street: '7757 Sharon Street', city: 'Monument', state: 'MD', zip: '20378', country: 'United States'},
      hor: {street: '20630 Bennet Court', city: 'Duryea', state: 'VA', zip: '21677', country: 'United States'},
      ssn: '8109',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'N/A',
      education: 'GED',
      language: '',
      licenseNum: 'VA898713678',
      birthPlace: 'Sanborn, MD\nUnited States'
    },
    exams: {
      afqt: 81,
      gs: 84,
      ar: 90,
      wk: 38,
      pc: 77,
      mk: 57,
      as: 49,
      mc: 72,
      ao: 67,
      ei: 81,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Charles',
    lastName: 'Clayton',
    active: true,
    dob: '1997-11-01',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 6,
      activity: 'TC',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 62
      },
      weight: {
        val: 146
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 89
      },
      cl: {
        val: 76
      },
      gt: {
        val: 129
      },
      el: {
        val: 57
      },
      mm: {
        val: 97
      },
      qt: {
        val: 101
      },
      ve: {
        val: 85
      },
      dlab: {
        val: 42
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 8
        },
        acuity: {
          val: 100
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'charlesclayton@gmail.com',
      phone: '(703) 306 3958',
      mobile: '(703) 217 1080',
      address: {street: '4952 Wilson Avenue', city: 'Innsbrook', state: 'MD', zip: '20068', country: 'United States'},
      hor: {street: '20776 Cooper Street', city: 'Elbert', state: 'VA', zip: '21511', country: 'United States'},
      ssn: '5061',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 2,
      race: 'Black',
      religion: 'Protestant',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'MD424657645',
      birthPlace: 'Chautauqua, VA\nUnited States'
    },
    exams: {
      afqt: 89,
      gs: 52,
      ar: 63,
      wk: 38,
      pc: 42,
      mk: 39,
      as: 61,
      mc: 45,
      ao: 33,
      ei: 61,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Dillon',
    lastName: 'Gonzalez',
    active: true,
    dob: '1998-07-15',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 10,
      activity: 'TC',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 70
      },
      weight: {
        val: 168
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 76
      },
      cl: {
        val: 98
      },
      gt: {
        val: 100
      },
      el: {
        val: 98
      },
      mm: {
        val: 59
      },
      qt: {
        val: 56
      },
      ve: {
        val: 110
      },
      dlab: {
        val: 145
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 4
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: false
        },
        color: {
          val: 13
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'gonzalezdillard@hotmail.com',
      phone: '(703) 118 1467',
      mobile: '(703) 723 4105',
      address: {street: '173 Schenectady Avenue', city: 'Tetherow', state: 'VA', zip: '20897', country: 'United States'},
      hor: {street: '16285 Louisiana Avenue', city: 'Joppa', state: 'MD', zip: '20543', country: 'United States'},
      ssn: '4604',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Pacific Islander',
      religion: 'N/A',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'VA797124512',
      birthPlace: 'Otranto, VA\nUnited States'
    },
    exams: {
      afqt: 97,
      gs: 51,
      ar: 65,
      wk: 65,
      pc: 76,
      mk: 82,
      as: 86,
      mc: 41,
      ao: 81,
      ei: 68,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Alisha',
    lastName: 'Hooper',
    active: true,
    dob: '1997-03-06',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 6,
      activity: 'OT',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 64
      },
      weight: {
        val: 159
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 80
      },
      cl: {
        val: 61
      },
      gt: {
        val: 125
      },
      el: {
        val: 105
      },
      mm: {
        val: 91
      },
      qt: {
        val: 127
      },
      ve: {
        val: 44
      },
      dlab: {
        val: 133
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 2
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 11
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 70
        },
        acuity2: {
          val: 70
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'alishahooper@hotmail.com',
      phone: '(703) 686 4924',
      mobile: '(703) 623 8004',
      address: {street: '15639 Berriman Street', city: 'Chaparrito', state: 'VA', zip: '20823', country: 'United States'},
      hor: {street: '10325 Conselyea Street', city: 'Singer', state: 'VA', zip: '20663', country: 'United States'},
      ssn: '4930',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'N/A',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'MD570429967',
      birthPlace: 'Movico, MD\nUnited States'
    },
    exams: {
      afqt: 52,
      gs: 76,
      ar: 42,
      wk: 94,
      pc: 63,
      mk: 87,
      as: 56,
      mc: 37,
      ao: 41,
      ei: 68,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Craig',
    lastName: 'Gutierrez',
    active: true,
    dob: '1996-08-17',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 2,
      activity: 'OT',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 67
      },
      weight: {
        val: 191
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 69
      },
      cl: {
        val: 68
      },
      gt: {
        val: 120
      },
      el: {
        val: 50
      },
      mm: {
        val: 112
      },
      qt: {
        val: 53
      },
      ve: {
        val: 46
      },
      dlab: {
        val: 101
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 13
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 60
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'gutierrezcraig@hotmail.com',
      phone: '(703) 666 2110',
      mobile: '(703) 379 4505',
      address: {street: '1022 Newel Street', city: 'Robinson', state: 'MD', zip: '20993', country: 'United States'},
      hor: {street: '15961 Putnam Avenue', city: 'Waterford', state: 'MD', zip: '20343', country: 'United States'},
      ssn: '1775',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Jewish',
      education: 'BS',
      language: '',
      licenseNum: 'MD642490281',
      birthPlace: 'Alden, MD\nUnited States'
    },
    exams: {
      afqt: 80,
      gs: 94,
      ar: 36,
      wk: 66,
      pc: 98,
      mk: 70,
      as: 56,
      mc: 99,
      ao: 70,
      ei: 88,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Ines',
    lastName: 'Gonzalez',
    active: true,
    dob: '1996-10-22',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 2,
      activity: 'EM',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 69
      },
      weight: {
        val: 186
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 58
      },
      cl: {
        val: 113
      },
      gt: {
        val: 56
      },
      el: {
        val: 76
      },
      mm: {
        val: 55
      },
      qt: {
        val: 92
      },
      ve: {
        val: 77
      },
      dlab: {
        val: 140
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 3
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 13
        },
        acuity: {
          val: 50
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'inesgonzalez@hotmail.com',
      phone: '(703) 638 5523',
      mobile: '(703) 439 3474',
      address: {street: '4504 Seagate Avenue', city: 'Lund', state: 'VA', zip: '20082', country: 'United States'},
      hor: {street: '15711 Hausman Street', city: 'Jamestown', state: 'VA', zip: '20930', country: 'United States'},
      ssn: '3296',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 2,
      race: 'Black',
      religion: 'Muslim',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'MD996390230',
      birthPlace: 'Clayville, VA\nUnited States'
    },
    exams: {
      afqt: 76,
      gs: 76,
      ar: 82,
      wk: 30,
      pc: 30,
      mk: 96,
      as: 30,
      mc: 71,
      ao: 94,
      ei: 56,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Eddy',
    lastName: 'Price',
    active: true,
    dob: '1996-03-20',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 7,
      activity: 'HV',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 63
      },
      weight: {
        val: 175
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 80
      },
      cl: {
        val: 77
      },
      gt: {
        val: 86
      },
      el: {
        val: 76
      },
      mm: {
        val: 110
      },
      qt: {
        val: 111
      },
      ve: {
        val: 69
      },
      dlab: {
        val: 153
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 13
        },
        acuity: {
          val: 100
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 100
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'popeprice@hotmail.com',
      phone: '(703) 114 6756',
      mobile: '(703) 728 4323',
      address: {street: '1752 Burnett Street', city: 'Springhill', state: 'MD', zip: '20569', country: 'United States'},
      hor: {street: '22791 Eagle Street', city: 'Downsville', state: 'MD', zip: '21640', country: 'United States'},
      ssn: '9729',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Pacific Islander',
      religion: 'Catholic',
      education: 'HS',
      language: '',
      licenseNum: 'MD705056037',
      birthPlace: 'Steinhatchee, MD\nUnited States'
    },
    exams: {
      afqt: 99,
      gs: 98,
      ar: 55,
      wk: 57,
      pc: 57,
      mk: 48,
      as: 84,
      mc: 31,
      ao: 98,
      ei: 47,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Celia',
    lastName: 'Duke',
    active: true,
    dob: '1997-07-10',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 10,
      activity: 'HV',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 72
      },
      weight: {
        val: 220
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 61
      },
      cl: {
        val: 105
      },
      gt: {
        val: 62
      },
      el: {
        val: 60
      },
      mm: {
        val: 93
      },
      qt: {
        val: 95
      },
      ve: {
        val: 103
      },
      dlab: {
        val: 145
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 12
        },
        acuity: {
          val: 70
        },
        acuity1: {
          val: 25
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'celiaduke@hotmail.com',
      phone: '(703) 395 9893',
      mobile: '(703) 399 9136',
      address: {street: '9316 Stoddard Place', city: 'Guthrie', state: 'VA', zip: '20871', country: 'United States'},
      hor: {street: '244 Hawthorne Street', city: 'Carlton', state: 'VA', zip: '20808', country: 'United States'},
      ssn: '1881',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Married',
      dependents: 1,
      race: 'White',
      religion: 'Catholic',
      education: 'HS',
      language: '',
      licenseNum: 'MD539152280',
      birthPlace: 'Hatteras, VA\nUnited States'
    },
    exams: {
      afqt: 95,
      gs: 79,
      ar: 92,
      wk: 55,
      pc: 57,
      mk: 90,
      as: 35,
      mc: 64,
      ao: 55,
      ei: 92,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Orson',
    lastName: 'Chan',
    active: true,
    dob: '2000-08-08',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 2,
      activity: 'HV',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 67
      },
      weight: {
        val: 159
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 43
      },
      cl: {
        val: 55
      },
      gt: {
        val: 141
      },
      el: {
        val: 129
      },
      mm: {
        val: 108
      },
      qt: {
        val: 103
      },
      ve: {
        val: 34
      },
      dlab: {
        val: 132
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: false
        },
        color: {
          val: 12
        },
        acuity: {
          val: 20
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 70
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'cookchan@gmail.com',
      phone: '(703) 653 7164',
      mobile: '(703) 164 8208',
      address: {street: '12196 Brigham Street', city: 'Darrtown', state: 'MD', zip: '20513', country: 'United States'},
      hor: {street: '18749 Jay Street', city: 'Dellview', state: 'VA', zip: '20698', country: 'United States'},
      ssn: '1220',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'N/A',
      education: 'BS',
      language: '',
      licenseNum: 'VA373450040',
      birthPlace: 'Mapletown, VA\nUnited States'
    },
    exams: {
      afqt: 95,
      gs: 36,
      ar: 76,
      wk: 64,
      pc: 34,
      mk: 57,
      as: 67,
      mc: 99,
      ao: 31,
      ei: 95,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Adela',
    lastName: 'Savage',
    active: true,
    dob: '1999-12-04',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 0,
      activity: 'HV',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 63
      },
      weight: {
        val: 218
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 66
      },
      cl: {
        val: 98
      },
      gt: {
        val: 96
      },
      el: {
        val: 81
      },
      mm: {
        val: 74
      },
      qt: {
        val: 123
      },
      ve: {
        val: 75
      },
      dlab: {
        val: 31
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 4
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 8
        },
        acuity: {
          val: 70
        },
        acuity1: {
          val: 25
        },
        acuity2: {
          val: 40
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 2
      }
    },
    personal: {
      email: 'adelasavage@hotmail.com',
      phone: '(703) 484 3721',
      mobile: '(703) 740 9410',
      address: {street: '3334 Bayview Place', city: 'Wakarusa', state: 'VA', zip: '20619', country: 'United States'},
      hor: {street: '15905 Alabama Avenue', city: 'Sunnyside', state: 'MD', zip: '20821', country: 'United States'},
      ssn: '9411',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Married',
      dependents: 1,
      race: 'White',
      religion: 'Catholic',
      education: 'HS',
      language: 'Portuguese',
      licenseNum: 'VA819680019',
      birthPlace: 'Bainbridge, VA\nUnited States'
    },
    exams: {
      afqt: 78,
      gs: 66,
      ar: 94,
      wk: 52,
      pc: 78,
      mk: 39,
      as: 37,
      mc: 92,
      ao: 59,
      ei: 72,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Julian',
    lastName: 'Daniel',
    active: true,
    dob: '1996-04-01',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 10,
      activity: 'TC',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 61
      },
      weight: {
        val: 174
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 60
      },
      cl: {
        val: 55
      },
      gt: {
        val: 64
      },
      el: {
        val: 135
      },
      mm: {
        val: 88
      },
      qt: {
        val: 112
      },
      ve: {
        val: 69
      },
      dlab: {
        val: 144
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 100
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 70
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'julianadaniel@outlook.com',
      phone: '(703) 428 1800',
      mobile: '(703) 742 6842',
      address: {street: '2528 Summit Street', city: 'Brazos', state: 'MD', zip: '20526', country: 'United States'},
      hor: {street: '24633 Macdougal Street', city: 'Soham', state: 'MD', zip: '21743', country: 'United States'},
      ssn: '7618',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 2,
      race: 'Black',
      religion: 'Protestant',
      education: 'MA',
      language: 'Arabic',
      licenseNum: 'MD164233745',
      birthPlace: 'Kenvil, VA\nUnited States'
    },
    exams: {
      afqt: 75,
      gs: 30,
      ar: 49,
      wk: 35,
      pc: 36,
      mk: 62,
      as: 91,
      mc: 93,
      ao: 94,
      ei: 70,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Katrina',
    lastName: 'Francis',
    active: true,
    dob: '1997-09-09',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 6,
      activity: 'EM',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 63
      },
      weight: {
        val: 181
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 45
      },
      cl: {
        val: 58
      },
      gt: {
        val: 114
      },
      el: {
        val: 117
      },
      mm: {
        val: 102
      },
      qt: {
        val: 123
      },
      ve: {
        val: 94
      },
      dlab: {
        val: 163
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 70
        },
        acuity2: {
          val: 200
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'katrinafrancis@outlook.com',
      phone: '(703) 546 2675',
      mobile: '(703) 208 9341',
      address: {street: '12876 Pierrepont Street', city: 'Graniteville', state: 'MD', zip: '20320', country: 'United States'},
      hor: {street: '12530 Lloyd Court', city: 'Ypsilanti', state: 'MD', zip: '21575', country: 'United States'},
      ssn: '9611',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 3,
      race: 'Black',
      religion: 'Catholic',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'MD733014309',
      birthPlace: 'Tuttle, MD\nUnited States'
    },
    exams: {
      afqt: 89,
      gs: 91,
      ar: 75,
      wk: 67,
      pc: 78,
      mk: 82,
      as: 75,
      mc: 78,
      ao: 51,
      ei: 33,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Fred',
    lastName: 'Mullen',
    active: true,
    dob: '1998-09-14',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 10,
      activity: 'EM',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 65
      },
      weight: {
        val: 172
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 43
      },
      cl: {
        val: 63
      },
      gt: {
        val: 65
      },
      el: {
        val: 123
      },
      mm: {
        val: 115
      },
      qt: {
        val: 76
      },
      ve: {
        val: 100
      },
      dlab: {
        val: 38
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 3
        },
        acuity: {
          val: 40
        },
        acuity1: {
          val: 40
        },
        acuity2: {
          val: 60
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'fredamullen@gmail.com',
      phone: '(703) 139 4698',
      mobile: '(703) 226 4830',
      address: {street: '9214 Ash Street', city: 'Makena', state: 'MD', zip: '20909', country: 'United States'},
      hor: {street: '19975 Franklin Avenue', city: 'Warren', state: 'MD', zip: '21907', country: 'United States'},
      ssn: '2771',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Muslim',
      education: 'GED',
      language: 'Spanish',
      licenseNum: 'VA370335721',
      birthPlace: 'Independence, MD\nUnited States'
    },
    exams: {
      afqt: 52,
      gs: 78,
      ar: 60,
      wk: 96,
      pc: 38,
      mk: 81,
      as: 56,
      mc: 97,
      ao: 57,
      ei: 56,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Kenny',
    lastName: 'Delgado',
    active: true,
    dob: '1998-08-08',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 3,
      activity: 'HV',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 67
      },
      weight: {
        val: 143
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 97
      },
      cl: {
        val: 143
      },
      gt: {
        val: 102
      },
      el: {
        val: 107
      },
      mm: {
        val: 122
      },
      qt: {
        val: 92
      },
      ve: {
        val: 56
      },
      dlab: {
        val: 47
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 2
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 70
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 200
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'kennedydelgado@outlook.com',
      phone: '(703) 588 9770',
      mobile: '(703) 430 3478',
      address: {street: '14368 Monaco Place', city: 'Floriston', state: 'VA', zip: '20339', country: 'United States'},
      hor: {street: '15327 Sackman Street', city: 'Rodanthe', state: 'VA', zip: '20591', country: 'United States'},
      ssn: '5621',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Pacific Islander',
      religion: 'Buddhist',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'VA378864737',
      birthPlace: 'Ballico, VA\nUnited States'
    },
    exams: {
      afqt: 69,
      gs: 80,
      ar: 82,
      wk: 85,
      pc: 83,
      mk: 32,
      as: 78,
      mc: 59,
      ao: 98,
      ei: 98,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Ramon',
    lastName: 'Humphrey',
    active: true,
    dob: '1999-02-08',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 10,
      activity: 'OT',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 62
      },
      weight: {
        val: 207
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 82
      },
      cl: {
        val: 109
      },
      gt: {
        val: 90
      },
      el: {
        val: 77
      },
      mm: {
        val: 118
      },
      qt: {
        val: 116
      },
      ve: {
        val: 52
      },
      dlab: {
        val: 63
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: true
        },
        color: {
          val: 8
        },
        acuity: {
          val: 25
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'ayalahumphrey@gmail.com',
      phone: '(703) 409 3684',
      mobile: '(703) 278 7755',
      address: {street: '5300 Humboldt Street', city: 'Edmund', state: 'VA', zip: '20063', country: 'United States'},
      hor: {street: '12700 Woodbine Street', city: 'Fairhaven', state: 'MD', zip: '21357', country: 'United States'},
      ssn: '2553',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'GED',
      language: '',
      licenseNum: 'MD942510515',
      birthPlace: 'Gulf, VA\nUnited States'
    },
    exams: {
      afqt: 68,
      gs: 88,
      ar: 74,
      wk: 83,
      pc: 98,
      mk: 86,
      as: 44,
      mc: 33,
      ao: 74,
      ei: 75,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Fischer',
    lastName: 'Osborn',
    active: true,
    dob: '1997-05-06',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 8,
      activity: 'TC',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 68
      },
      weight: {
        val: 139
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 96
      },
      cl: {
        val: 73
      },
      gt: {
        val: 71
      },
      el: {
        val: 131
      },
      mm: {
        val: 97
      },
      qt: {
        val: 91
      },
      ve: {
        val: 94
      },
      dlab: {
        val: 99
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 20
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'fischerosborn@hotmail.com',
      phone: '(703) 131 6068',
      mobile: '(703) 359 3173',
      address: {street: '12833 Rogers Avenue', city: 'Castleton', state: 'MD', zip: '20469', country: 'United States'},
      hor: {street: '6379 Hamilton Walk', city: 'Albrightsville', state: 'VA', zip: '20772', country: 'United States'},
      ssn: '8580',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Muslim',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'VA866570796',
      birthPlace: 'Alleghenyville, VA\nUnited States'
    },
    exams: {
      afqt: 73,
      gs: 72,
      ar: 44,
      wk: 32,
      pc: 45,
      mk: 96,
      as: 54,
      mc: 49,
      ao: 51,
      ei: 67,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Lester',
    lastName: 'Hammond',
    active: true,
    dob: '1999-04-02',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 5,
      activity: 'EM',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 66
      },
      weight: {
        val: 210
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 76
      },
      cl: {
        val: 58
      },
      gt: {
        val: 115
      },
      el: {
        val: 141
      },
      mm: {
        val: 63
      },
      qt: {
        val: 62
      },
      ve: {
        val: 64
      },
      dlab: {
        val: 70
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 2
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 25
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'lesterhammond@aol.com',
      phone: '(703) 204 4119',
      mobile: '(703) 786 1406',
      address: {street: '5744 Hall Street', city: 'Fannett', state: 'MD', zip: '20985', country: 'United States'},
      hor: {street: '5632 Etna Street', city: 'Kennedyville', state: 'VA', zip: '21509', country: 'United States'},
      ssn: '3171',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'Black',
      religion: 'Muslim',
      education: 'BS',
      language: 'Arabic',
      licenseNum: 'VA196152780',
      birthPlace: 'Faxon, MD\nUnited States'
    },
    exams: {
      afqt: 51,
      gs: 36,
      ar: 54,
      wk: 38,
      pc: 59,
      mk: 50,
      as: 68,
      mc: 86,
      ao: 49,
      ei: 79,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Reese',
    lastName: 'Paul',
    active: true,
    dob: '1997-08-23',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 7,
      activity: 'HV',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 73
      },
      weight: {
        val: 188
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 59
      },
      cl: {
        val: 66
      },
      gt: {
        val: 120
      },
      el: {
        val: 132
      },
      mm: {
        val: 51
      },
      qt: {
        val: 83
      },
      ve: {
        val: 80
      },
      dlab: {
        val: 93
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 12
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 70
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'reesepaul@aol.com',
      phone: '(703) 142 1414',
      mobile: '(703) 242 4033',
      address: {street: '5924 Highland Avenue', city: 'Freelandville', state: 'VA', zip: '20082', country: 'United States'},
      hor: {street: '3562 Woodside Avenue', city: 'Cetronia', state: 'MD', zip: '20240', country: 'United States'},
      ssn: '1769',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'N/A',
      education: 'GED',
      language: 'Spanish',
      licenseNum: 'VA177198335',
      birthPlace: 'Woodburn, VA\nUnited States'
    },
    exams: {
      afqt: 69,
      gs: 51,
      ar: 75,
      wk: 30,
      pc: 59,
      mk: 68,
      as: 61,
      mc: 47,
      ao: 31,
      ei: 95,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Eric',
    lastName: 'Reilly',
    active: true,
    dob: '1996-02-02',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 8,
      activity: 'EM',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 73
      },
      weight: {
        val: 150
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 65
      },
      cl: {
        val: 122
      },
      gt: {
        val: 56
      },
      el: {
        val: 56
      },
      mm: {
        val: 108
      },
      qt: {
        val: 50
      },
      ve: {
        val: 68
      },
      dlab: {
        val: 75
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 2
        }
      },
      moral: {
        conduct: {
          val: 2
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 50
        },
        acuity1: {
          val: 25
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'erickareilly@aol.com',
      phone: '(703) 411 2207',
      mobile: '(703) 747 6460',
      address: {street: '11745 Butler Place', city: 'Dorneyville', state: 'VA', zip: '20197', country: 'United States'},
      hor: {street: '8197 Hope Street', city: 'Lacomb', state: 'VA', zip: '21930', country: 'United States'},
      ssn: '4346',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 2,
      race: 'White',
      religion: 'N/A',
      education: 'BS',
      language: 'Arabic',
      licenseNum: 'MD620067402',
      birthPlace: 'Croom, MD\nUnited States'
    },
    exams: {
      afqt: 91,
      gs: 36,
      ar: 37,
      wk: 79,
      pc: 32,
      mk: 90,
      as: 70,
      mc: 98,
      ao: 62,
      ei: 84,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Debora',
    lastName: 'Fuller',
    active: true,
    dob: '1999-07-17',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 2,
      activity: 'TC',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 61
      },
      weight: {
        val: 201
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 64
      },
      cl: {
        val: 116
      },
      gt: {
        val: 112
      },
      el: {
        val: 55
      },
      mm: {
        val: 87
      },
      qt: {
        val: 72
      },
      ve: {
        val: 85
      },
      dlab: {
        val: 34
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 14
        },
        acuity: {
          val: 50
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 25
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'deborafuller@aol.com',
      phone: '(703) 783 5828',
      mobile: '(703) 272 1443',
      address: {street: '7326 Matthews Court', city: 'Cavalero', state: 'VA', zip: '20485', country: 'United States'},
      hor: {street: '20351 Nixon Court', city: 'Masthope', state: 'MD', zip: '21706', country: 'United States'},
      ssn: '4542',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 1,
      race: 'Asian',
      religion: 'Protestant',
      education: 'GED',
      language: 'Portuguese',
      licenseNum: 'VA710452964',
      birthPlace: 'Carlos, VA\nUnited States'
    },
    exams: {
      afqt: 85,
      gs: 82,
      ar: 66,
      wk: 66,
      pc: 65,
      mk: 31,
      as: 59,
      mc: 45,
      ao: 56,
      ei: 39,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Rivers',
    lastName: 'Knox',
    active: true,
    dob: '1994-08-09',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 3,
      activity: 'EM',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 61
      },
      weight: {
        val: 148
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 97
      },
      cl: {
        val: 126
      },
      gt: {
        val: 61
      },
      el: {
        val: 116
      },
      mm: {
        val: 54
      },
      qt: {
        val: 66
      },
      ve: {
        val: 47
      },
      dlab: {
        val: 128
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 4
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 2
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 60
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 100
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'riversknox@outlook.com',
      phone: '(703) 151 3849',
      mobile: '(703) 413 9843',
      address: {street: '10592 Juliana Place', city: 'Harborton', state: 'VA', zip: '20749', country: 'United States'},
      hor: {street: '14335 Victor Road', city: 'Stouchsburg', state: 'VA', zip: '21111', country: 'United States'},
      ssn: '2630',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 2,
      race: 'Black',
      religion: 'N/A',
      education: 'HS',
      language: '',
      licenseNum: 'VA936197405',
      birthPlace: 'Wyano, MD\nUnited States'
    },
    exams: {
      afqt: 92,
      gs: 76,
      ar: 76,
      wk: 40,
      pc: 63,
      mk: 90,
      as: 98,
      mc: 89,
      ao: 93,
      ei: 78,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Robert',
    lastName: 'Mooney',
    active: true,
    dob: '1996-05-05',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 9,
      activity: 'OT',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 67
      },
      weight: {
        val: 177
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 61
      },
      cl: {
        val: 81
      },
      gt: {
        val: 72
      },
      el: {
        val: 67
      },
      mm: {
        val: 91
      },
      qt: {
        val: 51
      },
      ve: {
        val: 101
      },
      dlab: {
        val: 50
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 3
        },
        acuity: {
          val: 60
        },
        acuity1: {
          val: 40
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'robertamooney@aol.com',
      phone: '(703) 640 1921',
      mobile: '(703) 366 7904',
      address: {street: '7002 Rock Street', city: 'Canoochee', state: 'VA', zip: '20902', country: 'United States'},
      hor: {street: '2797 Gunnison Court', city: 'Linwood', state: 'MD', zip: '21478', country: 'United States'},
      ssn: '5918',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 1,
      race: 'Asian',
      religion: 'Protestant',
      education: 'HS',
      language: 'Arabic',
      licenseNum: 'MD412960102',
      birthPlace: 'Haena, VA\nUnited States'
    },
    exams: {
      afqt: 80,
      gs: 69,
      ar: 51,
      wk: 43,
      pc: 64,
      mk: 72,
      as: 49,
      mc: 58,
      ao: 79,
      ei: 78,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Patrick',
    lastName: 'Terrell',
    active: true,
    dob: '1998-08-12',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 6,
      activity: 'EM',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 70
      },
      weight: {
        val: 192
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 90
      },
      cl: {
        val: 77
      },
      gt: {
        val: 89
      },
      el: {
        val: 89
      },
      mm: {
        val: 67
      },
      qt: {
        val: 86
      },
      ve: {
        val: 65
      },
      dlab: {
        val: 147
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 5
        },
        acuity: {
          val: 70
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 60
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'zelmaterrell@outlook.com',
      phone: '(703) 259 1251',
      mobile: '(703) 568 3722',
      address: {street: '9408 Hubbard Place', city: 'Crisman', state: 'MD', zip: '20960', country: 'United States'},
      hor: {street: '9229 River Street', city: 'Tibbie', state: 'MD', zip: '20448', country: 'United States'},
      ssn: '5182',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Jewish',
      education: 'HS',
      language: 'French',
      licenseNum: 'VA46622325',
      birthPlace: 'Wikieup, MD\nUnited States'
    },
    exams: {
      afqt: 60,
      gs: 85,
      ar: 41,
      wk: 93,
      pc: 95,
      mk: 73,
      as: 94,
      mc: 86,
      ao: 64,
      ei: 60,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Farley',
    lastName: 'Kirkland',
    active: true,
    dob: '1997-03-18',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 10,
      activity: 'HV',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 69
      },
      weight: {
        val: 179
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 43
      },
      cl: {
        val: 150
      },
      gt: {
        val: 122
      },
      el: {
        val: 139
      },
      mm: {
        val: 129
      },
      qt: {
        val: 123
      },
      ve: {
        val: 59
      },
      dlab: {
        val: 71
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 4
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 2
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 8
        },
        acuity: {
          val: 40
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'pittmankirkland@gmail.com',
      phone: '(703) 133 6275',
      mobile: '(703) 715 5900',
      address: {street: '9870 Brightwater Court', city: 'Chestnut', state: 'MD', zip: '20513', country: 'United States'},
      hor: {street: '12997 Jefferson Street', city: 'Tolu', state: 'VA', zip: '20212', country: 'United States'},
      ssn: '8721',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 1,
      race: 'Black',
      religion: 'Buddhist',
      education: 'GED',
      language: 'Portuguese',
      licenseNum: 'VA347263934',
      birthPlace: 'Newkirk, MD\nUnited States'
    },
    exams: {
      afqt: 60,
      gs: 64,
      ar: 62,
      wk: 53,
      pc: 94,
      mk: 50,
      as: 65,
      mc: 87,
      ao: 49,
      ei: 41,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Moses',
    lastName: 'Callahan',
    active: true,
    dob: '1996-12-19',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 0,
      activity: 'EM',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 65
      },
      weight: {
        val: 143
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 82
      },
      cl: {
        val: 113
      },
      gt: {
        val: 86
      },
      el: {
        val: 118
      },
      mm: {
        val: 73
      },
      qt: {
        val: 60
      },
      ve: {
        val: 105
      },
      dlab: {
        val: 102
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 13
        },
        acuity: {
          val: 60
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'mosescallahan@gmail.com',
      phone: '(703) 794 5920',
      mobile: '(703) 316 2985',
      address: {street: '5706 Richards Street', city: 'Fedora', state: 'MD', zip: '20821', country: 'United States'},
      hor: {street: '5050 Anthony Street', city: 'Malott', state: 'MD', zip: '21615', country: 'United States'},
      ssn: '8899',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Asian',
      religion: 'N/A',
      education: 'GED',
      language: 'Portuguese',
      licenseNum: 'MD906326211',
      birthPlace: 'Weeksville, VA\nUnited States'
    },
    exams: {
      afqt: 88,
      gs: 48,
      ar: 44,
      wk: 41,
      pc: 46,
      mk: 83,
      as: 78,
      mc: 38,
      ao: 73,
      ei: 63,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Melissa',
    lastName: 'Cunningham',
    active: true,
    dob: '1999-05-23',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 8,
      activity: 'HV',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 0
      },
      height: {
        val: 71
      },
      weight: {
        val: 210
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 50
      },
      cl: {
        val: 122
      },
      gt: {
        val: 138
      },
      el: {
        val: 134
      },
      mm: {
        val: 91
      },
      qt: {
        val: 66
      },
      ve: {
        val: 80
      },
      dlab: {
        val: 123
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 2
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: true
        },
        color: {
          val: 5
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'melissacunningham@hotmail.com',
      phone: '(703) 213 3272',
      mobile: '(703) 480 7456',
      address: {street: '5225 Fleet Walk', city: 'Lewis', state: 'MD', zip: '20912', country: 'United States'},
      hor: {street: '424 Friel Place', city: 'Mayfair', state: 'MD', zip: '20296', country: 'United States'},
      ssn: '9156',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Muslim',
      education: 'BS',
      language: 'Portuguese',
      licenseNum: 'VA37621654',
      birthPlace: 'Hayes, VA\nUnited States'
    },
    exams: {
      afqt: 56,
      gs: 49,
      ar: 43,
      wk: 98,
      pc: 70,
      mk: 75,
      as: 39,
      mc: 69,
      ao: 91,
      ei: 94,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Avery',
    lastName: 'Foreman',
    active: true,
    dob: '1995-02-20',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 8,
      activity: 'EM',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 0
      },
      height: {
        val: 64
      },
      weight: {
        val: 155
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 81
      },
      cl: {
        val: 64
      },
      gt: {
        val: 135
      },
      el: {
        val: 107
      },
      mm: {
        val: 109
      },
      qt: {
        val: 80
      },
      ve: {
        val: 98
      },
      dlab: {
        val: 90
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 4
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 11
        },
        acuity: {
          val: 25
        },
        acuity1: {
          val: 70
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 2
      }
    },
    personal: {
      email: 'foremanavery@aol.com',
      phone: '(703) 180 6144',
      mobile: '(703) 775 3447',
      address: {street: '4850 Varick Avenue', city: 'Dale', state: 'MD', zip: '20266', country: 'United States'},
      hor: {street: '16659 Mill Street', city: 'Westphalia', state: 'MD', zip: '21939', country: 'United States'},
      ssn: '1937',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'Pacific Islander',
      religion: 'N/A',
      education: 'HS',
      language: '',
      licenseNum: 'MD28715879',
      birthPlace: 'Rosewood, MD\nUnited States'
    },
    exams: {
      afqt: 81,
      gs: 81,
      ar: 91,
      wk: 70,
      pc: 50,
      mk: 66,
      as: 61,
      mc: 72,
      ao: 71,
      ei: 40,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Kellie',
    lastName: 'Wood',
    active: true,
    dob: '1999-10-18',
    status: 'Contract/Poolee',
        dutyType: {id: 2, desc: 'DMV'},
    notif: {
      daysuntil: 9,
      activity: 'EM',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 73
      },
      weight: {
        val: 195
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 92
      },
      cl: {
        val: 116
      },
      gt: {
        val: 126
      },
      el: {
        val: 60
      },
      mm: {
        val: 75
      },
      qt: {
        val: 81
      },
      ve: {
        val: 52
      },
      dlab: {
        val: 87
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 20
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 40
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'kelliewood@hotmail.com',
      phone: '(703) 439 3635',
      mobile: '(703) 786 2709',
      address: {street: '8715 Seigel Court', city: 'Allensworth', state: 'VA', zip: '20055', country: 'United States'},
      hor: {street: '8202 Noel Avenue', city: 'Belfair', state: 'MD', zip: '20099', country: 'United States'},
      ssn: '8271',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Muslim',
      education: 'HS',
      language: 'Portuguese',
      licenseNum: 'MD204921736',
      birthPlace: 'Shrewsbury, MD\nUnited States'
    },
    exams: {
      afqt: 92,
      gs: 85,
      ar: 42,
      wk: 53,
      pc: 82,
      mk: 76,
      as: 54,
      mc: 61,
      ao: 38,
      ei: 81,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Enid',
    lastName: 'Dickson',
    active: true,
    dob: '1999-03-09',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 8,
      activity: 'OT',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 0
      },
      height: {
        val: 70
      },
      weight: {
        val: 149
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 59
      },
      cl: {
        val: 68
      },
      gt: {
        val: 115
      },
      el: {
        val: 53
      },
      mm: {
        val: 66
      },
      qt: {
        val: 68
      },
      ve: {
        val: 99
      },
      dlab: {
        val: 53
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 2
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 14
        },
        acuity: {
          val: 60
        },
        acuity1: {
          val: 40
        },
        acuity2: {
          val: 50
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'eniddickson@hotmail.com',
      phone: '(703) 757 2834',
      mobile: '(703) 141 7535',
      address: {street: '7008 Fiske Place', city: 'Muir', state: 'VA', zip: '20416', country: 'United States'},
      hor: {street: '22319 Kosciusko Street', city: 'Leming', state: 'VA', zip: '20945', country: 'United States'},
      ssn: '5083',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Pacific Islander',
      religion: 'Muslim',
      education: 'GED',
      language: 'Akan',
      licenseNum: 'MD514987351',
      birthPlace: 'Leland, VA\nUnited States'
    },
    exams: {
      afqt: 58,
      gs: 61,
      ar: 55,
      wk: 54,
      pc: 97,
      mk: 81,
      as: 58,
      mc: 51,
      ao: 67,
      ei: 67,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Dyer',
    lastName: 'Petersen',
    active: true,
    dob: '1995-06-14',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 5,
      activity: 'TC',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 64
      },
      weight: {
        val: 217
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 52
      },
      cl: {
        val: 82
      },
      gt: {
        val: 60
      },
      el: {
        val: 83
      },
      mm: {
        val: 78
      },
      qt: {
        val: 126
      },
      ve: {
        val: 69
      },
      dlab: {
        val: 94
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'dyerpetersen@aol.com',
      phone: '(703) 321 5930',
      mobile: '(703) 787 2055',
      address: {street: '868 Dare Court', city: 'Navarre', state: 'MD', zip: '20882', country: 'United States'},
      hor: {street: '8774 Classon Avenue', city: 'Bluetown', state: 'MD', zip: '21442', country: 'United States'},
      ssn: '3010',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Asian',
      religion: 'Buddhist',
      education: 'HS',
      language: '',
      licenseNum: 'VA964859364',
      birthPlace: 'Bladensburg, MD\nUnited States'
    },
    exams: {
      afqt: 86,
      gs: 41,
      ar: 93,
      wk: 35,
      pc: 83,
      mk: 88,
      as: 42,
      mc: 44,
      ao: 95,
      ei: 49,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Sondra',
    lastName: 'Booker',
    active: true,
    dob: '2000-12-26',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 7,
      activity: 'EM',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 64
      },
      weight: {
        val: 153
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 72
      },
      cl: {
        val: 116
      },
      gt: {
        val: 89
      },
      el: {
        val: 63
      },
      mm: {
        val: 68
      },
      qt: {
        val: 71
      },
      ve: {
        val: 69
      },
      dlab: {
        val: 130
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 70
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 25
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'sondrabooker@aol.com',
      phone: '(703) 571 7545',
      mobile: '(703) 452 2393',
      address: {street: '3001 Vanderbilt Avenue', city: 'Needmore', state: 'VA', zip: '20731', country: 'United States'},
      hor: {street: '24483 Bedell Lane', city: 'Nutrioso', state: 'MD', zip: '21210', country: 'United States'},
      ssn: '5607',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Buddhist',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'VA915422814',
      birthPlace: 'Edinburg, MD\nUnited States'
    },
    exams: {
      afqt: 69,
      gs: 36,
      ar: 99,
      wk: 73,
      pc: 66,
      mk: 69,
      as: 52,
      mc: 79,
      ao: 92,
      ei: 79,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Geraldine',
    lastName: 'O\'Connor',
    active: true,
    dob: '1995-02-11',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 1,
      activity: 'TC',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 62
      },
      weight: {
        val: 167
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 82
      },
      cl: {
        val: 63
      },
      gt: {
        val: 75
      },
      el: {
        val: 79
      },
      mm: {
        val: 90
      },
      qt: {
        val: 91
      },
      ve: {
        val: 64
      },
      dlab: {
        val: 64
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 4
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 11
        },
        acuity: {
          val: 70
        },
        acuity1: {
          val: 70
        },
        acuity2: {
          val: 40
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'geraldineoconnor@gmail.com',
      phone: '(703) 338 9343',
      mobile: '(703) 273 3648',
      address: {street: '10750 Nelson Street', city: 'Kerby', state: 'VA', zip: '20345', country: 'United States'},
      hor: {street: '24872 Losee Terrace', city: 'Bradenville', state: 'MD', zip: '20955', country: 'United States'},
      ssn: '5230',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'Muslim',
      education: 'BS',
      language: 'French',
      licenseNum: 'MD843110228',
      birthPlace: 'Madaket, VA\nUnited States'
    },
    exams: {
      afqt: 73,
      gs: 36,
      ar: 59,
      wk: 32,
      pc: 43,
      mk: 35,
      as: 39,
      mc: 42,
      ao: 61,
      ei: 77,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Ophelia',
    lastName: 'Holloway',
    active: true,
    dob: '1998-03-28',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 2,
      activity: 'HV',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 0
      },
      height: {
        val: 61
      },
      weight: {
        val: 176
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 78
      },
      cl: {
        val: 149
      },
      gt: {
        val: 82
      },
      el: {
        val: 104
      },
      mm: {
        val: 126
      },
      qt: {
        val: 105
      },
      ve: {
        val: 105
      },
      dlab: {
        val: 40
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 2
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 2
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 40
        },
        acuity1: {
          val: 40
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'opheliaholloway@outlook.com',
      phone: '(703) 760 5749',
      mobile: '(703) 607 8068',
      address: {street: '6001 Denton Place', city: 'Urbana', state: 'MD', zip: '20456', country: 'United States'},
      hor: {street: '21964 Duffield Street', city: 'Davenport', state: 'MD', zip: '21233', country: 'United States'},
      ssn: '4637',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'N/A',
      education: 'HS',
      language: '',
      licenseNum: 'VA614135717',
      birthPlace: 'Cecilia, VA\nUnited States'
    },
    exams: {
      afqt: 70,
      gs: 36,
      ar: 44,
      wk: 95,
      pc: 64,
      mk: 50,
      as: 78,
      mc: 43,
      ao: 40,
      ei: 77,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Martin',
    lastName: 'Hayes',
    active: true,
    dob: '1998-03-06',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 4,
      activity: 'EM',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 73
      },
      weight: {
        val: 146
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 58
      },
      cl: {
        val: 139
      },
      gt: {
        val: 102
      },
      el: {
        val: 121
      },
      mm: {
        val: 107
      },
      qt: {
        val: 88
      },
      ve: {
        val: 86
      },
      dlab: {
        val: 115
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 3
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'martinhayes@aol.com',
      phone: '(703) 331 8517',
      mobile: '(703) 784 1559',
      address: {street: '9492 Canda Avenue', city: 'Chase', state: 'VA', zip: '20061', country: 'United States'},
      hor: {street: '16481 Ditmars Street', city: 'Layhill', state: 'VA', zip: '21625', country: 'United States'},
      ssn: '4703',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'Muslim',
      education: 'GED',
      language: 'Spanish',
      licenseNum: 'MD786385889',
      birthPlace: 'Statenville, VA\nUnited States'
    },
    exams: {
      afqt: 82,
      gs: 67,
      ar: 84,
      wk: 33,
      pc: 40,
      mk: 47,
      as: 72,
      mc: 71,
      ao: 44,
      ei: 74,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Mike',
    lastName: 'Hood',
    active: true,
    dob: '2000-12-05',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 3,
      activity: 'OT',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 0
      },
      height: {
        val: 67
      },
      weight: {
        val: 151
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 63
      },
      cl: {
        val: 128
      },
      gt: {
        val: 99
      },
      el: {
        val: 108
      },
      mm: {
        val: 62
      },
      qt: {
        val: 92
      },
      ve: {
        val: 46
      },
      dlab: {
        val: 34
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 4
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: false
        },
        color: {
          val: 11
        },
        acuity: {
          val: 50
        },
        acuity1: {
          val: 40
        },
        acuity2: {
          val: 70
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'mikehood@aol.com',
      phone: '(703) 564 2114',
      mobile: '(703) 315 7509',
      address: {street: '610 Battery Avenue', city: 'Wanamie', state: 'MD', zip: '20864', country: 'United States'},
      hor: {street: '16634 Oriental Boulevard', city: 'Torboy', state: 'MD', zip: '20670', country: 'United States'},
      ssn: '7021',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Catholic',
      education: 'GED',
      language: 'French',
      licenseNum: 'MD929313789',
      birthPlace: 'Witmer, VA\nUnited States'
    },
    exams: {
      afqt: 67,
      gs: 39,
      ar: 95,
      wk: 30,
      pc: 94,
      mk: 30,
      as: 97,
      mc: 78,
      ao: 30,
      ei: 61,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Wade',
    lastName: 'Head',
    active: true,
    dob: '1997-03-18',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 4,
      activity: 'TC',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 66
      },
      weight: {
        val: 217
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 90
      },
      cl: {
        val: 70
      },
      gt: {
        val: 102
      },
      el: {
        val: 125
      },
      mm: {
        val: 52
      },
      qt: {
        val: 69
      },
      ve: {
        val: 72
      },
      dlab: {
        val: 84
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: true
        },
        color: {
          val: 11
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 25
        },
        acuity2: {
          val: 25
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'headwade@outlook.com',
      phone: '(703) 361 5112',
      mobile: '(703) 350 7019',
      address: {street: '4944 Gardner Avenue', city: 'Darbydale', state: 'VA', zip: '20259', country: 'United States'},
      hor: {street: '2312 Schermerhorn Street', city: 'Glenshaw', state: 'MD', zip: '20298', country: 'United States'},
      ssn: '3773',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Catholic',
      education: 'HS',
      language: 'Portuguese',
      licenseNum: 'VA476955990',
      birthPlace: 'Haring, MD\nUnited States'
    },
    exams: {
      afqt: 93,
      gs: 39,
      ar: 66,
      wk: 86,
      pc: 43,
      mk: 61,
      as: 71,
      mc: 41,
      ao: 30,
      ei: 49,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Jody',
    lastName: 'Fry',
    active: true,
    dob: '2000-12-26',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 4,
      activity: 'HV',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 62
      },
      weight: {
        val: 209
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 99
      },
      cl: {
        val: 97
      },
      gt: {
        val: 120
      },
      el: {
        val: 72
      },
      mm: {
        val: 56
      },
      qt: {
        val: 84
      },
      ve: {
        val: 88
      },
      dlab: {
        val: 139
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 3
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 8
        },
        acuity: {
          val: 200
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'jodyfry@gmail.com',
      phone: '(703) 261 6842',
      mobile: '(703) 307 7947',
      address: {street: '14619 Seton Place', city: 'Rutherford', state: 'MD', zip: '20295', country: 'United States'},
      hor: {street: '12397 Greenwood Avenue', city: 'Worcester', state: 'MD', zip: '21791', country: 'United States'},
      ssn: '6665',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'GED',
      language: '',
      licenseNum: 'MD276490044',
      birthPlace: 'Fidelis, MD\nUnited States'
    },
    exams: {
      afqt: 71,
      gs: 99,
      ar: 42,
      wk: 91,
      pc: 64,
      mk: 53,
      as: 38,
      mc: 76,
      ao: 63,
      ei: 98,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Allen',
    lastName: 'Burton',
    active: true,
    dob: '1999-09-04',
    status: 'Contract/Poolee',
        dutyType: {id: 3, desc: 'DMV'},
    notif: {
      daysuntil: 0,
      activity: 'OT',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 69
      },
      weight: {
        val: 182
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 39
      },
      cl: {
        val: 140
      },
      gt: {
        val: 131
      },
      el: {
        val: 85
      },
      mm: {
        val: 74
      },
      qt: {
        val: 51
      },
      ve: {
        val: 85
      },
      dlab: {
        val: 131
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 2
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: true
        },
        color: {
          val: 12
        },
        acuity: {
          val: 50
        },
        acuity1: {
          val: 70
        },
        acuity2: {
          val: 200
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'allenburton@gmail.com',
      phone: '(703) 410 1403',
      mobile: '(703) 134 6592',
      address: {street: '13317 Nevins Street', city: 'Greensburg', state: 'VA', zip: '20450', country: 'United States'},
      hor: {street: '546 Opal Court', city: 'Ivanhoe', state: 'MD', zip: '21638', country: 'United States'},
      ssn: '5964',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Jewish',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'VA460923334',
      birthPlace: 'Selma, VA\nUnited States'
    },
    exams: {
      afqt: 74,
      gs: 42,
      ar: 60,
      wk: 99,
      pc: 87,
      mk: 61,
      as: 36,
      mc: 60,
      ao: 69,
      ei: 39,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Frances',
    lastName: 'Clemons',
    active: true,
    dob: '1994-08-19',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 6,
      activity: 'HV',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 73
      },
      weight: {
        val: 173
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 40
      },
      cl: {
        val: 129
      },
      gt: {
        val: 137
      },
      el: {
        val: 126
      },
      mm: {
        val: 130
      },
      qt: {
        val: 96
      },
      ve: {
        val: 49
      },
      dlab: {
        val: 40
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 8
        },
        acuity: {
          val: 40
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'francesclemons@aol.com',
      phone: '(703) 139 4625',
      mobile: '(703) 775 8048',
      address: {street: '3745 Pershing Loop', city: 'Rote', state: 'MD', zip: '20355', country: 'United States'},
      hor: {street: '23840 Varick Street', city: 'Morgandale', state: 'MD', zip: '20929', country: 'United States'},
      ssn: '3769',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'N/A',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'VA593646578',
      birthPlace: 'Elliott, VA\nUnited States'
    },
    exams: {
      afqt: 91,
      gs: 30,
      ar: 53,
      wk: 57,
      pc: 97,
      mk: 53,
      as: 35,
      mc: 78,
      ao: 55,
      ei: 99,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Charles',
    lastName: 'Bowman',
    active: true,
    dob: '2000-12-24',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 7,
      activity: 'OT',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 61
      },
      weight: {
        val: 212
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 82
      },
      cl: {
        val: 86
      },
      gt: {
        val: 101
      },
      el: {
        val: 50
      },
      mm: {
        val: 105
      },
      qt: {
        val: 124
      },
      ve: {
        val: 81
      },
      dlab: {
        val: 66
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 200
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 2
      }
    },
    personal: {
      email: 'charitybowman@aol.com',
      phone: '(703) 127 5479',
      mobile: '(703) 320 6403',
      address: {street: '16348 Carlton Avenue', city: 'Bakersville', state: 'MD', zip: '20140', country: 'United States'},
      hor: {street: '14810 Dewey Place', city: 'Riegelwood', state: 'VA', zip: '21706', country: 'United States'},
      ssn: '9805',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'Black',
      religion: 'Buddhist',
      education: 'HS',
      language: '',
      licenseNum: 'MD531727463',
      birthPlace: 'Catherine, VA\nUnited States'
    },
    exams: {
      afqt: 95,
      gs: 90,
      ar: 84,
      wk: 79,
      pc: 52,
      mk: 68,
      as: 34,
      mc: 57,
      ao: 72,
      ei: 78,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Houston',
    lastName: 'Wiley',
    active: true,
    dob: '1994-11-30',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 2,
      activity: 'TC',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 71
      },
      weight: {
        val: 221
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 70
      },
      cl: {
        val: 65
      },
      gt: {
        val: 129
      },
      el: {
        val: 107
      },
      mm: {
        val: 125
      },
      qt: {
        val: 96
      },
      ve: {
        val: 36
      },
      dlab: {
        val: 67
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 4
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: true
        },
        color: {
          val: 12
        },
        acuity: {
          val: 40
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 100
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'houstonwiley@outlook.com',
      phone: '(703) 241 8977',
      mobile: '(703) 780 8687',
      address: {street: '9074 Balfour Place', city: 'Gorst', state: 'VA', zip: '20813', country: 'United States'},
      hor: {street: '15309 Garden Place', city: 'Barrelville', state: 'MD', zip: '21283', country: 'United States'},
      ssn: '8340',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'N/A',
      education: 'HS',
      language: 'Akan',
      licenseNum: 'VA234634957',
      birthPlace: 'Shawmut, MD\nUnited States'
    },
    exams: {
      afqt: 62,
      gs: 65,
      ar: 70,
      wk: 75,
      pc: 94,
      mk: 96,
      as: 83,
      mc: 49,
      ao: 41,
      ei: 38,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Catalina',
    lastName: 'Herring',
    active: true,
    dob: '1994-06-01',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 2,
      activity: 'OT',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 63
      },
      weight: {
        val: 194
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 85
      },
      cl: {
        val: 103
      },
      gt: {
        val: 86
      },
      el: {
        val: 113
      },
      mm: {
        val: 110
      },
      qt: {
        val: 95
      },
      ve: {
        val: 94
      },
      dlab: {
        val: 99
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 4
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 13
        },
        acuity: {
          val: 60
        },
        acuity1: {
          val: 200
        },
        acuity2: {
          val: 25
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'catalinaherring@aol.com',
      phone: '(703) 492 9965',
      mobile: '(703) 527 9364',
      address: {street: '13902 Gelston Avenue', city: 'Macdona', state: 'MD', zip: '20763', country: 'United States'},
      hor: {street: '20583 Pine Street', city: 'Waterview', state: 'VA', zip: '20097', country: 'United States'},
      ssn: '3738',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Buddhist',
      education: 'GED',
      language: 'Akan',
      licenseNum: 'MD585037325',
      birthPlace: 'Bendon, MD\nUnited States'
    },
    exams: {
      afqt: 71,
      gs: 77,
      ar: 52,
      wk: 36,
      pc: 31,
      mk: 40,
      as: 87,
      mc: 80,
      ao: 96,
      ei: 76,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Roman',
    lastName: 'Snyder',
    active: true,
    dob: '1996-01-27',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 0,
      activity: 'TC',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 67
      },
      weight: {
        val: 180
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 88
      },
      cl: {
        val: 119
      },
      gt: {
        val: 121
      },
      el: {
        val: 129
      },
      mm: {
        val: 98
      },
      qt: {
        val: 65
      },
      ve: {
        val: 84
      },
      dlab: {
        val: 51
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 4
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 4
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 11
        },
        acuity: {
          val: 20
        },
        acuity1: {
          val: 25
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'romansnyder@gmail.com',
      phone: '(703) 213 2766',
      mobile: '(703) 215 8884',
      address: {street: '195 George Street', city: 'Wolcott', state: 'MD', zip: '20576', country: 'United States'},
      hor: {street: '542 Ryerson Street', city: 'Heil', state: 'MD', zip: '21639', country: 'United States'},
      ssn: '3959',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 1,
      race: 'White',
      religion: 'Jewish',
      education: 'MA',
      language: '',
      licenseNum: 'VA967977034',
      birthPlace: 'Dante, VA\nUnited States'
    },
    exams: {
      afqt: 57,
      gs: 37,
      ar: 32,
      wk: 80,
      pc: 82,
      mk: 75,
      as: 70,
      mc: 56,
      ao: 77,
      ei: 87,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Genevieve',
    lastName: 'Robbins',
    active: true,
    dob: '2000-03-05',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 6,
      activity: 'EM',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 73
      },
      weight: {
        val: 183
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 47
      },
      cl: {
        val: 101
      },
      gt: {
        val: 102
      },
      el: {
        val: 102
      },
      mm: {
        val: 77
      },
      qt: {
        val: 67
      },
      ve: {
        val: 63
      },
      dlab: {
        val: 62
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 3
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 25
        },
        acuity2: {
          val: 50
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'genevieverobbins@aol.com',
      phone: '(703) 282 6794',
      mobile: '(703) 660 5030',
      address: {street: '15819 Woodpoint Road', city: 'Lynn', state: 'MD', zip: '20140', country: 'United States'},
      hor: {street: '9761 Dahlgreen Place', city: 'Biehle', state: 'VA', zip: '21275', country: 'United States'},
      ssn: '6193',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'Jewish',
      education: 'BS',
      language: 'Spanish',
      licenseNum: 'MD904136069',
      birthPlace: 'Deercroft, MD\nUnited States'
    },
    exams: {
      afqt: 68,
      gs: 72,
      ar: 64,
      wk: 95,
      pc: 92,
      mk: 95,
      as: 45,
      mc: 36,
      ao: 95,
      ei: 45,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Kent',
    lastName: 'Schultz',
    active: true,
    dob: '2000-03-29',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 3,
      activity: 'HV',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 64
      },
      weight: {
        val: 198
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 79
      },
      cl: {
        val: 138
      },
      gt: {
        val: 109
      },
      el: {
        val: 140
      },
      mm: {
        val: 115
      },
      qt: {
        val: 93
      },
      ve: {
        val: 64
      },
      dlab: {
        val: 127
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 2
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 14
        },
        acuity: {
          val: 50
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 100
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'kentschultz@aol.com',
      phone: '(703) 732 2355',
      mobile: '(703) 719 7189',
      address: {street: '10663 Crown Street', city: 'Chilton', state: 'MD', zip: '20753', country: 'United States'},
      hor: {street: '2321 Columbia Street', city: 'Cressey', state: 'MD', zip: '21776', country: 'United States'},
      ssn: '5896',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'Pacific Islander',
      religion: 'Protestant',
      education: 'MA',
      language: '',
      licenseNum: 'VA600324126',
      birthPlace: 'Belgreen, MD\nUnited States'
    },
    exams: {
      afqt: 93,
      gs: 73,
      ar: 50,
      wk: 42,
      pc: 41,
      mk: 39,
      as: 68,
      mc: 55,
      ao: 89,
      ei: 97,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Manny',
    lastName: 'Bennett',
    active: true,
    dob: '2000-08-21',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 8,
      activity: 'HV',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 64
      },
      weight: {
        val: 169
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 42
      },
      cl: {
        val: 64
      },
      gt: {
        val: 91
      },
      el: {
        val: 50
      },
      mm: {
        val: 124
      },
      qt: {
        val: 86
      },
      ve: {
        val: 90
      },
      dlab: {
        val: 138
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 3
        },
        violations: {
          val: 4
        }
      },
      moral: {
        conduct: {
          val: 2
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 11
        },
        acuity: {
          val: 20
        },
        acuity1: {
          val: 25
        },
        acuity2: {
          val: 70
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'fannybennett@aol.com',
      phone: '(703) 225 6465',
      mobile: '(703) 707 8012',
      address: {street: '10947 Ditmas Avenue', city: 'Riner', state: 'VA', zip: '20696', country: 'United States'},
      hor: {street: '1732 Remsen Avenue', city: 'Coinjock', state: 'VA', zip: '20203', country: 'United States'},
      ssn: '1820',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'Jewish',
      education: 'GED',
      language: '',
      licenseNum: 'VA610832181',
      birthPlace: 'Gardners, MD\nUnited States'
    },
    exams: {
      afqt: 50,
      gs: 60,
      ar: 79,
      wk: 58,
      pc: 98,
      mk: 72,
      as: 86,
      mc: 76,
      ao: 35,
      ei: 58,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Rodrigo',
    lastName: 'Beck',
    active: true,
    dob: '1996-08-17',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 4,
      activity: 'TC',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 68
      },
      weight: {
        val: 181
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 39
      },
      cl: {
        val: 55
      },
      gt: {
        val: 57
      },
      el: {
        val: 66
      },
      mm: {
        val: 85
      },
      qt: {
        val: 61
      },
      ve: {
        val: 58
      },
      dlab: {
        val: 81
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 2
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 25
        },
        acuity1: {
          val: 100
        },
        acuity2: {
          val: 25
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 2
      }
    },
    personal: {
      email: 'rosalesbeck@gmail.com',
      phone: '(703) 506 1730',
      mobile: '(703) 553 6680',
      address: {street: '4026 Varet Street', city: 'Cochranville', state: 'MD', zip: '20416', country: 'United States'},
      hor: {street: '12774 Perry Terrace', city: 'Norwood', state: 'VA', zip: '20712', country: 'United States'},
      ssn: '2458',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'MA',
      language: 'Portuguese',
      licenseNum: 'MD743168547',
      birthPlace: 'Eastvale, VA\nUnited States'
    },
    exams: {
      afqt: 51,
      gs: 66,
      ar: 62,
      wk: 95,
      pc: 75,
      mk: 60,
      as: 94,
      mc: 65,
      ao: 45,
      ei: 53,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Henny',
    lastName: 'Carroll',
    active: true,
    dob: '1998-11-01',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 1,
      activity: 'HV',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 71
      },
      weight: {
        val: 155
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 57
      },
      cl: {
        val: 115
      },
      gt: {
        val: 102
      },
      el: {
        val: 63
      },
      mm: {
        val: 89
      },
      qt: {
        val: 106
      },
      ve: {
        val: 96
      },
      dlab: {
        val: 127
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 4
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 2
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 14
        },
        acuity: {
          val: 50
        },
        acuity1: {
          val: 25
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 2
      }
    },
    personal: {
      email: 'hennycarroll@gmail.com',
      phone: '(703) 342 7309',
      mobile: '(703) 516 6938',
      address: {street: '15539 Fanchon Place', city: 'Manila', state: 'MD', zip: '20983', country: 'United States'},
      hor: {street: '13329 Whitwell Place', city: 'Tyro', state: 'VA', zip: '20281', country: 'United States'},
      ssn: '5007',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Asian',
      religion: 'Buddhist',
      education: 'GED',
      language: '',
      licenseNum: 'VA349145321',
      birthPlace: 'Frizzleburg, VA\nUnited States'
    },
    exams: {
      afqt: 50,
      gs: 95,
      ar: 93,
      wk: 93,
      pc: 60,
      mk: 47,
      as: 38,
      mc: 67,
      ao: 91,
      ei: 34,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Parker',
    lastName: 'Moreno',
    active: true,
    dob: '1995-12-22',
    status: 'Contract/Poolee',
        dutyType: {id: 3, desc: 'DMV'},
    notif: {
      daysuntil: 6,
      activity: 'EM',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 72
      },
      weight: {
        val: 174
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 46
      },
      cl: {
        val: 104
      },
      gt: {
        val: 92
      },
      el: {
        val: 103
      },
      mm: {
        val: 105
      },
      qt: {
        val: 54
      },
      ve: {
        val: 85
      },
      dlab: {
        val: 157
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 11
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 25
        },
        acuity2: {
          val: 100
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 2
      }
    },
    personal: {
      email: 'littlemoreno@gmail.com',
      phone: '(703) 412 8799',
      mobile: '(703) 654 2063',
      address: {street: '10955 Kenmore Terrace', city: 'Caledonia', state: 'VA', zip: '20933', country: 'United States'},
      hor: {street: '12420 Bills Place', city: 'Coral', state: 'MD', zip: '21036', country: 'United States'},
      ssn: '4342',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'GED',
      language: 'Spanish',
      licenseNum: 'VA858551888',
      birthPlace: 'Sandston, MD\nUnited States'
    },
    exams: {
      afqt: 62,
      gs: 76,
      ar: 30,
      wk: 33,
      pc: 56,
      mk: 57,
      as: 81,
      mc: 70,
      ao: 66,
      ei: 38,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Laurence',
    lastName: 'Travis',
    active: true,
    dob: '1996-01-18',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 9,
      activity: 'EM',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 65
      },
      weight: {
        val: 194
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 97
      },
      cl: {
        val: 102
      },
      gt: {
        val: 89
      },
      el: {
        val: 63
      },
      mm: {
        val: 63
      },
      qt: {
        val: 127
      },
      ve: {
        val: 43
      },
      dlab: {
        val: 52
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 4
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 70
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 70
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'lowetravis@gmail.com',
      phone: '(703) 538 4068',
      mobile: '(703) 241 4691',
      address: {street: '7304 Lincoln Place', city: 'Lowell', state: 'MD', zip: '20758', country: 'United States'},
      hor: {street: '8545 Cheever Place', city: 'Riceville', state: 'MD', zip: '20478', country: 'United States'},
      ssn: '5928',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Asian',
      religion: 'Protestant',
      education: 'MA',
      language: '',
      licenseNum: 'VA608041636',
      birthPlace: 'Summertown, VA\nUnited States'
    },
    exams: {
      afqt: 65,
      gs: 57,
      ar: 53,
      wk: 32,
      pc: 38,
      mk: 55,
      as: 97,
      mc: 86,
      ao: 68,
      ei: 83,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Michael',
    lastName: 'Maynard',
    active: true,
    dob: '2000-01-10',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 0,
      activity: 'TC',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 63
      },
      weight: {
        val: 199
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 88
      },
      cl: {
        val: 58
      },
      gt: {
        val: 141
      },
      el: {
        val: 130
      },
      mm: {
        val: 105
      },
      qt: {
        val: 89
      },
      ve: {
        val: 36
      },
      dlab: {
        val: 52
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 3
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 60
        },
        acuity2: {
          val: 50
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'michaelmaynard@outlook.com',
      phone: '(703) 735 2200',
      mobile: '(703) 788 5014',
      address: {street: '877 Hunts Lane', city: 'Loma', state: 'VA', zip: '20538', country: 'United States'},
      hor: {street: '9215 Ferry Place', city: 'Ada', state: 'VA', zip: '21357', country: 'United States'},
      ssn: '2960',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'GED',
      language: '',
      licenseNum: 'VA269691670',
      birthPlace: 'Fivepointville, VA\nUnited States'
    },
    exams: {
      afqt: 61,
      gs: 64,
      ar: 49,
      wk: 72,
      pc: 59,
      mk: 98,
      as: 31,
      mc: 49,
      ao: 54,
      ei: 35,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Alex',
    lastName: 'Wong',
    active: true,
    dob: '1995-09-04',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 9,
      activity: 'HV',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 69
      },
      weight: {
        val: 224
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 54
      },
      cl: {
        val: 71
      },
      gt: {
        val: 103
      },
      el: {
        val: 89
      },
      mm: {
        val: 110
      },
      qt: {
        val: 74
      },
      ve: {
        val: 94
      },
      dlab: {
        val: 132
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 4
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'alexwong@outlook.com',
      phone: '(703) 231 3848',
      mobile: '(703) 517 3158',
      address: {street: '9473 Sutton Street', city: 'Delshire', state: 'VA', zip: '20719', country: 'United States'},
      hor: {street: '10844 Albee Square', city: 'Venice', state: 'MD', zip: '20516', country: 'United States'},
      ssn: '3844',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'N/A',
      education: 'BS',
      language: '',
      licenseNum: 'MD151174258',
      birthPlace: 'Wescosville, VA\nUnited States'
    },
    exams: {
      afqt: 86,
      gs: 43,
      ar: 53,
      wk: 35,
      pc: 74,
      mk: 76,
      as: 35,
      mc: 75,
      ao: 78,
      ei: 31,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Reyna',
    lastName: 'Jenkins',
    active: true,
    dob: '1997-02-01',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 8,
      activity: 'EM',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 73
      },
      weight: {
        val: 206
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 91
      },
      cl: {
        val: 135
      },
      gt: {
        val: 127
      },
      el: {
        val: 59
      },
      mm: {
        val: 76
      },
      qt: {
        val: 88
      },
      ve: {
        val: 76
      },
      dlab: {
        val: 51
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 2
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 13
        },
        acuity: {
          val: 70
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 40
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'reynajenkins@gmail.com',
      phone: '(703) 378 7083',
      mobile: '(703) 219 4233',
      address: {street: '9430 Batchelder Street', city: 'Belleview', state: 'MD', zip: '20106', country: 'United States'},
      hor: {street: '5086 Radde Place', city: 'Fillmore', state: 'MD', zip: '21505', country: 'United States'},
      ssn: '7425',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'Protestant',
      education: 'HS',
      language: 'Arabic',
      licenseNum: 'MD701814446',
      birthPlace: 'Advance, MD\nUnited States'
    },
    exams: {
      afqt: 59,
      gs: 52,
      ar: 45,
      wk: 39,
      pc: 59,
      mk: 76,
      as: 59,
      mc: 91,
      ao: 78,
      ei: 63,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Alyce',
    lastName: 'Shields',
    active: true,
    dob: '1994-09-18',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 9,
      activity: 'HV',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 63
      },
      weight: {
        val: 216
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 42
      },
      cl: {
        val: 146
      },
      gt: {
        val: 130
      },
      el: {
        val: 94
      },
      mm: {
        val: 75
      },
      qt: {
        val: 83
      },
      ve: {
        val: 61
      },
      dlab: {
        val: 77
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: true
        },
        color: {
          val: 3
        },
        acuity: {
          val: 20
        },
        acuity1: {
          val: 100
        },
        acuity2: {
          val: 40
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 2
      }
    },
    personal: {
      email: 'alyceshields@gmail.com',
      phone: '(703) 454 3704',
      mobile: '(703) 547 9926',
      address: {street: '16775 Virginia Place', city: 'Foscoe', state: 'VA', zip: '20068', country: 'United States'},
      hor: {street: '20255 Montana Place', city: 'Mulberry', state: 'VA', zip: '20452', country: 'United States'},
      ssn: '7863',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Asian',
      religion: 'N/A',
      education: 'HS',
      language: '',
      licenseNum: 'VA645013462',
      birthPlace: 'Tilleda, MD\nUnited States'
    },
    exams: {
      afqt: 59,
      gs: 61,
      ar: 76,
      wk: 63,
      pc: 40,
      mk: 47,
      as: 64,
      mc: 67,
      ao: 73,
      ei: 89,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Jennings',
    lastName: 'Blair',
    active: true,
    dob: '1994-10-05',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 10,
      activity: 'HV',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 67
      },
      weight: {
        val: 204
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 70
      },
      cl: {
        val: 113
      },
      gt: {
        val: 63
      },
      el: {
        val: 110
      },
      mm: {
        val: 100
      },
      qt: {
        val: 90
      },
      ve: {
        val: 54
      },
      dlab: {
        val: 139
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 11
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 40
        },
        acuity2: {
          val: 70
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'jenningsblair@gmail.com',
      phone: '(703) 424 9642',
      mobile: '(703) 271 4872',
      address: {street: '7736 Wortman Avenue', city: 'Felt', state: 'MD', zip: '20470', country: 'United States'},
      hor: {street: '4568 Lorimer Street', city: 'Glidden', state: 'MD', zip: '20495', country: 'United States'},
      ssn: '8876',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'BS',
      language: 'Arabic',
      licenseNum: 'VA268170272',
      birthPlace: 'Frierson, VA\nUnited States'
    },
    exams: {
      afqt: 96,
      gs: 70,
      ar: 46,
      wk: 51,
      pc: 97,
      mk: 66,
      as: 37,
      mc: 82,
      ao: 87,
      ei: 36,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Kenneth',
    lastName: 'Carson',
    active: true,
    dob: '1997-10-21',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 9,
      activity: 'HV',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 61
      },
      weight: {
        val: 202
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 54
      },
      cl: {
        val: 125
      },
      gt: {
        val: 131
      },
      el: {
        val: 51
      },
      mm: {
        val: 75
      },
      qt: {
        val: 105
      },
      ve: {
        val: 44
      },
      dlab: {
        val: 124
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 2
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 12
        },
        acuity: {
          val: 100
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 2
      }
    },
    personal: {
      email: 'kennethcarson@gmail.com',
      phone: '(703) 397 6250',
      mobile: '(703) 624 6778',
      address: {street: '11790 Apollo Street', city: 'Moquino', state: 'MD', zip: '20890', country: 'United States'},
      hor: {street: '4990 Driggs Avenue', city: 'Finderne', state: 'MD', zip: '20192', country: 'United States'},
      ssn: '8559',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'GED',
      language: 'Portuguese',
      licenseNum: 'VA911862058',
      birthPlace: 'Harrison, MD\nUnited States'
    },
    exams: {
      afqt: 93,
      gs: 68,
      ar: 63,
      wk: 44,
      pc: 80,
      mk: 42,
      as: 47,
      mc: 51,
      ao: 68,
      ei: 61,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Stefanie',
    lastName: 'Hobbs',
    active: true,
    dob: '2000-03-07',
    status: 'Contract/Poolee',
        dutyType: {id: 3, desc: 'DMV'},
    notif: {
      daysuntil: 7,
      activity: 'EM',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 62
      },
      weight: {
        val: 178
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 45
      },
      cl: {
        val: 148
      },
      gt: {
        val: 72
      },
      el: {
        val: 50
      },
      mm: {
        val: 120
      },
      qt: {
        val: 73
      },
      ve: {
        val: 95
      },
      dlab: {
        val: 58
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 3
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 2
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: true
        },
        color: {
          val: 11
        },
        acuity: {
          val: 20
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'stefaniehobbs@gmail.com',
      phone: '(703) 221 9028',
      mobile: '(703) 270 4542',
      address: {street: '9540 Dorset Street', city: 'Rushford', state: 'MD', zip: '20668', country: 'United States'},
      hor: {street: '8808 Canarsie Road', city: 'Titanic', state: 'MD', zip: '21725', country: 'United States'},
      ssn: '6872',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'N/A',
      education: 'MA',
      language: 'French',
      licenseNum: 'MD643111144',
      birthPlace: 'Whitewater, MD\nUnited States'
    },
    exams: {
      afqt: 81,
      gs: 96,
      ar: 90,
      wk: 53,
      pc: 30,
      mk: 77,
      as: 67,
      mc: 57,
      ao: 46,
      ei: 51,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Steve',
    lastName: 'Rivers',
    active: true,
    dob: '1998-04-29',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 7,
      activity: 'TC',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 72
      },
      weight: {
        val: 203
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 54
      },
      cl: {
        val: 111
      },
      gt: {
        val: 84
      },
      el: {
        val: 118
      },
      mm: {
        val: 108
      },
      qt: {
        val: 78
      },
      ve: {
        val: 110
      },
      dlab: {
        val: 89
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 2
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 25
        },
        acuity1: {
          val: 40
        },
        acuity2: {
          val: 40
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'torresrivers@gmail.com',
      phone: '(703) 299 7092',
      mobile: '(703) 634 6933',
      address: {street: '13170 Clay Street', city: 'Bennett', state: 'MD', zip: '20576', country: 'United States'},
      hor: {street: '4569 Sands Street', city: 'Whitehaven', state: 'VA', zip: '20223', country: 'United States'},
      ssn: '8275',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Pacific Islander',
      religion: 'Jewish',
      education: 'BS',
      language: 'Spanish',
      licenseNum: 'MD200548929',
      birthPlace: 'Sattley, VA\nUnited States'
    },
    exams: {
      afqt: 62,
      gs: 40,
      ar: 70,
      wk: 91,
      pc: 96,
      mk: 82,
      as: 72,
      mc: 38,
      ao: 53,
      ei: 83,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Tyson',
    lastName: 'Leblanc',
    active: true,
    dob: '1994-08-15',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 9,
      activity: 'EM',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 62
      },
      weight: {
        val: 170
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 67
      },
      cl: {
        val: 64
      },
      gt: {
        val: 98
      },
      el: {
        val: 120
      },
      mm: {
        val: 70
      },
      qt: {
        val: 64
      },
      ve: {
        val: 38
      },
      dlab: {
        val: 135
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 8
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 25
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'tysonleblanc@gmail.com',
      phone: '(703) 379 3707',
      mobile: '(703) 551 1738',
      address: {street: '1720 Cambridge Place', city: 'Stewartville', state: 'MD', zip: '20074', country: 'United States'},
      hor: {street: '16967 Cooke Court', city: 'Fairfield', state: 'MD', zip: '20388', country: 'United States'},
      ssn: '1380',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Asian',
      religion: 'Jewish',
      education: 'HS',
      language: 'Portuguese',
      licenseNum: 'VA199445165',
      birthPlace: 'Salix, MD\nUnited States'
    },
    exams: {
      afqt: 88,
      gs: 88,
      ar: 98,
      wk: 61,
      pc: 95,
      mk: 36,
      as: 73,
      mc: 86,
      ao: 66,
      ei: 40,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Josh',
    lastName: 'Chavez',
    active: true,
    dob: '1996-08-27',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 4,
      activity: 'EM',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 70
      },
      weight: {
        val: 182
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 78
      },
      cl: {
        val: 125
      },
      gt: {
        val: 91
      },
      el: {
        val: 108
      },
      mm: {
        val: 114
      },
      qt: {
        val: 71
      },
      ve: {
        val: 50
      },
      dlab: {
        val: 58
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: true
        },
        color: {
          val: 11
        },
        acuity: {
          val: 60
        },
        acuity1: {
          val: 60
        },
        acuity2: {
          val: 40
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'adrianachavez@outlook.com',
      phone: '(703) 640 9696',
      mobile: '(703) 631 4740',
      address: {street: '2787 Charles Place', city: 'Axis', state: 'MD', zip: '20983', country: 'United States'},
      hor: {street: '11502 Willow Street', city: 'Dunlo', state: 'MD', zip: '21409', country: 'United States'},
      ssn: '4438',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Jewish',
      education: 'GED',
      language: 'Arabic',
      licenseNum: 'MD11451284',
      birthPlace: 'Sharon, MD\nUnited States'
    },
    exams: {
      afqt: 72,
      gs: 65,
      ar: 51,
      wk: 87,
      pc: 53,
      mk: 88,
      as: 46,
      mc: 43,
      ao: 30,
      ei: 47,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Chris',
    lastName: 'Saunders',
    active: true,
    dob: '1998-06-17',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 8,
      activity: 'EM',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 71
      },
      weight: {
        val: 220
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 91
      },
      cl: {
        val: 83
      },
      gt: {
        val: 139
      },
      el: {
        val: 110
      },
      mm: {
        val: 100
      },
      qt: {
        val: 104
      },
      ve: {
        val: 50
      },
      dlab: {
        val: 123
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 2
        }
      },
      moral: {
        conduct: {
          val: 4
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 4
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 5
        },
        acuity: {
          val: 40
        },
        acuity1: {
          val: 100
        },
        acuity2: {
          val: 100
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'chrissaunders@gmail.com',
      phone: '(703) 299 2985',
      mobile: '(703) 246 9574',
      address: {street: '2087 Sumner Place', city: 'Bascom', state: 'MD', zip: '20753', country: 'United States'},
      hor: {street: '61 Madoc Avenue', city: 'Allison', state: 'MD', zip: '20103', country: 'United States'},
      ssn: '4909',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'Jewish',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'VA43389672',
      birthPlace: 'Efland, VA\nUnited States'
    },
    exams: {
      afqt: 80,
      gs: 59,
      ar: 43,
      wk: 97,
      pc: 57,
      mk: 60,
      as: 40,
      mc: 65,
      ao: 34,
      ei: 51,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Inacio',
    lastName: 'Gonzales',
    active: true,
    dob: '1999-06-25',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 8,
      activity: 'TC',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 0
      },
      height: {
        val: 64
      },
      weight: {
        val: 194
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 46
      },
      cl: {
        val: 142
      },
      gt: {
        val: 113
      },
      el: {
        val: 129
      },
      mm: {
        val: 58
      },
      qt: {
        val: 125
      },
      ve: {
        val: 108
      },
      dlab: {
        val: 154
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 4
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 2
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 14
        },
        acuity: {
          val: 60
        },
        acuity1: {
          val: 40
        },
        acuity2: {
          val: 200
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'janicegonzales@outlook.com',
      phone: '(703) 743 1215',
      mobile: '(703) 615 1443',
      address: {street: '7146 Glenwood Road', city: 'Rosburg', state: 'VA', zip: '20905', country: 'United States'},
      hor: {street: '23241 Abbey Court', city: 'Como', state: 'MD', zip: '21090', country: 'United States'},
      ssn: '6110',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'HS',
      language: '',
      licenseNum: 'VA466646583',
      birthPlace: 'Hegins, VA\nUnited States'
    },
    exams: {
      afqt: 94,
      gs: 45,
      ar: 71,
      wk: 92,
      pc: 90,
      mk: 73,
      as: 77,
      mc: 67,
      ao: 67,
      ei: 30,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Tomas',
    lastName: 'Boyle',
    active: true,
    dob: '1997-12-06',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 10,
      activity: 'TC',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 61
      },
      weight: {
        val: 150
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 87
      },
      cl: {
        val: 84
      },
      gt: {
        val: 79
      },
      el: {
        val: 66
      },
      mm: {
        val: 80
      },
      qt: {
        val: 130
      },
      ve: {
        val: 37
      },
      dlab: {
        val: 161
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 13
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 50
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'tabathaboyle@gmail.com',
      phone: '(703) 526 2526',
      mobile: '(703) 760 2564',
      address: {street: '6728 Ridge Boulevard', city: 'Idamay', state: 'MD', zip: '20910', country: 'United States'},
      hor: {street: '10893 Greenpoint Avenue', city: 'Brownsville', state: 'MD', zip: '21940', country: 'United States'},
      ssn: '5160',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'Muslim',
      education: 'HS',
      language: '',
      licenseNum: 'MD12505161',
      birthPlace: 'Machias, MD\nUnited States'
    },
    exams: {
      afqt: 85,
      gs: 74,
      ar: 85,
      wk: 80,
      pc: 40,
      mk: 36,
      as: 41,
      mc: 87,
      ao: 49,
      ei: 88,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Levine',
    lastName: 'Woodard',
    active: true,
    dob: '2000-02-21',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 9,
      activity: 'HV',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 65
      },
      weight: {
        val: 222
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 78
      },
      cl: {
        val: 125
      },
      gt: {
        val: 117
      },
      el: {
        val: 85
      },
      mm: {
        val: 106
      },
      qt: {
        val: 63
      },
      ve: {
        val: 84
      },
      dlab: {
        val: 88
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 2
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 70
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'levinewoodard@gmail.com',
      phone: '(703) 192 3222',
      mobile: '(703) 403 6924',
      address: {street: '3982 Story Court', city: 'Bayview', state: 'VA', zip: '20170', country: 'United States'},
      hor: {street: '11607 Barwell Terrace', city: 'Westboro', state: 'VA', zip: '21003', country: 'United States'},
      ssn: '2497',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Asian',
      religion: 'Buddhist',
      education: 'GED',
      language: '',
      licenseNum: 'MD294349103',
      birthPlace: 'Ronco, VA\nUnited States'
    },
    exams: {
      afqt: 68,
      gs: 74,
      ar: 48,
      wk: 87,
      pc: 30,
      mk: 56,
      as: 77,
      mc: 38,
      ao: 35,
      ei: 96,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Merrill',
    lastName: 'Alston',
    active: true,
    dob: '1999-05-08',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 0,
      activity: 'TC',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 64
      },
      weight: {
        val: 169
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 75
      },
      cl: {
        val: 131
      },
      gt: {
        val: 67
      },
      el: {
        val: 88
      },
      mm: {
        val: 72
      },
      qt: {
        val: 117
      },
      ve: {
        val: 110
      },
      dlab: {
        val: 104
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 11
        },
        acuity: {
          val: 60
        },
        acuity1: {
          val: 70
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'merrillalston@outlook.com',
      phone: '(703) 658 5030',
      mobile: '(703) 229 5733',
      address: {street: '14703 Canal Avenue', city: 'Russellville', state: 'VA', zip: '20841', country: 'United States'},
      hor: {street: '8847 Manhattan Court', city: 'Vicksburg', state: 'MD', zip: '20383', country: 'United States'},
      ssn: '2994',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 2,
      race: 'White',
      religion: 'Protestant',
      education: 'MA',
      language: '',
      licenseNum: 'VA162127120',
      birthPlace: 'Coalmont, VA\nUnited States'
    },
    exams: {
      afqt: 98,
      gs: 56,
      ar: 84,
      wk: 61,
      pc: 64,
      mk: 80,
      as: 63,
      mc: 33,
      ao: 50,
      ei: 43,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Perry',
    lastName: 'Johns',
    active: true,
    dob: '1997-12-17',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 1,
      activity: 'HV',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 70
      },
      weight: {
        val: 150
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 84
      },
      cl: {
        val: 124
      },
      gt: {
        val: 62
      },
      el: {
        val: 57
      },
      mm: {
        val: 85
      },
      qt: {
        val: 62
      },
      ve: {
        val: 84
      },
      dlab: {
        val: 47
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 11
        },
        acuity: {
          val: 20
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 50
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'perryjohns@gmail.com',
      phone: '(703) 335 5239',
      mobile: '(703) 370 1299',
      address: {street: '16660 Devon Avenue', city: 'Maybell', state: 'VA', zip: '20815', country: 'United States'},
      hor: {street: '1037 Cameron Court', city: 'Lorraine', state: 'MD', zip: '21287', country: 'United States'},
      ssn: '6795',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'Buddhist',
      education: 'GED',
      language: '',
      licenseNum: 'VA1954505',
      birthPlace: 'Englevale, MD\nUnited States'
    },
    exams: {
      afqt: 67,
      gs: 46,
      ar: 82,
      wk: 96,
      pc: 49,
      mk: 43,
      as: 49,
      mc: 61,
      ao: 42,
      ei: 71,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Michael',
    lastName: 'Wallace',
    active: true,
    dob: '1996-10-12',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 2,
      activity: 'EM',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 70
      },
      weight: {
        val: 202
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 66
      },
      cl: {
        val: 132
      },
      gt: {
        val: 117
      },
      el: {
        val: 126
      },
      mm: {
        val: 87
      },
      qt: {
        val: 119
      },
      ve: {
        val: 68
      },
      dlab: {
        val: 125
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 2
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 2
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 100
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'alfredawallace@gmail.com',
      phone: '(703) 574 6205',
      mobile: '(703) 469 6172',
      address: {street: '8128 Main Street', city: 'Osmond', state: 'VA', zip: '20336', country: 'United States'},
      hor: {street: '19832 Roebling Street', city: 'Websterville', state: 'MD', zip: '21759', country: 'United States'},
      ssn: '4667',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'Protestant',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'VA433399898',
      birthPlace: 'Levant, VA\nUnited States'
    },
    exams: {
      afqt: 86,
      gs: 43,
      ar: 36,
      wk: 94,
      pc: 67,
      mk: 98,
      as: 33,
      mc: 82,
      ao: 80,
      ei: 94,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Manuel',
    lastName: 'Franco',
    active: true,
    dob: '1994-12-10',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 3,
      activity: 'HV',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 70
      },
      weight: {
        val: 160
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 78
      },
      cl: {
        val: 74
      },
      gt: {
        val: 98
      },
      el: {
        val: 82
      },
      mm: {
        val: 88
      },
      qt: {
        val: 124
      },
      ve: {
        val: 104
      },
      dlab: {
        val: 144
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 8
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 40
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'lunafranco@outlook.com',
      phone: '(703) 656 8416',
      mobile: '(703) 191 2558',
      address: {street: '13024 Monitor Street', city: 'Brantleyville', state: 'MD', zip: '20318', country: 'United States'},
      hor: {street: '4412 McKibbin Street', city: 'Reinerton', state: 'VA', zip: '20805', country: 'United States'},
      ssn: '2071',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'BS',
      language: 'Portuguese',
      licenseNum: 'MD432983492',
      birthPlace: 'Ahwahnee, VA\nUnited States'
    },
    exams: {
      afqt: 67,
      gs: 34,
      ar: 61,
      wk: 91,
      pc: 54,
      mk: 98,
      as: 83,
      mc: 55,
      ao: 81,
      ei: 67,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Felicia',
    lastName: 'Davis',
    active: true,
    dob: '2000-04-01',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 10,
      activity: 'HV',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 73
      },
      weight: {
        val: 209
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 74
      },
      cl: {
        val: 65
      },
      gt: {
        val: 103
      },
      el: {
        val: 132
      },
      mm: {
        val: 68
      },
      qt: {
        val: 126
      },
      ve: {
        val: 62
      },
      dlab: {
        val: 87
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 4
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: true
        },
        color: {
          val: 12
        },
        acuity: {
          val: 200
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'feliciadavis@gmail.com',
      phone: '(703) 637 7449',
      mobile: '(703) 733 6656',
      address: {street: '4234 Florence Avenue', city: 'Cawood', state: 'VA', zip: '20094', country: 'United States'},
      hor: {street: '18895 McClancy Place', city: 'Kent', state: 'MD', zip: '20478', country: 'United States'},
      ssn: '9132',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 3,
      race: 'White',
      religion: 'Buddhist',
      education: 'BS',
      language: '',
      licenseNum: 'MD285326144',
      birthPlace: 'Elliston, VA\nUnited States'
    },
    exams: {
      afqt: 95,
      gs: 82,
      ar: 83,
      wk: 36,
      pc: 93,
      mk: 81,
      as: 96,
      mc: 57,
      ao: 31,
      ei: 46,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Wilcox',
    lastName: 'Horton',
    active: true,
    dob: '1997-11-14',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 3,
      activity: 'HV',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 68
      },
      weight: {
        val: 143
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 39
      },
      cl: {
        val: 95
      },
      gt: {
        val: 76
      },
      el: {
        val: 72
      },
      mm: {
        val: 80
      },
      qt: {
        val: 117
      },
      ve: {
        val: 70
      },
      dlab: {
        val: 61
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 4
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 8
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 70
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'wilcoxhorton@gmail.com',
      phone: '(703) 728 1848',
      mobile: '(703) 330 9252',
      address: {street: '16951 Lacon Court', city: 'Faywood', state: 'VA', zip: '20607', country: 'United States'},
      hor: {street: '6463 Fillmore Avenue', city: 'Woodruff', state: 'VA', zip: '21368', country: 'United States'},
      ssn: '8116',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'Muslim',
      education: 'HS',
      language: '',
      licenseNum: 'VA176286855',
      birthPlace: 'Caspar, MD\nUnited States'
    },
    exams: {
      afqt: 91,
      gs: 72,
      ar: 79,
      wk: 75,
      pc: 96,
      mk: 67,
      as: 62,
      mc: 82,
      ao: 65,
      ei: 64,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Brian',
    lastName: 'Austin',
    active: true,
    dob: '2000-10-15',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 3,
      activity: 'OT',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 0
      },
      height: {
        val: 72
      },
      weight: {
        val: 170
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 43
      },
      cl: {
        val: 119
      },
      gt: {
        val: 124
      },
      el: {
        val: 57
      },
      mm: {
        val: 70
      },
      qt: {
        val: 81
      },
      ve: {
        val: 31
      },
      dlab: {
        val: 163
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 100
        },
        acuity1: {
          val: 60
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'dellaaustin@gmail.com',
      phone: '(703) 640 4132',
      mobile: '(703) 764 1943',
      address: {street: '2607 Jackson Court', city: 'Thermal', state: 'VA', zip: '20922', country: 'United States'},
      hor: {street: '20830 Bleecker Street', city: 'Hannasville', state: 'MD', zip: '21820', country: 'United States'},
      ssn: '4795',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'Protestant',
      education: 'GED',
      language: '',
      licenseNum: 'MD200677970',
      birthPlace: 'Foxworth, VA\nUnited States'
    },
    exams: {
      afqt: 58,
      gs: 87,
      ar: 75,
      wk: 43,
      pc: 88,
      mk: 61,
      as: 89,
      mc: 96,
      ao: 98,
      ei: 45,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Mitchell',
    lastName: 'Mann',
    active: true,
    dob: '1997-02-28',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 5,
      activity: 'OT',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 69
      },
      weight: {
        val: 220
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 44
      },
      cl: {
        val: 84
      },
      gt: {
        val: 122
      },
      el: {
        val: 126
      },
      mm: {
        val: 127
      },
      qt: {
        val: 59
      },
      ve: {
        val: 96
      },
      dlab: {
        val: 88
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 3
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 5
        },
        acuity: {
          val: 60
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 50
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'mitchellmann@outlook.com',
      phone: '(703) 132 8382',
      mobile: '(703) 675 5974',
      address: {street: '16803 Montrose Avenue', city: 'Winfred', state: 'VA', zip: '20422', country: 'United States'},
      hor: {street: '16635 Henderson Walk', city: 'Lumberton', state: 'VA', zip: '21979', country: 'United States'},
      ssn: '2599',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 3,
      race: 'White',
      religion: 'Muslim',
      education: 'GED',
      language: 'French',
      licenseNum: 'MD251032018',
      birthPlace: 'Alafaya, MD\nUnited States'
    },
    exams: {
      afqt: 58,
      gs: 31,
      ar: 79,
      wk: 54,
      pc: 73,
      mk: 88,
      as: 90,
      mc: 35,
      ao: 60,
      ei: 43,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Orlando',
    lastName: 'Sandoval',
    active: true,
    dob: '1999-06-13',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 9,
      activity: 'EM',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 68
      },
      weight: {
        val: 179
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 82
      },
      cl: {
        val: 87
      },
      gt: {
        val: 57
      },
      el: {
        val: 106
      },
      mm: {
        val: 111
      },
      qt: {
        val: 72
      },
      ve: {
        val: 45
      },
      dlab: {
        val: 120
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 3
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 11
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'orlandosandoval@gmail.com',
      phone: '(703) 740 7877',
      mobile: '(703) 526 2568',
      address: {street: '5564 Dooley Street', city: 'Summerset', state: 'VA', zip: '20282', country: 'United States'},
      hor: {street: '20667 Amber Street', city: 'Beason', state: 'MD', zip: '21479', country: 'United States'},
      ssn: '6694',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 1,
      race: 'White',
      religion: 'Jewish',
      education: 'HS',
      language: 'Arabic',
      licenseNum: 'MD323238988',
      birthPlace: 'Orovada, VA\nUnited States'
    },
    exams: {
      afqt: 99,
      gs: 49,
      ar: 90,
      wk: 95,
      pc: 65,
      mk: 83,
      as: 76,
      mc: 92,
      ao: 89,
      ei: 80,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Eric',
    lastName: 'Rios',
    active: true,
    dob: '2000-09-01',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 5,
      activity: 'HV',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 71
      },
      weight: {
        val: 201
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 55
      },
      cl: {
        val: 122
      },
      gt: {
        val: 88
      },
      el: {
        val: 101
      },
      mm: {
        val: 62
      },
      qt: {
        val: 130
      },
      ve: {
        val: 94
      },
      dlab: {
        val: 35
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 3
        },
        acuity: {
          val: 70
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 60
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'hessrios@outlook.com',
      phone: '(703) 399 7534',
      mobile: '(703) 719 6078',
      address: {street: '14585 Luquer Street', city: 'Goldfield', state: 'VA', zip: '20524', country: 'United States'},
      hor: {street: '23800 Stockton Street', city: 'Hackneyville', state: 'MD', zip: '21740', country: 'United States'},
      ssn: '2297',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 2,
      race: 'White',
      religion: 'Protestant',
      education: 'BS',
      language: 'Akan',
      licenseNum: 'MD256773010',
      birthPlace: 'Gallina, MD\nUnited States'
    },
    exams: {
      afqt: 67,
      gs: 41,
      ar: 88,
      wk: 40,
      pc: 78,
      mk: 87,
      as: 73,
      mc: 84,
      ao: 94,
      ei: 40,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Ferdinand',
    lastName: 'Figueroa',
    active: true,
    dob: '1998-12-22',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 10,
      activity: 'OT',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 72
      },
      weight: {
        val: 153
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 88
      },
      cl: {
        val: 146
      },
      gt: {
        val: 121
      },
      el: {
        val: 88
      },
      mm: {
        val: 127
      },
      qt: {
        val: 122
      },
      ve: {
        val: 37
      },
      dlab: {
        val: 137
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 2
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 12
        },
        acuity: {
          val: 40
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 60
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'figueroamcdowell@gmail.com',
      phone: '(703) 634 1110',
      mobile: '(703) 169 8807',
      address: {street: '12608 Just Court', city: 'Wheatfields', state: 'VA', zip: '20865', country: 'United States'},
      hor: {street: '7627 Eastern Parkway', city: 'Fairmount', state: 'VA', zip: '20577', country: 'United States'},
      ssn: '7285',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'MA',
      language: 'Spanish',
      licenseNum: 'VA759692196',
      birthPlace: 'Sheatown, VA\nUnited States'
    },
    exams: {
      afqt: 63,
      gs: 49,
      ar: 66,
      wk: 65,
      pc: 37,
      mk: 32,
      as: 99,
      mc: 84,
      ao: 69,
      ei: 92,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Otis',
    lastName: 'Cotton',
    active: true,
    dob: '1998-09-21',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 2,
      activity: 'EM',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 64
      },
      weight: {
        val: 194
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 61
      },
      cl: {
        val: 61
      },
      gt: {
        val: 82
      },
      el: {
        val: 82
      },
      mm: {
        val: 59
      },
      qt: {
        val: 103
      },
      ve: {
        val: 42
      },
      dlab: {
        val: 61
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 3
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 200
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 60
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'ortizcotton@gmail.com',
      phone: '(703) 489 5864',
      mobile: '(703) 390 1347',
      address: {street: '16760 Veronica Place', city: 'Villarreal', state: 'VA', zip: '20151', country: 'United States'},
      hor: {street: '20516 Wallabout Street', city: 'Cartwright', state: 'MD', zip: '21106', country: 'United States'},
      ssn: '1877',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Catholic',
      education: 'GED',
      language: 'French',
      licenseNum: 'MD380582457',
      birthPlace: 'Drytown, VA\nUnited States'
    },
    exams: {
      afqt: 69,
      gs: 43,
      ar: 69,
      wk: 92,
      pc: 48,
      mk: 33,
      as: 31,
      mc: 93,
      ao: 47,
      ei: 96,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Richard',
    lastName: 'Durham',
    active: true,
    dob: '1998-10-16',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 9,
      activity: 'TC',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 64
      },
      weight: {
        val: 155
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 88
      },
      cl: {
        val: 55
      },
      gt: {
        val: 135
      },
      el: {
        val: 127
      },
      mm: {
        val: 115
      },
      qt: {
        val: 90
      },
      ve: {
        val: 71
      },
      dlab: {
        val: 64
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 2
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 2
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 8
        },
        acuity: {
          val: 20
        },
        acuity1: {
          val: 25
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'richardsdurham@outlook.com',
      phone: '(703) 294 3947',
      mobile: '(703) 320 7225',
      address: {street: '4626 Euclid Avenue', city: 'Clarksburg', state: 'MD', zip: '20499', country: 'United States'},
      hor: {street: '21143 Love Lane', city: 'Bowie', state: 'MD', zip: '20440', country: 'United States'},
      ssn: '3285',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Muslim',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'MD796046052',
      birthPlace: 'Groveville, MD\nUnited States'
    },
    exams: {
      afqt: 53,
      gs: 75,
      ar: 86,
      wk: 86,
      pc: 77,
      mk: 33,
      as: 53,
      mc: 31,
      ao: 79,
      ei: 32,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Richard',
    lastName: 'Allison',
    active: true,
    dob: '1998-07-27',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 3,
      activity: 'TC',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 72
      },
      weight: {
        val: 197
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 70
      },
      cl: {
        val: 121
      },
      gt: {
        val: 62
      },
      el: {
        val: 129
      },
      mm: {
        val: 61
      },
      qt: {
        val: 51
      },
      ve: {
        val: 37
      },
      dlab: {
        val: 156
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 5
        },
        acuity: {
          val: 25
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 50
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'carolineallison@outlook.com',
      phone: '(703) 545 8513',
      mobile: '(703) 259 1730',
      address: {street: '2275 Troy Avenue', city: 'Veguita', state: 'VA', zip: '20891', country: 'United States'},
      hor: {street: '4582 Post Court', city: 'Aberdeen', state: 'MD', zip: '21113', country: 'United States'},
      ssn: '5316',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 3,
      race: 'Pacific Islander',
      religion: 'Protestant',
      education: 'BS',
      language: '',
      licenseNum: 'VA789385081',
      birthPlace: 'Cutter, VA\nUnited States'
    },
    exams: {
      afqt: 93,
      gs: 72,
      ar: 73,
      wk: 32,
      pc: 40,
      mk: 44,
      as: 48,
      mc: 52,
      ao: 48,
      ei: 91,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Anthony',
    lastName: 'Carver',
    active: true,
    dob: '1996-02-16',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 2,
      activity: 'TC',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 69
      },
      weight: {
        val: 139
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 59
      },
      cl: {
        val: 132
      },
      gt: {
        val: 90
      },
      el: {
        val: 105
      },
      mm: {
        val: 75
      },
      qt: {
        val: 114
      },
      ve: {
        val: 51
      },
      dlab: {
        val: 110
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 3
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 100
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'feliciacarver@gmail.com',
      phone: '(703) 342 7096',
      mobile: '(703) 426 8736',
      address: {street: '11673 Bushwick Court', city: 'Caron', state: 'MD', zip: '20882', country: 'United States'},
      hor: {street: '6446 Moore Street', city: 'Crawfordsville', state: 'MD', zip: '20525', country: 'United States'},
      ssn: '9910',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'Protestant',
      education: 'GED',
      language: 'Arabic',
      licenseNum: 'MD128488392',
      birthPlace: 'Sutton, MD\nUnited States'
    },
    exams: {
      afqt: 53,
      gs: 38,
      ar: 93,
      wk: 35,
      pc: 87,
      mk: 65,
      as: 65,
      mc: 59,
      ao: 43,
      ei: 88,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Alston',
    lastName: 'Kelly',
    active: true,
    dob: '1999-05-21',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 4,
      activity: 'OT',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 66
      },
      weight: {
        val: 172
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 69
      },
      cl: {
        val: 106
      },
      gt: {
        val: 125
      },
      el: {
        val: 76
      },
      mm: {
        val: 69
      },
      qt: {
        val: 112
      },
      ve: {
        val: 87
      },
      dlab: {
        val: 110
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 2
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 3
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 50
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'alstonkelly@gmail.com',
      phone: '(703) 148 5566',
      mobile: '(703) 717 1906',
      address: {street: '3782 Dekalb Avenue', city: 'Lopezo', state: 'MD', zip: '20530', country: 'United States'},
      hor: {street: '11406 Aster Court', city: 'Bridgetown', state: 'VA', zip: '20138', country: 'United States'},
      ssn: '5795',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'Catholic',
      education: 'HS',
      language: '',
      licenseNum: 'MD161949200',
      birthPlace: 'Juntura, VA\nUnited States'
    },
    exams: {
      afqt: 97,
      gs: 51,
      ar: 90,
      wk: 36,
      pc: 48,
      mk: 88,
      as: 73,
      mc: 46,
      ao: 71,
      ei: 68,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Bentley',
    lastName: 'Brooks',
    active: true,
    dob: '2000-09-04',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 0,
      activity: 'HV',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 63
      },
      weight: {
        val: 206
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 72
      },
      cl: {
        val: 99
      },
      gt: {
        val: 96
      },
      el: {
        val: 108
      },
      mm: {
        val: 75
      },
      qt: {
        val: 79
      },
      ve: {
        val: 44
      },
      dlab: {
        val: 159
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 2
        },
        violations: {
          val: 4
        }
      },
      moral: {
        conduct: {
          val: 2
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 200
        },
        acuity1: {
          val: 25
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'bentleybrooks@gmail.com',
      phone: '(703) 709 6867',
      mobile: '(703) 514 5939',
      address: {street: '10445 Clifford Place', city: 'Strykersville', state: 'VA', zip: '20495', country: 'United States'},
      hor: {street: '9980 Dinsmore Place', city: 'Templeton', state: 'VA', zip: '21119', country: 'United States'},
      ssn: '2358',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'GED',
      language: '',
      licenseNum: 'VA180556849',
      birthPlace: 'Breinigsville, VA\nUnited States'
    },
    exams: {
      afqt: 86,
      gs: 97,
      ar: 45,
      wk: 99,
      pc: 33,
      mk: 46,
      as: 34,
      mc: 38,
      ao: 77,
      ei: 48,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Kenneth',
    lastName: 'Bruce',
    active: true,
    dob: '1998-02-26',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 0,
      activity: 'TC',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 62
      },
      weight: {
        val: 162
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 68
      },
      cl: {
        val: 146
      },
      gt: {
        val: 99
      },
      el: {
        val: 55
      },
      mm: {
        val: 124
      },
      qt: {
        val: 122
      },
      ve: {
        val: 54
      },
      dlab: {
        val: 52
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 2
        },
        violations: {
          val: 4
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 60
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 60
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'delacruzbruce@outlook.com',
      phone: '(703) 783 7722',
      mobile: '(703) 600 8295',
      address: {street: '8813 Concord Street', city: 'Gilgo', state: 'MD', zip: '20173', country: 'United States'},
      hor: {street: '22 Hoyt Street', city: 'Bethany', state: 'VA', zip: '20441', country: 'United States'},
      ssn: '2844',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'Jewish',
      education: 'GED',
      language: 'Spanish',
      licenseNum: 'MD511144970',
      birthPlace: 'Oneida, MD\nUnited States'
    },
    exams: {
      afqt: 97,
      gs: 98,
      ar: 79,
      wk: 87,
      pc: 84,
      mk: 55,
      as: 53,
      mc: 78,
      ao: 74,
      ei: 48,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Ross',
    lastName: 'Lindsey',
    active: true,
    dob: '1996-12-17',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 2,
      activity: 'TC',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 64
      },
      weight: {
        val: 180
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 60
      },
      cl: {
        val: 118
      },
      gt: {
        val: 122
      },
      el: {
        val: 127
      },
      mm: {
        val: 80
      },
      qt: {
        val: 127
      },
      ve: {
        val: 45
      },
      dlab: {
        val: 80
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 13
        },
        acuity: {
          val: 20
        },
        acuity1: {
          val: 70
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'rollinslindsey@gmail.com',
      phone: '(703) 380 5145',
      mobile: '(703) 139 2270',
      address: {street: '15707 Rugby Road', city: 'Denio', state: 'MD', zip: '20592', country: 'United States'},
      hor: {street: '15882 Dean Street', city: 'Driftwood', state: 'VA', zip: '21379', country: 'United States'},
      ssn: '1932',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Pacific Islander',
      religion: 'Catholic',
      education: 'HS',
      language: '',
      licenseNum: 'MD807242269',
      birthPlace: 'Coleville, VA\nUnited States'
    },
    exams: {
      afqt: 76,
      gs: 83,
      ar: 68,
      wk: 74,
      pc: 90,
      mk: 46,
      as: 83,
      mc: 48,
      ao: 68,
      ei: 45,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Oliver',
    lastName: 'Parsons',
    active: true,
    dob: '1997-11-04',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 7,
      activity: 'EM',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 69
      },
      weight: {
        val: 223
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 46
      },
      cl: {
        val: 78
      },
      gt: {
        val: 97
      },
      el: {
        val: 67
      },
      mm: {
        val: 114
      },
      qt: {
        val: 74
      },
      ve: {
        val: 76
      },
      dlab: {
        val: 145
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 2
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 12
        },
        acuity: {
          val: 25
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 70
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'oliveparsons@comvex.com',
      phone: '(703) 575 8166',
      mobile: '(703) 555 4253',
      address: {street: '4648 Lincoln Avenue', city: 'Dixie', state: 'MD', zip: '20634', country: 'United States'},
      hor: {street: '18806 Amherst Street', city: 'Forbestown', state: 'VA', zip: '21752', country: 'United States'},
      ssn: '8063',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'HS',
      language: 'Portuguese',
      licenseNum: 'MD561683792',
      birthPlace: 'Grimsley, VA\nUnited States'
    },
    exams: {
      afqt: 91,
      gs: 94,
      ar: 59,
      wk: 31,
      pc: 45,
      mk: 38,
      as: 91,
      mc: 73,
      ao: 92,
      ei: 90,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Dalton',
    lastName: 'Salinas',
    active: true,
    dob: '1995-06-04',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 3,
      activity: 'EM',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 65
      },
      weight: {
        val: 143
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 68
      },
      cl: {
        val: 88
      },
      gt: {
        val: 114
      },
      el: {
        val: 64
      },
      mm: {
        val: 93
      },
      qt: {
        val: 121
      },
      ve: {
        val: 79
      },
      dlab: {
        val: 121
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 2
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: false
        },
        color: {
          val: 14
        },
        acuity: {
          val: 100
        },
        acuity1: {
          val: 40
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'daltonsalinas@outlook.com',
      phone: '(703) 145 4535',
      mobile: '(703) 774 5796',
      address: {street: '12735 Harkness Avenue', city: 'Trucksville', state: 'VA', zip: '20651', country: 'United States'},
      hor: {street: '4264 Sunnyside Avenue', city: 'Rosedale', state: 'VA', zip: '20578', country: 'United States'},
      ssn: '6319',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Buddhist',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'VA797435190',
      birthPlace: 'Yonah, VA\nUnited States'
    },
    exams: {
      afqt: 57,
      gs: 38,
      ar: 72,
      wk: 67,
      pc: 85,
      mk: 72,
      as: 92,
      mc: 31,
      ao: 81,
      ei: 37,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Alto',
    lastName: 'Alexander',
    active: true,
    dob: '1997-01-22',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 4,
      activity: 'OT',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 61
      },
      weight: {
        val: 194
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 98
      },
      cl: {
        val: 79
      },
      gt: {
        val: 128
      },
      el: {
        val: 116
      },
      mm: {
        val: 103
      },
      qt: {
        val: 88
      },
      ve: {
        val: 107
      },
      dlab: {
        val: 149
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 4
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 14
        },
        acuity: {
          val: 100
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'altaalexander@comvex.com',
      phone: '(703) 210 4437',
      mobile: '(703) 358 4808',
      address: {street: '489 Adelphi Street', city: 'Grapeview', state: 'MD', zip: '20795', country: 'United States'},
      hor: {street: '15623 Roosevelt Place', city: 'Gerber', state: 'MD', zip: '21385', country: 'United States'},
      ssn: '6880',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'GED',
      language: '',
      licenseNum: 'VA448664229',
      birthPlace: 'Cleary, VA\nUnited States'
    },
    exams: {
      afqt: 83,
      gs: 89,
      ar: 52,
      wk: 65,
      pc: 85,
      mk: 81,
      as: 74,
      mc: 44,
      ao: 63,
      ei: 54,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Marco',
    lastName: 'Willis',
    active: true,
    dob: '1995-08-19',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 8,
      activity: 'EM',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 63
      },
      weight: {
        val: 160
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 79
      },
      cl: {
        val: 124
      },
      gt: {
        val: 78
      },
      el: {
        val: 122
      },
      mm: {
        val: 68
      },
      qt: {
        val: 75
      },
      ve: {
        val: 85
      },
      dlab: {
        val: 40
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 4
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 4
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 3
        },
        acuity: {
          val: 200
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 200
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'cunninghamwillis@gmail.com',
      phone: '(703) 222 9022',
      mobile: '(703) 742 4531',
      address: {street: '7250 Indiana Place', city: 'Kansas', state: 'VA', zip: '20865', country: 'United States'},
      hor: {street: '23727 Thomas Street', city: 'Norris', state: 'VA', zip: '20365', country: 'United States'},
      ssn: '3183',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'Buddhist',
      education: 'GED',
      language: 'Spanish',
      licenseNum: 'MD863233904',
      birthPlace: 'Oretta, MD\nUnited States'
    },
    exams: {
      afqt: 61,
      gs: 73,
      ar: 52,
      wk: 31,
      pc: 49,
      mk: 95,
      as: 93,
      mc: 34,
      ao: 40,
      ei: 77,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Dino',
    lastName: 'Workman',
    active: true,
    dob: '1999-08-04',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 4,
      activity: 'OT',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 66
      },
      weight: {
        val: 162
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 93
      },
      cl: {
        val: 68
      },
      gt: {
        val: 118
      },
      el: {
        val: 51
      },
      mm: {
        val: 92
      },
      qt: {
        val: 115
      },
      ve: {
        val: 85
      },
      dlab: {
        val: 133
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 14
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 100
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'dinaworkman@gmail.com',
      phone: '(703) 526 5617',
      mobile: '(703) 481 2402',
      address: {street: '1540 Kingsland Avenue', city: 'Walton', state: 'VA', zip: '20464', country: 'United States'},
      hor: {street: '19451 Nova Court', city: 'Devon', state: 'MD', zip: '21310', country: 'United States'},
      ssn: '3298',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 3,
      race: 'Pacific Islander',
      religion: 'N/A',
      education: 'MA',
      language: '',
      licenseNum: 'VA605328352',
      birthPlace: 'Tedrow, MD\nUnited States'
    },
    exams: {
      afqt: 94,
      gs: 70,
      ar: 43,
      wk: 50,
      pc: 69,
      mk: 63,
      as: 33,
      mc: 55,
      ao: 50,
      ei: 75,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Michael',
    lastName: 'Mathis',
    active: true,
    dob: '2000-12-24',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 1,
      activity: 'HV',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 61
      },
      weight: {
        val: 202
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 64
      },
      cl: {
        val: 147
      },
      gt: {
        val: 78
      },
      el: {
        val: 126
      },
      mm: {
        val: 97
      },
      qt: {
        val: 89
      },
      ve: {
        val: 105
      },
      dlab: {
        val: 122
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: false
        },
        color: {
          val: 8
        },
        acuity: {
          val: 20
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 25
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'mooremathis@gmail.com',
      phone: '(703) 280 6780',
      mobile: '(703) 630 4548',
      address: {street: '6943 India Street', city: 'Leeper', state: 'MD', zip: '20661', country: 'United States'},
      hor: {street: '14247 Pooles Lane', city: 'Woodlake', state: 'MD', zip: '20226', country: 'United States'},
      ssn: '7108',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 3,
      race: 'Pacific Islander',
      religion: 'N/A',
      education: 'GED',
      language: 'Arabic',
      licenseNum: 'VA755152057',
      birthPlace: 'Cobbtown, MD\nUnited States'
    },
    exams: {
      afqt: 55,
      gs: 44,
      ar: 48,
      wk: 51,
      pc: 57,
      mk: 67,
      as: 30,
      mc: 85,
      ao: 30,
      ei: 34,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'John',
    lastName: 'Dickerson',
    active: true,
    dob: '1998-08-12',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 4,
      activity: 'TC',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 73
      },
      weight: {
        val: 170
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 81
      },
      cl: {
        val: 140
      },
      gt: {
        val: 107
      },
      el: {
        val: 125
      },
      mm: {
        val: 53
      },
      qt: {
        val: 54
      },
      ve: {
        val: 61
      },
      dlab: {
        val: 109
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 3
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 70
        },
        acuity2: {
          val: 100
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 2
      }
    },
    personal: {
      email: 'jeannettedickerson@comvex.com',
      phone: '(703) 535 2325',
      mobile: '(703) 737 7780',
      address: {street: '146 Johnson Street', city: 'Barronett', state: 'MD', zip: '20258', country: 'United States'},
      hor: {street: '17364 Colin Place', city: 'Bedias', state: 'MD', zip: '20697', country: 'United States'},
      ssn: '4054',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'Protestant',
      education: 'MA',
      language: '',
      licenseNum: 'MD475162751',
      birthPlace: 'Defiance, MD\nUnited States'
    },
    exams: {
      afqt: 83,
      gs: 81,
      ar: 60,
      wk: 47,
      pc: 36,
      mk: 43,
      as: 90,
      mc: 76,
      ao: 87,
      ei: 35,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Barrett',
    lastName: 'Pacheco',
    active: true,
    dob: '1996-08-09',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 9,
      activity: 'TC',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 68
      },
      weight: {
        val: 213
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 56
      },
      cl: {
        val: 69
      },
      gt: {
        val: 55
      },
      el: {
        val: 92
      },
      mm: {
        val: 131
      },
      qt: {
        val: 111
      },
      ve: {
        val: 66
      },
      dlab: {
        val: 91
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 60
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 60
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'barrettpacheco@gmail.com',
      phone: '(703) 723 5552',
      mobile: '(703) 622 2633',
      address: {street: '14682 Irvington Place', city: 'Clinton', state: 'VA', zip: '20580', country: 'United States'},
      hor: {street: '1150 Orange Street', city: 'Vallonia', state: 'VA', zip: '20709', country: 'United States'},
      ssn: '3343',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'MD790836212',
      birthPlace: 'Wakulla, VA\nUnited States'
    },
    exams: {
      afqt: 73,
      gs: 35,
      ar: 79,
      wk: 34,
      pc: 58,
      mk: 89,
      as: 93,
      mc: 86,
      ao: 88,
      ei: 70,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Leonard',
    lastName: 'Valencia',
    active: true,
    dob: '2000-01-22',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 3,
      activity: 'HV',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 73
      },
      weight: {
        val: 138
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 69
      },
      cl: {
        val: 91
      },
      gt: {
        val: 122
      },
      el: {
        val: 58
      },
      mm: {
        val: 90
      },
      qt: {
        val: 124
      },
      ve: {
        val: 60
      },
      dlab: {
        val: 92
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 3
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 2
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: false
        },
        color: {
          val: 11
        },
        acuity: {
          val: 70
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 50
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'leonardvalencia@comvex.com',
      phone: '(703) 124 7216',
      mobile: '(703) 191 6389',
      address: {street: '8531 Butler Street', city: 'Turpin', state: 'VA', zip: '20486', country: 'United States'},
      hor: {street: '11087 Kings Place', city: 'Whitestone', state: 'VA', zip: '21308', country: 'United States'},
      ssn: '3722',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 2,
      race: 'White',
      religion: 'Protestant',
      education: 'MA',
      language: 'Spanish',
      licenseNum: 'VA202662798',
      birthPlace: 'Crown, VA\nUnited States'
    },
    exams: {
      afqt: 88,
      gs: 40,
      ar: 44,
      wk: 81,
      pc: 98,
      mk: 77,
      as: 51,
      mc: 79,
      ao: 42,
      ei: 90,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Ken',
    lastName: 'West',
    active: true,
    dob: '1994-12-09',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 4,
      activity: 'TC',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 0
      },
      height: {
        val: 61
      },
      weight: {
        val: 224
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 99
      },
      cl: {
        val: 115
      },
      gt: {
        val: 86
      },
      el: {
        val: 63
      },
      mm: {
        val: 76
      },
      qt: {
        val: 116
      },
      ve: {
        val: 66
      },
      dlab: {
        val: 149
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 3
        },
        violations: {
          val: 4
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 11
        },
        acuity: {
          val: 50
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'kenwest@comvex.com',
      phone: '(703) 257 2163',
      mobile: '(703) 254 2394',
      address: {street: '2510 Remsen Street', city: 'Rowe', state: 'MD', zip: '20645', country: 'United States'},
      hor: {street: '14140 Cornelia Street', city: 'Kiskimere', state: 'MD', zip: '21553', country: 'United States'},
      ssn: '7403',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Catholic',
      education: 'MA',
      language: 'French',
      licenseNum: 'VA516395599',
      birthPlace: 'Ebro, MD\nUnited States'
    },
    exams: {
      afqt: 86,
      gs: 37,
      ar: 91,
      wk: 86,
      pc: 99,
      mk: 58,
      as: 74,
      mc: 59,
      ao: 82,
      ei: 95,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Franco',
    lastName: 'Jimenez',
    active: true,
    dob: '1999-04-15',
    status: 'Contract/Poolee',
        dutyType: {id: 2, desc: 'DMV'},
    notif: {
      daysuntil: 2,
      activity: 'EM',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 62
      },
      weight: {
        val: 145
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 86
      },
      cl: {
        val: 71
      },
      gt: {
        val: 114
      },
      el: {
        val: 60
      },
      mm: {
        val: 54
      },
      qt: {
        val: 85
      },
      ve: {
        val: 100
      },
      dlab: {
        val: 45
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 2
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 11
        },
        acuity: {
          val: 25
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'francojimenez@outlook.com',
      phone: '(703) 221 3049',
      mobile: '(703) 313 7248',
      address: {street: '13197 Banner Avenue', city: 'Garberville', state: 'MD', zip: '20630', country: 'United States'},
      hor: {street: '18364 Diamond Street', city: 'Dodge', state: 'MD', zip: '20865', country: 'United States'},
      ssn: '2883',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'Pacific Islander',
      religion: 'N/A',
      education: 'HS',
      language: 'Portuguese',
      licenseNum: 'VA966754172',
      birthPlace: 'Stewart, MD\nUnited States'
    },
    exams: {
      afqt: 71,
      gs: 45,
      ar: 48,
      wk: 49,
      pc: 40,
      mk: 93,
      as: 85,
      mc: 88,
      ao: 62,
      ei: 90,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Manny',
    lastName: 'Riggs',
    active: true,
    dob: '1996-12-23',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 6,
      activity: 'OT',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 72
      },
      weight: {
        val: 179
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 76
      },
      cl: {
        val: 80
      },
      gt: {
        val: 141
      },
      el: {
        val: 126
      },
      mm: {
        val: 80
      },
      qt: {
        val: 122
      },
      ve: {
        val: 89
      },
      dlab: {
        val: 65
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 3
        },
        violations: {
          val: 4
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: false
        },
        color: {
          val: 3
        },
        acuity: {
          val: 20
        },
        acuity1: {
          val: 70
        },
        acuity2: {
          val: 200
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'mannyriggs@outlook.com',
      phone: '(703) 492 6880',
      mobile: '(703) 562 8435',
      address: {street: '979 Pulaski Street', city: 'Grill', state: 'MD', zip: '20640', country: 'United States'},
      hor: {street: '14094 Lewis Place', city: 'Odessa', state: 'MD', zip: '21582', country: 'United States'},
      ssn: '2710',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'Jewish',
      education: 'HS',
      language: 'French',
      licenseNum: 'VA96548222',
      birthPlace: 'Ernstville, MD\nUnited States'
    },
    exams: {
      afqt: 58,
      gs: 66,
      ar: 57,
      wk: 91,
      pc: 99,
      mk: 71,
      as: 99,
      mc: 63,
      ao: 92,
      ei: 96,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Samuel',
    lastName: 'Casey',
    active: true,
    dob: '1996-09-04',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 0,
      activity: 'EM',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 0
      },
      height: {
        val: 61
      },
      weight: {
        val: 150
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 45
      },
      cl: {
        val: 114
      },
      gt: {
        val: 103
      },
      el: {
        val: 76
      },
      mm: {
        val: 97
      },
      qt: {
        val: 84
      },
      ve: {
        val: 41
      },
      dlab: {
        val: 40
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: true
        },
        color: {
          val: 8
        },
        acuity: {
          val: 100
        },
        acuity1: {
          val: 200
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'samuelcasey@gmail.com',
      phone: '(703) 214 5086',
      mobile: '(703) 798 1747',
      address: {street: '8030 Dahill Road', city: 'Drummond', state: 'VA', zip: '20990', country: 'United States'},
      hor: {street: '17925 Front Street', city: 'Austinburg', state: 'VA', zip: '21193', country: 'United States'},
      ssn: '8553',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 2,
      race: 'White',
      religion: 'Jewish',
      education: 'HS',
      language: '',
      licenseNum: 'VA635799159',
      birthPlace: 'Cedarville, VA\nUnited States'
    },
    exams: {
      afqt: 86,
      gs: 85,
      ar: 50,
      wk: 47,
      pc: 70,
      mk: 54,
      as: 77,
      mc: 51,
      ao: 83,
      ei: 40,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Samuel',
    lastName: 'Sutton',
    active: true,
    dob: '1996-06-27',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 8,
      activity: 'EM',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 0
      },
      height: {
        val: 70
      },
      weight: {
        val: 169
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 53
      },
      cl: {
        val: 129
      },
      gt: {
        val: 86
      },
      el: {
        val: 56
      },
      mm: {
        val: 56
      },
      qt: {
        val: 91
      },
      ve: {
        val: 58
      },
      dlab: {
        val: 115
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 70
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'samuelsutton@gmail.com',
      phone: '(703) 473 1027',
      mobile: '(703) 451 2616',
      address: {street: '5883 Adams Street', city: 'Rodman', state: 'VA', zip: '20445', country: 'United States'},
      hor: {street: '21606 Goodwin Place', city: 'Wheaton', state: 'MD', zip: '20767', country: 'United States'},
      ssn: '5339',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 3,
      race: 'White',
      religion: 'Jewish',
      education: 'GED',
      language: '',
      licenseNum: 'VA374153053',
      birthPlace: 'Allentown, MD\nUnited States'
    },
    exams: {
      afqt: 62,
      gs: 56,
      ar: 92,
      wk: 83,
      pc: 99,
      mk: 80,
      as: 58,
      mc: 74,
      ao: 60,
      ei: 66,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Dean',
    lastName: 'McCormick',
    active: true,
    dob: '1998-09-08',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 3,
      activity: 'TC',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 68
      },
      weight: {
        val: 205
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 68
      },
      cl: {
        val: 112
      },
      gt: {
        val: 120
      },
      el: {
        val: 55
      },
      mm: {
        val: 114
      },
      qt: {
        val: 98
      },
      ve: {
        val: 64
      },
      dlab: {
        val: 163
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 60
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'deannmccormick@comvex.com',
      phone: '(703) 253 3699',
      mobile: '(703) 573 3896',
      address: {street: '1249 Albemarle Terrace', city: 'Taycheedah', state: 'VA', zip: '20345', country: 'United States'},
      hor: {street: '11169 Chester Street', city: 'Brady', state: 'MD', zip: '21908', country: 'United States'},
      ssn: '1583',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'N/A',
      education: 'GED',
      language: '',
      licenseNum: 'VA316966555',
      birthPlace: 'Chumuckla, VA\nUnited States'
    },
    exams: {
      afqt: 95,
      gs: 46,
      ar: 45,
      wk: 48,
      pc: 35,
      mk: 35,
      as: 66,
      mc: 99,
      ao: 34,
      ei: 80,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Richard',
    lastName: 'Sutton',
    active: true,
    dob: '1999-05-22',
    status: 'Contract/Poolee',
        dutyType: {id: 2, desc: 'DMV'},
    notif: {
      daysuntil: 5,
      activity: 'HV',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 0
      },
      height: {
        val: 73
      },
      weight: {
        val: 220
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 80
      },
      cl: {
        val: 140
      },
      gt: {
        val: 120
      },
      el: {
        val: 72
      },
      mm: {
        val: 66
      },
      qt: {
        val: 103
      },
      ve: {
        val: 57
      },
      dlab: {
        val: 163
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 2
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 2
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 70
        },
        acuity1: {
          val: 70
        },
        acuity2: {
          val: 60
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'deansutton@amazon.com',
      phone: '(703) 137 9659',
      mobile: '(703) 608 2930',
      address: {street: '4864 Livonia Avenue', city: 'Evergreen', state: 'VA', zip: '20243', country: 'United States'},
      hor: {street: '23709 Campus Place', city: 'Durham', state: 'VA', zip: '21728', country: 'United States'},
      ssn: '6493',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'N/A',
      education: 'GED',
      language: 'Spanish',
      licenseNum: 'VA600148580',
      birthPlace: 'Crenshaw, VA\nUnited States'
    },
    exams: {
      afqt: 96,
      gs: 95,
      ar: 79,
      wk: 53,
      pc: 53,
      mk: 55,
      as: 60,
      mc: 60,
      ao: 83,
      ei: 78,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Perry',
    lastName: 'Espinoza',
    active: true,
    dob: '1998-01-03',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 10,
      activity: 'EM',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 0
      },
      height: {
        val: 69
      },
      weight: {
        val: 214
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 67
      },
      cl: {
        val: 105
      },
      gt: {
        val: 116
      },
      el: {
        val: 135
      },
      mm: {
        val: 75
      },
      qt: {
        val: 119
      },
      ve: {
        val: 70
      },
      dlab: {
        val: 50
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 2
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'perryespinoza@hotmail.com',
      phone: '(703) 136 9530',
      mobile: '(703) 600 3829',
      address: {street: '3633 Union Avenue', city: 'Boykin', state: 'MD', zip: '20710', country: 'United States'},
      hor: {street: '9476 Karweg Place', city: 'Kapowsin', state: 'VA', zip: '21667', country: 'United States'},
      ssn: '6177',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'HS',
      language: '',
      licenseNum: 'VA465184756',
      birthPlace: 'Boomer, MD\nUnited States'
    },
    exams: {
      afqt: 69,
      gs: 93,
      ar: 60,
      wk: 95,
      pc: 36,
      mk: 59,
      as: 42,
      mc: 69,
      ao: 36,
      ei: 87,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Teresa',
    lastName: 'Copeland',
    active: true,
    dob: '1998-09-03',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 6,
      activity: 'TC',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 69
      },
      weight: {
        val: 143
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 88
      },
      cl: {
        val: 130
      },
      gt: {
        val: 95
      },
      el: {
        val: 116
      },
      mm: {
        val: 62
      },
      qt: {
        val: 61
      },
      ve: {
        val: 101
      },
      dlab: {
        val: 130
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 4
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 20
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'teresacopeland@hotmail.com',
      phone: '(703) 139 1432',
      mobile: '(703) 178 5229',
      address: {street: '11624 Ocean Parkway', city: 'Wiscon', state: 'MD', zip: '20999', country: 'United States'},
      hor: {street: '13151 Chestnut Avenue', city: 'Eagletown', state: 'MD', zip: '20070', country: 'United States'},
      ssn: '3279',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Asian',
      religion: 'Protestant',
      education: 'HS',
      language: '',
      licenseNum: 'VA603734696',
      birthPlace: 'Chamizal, VA\nUnited States'
    },
    exams: {
      afqt: 69,
      gs: 65,
      ar: 90,
      wk: 40,
      pc: 38,
      mk: 80,
      as: 98,
      mc: 71,
      ao: 62,
      ei: 87,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Anthony',
    lastName: 'Whitney',
    active: true,
    dob: '1999-03-25',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 3,
      activity: 'HV',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 62
      },
      weight: {
        val: 159
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 63
      },
      cl: {
        val: 62
      },
      gt: {
        val: 108
      },
      el: {
        val: 86
      },
      mm: {
        val: 109
      },
      qt: {
        val: 60
      },
      ve: {
        val: 94
      },
      dlab: {
        val: 149
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: true
        },
        color: {
          val: 5
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 70
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'anthonywhitney@outlook.com',
      phone: '(703) 208 4413',
      mobile: '(703) 344 4559',
      address: {street: '11999 Stillwell Place', city: 'Century', state: 'VA', zip: '20606', country: 'United States'},
      hor: {street: '17307 Portland Avenue', city: 'Conestoga', state: 'VA', zip: '21489', country: 'United States'},
      ssn: '7520',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Buddhist',
      education: 'GED',
      language: '',
      licenseNum: 'MD191792869',
      birthPlace: 'Jeff, VA\nUnited States'
    },
    exams: {
      afqt: 65,
      gs: 96,
      ar: 66,
      wk: 58,
      pc: 60,
      mk: 88,
      as: 72,
      mc: 67,
      ao: 84,
      ei: 48,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Andy',
    lastName: 'Byers',
    active: true,
    dob: '2000-10-25',
    status: 'Contract/Poolee',
        dutyType: {id: 3, desc: 'DMV'},
    notif: {
      daysuntil: 7,
      activity: 'HV',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 0
      },
      height: {
        val: 67
      },
      weight: {
        val: 184
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 99
      },
      cl: {
        val: 119
      },
      gt: {
        val: 74
      },
      el: {
        val: 67
      },
      mm: {
        val: 103
      },
      qt: {
        val: 115
      },
      ve: {
        val: 104
      },
      dlab: {
        val: 112
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 2
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: false
        },
        color: {
          val: 3
        },
        acuity: {
          val: 50
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'anthonybyers@gmail.com',
      phone: '(703) 566 4485',
      mobile: '(703) 624 9003',
      address: {street: '11056 Emmons Avenue', city: 'Mulino', state: 'VA', zip: '20379', country: 'United States'},
      hor: {street: '1380 Meeker Avenue', city: 'Marion', state: 'MD', zip: '21780', country: 'United States'},
      ssn: '3169',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Asian',
      religion: 'Buddhist',
      education: 'MA',
      language: 'Arabic',
      licenseNum: 'VA651550747',
      birthPlace: 'Summerfield, MD\nUnited States'
    },
    exams: {
      afqt: 96,
      gs: 30,
      ar: 50,
      wk: 49,
      pc: 55,
      mk: 93,
      as: 67,
      mc: 93,
      ao: 46,
      ei: 39,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Carson',
    lastName: 'Carlson',
    active: true,
    dob: '1994-08-03',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 10,
      activity: 'HV',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 73
      },
      weight: {
        val: 222
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 93
      },
      cl: {
        val: 124
      },
      gt: {
        val: 65
      },
      el: {
        val: 89
      },
      mm: {
        val: 115
      },
      qt: {
        val: 125
      },
      ve: {
        val: 30
      },
      dlab: {
        val: 64
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 2
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 11
        },
        acuity: {
          val: 60
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'carsoncarlson@outlook.com',
      phone: '(703) 554 7109',
      mobile: '(703) 149 3034',
      address: {street: '9859 Rost Place', city: 'Greenfields', state: 'MD', zip: '20853', country: 'United States'},
      hor: {street: '21391 Varanda Place', city: 'Greenbackville', state: 'MD', zip: '21287', country: 'United States'},
      ssn: '7143',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'BS',
      language: '',
      licenseNum: 'VA918334806',
      birthPlace: 'Finzel, VA\nUnited States'
    },
    exams: {
      afqt: 99,
      gs: 89,
      ar: 61,
      wk: 85,
      pc: 76,
      mk: 54,
      as: 69,
      mc: 75,
      ao: 99,
      ei: 63,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Albert',
    lastName: 'Weeks',
    active: true,
    dob: '1996-06-13',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 6,
      activity: 'TC',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 71
      },
      weight: {
        val: 143
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 63
      },
      cl: {
        val: 137
      },
      gt: {
        val: 125
      },
      el: {
        val: 92
      },
      mm: {
        val: 66
      },
      qt: {
        val: 83
      },
      ve: {
        val: 76
      },
      dlab: {
        val: 51
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 2
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 4
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 4
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: true
        },
        color: {
          val: 12
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 25
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'albertweeks@gmail.com',
      phone: '(703) 782 1875',
      mobile: '(703) 715 4420',
      address: {street: '8381 Reeve Place', city: 'Bend', state: 'VA', zip: '20131', country: 'United States'},
      hor: {street: '24543 Strong Place', city: 'Goochland', state: 'VA', zip: '21120', country: 'United States'},
      ssn: '9653',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Pacific Islander',
      religion: 'N/A',
      education: 'GED',
      language: 'Akan',
      licenseNum: 'MD210149525',
      birthPlace: 'Roberts, VA\nUnited States'
    },
    exams: {
      afqt: 54,
      gs: 87,
      ar: 37,
      wk: 77,
      pc: 95,
      mk: 37,
      as: 71,
      mc: 94,
      ao: 94,
      ei: 84,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Victor',
    lastName: 'Johnston',
    active: true,
    dob: '1994-06-18',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 9,
      activity: 'TC',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 70
      },
      weight: {
        val: 150
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 67
      },
      cl: {
        val: 93
      },
      gt: {
        val: 77
      },
      el: {
        val: 108
      },
      mm: {
        val: 59
      },
      qt: {
        val: 128
      },
      ve: {
        val: 64
      },
      dlab: {
        val: 104
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 12
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 40
        },
        acuity2: {
          val: 60
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'victorjohnston@outlook.com',
      phone: '(703) 709 3335',
      mobile: '(703) 583 3112',
      address: {street: '1896 Cleveland Street', city: 'Succasunna', state: 'VA', zip: '20960', country: 'United States'},
      hor: {street: '12630 Gatling Place', city: 'Enoree', state: 'VA', zip: '20989', country: 'United States'},
      ssn: '3581',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 2,
      race: 'Pacific Islander',
      religion: 'Catholic',
      education: 'GED',
      language: 'Spanish',
      licenseNum: 'VA381520859',
      birthPlace: 'Tyhee, VA\nUnited States'
    },
    exams: {
      afqt: 88,
      gs: 39,
      ar: 34,
      wk: 84,
      pc: 56,
      mk: 53,
      as: 43,
      mc: 48,
      ao: 96,
      ei: 39,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Greg',
    lastName: 'Dean',
    active: true,
    dob: '2000-12-05',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 8,
      activity: 'TC',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 72
      },
      weight: {
        val: 192
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 96
      },
      cl: {
        val: 103
      },
      gt: {
        val: 79
      },
      el: {
        val: 113
      },
      mm: {
        val: 86
      },
      qt: {
        val: 93
      },
      ve: {
        val: 67
      },
      dlab: {
        val: 108
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 2
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 11
        },
        acuity: {
          val: 200
        },
        acuity1: {
          val: 40
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'gregdean@gmail.com',
      phone: '(703) 732 4988',
      mobile: '(703) 455 5633',
      address: {street: '7415 Quincy Street', city: 'Waiohinu', state: 'MD', zip: '20471', country: 'United States'},
      hor: {street: '21665 Woodrow Court', city: 'Logan', state: 'MD', zip: '21175', country: 'United States'},
      ssn: '5282',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 2,
      race: 'White',
      religion: 'Muslim',
      education: 'HS',
      language: '',
      licenseNum: 'VA551854926',
      birthPlace: 'Edgar, MD\nUnited States'
    },
    exams: {
      afqt: 57,
      gs: 89,
      ar: 79,
      wk: 84,
      pc: 90,
      mk: 94,
      as: 32,
      mc: 78,
      ao: 47,
      ei: 83,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Payton',
    lastName: 'Frye',
    active: true,
    dob: '1998-11-10',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 10,
      activity: 'HV',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 68
      },
      weight: {
        val: 201
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 59
      },
      cl: {
        val: 109
      },
      gt: {
        val: 70
      },
      el: {
        val: 72
      },
      mm: {
        val: 91
      },
      qt: {
        val: 68
      },
      ve: {
        val: 107
      },
      dlab: {
        val: 71
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 4
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 4
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 13
        },
        acuity: {
          val: 200
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'peytonfrye@outlook.com',
      phone: '(703) 375 4693',
      mobile: '(703) 350 1997',
      address: {street: '16106 Joralemon Street', city: 'Brewster', state: 'MD', zip: '20858', country: 'United States'},
      hor: {street: '7723 Suydam Street', city: 'Accoville', state: 'MD', zip: '21853', country: 'United States'},
      ssn: '1878',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Pacific Islander',
      religion: 'Protestant',
      education: 'MA',
      language: 'Akan',
      licenseNum: 'MD455431529',
      birthPlace: 'Vienna, VA\nUnited States'
    },
    exams: {
      afqt: 55,
      gs: 70,
      ar: 42,
      wk: 95,
      pc: 68,
      mk: 57,
      as: 46,
      mc: 88,
      ao: 71,
      ei: 33,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Dillon',
    lastName: 'Glover',
    active: true,
    dob: '1997-08-06',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 10,
      activity: 'TC',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 67
      },
      weight: {
        val: 180
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 55
      },
      cl: {
        val: 136
      },
      gt: {
        val: 117
      },
      el: {
        val: 134
      },
      mm: {
        val: 126
      },
      qt: {
        val: 109
      },
      ve: {
        val: 50
      },
      dlab: {
        val: 100
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 4
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 2
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 3
        },
        acuity: {
          val: 40
        },
        acuity1: {
          val: 40
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'dillonglover@gmail.com',
      phone: '(703) 504 7125',
      mobile: '(703) 191 7889',
      address: {street: '3134 Hegeman Avenue', city: 'Orason', state: 'VA', zip: '20985', country: 'United States'},
      hor: {street: '23697 Lawton Street', city: 'Boyd', state: 'VA', zip: '21910', country: 'United States'},
      ssn: '8214',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'N/A',
      education: 'GED',
      language: '',
      licenseNum: 'MD480823850',
      birthPlace: 'Sterling, VA\nUnited States'
    },
    exams: {
      afqt: 73,
      gs: 53,
      ar: 49,
      wk: 56,
      pc: 33,
      mk: 62,
      as: 91,
      mc: 95,
      ao: 87,
      ei: 97,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Marcus',
    lastName: 'Bradshaw',
    active: true,
    dob: '1994-10-07',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 7,
      activity: 'TC',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 63
      },
      weight: {
        val: 189
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 52
      },
      cl: {
        val: 122
      },
      gt: {
        val: 110
      },
      el: {
        val: 65
      },
      mm: {
        val: 69
      },
      qt: {
        val: 128
      },
      ve: {
        val: 103
      },
      dlab: {
        val: 43
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 2
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: true
        },
        color: {
          val: 12
        },
        acuity: {
          val: 60
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 100
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'marcusbradshaw@hotmail.com',
      phone: '(703) 297 4407',
      mobile: '(703) 761 3277',
      address: {street: '2869 Richmond Street', city: 'Bonanza', state: 'MD', zip: '20118', country: 'United States'},
      hor: {street: '22113 Navy Street', city: 'Groton', state: 'MD', zip: '21637', country: 'United States'},
      ssn: '4529',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'Black',
      religion: 'Protestant',
      education: 'GED',
      language: '',
      licenseNum: 'VA5215461',
      birthPlace: 'Hiseville, VA\nUnited States'
    },
    exams: {
      afqt: 54,
      gs: 80,
      ar: 37,
      wk: 73,
      pc: 76,
      mk: 58,
      as: 43,
      mc: 51,
      ao: 96,
      ei: 64,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Alford',
    lastName: 'Lott',
    active: true,
    dob: '1997-03-29',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 8,
      activity: 'TC',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 62
      },
      weight: {
        val: 179
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 48
      },
      cl: {
        val: 79
      },
      gt: {
        val: 73
      },
      el: {
        val: 131
      },
      mm: {
        val: 67
      },
      qt: {
        val: 82
      },
      ve: {
        val: 98
      },
      dlab: {
        val: 161
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 4
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 11
        },
        acuity: {
          val: 25
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 100
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'alfordlott@outlook.com',
      phone: '(703) 356 2886',
      mobile: '(703) 595 7241',
      address: {street: '8086 Baughman Place', city: 'Windsor', state: 'MD', zip: '20656', country: 'United States'},
      hor: {street: '16874 Dodworth Street', city: 'Wollochet', state: 'MD', zip: '20214', country: 'United States'},
      ssn: '6523',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 3,
      race: 'Asian',
      religion: 'Buddhist',
      education: 'MA',
      language: 'Portuguese',
      licenseNum: 'MD470451681',
      birthPlace: 'Cherokee, MD\nUnited States'
    },
    exams: {
      afqt: 90,
      gs: 99,
      ar: 30,
      wk: 51,
      pc: 62,
      mk: 69,
      as: 37,
      mc: 63,
      ao: 54,
      ei: 42,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Charles',
    lastName: 'Trevino',
    active: true,
    dob: '1998-09-05',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 6,
      activity: 'HV',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 73
      },
      weight: {
        val: 201
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 54
      },
      cl: {
        val: 95
      },
      gt: {
        val: 135
      },
      el: {
        val: 100
      },
      mm: {
        val: 68
      },
      qt: {
        val: 50
      },
      ve: {
        val: 96
      },
      dlab: {
        val: 40
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 2
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: true
        },
        color: {
          val: 5
        },
        acuity: {
          val: 25
        },
        acuity1: {
          val: 25
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'charlestrevino@outlook.com',
      phone: '(703) 750 9666',
      mobile: '(703) 724 6933',
      address: {street: '10551 Boerum Street', city: 'Emory', state: 'MD', zip: '20217', country: 'United States'},
      hor: {street: '14407 Mermaid Avenue', city: 'Campo', state: 'VA', zip: '20693', country: 'United States'},
      ssn: '6027',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Catholic',
      education: 'GED',
      language: 'Arabic',
      licenseNum: 'MD35509719',
      birthPlace: 'Adamstown, VA\nUnited States'
    },
    exams: {
      afqt: 76,
      gs: 75,
      ar: 53,
      wk: 81,
      pc: 68,
      mk: 67,
      as: 86,
      mc: 48,
      ao: 72,
      ei: 77,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'John',
    lastName: 'Moses',
    active: true,
    dob: '1997-05-01',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 6,
      activity: 'EM',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 72
      },
      weight: {
        val: 205
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 85
      },
      cl: {
        val: 137
      },
      gt: {
        val: 80
      },
      el: {
        val: 121
      },
      mm: {
        val: 80
      },
      qt: {
        val: 66
      },
      ve: {
        val: 81
      },
      dlab: {
        val: 38
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 100
        },
        acuity1: {
          val: 25
        },
        acuity2: {
          val: 100
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'johnmoses@gmail.com',
      phone: '(703) 481 6047',
      mobile: '(703) 532 9371',
      address: {street: '11854 Centre Street', city: 'Greenwich', state: 'VA', zip: '20938', country: 'United States'},
      hor: {street: '9446 Kensington Walk', city: 'Wilsonia', state: 'MD', zip: '20283', country: 'United States'},
      ssn: '3596',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Asian',
      religion: 'Catholic',
      education: 'GED',
      language: 'French',
      licenseNum: 'VA470261076',
      birthPlace: 'Loretto, MD\nUnited States'
    },
    exams: {
      afqt: 98,
      gs: 71,
      ar: 78,
      wk: 37,
      pc: 72,
      mk: 81,
      as: 31,
      mc: 43,
      ao: 94,
      ei: 75,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Merle',
    lastName: 'Smith',
    active: true,
    dob: '1998-08-30',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 3,
      activity: 'TC',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 63
      },
      weight: {
        val: 161
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 52
      },
      cl: {
        val: 83
      },
      gt: {
        val: 60
      },
      el: {
        val: 133
      },
      mm: {
        val: 64
      },
      qt: {
        val: 74
      },
      ve: {
        val: 103
      },
      dlab: {
        val: 140
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 8
        },
        acuity: {
          val: 50
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'merlesmith@outlook.com',
      phone: '(703) 560 1603',
      mobile: '(703) 559 5733',
      address: {street: '16528 Seagate Terrace', city: 'Benson', state: 'MD', zip: '20205', country: 'United States'},
      hor: {street: '24337 Conway Street', city: 'Snelling', state: 'MD', zip: '21976', country: 'United States'},
      ssn: '2274',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'GED',
      language: 'Akan',
      licenseNum: 'VA41861238',
      birthPlace: 'Jacumba, VA\nUnited States'
    },
    exams: {
      afqt: 89,
      gs: 88,
      ar: 73,
      wk: 85,
      pc: 57,
      mk: 97,
      as: 89,
      mc: 78,
      ao: 61,
      ei: 36,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Marvin',
    lastName: 'Owens',
    active: true,
    dob: '1996-03-12',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 6,
      activity: 'OT',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 61
      },
      weight: {
        val: 193
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 94
      },
      cl: {
        val: 142
      },
      gt: {
        val: 58
      },
      el: {
        val: 141
      },
      mm: {
        val: 90
      },
      qt: {
        val: 53
      },
      ve: {
        val: 38
      },
      dlab: {
        val: 109
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 3
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 2
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 11
        },
        acuity: {
          val: 20
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 70
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'marvinowens@outlook.com',
      phone: '(703) 231 5358',
      mobile: '(703) 138 4298',
      address: {street: '8117 Will Place', city: 'Chesapeake', state: 'MD', zip: '20422', country: 'United States'},
      hor: {street: '19137 Bowery Street', city: 'Nicut', state: 'VA', zip: '20288', country: 'United States'},
      ssn: '1492',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'Asian',
      religion: 'Muslim',
      education: 'HS',
      language: '',
      licenseNum: 'VA843797263',
      birthPlace: 'Starks, VA\nUnited States'
    },
    exams: {
      afqt: 92,
      gs: 65,
      ar: 97,
      wk: 99,
      pc: 80,
      mk: 32,
      as: 85,
      mc: 46,
      ao: 72,
      ei: 89,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Othello',
    lastName: 'O\'Neil',
    active: true,
    dob: '1997-04-27',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 5,
      activity: 'HV',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 65
      },
      weight: {
        val: 225
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 46
      },
      cl: {
        val: 85
      },
      gt: {
        val: 121
      },
      el: {
        val: 128
      },
      mm: {
        val: 127
      },
      qt: {
        val: 68
      },
      ve: {
        val: 86
      },
      dlab: {
        val: 106
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 2
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 14
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'fryoneil@outlook.com',
      phone: '(703) 323 4940',
      mobile: '(703) 584 8526',
      address: {street: '9285 Oakland Place', city: 'Craig', state: 'VA', zip: '20280', country: 'United States'},
      hor: {street: '711 Prospect Avenue', city: 'Springville', state: 'VA', zip: '21513', country: 'United States'},
      ssn: '6168',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Asian',
      religion: 'Catholic',
      education: 'HS',
      language: 'Akan',
      licenseNum: 'VA946547634',
      birthPlace: 'Allendale, MD\nUnited States'
    },
    exams: {
      afqt: 52,
      gs: 88,
      ar: 65,
      wk: 50,
      pc: 76,
      mk: 45,
      as: 41,
      mc: 58,
      ao: 66,
      ei: 74,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Jenna',
    lastName: 'Gilmore',
    active: true,
    dob: '1995-04-11',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 10,
      activity: 'EM',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 66
      },
      weight: {
        val: 155
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 94
      },
      cl: {
        val: 147
      },
      gt: {
        val: 115
      },
      el: {
        val: 136
      },
      mm: {
        val: 105
      },
      qt: {
        val: 100
      },
      ve: {
        val: 104
      },
      dlab: {
        val: 46
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 100
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 100
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'jennagilmore@outlook.com',
      phone: '(703) 206 7220',
      mobile: '(703) 701 9280',
      address: {street: '4447 Harbor Court', city: 'Sugartown', state: 'MD', zip: '20162', country: 'United States'},
      hor: {street: '13017 Logan Street', city: 'Forestburg', state: 'VA', zip: '20668', country: 'United States'},
      ssn: '8105',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'HS',
      language: '',
      licenseNum: 'VA68629167',
      birthPlace: 'Toftrees, VA\nUnited States'
    },
    exams: {
      afqt: 59,
      gs: 69,
      ar: 67,
      wk: 94,
      pc: 64,
      mk: 47,
      as: 57,
      mc: 80,
      ao: 51,
      ei: 93,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Anthony',
    lastName: 'Potts',
    active: true,
    dob: '1996-06-22',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 4,
      activity: 'TC',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 0
      },
      height: {
        val: 67
      },
      weight: {
        val: 221
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 54
      },
      cl: {
        val: 143
      },
      gt: {
        val: 66
      },
      el: {
        val: 113
      },
      mm: {
        val: 105
      },
      qt: {
        val: 122
      },
      ve: {
        val: 65
      },
      dlab: {
        val: 81
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 60
        },
        acuity1: {
          val: 40
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'anthonypotts@outlook.com',
      phone: '(703) 574 8732',
      mobile: '(703) 582 5445',
      address: {street: '258 Creamer Street', city: 'Chesterfield', state: 'MD', zip: '20688', country: 'United States'},
      hor: {street: '12961 Portal Street', city: 'Fulford', state: 'MD', zip: '21263', country: 'United States'},
      ssn: '1872',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Jewish',
      education: 'HS',
      language: '',
      licenseNum: 'VA698396683',
      birthPlace: 'Hampstead, VA\nUnited States'
    },
    exams: {
      afqt: 73,
      gs: 34,
      ar: 56,
      wk: 87,
      pc: 39,
      mk: 66,
      as: 82,
      mc: 66,
      ao: 79,
      ei: 53,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Yeardley',
    lastName: 'Frank',
    active: true,
    dob: '1995-12-29',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 10,
      activity: 'EM',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 61
      },
      weight: {
        val: 186
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 85
      },
      cl: {
        val: 100
      },
      gt: {
        val: 110
      },
      el: {
        val: 115
      },
      mm: {
        val: 96
      },
      qt: {
        val: 114
      },
      ve: {
        val: 55
      },
      dlab: {
        val: 151
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 2
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 12
        },
        acuity: {
          val: 20
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'yeardleyfrank@outlook.com',
      phone: '(703) 734 4683',
      mobile: '(703) 666 1553',
      address: {street: '6398 Elm Place', city: 'Hartley', state: 'MD', zip: '20084', country: 'United States'},
      hor: {street: '12277 Ashland Place', city: 'Cliff', state: 'VA', zip: '20137', country: 'United States'},
      ssn: '9218',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 3,
      race: 'White',
      religion: 'Buddhist',
      education: 'MA',
      language: 'Arabic',
      licenseNum: 'MD915825304',
      birthPlace: 'Jacksonwald, MD\nUnited States'
    },
    exams: {
      afqt: 64,
      gs: 59,
      ar: 59,
      wk: 90,
      pc: 99,
      mk: 80,
      as: 37,
      mc: 59,
      ao: 66,
      ei: 55,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Karina',
    lastName: 'Case',
    active: true,
    dob: '1994-10-14',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 0,
      activity: 'EM',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 62
      },
      weight: {
        val: 190
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 62
      },
      cl: {
        val: 145
      },
      gt: {
        val: 122
      },
      el: {
        val: 136
      },
      mm: {
        val: 105
      },
      qt: {
        val: 58
      },
      ve: {
        val: 46
      },
      dlab: {
        val: 115
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 3
        },
        acuity: {
          val: 20
        },
        acuity1: {
          val: 60
        },
        acuity2: {
          val: 200
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'karinacase@outlook.com',
      phone: '(703) 351 2715',
      mobile: '(703) 592 2590',
      address: {street: '9959 Hinsdale Street', city: 'Westmoreland', state: 'MD', zip: '20969', country: 'United States'},
      hor: {street: '4544 Elm Avenue', city: 'Sena', state: 'VA', zip: '20270', country: 'United States'},
      ssn: '5931',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Muslim',
      education: 'HS',
      language: 'Arabic',
      licenseNum: 'VA45445737',
      birthPlace: 'Watchtower, VA\nUnited States'
    },
    exams: {
      afqt: 51,
      gs: 37,
      ar: 69,
      wk: 34,
      pc: 87,
      mk: 99,
      as: 38,
      mc: 81,
      ao: 68,
      ei: 45,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Elliott',
    lastName: 'Douglas',
    active: true,
    dob: '1998-05-08',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 9,
      activity: 'EM',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 64
      },
      weight: {
        val: 219
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 50
      },
      cl: {
        val: 113
      },
      gt: {
        val: 130
      },
      el: {
        val: 66
      },
      mm: {
        val: 97
      },
      qt: {
        val: 88
      },
      ve: {
        val: 34
      },
      dlab: {
        val: 75
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: false
        },
        color: {
          val: 12
        },
        acuity: {
          val: 50
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 100
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 2
      }
    },
    personal: {
      email: 'elnoradouglas@outlook.com',
      phone: '(703) 509 5142',
      mobile: '(703) 759 9811',
      address: {street: '15986 Williams Place', city: 'Lowgap', state: 'MD', zip: '20743', country: 'United States'},
      hor: {street: '23124 Hazel Court', city: 'Ripley', state: 'MD', zip: '21420', country: 'United States'},
      ssn: '2985',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'Buddhist',
      education: 'MA',
      language: 'French',
      licenseNum: 'VA912683105',
      birthPlace: 'Temperanceville, VA\nUnited States'
    },
    exams: {
      afqt: 70,
      gs: 79,
      ar: 31,
      wk: 96,
      pc: 79,
      mk: 47,
      as: 54,
      mc: 76,
      ao: 60,
      ei: 51,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Elliott',
    lastName: 'Sullivan',
    active: true,
    dob: '1998-09-08',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 3,
      activity: 'EM',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 61
      },
      weight: {
        val: 223
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 48
      },
      cl: {
        val: 85
      },
      gt: {
        val: 88
      },
      el: {
        val: 70
      },
      mm: {
        val: 68
      },
      qt: {
        val: 88
      },
      ve: {
        val: 97
      },
      dlab: {
        val: 64
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 11
        },
        acuity: {
          val: 200
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 25
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'elliottsullivan@outlook.com',
      phone: '(703) 402 6213',
      mobile: '(703) 508 6846',
      address: {street: '3904 Forrest Street', city: 'Comptche', state: 'MD', zip: '20969', country: 'United States'},
      hor: {street: '4384 Bogart Street', city: 'Coultervillle', state: 'MD', zip: '21095', country: 'United States'},
      ssn: '5721',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'Pacific Islander',
      religion: 'Muslim',
      education: 'HS',
      language: 'Arabic',
      licenseNum: 'VA600171263',
      birthPlace: 'Tioga, VA\nUnited States'
    },
    exams: {
      afqt: 69,
      gs: 59,
      ar: 32,
      wk: 53,
      pc: 73,
      mk: 93,
      as: 71,
      mc: 67,
      ao: 61,
      ei: 81,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Tamara',
    lastName: 'Knapp',
    active: true,
    dob: '1994-11-21',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 4,
      activity: 'EM',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 65
      },
      weight: {
        val: 179
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 44
      },
      cl: {
        val: 84
      },
      gt: {
        val: 72
      },
      el: {
        val: 95
      },
      mm: {
        val: 65
      },
      qt: {
        val: 96
      },
      ve: {
        val: 34
      },
      dlab: {
        val: 128
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 4
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 8
        },
        acuity: {
          val: 40
        },
        acuity1: {
          val: 200
        },
        acuity2: {
          val: 25
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'tamaraknapp@outlook.com',
      phone: '(703) 196 8940',
      mobile: '(703) 134 9828',
      address: {street: '1974 Pioneer Street', city: 'Jackpot', state: 'VA', zip: '20137', country: 'United States'},
      hor: {street: '20931 Metropolitan Avenue', city: 'Roland', state: 'MD', zip: '20797', country: 'United States'},
      ssn: '7709',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'Buddhist',
      education: 'GED',
      language: 'Arabic',
      licenseNum: 'VA806564215',
      birthPlace: 'Inkerman, VA\nUnited States'
    },
    exams: {
      afqt: 80,
      gs: 81,
      ar: 74,
      wk: 77,
      pc: 98,
      mk: 43,
      as: 70,
      mc: 37,
      ao: 67,
      ei: 61,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Marshall',
    lastName: 'Fouad',
    active: true,
    dob: '1998-12-06',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 7,
      activity: 'HV',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 63
      },
      weight: {
        val: 142
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 55
      },
      cl: {
        val: 132
      },
      gt: {
        val: 129
      },
      el: {
        val: 108
      },
      mm: {
        val: 96
      },
      qt: {
        val: 110
      },
      ve: {
        val: 91
      },
      dlab: {
        val: 35
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 60
        },
        acuity1: {
          val: 100
        },
        acuity2: {
          val: 50
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'marshallfouad@outlook.com',
      phone: '(703) 397 1941',
      mobile: '(703) 358 5690',
      address: {street: '12811 Herbert Street', city: 'Motley', state: 'MD', zip: '20781', country: 'United States'},
      hor: {street: '9860 Erskine Loop', city: 'Westerville', state: 'MD', zip: '21454', country: 'United States'},
      ssn: '3528',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Jewish',
      education: 'BS',
      language: '',
      licenseNum: 'MD503394571',
      birthPlace: 'Konterra, MD\nUnited States'
    },
    exams: {
      afqt: 58,
      gs: 46,
      ar: 38,
      wk: 36,
      pc: 97,
      mk: 94,
      as: 44,
      mc: 36,
      ao: 45,
      ei: 71,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Alex',
    lastName: 'Swanson',
    active: true,
    dob: '1999-11-05',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 5,
      activity: 'EM',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 69
      },
      weight: {
        val: 209
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 49
      },
      cl: {
        val: 84
      },
      gt: {
        val: 98
      },
      el: {
        val: 60
      },
      mm: {
        val: 108
      },
      qt: {
        val: 112
      },
      ve: {
        val: 69
      },
      dlab: {
        val: 112
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 3
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 2
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 14
        },
        acuity: {
          val: 40
        },
        acuity1: {
          val: 40
        },
        acuity2: {
          val: 100
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'adkinsswanson@outlook.com',
      phone: '(703) 361 6374',
      mobile: '(703) 783 1784',
      address: {street: '13039 Powers Street', city: 'Coaldale', state: 'VA', zip: '20745', country: 'United States'},
      hor: {street: '13258 Rutledge Street', city: 'Tivoli', state: 'VA', zip: '20332', country: 'United States'},
      ssn: '6214',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'MA',
      language: 'Spanish',
      licenseNum: 'MD534796407',
      birthPlace: 'Rivera, MD\nUnited States'
    },
    exams: {
      afqt: 99,
      gs: 54,
      ar: 74,
      wk: 89,
      pc: 61,
      mk: 82,
      as: 53,
      mc: 57,
      ao: 70,
      ei: 69,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Jordan',
    lastName: 'Pratt',
    active: true,
    dob: '1996-05-22',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 5,
      activity: 'HV',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 67
      },
      weight: {
        val: 167
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 65
      },
      cl: {
        val: 90
      },
      gt: {
        val: 108
      },
      el: {
        val: 109
      },
      mm: {
        val: 116
      },
      qt: {
        val: 56
      },
      ve: {
        val: 45
      },
      dlab: {
        val: 81
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 2
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 13
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'gilbertpratt@outlook.com',
      phone: '(703) 303 4630',
      mobile: '(703) 247 8161',
      address: {street: '15179 Forest Place', city: 'Hasty', state: 'MD', zip: '20662', country: 'United States'},
      hor: {street: '17813 Crooke Avenue', city: 'Veyo', state: 'VA', zip: '20368', country: 'United States'},
      ssn: '7656',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'N/A',
      education: 'BS',
      language: 'Spanish',
      licenseNum: 'VA37821873',
      birthPlace: 'Floris, MD\nUnited States'
    },
    exams: {
      afqt: 77,
      gs: 51,
      ar: 39,
      wk: 48,
      pc: 91,
      mk: 63,
      as: 72,
      mc: 40,
      ao: 30,
      ei: 52,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Whitley',
    lastName: 'Buckner',
    active: true,
    dob: '1996-04-11',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 0,
      activity: 'EM',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 68
      },
      weight: {
        val: 192
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 78
      },
      cl: {
        val: 83
      },
      gt: {
        val: 61
      },
      el: {
        val: 67
      },
      mm: {
        val: 61
      },
      qt: {
        val: 75
      },
      ve: {
        val: 81
      },
      dlab: {
        val: 152
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 14
        },
        acuity: {
          val: 60
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'whitleybuckner@outlook.com',
      phone: '(703) 316 1291',
      mobile: '(703) 793 9826',
      address: {street: '2240 Meserole Street', city: 'Bowden', state: 'VA', zip: '20815', country: 'United States'},
      hor: {street: '13480 Sheffield Avenue', city: 'Beyerville', state: 'MD', zip: '20182', country: 'United States'},
      ssn: '9260',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'Buddhist',
      education: 'MA',
      language: 'French',
      licenseNum: 'MD175628117',
      birthPlace: 'Neibert, VA\nUnited States'
    },
    exams: {
      afqt: 71,
      gs: 93,
      ar: 33,
      wk: 88,
      pc: 35,
      mk: 72,
      as: 33,
      mc: 84,
      ao: 96,
      ei: 96,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Samuel',
    lastName: 'Conley',
    active: true,
    dob: '1997-07-23',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 6,
      activity: 'HV',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 71
      },
      weight: {
        val: 172
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 81
      },
      cl: {
        val: 90
      },
      gt: {
        val: 57
      },
      el: {
        val: 83
      },
      mm: {
        val: 94
      },
      qt: {
        val: 127
      },
      ve: {
        val: 42
      },
      dlab: {
        val: 31
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 200
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'tammieconley@outlook.com',
      phone: '(703) 742 7650',
      mobile: '(703) 625 1946',
      address: {street: '5522 Kathleen Court', city: 'Gibsonia', state: 'MD', zip: '20262', country: 'United States'},
      hor: {street: '5640 Meserole Avenue', city: 'Cazadero', state: 'VA', zip: '20895', country: 'United States'},
      ssn: '2116',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'Muslim',
      education: 'MA',
      language: 'Spanish',
      licenseNum: 'MD26625140',
      birthPlace: 'Saticoy, VA\nUnited States'
    },
    exams: {
      afqt: 53,
      gs: 55,
      ar: 62,
      wk: 38,
      pc: 41,
      mk: 89,
      as: 91,
      mc: 31,
      ao: 97,
      ei: 68,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Wendy',
    lastName: 'Waters',
    active: true,
    dob: '1995-01-03',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 2,
      activity: 'HV',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 69
      },
      weight: {
        val: 142
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 52
      },
      cl: {
        val: 130
      },
      gt: {
        val: 121
      },
      el: {
        val: 140
      },
      mm: {
        val: 114
      },
      qt: {
        val: 96
      },
      ve: {
        val: 46
      },
      dlab: {
        val: 110
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 270
        },
        acuity1: {
          val: 70
        },
        acuity2: {
          val: 200
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'wendywaters@outlook.com',
      phone: '(703) 544 6290',
      mobile: '(703) 247 6818',
      address: {street: '16415 Ocean Court', city: 'Trexlertown', state: 'VA', zip: '20492', country: 'United States'},
      hor: {street: '17690 Louisa Street', city: 'Turah', state: 'MD', zip: '21717', country: 'United States'},
      ssn: '4961',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'Protestant',
      education: 'GED',
      language: '',
      licenseNum: 'MD344799982',
      birthPlace: 'Richmond, MD\nUnited States'
    },
    exams: {
      afqt: 50,
      gs: 52,
      ar: 63,
      wk: 44,
      pc: 55,
      mk: 32,
      as: 44,
      mc: 40,
      ao: 68,
      ei: 42,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Tillman',
    lastName: 'Santos',
    active: true,
    dob: '1995-12-23',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 8,
      activity: 'OT',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 73
      },
      weight: {
        val: 225
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 96
      },
      cl: {
        val: 100
      },
      gt: {
        val: 76
      },
      el: {
        val: 58
      },
      mm: {
        val: 73
      },
      qt: {
        val: 87
      },
      ve: {
        val: 85
      },
      dlab: {
        val: 127
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'tillmansantos@outlook.com',
      phone: '(703) 737 7376',
      mobile: '(703) 287 6402',
      address: {street: '9858 Junius Street', city: 'Sanders', state: 'MD', zip: '20105', country: 'United States'},
      hor: {street: '20933 Dictum Court', city: 'Valle', state: 'MD', zip: '21278', country: 'United States'},
      ssn: '2397',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Jewish',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'MD683110956',
      birthPlace: 'Highland, VA\nUnited States'
    },
    exams: {
      afqt: 54,
      gs: 95,
      ar: 56,
      wk: 86,
      pc: 30,
      mk: 74,
      as: 96,
      mc: 31,
      ao: 73,
      ei: 68,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Arturo',
    lastName: 'Mendoza',
    active: true,
    dob: '1998-05-01',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 0,
      activity: 'TC',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 68
      },
      weight: {
        val: 172
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 94
      },
      cl: {
        val: 118
      },
      gt: {
        val: 130
      },
      el: {
        val: 125
      },
      mm: {
        val: 120
      },
      qt: {
        val: 115
      },
      ve: {
        val: 106
      },
      dlab: {
        val: 151
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'mendozaarturo@outlook.com',
      phone: '(703) 528 3067',
      mobile: '(703) 487 8769',
      address: {street: '9159 Joval Court', city: 'Chical', state: 'MD', zip: '20753', country: 'United States'},
      hor: {street: '15633 Hornell Loop', city: 'Valmy', state: 'MD', zip: '21804', country: 'United States'},
      ssn: '2818',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'N/A',
      education: 'BS',
      language: '',
      licenseNum: 'MD851933627',
      birthPlace: 'Manchester, MD\nUnited States'
    },
    exams: {
      afqt: 94,
      gs: 93,
      ar: 85,
      wk: 91,
      pc: 94,
      mk: 98,
      as: 98,
      mc: 92,
      ao: 81,
      ei: 95,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Hensley',
    lastName: 'May',
    active: true,
    dob: '1994-01-18',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 0,
      activity: 'OT',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 71
      },
      weight: {
        val: 217
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 48
      },
      cl: {
        val: 135
      },
      gt: {
        val: 74
      },
      el: {
        val: 113
      },
      mm: {
        val: 101
      },
      qt: {
        val: 119
      },
      ve: {
        val: 93
      },
      dlab: {
        val: 144
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 2
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 100
        },
        acuity1: {
          val: 60
        },
        acuity2: {
          val: 25
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'hensleymay@outlook.com',
      phone: '(703) 613 4892',
      mobile: '(703) 210 3799',
      address: {street: '5889 Pilling Street', city: 'Frystown', state: 'MD', zip: '20086', country: 'United States'},
      hor: {street: '22583 Bergen Place', city: 'Marysville', state: 'VA', zip: '21507', country: 'United States'},
      ssn: '6929',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Jewish',
      education: 'MA',
      language: 'Akan',
      licenseNum: 'VA676811072',
      birthPlace: 'Murillo, MD\nUnited States'
    },
    exams: {
      afqt: 68,
      gs: 48,
      ar: 45,
      wk: 46,
      pc: 63,
      mk: 96,
      as: 96,
      mc: 76,
      ao: 37,
      ei: 55,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Adrian',
    lastName: 'Potter',
    active: true,
    dob: '2000-03-20',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 9,
      activity: 'OT',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 70
      },
      weight: {
        val: 157
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 70
      },
      cl: {
        val: 84
      },
      gt: {
        val: 129
      },
      el: {
        val: 86
      },
      mm: {
        val: 113
      },
      qt: {
        val: 108
      },
      ve: {
        val: 74
      },
      dlab: {
        val: 43
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 2
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 8
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'ebonypotter@outlook.com',
      phone: '(703) 531 8414',
      mobile: '(703) 680 6743',
      address: {street: '825 Orient Avenue', city: 'Neahkahnie', state: 'MD', zip: '20922', country: 'United States'},
      hor: {street: '5394 Exeter Street', city: 'Lydia', state: 'VA', zip: '20783', country: 'United States'},
      ssn: '1072',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Married',
      dependents: 1,
      race: 'Black',
      religion: 'N/A',
      education: 'HS',
      language: '',
      licenseNum: 'VA416254736',
      birthPlace: 'Holtville, MD\nUnited States'
    },
    exams: {
      afqt: 59,
      gs: 57,
      ar: 70,
      wk: 48,
      pc: 84,
      mk: 70,
      as: 79,
      mc: 51,
      ao: 67,
      ei: 77,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Benson',
    lastName: 'Holcomb',
    active: true,
    dob: '1999-01-10',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 2,
      activity: 'TC',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 66
      },
      weight: {
        val: 189
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 51
      },
      cl: {
        val: 95
      },
      gt: {
        val: 136
      },
      el: {
        val: 129
      },
      mm: {
        val: 121
      },
      qt: {
        val: 76
      },
      ve: {
        val: 64
      },
      dlab: {
        val: 127
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 3
        },
        violations: {
          val: 4
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 25
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 25
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'buckleyholcomb@outlook.com',
      phone: '(703) 738 5692',
      mobile: '(703) 434 1307',
      address: {street: '3455 Devoe Street', city: 'Jessie', state: 'VA', zip: '20492', country: 'United States'},
      hor: {street: '13903 Lake Street', city: 'Sehili', state: 'VA', zip: '21835', country: 'United States'},
      ssn: '9818',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Muslim',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'VA391282342',
      birthPlace: 'Whipholt, MD\nUnited States'
    },
    exams: {
      afqt: 72,
      gs: 44,
      ar: 66,
      wk: 55,
      pc: 40,
      mk: 83,
      as: 38,
      mc: 72,
      ao: 53,
      ei: 45,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Romero',
    lastName: 'Baldwin',
    active: true,
    dob: '1996-02-19',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 8,
      activity: 'TC',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 71
      },
      weight: {
        val: 139
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 69
      },
      cl: {
        val: 136
      },
      gt: {
        val: 124
      },
      el: {
        val: 54
      },
      mm: {
        val: 92
      },
      qt: {
        val: 76
      },
      ve: {
        val: 110
      },
      dlab: {
        val: 93
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 2
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 13
        },
        acuity: {
          val: 60
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'romerobaldwin@outlook.com',
      phone: '(703) 251 5360',
      mobile: '(703) 731 8925',
      address: {street: '15181 Crescent Street', city: 'Newry', state: 'VA', zip: '20860', country: 'United States'},
      hor: {street: '13541 Montague Street', city: 'Kingstowne', state: 'MD', zip: '21717', country: 'United States'},
      ssn: '4761',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'N/A',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'MD902692071',
      birthPlace: 'Sims, VA\nUnited States'
    },
    exams: {
      afqt: 65,
      gs: 37,
      ar: 77,
      wk: 44,
      pc: 67,
      mk: 63,
      as: 70,
      mc: 54,
      ao: 82,
      ei: 90,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Patrick',
    lastName: 'Nelson',
    active: true,
    dob: '1994-01-26',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 10,
      activity: 'HV',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 70
      },
      weight: {
        val: 175
      },
      toe: {
        val: 3
      },
      afqt: {
        val: 40
      },
      cl: {
        val: 109
      },
      gt: {
        val: 106
      },
      el: {
        val: 70
      },
      mm: {
        val: 128
      },
      qt: {
        val: 71
      },
      ve: {
        val: 101
      },
      dlab: {
        val: 93
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 5
        },
        acuity: {
          val: 100
        },
        acuity1: {
          val: 60
        },
        acuity2: {
          val: 50
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 2
      }
    },
    personal: {
      email: 'patricknelson@outlook.com',
      phone: '(703) 501 8087',
      mobile: '(703) 600 5200',
      address: {street: '7592 Beach Place', city: 'Interlochen', state: 'MD', zip: '20360', country: 'United States'},
      hor: {street: '17398 Madison Street', city: 'Derwood', state: 'MD', zip: '21135', country: 'United States'},
      ssn: '4921',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Catholic',
      education: 'HS',
      language: '',
      licenseNum: 'VA90304607',
      birthPlace: 'Ticonderoga, VA\nUnited States'
    },
    exams: {
      afqt: 74,
      gs: 66,
      ar: 63,
      wk: 89,
      pc: 45,
      mk: 70,
      as: 64,
      mc: 79,
      ao: 62,
      ei: 47,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Chase',
    lastName: 'Rodriquez',
    active: true,
    dob: '1996-07-15',
    status: 'Contract/Poolee',
        dutyType: {id: 2, desc: 'DMV'},
    notif: {
      daysuntil: 9,
      activity: 'EM',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 73
      },
      weight: {
        val: 148
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 43
      },
      cl: {
        val: 106
      },
      gt: {
        val: 125
      },
      el: {
        val: 99
      },
      mm: {
        val: 87
      },
      qt: {
        val: 122
      },
      ve: {
        val: 67
      },
      dlab: {
        val: 133
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 4
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 2
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 11
        },
        acuity: {
          val: 100
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'chaserodriquez@outlook.com',
      phone: '(703) 532 4322',
      mobile: '(703) 137 2175',
      address: {street: '12222 Hendrix Street', city: 'Calpine', state: 'MD', zip: '20975', country: 'United States'},
      hor: {street: '4661 Melrose Street', city: 'Oceola', state: 'VA', zip: '20483', country: 'United States'},
      ssn: '9937',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'N/A',
      education: 'GED',
      language: '',
      licenseNum: 'VA261334633',
      birthPlace: 'Vowinckel, MD\nUnited States'
    },
    exams: {
      afqt: 81,
      gs: 70,
      ar: 39,
      wk: 45,
      pc: 51,
      mk: 40,
      as: 47,
      mc: 99,
      ao: 40,
      ei: 93,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Leo',
    lastName: 'Harrison',
    active: true,
    dob: '1994-07-28',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 4,
      activity: 'HV',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 0
      },
      height: {
        val: 64
      },
      weight: {
        val: 195
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 50
      },
      cl: {
        val: 92
      },
      gt: {
        val: 130
      },
      el: {
        val: 130
      },
      mm: {
        val: 84
      },
      qt: {
        val: 63
      },
      ve: {
        val: 77
      },
      dlab: {
        val: 44
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 2
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 11
        },
        acuity: {
          val: 50
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'janeharrison@outlook.com',
      phone: '(703) 517 5948',
      mobile: '(703) 249 2685',
      address: {street: '5988 Aitken Place', city: 'Conway', state: 'VA', zip: '20192', country: 'United States'},
      hor: {street: '13771 Haring Street', city: 'Beaulieu', state: 'VA', zip: '20920', country: 'United States'},
      ssn: '4468',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Pacific Islander',
      religion: 'Muslim',
      education: 'HS',
      language: '',
      licenseNum: 'VA251390439',
      birthPlace: 'Condon, VA\nUnited States'
    },
    exams: {
      afqt: 79,
      gs: 41,
      ar: 77,
      wk: 41,
      pc: 51,
      mk: 55,
      as: 73,
      mc: 94,
      ao: 80,
      ei: 36,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Lynne',
    lastName: 'Peck',
    active: true,
    dob: '1998-09-09',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 10,
      activity: 'EM',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 70
      },
      weight: {
        val: 193
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 70
      },
      cl: {
        val: 89
      },
      gt: {
        val: 126
      },
      el: {
        val: 101
      },
      mm: {
        val: 128
      },
      qt: {
        val: 125
      },
      ve: {
        val: 105
      },
      dlab: {
        val: 31
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 14
        },
        acuity: {
          val: 200
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 25
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'lynnepeck@outlook.com',
      phone: '(703) 796 8814',
      mobile: '(703) 120 4467',
      address: {street: '4928 Temple Court', city: 'Dola', state: 'MD', zip: '20568', country: 'United States'},
      hor: {street: '17753 Powell Street', city: 'Brogan', state: 'VA', zip: '21445', country: 'United States'},
      ssn: '2645',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'Black',
      religion: 'Buddhist',
      education: 'MA',
      language: 'Arabic',
      licenseNum: 'VA380255686',
      birthPlace: 'Bordelonville, MD\nUnited States'
    },
    exams: {
      afqt: 92,
      gs: 82,
      ar: 92,
      wk: 98,
      pc: 93,
      mk: 35,
      as: 97,
      mc: 95,
      ao: 30,
      ei: 55,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Mercer',
    lastName: 'Diallo',
    active: true,
    dob: '1994-08-10',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 5,
      activity: 'OT',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 72
      },
      weight: {
        val: 168
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 93
      },
      cl: {
        val: 147
      },
      gt: {
        val: 80
      },
      el: {
        val: 130
      },
      mm: {
        val: 70
      },
      qt: {
        val: 131
      },
      ve: {
        val: 107
      },
      dlab: {
        val: 60
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 4
        }
      },
      moral: {
        conduct: {
          val: 4
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 13
        },
        acuity: {
          val: 40
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 200
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'mercerdiallo@outlook.com',
      phone: '(703) 329 6469',
      mobile: '(703) 761 9797',
      address: {street: '1599 Willmohr Street', city: 'Boonville', state: 'VA', zip: '20241', country: 'United States'},
      hor: {street: '18023 Kay Court', city: 'Savage', state: 'MD', zip: '21358', country: 'United States'},
      ssn: '5406',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 2,
      race: 'Black',
      religion: 'Buddhist',
      education: 'GED',
      language: 'French',
      licenseNum: 'MD939087589',
      birthPlace: 'Snyderville, VA\nUnited States'
    },
    exams: {
      afqt: 50,
      gs: 57,
      ar: 67,
      wk: 84,
      pc: 87,
      mk: 46,
      as: 96,
      mc: 36,
      ao: 88,
      ei: 48,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Yves',
    lastName: 'Preston',
    active: true,
    dob: '1999-11-11',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 3,
      activity: 'TC',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 64
      },
      weight: {
        val: 165
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 86
      },
      cl: {
        val: 87
      },
      gt: {
        val: 84
      },
      el: {
        val: 103
      },
      mm: {
        val: 121
      },
      qt: {
        val: 51
      },
      ve: {
        val: 94
      },
      dlab: {
        val: 30
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 2
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 12
        },
        acuity: {
          val: 60
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 25
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'mcdowellpreston@outlook.com',
      phone: '(703) 433 9539',
      mobile: '(703) 654 9082',
      address: {street: '9291 Sandford Street', city: 'Garfield', state: 'VA', zip: '20160', country: 'United States'},
      hor: {street: '12779 Eldert Lane', city: 'Shasta', state: 'MD', zip: '21068', country: 'United States'},
      ssn: '2558',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'Catholic',
      education: 'GED',
      language: 'Spanish',
      licenseNum: 'MD753069356',
      birthPlace: 'Norfolk, MD\nUnited States'
    },
    exams: {
      afqt: 56,
      gs: 53,
      ar: 69,
      wk: 50,
      pc: 55,
      mk: 70,
      as: 97,
      mc: 44,
      ao: 51,
      ei: 43,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Audrey',
    lastName: 'Dale',
    active: true,
    dob: '1999-05-25',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 8,
      activity: 'OT',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 0
      },
      height: {
        val: 73
      },
      weight: {
        val: 185
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 98
      },
      cl: {
        val: 122
      },
      gt: {
        val: 59
      },
      el: {
        val: 132
      },
      mm: {
        val: 118
      },
      qt: {
        val: 97
      },
      ve: {
        val: 86
      },
      dlab: {
        val: 153
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 8
        },
        acuity: {
          val: 70
        },
        acuity1: {
          val: 50
        },
        acuity2: {
          val: 20
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'audreydale@outlook.com',
      phone: '(703) 324 8685',
      mobile: '(703) 651 5204',
      address: {street: '6011 Lawrence Street', city: 'Wedgewood', state: 'VA', zip: '20906', country: 'United States'},
      hor: {street: '16130 Maujer Street', city: 'Orick', state: 'VA', zip: '21250', country: 'United States'},
      ssn: '6268',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Married',
      dependents: 0,
      race: 'White',
      religion: 'Muslim',
      education: 'MA',
      language: '',
      licenseNum: 'VA559448035',
      birthPlace: 'Brooktrails, MD\nUnited States'
    },
    exams: {
      afqt: 52,
      gs: 54,
      ar: 99,
      wk: 37,
      pc: 72,
      mk: 65,
      as: 42,
      mc: 30,
      ao: 61,
      ei: 61,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Lorena',
    lastName: 'Love',
    active: true,
    dob: '2000-06-07',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 10,
      activity: 'OT',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 0
      },
      height: {
        val: 64
      },
      weight: {
        val: 165
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 45
      },
      cl: {
        val: 55
      },
      gt: {
        val: 67
      },
      el: {
        val: 137
      },
      mm: {
        val: 87
      },
      qt: {
        val: 97
      },
      ve: {
        val: 50
      },
      dlab: {
        val: 107
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 12
        },
        acuity: {
          val: 30
        },
        acuity1: {
          val: 40
        },
        acuity2: {
          val: 25
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'lorenalove@outlook.com',
      phone: '(703) 379 5945',
      mobile: '(703) 423 7909',
      address: {street: '4300 Chase Court', city: 'Cloverdale', state: 'VA', zip: '20766', country: 'United States'},
      hor: {street: '16982 Wyona Street', city: 'Libertytown', state: 'MD', zip: '20303', country: 'United States'},
      ssn: '5205',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Catholic',
      education: 'HS',
      language: 'French',
      licenseNum: 'MD601076217',
      birthPlace: 'Martinez, MD\nUnited States'
    },
    exams: {
      afqt: 74,
      gs: 49,
      ar: 70,
      wk: 72,
      pc: 91,
      mk: 74,
      as: 54,
      mc: 74,
      ao: 51,
      ei: 36,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Evan',
    lastName: 'McDonald',
    active: true,
    dob: '1994-10-10',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 0,
      activity: 'OT',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 69
      },
      weight: {
        val: 191
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 66
      },
      cl: {
        val: 92
      },
      gt: {
        val: 69
      },
      el: {
        val: 99
      },
      mm: {
        val: 55
      },
      qt: {
        val: 93
      },
      ve: {
        val: 108
      },
      dlab: {
        val: 126
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 2
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: false
        },
        depth: {
          has: false
        },
        color: {
          val: 13
        },
        acuity: {
          val: 200
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 100
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 1
      }
    },
    personal: {
      email: 'gouldmcdonald@outlook.com',
      phone: '(703) 608 3335',
      mobile: '(703) 707 8911',
      address: {street: '5728 Nassau Avenue', city: 'Spokane', state: 'MD', zip: '20813', country: 'United States'},
      hor: {street: '11167 Metrotech Courtr', city: 'Yardville', state: 'VA', zip: '20607', country: 'United States'},
      ssn: '5107',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'N/A',
      education: 'MA',
      language: 'Portuguese',
      licenseNum: 'VA943332586',
      birthPlace: 'Utting, MD\nUnited States'
    },
    exams: {
      afqt: 67,
      gs: 72,
      ar: 76,
      wk: 53,
      pc: 75,
      mk: 38,
      as: 95,
      mc: 61,
      ao: 55,
      ei: 62,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Victor',
    lastName: 'Clements',
    active: true,
    dob: '2000-03-11',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 2,
      activity: 'EM',
      active: true,
      note: 'Semester check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 62
      },
      weight: {
        val: 144
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 83
      },
      cl: {
        val: 68
      },
      gt: {
        val: 80
      },
      el: {
        val: 133
      },
      mm: {
        val: 107
      },
      qt: {
        val: 85
      },
      ve: {
        val: 85
      },
      dlab: {
        val: 53
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 20
        },
        acuity1: {
          val: 70
        },
        acuity2: {
          val: 100
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'eloiseclements@outlook.com',
      phone: '(703) 619 7610',
      mobile: '(703) 717 2080',
      address: {street: '12916 Howard Avenue', city: 'Caberfae', state: 'MD', zip: '20092', country: 'United States'},
      hor: {street: '3547 Danforth Street', city: 'Greer', state: 'VA', zip: '20322', country: 'United States'},
      ssn: '6898',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 2,
      race: 'White',
      religion: 'Muslim',
      education: 'HS',
      language: '',
      licenseNum: 'MD37238989',
      birthPlace: 'Lemoyne, VA\nUnited States'
    },
    exams: {
      afqt: 82,
      gs: 70,
      ar: 65,
      wk: 47,
      pc: 32,
      mk: 98,
      as: 42,
      mc: 49,
      ao: 75,
      ei: 48,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Brady',
    lastName: 'Glass',
    active: true,
    dob: '1997-07-13',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 5,
      activity: 'EM',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 67
      },
      weight: {
        val: 153
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 85
      },
      cl: {
        val: 129
      },
      gt: {
        val: 114
      },
      el: {
        val: 80
      },
      mm: {
        val: 103
      },
      qt: {
        val: 115
      },
      ve: {
        val: 73
      },
      dlab: {
        val: 121
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 70
        },
        acuity1: {
          val: 40
        },
        acuity2: {
          val: 100
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'bradyglass@outlook.com',
      phone: '(703) 776 3276',
      mobile: '(703) 160 6996',
      address: {street: '11777 Terrace Place', city: 'Williston', state: 'MD', zip: '20259', country: 'United States'},
      hor: {street: '21603 Wythe Place', city: 'Nanafalia', state: 'VA', zip: '21604', country: 'United States'},
      ssn: '7562',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 1,
      race: 'Asian',
      religion: 'Jewish',
      education: 'HS',
      language: '',
      licenseNum: 'MD222543180',
      birthPlace: 'Williamson, VA\nUnited States'
    },
    exams: {
      afqt: 86,
      gs: 64,
      ar: 67,
      wk: 81,
      pc: 88,
      mk: 80,
      as: 96,
      mc: 67,
      ao: 88,
      ei: 66,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Mitchell',
    lastName: 'Wall',
    active: true,
    dob: '1999-04-12',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 6,
      activity: 'OT',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 67
      },
      weight: {
        val: 192
      },
      toe: {
        val: 5
      },
      afqt: {
        val: 94
      },
      cl: {
        val: 77
      },
      gt: {
        val: 106
      },
      el: {
        val: 102
      },
      mm: {
        val: 61
      },
      qt: {
        val: 66
      },
      ve: {
        val: 34
      },
      dlab: {
        val: 47
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 2
        },
        marijuana: {
          val: 4
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 12
        },
        acuity: {
          val: 20
        },
        acuity1: {
          val: 70
        },
        acuity2: {
          val: 100
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'ladonnawall@outlook.com',
      phone: '(703) 536 6855',
      mobile: '(703) 253 8163',
      address: {street: '10800 Himrod Street', city: 'Newcastle', state: 'VA', zip: '20827', country: 'United States'},
      hor: {street: '23936 Adler Place', city: 'Virgie', state: 'MD', zip: '20752', country: 'United States'},
      ssn: '7339',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'Buddhist',
      education: 'HS',
      language: '',
      licenseNum: 'MD762640967',
      birthPlace: 'Wyoming, VA\nUnited States'
    },
    exams: {
      afqt: 66,
      gs: 30,
      ar: 90,
      wk: 85,
      pc: 81,
      mk: 66,
      as: 69,
      mc: 80,
      ao: 39,
      ei: 39,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Kyle',
    lastName: 'Hudson',
    active: true,
    dob: '1998-12-19',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 5,
      activity: 'TC',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '979101185', rs: 'ERR',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 68
      },
      weight: {
        val: 176
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 81
      },
      cl: {
        val: 107
      },
      gt: {
        val: 92
      },
      el: {
        val: 93
      },
      mm: {
        val: 61
      },
      qt: {
        val: 53
      },
      ve: {
        val: 62
      },
      dlab: {
        val: 74
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 70
        },
        acuity1: {
          val: 70
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: true
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'russohudson@outlook.com',
      phone: '(703) 231 8009',
      mobile: '(703) 341 3393',
      address: {street: '9101 Reed Street', city: 'Canby', state: 'MD', zip: '20682', country: 'United States'},
      hor: {street: '16060 Gilmore Court', city: 'Camas', state: 'VA', zip: '20866', country: 'United States'},
      ssn: '5998',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'Protestant',
      education: 'HS',
      language: 'Spanish',
      licenseNum: 'MD892193061',
      birthPlace: 'Sexton, VA\nUnited States'
    },
    exams: {
      afqt: 69,
      gs: 70,
      ar: 46,
      wk: 91,
      pc: 66,
      mk: 57,
      as: 59,
      mc: 95,
      ao: 96,
      ei: 49,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Kevin',
    lastName: 'Hawkins',
    active: true,
    dob: '2000-11-05',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 6,
      activity: 'OT',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '198848953', rs: 'Frederick',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 63
      },
      weight: {
        val: 182
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 75
      },
      cl: {
        val: 82
      },
      gt: {
        val: 124
      },
      el: {
        val: 70
      },
      mm: {
        val: 61
      },
      qt: {
        val: 113
      },
      ve: {
        val: 70
      },
      dlab: {
        val: 32
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 11
        },
        acuity: {
          val: 200
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 100
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'dollyhawkins@outlook.com',
      phone: '(703) 346 4496',
      mobile: '(703) 610 9286',
      address: {street: '4623 Maple Street', city: 'Detroit', state: 'VA', zip: '20316', country: 'United States'},
      hor: {street: '13077 Jerome Avenue', city: 'Cassel', state: 'VA', zip: '20566', country: 'United States'},
      ssn: '8402',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'BS',
      language: '',
      licenseNum: 'MD616033993',
      birthPlace: 'Yettem, MD\nUnited States'
    },
    exams: {
      afqt: 54,
      gs: 54,
      ar: 93,
      wk: 94,
      pc: 63,
      mk: 37,
      as: 68,
      mc: 69,
      ao: 50,
      ei: 54,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Brandon',
    lastName: 'Parks',
    active: true,
    dob: '1997-11-06',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 4,
      activity: 'HV',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '172891922', rs: '4MCD',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: false
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 63
      },
      weight: {
        val: 207
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 89
      },
      cl: {
        val: 135
      },
      gt: {
        val: 109
      },
      el: {
        val: 67
      },
      mm: {
        val: 64
      },
      qt: {
        val: 81
      },
      ve: {
        val: 31
      },
      dlab: {
        val: 53
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 1
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 11
        },
        acuity: {
          val: 20
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 100
        }
      },
      speech: {
        has: false
      },
      algebra: {
        has: false
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: true
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 2
      }
    },
    personal: {
      email: 'kaufmanparks@outlook.com',
      phone: '(703) 588 3940',
      mobile: '(703) 638 5756',
      address: {street: '9040 Garden Street', city: 'Gibbsville', state: 'VA', zip: '20704', country: 'United States'},
      hor: {street: '19163 Clarendon Road', city: 'Kilbourne', state: 'MD', zip: '20528', country: 'United States'},
      ssn: '7642',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'N/A',
      education: 'HS',
      language: '',
      licenseNum: 'MD658734028',
      birthPlace: 'Tooleville, MD\nUnited States'
    },
    exams: {
      afqt: 63,
      gs: 92,
      ar: 50,
      wk: 39,
      pc: 42,
      mk: 75,
      as: 62,
      mc: 91,
      ao: 64,
      ei: 52,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Erica',
    lastName: 'Farmer',
    active: true,
    dob: '1999-01-19',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 3,
      activity: 'TC',
      active: true,
      note: 'PRP Screen'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'F'
      },
      clearance: {
        val: 2
      },
      height: {
        val: 64
      },
      weight: {
        val: 182
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 41
      },
      cl: {
        val: 64
      },
      gt: {
        val: 81
      },
      el: {
        val: 97
      },
      mm: {
        val: 115
      },
      qt: {
        val: 114
      },
      ve: {
        val: 88
      },
      dlab: {
        val: 49
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 4
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 13
        },
        acuity: {
          val: 25
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 40
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'fuentesfarmer@outlook.com',
      phone: '(703) 417 6417',
      mobile: '(703) 673 4286',
      address: {street: '14204 Bushwick Avenue', city: 'Baden', state: 'MD', zip: '20925', country: 'United States'},
      hor: {street: '347 Newkirk Placez', city: 'Darlington', state: 'VA', zip: '20083', country: 'United States'},
      ssn: '8545',
      citz: 'Native Born',
      ethnicity: 'Not Hispanic or Latino',
      marital: 'Single',
      dependents: 1,
      race: 'White',
      religion: 'N/A',
      education: 'GED',
      language: 'Spanish',
      licenseNum: 'MD905766110',
      birthPlace: 'Waikele, MD\nUnited States'
    },
    exams: {
      afqt: 75,
      gs: 49,
      ar: 68,
      wk: 37,
      pc: 42,
      mk: 84,
      as: 73,
      mc: 68,
      ao: 98,
      ei: 95,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Miguel',
    lastName: 'Ruiz',
    active: true,
    dob: '2000-08-05',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 7,
      activity: 'TC',
      active: true,
      note: 'Monthly check-in'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: false
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 73
      },
      weight: {
        val: 210
      },
      toe: {
        val: 6
      },
      afqt: {
        val: 60
      },
      cl: {
        val: 136
      },
      gt: {
        val: 126
      },
      el: {
        val: 82
      },
      mm: {
        val: 61
      },
      qt: {
        val: 76
      },
      ve: {
        val: 102
      },
      dlab: {
        val: 86
      },
      driving: {
        license: {
          has: false
        },
        offenses: {
          val: 1
        },
        violations: {
          val: 0
        }
      },
      moral: {
        conduct: {
          val: 1
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: false
        },
        color: {
          val: 11
        },
        acuity: {
          val: 100
        },
        acuity1: {
          val: 20
        },
        acuity2: {
          val: 30
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 1
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: true
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'miguelruiz@outlook.com',
      phone: '(703) 465 9162',
      mobile: '(703) 346 8349',
      address: {street: '14564 Rodney Street', city: 'Clarence', state: 'VA', zip: '20543', country: 'United States'},
      hor: {street: '17398 Voorhies Avenue', city: 'Brandywine', state: 'MD', zip: '20892', country: 'United States'},
      ssn: '9081',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'Black',
      religion: 'Buddhist',
      education: 'HS',
      language: 'French',
      licenseNum: 'VA282139780',
      birthPlace: 'Alderpoint, VA\nUnited States'
    },
    exams: {
      afqt: 72,
      gs: 86,
      ar: 79,
      wk: 44,
      pc: 40,
      mk: 91,
      as: 77,
      mc: 81,
      ao: 88,
      ei: 62,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Guy',
    lastName: 'Clay',
    active: true,
    dob: '1995-01-23',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 7,
      activity: 'TC',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 65
      },
      weight: {
        val: 198
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 65
      },
      cl: {
        val: 119
      },
      gt: {
        val: 102
      },
      el: {
        val: 112
      },
      mm: {
        val: 118
      },
      qt: {
        val: 92
      },
      ve: {
        val: 31
      },
      dlab: {
        val: 64
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 4
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 0
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
          has: true
        },
        color: {
          val: 14
        },
        acuity: {
          val: 200
        },
        acuity1: {
          val: 30
        },
        acuity2: {
          val: 70
        }
      },
      speech: {
        has: true
      },
      algebra: {
        has: true
      },
      tierGrad: {
        val: 2
      },
      flightPhysical: {
        has: false
      },
      pftClass1: {
        has: false
      },
      waterQual: {
        has: false
      },
      prpScreen: {
        val: 0
      }
    },
    personal: {
      email: 'ratliffclay@outlook.com',
      phone: '(703) 202 6132',
      mobile: '(703) 304 3070',
      address: {street: '12562 Poplar Street', city: 'Frank', state: 'VA', zip: '20650', country: 'United States'},
      hor: {street: '10965 Hastings Street', city: 'Berwind', state: 'MD', zip: '20643', country: 'United States'},
      ssn: '3733',
      citz: 'Native Born',
      ethnicity: 'Hispanic or Latino',
      marital: 'Single',
      dependents: 0,
      race: 'White',
      religion: 'Protestant',
      education: 'GED',
      language: 'Portuguese',
      licenseNum: 'VA574453413',
      birthPlace: 'Salvo, MD\nUnited States'
    },
    exams: {
      afqt: 83,
      gs: 99,
      ar: 98,
      wk: 69,
      pc: 49,
      mk: 89,
      as: 89,
      mc: 94,
      ao: 63,
      ei: 51,
      es: 12,
      dep: '',
      activeDutyDateProjected: '',
      stnId: 632,
      pef: '',
      teMosAfs: 14156,
      waiver: '',
      payGrade: 'E-2',
      svcAnnexCode: 'N/A',
      mso: 'N/A',
      adObligation: 'N/A'
    }
  },
  {
    firstName: 'Mason',
    lastName: 'Romero',
    active: true,
    dob: '2000-01-05',
    status: 'Contract/Poolee',
        dutyType: {id: 1, desc: 'DMR'},
    notif: {
      daysuntil: 2,
      activity: 'TC',
      active: true,
      note: 'Pre-Ship meeting'
    },
    recruiter: {
      recruiterId: '002995102', rs: 'Chantilly',
      fullname: ''
    },
    match: {
      usCitizen: {
        has: true
      },
      usCitizenFamily: {
        has: true
      },
      sex: {
        val: 'M'
      },
      clearance: {
        val: 1
      },
      height: {
        val: 67
      },
      weight: {
        val: 158
      },
      toe: {
        val: 4
      },
      afqt: {
        val: 55
      },
      cl: {
        val: 60
      },
      gt: {
        val: 79
      },
      el: {
        val: 119
      },
      mm: {
        val: 130
      },
      qt: {
        val: 80
      },
      ve: {
        val: 90
      },
      dlab: {
        val: 124
      },
      driving: {
        license: {
          has: true
        },
        offenses: {
          val: 0
        },
        violations: {
          val: 1
        }
      },
      moral: {
        conduct: {
          val: 0
        },
        otherDrugs: {
          val: 0
        },
        marijuana: {
          val: 1
        }
      },
      vision: {
        correctable: {
          has: true
        },
        depth: {
