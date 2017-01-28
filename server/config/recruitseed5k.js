
import Recruit from '../api/recruit/recruit.model';

Recruit.find({}).remove()
  .then(() => {
    Recruit.create(

  {
    firstName: 'Phoebe',
    lastName: 'Navarro',
    'dob': '1998-07-06',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 10,
      'activity': 'EM',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 176
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 99
      },
      'cl': {
        val: 107
      },
      'gt': {
        val: 128
      },
      'el': {
        val: 104
      },
      'mm': {
        val: 124
      },
      'qt': {
        val: 127
      },
      've': {
        val: 94
      },
      'dlab': {
        val: 154
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7553
    }
  },
  {
    firstName: 'Bowman',
    lastName: 'Johnson',
    'dob': '1998-07-19',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 15,
      'activity': 'EM',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 165
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 98
      },
      'cl': {
        val: 136
      },
      'gt': {
        val: 101
      },
      'el': {
        val: 113
      },
      'mm': {
        val: 101
      },
      'qt': {
        val: 95
      },
      've': {
        val: 108
      },
      'dlab': {
        val: 142
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6375
    }
  },
  {
    firstName: 'Lucille',
    lastName: 'Park',
    'dob': '1998-11-09',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 9,
      'activity': 'HV',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 170
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 51
      },
      'cl': {
        val: 134
      },
      'gt': {
        val: 110
      },
      'el': {
        val: 132
      },
      'mm': {
        val: 127
      },
      'qt': {
        val: 129
      },
      've': {
        val: 91
      },
      'dlab': {
        val: 154
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6350
    }
  },
  {
    firstName: 'Hines',
    lastName: 'Armstrong',
    'dob': '1995-12-30',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 13,
      'activity': 'OT',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 163
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 62
      },
      'cl': {
        val: 115
      },
      'gt': {
        val: 141
      },
      'el': {
        val: 114
      },
      'mm': {
        val: 129
      },
      'qt': {
        val: 98
      },
      've': {
        val: 91
      },
      'dlab': {
        val: 160
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8840
    }
  },
  {
    firstName: 'Wall',
    lastName: 'Mcclain',
    'dob': '1999-04-30',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 2,
      'activity': 'HV',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 62
      },
      'weight': {
        val: 149
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 54
      },
      'cl': {
        val: 139
      },
      'gt': {
        val: 132
      },
      'el': {
        val: 102
      },
      'mm': {
        val: 117
      },
      'qt': {
        val: 96
      },
      've': {
        val: 101
      },
      'dlab': {
        val: 115
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3022
    }
  },
  {
    firstName: 'Janis',
    lastName: 'Waller',
    'dob': '2000-12-08',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 1,
      'activity': 'OT',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 173
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 63
      },
      'cl': {
        val: 107
      },
      'gt': {
        val: 117
      },
      'el': {
        val: 117
      },
      'mm': {
        val: 126
      },
      'qt': {
        val: 106
      },
      've': {
        val: 110
      },
      'dlab': {
        val: 146
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2447
    }
  },
  {
    firstName: 'Dillon',
    lastName: 'Burke',
    'dob': '2000-05-17',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 2,
      'activity': 'EM',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 154
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 78
      },
      'cl': {
        val: 118
      },
      'gt': {
        val: 135
      },
      'el': {
        val: 137
      },
      'mm': {
        val: 121
      },
      'qt': {
        val: 119
      },
      've': {
        val: 100
      },
      'dlab': {
        val: 134
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9080
    }
  },
  {
    firstName: 'Hattie',
    lastName: 'Kerr',
    'dob': '1996-12-21',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 18,
      'activity': 'TC',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 67
      },
      'weight': {
        val: 141
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 75
      },
      'cl': {
        val: 106
      },
      'gt': {
        val: 139
      },
      'el': {
        val: 140
      },
      'mm': {
        val: 99
      },
      'qt': {
        val: 124
      },
      've': {
        val: 90
      },
      'dlab': {
        val: 142
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8005
    }
  },
  {
    firstName: 'Pruitt',
    lastName: 'Lambert',
    'dob': '1996-05-25',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 1,
      'activity': 'EM',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 151
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 86
      },
      'cl': {
        val: 136
      },
      'gt': {
        val: 125
      },
      'el': {
        val: 137
      },
      'mm': {
        val: 96
      },
      'qt': {
        val: 100
      },
      've': {
        val: 90
      },
      'dlab': {
        val: 130
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1316
    }
  },
  {
    firstName: 'Logan',
    lastName: 'Wells',
    'dob': '1997-07-03',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 4,
      'activity': 'TC',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 179
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 45
      },
      'cl': {
        val: 111
      },
      'gt': {
        val: 129
      },
      'el': {
        val: 98
      },
      'mm': {
        val: 107
      },
      'qt': {
        val: 125
      },
      've': {
        val: 95
      },
      'dlab': {
        val: 130
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7828
    }
  },
  {
    firstName: 'Huber',
    lastName: 'Morse',
    'dob': '1994-09-10',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 12,
      'activity': 'TC',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 175
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 45
      },
      'cl': {
        val: 107
      },
      'gt': {
        val: 117
      },
      'el': {
        val: 137
      },
      'mm': {
        val: 105
      },
      'qt': {
        val: 124
      },
      've': {
        val: 97
      },
      'dlab': {
        val: 120
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 3120
    }
  },
  {
    firstName: 'Ayala',
    lastName: 'Joseph',
    'dob': '1999-09-10',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 12,
      'activity': 'TC',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 170
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 72
      },
      'cl': {
        val: 136
      },
      'gt': {
        val: 110
      },
      'el': {
        val: 104
      },
      'mm': {
        val: 128
      },
      'qt': {
        val: 106
      },
      've': {
        val: 99
      },
      'dlab': {
        val: 137
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5472
    }
  },
  {
    firstName: 'Earlene',
    lastName: 'Browning',
    'dob': '2000-11-10',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 16,
      'activity': 'HV',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 75
      },
      'weight': {
        val: 188
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 48
      },
      'cl': {
        val: 122
      },
      'gt': {
        val: 124
      },
      'el': {
        val: 135
      },
      'mm': {
        val: 126
      },
      'qt': {
        val: 97
      },
      've': {
        val: 102
      },
      'dlab': {
        val: 138
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 2715
    }
  },
  {
    firstName: 'Macias',
    lastName: 'Bender',
    'dob': '1994-01-11',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 13,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 63
      },
      'weight': {
        val: 151
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 60
      },
      'cl': {
        val: 113
      },
      'gt': {
        val: 137
      },
      'el': {
        val: 125
      },
      'mm': {
        val: 122
      },
      'qt': {
        val: 110
      },
      've': {
        val: 102
      },
      'dlab': {
        val: 121
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9486
    }
  },
  {
    firstName: 'Goff',
    lastName: 'Quinn',
    'dob': '1994-01-15',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 2,
      'activity': 'HV',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 75
      },
      'weight': {
        val: 183
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 91
      },
      'cl': {
        val: 140
      },
      'gt': {
        val: 127
      },
      'el': {
        val: 113
      },
      'mm': {
        val: 117
      },
      'qt': {
        val: 101
      },
      've': {
        val: 107
      },
      'dlab': {
        val: 139
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7967
    }
  },
  {
    firstName: 'Odom',
    lastName: 'Delaney',
    'dob': '1996-03-08',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 17,
      'activity': 'OT',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 70
      },
      'weight': {
        val: 154
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 43
      },
      'cl': {
        val: 135
      },
      'gt': {
        val: 120
      },
      'el': {
        val: 129
      },
      'mm': {
        val: 100
      },
      'qt': {
        val: 130
      },
      've': {
        val: 103
      },
      'dlab': {
        val: 119
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6331
    }
  },
  {
    firstName: 'Ofelia',
    lastName: 'Burch',
    'dob': '1994-12-29',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 4,
      'activity': 'OT',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 67
      },
      'weight': {
        val: 182
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 61
      },
      'cl': {
        val: 115
      },
      'gt': {
        val: 136
      },
      'el': {
        val: 111
      },
      'mm': {
        val: 104
      },
      'qt': {
        val: 131
      },
      've': {
        val: 108
      },
      'dlab': {
        val: 125
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7274
    }
  },
  {
    firstName: 'Ina',
    lastName: 'Frazier',
    'dob': '1994-10-06',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 17,
      'activity': 'OT',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 140
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 79
      },
      'cl': {
        val: 134
      },
      'gt': {
        val: 129
      },
      'el': {
        val: 106
      },
      'mm': {
        val: 111
      },
      'qt': {
        val: 115
      },
      've': {
        val: 100
      },
      'dlab': {
        val: 158
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4829
    }
  },
  {
    firstName: 'Nell',
    lastName: 'Schmidt',
    'dob': '1997-09-06',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 8,
      'activity': 'EM',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 63
      },
      'weight': {
        val: 183
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 42
      },
      'cl': {
        val: 103
      },
      'gt': {
        val: 130
      },
      'el': {
        val: 139
      },
      'mm': {
        val: 101
      },
      'qt': {
        val: 108
      },
      've': {
        val: 107
      },
      'dlab': {
        val: 157
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6415
    }
  },
  {
    firstName: 'Keller',
    lastName: 'Reilly',
    'dob': '1997-04-28',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 14,
      'activity': 'TC',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 171
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 40
      },
      'cl': {
        val: 106
      },
      'gt': {
        val: 104
      },
      'el': {
        val: 127
      },
      'mm': {
        val: 98
      },
      'qt': {
        val: 101
      },
      've': {
        val: 90
      },
      'dlab': {
        val: 146
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5908
    }
  },
  {
    firstName: 'Potter',
    lastName: 'Carson',
    'dob': '1996-06-30',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 1,
      'activity': 'HV',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 142
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 92
      },
      'cl': {
        val: 142
      },
      'gt': {
        val: 95
      },
      'el': {
        val: 110
      },
      'mm': {
        val: 118
      },
      'qt': {
        val: 115
      },
      've': {
        val: 97
      },
      'dlab': {
        val: 133
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3125
    }
  },
  {
    firstName: 'Owen',
    lastName: 'Trevino',
    'dob': '2000-08-01',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 20,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 65
      },
      'weight': {
        val: 162
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 49
      },
      'cl': {
        val: 151
      },
      'gt': {
        val: 129
      },
      'el': {
        val: 124
      },
      'mm': {
        val: 126
      },
      'qt': {
        val: 124
      },
      've': {
        val: 91
      },
      'dlab': {
        val: 121
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9651
    }
  },
  {
    firstName: 'Crystal',
    lastName: 'Russo',
    'dob': '1997-06-30',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 8,
      'activity': 'EM',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 155
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 40
      },
      'cl': {
        val: 131
      },
      'gt': {
        val: 98
      },
      'el': {
        val: 124
      },
      'mm': {
        val: 123
      },
      'qt': {
        val: 126
      },
      've': {
        val: 99
      },
      'dlab': {
        val: 163
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2051
    }
  },
  {
    firstName: 'Cara',
    lastName: 'Thornton',
    'dob': '1996-02-14',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 8,
      'activity': 'OT',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 65
      },
      'weight': {
        val: 155
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 95
      },
      'cl': {
        val: 110
      },
      'gt': {
        val: 120
      },
      'el': {
        val: 124
      },
      'mm': {
        val: 113
      },
      'qt': {
        val: 131
      },
      've': {
        val: 101
      },
      'dlab': {
        val: 141
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5748
    }
  },
  {
    firstName: 'Barnett',
    lastName: 'Fleming',
    'dob': '1994-01-15',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 19,
      'activity': 'TC',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 160
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 43
      },
      'cl': {
        val: 139
      },
      'gt': {
        val: 111
      },
      'el': {
        val: 116
      },
      'mm': {
        val: 104
      },
      'qt': {
        val: 121
      },
      've': {
        val: 97
      },
      'dlab': {
        val: 147
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: false
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7775
    }
  },
  {
    firstName: 'Haley',
    lastName: 'Rodriquez',
    'dob': '1997-01-23',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 2,
      'activity': 'EM',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 67
      },
      'weight': {
        val: 164
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 83
      },
      'cl': {
        val: 128
      },
      'gt': {
        val: 107
      },
      'el': {
        val: 101
      },
      'mm': {
        val: 111
      },
      'qt': {
        val: 119
      },
      've': {
        val: 90
      },
      'dlab': {
        val: 128
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9404
    }
  },
  {
    firstName: 'Velazquez',
    lastName: 'Tucker',
    'dob': '1997-09-04',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 13,
      'activity': 'HV',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 183
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 96
      },
      'cl': {
        val: 118
      },
      'gt': {
        val: 101
      },
      'el': {
        val: 105
      },
      'mm': {
        val: 105
      },
      'qt': {
        val: 108
      },
      've': {
        val: 105
      },
      'dlab': {
        val: 120
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1751
    }
  },
  {
    firstName: 'Hunt',
    lastName: 'Brock',
    'dob': '1994-04-17',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 6,
      'activity': 'TC',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 75
      },
      'weight': {
        val: 174
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 53
      },
      'cl': {
        val: 144
      },
      'gt': {
        val: 123
      },
      'el': {
        val: 121
      },
      'mm': {
        val: 97
      },
      'qt': {
        val: 98
      },
      've': {
        val: 91
      },
      'dlab': {
        val: 130
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6050
    }
  },
  {
    firstName: 'Galloway',
    lastName: 'Wise',
    'dob': '1998-05-02',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 20,
      'activity': 'EM',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 67
      },
      'weight': {
        val: 172
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 70
      },
      'cl': {
        val: 114
      },
      'gt': {
        val: 95
      },
      'el': {
        val: 115
      },
      'mm': {
        val: 116
      },
      'qt': {
        val: 127
      },
      've': {
        val: 94
      },
      'dlab': {
        val: 123
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9336
    }
  },
  {
    firstName: 'Cameron',
    lastName: 'Rosario',
    'dob': '2000-04-10',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 18,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 62
      },
      'weight': {
        val: 180
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 54
      },
      'cl': {
        val: 136
      },
      'gt': {
        val: 108
      },
      'el': {
        val: 129
      },
      'mm': {
        val: 95
      },
      'qt': {
        val: 97
      },
      've': {
        val: 91
      },
      'dlab': {
        val: 116
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7283
    }
  },
  {
    firstName: 'Bernard',
    lastName: 'Ingram',
    'dob': '1999-02-17',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 2,
      'activity': 'EM',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 148
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 98
      },
      'cl': {
        val: 133
      },
      'gt': {
        val: 102
      },
      'el': {
        val: 135
      },
      'mm': {
        val: 117
      },
      'qt': {
        val: 114
      },
      've': {
        val: 93
      },
      'dlab': {
        val: 144
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1934
    }
  },
  {
    firstName: 'Rosanna',
    lastName: 'Shields',
    'dob': '1997-12-02',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 7,
      'activity': 'TC',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 74
      },
      'weight': {
        val: 176
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 39
      },
      'cl': {
        val: 109
      },
      'gt': {
        val: 114
      },
      'el': {
        val: 136
      },
      'mm': {
        val: 126
      },
      'qt': {
        val: 112
      },
      've': {
        val: 97
      },
      'dlab': {
        val: 119
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3602
    }
  },
  {
    firstName: 'Nolan',
    lastName: 'Barrera',
    'dob': '1999-05-29',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 6,
      'activity': 'TC',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 67
      },
      'weight': {
        val: 156
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 94
      },
      'cl': {
        val: 144
      },
      'gt': {
        val: 101
      },
      'el': {
        val: 103
      },
      'mm': {
        val: 128
      },
      'qt': {
        val: 130
      },
      've': {
        val: 100
      },
      'dlab': {
        val: 125
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4582
    }
  },
  {
    firstName: 'Terrie',
    lastName: 'Kennedy',
    'dob': '1994-07-12',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 3,
      'activity': 'TC',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 67
      },
      'weight': {
        val: 178
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 58
      },
      'cl': {
        val: 104
      },
      'gt': {
        val: 114
      },
      'el': {
        val: 109
      },
      'mm': {
        val: 102
      },
      'qt': {
        val: 117
      },
      've': {
        val: 109
      },
      'dlab': {
        val: 117
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3794
    }
  },
  {
    firstName: 'Christine',
    lastName: 'Nichols',
    'dob': '1997-01-23',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 6,
      'activity': 'OT',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 154
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 63
      },
      'cl': {
        val: 106
      },
      'gt': {
        val: 113
      },
      'el': {
        val: 95
      },
      'mm': {
        val: 123
      },
      'qt': {
        val: 116
      },
      've': {
        val: 96
      },
      'dlab': {
        val: 124
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4492
    }
  },
  {
    firstName: 'Gilda',
    lastName: 'Cline',
    'dob': '1994-10-16',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 9,
      'activity': 'TC',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 75
      },
      'weight': {
        val: 171
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 60
      },
      'cl': {
        val: 120
      },
      'gt': {
        val: 101
      },
      'el': {
        val: 127
      },
      'mm': {
        val: 111
      },
      'qt': {
        val: 124
      },
      've': {
        val: 100
      },
      'dlab': {
        val: 142
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 9043
    }
  },
  {
    firstName: 'Faye',
    lastName: 'Steele',
    'dob': '1999-05-26',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 11,
      'activity': 'EM',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 182
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 52
      },
      'cl': {
        val: 150
      },
      'gt': {
        val: 107
      },
      'el': {
        val: 134
      },
      'mm': {
        val: 107
      },
      'qt': {
        val: 105
      },
      've': {
        val: 99
      },
      'dlab': {
        val: 157
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3247
    }
  },
  {
    firstName: 'Carolyn',
    lastName: 'Medina',
    'dob': '1999-02-02',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 14,
      'activity': 'HV',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 62
      },
      'weight': {
        val: 157
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 79
      },
      'cl': {
        val: 115
      },
      'gt': {
        val: 98
      },
      'el': {
        val: 120
      },
      'mm': {
        val: 115
      },
      'qt': {
        val: 124
      },
      've': {
        val: 94
      },
      'dlab': {
        val: 149
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 8997
    }
  },
  {
    firstName: 'Grace',
    lastName: 'Stephens',
    'dob': '1999-12-09',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 6,
      'activity': 'TC',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 63
      },
      'weight': {
        val: 151
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 78
      },
      'cl': {
        val: 117
      },
      'gt': {
        val: 135
      },
      'el': {
        val: 132
      },
      'mm': {
        val: 109
      },
      'qt': {
        val: 95
      },
      've': {
        val: 96
      },
      'dlab': {
        val: 147
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6063
    }
  },
  {
    firstName: 'Nina',
    lastName: 'Bean',
    'dob': '1996-10-31',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 2,
      'activity': 'OT',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 154
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 49
      },
      'cl': {
        val: 148
      },
      'gt': {
        val: 110
      },
      'el': {
        val: 115
      },
      'mm': {
        val: 113
      },
      'qt': {
        val: 102
      },
      've': {
        val: 100
      },
      'dlab': {
        val: 150
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2016
    }
  },
  {
    firstName: 'Corine',
    lastName: 'Justice',
    'dob': '1995-07-05',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 10,
      'activity': 'HV',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 160
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 47
      },
      'cl': {
        val: 100
      },
      'gt': {
        val: 125
      },
      'el': {
        val: 134
      },
      'mm': {
        val: 119
      },
      'qt': {
        val: 120
      },
      've': {
        val: 96
      },
      'dlab': {
        val: 117
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5652
    }
  },
  {
    firstName: 'Shepherd',
    lastName: 'Pena',
    'dob': '1998-07-29',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 11,
      'activity': 'EM',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 187
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 46
      },
      'cl': {
        val: 135
      },
      'gt': {
        val: 97
      },
      'el': {
        val: 129
      },
      'mm': {
        val: 124
      },
      'qt': {
        val: 104
      },
      've': {
        val: 95
      },
      'dlab': {
        val: 132
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9682
    }
  },
  {
    firstName: 'Lang',
    lastName: 'Becker',
    'dob': '1995-10-13',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 20,
      'activity': 'TC',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 74
      },
      'weight': {
        val: 183
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 56
      },
      'cl': {
        val: 108
      },
      'gt': {
        val: 101
      },
      'el': {
        val: 125
      },
      'mm': {
        val: 96
      },
      'qt': {
        val: 100
      },
      've': {
        val: 102
      },
      'dlab': {
        val: 136
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: false
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3839
    }
  },
  {
    firstName: 'Melva',
    lastName: 'Hurley',
    'dob': '1996-10-08',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 17,
      'activity': 'EM',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 74
      },
      'weight': {
        val: 142
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 77
      },
      'cl': {
        val: 145
      },
      'gt': {
        val: 126
      },
      'el': {
        val: 110
      },
      'mm': {
        val: 112
      },
      'qt': {
        val: 123
      },
      've': {
        val: 93
      },
      'dlab': {
        val: 138
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7575
    }
  },
  {
    firstName: 'Harris',
    lastName: 'Herring',
    'dob': '1995-04-21',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 1,
      'activity': 'HV',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 187
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 56
      },
      'cl': {
        val: 131
      },
      'gt': {
        val: 129
      },
      'el': {
        val: 138
      },
      'mm': {
        val: 114
      },
      'qt': {
        val: 95
      },
      've': {
        val: 91
      },
      'dlab': {
        val: 152
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2730
    }
  },
  {
    firstName: 'Shelly',
    lastName: 'Pugh',
    'dob': '1994-12-30',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 11,
      'activity': 'OT',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 166
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 46
      },
      'cl': {
        val: 123
      },
      'gt': {
        val: 105
      },
      'el': {
        val: 137
      },
      'mm': {
        val: 104
      },
      'qt': {
        val: 127
      },
      've': {
        val: 106
      },
      'dlab': {
        val: 155
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: false
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5556
    }
  },
  {
    firstName: 'Sykes',
    lastName: 'Phelps',
    'dob': '2000-04-12',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 18,
      'activity': 'EM',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 141
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 59
      },
      'cl': {
        val: 108
      },
      'gt': {
        val: 110
      },
      'el': {
        val: 120
      },
      'mm': {
        val: 104
      },
      'qt': {
        val: 103
      },
      've': {
        val: 109
      },
      'dlab': {
        val: 129
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5390
    }
  },
  {
    firstName: 'Rene',
    lastName: 'Parrish',
    'dob': '1998-11-11',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 20,
      'activity': 'HV',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 70
      },
      'weight': {
        val: 182
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 57
      },
      'cl': {
        val: 145
      },
      'gt': {
        val: 139
      },
      'el': {
        val: 119
      },
      'mm': {
        val: 103
      },
      'qt': {
        val: 117
      },
      've': {
        val: 100
      },
      'dlab': {
        val: 157
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5209
    }
  },
  {
    firstName: 'Mosley',
    lastName: 'Whitley',
    'dob': '1994-08-09',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 13,
      'activity': 'EM',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 67
      },
      'weight': {
        val: 142
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 69
      },
      'cl': {
        val: 127
      },
      'gt': {
        val: 119
      },
      'el': {
        val: 113
      },
      'mm': {
        val: 119
      },
      'qt': {
        val: 119
      },
      've': {
        val: 101
      },
      'dlab': {
        val: 144
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3855
    }
  },
  {
    firstName: 'Garcia',
    lastName: 'Lott',
    'dob': '1999-03-26',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 12,
      'activity': 'HV',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 67
      },
      'weight': {
        val: 185
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 84
      },
      'cl': {
        val: 148
      },
      'gt': {
        val: 129
      },
      'el': {
        val: 140
      },
      'mm': {
        val: 117
      },
      'qt': {
        val: 107
      },
      've': {
        val: 109
      },
      'dlab': {
        val: 153
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5168
    }
  },
  {
    firstName: 'Rita',
    lastName: 'Moss',
    'dob': '1997-06-11',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 0,
      'activity': 'OT',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 70
      },
      'weight': {
        val: 149
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 93
      },
      'cl': {
        val: 100
      },
      'gt': {
        val: 105
      },
      'el': {
        val: 95
      },
      'mm': {
        val: 107
      },
      'qt': {
        val: 119
      },
      've': {
        val: 101
      },
      'dlab': {
        val: 136
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5066
    }
  },
  {
    firstName: 'Ortiz',
    lastName: 'Glover',
    'dob': '1994-05-14',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 12,
      'activity': 'OT',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 186
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 70
      },
      'cl': {
        val: 109
      },
      'gt': {
        val: 103
      },
      'el': {
        val: 136
      },
      'mm': {
        val: 97
      },
      'qt': {
        val: 111
      },
      've': {
        val: 109
      },
      'dlab': {
        val: 162
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4210
    }
  },
  {
    firstName: 'Salazar',
    lastName: 'Ferguson',
    'dob': '1995-04-24',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 3,
      'activity': 'OT',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 62
      },
      'weight': {
        val: 151
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 73
      },
      'cl': {
        val: 135
      },
      'gt': {
        val: 124
      },
      'el': {
        val: 140
      },
      'mm': {
        val: 119
      },
      'qt': {
        val: 123
      },
      've': {
        val: 107
      },
      'dlab': {
        val: 142
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5754
    }
  },
  {
    firstName: 'Robertson',
    lastName: 'Gallagher',
    'dob': '1994-03-28',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 10,
      'activity': 'TC',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 137
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 88
      },
      'cl': {
        val: 111
      },
      'gt': {
        val: 135
      },
      'el': {
        val: 137
      },
      'mm': {
        val: 99
      },
      'qt': {
        val: 122
      },
      've': {
        val: 92
      },
      'dlab': {
        val: 123
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8993
    }
  },
  {
    firstName: 'Leola',
    lastName: 'Holman',
    'dob': '2000-09-09',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 19,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 167
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 95
      },
      'cl': {
        val: 121
      },
      'gt': {
        val: 100
      },
      'el': {
        val: 114
      },
      'mm': {
        val: 105
      },
      'qt': {
        val: 118
      },
      've': {
        val: 103
      },
      'dlab': {
        val: 154
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8062
    }
  },
  {
    firstName: 'Randolph',
    lastName: 'Coleman',
    'dob': '1995-11-24',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 8,
      'activity': 'EM',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 168
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 95
      },
      'cl': {
        val: 148
      },
      'gt': {
        val: 124
      },
      'el': {
        val: 115
      },
      'mm': {
        val: 120
      },
      'qt': {
        val: 128
      },
      've': {
        val: 100
      },
      'dlab': {
        val: 120
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9059
    }
  },
  {
    firstName: 'Rosemary',
    lastName: 'Stanley',
    'dob': '1994-10-12',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 20,
      'activity': 'EM',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 64
      },
      'weight': {
        val: 182
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 96
      },
      'cl': {
        val: 138
      },
      'gt': {
        val: 113
      },
      'el': {
        val: 133
      },
      'mm': {
        val: 119
      },
      'qt': {
        val: 102
      },
      've': {
        val: 94
      },
      'dlab': {
        val: 148
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9890
    }
  },
  {
    firstName: 'Figueroa',
    lastName: 'Sargent',
    'dob': '1998-03-29',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 18,
      'activity': 'HV',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 62
      },
      'weight': {
        val: 178
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 66
      },
      'cl': {
        val: 136
      },
      'gt': {
        val: 140
      },
      'el': {
        val: 107
      },
      'mm': {
        val: 111
      },
      'qt': {
        val: 122
      },
      've': {
        val: 101
      },
      'dlab': {
        val: 142
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1634
    }
  },
  {
    firstName: 'Case',
    lastName: 'Bradley',
    'dob': '1998-11-23',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 20,
      'activity': 'HV',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 141
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 93
      },
      'cl': {
        val: 135
      },
      'gt': {
        val: 131
      },
      'el': {
        val: 101
      },
      'mm': {
        val: 95
      },
      'qt': {
        val: 115
      },
      've': {
        val: 91
      },
      'dlab': {
        val: 115
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4983
    }
  },
  {
    firstName: 'Mcmillan',
    lastName: 'Sellers',
    'dob': '1998-03-27',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 17,
      'activity': 'OT',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 163
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 97
      },
      'cl': {
        val: 145
      },
      'gt': {
        val: 109
      },
      'el': {
        val: 132
      },
      'mm': {
        val: 104
      },
      'qt': {
        val: 103
      },
      've': {
        val: 107
      },
      'dlab': {
        val: 164
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3314
    }
  },
  {
    firstName: 'Bryan',
    lastName: 'Santana',
    'dob': '2000-05-29',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 14,
      'activity': 'EM',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 65
      },
      'weight': {
        val: 152
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 50
      },
      'cl': {
        val: 126
      },
      'gt': {
        val: 140
      },
      'el': {
        val: 116
      },
      'mm': {
        val: 113
      },
      'qt': {
        val: 104
      },
      've': {
        val: 105
      },
      'dlab': {
        val: 125
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3413
    }
  },
  {
    firstName: 'Ray',
    lastName: 'Mendez',
    'dob': '1995-07-28',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 12,
      'activity': 'HV',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 159
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 72
      },
      'cl': {
        val: 114
      },
      'gt': {
        val: 116
      },
      'el': {
        val: 116
      },
      'mm': {
        val: 98
      },
      'qt': {
        val: 111
      },
      've': {
        val: 107
      },
      'dlab': {
        val: 164
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4127
    }
  },
  {
    firstName: 'Arnold',
    lastName: 'Deleon',
    'dob': '1996-11-02',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 19,
      'activity': 'HV',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 160
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 49
      },
      'cl': {
        val: 107
      },
      'gt': {
        val: 97
      },
      'el': {
        val: 106
      },
      'mm': {
        val: 99
      },
      'qt': {
        val: 116
      },
      've': {
        val: 91
      },
      'dlab': {
        val: 123
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5918
    }
  },
  {
    firstName: 'Christina',
    lastName: 'Ross',
    'dob': '1998-05-03',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 3,
      'activity': 'EM',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 75
      },
      'weight': {
        val: 157
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 93
      },
      'cl': {
        val: 117
      },
      'gt': {
        val: 129
      },
      'el': {
        val: 130
      },
      'mm': {
        val: 119
      },
      'qt': {
        val: 109
      },
      've': {
        val: 107
      },
      'dlab': {
        val: 129
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6682
    }
  },
  {
    firstName: 'Patrica',
    lastName: 'Wood',
    'dob': '1997-07-10',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 19,
      'activity': 'OT',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 138
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 76
      },
      'cl': {
        val: 101
      },
      'gt': {
        val: 112
      },
      'el': {
        val: 112
      },
      'mm': {
        val: 103
      },
      'qt': {
        val: 123
      },
      've': {
        val: 102
      },
      'dlab': {
        val: 141
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1108
    }
  },
  {
    firstName: 'Sampson',
    lastName: 'Donaldson',
    'dob': '1994-12-09',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 15,
      'activity': 'EM',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 142
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 67
      },
      'cl': {
        val: 117
      },
      'gt': {
        val: 124
      },
      'el': {
        val: 101
      },
      'mm': {
        val: 99
      },
      'qt': {
        val: 113
      },
      've': {
        val: 102
      },
      'dlab': {
        val: 150
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7146
    }
  },
  {
    firstName: 'Montoya',
    lastName: 'Carter',
    'dob': '1997-05-08',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 13,
      'activity': 'HV',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 140
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 48
      },
      'cl': {
        val: 117
      },
      'gt': {
        val: 118
      },
      'el': {
        val: 124
      },
      'mm': {
        val: 105
      },
      'qt': {
        val: 103
      },
      've': {
        val: 91
      },
      'dlab': {
        val: 118
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7230
    }
  },
  {
    firstName: 'Kasey',
    lastName: 'Todd',
    'dob': '1994-01-12',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 17,
      'activity': 'EM',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 67
      },
      'weight': {
        val: 154
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 53
      },
      'cl': {
        val: 147
      },
      'gt': {
        val: 127
      },
      'el': {
        val: 125
      },
      'mm': {
        val: 104
      },
      'qt': {
        val: 120
      },
      've': {
        val: 99
      },
      'dlab': {
        val: 132
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4207
    }
  },
  {
    firstName: 'Elena',
    lastName: 'Reese',
    'dob': '1994-11-19',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 19,
      'activity': 'HV',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 67
      },
      'weight': {
        val: 149
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 51
      },
      'cl': {
        val: 116
      },
      'gt': {
        val: 134
      },
      'el': {
        val: 135
      },
      'mm': {
        val: 98
      },
      'qt': {
        val: 101
      },
      've': {
        val: 109
      },
      'dlab': {
        val: 131
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9592
    }
  },
  {
    firstName: 'Doreen',
    lastName: 'Strong',
    'dob': '1997-07-19',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 14,
      'activity': 'OT',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 170
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 74
      },
      'cl': {
        val: 117
      },
      'gt': {
        val: 121
      },
      'el': {
        val: 122
      },
      'mm': {
        val: 120
      },
      'qt': {
        val: 131
      },
      've': {
        val: 105
      },
      'dlab': {
        val: 155
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7040
    }
  },
  {
    firstName: 'Inez',
    lastName: 'Rosales',
    'dob': '2000-08-18',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 0,
      'activity': 'OT',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 158
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 53
      },
      'cl': {
        val: 110
      },
      'gt': {
        val: 117
      },
      'el': {
        val: 138
      },
      'mm': {
        val: 101
      },
      'qt': {
        val: 117
      },
      've': {
        val: 99
      },
      'dlab': {
        val: 137
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8375
    }
  },
  {
    firstName: 'Jo',
    lastName: 'Haynes',
    'dob': '1997-10-16',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 3,
      'activity': 'EM',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 184
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 67
      },
      'cl': {
        val: 110
      },
      'gt': {
        val: 119
      },
      'el': {
        val: 109
      },
      'mm': {
        val: 101
      },
      'qt': {
        val: 124
      },
      've': {
        val: 107
      },
      'dlab': {
        val: 141
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6451
    }
  },
  {
    firstName: 'Holt',
    lastName: 'Ochoa',
    'dob': '1999-01-06',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 18,
      'activity': 'TC',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 159
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 94
      },
      'cl': {
        val: 125
      },
      'gt': {
        val: 136
      },
      'el': {
        val: 134
      },
      'mm': {
        val: 108
      },
      'qt': {
        val: 116
      },
      've': {
        val: 90
      },
      'dlab': {
        val: 123
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7153
    }
  },
  {
    firstName: 'Kerry',
    lastName: 'Dean',
    'dob': '1994-09-04',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 0,
      'activity': 'OT',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 65
      },
      'weight': {
        val: 183
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 67
      },
      'cl': {
        val: 113
      },
      'gt': {
        val: 97
      },
      'el': {
        val: 117
      },
      'mm': {
        val: 128
      },
      'qt': {
        val: 126
      },
      've': {
        val: 102
      },
      'dlab': {
        val: 117
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1576
    }
  },
  {
    firstName: 'Jones',
    lastName: 'Welch',
    'dob': '1999-09-26',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 20,
      'activity': 'HV',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 67
      },
      'weight': {
        val: 140
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 61
      },
      'cl': {
        val: 129
      },
      'gt': {
        val: 127
      },
      'el': {
        val: 118
      },
      'mm': {
        val: 122
      },
      'qt': {
        val: 121
      },
      've': {
        val: 106
      },
      'dlab': {
        val: 150
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 6950
    }
  },
  {
    firstName: 'Douglas',
    lastName: 'Mcpherson',
    'dob': '1996-08-22',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 8,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 181
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 56
      },
      'cl': {
        val: 122
      },
      'gt': {
        val: 95
      },
      'el': {
        val: 104
      },
      'mm': {
        val: 103
      },
      'qt': {
        val: 119
      },
      've': {
        val: 92
      },
      'dlab': {
        val: 159
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5483
    }
  },
  {
    firstName: 'Hoffman',
    lastName: 'Cleveland',
    'dob': '1994-05-03',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 2,
      'activity': 'TC',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 70
      },
      'weight': {
        val: 176
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 48
      },
      'cl': {
        val: 104
      },
      'gt': {
        val: 130
      },
      'el': {
        val: 135
      },
      'mm': {
        val: 95
      },
      'qt': {
        val: 106
      },
      've': {
        val: 93
      },
      'dlab': {
        val: 117
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4609
    }
  },
  {
    firstName: 'Marylou',
    lastName: 'Holmes',
    'dob': '1999-04-23',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 16,
      'activity': 'TC',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 163
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 92
      },
      'cl': {
        val: 146
      },
      'gt': {
        val: 97
      },
      'el': {
        val: 97
      },
      'mm': {
        val: 106
      },
      'qt': {
        val: 100
      },
      've': {
        val: 96
      },
      'dlab': {
        val: 123
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9685
    }
  },
  {
    firstName: 'Bobbie',
    lastName: 'Ortega',
    'dob': '1999-10-17',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 15,
      'activity': 'TC',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 154
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 61
      },
      'cl': {
        val: 131
      },
      'gt': {
        val: 119
      },
      'el': {
        val: 137
      },
      'mm': {
        val: 127
      },
      'qt': {
        val: 107
      },
      've': {
        val: 96
      },
      'dlab': {
        val: 130
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1356
    }
  },
  {
    firstName: 'Sheena',
    lastName: 'Kinney',
    'dob': '1995-01-25',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 16,
      'activity': 'TC',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 70
      },
      'weight': {
        val: 177
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 63
      },
      'cl': {
        val: 148
      },
      'gt': {
        val: 96
      },
      'el': {
        val: 125
      },
      'mm': {
        val: 101
      },
      'qt': {
        val: 95
      },
      've': {
        val: 94
      },
      'dlab': {
        val: 148
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5730
    }
  },
  {
    firstName: 'Janell',
    lastName: 'Black',
    'dob': '1996-03-30',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 5,
      'activity': 'TC',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 74
      },
      'weight': {
        val: 171
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 80
      },
      'cl': {
        val: 110
      },
      'gt': {
        val: 133
      },
      'el': {
        val: 136
      },
      'mm': {
        val: 130
      },
      'qt': {
        val: 126
      },
      've': {
        val: 97
      },
      'dlab': {
        val: 147
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9067
    }
  },
  {
    firstName: 'Concetta',
    lastName: 'Dalton',
    'dob': '1997-09-27',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 13,
      'activity': 'OT',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 167
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 88
      },
      'cl': {
        val: 142
      },
      'gt': {
        val: 115
      },
      'el': {
        val: 137
      },
      'mm': {
        val: 124
      },
      'qt': {
        val: 127
      },
      've': {
        val: 95
      },
      'dlab': {
        val: 128
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9157
    }
  },
  {
    firstName: 'Mcneil',
    lastName: 'Gardner',
    'dob': '1995-01-05',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 14,
      'activity': 'EM',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 175
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 69
      },
      'cl': {
        val: 119
      },
      'gt': {
        val: 123
      },
      'el': {
        val: 135
      },
      'mm': {
        val: 126
      },
      'qt': {
        val: 120
      },
      've': {
        val: 109
      },
      'dlab': {
        val: 121
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3959
    }
  },
  {
    firstName: 'Battle',
    lastName: 'Cotton',
    'dob': '1994-12-14',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 7,
      'activity': 'TC',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 179
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 68
      },
      'cl': {
        val: 113
      },
      'gt': {
        val: 120
      },
      'el': {
        val: 105
      },
      'mm': {
        val: 105
      },
      'qt': {
        val: 129
      },
      've': {
        val: 91
      },
      'dlab': {
        val: 135
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6959
    }
  },
  {
    firstName: 'Mia',
    lastName: 'Raymond',
    'dob': '1995-10-23',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 12,
      'activity': 'OT',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 175
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 79
      },
      'cl': {
        val: 108
      },
      'gt': {
        val: 136
      },
      'el': {
        val: 118
      },
      'mm': {
        val: 117
      },
      'qt': {
        val: 108
      },
      've': {
        val: 94
      },
      'dlab': {
        val: 142
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1258
    }
  },
  {
    firstName: 'Hutchinson',
    lastName: 'Lloyd',
    'dob': '1994-12-02',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 9,
      'activity': 'EM',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 169
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 55
      },
      'cl': {
        val: 150
      },
      'gt': {
        val: 100
      },
      'el': {
        val: 140
      },
      'mm': {
        val: 124
      },
      'qt': {
        val: 127
      },
      've': {
        val: 101
      },
      'dlab': {
        val: 163
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4963
    }
  },
  {
    firstName: 'Kimberly',
    lastName: 'Bernard',
    'dob': '2000-03-07',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 17,
      'activity': 'OT',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 148
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 89
      },
      'cl': {
        val: 110
      },
      'gt': {
        val: 109
      },
      'el': {
        val: 99
      },
      'mm': {
        val: 113
      },
      'qt': {
        val: 124
      },
      've': {
        val: 110
      },
      'dlab': {
        val: 132
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6488
    }
  },
  {
    firstName: 'Joseph',
    lastName: 'Lawson',
    'dob': '2000-08-15',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 5,
      'activity': 'OT',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 173
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 73
      },
      'cl': {
        val: 126
      },
      'gt': {
        val: 108
      },
      'el': {
        val: 105
      },
      'mm': {
        val: 113
      },
      'qt': {
        val: 130
      },
      've': {
        val: 94
      },
      'dlab': {
        val: 153
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5777
    }
  },
  {
    firstName: 'Conway',
    lastName: 'Gaines',
    'dob': '1994-08-01',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 18,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 159
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 82
      },
      'cl': {
        val: 136
      },
      'gt': {
        val: 119
      },
      'el': {
        val: 108
      },
      'mm': {
        val: 95
      },
      'qt': {
        val: 104
      },
      've': {
        val: 92
      },
      'dlab': {
        val: 164
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5915
    }
  },
  {
    firstName: 'Ladonna',
    lastName: 'Odom',
    'dob': '1996-03-19',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 10,
      'activity': 'TC',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 74
      },
      'weight': {
        val: 154
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 92
      },
      'cl': {
        val: 142
      },
      'gt': {
        val: 131
      },
      'el': {
        val: 97
      },
      'mm': {
        val: 97
      },
      'qt': {
        val: 115
      },
      've': {
        val: 106
      },
      'dlab': {
        val: 138
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8485
    }
  },
  {
    firstName: 'Hess',
    lastName: 'Richards',
    'dob': '1995-08-05',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 6,
      'activity': 'OT',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 152
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 62
      },
      'cl': {
        val: 140
      },
      'gt': {
        val: 97
      },
      'el': {
        val: 133
      },
      'mm': {
        val: 108
      },
      'qt': {
        val: 129
      },
      've': {
        val: 108
      },
      'dlab': {
        val: 164
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1640
    }
  },
  {
    firstName: 'Harrington',
    lastName: 'Dawson',
    'dob': '2000-09-23',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 17,
      'activity': 'OT',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 63
      },
      'weight': {
        val: 173
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 75
      },
      'cl': {
        val: 151
      },
      'gt': {
        val: 131
      },
      'el': {
        val: 118
      },
      'mm': {
        val: 102
      },
      'qt': {
        val: 122
      },
      've': {
        val: 92
      },
      'dlab': {
        val: 135
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7280
    }
  },
  {
    firstName: 'Jeanie',
    lastName: 'Wynn',
    'dob': '1995-06-28',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 0,
      'activity': 'OT',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 62
      },
      'weight': {
        val: 162
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 84
      },
      'cl': {
        val: 131
      },
      'gt': {
        val: 104
      },
      'el': {
        val: 105
      },
      'mm': {
        val: 106
      },
      'qt': {
        val: 99
      },
      've': {
        val: 110
      },
      'dlab': {
        val: 135
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3272
    }
  },
  {
    firstName: 'Terry',
    lastName: 'Miles',
    'dob': '1999-01-19',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 14,
      'activity': 'HV',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 183
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 50
      },
      'cl': {
        val: 127
      },
      'gt': {
        val: 137
      },
      'el': {
        val: 140
      },
      'mm': {
        val: 106
      },
      'qt': {
        val: 121
      },
      've': {
        val: 98
      },
      'dlab': {
        val: 127
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1567
    }
  },
  {
    firstName: 'Hood',
    lastName: 'Williams',
    'dob': '1997-06-18',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 9,
      'activity': 'OT',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 176
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 83
      },
      'cl': {
        val: 133
      },
      'gt': {
        val: 119
      },
      'el': {
        val: 128
      },
      'mm': {
        val: 112
      },
      'qt': {
        val: 111
      },
      've': {
        val: 98
      },
      'dlab': {
        val: 162
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9980
    }
  },
  {
    firstName: 'Nunez',
    lastName: 'Mercer',
    'dob': '1994-01-22',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 12,
      'activity': 'OT',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 162
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 49
      },
      'cl': {
        val: 126
      },
      'gt': {
        val: 133
      },
      'el': {
        val: 115
      },
      'mm': {
        val: 115
      },
      'qt': {
        val: 127
      },
      've': {
        val: 103
      },
      'dlab': {
        val: 133
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7769
    }
  },
  {
    firstName: 'Angelina',
    lastName: 'Barton',
    'dob': '1998-09-25',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 7,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 146
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 83
      },
      'cl': {
        val: 131
      },
      'gt': {
        val: 132
      },
      'el': {
        val: 132
      },
      'mm': {
        val: 100
      },
      'qt': {
        val: 106
      },
      've': {
        val: 102
      },
      'dlab': {
        val: 153
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9732
    }
  },
  {
    firstName: 'Eloise',
    lastName: 'Mclean',
    'dob': '1998-04-17',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 7,
      'activity': 'EM',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 64
      },
      'weight': {
        val: 144
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 55
      },
      'cl': {
        val: 110
      },
      'gt': {
        val: 119
      },
      'el': {
        val: 112
      },
      'mm': {
        val: 98
      },
      'qt': {
        val: 111
      },
      've': {
        val: 92
      },
      'dlab': {
        val: 122
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 5545
    }
  },
  {
    firstName: 'Maribel',
    lastName: 'York',
    'dob': '1994-10-25',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 19,
      'activity': 'HV',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 138
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 53
      },
      'cl': {
        val: 133
      },
      'gt': {
        val: 123
      },
      'el': {
        val: 125
      },
      'mm': {
        val: 101
      },
      'qt': {
        val: 114
      },
      've': {
        val: 93
      },
      'dlab': {
        val: 124
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5926
    }
  },
  {
    firstName: 'Tisha',
    lastName: 'Hernandez',
    'dob': '1994-01-27',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 8,
      'activity': 'EM',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 62
      },
      'weight': {
        val: 172
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 84
      },
      'cl': {
        val: 146
      },
      'gt': {
        val: 103
      },
      'el': {
        val: 103
      },
      'mm': {
        val: 131
      },
      'qt': {
        val: 98
      },
      've': {
        val: 106
      },
      'dlab': {
        val: 128
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8445
    }
  },
  {
    firstName: 'Jefferson',
    lastName: 'Henry',
    'dob': '1996-03-21',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 9,
      'activity': 'HV',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 74
      },
      'weight': {
        val: 148
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 45
      },
      'cl': {
        val: 147
      },
      'gt': {
        val: 95
      },
      'el': {
        val: 116
      },
      'mm': {
        val: 98
      },
      'qt': {
        val: 108
      },
      've': {
        val: 105
      },
      'dlab': {
        val: 162
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2260
    }
  },
  {
    firstName: 'Frye',
    lastName: 'Obrien',
    'dob': '1995-03-16',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 6,
      'activity': 'OT',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 75
      },
      'weight': {
        val: 142
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 46
      },
      'cl': {
        val: 146
      },
      'gt': {
        val: 102
      },
      'el': {
        val: 123
      },
      'mm': {
        val: 100
      },
      'qt': {
        val: 127
      },
      've': {
        val: 93
      },
      'dlab': {
        val: 118
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1538
    }
  },
  {
    firstName: 'Bowen',
    lastName: 'Hayes',
    'dob': '1997-10-13',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 8,
      'activity': 'HV',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 158
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 43
      },
      'cl': {
        val: 101
      },
      'gt': {
        val: 113
      },
      'el': {
        val: 129
      },
      'mm': {
        val: 113
      },
      'qt': {
        val: 106
      },
      've': {
        val: 106
      },
      'dlab': {
        val: 120
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5087
    }
  },
  {
    firstName: 'Harrison',
    lastName: 'Hartman',
    'dob': '1995-12-12',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 0,
      'activity': 'EM',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 75
      },
      'weight': {
        val: 168
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 75
      },
      'cl': {
        val: 149
      },
      'gt': {
        val: 103
      },
      'el': {
        val: 130
      },
      'mm': {
        val: 98
      },
      'qt': {
        val: 122
      },
      've': {
        val: 98
      },
      'dlab': {
        val: 146
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 2793
    }
  },
  {
    firstName: 'Everett',
    lastName: 'Santos',
    'dob': '1994-08-06',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 3,
      'activity': 'EM',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 152
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 49
      },
      'cl': {
        val: 110
      },
      'gt': {
        val: 119
      },
      'el': {
        val: 110
      },
      'mm': {
        val: 121
      },
      'qt': {
        val: 108
      },
      've': {
        val: 100
      },
      'dlab': {
        val: 145
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7749
    }
  },
  {
    firstName: 'Essie',
    lastName: 'Bradford',
    'dob': '2000-03-14',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 10,
      'activity': 'OT',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 75
      },
      'weight': {
        val: 159
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 88
      },
      'cl': {
        val: 120
      },
      'gt': {
        val: 111
      },
      'el': {
        val: 112
      },
      'mm': {
        val: 111
      },
      'qt': {
        val: 120
      },
      've': {
        val: 91
      },
      'dlab': {
        val: 150
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9406
    }
  },
  {
    firstName: 'Browning',
    lastName: 'Lane',
    'dob': '1996-10-28',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 20,
      'activity': 'EM',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 183
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 59
      },
      'cl': {
        val: 132
      },
      'gt': {
        val: 106
      },
      'el': {
        val: 95
      },
      'mm': {
        val: 96
      },
      'qt': {
        val: 130
      },
      've': {
        val: 106
      },
      'dlab': {
        val: 132
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2592
    }
  },
  {
    firstName: 'Noemi',
    lastName: 'Pennington',
    'dob': '1999-01-12',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 17,
      'activity': 'OT',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 146
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 64
      },
      'cl': {
        val: 143
      },
      'gt': {
        val: 135
      },
      'el': {
        val: 112
      },
      'mm': {
        val: 123
      },
      'qt': {
        val: 97
      },
      've': {
        val: 109
      },
      'dlab': {
        val: 163
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5195
    }
  },
  {
    firstName: 'Mcleod',
    lastName: 'Patterson',
    'dob': '1997-01-15',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 12,
      'activity': 'OT',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 75
      },
      'weight': {
        val: 184
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 91
      },
      'cl': {
        val: 141
      },
      'gt': {
        val: 95
      },
      'el': {
        val: 96
      },
      'mm': {
        val: 111
      },
      'qt': {
        val: 100
      },
      've': {
        val: 99
      },
      'dlab': {
        val: 158
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6150
    }
  },
  {
    firstName: 'Elliott',
    lastName: 'Cobb',
    'dob': '1996-02-17',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 16,
      'activity': 'EM',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 155
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 46
      },
      'cl': {
        val: 151
      },
      'gt': {
        val: 137
      },
      'el': {
        val: 121
      },
      'mm': {
        val: 130
      },
      'qt': {
        val: 98
      },
      've': {
        val: 101
      },
      'dlab': {
        val: 152
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9009
    }
  },
  {
    firstName: 'Ochoa',
    lastName: 'Marquez',
    'dob': '1994-12-13',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 14,
      'activity': 'TC',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 70
      },
      'weight': {
        val: 171
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 52
      },
      'cl': {
        val: 122
      },
      'gt': {
        val: 126
      },
      'el': {
        val: 127
      },
      'mm': {
        val: 106
      },
      'qt': {
        val: 114
      },
      've': {
        val: 105
      },
      'dlab': {
        val: 141
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3316
    }
  },
  {
    firstName: 'Charlotte',
    lastName: 'Flores',
    'dob': '1997-06-10',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 12,
      'activity': 'HV',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 152
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 67
      },
      'cl': {
        val: 104
      },
      'gt': {
        val: 100
      },
      'el': {
        val: 98
      },
      'mm': {
        val: 110
      },
      'qt': {
        val: 121
      },
      've': {
        val: 96
      },
      'dlab': {
        val: 155
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1072
    }
  },
  {
    firstName: 'Morgan',
    lastName: 'Chang',
    'dob': '1995-05-04',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 3,
      'activity': 'OT',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 160
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 79
      },
      'cl': {
        val: 138
      },
      'gt': {
        val: 122
      },
      'el': {
        val: 95
      },
      'mm': {
        val: 109
      },
      'qt': {
        val: 129
      },
      've': {
        val: 106
      },
      'dlab': {
        val: 153
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5196
    }
  },
  {
    firstName: 'Buchanan',
    lastName: 'Mcfarland',
    'dob': '1997-10-18',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 12,
      'activity': 'HV',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 176
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 64
      },
      'cl': {
        val: 134
      },
      'gt': {
        val: 139
      },
      'el': {
        val: 96
      },
      'mm': {
        val: 126
      },
      'qt': {
        val: 121
      },
      've': {
        val: 104
      },
      'dlab': {
        val: 153
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6851
    }
  },
  {
    firstName: 'Candice',
    lastName: 'Bauer',
    'dob': '1994-03-21',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 15,
      'activity': 'EM',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 63
      },
      'weight': {
        val: 141
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 61
      },
      'cl': {
        val: 112
      },
      'gt': {
        val: 100
      },
      'el': {
        val: 132
      },
      'mm': {
        val: 122
      },
      'qt': {
        val: 124
      },
      've': {
        val: 109
      },
      'dlab': {
        val: 141
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7339
    }
  },
  {
    firstName: 'Olive',
    lastName: 'Duke',
    'dob': '1999-09-01',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 8,
      'activity': 'TC',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 67
      },
      'weight': {
        val: 142
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 63
      },
      'cl': {
        val: 135
      },
      'gt': {
        val: 105
      },
      'el': {
        val: 111
      },
      'mm': {
        val: 111
      },
      'qt': {
        val: 98
      },
      've': {
        val: 110
      },
      'dlab': {
        val: 136
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7638
    }
  },
  {
    firstName: 'Rebecca',
    lastName: 'Conley',
    'dob': '1995-07-01',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 17,
      'activity': 'OT',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 62
      },
      'weight': {
        val: 143
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 87
      },
      'cl': {
        val: 141
      },
      'gt': {
        val: 124
      },
      'el': {
        val: 117
      },
      'mm': {
        val: 126
      },
      'qt': {
        val: 96
      },
      've': {
        val: 101
      },
      'dlab': {
        val: 124
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4622
    }
  },
  {
    firstName: 'Natalia',
    lastName: 'Hanson',
    'dob': '1994-09-09',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 15,
      'activity': 'OT',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 64
      },
      'weight': {
        val: 156
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 98
      },
      'cl': {
        val: 112
      },
      'gt': {
        val: 132
      },
      'el': {
        val: 110
      },
      'mm': {
        val: 95
      },
      'qt': {
        val: 113
      },
      've': {
        val: 107
      },
      'dlab': {
        val: 129
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8356
    }
  },
  {
    firstName: 'Wheeler',
    lastName: 'Acosta',
    'dob': '1998-04-01',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 8,
      'activity': 'HV',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 183
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 81
      },
      'cl': {
        val: 147
      },
      'gt': {
        val: 118
      },
      'el': {
        val: 116
      },
      'mm': {
        val: 99
      },
      'qt': {
        val: 100
      },
      've': {
        val: 106
      },
      'dlab': {
        val: 150
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5740
    }
  },
  {
    firstName: 'Dawn',
    lastName: 'Vazquez',
    'dob': '1996-09-29',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 17,
      'activity': 'HV',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 65
      },
      'weight': {
        val: 173
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 82
      },
      'cl': {
        val: 143
      },
      'gt': {
        val: 124
      },
      'el': {
        val: 131
      },
      'mm': {
        val: 122
      },
      'qt': {
        val: 124
      },
      've': {
        val: 101
      },
      'dlab': {
        val: 150
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 2566
    }
  },
  {
    firstName: 'Darlene',
    lastName: 'Lancaster',
    'dob': '1995-01-14',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 6,
      'activity': 'HV',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 65
      },
      'weight': {
        val: 187
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 54
      },
      'cl': {
        val: 133
      },
      'gt': {
        val: 97
      },
      'el': {
        val: 108
      },
      'mm': {
        val: 125
      },
      'qt': {
        val: 110
      },
      've': {
        val: 99
      },
      'dlab': {
        val: 121
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6592
    }
  },
  {
    firstName: 'Samantha',
    lastName: 'Hoover',
    'dob': '2000-04-04',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 17,
      'activity': 'TC',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 63
      },
      'weight': {
        val: 174
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 58
      },
      'cl': {
        val: 127
      },
      'gt': {
        val: 103
      },
      'el': {
        val: 106
      },
      'mm': {
        val: 124
      },
      'qt': {
        val: 111
      },
      've': {
        val: 92
      },
      'dlab': {
        val: 141
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6392
    }
  },
  {
    firstName: 'Short',
    lastName: 'Patrick',
    'dob': '2000-03-29',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 13,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 70
      },
      'weight': {
        val: 187
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 40
      },
      'cl': {
        val: 108
      },
      'gt': {
        val: 106
      },
      'el': {
        val: 106
      },
      'mm': {
        val: 105
      },
      'qt': {
        val: 102
      },
      've': {
        val: 97
      },
      'dlab': {
        val: 155
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5262
    }
  },
  {
    firstName: 'Nicholson',
    lastName: 'Daniel',
    'dob': '2000-05-20',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 13,
      'activity': 'EM',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 142
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 79
      },
      'cl': {
        val: 145
      },
      'gt': {
        val: 140
      },
      'el': {
        val: 108
      },
      'mm': {
        val: 117
      },
      'qt': {
        val: 104
      },
      've': {
        val: 104
      },
      'dlab': {
        val: 130
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7185
    }
  },
  {
    firstName: 'Ewing',
    lastName: 'Cohen',
    'dob': '1995-05-05',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 7,
      'activity': 'OT',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 188
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 51
      },
      'cl': {
        val: 136
      },
      'gt': {
        val: 140
      },
      'el': {
        val: 111
      },
      'mm': {
        val: 127
      },
      'qt': {
        val: 117
      },
      've': {
        val: 93
      },
      'dlab': {
        val: 162
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 7785
    }
  },
  {
    firstName: 'Vaughan',
    lastName: 'Petersen',
    'dob': '1997-05-12',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 2,
      'activity': 'TC',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 154
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 51
      },
      'cl': {
        val: 125
      },
      'gt': {
        val: 139
      },
      'el': {
        val: 112
      },
      'mm': {
        val: 123
      },
      'qt': {
        val: 129
      },
      've': {
        val: 100
      },
      'dlab': {
        val: 119
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6806
    }
  },
  {
    firstName: 'Cherie',
    lastName: 'Garrett',
    'dob': '2000-03-17',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 18,
      'activity': 'OT',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 74
      },
      'weight': {
        val: 164
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 42
      },
      'cl': {
        val: 146
      },
      'gt': {
        val: 113
      },
      'el': {
        val: 97
      },
      'mm': {
        val: 111
      },
      'qt': {
        val: 96
      },
      've': {
        val: 93
      },
      'dlab': {
        val: 163
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9380
    }
  },
  {
    firstName: 'Chan',
    lastName: 'Delacruz',
    'dob': '1997-01-09',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 11,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 75
      },
      'weight': {
        val: 154
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 91
      },
      'cl': {
        val: 151
      },
      'gt': {
        val: 120
      },
      'el': {
        val: 126
      },
      'mm': {
        val: 119
      },
      'qt': {
        val: 128
      },
      've': {
        val: 95
      },
      'dlab': {
        val: 145
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3293
    }
  },
  {
    firstName: 'Park',
    lastName: 'Brennan',
    'dob': '1997-12-11',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 7,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 64
      },
      'weight': {
        val: 155
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 53
      },
      'cl': {
        val: 111
      },
      'gt': {
        val: 122
      },
      'el': {
        val: 105
      },
      'mm': {
        val: 129
      },
      'qt': {
        val: 130
      },
      've': {
        val: 107
      },
      'dlab': {
        val: 152
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1233
    }
  },
  {
    firstName: 'Allison',
    lastName: 'Burton',
    'dob': '1999-07-26',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 0,
      'activity': 'TC',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 75
      },
      'weight': {
        val: 148
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 47
      },
      'cl': {
        val: 125
      },
      'gt': {
        val: 119
      },
      'el': {
        val: 108
      },
      'mm': {
        val: 109
      },
      'qt': {
        val: 121
      },
      've': {
        val: 104
      },
      'dlab': {
        val: 122
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9855
    }
  },
  {
    firstName: 'Cathleen',
    lastName: 'Maddox',
    'dob': '1995-01-22',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 3,
      'activity': 'EM',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 65
      },
      'weight': {
        val: 148
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 84
      },
      'cl': {
        val: 114
      },
      'gt': {
        val: 97
      },
      'el': {
        val: 111
      },
      'mm': {
        val: 111
      },
      'qt': {
        val: 126
      },
      've': {
        val: 102
      },
      'dlab': {
        val: 145
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2564
    }
  },
  {
    firstName: 'Lillian',
    lastName: 'Harmon',
    'dob': '1998-03-19',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 2,
      'activity': 'EM',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 169
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 53
      },
      'cl': {
        val: 142
      },
      'gt': {
        val: 130
      },
      'el': {
        val: 101
      },
      'mm': {
        val: 127
      },
      'qt': {
        val: 106
      },
      've': {
        val: 90
      },
      'dlab': {
        val: 152
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9020
    }
  },
  {
    firstName: 'Deborah',
    lastName: 'Wilkerson',
    'dob': '1999-05-27',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 20,
      'activity': 'OT',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 74
      },
      'weight': {
        val: 172
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 75
      },
      'cl': {
        val: 142
      },
      'gt': {
        val: 98
      },
      'el': {
        val: 105
      },
      'mm': {
        val: 113
      },
      'qt': {
        val: 103
      },
      've': {
        val: 93
      },
      'dlab': {
        val: 158
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4246
    }
  },
  {
    firstName: 'Robbie',
    lastName: 'Cole',
    'dob': '2000-07-13',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 7,
      'activity': 'TC',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 168
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 99
      },
      'cl': {
        val: 133
      },
      'gt': {
        val: 105
      },
      'el': {
        val: 107
      },
      'mm': {
        val: 119
      },
      'qt': {
        val: 104
      },
      've': {
        val: 92
      },
      'dlab': {
        val: 160
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2478
    }
  },
  {
    firstName: 'Juliet',
    lastName: 'Newman',
    'dob': '1995-05-26',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 3,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 75
      },
      'weight': {
        val: 148
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 92
      },
      'cl': {
        val: 126
      },
      'gt': {
        val: 108
      },
      'el': {
        val: 127
      },
      'mm': {
        val: 124
      },
      'qt': {
        val: 95
      },
      've': {
        val: 102
      },
      'dlab': {
        val: 143
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5237
    }
  },
  {
    firstName: 'Avila',
    lastName: 'Farley',
    'dob': '1996-08-27',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 13,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 74
      },
      'weight': {
        val: 166
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 92
      },
      'cl': {
        val: 141
      },
      'gt': {
        val: 131
      },
      'el': {
        val: 116
      },
      'mm': {
        val: 109
      },
      'qt': {
        val: 123
      },
      've': {
        val: 100
      },
      'dlab': {
        val: 122
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9731
    }
  },
  {
    firstName: 'Nellie',
    lastName: 'Cameron',
    'dob': '2000-04-14',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 1,
      'activity': 'HV',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 150
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 71
      },
      'cl': {
        val: 138
      },
      'gt': {
        val: 138
      },
      'el': {
        val: 116
      },
      'mm': {
        val: 120
      },
      'qt': {
        val: 114
      },
      've': {
        val: 105
      },
      'dlab': {
        val: 118
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1911
    }
  },
  {
    firstName: 'Cline',
    lastName: 'Rodgers',
    'dob': '1995-06-26',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 6,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 62
      },
      'weight': {
        val: 177
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 70
      },
      'cl': {
        val: 133
      },
      'gt': {
        val: 107
      },
      'el': {
        val: 131
      },
      'mm': {
        val: 131
      },
      'qt': {
        val: 109
      },
      've': {
        val: 97
      },
      'dlab': {
        val: 156
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 9889
    }
  },
  {
    firstName: 'Myrtle',
    lastName: 'Padilla',
    'dob': '1994-03-09',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 19,
      'activity': 'OT',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 67
      },
      'weight': {
        val: 157
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 91
      },
      'cl': {
        val: 116
      },
      'gt': {
        val: 124
      },
      'el': {
        val: 96
      },
      'mm': {
        val: 131
      },
      'qt': {
        val: 105
      },
      've': {
        val: 98
      },
      'dlab': {
        val: 152
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 2403
    }
  },
  {
    firstName: 'Paige',
    lastName: 'Bowman',
    'dob': '1997-08-24',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 12,
      'activity': 'HV',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 67
      },
      'weight': {
        val: 184
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 88
      },
      'cl': {
        val: 136
      },
      'gt': {
        val: 104
      },
      'el': {
        val: 134
      },
      'mm': {
        val: 129
      },
      'qt': {
        val: 109
      },
      've': {
        val: 94
      },
      'dlab': {
        val: 124
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9773
    }
  },
  {
    firstName: 'Emerson',
    lastName: 'Valencia',
    'dob': '1995-06-27',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 2,
      'activity': 'TC',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 70
      },
      'weight': {
        val: 154
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 45
      },
      'cl': {
        val: 129
      },
      'gt': {
        val: 131
      },
      'el': {
        val: 114
      },
      'mm': {
        val: 121
      },
      'qt': {
        val: 100
      },
      've': {
        val: 100
      },
      'dlab': {
        val: 160
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1072
    }
  },
  {
    firstName: 'Tucker',
    lastName: 'Chandler',
    'dob': '1996-06-19',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 17,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 74
      },
      'weight': {
        val: 158
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 72
      },
      'cl': {
        val: 116
      },
      'gt': {
        val: 102
      },
      'el': {
        val: 107
      },
      'mm': {
        val: 113
      },
      'qt': {
        val: 104
      },
      've': {
        val: 109
      },
      'dlab': {
        val: 150
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6777
    }
  },
  {
    firstName: 'Burt',
    lastName: 'Owen',
    'dob': '1998-12-20',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 15,
      'activity': 'TC',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 181
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 60
      },
      'cl': {
        val: 103
      },
      'gt': {
        val: 112
      },
      'el': {
        val: 136
      },
      'mm': {
        val: 98
      },
      'qt': {
        val: 99
      },
      've': {
        val: 97
      },
      'dlab': {
        val: 158
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2519
    }
  },
  {
    firstName: 'Bailey',
    lastName: 'Fox',
    'dob': '1996-02-21',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 2,
      'activity': 'EM',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 74
      },
      'weight': {
        val: 173
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 62
      },
      'cl': {
        val: 127
      },
      'gt': {
        val: 134
      },
      'el': {
        val: 103
      },
      'mm': {
        val: 111
      },
      'qt': {
        val: 110
      },
      've': {
        val: 107
      },
      'dlab': {
        val: 162
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2370
    }
  },
  {
    firstName: 'Celeste',
    lastName: 'Greene',
    'dob': '1999-03-22',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 5,
      'activity': 'OT',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 67
      },
      'weight': {
        val: 172
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 94
      },
      'cl': {
        val: 148
      },
      'gt': {
        val: 137
      },
      'el': {
        val: 99
      },
      'mm': {
        val: 117
      },
      'qt': {
        val: 125
      },
      've': {
        val: 108
      },
      'dlab': {
        val: 139
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1397
    }
  },
  {
    firstName: 'Viola',
    lastName: 'Everett',
    'dob': '1994-07-10',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 20,
      'activity': 'EM',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 64
      },
      'weight': {
        val: 141
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 54
      },
      'cl': {
        val: 144
      },
      'gt': {
        val: 123
      },
      'el': {
        val: 104
      },
      'mm': {
        val: 128
      },
      'qt': {
        val: 125
      },
      've': {
        val: 98
      },
      'dlab': {
        val: 140
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1677
    }
  },
  {
    firstName: 'Adeline',
    lastName: 'Bond',
    'dob': '1995-04-22',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 10,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 65
      },
      'weight': {
        val: 166
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 39
      },
      'cl': {
        val: 147
      },
      'gt': {
        val: 112
      },
      'el': {
        val: 110
      },
      'mm': {
        val: 102
      },
      'qt': {
        val: 98
      },
      've': {
        val: 110
      },
      'dlab': {
        val: 122
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1660
    }
  },
  {
    firstName: 'Webb',
    lastName: 'Moses',
    'dob': '1994-10-20',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 12,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 62
      },
      'weight': {
        val: 165
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 90
      },
      'cl': {
        val: 146
      },
      'gt': {
        val: 118
      },
      'el': {
        val: 125
      },
      'mm': {
        val: 116
      },
      'qt': {
        val: 101
      },
      've': {
        val: 108
      },
      'dlab': {
        val: 117
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2669
    }
  },
  {
    firstName: 'Thelma',
    lastName: 'English',
    'dob': '2000-07-02',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 16,
      'activity': 'EM',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 165
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 63
      },
      'cl': {
        val: 133
      },
      'gt': {
        val: 132
      },
      'el': {
        val: 110
      },
      'mm': {
        val: 101
      },
      'qt': {
        val: 104
      },
      've': {
        val: 99
      },
      'dlab': {
        val: 132
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4099
    }
  },
  {
    firstName: 'Mcclain',
    lastName: 'Lynch',
    'dob': '1999-03-27',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 12,
      'activity': 'EM',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 75
      },
      'weight': {
        val: 137
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 45
      },
      'cl': {
        val: 123
      },
      'gt': {
        val: 118
      },
      'el': {
        val: 118
      },
      'mm': {
        val: 104
      },
      'qt': {
        val: 122
      },
      've': {
        val: 97
      },
      'dlab': {
        val: 147
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 9558
    }
  },
  {
    firstName: 'Mclaughlin',
    lastName: 'Carrillo',
    'dob': '1997-02-11',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 10,
      'activity': 'EM',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 63
      },
      'weight': {
        val: 159
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 74
      },
      'cl': {
        val: 121
      },
      'gt': {
        val: 130
      },
      'el': {
        val: 129
      },
      'mm': {
        val: 105
      },
      'qt': {
        val: 119
      },
      've': {
        val: 96
      },
      'dlab': {
        val: 134
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9864
    }
  },
  {
    firstName: 'Amalia',
    lastName: 'Silva',
    'dob': '1996-08-05',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 15,
      'activity': 'TC',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 142
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 63
      },
      'cl': {
        val: 110
      },
      'gt': {
        val: 123
      },
      'el': {
        val: 116
      },
      'mm': {
        val: 126
      },
      'qt': {
        val: 102
      },
      've': {
        val: 109
      },
      'dlab': {
        val: 128
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1124
    }
  },
  {
    firstName: 'Beth',
    lastName: 'Weaver',
    'dob': '1997-04-23',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 18,
      'activity': 'HV',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 63
      },
      'weight': {
        val: 146
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 93
      },
      'cl': {
        val: 129
      },
      'gt': {
        val: 97
      },
      'el': {
        val: 124
      },
      'mm': {
        val: 113
      },
      'qt': {
        val: 106
      },
      've': {
        val: 108
      },
      'dlab': {
        val: 116
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9224
    }
  },
  {
    firstName: 'Sexton',
    lastName: 'Townsend',
    'dob': '1997-06-22',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 0,
      'activity': 'EM',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 70
      },
      'weight': {
        val: 174
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 48
      },
      'cl': {
        val: 129
      },
      'gt': {
        val: 137
      },
      'el': {
        val: 141
      },
      'mm': {
        val: 121
      },
      'qt': {
        val: 109
      },
      've': {
        val: 104
      },
      'dlab': {
        val: 117
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6960
    }
  },
  {
    firstName: 'Clay',
    lastName: 'Hampton',
    'dob': '1999-03-20',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 3,
      'activity': 'EM',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 64
      },
      'weight': {
        val: 170
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 64
      },
      'cl': {
        val: 150
      },
      'gt': {
        val: 104
      },
      'el': {
        val: 116
      },
      'mm': {
        val: 99
      },
      'qt': {
        val: 120
      },
      've': {
        val: 108
      },
      'dlab': {
        val: 126
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7886
    }
  },
  {
    firstName: 'Noelle',
    lastName: 'Sanders',
    'dob': '1999-10-06',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 2,
      'activity': 'HV',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 65
      },
      'weight': {
        val: 164
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 48
      },
      'cl': {
        val: 125
      },
      'gt': {
        val: 114
      },
      'el': {
        val: 136
      },
      'mm': {
        val: 97
      },
      'qt': {
        val: 127
      },
      've': {
        val: 92
      },
      'dlab': {
        val: 144
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7140
    }
  },
  {
    firstName: 'Brandy',
    lastName: 'Sharpe',
    'dob': '1994-05-06',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 19,
      'activity': 'HV',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 184
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 64
      },
      'cl': {
        val: 127
      },
      'gt': {
        val: 127
      },
      'el': {
        val: 121
      },
      'mm': {
        val: 97
      },
      'qt': {
        val: 101
      },
      've': {
        val: 92
      },
      'dlab': {
        val: 159
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 5664
    }
  },
  {
    firstName: 'Howe',
    lastName: 'Lee',
    'dob': '1997-02-16',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 5,
      'activity': 'OT',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 142
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 99
      },
      'cl': {
        val: 138
      },
      'gt': {
        val: 111
      },
      'el': {
        val: 113
      },
      'mm': {
        val: 102
      },
      'qt': {
        val: 128
      },
      've': {
        val: 90
      },
      'dlab': {
        val: 146
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 6740
    }
  },
  {
    firstName: 'Janie',
    lastName: 'Wright',
    'dob': '1997-12-14',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 1,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 145
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 95
      },
      'cl': {
        val: 137
      },
      'gt': {
        val: 130
      },
      'el': {
        val: 117
      },
      'mm': {
        val: 115
      },
      'qt': {
        val: 129
      },
      've': {
        val: 91
      },
      'dlab': {
        val: 164
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7196
    }
  },
  {
    firstName: 'Mcintosh',
    lastName: 'Bradshaw',
    'dob': '1996-03-07',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 7,
      'activity': 'OT',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 75
      },
      'weight': {
        val: 156
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 73
      },
      'cl': {
        val: 134
      },
      'gt': {
        val: 130
      },
      'el': {
        val: 137
      },
      'mm': {
        val: 130
      },
      'qt': {
        val: 100
      },
      've': {
        val: 96
      },
      'dlab': {
        val: 132
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 2683
    }
  },
  {
    firstName: 'Ruby',
    lastName: 'Schroeder',
    'dob': '1995-02-16',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 11,
      'activity': 'HV',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 162
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 60
      },
      'cl': {
        val: 127
      },
      'gt': {
        val: 139
      },
      'el': {
        val: 126
      },
      'mm': {
        val: 113
      },
      'qt': {
        val: 113
      },
      've': {
        val: 97
      },
      'dlab': {
        val: 155
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4398
    }
  },
  {
    firstName: 'Wolf',
    lastName: 'Mcconnell',
    'dob': '1994-02-01',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 8,
      'activity': 'TC',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 145
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 89
      },
      'cl': {
        val: 126
      },
      'gt': {
        val: 96
      },
      'el': {
        val: 97
      },
      'mm': {
        val: 100
      },
      'qt': {
        val: 96
      },
      've': {
        val: 94
      },
      'dlab': {
        val: 133
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9002
    }
  },
  {
    firstName: 'Dejesus',
    lastName: 'Buckley',
    'dob': '1995-10-31',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 17,
      'activity': 'HV',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 64
      },
      'weight': {
        val: 147
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 53
      },
      'cl': {
        val: 149
      },
      'gt': {
        val: 119
      },
      'el': {
        val: 98
      },
      'mm': {
        val: 108
      },
      'qt': {
        val: 123
      },
      've': {
        val: 90
      },
      'dlab': {
        val: 143
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 7352
    }
  },
  {
    firstName: 'Kathleen',
    lastName: 'Hill',
    'dob': '1999-06-06',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 5,
      'activity': 'HV',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 74
      },
      'weight': {
        val: 185
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 50
      },
      'cl': {
        val: 149
      },
      'gt': {
        val: 125
      },
      'el': {
        val: 141
      },
      'mm': {
        val: 102
      },
      'qt': {
        val: 111
      },
      've': {
        val: 110
      },
      'dlab': {
        val: 161
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5526
    }
  },
  {
    firstName: 'Hallie',
    lastName: 'Schultz',
    'dob': '1999-09-10',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 8,
      'activity': 'EM',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 70
      },
      'weight': {
        val: 164
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 68
      },
      'cl': {
        val: 133
      },
      'gt': {
        val: 137
      },
      'el': {
        val: 105
      },
      'mm': {
        val: 100
      },
      'qt': {
        val: 118
      },
      've': {
        val: 106
      },
      'dlab': {
        val: 126
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2987
    }
  },
  {
    firstName: 'Porter',
    lastName: 'Bonner',
    'dob': '1996-02-16',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 19,
      'activity': 'HV',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 149
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 72
      },
      'cl': {
        val: 129
      },
      'gt': {
        val: 101
      },
      'el': {
        val: 108
      },
      'mm': {
        val: 110
      },
      'qt': {
        val: 119
      },
      've': {
        val: 92
      },
      'dlab': {
        val: 142
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3505
    }
  },
  {
    firstName: 'Santana',
    lastName: 'Finch',
    'dob': '1997-10-05',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 15,
      'activity': 'TC',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 65
      },
      'weight': {
        val: 167
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 78
      },
      'cl': {
        val: 132
      },
      'gt': {
        val: 136
      },
      'el': {
        val: 127
      },
      'mm': {
        val: 115
      },
      'qt': {
        val: 112
      },
      've': {
        val: 98
      },
      'dlab': {
        val: 164
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7156
    }
  },
  {
    firstName: 'Staci',
    lastName: 'Joyner',
    'dob': '1996-08-01',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 5,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 184
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 40
      },
      'cl': {
        val: 123
      },
      'gt': {
        val: 108
      },
      'el': {
        val: 138
      },
      'mm': {
        val: 113
      },
      'qt': {
        val: 107
      },
      've': {
        val: 107
      },
      'dlab': {
        val: 134
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2951
    }
  },
  {
    firstName: 'Bentley',
    lastName: 'Hardy',
    'dob': '1997-09-12',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 20,
      'activity': 'EM',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 62
      },
      'weight': {
        val: 163
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 75
      },
      'cl': {
        val: 138
      },
      'gt': {
        val: 109
      },
      'el': {
        val: 116
      },
      'mm': {
        val: 109
      },
      'qt': {
        val: 105
      },
      've': {
        val: 91
      },
      'dlab': {
        val: 121
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3650
    }
  },
  {
    firstName: 'Kent',
    lastName: 'Klein',
    'dob': '1994-08-15',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 17,
      'activity': 'TC',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 173
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 98
      },
      'cl': {
        val: 141
      },
      'gt': {
        val: 108
      },
      'el': {
        val: 133
      },
      'mm': {
        val: 115
      },
      'qt': {
        val: 109
      },
      've': {
        val: 93
      },
      'dlab': {
        val: 145
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3815
    }
  },
  {
    firstName: 'Rhea',
    lastName: 'Valenzuela',
    'dob': '1995-05-26',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 15,
      'activity': 'HV',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 62
      },
      'weight': {
        val: 151
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 92
      },
      'cl': {
        val: 111
      },
      'gt': {
        val: 110
      },
      'el': {
        val: 110
      },
      'mm': {
        val: 131
      },
      'qt': {
        val: 95
      },
      've': {
        val: 100
      },
      'dlab': {
        val: 160
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5247
    }
  },
  {
    firstName: 'Dennis',
    lastName: 'Butler',
    'dob': '1994-11-23',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 2,
      'activity': 'EM',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 70
      },
      'weight': {
        val: 188
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 84
      },
      'cl': {
        val: 106
      },
      'gt': {
        val: 101
      },
      'el': {
        val: 98
      },
      'mm': {
        val: 111
      },
      'qt': {
        val: 96
      },
      've': {
        val: 98
      },
      'dlab': {
        val: 122
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7004
    }
  },
  {
    firstName: 'Kitty',
    lastName: 'Soto',
    'dob': '1999-10-25',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 5,
      'activity': 'OT',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 75
      },
      'weight': {
        val: 139
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 58
      },
      'cl': {
        val: 151
      },
      'gt': {
        val: 133
      },
      'el': {
        val: 101
      },
      'mm': {
        val: 98
      },
      'qt': {
        val: 129
      },
      've': {
        val: 108
      },
      'dlab': {
        val: 141
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5153
    }
  },
  {
    firstName: 'Dina',
    lastName: 'Murray',
    'dob': '2000-08-23',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 13,
      'activity': 'TC',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 74
      },
      'weight': {
        val: 156
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 61
      },
      'cl': {
        val: 114
      },
      'gt': {
        val: 120
      },
      'el': {
        val: 133
      },
      'mm': {
        val: 120
      },
      'qt': {
        val: 128
      },
      've': {
        val: 109
      },
      'dlab': {
        val: 146
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9250
    }
  },
  {
    firstName: 'Rhonda',
    lastName: 'Farmer',
    'dob': '1995-07-06',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 8,
      'activity': 'HV',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 166
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 85
      },
      'cl': {
        val: 150
      },
      'gt': {
        val: 105
      },
      'el': {
        val: 118
      },
      'mm': {
        val: 108
      },
      'qt': {
        val: 123
      },
      've': {
        val: 103
      },
      'dlab': {
        val: 136
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9870
    }
  },
  {
    firstName: 'Knight',
    lastName: 'Bush',
    'dob': '1999-11-03',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 7,
      'activity': 'TC',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 169
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 95
      },
      'cl': {
        val: 115
      },
      'gt': {
        val: 132
      },
      'el': {
        val: 125
      },
      'mm': {
        val: 107
      },
      'qt': {
        val: 117
      },
      've': {
        val: 109
      },
      'dlab': {
        val: 150
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3942
    }
  },
  {
    firstName: 'Reyna',
    lastName: 'Gregory',
    'dob': '1999-06-05',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 6,
      'activity': 'HV',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 144
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 83
      },
      'cl': {
        val: 151
      },
      'gt': {
        val: 101
      },
      'el': {
        val: 123
      },
      'mm': {
        val: 128
      },
      'qt': {
        val: 125
      },
      've': {
        val: 97
      },
      'dlab': {
        val: 150
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3792
    }
  },
  {
    firstName: 'Loretta',
    lastName: 'Gay',
    'dob': '1995-11-12',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 16,
      'activity': 'OT',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 171
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 96
      },
      'cl': {
        val: 149
      },
      'gt': {
        val: 120
      },
      'el': {
        val: 135
      },
      'mm': {
        val: 98
      },
      'qt': {
        val: 114
      },
      've': {
        val: 93
      },
      'dlab': {
        val: 140
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4991
    }
  },
  {
    firstName: 'Althea',
    lastName: 'Boyd',
    'dob': '1996-02-18',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 18,
      'activity': 'OT',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 62
      },
      'weight': {
        val: 165
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 95
      },
      'cl': {
        val: 128
      },
      'gt': {
        val: 114
      },
      'el': {
        val: 98
      },
      'mm': {
        val: 115
      },
      'qt': {
        val: 121
      },
      've': {
        val: 99
      },
      'dlab': {
        val: 158
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: false
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5638
    }
  },
  {
    firstName: 'Ellen',
    lastName: 'Elliott',
    'dob': '1998-10-03',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 17,
      'activity': 'HV',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 158
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 83
      },
      'cl': {
        val: 116
      },
      'gt': {
        val: 115
      },
      'el': {
        val: 130
      },
      'mm': {
        val: 103
      },
      'qt': {
        val: 97
      },
      've': {
        val: 95
      },
      'dlab': {
        val: 142
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9282
    }
  },
  {
    firstName: 'Iva',
    lastName: 'Pierce',
    'dob': '1999-02-19',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 14,
      'activity': 'EM',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 165
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 54
      },
      'cl': {
        val: 116
      },
      'gt': {
        val: 114
      },
      'el': {
        val: 117
      },
      'mm': {
        val: 99
      },
      'qt': {
        val: 111
      },
      've': {
        val: 99
      },
      'dlab': {
        val: 157
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2870
    }
  },
  {
    firstName: 'Roslyn',
    lastName: 'Rich',
    'dob': '1996-05-12',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 4,
      'activity': 'HV',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 163
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 98
      },
      'cl': {
        val: 104
      },
      'gt': {
        val: 97
      },
      'el': {
        val: 131
      },
      'mm': {
        val: 119
      },
      'qt': {
        val: 96
      },
      've': {
        val: 100
      },
      'dlab': {
        val: 150
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5774
    }
  },
  {
    firstName: 'Quinn',
    lastName: 'Banks',
    'dob': '1994-03-26',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 19,
      'activity': 'EM',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 63
      },
      'weight': {
        val: 168
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 68
      },
      'cl': {
        val: 139
      },
      'gt': {
        val: 118
      },
      'el': {
        val: 111
      },
      'mm': {
        val: 119
      },
      'qt': {
        val: 131
      },
      've': {
        val: 99
      },
      'dlab': {
        val: 145
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9576
    }
  },
  {
    firstName: 'Hilda',
    lastName: 'Castillo',
    'dob': '1994-06-04',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 13,
      'activity': 'HV',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 140
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 69
      },
      'cl': {
        val: 101
      },
      'gt': {
        val: 136
      },
      'el': {
        val: 103
      },
      'mm': {
        val: 102
      },
      'qt': {
        val: 127
      },
      've': {
        val: 100
      },
      'dlab': {
        val: 142
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1577
    }
  },
  {
    firstName: 'Alicia',
    lastName: 'Callahan',
    'dob': '1994-09-20',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 17,
      'activity': 'TC',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 154
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 61
      },
      'cl': {
        val: 116
      },
      'gt': {
        val: 111
      },
      'el': {
        val: 121
      },
      'mm': {
        val: 95
      },
      'qt': {
        val: 124
      },
      've': {
        val: 109
      },
      'dlab': {
        val: 137
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9187
    }
  },
  {
    firstName: 'Roberts',
    lastName: 'Delgado',
    'dob': '1996-05-28',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 12,
      'activity': 'TC',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 75
      },
      'weight': {
        val: 157
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 81
      },
      'cl': {
        val: 145
      },
      'gt': {
        val: 138
      },
      'el': {
        val: 124
      },
      'mm': {
        val: 131
      },
      'qt': {
        val: 118
      },
      've': {
        val: 91
      },
      'dlab': {
        val: 164
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6070
    }
  },
  {
    firstName: 'Whitney',
    lastName: 'Bass',
    'dob': '2000-01-19',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 13,
      'activity': 'EM',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 176
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 99
      },
      'cl': {
        val: 102
      },
      'gt': {
        val: 107
      },
      'el': {
        val: 106
      },
      'mm': {
        val: 130
      },
      'qt': {
        val: 95
      },
      've': {
        val: 108
      },
      'dlab': {
        val: 157
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5224
    }
  },
  {
    firstName: 'Mccoy',
    lastName: 'Wiley',
    'dob': '1999-09-29',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 5,
      'activity': 'EM',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 64
      },
      'weight': {
        val: 187
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 60
      },
      'cl': {
        val: 133
      },
      'gt': {
        val: 103
      },
      'el': {
        val: 115
      },
      'mm': {
        val: 107
      },
      'qt': {
        val: 119
      },
      've': {
        val: 93
      },
      'dlab': {
        val: 163
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6972
    }
  },
  {
    firstName: 'Yesenia',
    lastName: 'Horton',
    'dob': '1995-03-16',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 4,
      'activity': 'TC',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 62
      },
      'weight': {
        val: 143
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 76
      },
      'cl': {
        val: 113
      },
      'gt': {
        val: 135
      },
      'el': {
        val: 118
      },
      'mm': {
        val: 105
      },
      'qt': {
        val: 111
      },
      've': {
        val: 110
      },
      'dlab': {
        val: 157
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2111
    }
  },
  {
    firstName: 'Lula',
    lastName: 'Snider',
    'dob': '1998-07-29',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 6,
      'activity': 'OT',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 141
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 86
      },
      'cl': {
        val: 117
      },
      'gt': {
        val: 117
      },
      'el': {
        val: 95
      },
      'mm': {
        val: 103
      },
      'qt': {
        val: 123
      },
      've': {
        val: 106
      },
      'dlab': {
        val: 138
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3015
    }
  },
  {
    firstName: 'Marjorie',
    lastName: 'Solis',
    'dob': '1997-06-22',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 15,
      'activity': 'OT',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 65
      },
      'weight': {
        val: 158
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 52
      },
      'cl': {
        val: 123
      },
      'gt': {
        val: 124
      },
      'el': {
        val: 138
      },
      'mm': {
        val: 126
      },
      'qt': {
        val: 106
      },
      've': {
        val: 96
      },
      'dlab': {
        val: 163
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4747
    }
  },
  {
    firstName: 'Petty',
    lastName: 'Tyler',
    'dob': '1998-10-20',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 15,
      'activity': 'HV',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 75
      },
      'weight': {
        val: 181
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 58
      },
      'cl': {
        val: 136
      },
      'gt': {
        val: 116
      },
      'el': {
        val: 141
      },
      'mm': {
        val: 129
      },
      'qt': {
        val: 110
      },
      've': {
        val: 95
      },
      'dlab': {
        val: 153
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4288
    }
  },
  {
    firstName: 'Stone',
    lastName: 'Abbott',
    'dob': '1999-02-23',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 1,
      'activity': 'OT',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 159
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 81
      },
      'cl': {
        val: 120
      },
      'gt': {
        val: 96
      },
      'el': {
        val: 131
      },
      'mm': {
        val: 104
      },
      'qt': {
        val: 102
      },
      've': {
        val: 101
      },
      'dlab': {
        val: 148
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5958
    }
  },
  {
    firstName: 'Rollins',
    lastName: 'Wolf',
    'dob': '1998-01-15',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 7,
      'activity': 'TC',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 165
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 68
      },
      'cl': {
        val: 145
      },
      'gt': {
        val: 96
      },
      'el': {
        val: 104
      },
      'mm': {
        val: 108
      },
      'qt': {
        val: 110
      },
      've': {
        val: 107
      },
      'dlab': {
        val: 156
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7865
    }
  },
  {
    firstName: 'Mattie',
    lastName: 'Logan',
    'dob': '1994-07-06',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 0,
      'activity': 'OT',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 67
      },
      'weight': {
        val: 183
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 42
      },
      'cl': {
        val: 147
      },
      'gt': {
        val: 116
      },
      'el': {
        val: 118
      },
      'mm': {
        val: 128
      },
      'qt': {
        val: 109
      },
      've': {
        val: 97
      },
      'dlab': {
        val: 161
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7711
    }
  },
  {
    firstName: 'Selma',
    lastName: 'Guerra',
    'dob': '1997-07-24',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 17,
      'activity': 'EM',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 74
      },
      'weight': {
        val: 146
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 48
      },
      'cl': {
        val: 146
      },
      'gt': {
        val: 120
      },
      'el': {
        val: 116
      },
      'mm': {
        val: 105
      },
      'qt': {
        val: 130
      },
      've': {
        val: 95
      },
      'dlab': {
        val: 142
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9649
    }
  },
  {
    firstName: 'Cantrell',
    lastName: 'Gallegos',
    'dob': '2000-03-11',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 12,
      'activity': 'EM',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 141
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 74
      },
      'cl': {
        val: 102
      },
      'gt': {
        val: 111
      },
      'el': {
        val: 124
      },
      'mm': {
        val: 120
      },
      'qt': {
        val: 122
      },
      've': {
        val: 104
      },
      'dlab': {
        val: 159
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7873
    }
  },
  {
    firstName: 'Morton',
    lastName: 'Marshall',
    'dob': '1995-04-14',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 12,
      'activity': 'TC',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 65
      },
      'weight': {
        val: 175
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 80
      },
      'cl': {
        val: 138
      },
      'gt': {
        val: 120
      },
      'el': {
        val: 134
      },
      'mm': {
        val: 117
      },
      'qt': {
        val: 126
      },
      've': {
        val: 101
      },
      'dlab': {
        val: 117
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8728
    }
  },
  {
    firstName: 'Burns',
    lastName: 'Weber',
    'dob': '1996-06-09',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 15,
      'activity': 'HV',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 75
      },
      'weight': {
        val: 172
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 52
      },
      'cl': {
        val: 145
      },
      'gt': {
        val: 105
      },
      'el': {
        val: 96
      },
      'mm': {
        val: 120
      },
      'qt': {
        val: 108
      },
      've': {
        val: 103
      },
      'dlab': {
        val: 125
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4436
    }
  },
  {
    firstName: 'Kim',
    lastName: 'Wallace',
    'dob': '1997-10-29',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 6,
      'activity': 'OT',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 65
      },
      'weight': {
        val: 154
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 69
      },
      'cl': {
        val: 116
      },
      'gt': {
        val: 129
      },
      'el': {
        val: 99
      },
      'mm': {
        val: 100
      },
      'qt': {
        val: 105
      },
      've': {
        val: 100
      },
      'dlab': {
        val: 135
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8882
    }
  },
  {
    firstName: 'Lelia',
    lastName: 'Hendricks',
    'dob': '1998-09-25',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 8,
      'activity': 'EM',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 63
      },
      'weight': {
        val: 147
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 60
      },
      'cl': {
        val: 151
      },
      'gt': {
        val: 126
      },
      'el': {
        val: 127
      },
      'mm': {
        val: 126
      },
      'qt': {
        val: 97
      },
      've': {
        val: 95
      },
      'dlab': {
        val: 145
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3636
    }
  },
  {
    firstName: 'Augusta',
    lastName: 'Gilliam',
    'dob': '1995-01-03',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 20,
      'activity': 'HV',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 169
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 93
      },
      'cl': {
        val: 142
      },
      'gt': {
        val: 117
      },
      'el': {
        val: 109
      },
      'mm': {
        val: 113
      },
      'qt': {
        val: 123
      },
      've': {
        val: 99
      },
      'dlab': {
        val: 149
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6354
    }
  },
  {
    firstName: 'Chen',
    lastName: 'Knight',
    'dob': '1998-09-23',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 19,
      'activity': 'EM',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 74
      },
      'weight': {
        val: 164
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 62
      },
      'cl': {
        val: 151
      },
      'gt': {
        val: 114
      },
      'el': {
        val: 123
      },
      'mm': {
        val: 105
      },
      'qt': {
        val: 108
      },
      've': {
        val: 101
      },
      'dlab': {
        val: 164
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7087
    }
  },
  {
    firstName: 'Joann',
    lastName: 'Hutchinson',
    'dob': '1997-10-19',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 5,
      'activity': 'EM',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 177
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 46
      },
      'cl': {
        val: 107
      },
      'gt': {
        val: 140
      },
      'el': {
        val: 108
      },
      'mm': {
        val: 107
      },
      'qt': {
        val: 106
      },
      've': {
        val: 100
      },
      'dlab': {
        val: 147
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7094
    }
  },
  {
    firstName: 'Claudine',
    lastName: 'Perry',
    'dob': '2000-12-25',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 7,
      'activity': 'TC',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 181
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 67
      },
      'cl': {
        val: 102
      },
      'gt': {
        val: 110
      },
      'el': {
        val: 117
      },
      'mm': {
        val: 106
      },
      'qt': {
        val: 119
      },
      've': {
        val: 90
      },
      'dlab': {
        val: 163
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1199
    }
  },
  {
    firstName: 'Violet',
    lastName: 'Snyder',
    'dob': '1997-05-30',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 13,
      'activity': 'HV',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 186
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 51
      },
      'cl': {
        val: 148
      },
      'gt': {
        val: 115
      },
      'el': {
        val: 107
      },
      'mm': {
        val: 117
      },
      'qt': {
        val: 104
      },
      've': {
        val: 106
      },
      'dlab': {
        val: 150
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7378
    }
  },
  {
    firstName: 'Evangelina',
    lastName: 'Gilmore',
    'dob': '1995-12-17',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 5,
      'activity': 'EM',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 63
      },
      'weight': {
        val: 137
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 47
      },
      'cl': {
        val: 103
      },
      'gt': {
        val: 120
      },
      'el': {
        val: 95
      },
      'mm': {
        val: 105
      },
      'qt': {
        val: 110
      },
      've': {
        val: 92
      },
      'dlab': {
        val: 120
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5090
    }
  },
  {
    firstName: 'Alissa',
    lastName: 'Ewing',
    'dob': '1995-02-23',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 4,
      'activity': 'OT',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 65
      },
      'weight': {
        val: 175
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 69
      },
      'cl': {
        val: 134
      },
      'gt': {
        val: 116
      },
      'el': {
        val: 104
      },
      'mm': {
        val: 97
      },
      'qt': {
        val: 98
      },
      've': {
        val: 98
      },
      'dlab': {
        val: 129
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5062
    }
  },
  {
    firstName: 'Imogene',
    lastName: 'Yang',
    'dob': '1998-11-24',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 18,
      'activity': 'TC',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 178
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 47
      },
      'cl': {
        val: 120
      },
      'gt': {
        val: 95
      },
      'el': {
        val: 122
      },
      'mm': {
        val: 95
      },
      'qt': {
        val: 108
      },
      've': {
        val: 106
      },
      'dlab': {
        val: 163
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3019
    }
  },
  {
    firstName: 'Frieda',
    lastName: 'Kent',
    'dob': '1995-07-23',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 18,
      'activity': 'TC',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 159
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 42
      },
      'cl': {
        val: 107
      },
      'gt': {
        val: 129
      },
      'el': {
        val: 141
      },
      'mm': {
        val: 103
      },
      'qt': {
        val: 125
      },
      've': {
        val: 110
      },
      'dlab': {
        val: 133
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8663
    }
  },
  {
    firstName: 'Maddox',
    lastName: 'Stone',
    'dob': '1997-04-21',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 19,
      'activity': 'EM',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 147
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 79
      },
      'cl': {
        val: 113
      },
      'gt': {
        val: 97
      },
      'el': {
        val: 100
      },
      'mm': {
        val: 114
      },
      'qt': {
        val: 129
      },
      've': {
        val: 108
      },
      'dlab': {
        val: 148
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2200
    }
  },
  {
    firstName: 'Jana',
    lastName: 'Mcguire',
    'dob': '1998-06-08',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 14,
      'activity': 'TC',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 147
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 72
      },
      'cl': {
        val: 131
      },
      'gt': {
        val: 99
      },
      'el': {
        val: 135
      },
      'mm': {
        val: 123
      },
      'qt': {
        val: 131
      },
      've': {
        val: 95
      },
      'dlab': {
        val: 127
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3325
    }
  },
  {
    firstName: 'Deleon',
    lastName: 'Aguilar',
    'dob': '2000-06-29',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 14,
      'activity': 'EM',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 64
      },
      'weight': {
        val: 145
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 99
      },
      'cl': {
        val: 144
      },
      'gt': {
        val: 133
      },
      'el': {
        val: 127
      },
      'mm': {
        val: 127
      },
      'qt': {
        val: 113
      },
      've': {
        val: 107
      },
      'dlab': {
        val: 136
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7320
    }
  },
  {
    firstName: 'Stella',
    lastName: 'Wiggins',
    'dob': '1994-05-03',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 18,
      'activity': 'TC',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 155
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 90
      },
      'cl': {
        val: 108
      },
      'gt': {
        val: 139
      },
      'el': {
        val: 105
      },
      'mm': {
        val: 97
      },
      'qt': {
        val: 114
      },
      've': {
        val: 106
      },
      'dlab': {
        val: 125
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 7100
    }
  },
  {
    firstName: 'Bush',
    lastName: 'Rush',
    'dob': '1997-05-16',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 19,
      'activity': 'OT',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 62
      },
      'weight': {
        val: 175
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 63
      },
      'cl': {
        val: 118
      },
      'gt': {
        val: 119
      },
      'el': {
        val: 129
      },
      'mm': {
        val: 123
      },
      'qt': {
        val: 111
      },
      've': {
        val: 98
      },
      'dlab': {
        val: 154
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3693
    }
  },
  {
    firstName: 'Isabelle',
    lastName: 'Hyde',
    'dob': '1997-05-16',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 19,
      'activity': 'TC',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 172
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 96
      },
      'cl': {
        val: 122
      },
      'gt': {
        val: 127
      },
      'el': {
        val: 126
      },
      'mm': {
        val: 110
      },
      'qt': {
        val: 119
      },
      've': {
        val: 95
      },
      'dlab': {
        val: 153
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9286
    }
  },
  {
    firstName: 'Lee',
    lastName: 'Buckner',
    'dob': '1994-12-12',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 13,
      'activity': 'HV',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 75
      },
      'weight': {
        val: 181
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 60
      },
      'cl': {
        val: 139
      },
      'gt': {
        val: 116
      },
      'el': {
        val: 109
      },
      'mm': {
        val: 110
      },
      'qt': {
        val: 118
      },
      've': {
        val: 110
      },
      'dlab': {
        val: 156
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1708
    }
  },
  {
    firstName: 'Queen',
    lastName: 'Compton',
    'dob': '1994-11-07',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 1,
      'activity': 'EM',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 74
      },
      'weight': {
        val: 162
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 41
      },
      'cl': {
        val: 149
      },
      'gt': {
        val: 131
      },
      'el': {
        val: 125
      },
      'mm': {
        val: 102
      },
      'qt': {
        val: 107
      },
      've': {
        val: 107
      },
      'dlab': {
        val: 117
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7325
    }
  },
  {
    firstName: 'Cherry',
    lastName: 'Roy',
    'dob': '1998-07-27',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 8,
      'activity': 'EM',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 140
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 74
      },
      'cl': {
        val: 114
      },
      'gt': {
        val: 113
      },
      'el': {
        val: 126
      },
      'mm': {
        val: 105
      },
      'qt': {
        val: 110
      },
      've': {
        val: 90
      },
      'dlab': {
        val: 152
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1540
    }
  },
  {
    firstName: 'Lawrence',
    lastName: 'Chapman',
    'dob': '1994-09-14',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 0,
      'activity': 'TC',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 65
      },
      'weight': {
        val: 148
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 66
      },
      'cl': {
        val: 119
      },
      'gt': {
        val: 112
      },
      'el': {
        val: 131
      },
      'mm': {
        val: 97
      },
      'qt': {
        val: 120
      },
      've': {
        val: 93
      },
      'dlab': {
        val: 145
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9995
    }
  },
  {
    firstName: 'Luella',
    lastName: 'Benjamin',
    'dob': '2000-04-20',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 18,
      'activity': 'OT',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 143
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 82
      },
      'cl': {
        val: 116
      },
      'gt': {
        val: 105
      },
      'el': {
        val: 106
      },
      'mm': {
        val: 98
      },
      'qt': {
        val: 127
      },
      've': {
        val: 110
      },
      'dlab': {
        val: 157
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7727
    }
  },
  {
    firstName: 'Duncan',
    lastName: 'Franklin',
    'dob': '1996-02-18',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 9,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 147
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 60
      },
      'cl': {
        val: 125
      },
      'gt': {
        val: 116
      },
      'el': {
        val: 101
      },
      'mm': {
        val: 117
      },
      'qt': {
        val: 99
      },
      've': {
        val: 101
      },
      'dlab': {
        val: 134
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9123
    }
  },
  {
    firstName: 'Marks',
    lastName: 'Cummings',
    'dob': '1997-02-06',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 5,
      'activity': 'EM',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 62
      },
      'weight': {
        val: 156
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 71
      },
      'cl': {
        val: 145
      },
      'gt': {
        val: 97
      },
      'el': {
        val: 131
      },
      'mm': {
        val: 127
      },
      'qt': {
        val: 97
      },
      've': {
        val: 109
      },
      'dlab': {
        val: 157
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5059
    }
  },
  {
    firstName: 'Tia',
    lastName: 'Huff',
    'dob': '1996-07-24',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 9,
      'activity': 'OT',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 62
      },
      'weight': {
        val: 184
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 78
      },
      'cl': {
        val: 128
      },
      'gt': {
        val: 139
      },
      'el': {
        val: 100
      },
      'mm': {
        val: 112
      },
      'qt': {
        val: 125
      },
      've': {
        val: 101
      },
      'dlab': {
        val: 139
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1125
    }
  },
  {
    firstName: 'Dorsey',
    lastName: 'Durham',
    'dob': '1998-10-17',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 7,
      'activity': 'TC',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 62
      },
      'weight': {
        val: 175
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 77
      },
      'cl': {
        val: 133
      },
      'gt': {
        val: 131
      },
      'el': {
        val: 119
      },
      'mm': {
        val: 97
      },
      'qt': {
        val: 109
      },
      've': {
        val: 110
      },
      'dlab': {
        val: 117
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6317
    }
  },
  {
    firstName: 'Fitzpatrick',
    lastName: 'Hines',
    'dob': '1998-12-26',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 20,
      'activity': 'TC',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 165
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 77
      },
      'cl': {
        val: 140
      },
      'gt': {
        val: 112
      },
      'el': {
        val: 129
      },
      'mm': {
        val: 96
      },
      'qt': {
        val: 97
      },
      've': {
        val: 105
      },
      'dlab': {
        val: 132
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6003
    }
  },
  {
    firstName: 'Miranda',
    lastName: 'Holder',
    'dob': '1994-05-29',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 2,
      'activity': 'HV',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 75
      },
      'weight': {
        val: 172
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 62
      },
      'cl': {
        val: 150
      },
      'gt': {
        val: 117
      },
      'el': {
        val: 133
      },
      'mm': {
        val: 95
      },
      'qt': {
        val: 104
      },
      've': {
        val: 99
      },
      'dlab': {
        val: 128
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6882
    }
  },
  {
    firstName: 'Pickett',
    lastName: 'Small',
    'dob': '1997-06-06',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 1,
      'activity': 'OT',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 67
      },
      'weight': {
        val: 188
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 79
      },
      'cl': {
        val: 132
      },
      'gt': {
        val: 104
      },
      'el': {
        val: 124
      },
      'mm': {
        val: 117
      },
      'qt': {
        val: 129
      },
      've': {
        val: 99
      },
      'dlab': {
        val: 119
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6176
    }
  },
  {
    firstName: 'Eaton',
    lastName: 'Shepherd',
    'dob': '1998-11-25',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 8,
      'activity': 'HV',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 142
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 40
      },
      'cl': {
        val: 108
      },
      'gt': {
        val: 110
      },
      'el': {
        val: 126
      },
      'mm': {
        val: 108
      },
      'qt': {
        val: 100
      },
      've': {
        val: 95
      },
      'dlab': {
        val: 116
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4879
    }
  },
  {
    firstName: 'Barry',
    lastName: 'Conrad',
    'dob': '1996-04-18',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 14,
      'activity': 'OT',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 64
      },
      'weight': {
        val: 137
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 86
      },
      'cl': {
        val: 112
      },
      'gt': {
        val: 105
      },
      'el': {
        val: 114
      },
      'mm': {
        val: 116
      },
      'qt': {
        val: 131
      },
      've': {
        val: 90
      },
      'dlab': {
        val: 149
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8656
    }
  },
  {
    firstName: 'Lorraine',
    lastName: 'Espinoza',
    'dob': '1998-06-06',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 7,
      'activity': 'OT',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 146
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 60
      },
      'cl': {
        val: 138
      },
      'gt': {
        val: 114
      },
      'el': {
        val: 135
      },
      'mm': {
        val: 121
      },
      'qt': {
        val: 129
      },
      've': {
        val: 107
      },
      'dlab': {
        val: 149
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6967
    }
  },
  {
    firstName: 'Bean',
    lastName: 'Stevens',
    'dob': '2000-10-23',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 11,
      'activity': 'EM',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 143
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 52
      },
      'cl': {
        val: 120
      },
      'gt': {
        val: 96
      },
      'el': {
        val: 116
      },
      'mm': {
        val: 125
      },
      'qt': {
        val: 119
      },
      've': {
        val: 104
      },
      'dlab': {
        val: 161
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6598
    }
  },
  {
    firstName: 'Mcknight',
    lastName: 'Howard',
    'dob': '2000-07-02',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 13,
      'activity': 'EM',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 67
      },
      'weight': {
        val: 171
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 66
      },
      'cl': {
        val: 131
      },
      'gt': {
        val: 96
      },
      'el': {
        val: 104
      },
      'mm': {
        val: 115
      },
      'qt': {
        val: 122
      },
      've': {
        val: 107
      },
      'dlab': {
        val: 146
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8232
    }
  },
  {
    firstName: 'Aida',
    lastName: 'Rojas',
    'dob': '1994-06-16',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 13,
      'activity': 'TC',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 149
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 60
      },
      'cl': {
        val: 123
      },
      'gt': {
        val: 117
      },
      'el': {
        val: 119
      },
      'mm': {
        val: 123
      },
      'qt': {
        val: 105
      },
      've': {
        val: 103
      },
      'dlab': {
        val: 152
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6607
    }
  },
  {
    firstName: 'Jacobs',
    lastName: 'Moore',
    'dob': '1997-04-20',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 19,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 163
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 60
      },
      'cl': {
        val: 148
      },
      'gt': {
        val: 134
      },
      'el': {
        val: 110
      },
      'mm': {
        val: 109
      },
      'qt': {
        val: 100
      },
      've': {
        val: 99
      },
      'dlab': {
        val: 139
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9815
    }
  },
  {
    firstName: 'Evangeline',
    lastName: 'Pickett',
    'dob': '1997-12-28',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 10,
      'activity': 'OT',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 75
      },
      'weight': {
        val: 171
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 93
      },
      'cl': {
        val: 142
      },
      'gt': {
        val: 114
      },
      'el': {
        val: 112
      },
      'mm': {
        val: 109
      },
      'qt': {
        val: 114
      },
      've': {
        val: 94
      },
      'dlab': {
        val: 116
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: false
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4012
    }
  },
  {
    firstName: 'Latoya',
    lastName: 'Erickson',
    'dob': '1998-09-08',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 4,
      'activity': 'HV',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 75
      },
      'weight': {
        val: 182
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 91
      },
      'cl': {
        val: 134
      },
      'gt': {
        val: 138
      },
      'el': {
        val: 131
      },
      'mm': {
        val: 125
      },
      'qt': {
        val: 119
      },
      've': {
        val: 91
      },
      'dlab': {
        val: 157
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5001
    }
  },
  {
    firstName: 'Young',
    lastName: 'Wilkins',
    'dob': '2000-04-29',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 4,
      'activity': 'TC',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 179
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 78
      },
      'cl': {
        val: 108
      },
      'gt': {
        val: 140
      },
      'el': {
        val: 119
      },
      'mm': {
        val: 128
      },
      'qt': {
        val: 118
      },
      've': {
        val: 110
      },
      'dlab': {
        val: 157
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3316
    }
  },
  {
    firstName: 'Simpson',
    lastName: 'Good',
    'dob': '1994-11-24',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 1,
      'activity': 'OT',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 146
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 57
      },
      'cl': {
        val: 137
      },
      'gt': {
        val: 118
      },
      'el': {
        val: 121
      },
      'mm': {
        val: 129
      },
      'qt': {
        val: 100
      },
      've': {
        val: 110
      },
      'dlab': {
        val: 157
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9327
    }
  },
  {
    firstName: 'Clayton',
    lastName: 'Holcomb',
    'dob': '1994-04-16',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 15,
      'activity': 'HV',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 177
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 76
      },
      'cl': {
        val: 135
      },
      'gt': {
        val: 101
      },
      'el': {
        val: 123
      },
      'mm': {
        val: 106
      },
      'qt': {
        val: 130
      },
      've': {
        val: 109
      },
      'dlab': {
        val: 150
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1488
    }
  },
  {
    firstName: 'Alexandra',
    lastName: 'Lewis',
    'dob': '1999-08-14',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 10,
      'activity': 'HV',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 63
      },
      'weight': {
        val: 152
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 60
      },
      'cl': {
        val: 142
      },
      'gt': {
        val: 139
      },
      'el': {
        val: 109
      },
      'mm': {
        val: 102
      },
      'qt': {
        val: 118
      },
      've': {
        val: 94
      },
      'dlab': {
        val: 122
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9387
    }
  },
  {
    firstName: 'Etta',
    lastName: 'Riley',
    'dob': '1997-01-19',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 15,
      'activity': 'OT',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 158
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 61
      },
      'cl': {
        val: 136
      },
      'gt': {
        val: 122
      },
      'el': {
        val: 134
      },
      'mm': {
        val: 112
      },
      'qt': {
        val: 118
      },
      've': {
        val: 104
      },
      'dlab': {
        val: 126
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9756
    }
  },
  {
    firstName: 'Nadia',
    lastName: 'Sharp',
    'dob': '1998-03-30',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 9,
      'activity': 'HV',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 160
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 49
      },
      'cl': {
        val: 150
      },
      'gt': {
        val: 135
      },
      'el': {
        val: 101
      },
      'mm': {
        val: 106
      },
      'qt': {
        val: 126
      },
      've': {
        val: 103
      },
      'dlab': {
        val: 132
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8796
    }
  },
  {
    firstName: 'Blanca',
    lastName: 'Mooney',
    'dob': '1994-09-05',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 6,
      'activity': 'OT',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 172
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 68
      },
      'cl': {
        val: 135
      },
      'gt': {
        val: 106
      },
      'el': {
        val: 97
      },
      'mm': {
        val: 97
      },
      'qt': {
        val: 123
      },
      've': {
        val: 91
      },
      'dlab': {
        val: 123
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5035
    }
  },
  {
    firstName: 'Velasquez',
    lastName: 'Hunt',
    'dob': '2000-03-20',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 1,
      'activity': 'OT',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 65
      },
      'weight': {
        val: 143
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 47
      },
      'cl': {
        val: 144
      },
      'gt': {
        val: 131
      },
      'el': {
        val: 112
      },
      'mm': {
        val: 107
      },
      'qt': {
        val: 118
      },
      've': {
        val: 94
      },
      'dlab': {
        val: 143
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6699
    }
  },
  {
    firstName: 'Brittany',
    lastName: 'Walsh',
    'dob': '2000-01-10',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 14,
      'activity': 'TC',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 62
      },
      'weight': {
        val: 140
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 91
      },
      'cl': {
        val: 146
      },
      'gt': {
        val: 113
      },
      'el': {
        val: 97
      },
      'mm': {
        val: 122
      },
      'qt': {
        val: 127
      },
      've': {
        val: 106
      },
      'dlab': {
        val: 160
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5307
    }
  },
  {
    firstName: 'Sharlene',
    lastName: 'David',
    'dob': '1998-09-09',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 1,
      'activity': 'HV',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 70
      },
      'weight': {
        val: 176
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 97
      },
      'cl': {
        val: 139
      },
      'gt': {
        val: 136
      },
      'el': {
        val: 123
      },
      'mm': {
        val: 118
      },
      'qt': {
        val: 107
      },
      've': {
        val: 94
      },
      'dlab': {
        val: 151
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3239
    }
  },
  {
    firstName: 'Audrey',
    lastName: 'West',
    'dob': '1995-03-19',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 20,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 158
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 43
      },
      'cl': {
        val: 139
      },
      'gt': {
        val: 95
      },
      'el': {
        val: 103
      },
      'mm': {
        val: 101
      },
      'qt': {
        val: 128
      },
      've': {
        val: 104
      },
      'dlab': {
        val: 131
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2864
    }
  },
  {
    firstName: 'Gail',
    lastName: 'Brooks',
    'dob': '2000-10-29',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 17,
      'activity': 'TC',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 74
      },
      'weight': {
        val: 183
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 88
      },
      'cl': {
        val: 143
      },
      'gt': {
        val: 137
      },
      'el': {
        val: 116
      },
      'mm': {
        val: 101
      },
      'qt': {
        val: 128
      },
      've': {
        val: 94
      },
      'dlab': {
        val: 159
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 3549
    }
  },
  {
    firstName: 'Hancock',
    lastName: 'Tyson',
    'dob': '1995-08-26',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 9,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 167
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 40
      },
      'cl': {
        val: 116
      },
      'gt': {
        val: 115
      },
      'el': {
        val: 104
      },
      'mm': {
        val: 106
      },
      'qt': {
        val: 102
      },
      've': {
        val: 105
      },
      'dlab': {
        val: 118
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9231
    }
  },
  {
    firstName: 'Baldwin',
    lastName: 'Cervantes',
    'dob': '1994-07-22',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 1,
      'activity': 'EM',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 63
      },
      'weight': {
        val: 169
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 92
      },
      'cl': {
        val: 151
      },
      'gt': {
        val: 97
      },
      'el': {
        val: 125
      },
      'mm': {
        val: 129
      },
      'qt': {
        val: 103
      },
      've': {
        val: 104
      },
      'dlab': {
        val: 155
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2333
    }
  },
  {
    firstName: 'Henderson',
    lastName: 'Fuller',
    'dob': '1994-04-03',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 16,
      'activity': 'OT',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 160
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 44
      },
      'cl': {
        val: 147
      },
      'gt': {
        val: 140
      },
      'el': {
        val: 126
      },
      'mm': {
        val: 100
      },
      'qt': {
        val: 123
      },
      've': {
        val: 107
      },
      'dlab': {
        val: 115
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7940
    }
  },
  {
    firstName: 'Whitney',
    lastName: 'Burns',
    'dob': '1996-11-19',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 4,
      'activity': 'EM',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 67
      },
      'weight': {
        val: 139
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 48
      },
      'cl': {
        val: 128
      },
      'gt': {
        val: 108
      },
      'el': {
        val: 138
      },
      'mm': {
        val: 99
      },
      'qt': {
        val: 107
      },
      've': {
        val: 104
      },
      'dlab': {
        val: 131
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6436
    }
  },
  {
    firstName: 'Bates',
    lastName: 'Ratliff',
    'dob': '1998-01-21',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 20,
      'activity': 'TC',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 175
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 50
      },
      'cl': {
        val: 101
      },
      'gt': {
        val: 123
      },
      'el': {
        val: 122
      },
      'mm': {
        val: 124
      },
      'qt': {
        val: 98
      },
      've': {
        val: 98
      },
      'dlab': {
        val: 125
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5596
    }
  },
  {
    firstName: 'Wilder',
    lastName: 'Cherry',
    'dob': '1998-01-26',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 5,
      'activity': 'HV',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 70
      },
      'weight': {
        val: 159
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 42
      },
      'cl': {
        val: 146
      },
      'gt': {
        val: 123
      },
      'el': {
        val: 137
      },
      'mm': {
        val: 111
      },
      'qt': {
        val: 96
      },
      've': {
        val: 102
      },
      'dlab': {
        val: 151
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4934
    }
  },
  {
    firstName: 'Hendricks',
    lastName: 'Howell',
    'dob': '1997-06-01',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 2,
      'activity': 'HV',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 70
      },
      'weight': {
        val: 188
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 65
      },
      'cl': {
        val: 126
      },
      'gt': {
        val: 137
      },
      'el': {
        val: 121
      },
      'mm': {
        val: 116
      },
      'qt': {
        val: 102
      },
      've': {
        val: 108
      },
      'dlab': {
        val: 151
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7366
    }
  },
  {
    firstName: 'Woods',
    lastName: 'Cruz',
    'dob': '1998-09-11',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 0,
      'activity': 'HV',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 62
      },
      'weight': {
        val: 139
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 58
      },
      'cl': {
        val: 109
      },
      'gt': {
        val: 133
      },
      'el': {
        val: 104
      },
      'mm': {
        val: 117
      },
      'qt': {
        val: 117
      },
      've': {
        val: 105
      },
      'dlab': {
        val: 122
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 7697
    }
  },
  {
    firstName: 'Bessie',
    lastName: 'Dillon',
    'dob': '1998-01-16',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 12,
      'activity': 'TC',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 67
      },
      'weight': {
        val: 176
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 56
      },
      'cl': {
        val: 102
      },
      'gt': {
        val: 105
      },
      'el': {
        val: 120
      },
      'mm': {
        val: 129
      },
      'qt': {
        val: 129
      },
      've': {
        val: 100
      },
      'dlab': {
        val: 135
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4517
    }
  },
  {
    firstName: 'Pansy',
    lastName: 'William',
    'dob': '2000-04-23',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 5,
      'activity': 'EM',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 64
      },
      'weight': {
        val: 171
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 83
      },
      'cl': {
        val: 120
      },
      'gt': {
        val: 121
      },
      'el': {
        val: 99
      },
      'mm': {
        val: 123
      },
      'qt': {
        val: 124
      },
      've': {
        val: 98
      },
      'dlab': {
        val: 150
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8112
    }
  },
  {
    firstName: 'Arlene',
    lastName: 'Camacho',
    'dob': '1994-05-31',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 20,
      'activity': 'TC',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 163
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 84
      },
      'cl': {
        val: 148
      },
      'gt': {
        val: 123
      },
      'el': {
        val: 113
      },
      'mm': {
        val: 103
      },
      'qt': {
        val: 121
      },
      've': {
        val: 106
      },
      'dlab': {
        val: 129
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 8655
    }
  },
  {
    firstName: 'Knowles',
    lastName: 'Charles',
    'dob': '1995-09-18',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 15,
      'activity': 'OT',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 65
      },
      'weight': {
        val: 169
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 45
      },
      'cl': {
        val: 130
      },
      'gt': {
        val: 107
      },
      'el': {
        val: 122
      },
      'mm': {
        val: 118
      },
      'qt': {
        val: 104
      },
      've': {
        val: 91
      },
      'dlab': {
        val: 124
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1147
    }
  },
  {
    firstName: 'Mccall',
    lastName: 'White',
    'dob': '1996-04-28',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 5,
      'activity': 'EM',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 65
      },
      'weight': {
        val: 172
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 63
      },
      'cl': {
        val: 105
      },
      'gt': {
        val: 140
      },
      'el': {
        val: 126
      },
      'mm': {
        val: 116
      },
      'qt': {
        val: 120
      },
      've': {
        val: 92
      },
      'dlab': {
        val: 150
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8252
    }
  },
  {
    firstName: 'Jacquelyn',
    lastName: 'Aguirre',
    'dob': '1998-11-14',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 9,
      'activity': 'OT',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 148
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 50
      },
      'cl': {
        val: 119
      },
      'gt': {
        val: 135
      },
      'el': {
        val: 106
      },
      'mm': {
        val: 120
      },
      'qt': {
        val: 106
      },
      've': {
        val: 103
      },
      'dlab': {
        val: 164
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2734
    }
  },
  {
    firstName: 'Mckee',
    lastName: 'Bruce',
    'dob': '1996-09-29',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 4,
      'activity': 'OT',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 67
      },
      'weight': {
        val: 155
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 45
      },
      'cl': {
        val: 116
      },
      'gt': {
        val: 128
      },
      'el': {
        val: 138
      },
      'mm': {
        val: 121
      },
      'qt': {
        val: 109
      },
      've': {
        val: 102
      },
      'dlab': {
        val: 162
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7894
    }
  },
  {
    firstName: 'Frederick',
    lastName: 'Stevenson',
    'dob': '1994-07-28',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 6,
      'activity': 'EM',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 155
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 85
      },
      'cl': {
        val: 145
      },
      'gt': {
        val: 118
      },
      'el': {
        val: 131
      },
      'mm': {
        val: 113
      },
      'qt': {
        val: 129
      },
      've': {
        val: 109
      },
      'dlab': {
        val: 129
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2737
    }
  },
  {
    firstName: 'Jasmine',
    lastName: 'Noble',
    'dob': '1998-02-01',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 6,
      'activity': 'OT',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 62
      },
      'weight': {
        val: 155
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 98
      },
      'cl': {
        val: 134
      },
      'gt': {
        val: 109
      },
      'el': {
        val: 99
      },
      'mm': {
        val: 123
      },
      'qt': {
        val: 117
      },
      've': {
        val: 109
      },
      'dlab': {
        val: 145
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8183
    }
  },
  {
    firstName: 'Alma',
    lastName: 'Buchanan',
    'dob': '1994-09-29',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 20,
      'activity': 'EM',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 150
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 93
      },
      'cl': {
        val: 112
      },
      'gt': {
        val: 125
      },
      'el': {
        val: 136
      },
      'mm': {
        val: 96
      },
      'qt': {
        val: 105
      },
      've': {
        val: 100
      },
      'dlab': {
        val: 159
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5064
    }
  },
  {
    firstName: 'Weaver',
    lastName: 'Villarreal',
    'dob': '1998-12-07',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 14,
      'activity': 'TC',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 170
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 45
      },
      'cl': {
        val: 132
      },
      'gt': {
        val: 124
      },
      'el': {
        val: 109
      },
      'mm': {
        val: 131
      },
      'qt': {
        val: 114
      },
      've': {
        val: 101
      },
      'dlab': {
        val: 128
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7700
    }
  },
  {
    firstName: 'Gladys',
    lastName: 'Mcdaniel',
    'dob': '1997-01-02',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 12,
      'activity': 'HV',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 70
      },
      'weight': {
        val: 169
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 51
      },
      'cl': {
        val: 104
      },
      'gt': {
        val: 99
      },
      'el': {
        val: 133
      },
      'mm': {
        val: 97
      },
      'qt': {
        val: 95
      },
      've': {
        val: 94
      },
      'dlab': {
        val: 141
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8554
    }
  },
  {
    firstName: 'Suarez',
    lastName: 'Morrow',
    'dob': '1998-06-01',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 18,
      'activity': 'TC',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 67
      },
      'weight': {
        val: 155
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 83
      },
      'cl': {
        val: 121
      },
      'gt': {
        val: 118
      },
      'el': {
        val: 128
      },
      'mm': {
        val: 119
      },
      'qt': {
        val: 128
      },
      've': {
        val: 108
      },
      'dlab': {
        val: 161
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6205
    }
  },
  {
    firstName: 'Cristina',
    lastName: 'Velasquez',
    'dob': '2000-10-22',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 14,
      'activity': 'HV',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 180
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 76
      },
      'cl': {
        val: 107
      },
      'gt': {
        val: 105
      },
      'el': {
        val: 110
      },
      'mm': {
        val: 101
      },
      'qt': {
        val: 106
      },
      've': {
        val: 99
      },
      'dlab': {
        val: 157
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5628
    }
  },
  {
    firstName: 'Hansen',
    lastName: 'Chen',
    'dob': '1998-08-16',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 2,
      'activity': 'TC',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 62
      },
      'weight': {
        val: 172
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 99
      },
      'cl': {
        val: 119
      },
      'gt': {
        val: 118
      },
      'el': {
        val: 98
      },
      'mm': {
        val: 130
      },
      'qt': {
        val: 108
      },
      've': {
        val: 102
      },
      'dlab': {
        val: 115
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9030
    }
  },
  {
    firstName: 'Carter',
    lastName: 'Gates',
    'dob': '1995-05-10',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 19,
      'activity': 'TC',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 70
      },
      'weight': {
        val: 181
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 88
      },
      'cl': {
        val: 135
      },
      'gt': {
        val: 100
      },
      'el': {
        val: 116
      },
      'mm': {
        val: 103
      },
      'qt': {
        val: 121
      },
      've': {
        val: 95
      },
      'dlab': {
        val: 156
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2895
    }
  },
  {
    firstName: 'Maxwell',
    lastName: 'Tran',
    'dob': '1998-03-28',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 18,
      'activity': 'OT',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 161
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 97
      },
      'cl': {
        val: 148
      },
      'gt': {
        val: 136
      },
      'el': {
        val: 120
      },
      'mm': {
        val: 110
      },
      'qt': {
        val: 97
      },
      've': {
        val: 102
      },
      'dlab': {
        val: 127
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5103
    }
  },
  {
    firstName: 'Floyd',
    lastName: 'Richard',
    'dob': '1997-01-06',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 18,
      'activity': 'HV',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 188
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 86
      },
      'cl': {
        val: 108
      },
      'gt': {
        val: 106
      },
      'el': {
        val: 112
      },
      'mm': {
        val: 104
      },
      'qt': {
        val: 131
      },
      've': {
        val: 102
      },
      'dlab': {
        val: 153
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2959
    }
  },
  {
    firstName: 'Chrystal',
    lastName: 'Mcleod',
    'dob': '1997-07-04',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 8,
      'activity': 'HV',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 147
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 91
      },
      'cl': {
        val: 149
      },
      'gt': {
        val: 115
      },
      'el': {
        val: 141
      },
      'mm': {
        val: 126
      },
      'qt': {
        val: 124
      },
      've': {
        val: 98
      },
      'dlab': {
        val: 126
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4014
    }
  },
  {
    firstName: 'Geneva',
    lastName: 'Edwards',
    'dob': '1997-02-14',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 11,
      'activity': 'TC',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 62
      },
      'weight': {
        val: 164
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 57
      },
      'cl': {
        val: 127
      },
      'gt': {
        val: 107
      },
      'el': {
        val: 140
      },
      'mm': {
        val: 106
      },
      'qt': {
        val: 110
      },
      've': {
        val: 108
      },
      'dlab': {
        val: 123
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3570
    }
  },
  {
    firstName: 'Deloris',
    lastName: 'Clayton',
    'dob': '1995-02-13',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 13,
      'activity': 'TC',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 63
      },
      'weight': {
        val: 155
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 57
      },
      'cl': {
        val: 151
      },
      'gt': {
        val: 140
      },
      'el': {
        val: 138
      },
      'mm': {
        val: 111
      },
      'qt': {
        val: 98
      },
      've': {
        val: 108
      },
      'dlab': {
        val: 119
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3218
    }
  },
  {
    firstName: 'Gallagher',
    lastName: 'Pratt',
    'dob': '1995-06-03',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 18,
      'activity': 'EM',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 155
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 86
      },
      'cl': {
        val: 146
      },
      'gt': {
        val: 137
      },
      'el': {
        val: 123
      },
      'mm': {
        val: 126
      },
      'qt': {
        val: 127
      },
      've': {
        val: 92
      },
      'dlab': {
        val: 151
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8436
    }
  },
  {
    firstName: 'Jenkins',
    lastName: 'Stuart',
    'dob': '1999-12-18',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 20,
      'activity': 'TC',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 65
      },
      'weight': {
        val: 177
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 88
      },
      'cl': {
        val: 141
      },
      'gt': {
        val: 96
      },
      'el': {
        val: 112
      },
      'mm': {
        val: 105
      },
      'qt': {
        val: 128
      },
      've': {
        val: 101
      },
      'dlab': {
        val: 135
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3082
    }
  },
  {
    firstName: 'Marion',
    lastName: 'Holden',
    'dob': '1998-07-30',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 3,
      'activity': 'OT',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 181
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 80
      },
      'cl': {
        val: 121
      },
      'gt': {
        val: 117
      },
      'el': {
        val: 108
      },
      'mm': {
        val: 121
      },
      'qt': {
        val: 108
      },
      've': {
        val: 106
      },
      'dlab': {
        val: 138
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7135
    }
  },
  {
    firstName: 'Donna',
    lastName: 'Morales',
    'dob': '1999-02-15',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 13,
      'activity': 'EM',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 184
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 70
      },
      'cl': {
        val: 151
      },
      'gt': {
        val: 114
      },
      'el': {
        val: 140
      },
      'mm': {
        val: 126
      },
      'qt': {
        val: 97
      },
      've': {
        val: 94
      },
      'dlab': {
        val: 118
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6737
    }
  },
  {
    firstName: 'Kaitlin',
    lastName: 'Whitehead',
    'dob': '1996-10-20',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 17,
      'activity': 'TC',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 75
      },
      'weight': {
        val: 164
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 65
      },
      'cl': {
        val: 104
      },
      'gt': {
        val: 136
      },
      'el': {
        val: 108
      },
      'mm': {
        val: 114
      },
      'qt': {
        val: 105
      },
      've': {
        val: 104
      },
      'dlab': {
        val: 140
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5979
    }
  },
  {
    firstName: 'Todd',
    lastName: 'Fischer',
    'dob': '1997-07-20',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 5,
      'activity': 'TC',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 158
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 43
      },
      'cl': {
        val: 127
      },
      'gt': {
        val: 98
      },
      'el': {
        val: 109
      },
      'mm': {
        val: 113
      },
      'qt': {
        val: 123
      },
      've': {
        val: 108
      },
      'dlab': {
        val: 118
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9705
    }
  },
  {
    firstName: 'Mcfarland',
    lastName: 'Frederick',
    'dob': '2000-08-19',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 3,
      'activity': 'HV',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 62
      },
      'weight': {
        val: 142
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 57
      },
      'cl': {
        val: 132
      },
      'gt': {
        val: 95
      },
      'el': {
        val: 117
      },
      'mm': {
        val: 114
      },
      'qt': {
        val: 95
      },
      've': {
        val: 107
      },
      'dlab': {
        val: 163
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6472
    }
  },
  {
    firstName: 'Garza',
    lastName: 'Huber',
    'dob': '1997-09-15',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 5,
      'activity': 'TC',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 75
      },
      'weight': {
        val: 155
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 50
      },
      'cl': {
        val: 130
      },
      'gt': {
        val: 126
      },
      'el': {
        val: 108
      },
      'mm': {
        val: 112
      },
      'qt': {
        val: 130
      },
      've': {
        val: 109
      },
      'dlab': {
        val: 142
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6911
    }
  },
  {
    firstName: 'Debora',
    lastName: 'Riddle',
    'dob': '1994-01-03',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 1,
      'activity': 'HV',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 148
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 42
      },
      'cl': {
        val: 133
      },
      'gt': {
        val: 100
      },
      'el': {
        val: 140
      },
      'mm': {
        val: 103
      },
      'qt': {
        val: 124
      },
      've': {
        val: 110
      },
      'dlab': {
        val: 156
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8040
    }
  },
  {
    firstName: 'Esther',
    lastName: 'Taylor',
    'dob': '2000-01-08',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 19,
      'activity': 'TC',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 188
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 72
      },
      'cl': {
        val: 133
      },
      'gt': {
        val: 111
      },
      'el': {
        val: 109
      },
      'mm': {
        val: 117
      },
      'qt': {
        val: 109
      },
      've': {
        val: 100
      },
      'dlab': {
        val: 146
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7017
    }
  },
  {
    firstName: 'Marsha',
    lastName: 'Bridges',
    'dob': '1995-04-06',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 9,
      'activity': 'TC',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 179
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 86
      },
      'cl': {
        val: 135
      },
      'gt': {
        val: 117
      },
      'el': {
        val: 112
      },
      'mm': {
        val: 110
      },
      'qt': {
        val: 112
      },
      've': {
        val: 96
      },
      'dlab': {
        val: 144
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3873
    }
  },
  {
    firstName: 'Wendi',
    lastName: 'Chambers',
    'dob': '1995-01-23',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 19,
      'activity': 'HV',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 142
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 68
      },
      'cl': {
        val: 128
      },
      'gt': {
        val: 134
      },
      'el': {
        val: 114
      },
      'mm': {
        val: 116
      },
      'qt': {
        val: 128
      },
      've': {
        val: 99
      },
      'dlab': {
        val: 123
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5063
    }
  },
  {
    firstName: 'May',
    lastName: 'Carey',
    'dob': '1996-07-28',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 8,
      'activity': 'EM',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 65
      },
      'weight': {
        val: 137
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 80
      },
      'cl': {
        val: 142
      },
      'gt': {
        val: 113
      },
      'el': {
        val: 126
      },
      'mm': {
        val: 96
      },
      'qt': {
        val: 114
      },
      've': {
        val: 102
      },
      'dlab': {
        val: 121
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 6483
    }
  },
  {
    firstName: 'Sanford',
    lastName: 'Robles',
    'dob': '1998-03-19',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 8,
      'activity': 'EM',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 171
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 93
      },
      'cl': {
        val: 113
      },
      'gt': {
        val: 105
      },
      'el': {
        val: 96
      },
      'mm': {
        val: 97
      },
      'qt': {
        val: 100
      },
      've': {
        val: 98
      },
      'dlab': {
        val: 128
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3432
    }
  },
  {
    firstName: 'Susanne',
    lastName: 'Cross',
    'dob': '1995-03-03',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 17,
      'activity': 'EM',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 74
      },
      'weight': {
        val: 183
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 45
      },
      'cl': {
        val: 124
      },
      'gt': {
        val: 126
      },
      'el': {
        val: 102
      },
      'mm': {
        val: 117
      },
      'qt': {
        val: 109
      },
      've': {
        val: 92
      },
      'dlab': {
        val: 154
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4968
    }
  },
  {
    firstName: 'Carmela',
    lastName: 'Love',
    'dob': '1999-12-07',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 14,
      'activity': 'HV',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 148
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 94
      },
      'cl': {
        val: 100
      },
      'gt': {
        val: 103
      },
      'el': {
        val: 100
      },
      'mm': {
        val: 102
      },
      'qt': {
        val: 115
      },
      've': {
        val: 103
      },
      'dlab': {
        val: 136
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1275
    }
  },
  {
    firstName: 'Tricia',
    lastName: 'Hogan',
    'dob': '1999-05-14',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 18,
      'activity': 'TC',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 164
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 80
      },
      'cl': {
        val: 147
      },
      'gt': {
        val: 138
      },
      'el': {
        val: 114
      },
      'mm': {
        val: 126
      },
      'qt': {
        val: 131
      },
      've': {
        val: 93
      },
      'dlab': {
        val: 137
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2503
    }
  },
  {
    firstName: 'Marilyn',
    lastName: 'Vargas',
    'dob': '1999-04-19',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 5,
      'activity': 'EM',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 65
      },
      'weight': {
        val: 181
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 83
      },
      'cl': {
        val: 119
      },
      'gt': {
        val: 99
      },
      'el': {
        val: 124
      },
      'mm': {
        val: 108
      },
      'qt': {
        val: 107
      },
      've': {
        val: 103
      },
      'dlab': {
        val: 119
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 4513
    }
  },
  {
    firstName: 'Stafford',
    lastName: 'Page',
    'dob': '1994-04-27',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 14,
      'activity': 'EM',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 64
      },
      'weight': {
        val: 172
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 96
      },
      'cl': {
        val: 109
      },
      'gt': {
        val: 118
      },
      'el': {
        val: 124
      },
      'mm': {
        val: 119
      },
      'qt': {
        val: 98
      },
      've': {
        val: 94
      },
      'dlab': {
        val: 131
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3967
    }
  },
  {
    firstName: 'Katy',
    lastName: 'Hull',
    'dob': '1995-05-28',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 4,
      'activity': 'OT',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 63
      },
      'weight': {
        val: 186
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 77
      },
      'cl': {
        val: 133
      },
      'gt': {
        val: 135
      },
      'el': {
        val: 101
      },
      'mm': {
        val: 101
      },
      'qt': {
        val: 102
      },
      've': {
        val: 107
      },
      'dlab': {
        val: 139
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1551
    }
  },
  {
    firstName: 'Bridgette',
    lastName: 'Walter',
    'dob': '1994-11-20',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 11,
      'activity': 'OT',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 188
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 84
      },
      'cl': {
        val: 139
      },
      'gt': {
        val: 99
      },
      'el': {
        val: 121
      },
      'mm': {
        val: 97
      },
      'qt': {
        val: 114
      },
      've': {
        val: 95
      },
      'dlab': {
        val: 132
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 1361
    }
  },
  {
    firstName: 'Hannah',
    lastName: 'Carroll',
    'dob': '1995-11-18',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 4,
      'activity': 'TC',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 137
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 80
      },
      'cl': {
        val: 123
      },
      'gt': {
        val: 130
      },
      'el': {
        val: 97
      },
      'mm': {
        val: 96
      },
      'qt': {
        val: 122
      },
      've': {
        val: 101
      },
      'dlab': {
        val: 125
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9020
    }
  },
  {
    firstName: 'Fuentes',
    lastName: 'Gentry',
    'dob': '2000-07-08',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 15,
      'activity': 'EM',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 70
      },
      'weight': {
        val: 178
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 46
      },
      'cl': {
        val: 142
      },
      'gt': {
        val: 108
      },
      'el': {
        val: 125
      },
      'mm': {
        val: 122
      },
      'qt': {
        val: 103
      },
      've': {
        val: 104
      },
      'dlab': {
        val: 163
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 6015
    }
  },
  {
    firstName: 'Elvia',
    lastName: 'Kaufman',
    'dob': '1995-10-06',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 5,
      'activity': 'EM',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 64
      },
      'weight': {
        val: 177
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 83
      },
      'cl': {
        val: 151
      },
      'gt': {
        val: 102
      },
      'el': {
        val: 102
      },
      'mm': {
        val: 106
      },
      'qt': {
        val: 99
      },
      've': {
        val: 101
      },
      'dlab': {
        val: 152
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2736
    }
  },
  {
    firstName: 'Bishop',
    lastName: 'Rogers',
    'dob': '1998-02-19',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 3,
      'activity': 'EM',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 167
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 65
      },
      'cl': {
        val: 118
      },
      'gt': {
        val: 104
      },
      'el': {
        val: 119
      },
      'mm': {
        val: 119
      },
      'qt': {
        val: 109
      },
      've': {
        val: 102
      },
      'dlab': {
        val: 140
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2705
    }
  },
  {
    firstName: 'Beatrice',
    lastName: 'Matthews',
    'dob': '1999-12-08',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 7,
      'activity': 'HV',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 64
      },
      'weight': {
        val: 150
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 79
      },
      'cl': {
        val: 129
      },
      'gt': {
        val: 120
      },
      'el': {
        val: 98
      },
      'mm': {
        val: 95
      },
      'qt': {
        val: 106
      },
      've': {
        val: 93
      },
      'dlab': {
        val: 151
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5702
    }
  },
  {
    firstName: 'Clements',
    lastName: 'Bowen',
    'dob': '1996-08-28',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 16,
      'activity': 'OT',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 182
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 50
      },
      'cl': {
        val: 129
      },
      'gt': {
        val: 130
      },
      'el': {
        val: 105
      },
      'mm': {
        val: 129
      },
      'qt': {
        val: 113
      },
      've': {
        val: 98
      },
      'dlab': {
        val: 118
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7463
    }
  },
  {
    firstName: 'Reba',
    lastName: 'Brady',
    'dob': '1998-08-09',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 14,
      'activity': 'EM',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 149
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 61
      },
      'cl': {
        val: 141
      },
      'gt': {
        val: 111
      },
      'el': {
        val: 117
      },
      'mm': {
        val: 100
      },
      'qt': {
        val: 123
      },
      've': {
        val: 97
      },
      'dlab': {
        val: 134
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6682
    }
  },
  {
    firstName: 'Yvette',
    lastName: 'Duncan',
    'dob': '1994-08-19',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 17,
      'activity': 'TC',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 169
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 57
      },
      'cl': {
        val: 123
      },
      'gt': {
        val: 106
      },
      'el': {
        val: 109
      },
      'mm': {
        val: 118
      },
      'qt': {
        val: 113
      },
      've': {
        val: 95
      },
      'dlab': {
        val: 150
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 6816
    }
  },
  {
    firstName: 'Mayra',
    lastName: 'Dominguez',
    'dob': '1999-06-09',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 2,
      'activity': 'HV',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 64
      },
      'weight': {
        val: 145
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 71
      },
      'cl': {
        val: 103
      },
      'gt': {
        val: 119
      },
      'el': {
        val: 132
      },
      'mm': {
        val: 114
      },
      'qt': {
        val: 127
      },
      've': {
        val: 108
      },
      'dlab': {
        val: 139
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4497
    }
  },
  {
    firstName: 'Jackie',
    lastName: 'Greer',
    'dob': '1998-03-19',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 18,
      'activity': 'HV',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 173
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 54
      },
      'cl': {
        val: 150
      },
      'gt': {
        val: 103
      },
      'el': {
        val: 141
      },
      'mm': {
        val: 102
      },
      'qt': {
        val: 131
      },
      've': {
        val: 102
      },
      'dlab': {
        val: 147
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3680
    }
  },
  {
    firstName: 'Patrice',
    lastName: 'Case',
    'dob': '1995-01-23',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 13,
      'activity': 'TC',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 70
      },
      'weight': {
        val: 149
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 63
      },
      'cl': {
        val: 115
      },
      'gt': {
        val: 109
      },
      'el': {
        val: 130
      },
      'mm': {
        val: 125
      },
      'qt': {
        val: 109
      },
      've': {
        val: 93
      },
      'dlab': {
        val: 147
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7000
    }
  },
  {
    firstName: 'Bass',
    lastName: 'Morin',
    'dob': '1994-12-30',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 11,
      'activity': 'EM',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 173
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 43
      },
      'cl': {
        val: 107
      },
      'gt': {
        val: 125
      },
      'el': {
        val: 111
      },
      'mm': {
        val: 118
      },
      'qt': {
        val: 105
      },
      've': {
        val: 90
      },
      'dlab': {
        val: 149
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2588
    }
  },
  {
    firstName: 'Enid',
    lastName: 'Roberson',
    'dob': '1997-09-14',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 12,
      'activity': 'EM',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 177
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 94
      },
      'cl': {
        val: 107
      },
      'gt': {
        val: 97
      },
      'el': {
        val: 141
      },
      'mm': {
        val: 108
      },
      'qt': {
        val: 126
      },
      've': {
        val: 97
      },
      'dlab': {
        val: 139
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6538
    }
  },
  {
    firstName: 'Alford',
    lastName: 'Travis',
    'dob': '1996-10-27',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 5,
      'activity': 'EM',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 138
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 75
      },
      'cl': {
        val: 138
      },
      'gt': {
        val: 140
      },
      'el': {
        val: 122
      },
      'mm': {
        val: 122
      },
      'qt': {
        val: 122
      },
      've': {
        val: 102
      },
      'dlab': {
        val: 137
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8839
    }
  },
  {
    firstName: 'Lidia',
    lastName: 'Barker',
    'dob': '1997-10-05',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 5,
      'activity': 'EM',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 75
      },
      'weight': {
        val: 179
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 84
      },
      'cl': {
        val: 144
      },
      'gt': {
        val: 108
      },
      'el': {
        val: 139
      },
      'mm': {
        val: 115
      },
      'qt': {
        val: 113
      },
      've': {
        val: 109
      },
      'dlab': {
        val: 119
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6224
    }
  },
  {
    firstName: 'Susana',
    lastName: 'Humphrey',
    'dob': '1999-02-08',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 11,
      'activity': 'EM',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 64
      },
      'weight': {
        val: 188
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 80
      },
      'cl': {
        val: 117
      },
      'gt': {
        val: 129
      },
      'el': {
        val: 121
      },
      'mm': {
        val: 124
      },
      'qt': {
        val: 119
      },
      've': {
        val: 95
      },
      'dlab': {
        val: 129
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4118
    }
  },
  {
    firstName: 'Johns',
    lastName: 'Nielsen',
    'dob': '1999-11-24',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 8,
      'activity': 'HV',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 145
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 51
      },
      'cl': {
        val: 103
      },
      'gt': {
        val: 135
      },
      'el': {
        val: 117
      },
      'mm': {
        val: 112
      },
      'qt': {
        val: 104
      },
      've': {
        val: 106
      },
      'dlab': {
        val: 121
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1449
    }
  },
  {
    firstName: 'Anastasia',
    lastName: 'Garrison',
    'dob': '1995-03-07',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 20,
      'activity': 'OT',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 149
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 62
      },
      'cl': {
        val: 130
      },
      'gt': {
        val: 136
      },
      'el': {
        val: 137
      },
      'mm': {
        val: 96
      },
      'qt': {
        val: 130
      },
      've': {
        val: 90
      },
      'dlab': {
        val: 145
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2753
    }
  },
  {
    firstName: 'Flora',
    lastName: 'Keith',
    'dob': '1999-08-12',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 7,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 188
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 68
      },
      'cl': {
        val: 111
      },
      'gt': {
        val: 103
      },
      'el': {
        val: 121
      },
      'mm': {
        val: 131
      },
      'qt': {
        val: 119
      },
      've': {
        val: 99
      },
      'dlab': {
        val: 143
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6872
    }
  },
  {
    firstName: 'Brennan',
    lastName: 'Pruitt',
    'dob': '1996-03-17',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 5,
      'activity': 'HV',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 67
      },
      'weight': {
        val: 157
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 43
      },
      'cl': {
        val: 129
      },
      'gt': {
        val: 102
      },
      'el': {
        val: 117
      },
      'mm': {
        val: 126
      },
      'qt': {
        val: 96
      },
      've': {
        val: 108
      },
      'dlab': {
        val: 163
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6162
    }
  },
  {
    firstName: 'Myra',
    lastName: 'Leach',
    'dob': '2000-08-28',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 19,
      'activity': 'EM',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 178
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 68
      },
      'cl': {
        val: 138
      },
      'gt': {
        val: 99
      },
      'el': {
        val: 114
      },
      'mm': {
        val: 115
      },
      'qt': {
        val: 97
      },
      've': {
        val: 104
      },
      'dlab': {
        val: 119
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9786
    }
  },
  {
    firstName: 'Maria',
    lastName: 'Gordon',
    'dob': '2000-10-17',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 4,
      'activity': 'TC',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 147
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 77
      },
      'cl': {
        val: 105
      },
      'gt': {
        val: 121
      },
      'el': {
        val: 109
      },
      'mm': {
        val: 101
      },
      'qt': {
        val: 95
      },
      've': {
        val: 100
      },
      'dlab': {
        val: 128
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8035
    }
  },
  {
    firstName: 'Angeline',
    lastName: 'Fitzgerald',
    'dob': '2000-09-18',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 13,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 146
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 93
      },
      'cl': {
        val: 110
      },
      'gt': {
        val: 133
      },
      'el': {
        val: 99
      },
      'mm': {
        val: 130
      },
      'qt': {
        val: 129
      },
      've': {
        val: 95
      },
      'dlab': {
        val: 121
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 2334
    }
  },
  {
    firstName: 'Mavis',
    lastName: 'Watson',
    'dob': '1995-08-30',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 10,
      'activity': 'TC',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 168
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 45
      },
      'cl': {
        val: 136
      },
      'gt': {
        val: 131
      },
      'el': {
        val: 140
      },
      'mm': {
        val: 106
      },
      'qt': {
        val: 119
      },
      've': {
        val: 92
      },
      'dlab': {
        val: 121
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3306
    }
  },
  {
    firstName: 'Cote',
    lastName: 'Mullen',
    'dob': '1999-11-27',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 20,
      'activity': 'TC',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 64
      },
      'weight': {
        val: 165
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 71
      },
      'cl': {
        val: 145
      },
      'gt': {
        val: 129
      },
      'el': {
        val: 130
      },
      'mm': {
        val: 116
      },
      'qt': {
        val: 109
      },
      've': {
        val: 106
      },
      'dlab': {
        val: 122
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8127
    }
  },
  {
    firstName: 'Shelton',
    lastName: 'Sexton',
    'dob': '2000-07-02',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 7,
      'activity': 'TC',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 65
      },
      'weight': {
        val: 166
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 70
      },
      'cl': {
        val: 108
      },
      'gt': {
        val: 102
      },
      'el': {
        val: 133
      },
      'mm': {
        val: 105
      },
      'qt': {
        val: 127
      },
      've': {
        val: 106
      },
      'dlab': {
        val: 163
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9835
    }
  },
  {
    firstName: 'Shaw',
    lastName: 'Manning',
    'dob': '1997-03-09',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 7,
      'activity': 'HV',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 156
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 79
      },
      'cl': {
        val: 121
      },
      'gt': {
        val: 137
      },
      'el': {
        val: 137
      },
      'mm': {
        val: 97
      },
      'qt': {
        val: 103
      },
      've': {
        val: 92
      },
      'dlab': {
        val: 130
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6507
    }
  },
  {
    firstName: 'Goodman',
    lastName: 'Davidson',
    'dob': '1994-09-05',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 3,
      'activity': 'EM',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 160
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 50
      },
      'cl': {
        val: 101
      },
      'gt': {
        val: 138
      },
      'el': {
        val: 135
      },
      'mm': {
        val: 121
      },
      'qt': {
        val: 108
      },
      've': {
        val: 96
      },
      'dlab': {
        val: 125
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8696
    }
  },
  {
    firstName: 'Rosalind',
    lastName: 'Curry',
    'dob': '1998-09-21',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 3,
      'activity': 'EM',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 164
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 92
      },
      'cl': {
        val: 138
      },
      'gt': {
        val: 118
      },
      'el': {
        val: 97
      },
      'mm': {
        val: 100
      },
      'qt': {
        val: 110
      },
      've': {
        val: 102
      },
      'dlab': {
        val: 143
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1948
    }
  },
  {
    firstName: 'Montgomery',
    lastName: 'Burris',
    'dob': '1995-10-14',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 3,
      'activity': 'TC',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 70
      },
      'weight': {
        val: 181
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 66
      },
      'cl': {
        val: 118
      },
      'gt': {
        val: 124
      },
      'el': {
        val: 130
      },
      'mm': {
        val: 100
      },
      'qt': {
        val: 121
      },
      've': {
        val: 91
      },
      'dlab': {
        val: 149
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5742
    }
  },
  {
    firstName: 'Kaufman',
    lastName: 'Mcintosh',
    'dob': '1994-12-02',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 9,
      'activity': 'OT',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 160
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 87
      },
      'cl': {
        val: 105
      },
      'gt': {
        val: 121
      },
      'el': {
        val: 109
      },
      'mm': {
        val: 103
      },
      'qt': {
        val: 129
      },
      've': {
        val: 99
      },
      'dlab': {
        val: 133
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4102
    }
  },
  {
    firstName: 'Nola',
    lastName: 'Munoz',
    'dob': '2000-06-17',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 7,
      'activity': 'EM',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 74
      },
      'weight': {
        val: 169
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 60
      },
      'cl': {
        val: 115
      },
      'gt': {
        val: 98
      },
      'el': {
        val: 102
      },
      'mm': {
        val: 123
      },
      'qt': {
        val: 128
      },
      've': {
        val: 93
      },
      'dlab': {
        val: 145
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4758
    }
  },
  {
    firstName: 'Aline',
    lastName: 'Gamble',
    'dob': '1998-07-13',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 17,
      'activity': 'HV',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 145
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 44
      },
      'cl': {
        val: 124
      },
      'gt': {
        val: 131
      },
      'el': {
        val: 111
      },
      'mm': {
        val: 126
      },
      'qt': {
        val: 108
      },
      've': {
        val: 101
      },
      'dlab': {
        val: 130
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6379
    }
  },
  {
    firstName: 'Lopez',
    lastName: 'Fletcher',
    'dob': '1997-12-11',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 7,
      'activity': 'TC',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 75
      },
      'weight': {
        val: 154
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 46
      },
      'cl': {
        val: 139
      },
      'gt': {
        val: 130
      },
      'el': {
        val: 131
      },
      'mm': {
        val: 117
      },
      'qt': {
        val: 108
      },
      've': {
        val: 93
      },
      'dlab': {
        val: 146
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2210
    }
  },
  {
    firstName: 'Alexis',
    lastName: 'Sweeney',
    'dob': '1995-01-07',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 9,
      'activity': 'EM',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 64
      },
      'weight': {
        val: 143
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 98
      },
      'cl': {
        val: 143
      },
      'gt': {
        val: 106
      },
      'el': {
        val: 125
      },
      'mm': {
        val: 119
      },
      'qt': {
        val: 117
      },
      've': {
        val: 104
      },
      'dlab': {
        val: 122
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9116
    }
  },
  {
    firstName: 'Lorie',
    lastName: 'Chavez',
    'dob': '1995-07-24',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 3,
      'activity': 'TC',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 62
      },
      'weight': {
        val: 180
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 41
      },
      'cl': {
        val: 136
      },
      'gt': {
        val: 104
      },
      'el': {
        val: 112
      },
      'mm': {
        val: 121
      },
      'qt': {
        val: 124
      },
      've': {
        val: 104
      },
      'dlab': {
        val: 116
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9733
    }
  },
  {
    firstName: 'Stark',
    lastName: 'Dotson',
    'dob': '1999-11-19',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 10,
      'activity': 'TC',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 156
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 76
      },
      'cl': {
        val: 117
      },
      'gt': {
        val: 95
      },
      'el': {
        val: 118
      },
      'mm': {
        val: 100
      },
      'qt': {
        val: 119
      },
      've': {
        val: 96
      },
      'dlab': {
        val: 140
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5683
    }
  },
  {
    firstName: 'Shari',
    lastName: 'Potts',
    'dob': '1998-04-27',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 18,
      'activity': 'TC',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 177
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 48
      },
      'cl': {
        val: 123
      },
      'gt': {
        val: 139
      },
      'el': {
        val: 102
      },
      'mm': {
        val: 121
      },
      'qt': {
        val: 111
      },
      've': {
        val: 101
      },
      'dlab': {
        val: 128
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6313
    }
  },
  {
    firstName: 'Lessie',
    lastName: 'Carpenter',
    'dob': '1994-09-25',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 11,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 157
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 41
      },
      'cl': {
        val: 115
      },
      'gt': {
        val: 101
      },
      'el': {
        val: 133
      },
      'mm': {
        val: 117
      },
      'qt': {
        val: 101
      },
      've': {
        val: 98
      },
      'dlab': {
        val: 162
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8570
    }
  },
  {
    firstName: 'Grimes',
    lastName: 'Beard',
    'dob': '1994-12-27',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 11,
      'activity': 'TC',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 70
      },
      'weight': {
        val: 178
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 90
      },
      'cl': {
        val: 135
      },
      'gt': {
        val: 136
      },
      'el': {
        val: 102
      },
      'mm': {
        val: 118
      },
      'qt': {
        val: 124
      },
      've': {
        val: 110
      },
      'dlab': {
        val: 129
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9661
    }
  },
  {
    firstName: 'Lakisha',
    lastName: 'Gillespie',
    'dob': '2000-09-11',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 20,
      'activity': 'EM',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 64
      },
      'weight': {
        val: 172
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 43
      },
      'cl': {
        val: 144
      },
      'gt': {
        val: 105
      },
      'el': {
        val: 105
      },
      'mm': {
        val: 95
      },
      'qt': {
        val: 107
      },
      've': {
        val: 96
      },
      'dlab': {
        val: 122
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5377
    }
  },
  {
    firstName: 'Keri',
    lastName: 'Grimes',
    'dob': '1999-09-04',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 8,
      'activity': 'TC',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 74
      },
      'weight': {
        val: 158
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 58
      },
      'cl': {
        val: 136
      },
      'gt': {
        val: 136
      },
      'el': {
        val: 117
      },
      'mm': {
        val: 102
      },
      'qt': {
        val: 131
      },
      've': {
        val: 92
      },
      'dlab': {
        val: 160
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7951
    }
  },
  {
    firstName: 'Karen',
    lastName: 'Norman',
    'dob': '1995-12-18',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 18,
      'activity': 'OT',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 188
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 62
      },
      'cl': {
        val: 104
      },
      'gt': {
        val: 132
      },
      'el': {
        val: 137
      },
      'mm': {
        val: 103
      },
      'qt': {
        val: 121
      },
      've': {
        val: 96
      },
      'dlab': {
        val: 156
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 2212
    }
  },
  {
    firstName: 'Jocelyn',
    lastName: 'Forbes',
    'dob': '2000-06-09',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 6,
      'activity': 'EM',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 186
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 40
      },
      'cl': {
        val: 127
      },
      'gt': {
        val: 121
      },
      'el': {
        val: 101
      },
      'mm': {
        val: 95
      },
      'qt': {
        val: 113
      },
      've': {
        val: 98
      },
      'dlab': {
        val: 140
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 6769
    }
  },
  {
    firstName: 'Dianne',
    lastName: 'Jackson',
    'dob': '1998-11-13',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 19,
      'activity': 'OT',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 70
      },
      'weight': {
        val: 141
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 72
      },
      'cl': {
        val: 146
      },
      'gt': {
        val: 105
      },
      'el': {
        val: 100
      },
      'mm': {
        val: 98
      },
      'qt': {
        val: 110
      },
      've': {
        val: 91
      },
      'dlab': {
        val: 151
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1309
    }
  },
  {
    firstName: 'Briggs',
    lastName: 'Pollard',
    'dob': '2000-09-29',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 19,
      'activity': 'OT',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 70
      },
      'weight': {
        val: 156
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 41
      },
      'cl': {
        val: 104
      },
      'gt': {
        val: 111
      },
      'el': {
        val: 108
      },
      'mm': {
        val: 101
      },
      'qt': {
        val: 126
      },
      've': {
        val: 98
      },
      'dlab': {
        val: 119
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4678
    }
  },
  {
    firstName: 'Allen',
    lastName: 'Harrington',
    'dob': '1996-01-30',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 1,
      'activity': 'HV',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 161
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 83
      },
      'cl': {
        val: 109
      },
      'gt': {
        val: 118
      },
      'el': {
        val: 128
      },
      'mm': {
        val: 102
      },
      'qt': {
        val: 126
      },
      've': {
        val: 110
      },
      'dlab': {
        val: 144
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5979
    }
  },
  {
    firstName: 'Hampton',
    lastName: 'Combs',
    'dob': '1996-05-31',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 17,
      'activity': 'OT',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 70
      },
      'weight': {
        val: 180
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 59
      },
      'cl': {
        val: 151
      },
      'gt': {
        val: 137
      },
      'el': {
        val: 126
      },
      'mm': {
        val: 108
      },
      'qt': {
        val: 117
      },
      've': {
        val: 98
      },
      'dlab': {
        val: 129
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1660
    }
  },
  {
    firstName: 'Mitzi',
    lastName: 'Hall',
    'dob': '1996-08-01',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 1,
      'activity': 'HV',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 62
      },
      'weight': {
        val: 162
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 48
      },
      'cl': {
        val: 139
      },
      'gt': {
        val: 129
      },
      'el': {
        val: 109
      },
      'mm': {
        val: 119
      },
      'qt': {
        val: 98
      },
      've': {
        val: 107
      },
      'dlab': {
        val: 149
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4148
    }
  },
  {
    firstName: 'Rhodes',
    lastName: 'Petty',
    'dob': '1996-07-02',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 3,
      'activity': 'HV',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 172
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 52
      },
      'cl': {
        val: 143
      },
      'gt': {
        val: 121
      },
      'el': {
        val: 104
      },
      'mm': {
        val: 109
      },
      'qt': {
        val: 101
      },
      've': {
        val: 90
      },
      'dlab': {
        val: 115
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2695
    }
  },
  {
    firstName: 'Ericka',
    lastName: 'Vang',
    'dob': '1996-04-16',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 12,
      'activity': 'EM',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 179
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 76
      },
      'cl': {
        val: 134
      },
      'gt': {
        val: 127
      },
      'el': {
        val: 129
      },
      'mm': {
        val: 119
      },
      'qt': {
        val: 117
      },
      've': {
        val: 103
      },
      'dlab': {
        val: 146
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2119
    }
  },
  {
    firstName: 'Lou',
    lastName: 'Ball',
    'dob': '2000-08-31',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 15,
      'activity': 'TC',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 67
      },
      'weight': {
        val: 140
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 93
      },
      'cl': {
        val: 146
      },
      'gt': {
        val: 95
      },
      'el': {
        val: 126
      },
      'mm': {
        val: 103
      },
      'qt': {
        val: 106
      },
      've': {
        val: 91
      },
      'dlab': {
        val: 143
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4864
    }
  },
  {
    firstName: 'Virginia',
    lastName: 'Oliver',
    'dob': '1998-08-09',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 5,
      'activity': 'OT',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 157
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 65
      },
      'cl': {
        val: 125
      },
      'gt': {
        val: 129
      },
      'el': {
        val: 126
      },
      'mm': {
        val: 122
      },
      'qt': {
        val: 100
      },
      've': {
        val: 105
      },
      'dlab': {
        val: 132
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8957
    }
  },
  {
    firstName: 'Rochelle',
    lastName: 'Day',
    'dob': '1994-11-21',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 10,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 173
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 45
      },
      'cl': {
        val: 151
      },
      'gt': {
        val: 97
      },
      'el': {
        val: 116
      },
      'mm': {
        val: 117
      },
      'qt': {
        val: 95
      },
      've': {
        val: 102
      },
      'dlab': {
        val: 157
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6098
    }
  },
  {
    firstName: 'Guzman',
    lastName: 'Curtis',
    'dob': '1998-10-29',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 9,
      'activity': 'HV',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 141
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 70
      },
      'cl': {
        val: 128
      },
      'gt': {
        val: 114
      },
      'el': {
        val: 98
      },
      'mm': {
        val: 126
      },
      'qt': {
        val: 120
      },
      've': {
        val: 109
      },
      'dlab': {
        val: 147
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8578
    }
  },
  {
    firstName: 'Veronica',
    lastName: 'Hancock',
    'dob': '1999-05-31',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 3,
      'activity': 'EM',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 65
      },
      'weight': {
        val: 179
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 84
      },
      'cl': {
        val: 149
      },
      'gt': {
        val: 106
      },
      'el': {
        val: 96
      },
      'mm': {
        val: 95
      },
      'qt': {
        val: 131
      },
      've': {
        val: 104
      },
      'dlab': {
        val: 145
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2162
    }
  },
  {
    firstName: 'Ortega',
    lastName: 'Craig',
    'dob': '1998-10-31',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 16,
      'activity': 'OT',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 74
      },
      'weight': {
        val: 145
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 60
      },
      'cl': {
        val: 123
      },
      'gt': {
        val: 97
      },
      'el': {
        val: 108
      },
      'mm': {
        val: 123
      },
      'qt': {
        val: 130
      },
      've': {
        val: 93
      },
      'dlab': {
        val: 134
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4611
    }
  },
  {
    firstName: 'Barton',
    lastName: 'Leon',
    'dob': '1994-10-07',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 6,
      'activity': 'OT',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 65
      },
      'weight': {
        val: 181
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 92
      },
      'cl': {
        val: 127
      },
      'gt': {
        val: 128
      },
      'el': {
        val: 110
      },
      'mm': {
        val: 105
      },
      'qt': {
        val: 105
      },
      've': {
        val: 97
      },
      'dlab': {
        val: 147
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8241
    }
  },
  {
    firstName: 'Delaney',
    lastName: 'Alvarado',
    'dob': '1999-11-18',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 9,
      'activity': 'TC',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 70
      },
      'weight': {
        val: 188
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 93
      },
      'cl': {
        val: 123
      },
      'gt': {
        val: 102
      },
      'el': {
        val: 100
      },
      'mm': {
        val: 99
      },
      'qt': {
        val: 101
      },
      've': {
        val: 97
      },
      'dlab': {
        val: 123
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8415
    }
  },
  {
    firstName: 'Cobb',
    lastName: 'Carver',
    'dob': '1997-08-04',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 9,
      'activity': 'OT',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 74
      },
      'weight': {
        val: 179
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 96
      },
      'cl': {
        val: 131
      },
      'gt': {
        val: 102
      },
      'el': {
        val: 108
      },
      'mm': {
        val: 129
      },
      'qt': {
        val: 115
      },
      've': {
        val: 103
      },
      'dlab': {
        val: 126
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9186
    }
  },
  {
    firstName: 'Thornton',
    lastName: 'Dickson',
    'dob': '2000-12-27',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 2,
      'activity': 'TC',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 165
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 68
      },
      'cl': {
        val: 104
      },
      'gt': {
        val: 132
      },
      'el': {
        val: 107
      },
      'mm': {
        val: 107
      },
      'qt': {
        val: 115
      },
      've': {
        val: 94
      },
      'dlab': {
        val: 153
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3470
    }
  },
  {
    firstName: 'Katina',
    lastName: 'Hopper',
    'dob': '1995-10-25',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 20,
      'activity': 'OT',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 75
      },
      'weight': {
        val: 172
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 67
      },
      'cl': {
        val: 113
      },
      'gt': {
        val: 110
      },
      'el': {
        val: 131
      },
      'mm': {
        val: 98
      },
      'qt': {
        val: 106
      },
      've': {
        val: 102
      },
      'dlab': {
        val: 156
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: false
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3935
    }
  },
  {
    firstName: 'Dixie',
    lastName: 'Andrews',
    'dob': '1996-02-08',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 15,
      'activity': 'TC',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 181
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 47
      },
      'cl': {
        val: 103
      },
      'gt': {
        val: 111
      },
      'el': {
        val: 108
      },
      'mm': {
        val: 107
      },
      'qt': {
        val: 114
      },
      've': {
        val: 104
      },
      'dlab': {
        val: 117
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 4111
    }
  },
  {
    firstName: 'Haynes',
    lastName: 'Shaw',
    'dob': '1996-07-18',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 12,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 164
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 70
      },
      'cl': {
        val: 147
      },
      'gt': {
        val: 139
      },
      'el': {
        val: 129
      },
      'mm': {
        val: 100
      },
      'qt': {
        val: 112
      },
      've': {
        val: 110
      },
      'dlab': {
        val: 136
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4248
    }
  },
  {
    firstName: 'Cathryn',
    lastName: 'Castro',
    'dob': '1997-06-12',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 2,
      'activity': 'HV',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 74
      },
      'weight': {
        val: 141
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 80
      },
      'cl': {
        val: 149
      },
      'gt': {
        val: 134
      },
      'el': {
        val: 131
      },
      'mm': {
        val: 115
      },
      'qt': {
        val: 105
      },
      've': {
        val: 110
      },
      'dlab': {
        val: 155
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1377
    }
  },
  {
    firstName: 'Latisha',
    lastName: 'Morgan',
    'dob': '1995-09-26',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 17,
      'activity': 'OT',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 143
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 67
      },
      'cl': {
        val: 140
      },
      'gt': {
        val: 108
      },
      'el': {
        val: 121
      },
      'mm': {
        val: 103
      },
      'qt': {
        val: 124
      },
      've': {
        val: 96
      },
      'dlab': {
        val: 153
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9469
    }
  },
  {
    firstName: 'Fay',
    lastName: 'Larson',
    'dob': '1998-09-15',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 10,
      'activity': 'EM',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 70
      },
      'weight': {
        val: 181
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 93
      },
      'cl': {
        val: 147
      },
      'gt': {
        val: 119
      },
      'el': {
        val: 131
      },
      'mm': {
        val: 99
      },
      'qt': {
        val: 105
      },
      've': {
        val: 106
      },
      'dlab': {
        val: 163
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2374
    }
  },
  {
    firstName: 'Lela',
    lastName: 'Hewitt',
    'dob': '1999-01-25',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 17,
      'activity': 'OT',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 65
      },
      'weight': {
        val: 158
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 49
      },
      'cl': {
        val: 138
      },
      'gt': {
        val: 137
      },
      'el': {
        val: 128
      },
      'mm': {
        val: 121
      },
      'qt': {
        val: 121
      },
      've': {
        val: 97
      },
      'dlab': {
        val: 153
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 3039
    }
  },
  {
    firstName: 'Michele',
    lastName: 'Hicks',
    'dob': '1995-01-30',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 14,
      'activity': 'EM',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 65
      },
      'weight': {
        val: 143
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 47
      },
      'cl': {
        val: 114
      },
      'gt': {
        val: 128
      },
      'el': {
        val: 103
      },
      'mm': {
        val: 110
      },
      'qt': {
        val: 110
      },
      've': {
        val: 108
      },
      'dlab': {
        val: 138
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6966
    }
  },
  {
    firstName: 'Henrietta',
    lastName: 'Shelton',
    'dob': '1997-01-18',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 0,
      'activity': 'HV',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 67
      },
      'weight': {
        val: 179
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 90
      },
      'cl': {
        val: 134
      },
      'gt': {
        val: 97
      },
      'el': {
        val: 106
      },
      'mm': {
        val: 123
      },
      'qt': {
        val: 125
      },
      've': {
        val: 92
      },
      'dlab': {
        val: 153
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7239
    }
  },
  {
    firstName: 'Wiley',
    lastName: 'Cochran',
    'dob': '2000-01-15',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 19,
      'activity': 'OT',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 70
      },
      'weight': {
        val: 145
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 64
      },
      'cl': {
        val: 134
      },
      'gt': {
        val: 109
      },
      'el': {
        val: 119
      },
      'mm': {
        val: 116
      },
      'qt': {
        val: 109
      },
      've': {
        val: 94
      },
      'dlab': {
        val: 146
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1846
    }
  },
  {
    firstName: 'Patterson',
    lastName: 'Frost',
    'dob': '1999-10-04',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 0,
      'activity': 'HV',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 179
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 52
      },
      'cl': {
        val: 134
      },
      'gt': {
        val: 95
      },
      'el': {
        val: 97
      },
      'mm': {
        val: 97
      },
      'qt': {
        val: 117
      },
      've': {
        val: 99
      },
      'dlab': {
        val: 142
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4584
    }
  },
  {
    firstName: 'Adrienne',
    lastName: 'Holt',
    'dob': '1997-10-30',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 7,
      'activity': 'OT',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 64
      },
      'weight': {
        val: 145
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 93
      },
      'cl': {
        val: 147
      },
      'gt': {
        val: 135
      },
      'el': {
        val: 114
      },
      'mm': {
        val: 110
      },
      'qt': {
        val: 123
      },
      've': {
        val: 91
      },
      'dlab': {
        val: 131
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5928
    }
  },
  {
    firstName: 'Elisabeth',
    lastName: 'Tanner',
    'dob': '1995-08-04',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 17,
      'activity': 'HV',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 70
      },
      'weight': {
        val: 141
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 57
      },
      'cl': {
        val: 108
      },
      'gt': {
        val: 114
      },
      'el': {
        val: 130
      },
      'mm': {
        val: 116
      },
      'qt': {
        val: 107
      },
      've': {
        val: 94
      },
      'dlab': {
        val: 136
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1276
    }
  },
  {
    firstName: 'Stuart',
    lastName: 'Sloan',
    'dob': '1994-08-24',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 2,
      'activity': 'EM',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 63
      },
      'weight': {
        val: 181
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 48
      },
      'cl': {
        val: 103
      },
      'gt': {
        val: 129
      },
      'el': {
        val: 113
      },
      'mm': {
        val: 107
      },
      'qt': {
        val: 112
      },
      've': {
        val: 107
      },
      'dlab': {
        val: 144
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5504
    }
  },
  {
    firstName: 'Brianna',
    lastName: 'Kirkland',
    'dob': '1999-05-11',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 10,
      'activity': 'EM',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 70
      },
      'weight': {
        val: 177
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 66
      },
      'cl': {
        val: 109
      },
      'gt': {
        val: 132
      },
      'el': {
        val: 106
      },
      'mm': {
        val: 95
      },
      'qt': {
        val: 122
      },
      've': {
        val: 109
      },
      'dlab': {
        val: 134
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5668
    }
  },
  {
    firstName: 'Le',
    lastName: 'Arnold',
    'dob': '2000-06-28',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 20,
      'activity': 'TC',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 75
      },
      'weight': {
        val: 145
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 73
      },
      'cl': {
        val: 105
      },
      'gt': {
        val: 141
      },
      'el': {
        val: 135
      },
      'mm': {
        val: 121
      },
      'qt': {
        val: 111
      },
      've': {
        val: 98
      },
      'dlab': {
        val: 151
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7947
    }
  },
  {
    firstName: 'Barlow',
    lastName: 'Sanford',
    'dob': '1994-02-23',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 0,
      'activity': 'TC',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 180
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 52
      },
      'cl': {
        val: 145
      },
      'gt': {
        val: 98
      },
      'el': {
        val: 125
      },
      'mm': {
        val: 102
      },
      'qt': {
        val: 120
      },
      've': {
        val: 94
      },
      'dlab': {
        val: 131
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3055
    }
  },
  {
    firstName: 'Krista',
    lastName: 'Stout',
    'dob': '1995-06-03',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 10,
      'activity': 'OT',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 153
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 94
      },
      'cl': {
        val: 128
      },
      'gt': {
        val: 135
      },
      'el': {
        val: 106
      },
      'mm': {
        val: 129
      },
      'qt': {
        val: 131
      },
      've': {
        val: 95
      },
      'dlab': {
        val: 139
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7063
    }
  },
  {
    firstName: 'Franks',
    lastName: 'Morton',
    'dob': '1996-06-16',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 15,
      'activity': 'HV',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 62
      },
      'weight': {
        val: 173
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 89
      },
      'cl': {
        val: 131
      },
      'gt': {
        val: 113
      },
      'el': {
        val: 108
      },
      'mm': {
        val: 128
      },
      'qt': {
        val: 113
      },
      've': {
        val: 99
      },
      'dlab': {
        val: 157
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5579
    }
  },
  {
    firstName: 'Moon',
    lastName: 'Bell',
    'dob': '1998-11-22',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 10,
      'activity': 'OT',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 167
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 47
      },
      'cl': {
        val: 131
      },
      'gt': {
        val: 129
      },
      'el': {
        val: 107
      },
      'mm': {
        val: 103
      },
      'qt': {
        val: 125
      },
      've': {
        val: 97
      },
      'dlab': {
        val: 163
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6734
    }
  },
  {
    firstName: 'Workman',
    lastName: 'Meadows',
    'dob': '1998-06-30',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 16,
      'activity': 'OT',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 160
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 40
      },
      'cl': {
        val: 142
      },
      'gt': {
        val: 95
      },
      'el': {
        val: 103
      },
      'mm': {
        val: 131
      },
      'qt': {
        val: 106
      },
      've': {
        val: 106
      },
      'dlab': {
        val: 119
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5836
    }
  },
  {
    firstName: 'Finch',
    lastName: 'George',
    'dob': '1997-05-04',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 2,
      'activity': 'TC',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 65
      },
      'weight': {
        val: 169
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 67
      },
      'cl': {
        val: 114
      },
      'gt': {
        val: 122
      },
      'el': {
        val: 108
      },
      'mm': {
        val: 127
      },
      'qt': {
        val: 104
      },
      've': {
        val: 100
      },
      'dlab': {
        val: 153
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7686
    }
  },
  {
    firstName: 'Estes',
    lastName: 'Cortez',
    'dob': '1999-08-16',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 3,
      'activity': 'TC',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 177
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 96
      },
      'cl': {
        val: 131
      },
      'gt': {
        val: 128
      },
      'el': {
        val: 133
      },
      'mm': {
        val: 97
      },
      'qt': {
        val: 99
      },
      've': {
        val: 96
      },
      'dlab': {
        val: 150
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2327
    }
  },
  {
    firstName: 'Watson',
    lastName: 'Ortiz',
    'dob': '2000-02-17',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 2,
      'activity': 'EM',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 164
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 76
      },
      'cl': {
        val: 103
      },
      'gt': {
        val: 119
      },
      'el': {
        val: 121
      },
      'mm': {
        val: 105
      },
      'qt': {
        val: 103
      },
      've': {
        val: 96
      },
      'dlab': {
        val: 129
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3440
    }
  },
  {
    firstName: 'Christi',
    lastName: 'Simon',
    'dob': '1994-10-23',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 12,
      'activity': 'TC',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 75
      },
      'weight': {
        val: 142
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 46
      },
      'cl': {
        val: 129
      },
      'gt': {
        val: 99
      },
      'el': {
        val: 102
      },
      'mm': {
        val: 124
      },
      'qt': {
        val: 102
      },
      've': {
        val: 95
      },
      'dlab': {
        val: 149
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9191
    }
  },
  {
    firstName: 'Raymond',
    lastName: 'Robertson',
    'dob': '1996-12-06',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 3,
      'activity': 'EM',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 67
      },
      'weight': {
        val: 182
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 79
      },
      'cl': {
        val: 145
      },
      'gt': {
        val: 141
      },
      'el': {
        val: 99
      },
      'mm': {
        val: 99
      },
      'qt': {
        val: 118
      },
      've': {
        val: 98
      },
      'dlab': {
        val: 130
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1556
    }
  },
  {
    firstName: 'Pittman',
    lastName: 'Booth',
    'dob': '1997-11-10',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 7,
      'activity': 'OT',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 70
      },
      'weight': {
        val: 137
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 51
      },
      'cl': {
        val: 120
      },
      'gt': {
        val: 136
      },
      'el': {
        val: 137
      },
      'mm': {
        val: 105
      },
      'qt': {
        val: 131
      },
      've': {
        val: 107
      },
      'dlab': {
        val: 121
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6627
    }
  },
  {
    firstName: 'Cherry',
    lastName: 'Marsh',
    'dob': '1996-10-31',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 6,
      'activity': 'OT',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 64
      },
      'weight': {
        val: 179
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 75
      },
      'cl': {
        val: 106
      },
      'gt': {
        val: 110
      },
      'el': {
        val: 125
      },
      'mm': {
        val: 121
      },
      'qt': {
        val: 121
      },
      've': {
        val: 98
      },
      'dlab': {
        val: 119
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1162
    }
  },
  {
    firstName: 'Clark',
    lastName: 'Tate',
    'dob': '1998-11-23',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 20,
      'activity': 'TC',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 163
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 80
      },
      'cl': {
        val: 137
      },
      'gt': {
        val: 124
      },
      'el': {
        val: 107
      },
      'mm': {
        val: 113
      },
      'qt': {
        val: 122
      },
      've': {
        val: 99
      },
      'dlab': {
        val: 122
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 1815
    }
  },
  {
    firstName: 'Moses',
    lastName: 'Hudson',
    'dob': '1997-06-28',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 7,
      'activity': 'HV',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 176
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 47
      },
      'cl': {
        val: 125
      },
      'gt': {
        val: 124
      },
      'el': {
        val: 116
      },
      'mm': {
        val: 131
      },
      'qt': {
        val: 118
      },
      've': {
        val: 103
      },
      'dlab': {
        val: 146
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6312
    }
  },
  {
    firstName: 'Irwin',
    lastName: 'Cooke',
    'dob': '2000-07-14',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 10,
      'activity': 'EM',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 65
      },
      'weight': {
        val: 165
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 95
      },
      'cl': {
        val: 131
      },
      'gt': {
        val: 133
      },
      'el': {
        val: 114
      },
      'mm': {
        val: 105
      },
      'qt': {
        val: 111
      },
      've': {
        val: 106
      },
      'dlab': {
        val: 162
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: false
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4030
    }
  },
  {
    firstName: 'Wilkins',
    lastName: 'Merritt',
    'dob': '1998-10-05',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 3,
      'activity': 'EM',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 63
      },
      'weight': {
        val: 144
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 55
      },
      'cl': {
        val: 134
      },
      'gt': {
        val: 114
      },
      'el': {
        val: 101
      },
      'mm': {
        val: 113
      },
      'qt': {
        val: 117
      },
      've': {
        val: 106
      },
      'dlab': {
        val: 115
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8066
    }
  },
  {
    firstName: 'Joanna',
    lastName: 'Maynard',
    'dob': '2000-05-14',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 14,
      'activity': 'OT',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 65
      },
      'weight': {
        val: 186
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 88
      },
      'cl': {
        val: 100
      },
      'gt': {
        val: 99
      },
      'el': {
        val: 110
      },
      'mm': {
        val: 100
      },
      'qt': {
        val: 101
      },
      've': {
        val: 94
      },
      'dlab': {
        val: 125
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5851
    }
  },
  {
    firstName: 'Ashley',
    lastName: 'Puckett',
    'dob': '1994-10-18',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 4,
      'activity': 'HV',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 152
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 68
      },
      'cl': {
        val: 142
      },
      'gt': {
        val: 97
      },
      'el': {
        val: 131
      },
      'mm': {
        val: 107
      },
      'qt': {
        val: 114
      },
      've': {
        val: 99
      },
      'dlab': {
        val: 119
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6836
    }
  },
  {
    firstName: 'Ward',
    lastName: 'Lucas',
    'dob': '1996-09-17',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 16,
      'activity': 'OT',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 138
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 48
      },
      'cl': {
        val: 112
      },
      'gt': {
        val: 140
      },
      'el': {
        val: 133
      },
      'mm': {
        val: 98
      },
      'qt': {
        val: 104
      },
      've': {
        val: 99
      },
      'dlab': {
        val: 125
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2787
    }
  },
  {
    firstName: 'York',
    lastName: 'Salas',
    'dob': '1997-10-03',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 13,
      'activity': 'EM',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 139
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 48
      },
      'cl': {
        val: 121
      },
      'gt': {
        val: 118
      },
      'el': {
        val: 138
      },
      'mm': {
        val: 115
      },
      'qt': {
        val: 97
      },
      've': {
        val: 107
      },
      'dlab': {
        val: 131
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9023
    }
  },
  {
    firstName: 'Chambers',
    lastName: 'Larsen',
    'dob': '2000-05-29',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 7,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 169
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 54
      },
      'cl': {
        val: 108
      },
      'gt': {
        val: 96
      },
      'el': {
        val: 137
      },
      'mm': {
        val: 126
      },
      'qt': {
        val: 117
      },
      've': {
        val: 102
      },
      'dlab': {
        val: 115
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3658
    }
  },
  {
    firstName: 'Mullins',
    lastName: 'Phillips',
    'dob': '1996-12-22',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 10,
      'activity': 'EM',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 179
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 74
      },
      'cl': {
        val: 137
      },
      'gt': {
        val: 104
      },
      'el': {
        val: 126
      },
      'mm': {
        val: 102
      },
      'qt': {
        val: 123
      },
      've': {
        val: 93
      },
      'dlab': {
        val: 145
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8152
    }
  },
  {
    firstName: 'Trujillo',
    lastName: 'Guy',
    'dob': '1995-05-14',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 3,
      'activity': 'OT',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 64
      },
      'weight': {
        val: 177
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 80
      },
      'cl': {
        val: 127
      },
      'gt': {
        val: 113
      },
      'el': {
        val: 98
      },
      'mm': {
        val: 131
      },
      'qt': {
        val: 95
      },
      've': {
        val: 92
      },
      'dlab': {
        val: 129
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9156
    }
  },
  {
    firstName: 'Amy',
    lastName: 'Rollins',
    'dob': '1995-02-01',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 18,
      'activity': 'EM',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 65
      },
      'weight': {
        val: 178
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 55
      },
      'cl': {
        val: 143
      },
      'gt': {
        val: 117
      },
      'el': {
        val: 120
      },
      'mm': {
        val: 98
      },
      'qt': {
        val: 120
      },
      've': {
        val: 95
      },
      'dlab': {
        val: 158
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7881
    }
  },
  {
    firstName: 'Lawson',
    lastName: 'Vinson',
    'dob': '1996-05-10',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 0,
      'activity': 'OT',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 70
      },
      'weight': {
        val: 143
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 66
      },
      'cl': {
        val: 103
      },
      'gt': {
        val: 134
      },
      'el': {
        val: 128
      },
      'mm': {
        val: 96
      },
      'qt': {
        val: 129
      },
      've': {
        val: 107
      },
      'dlab': {
        val: 127
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8123
    }
  },
  {
    firstName: 'Luna',
    lastName: 'Francis',
    'dob': '1994-03-03',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 13,
      'activity': 'TC',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 64
      },
      'weight': {
        val: 158
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 75
      },
      'cl': {
        val: 145
      },
      'gt': {
        val: 102
      },
      'el': {
        val: 139
      },
      'mm': {
        val: 108
      },
      'qt': {
        val: 100
      },
      've': {
        val: 101
      },
      'dlab': {
        val: 141
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3082
    }
  },
  {
    firstName: 'French',
    lastName: 'Pacheco',
    'dob': '1999-04-21',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 10,
      'activity': 'EM',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 64
      },
      'weight': {
        val: 170
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 58
      },
      'cl': {
        val: 131
      },
      'gt': {
        val: 122
      },
      'el': {
        val: 100
      },
      'mm': {
        val: 125
      },
      'qt': {
        val: 104
      },
      've': {
        val: 97
      },
      'dlab': {
        val: 153
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 5164
    }
  },
  {
    firstName: 'Corina',
    lastName: 'Fernandez',
    'dob': '1995-10-13',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 2,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 65
      },
      'weight': {
        val: 161
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 98
      },
      'cl': {
        val: 101
      },
      'gt': {
        val: 103
      },
      'el': {
        val: 130
      },
      'mm': {
        val: 96
      },
      'qt': {
        val: 96
      },
      've': {
        val: 101
      },
      'dlab': {
        val: 127
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 5832
    }
  },
  {
    firstName: 'Rachelle',
    lastName: 'Witt',
    'dob': '1999-04-08',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 20,
      'activity': 'EM',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 64
      },
      'weight': {
        val: 179
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 93
      },
      'cl': {
        val: 131
      },
      'gt': {
        val: 109
      },
      'el': {
        val: 136
      },
      'mm': {
        val: 96
      },
      'qt': {
        val: 102
      },
      've': {
        val: 93
      },
      'dlab': {
        val: 147
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 8311
    }
  },
  {
    firstName: 'Erickson',
    lastName: 'Foley',
    'dob': '1998-05-18',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 17,
      'activity': 'TC',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 70
      },
      'weight': {
        val: 175
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 85
      },
      'cl': {
        val: 122
      },
      'gt': {
        val: 95
      },
      'el': {
        val: 121
      },
      'mm': {
        val: 120
      },
      'qt': {
        val: 109
      },
      've': {
        val: 100
      },
      'dlab': {
        val: 122
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3764
    }
  },
  {
    firstName: 'Sharron',
    lastName: 'Joyce',
    'dob': '1997-08-01',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 11,
      'activity': 'TC',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 179
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 48
      },
      'cl': {
        val: 131
      },
      'gt': {
        val: 111
      },
      'el': {
        val: 100
      },
      'mm': {
        val: 125
      },
      'qt': {
        val: 119
      },
      've': {
        val: 110
      },
      'dlab': {
        val: 153
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8564
    }
  },
  {
    firstName: 'Felicia',
    lastName: 'Rivas',
    'dob': '1994-02-26',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 13,
      'activity': 'OT',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 185
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 82
      },
      'cl': {
        val: 143
      },
      'gt': {
        val: 135
      },
      'el': {
        val: 111
      },
      'mm': {
        val: 127
      },
      'qt': {
        val: 103
      },
      've': {
        val: 105
      },
      'dlab': {
        val: 139
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2652
    }
  },
  {
    firstName: 'Valarie',
    lastName: 'Benson',
    'dob': '1994-01-17',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 10,
      'activity': 'OT',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 62
      },
      'weight': {
        val: 170
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 96
      },
      'cl': {
        val: 105
      },
      'gt': {
        val: 115
      },
      'el': {
        val: 127
      },
      'mm': {
        val: 129
      },
      'qt': {
        val: 112
      },
      've': {
        val: 98
      },
      'dlab': {
        val: 126
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5385
    }
  },
  {
    firstName: 'Janette',
    lastName: 'Peters',
    'dob': '1996-07-31',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 13,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 164
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 53
      },
      'cl': {
        val: 129
      },
      'gt': {
        val: 103
      },
      'el': {
        val: 98
      },
      'mm': {
        val: 96
      },
      'qt': {
        val: 128
      },
      've': {
        val: 109
      },
      'dlab': {
        val: 135
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 2508
    }
  },
  {
    firstName: 'Donovan',
    lastName: 'Stokes',
    'dob': '1999-01-09',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 10,
      'activity': 'EM',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 154
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 58
      },
      'cl': {
        val: 125
      },
      'gt': {
        val: 108
      },
      'el': {
        val: 102
      },
      'mm': {
        val: 116
      },
      'qt': {
        val: 103
      },
      've': {
        val: 109
      },
      'dlab': {
        val: 145
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4850
    }
  },
  {
    firstName: 'Nieves',
    lastName: 'Lang',
    'dob': '1998-05-04',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 4,
      'activity': 'EM',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 64
      },
      'weight': {
        val: 166
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 52
      },
      'cl': {
        val: 128
      },
      'gt': {
        val: 126
      },
      'el': {
        val: 118
      },
      'mm': {
        val: 110
      },
      'qt': {
        val: 109
      },
      've': {
        val: 103
      },
      'dlab': {
        val: 128
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8359
    }
  },
  {
    firstName: 'Joyce',
    lastName: 'Boyer',
    'dob': '1997-12-20',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 14,
      'activity': 'TC',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 75
      },
      'weight': {
        val: 152
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 95
      },
      'cl': {
        val: 126
      },
      'gt': {
        val: 103
      },
      'el': {
        val: 127
      },
      'mm': {
        val: 96
      },
      'qt': {
        val: 114
      },
      've': {
        val: 97
      },
      'dlab': {
        val: 141
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4349
    }
  },
  {
    firstName: 'Bobbi',
    lastName: 'Sanchez',
    'dob': '1997-05-03',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 9,
      'activity': 'TC',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 178
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 95
      },
      'cl': {
        val: 118
      },
      'gt': {
        val: 121
      },
      'el': {
        val: 106
      },
      'mm': {
        val: 125
      },
      'qt': {
        val: 123
      },
      've': {
        val: 104
      },
      'dlab': {
        val: 123
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9912
    }
  },
  {
    firstName: 'Bettie',
    lastName: 'Rhodes',
    'dob': '1999-02-08',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 8,
      'activity': 'OT',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 137
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 86
      },
      'cl': {
        val: 119
      },
      'gt': {
        val: 122
      },
      'el': {
        val: 119
      },
      'mm': {
        val: 112
      },
      'qt': {
        val: 103
      },
      've': {
        val: 107
      },
      'dlab': {
        val: 140
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1266
    }
  },
  {
    firstName: 'Lindsey',
    lastName: 'Turner',
    'dob': '1995-01-10',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 1,
      'activity': 'HV',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 178
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 92
      },
      'cl': {
        val: 109
      },
      'gt': {
        val: 130
      },
      'el': {
        val: 119
      },
      'mm': {
        val: 114
      },
      'qt': {
        val: 122
      },
      've': {
        val: 97
      },
      'dlab': {
        val: 134
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5867
    }
  },
  {
    firstName: 'Barber',
    lastName: 'Lester',
    'dob': '1998-03-25',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 14,
      'activity': 'TC',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 64
      },
      'weight': {
        val: 181
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 74
      },
      'cl': {
        val: 114
      },
      'gt': {
        val: 99
      },
      'el': {
        val: 134
      },
      'mm': {
        val: 125
      },
      'qt': {
        val: 95
      },
      've': {
        val: 95
      },
      'dlab': {
        val: 128
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9761
    }
  },
  {
    firstName: 'Beasley',
    lastName: 'Dejesus',
    'dob': '1996-09-11',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 0,
      'activity': 'OT',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 184
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 53
      },
      'cl': {
        val: 134
      },
      'gt': {
        val: 116
      },
      'el': {
        val: 101
      },
      'mm': {
        val: 128
      },
      'qt': {
        val: 99
      },
      've': {
        val: 102
      },
      'dlab': {
        val: 138
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3533
    }
  },
  {
    firstName: 'Janna',
    lastName: 'Donovan',
    'dob': '1998-11-17',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 18,
      'activity': 'OT',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 75
      },
      'weight': {
        val: 171
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 80
      },
      'cl': {
        val: 142
      },
      'gt': {
        val: 118
      },
      'el': {
        val: 141
      },
      'mm': {
        val: 120
      },
      'qt': {
        val: 96
      },
      've': {
        val: 100
      },
      'dlab': {
        val: 153
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3565
    }
  },
  {
    firstName: 'Mcclure',
    lastName: 'Dunlap',
    'dob': '1998-06-16',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 14,
      'activity': 'OT',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 62
      },
      'weight': {
        val: 163
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 66
      },
      'cl': {
        val: 148
      },
      'gt': {
        val: 115
      },
      'el': {
        val: 99
      },
      'mm': {
        val: 111
      },
      'qt': {
        val: 110
      },
      've': {
        val: 102
      },
      'dlab': {
        val: 156
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2071
    }
  },
  {
    firstName: 'Laura',
    lastName: 'Berry',
    'dob': '1994-06-09',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 1,
      'activity': 'HV',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 75
      },
      'weight': {
        val: 146
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 48
      },
      'cl': {
        val: 105
      },
      'gt': {
        val: 105
      },
      'el': {
        val: 117
      },
      'mm': {
        val: 116
      },
      'qt': {
        val: 103
      },
      've': {
        val: 97
      },
      'dlab': {
        val: 152
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9243
    }
  },
  {
    firstName: 'Moore',
    lastName: 'Faulkner',
    'dob': '1999-10-30',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 10,
      'activity': 'TC',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 65
      },
      'weight': {
        val: 179
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 77
      },
      'cl': {
        val: 150
      },
      'gt': {
        val: 137
      },
      'el': {
        val: 122
      },
      'mm': {
        val: 122
      },
      'qt': {
        val: 113
      },
      've': {
        val: 94
      },
      'dlab': {
        val: 133
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8181
    }
  },
  {
    firstName: 'Roth',
    lastName: 'Duran',
    'dob': '1998-07-15',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 2,
      'activity': 'HV',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 138
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 78
      },
      'cl': {
        val: 109
      },
      'gt': {
        val: 132
      },
      'el': {
        val: 125
      },
      'mm': {
        val: 128
      },
      'qt': {
        val: 129
      },
      've': {
        val: 109
      },
      'dlab': {
        val: 147
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7049
    }
  },
  {
    firstName: 'Franklin',
    lastName: 'Albert',
    'dob': '1997-06-02',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 18,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 176
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 99
      },
      'cl': {
        val: 110
      },
      'gt': {
        val: 128
      },
      'el': {
        val: 123
      },
      'mm': {
        val: 128
      },
      'qt': {
        val: 115
      },
      've': {
        val: 98
      },
      'dlab': {
        val: 154
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5809
    }
  },
  {
    firstName: 'Griffin',
    lastName: 'Ford',
    'dob': '1997-09-05',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 6,
      'activity': 'HV',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 70
      },
      'weight': {
        val: 138
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 58
      },
      'cl': {
        val: 117
      },
      'gt': {
        val: 132
      },
      'el': {
        val: 137
      },
      'mm': {
        val: 126
      },
      'qt': {
        val: 98
      },
      've': {
        val: 103
      },
      'dlab': {
        val: 159
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6166
    }
  },
  {
    firstName: 'Randall',
    lastName: 'Battle',
    'dob': '1997-09-13',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 3,
      'activity': 'HV',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 67
      },
      'weight': {
        val: 182
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 84
      },
      'cl': {
        val: 134
      },
      'gt': {
        val: 115
      },
      'el': {
        val: 112
      },
      'mm': {
        val: 120
      },
      'qt': {
        val: 121
      },
      've': {
        val: 101
      },
      'dlab': {
        val: 132
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4145
    }
  },
  {
    firstName: 'Dalton',
    lastName: 'Henderson',
    'dob': '1997-09-07',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 6,
      'activity': 'TC',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 165
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 45
      },
      'cl': {
        val: 151
      },
      'gt': {
        val: 125
      },
      'el': {
        val: 115
      },
      'mm': {
        val: 127
      },
      'qt': {
        val: 99
      },
      've': {
        val: 108
      },
      'dlab': {
        val: 151
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2583
    }
  },
  {
    firstName: 'Jodi',
    lastName: 'House',
    'dob': '1999-09-19',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 14,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 185
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 49
      },
      'cl': {
        val: 117
      },
      'gt': {
        val: 108
      },
      'el': {
        val: 96
      },
      'mm': {
        val: 123
      },
      'qt': {
        val: 104
      },
      've': {
        val: 98
      },
      'dlab': {
        val: 144
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9649
    }
  },
  {
    firstName: 'Baird',
    lastName: 'Key',
    'dob': '1999-08-01',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 19,
      'activity': 'EM',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 62
      },
      'weight': {
        val: 159
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 59
      },
      'cl': {
        val: 115
      },
      'gt': {
        val: 95
      },
      'el': {
        val: 123
      },
      'mm': {
        val: 128
      },
      'qt': {
        val: 101
      },
      've': {
        val: 95
      },
      'dlab': {
        val: 156
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2778
    }
  },
  {
    firstName: 'Dudley',
    lastName: 'Ayala',
    'dob': '1997-09-25',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 8,
      'activity': 'OT',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 152
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 39
      },
      'cl': {
        val: 132
      },
      'gt': {
        val: 136
      },
      'el': {
        val: 122
      },
      'mm': {
        val: 106
      },
      'qt': {
        val: 117
      },
      've': {
        val: 101
      },
      'dlab': {
        val: 132
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2104
    }
  },
  {
    firstName: 'Lyons',
    lastName: 'Hebert',
    'dob': '1994-02-05',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 0,
      'activity': 'HV',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 67
      },
      'weight': {
        val: 181
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 43
      },
      'cl': {
        val: 140
      },
      'gt': {
        val: 119
      },
      'el': {
        val: 134
      },
      'mm': {
        val: 103
      },
      'qt': {
        val: 99
      },
      've': {
        val: 101
      },
      'dlab': {
        val: 129
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2955
    }
  },
  {
    firstName: 'Tran',
    lastName: 'Mann',
    'dob': '1994-08-13',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 0,
      'activity': 'HV',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 180
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 89
      },
      'cl': {
        val: 127
      },
      'gt': {
        val: 118
      },
      'el': {
        val: 124
      },
      'mm': {
        val: 102
      },
      'qt': {
        val: 127
      },
      've': {
        val: 95
      },
      'dlab': {
        val: 119
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3642
    }
  },
  {
    firstName: 'Sandy',
    lastName: 'Cabrera',
    'dob': '2000-05-27',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 15,
      'activity': 'OT',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 74
      },
      'weight': {
        val: 183
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 60
      },
      'cl': {
        val: 114
      },
      'gt': {
        val: 97
      },
      'el': {
        val: 135
      },
      'mm': {
        val: 117
      },
      'qt': {
        val: 101
      },
      've': {
        val: 109
      },
      'dlab': {
        val: 142
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 3642
    }
  },
  {
    firstName: 'Ramsey',
    lastName: 'Blanchard',
    'dob': '1997-12-18',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 17,
      'activity': 'TC',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 75
      },
      'weight': {
        val: 150
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 54
      },
      'cl': {
        val: 140
      },
      'gt': {
        val: 103
      },
      'el': {
        val: 98
      },
      'mm': {
        val: 114
      },
      'qt': {
        val: 129
      },
      've': {
        val: 96
      },
      'dlab': {
        val: 124
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4584
    }
  },
  {
    firstName: 'Russo',
    lastName: 'Hamilton',
    'dob': '1994-09-15',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 8,
      'activity': 'HV',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 142
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 82
      },
      'cl': {
        val: 137
      },
      'gt': {
        val: 95
      },
      'el': {
        val: 141
      },
      'mm': {
        val: 111
      },
      'qt': {
        val: 119
      },
      've': {
        val: 98
      },
      'dlab': {
        val: 142
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2472
    }
  },
  {
    firstName: 'Jillian',
    lastName: 'Allison',
    'dob': '1994-06-11',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 16,
      'activity': 'HV',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 74
      },
      'weight': {
        val: 139
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 47
      },
      'cl': {
        val: 136
      },
      'gt': {
        val: 95
      },
      'el': {
        val: 105
      },
      'mm': {
        val: 107
      },
      'qt': {
        val: 111
      },
      've': {
        val: 99
      },
      'dlab': {
        val: 157
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8109
    }
  },
  {
    firstName: 'Cornelia',
    lastName: 'Mcbride',
    'dob': '1998-07-01',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 1,
      'activity': 'OT',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 170
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 41
      },
      'cl': {
        val: 110
      },
      'gt': {
        val: 124
      },
      'el': {
        val: 131
      },
      'mm': {
        val: 115
      },
      'qt': {
        val: 131
      },
      've': {
        val: 94
      },
      'dlab': {
        val: 134
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1942
    }
  },
  {
    firstName: 'Landry',
    lastName: 'Crawford',
    'dob': '1998-08-22',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 4,
      'activity': 'TC',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 75
      },
      'weight': {
        val: 150
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 84
      },
      'cl': {
        val: 140
      },
      'gt': {
        val: 132
      },
      'el': {
        val: 134
      },
      'mm': {
        val: 95
      },
      'qt': {
        val: 111
      },
      've': {
        val: 107
      },
      'dlab': {
        val: 121
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6164
    }
  },
  {
    firstName: 'Burris',
    lastName: 'Oneill',
    'dob': '1999-03-01',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 18,
      'activity': 'EM',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 145
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 62
      },
      'cl': {
        val: 136
      },
      'gt': {
        val: 137
      },
      'el': {
        val: 96
      },
      'mm': {
        val: 96
      },
      'qt': {
        val: 108
      },
      've': {
        val: 90
      },
      'dlab': {
        val: 131
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6073
    }
  },
  {
    firstName: 'Saunders',
    lastName: 'Anthony',
    'dob': '2000-02-20',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 0,
      'activity': 'TC',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 64
      },
      'weight': {
        val: 138
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 58
      },
      'cl': {
        val: 102
      },
      'gt': {
        val: 118
      },
      'el': {
        val: 112
      },
      'mm': {
        val: 97
      },
      'qt': {
        val: 106
      },
      've': {
        val: 91
      },
      'dlab': {
        val: 151
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1525
    }
  },
  {
    firstName: 'Delacruz',
    lastName: 'Little',
    'dob': '1995-08-09',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 0,
      'activity': 'OT',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 173
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 81
      },
      'cl': {
        val: 126
      },
      'gt': {
        val: 134
      },
      'el': {
        val: 121
      },
      'mm': {
        val: 112
      },
      'qt': {
        val: 115
      },
      've': {
        val: 103
      },
      'dlab': {
        val: 148
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7167
    }
  },
  {
    firstName: 'Jeanne',
    lastName: 'Lawrence',
    'dob': '1996-01-15',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 0,
      'activity': 'TC',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 146
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 47
      },
      'cl': {
        val: 138
      },
      'gt': {
        val: 122
      },
      'el': {
        val: 106
      },
      'mm': {
        val: 115
      },
      'qt': {
        val: 116
      },
      've': {
        val: 93
      },
      'dlab': {
        val: 152
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2826
    }
  },
  {
    firstName: 'Carole',
    lastName: 'Bentley',
    'dob': '1994-08-04',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 19,
      'activity': 'TC',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 162
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 78
      },
      'cl': {
        val: 115
      },
      'gt': {
        val: 139
      },
      'el': {
        val: 110
      },
      'mm': {
        val: 129
      },
      'qt': {
        val: 98
      },
      've': {
        val: 99
      },
      'dlab': {
        val: 118
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8505
    }
  },
  {
    firstName: 'Strong',
    lastName: 'Blankenship',
    'dob': '1994-07-11',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 11,
      'activity': 'TC',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 140
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 44
      },
      'cl': {
        val: 148
      },
      'gt': {
        val: 97
      },
      'el': {
        val: 119
      },
      'mm': {
        val: 96
      },
      'qt': {
        val: 101
      },
      've': {
        val: 98
      },
      'dlab': {
        val: 132
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7478
    }
  },
  {
    firstName: 'Lorene',
    lastName: 'Clarke',
    'dob': '1997-09-14',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 0,
      'activity': 'TC',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 74
      },
      'weight': {
        val: 145
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 99
      },
      'cl': {
        val: 137
      },
      'gt': {
        val: 112
      },
      'el': {
        val: 124
      },
      'mm': {
        val: 114
      },
      'qt': {
        val: 102
      },
      've': {
        val: 90
      },
      'dlab': {
        val: 147
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9203
    }
  },
  {
    firstName: 'Ballard',
    lastName: 'Berger',
    'dob': '1996-02-16',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 20,
      'activity': 'EM',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 148
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 45
      },
      'cl': {
        val: 104
      },
      'gt': {
        val: 97
      },
      'el': {
        val: 104
      },
      'mm': {
        val: 101
      },
      'qt': {
        val: 98
      },
      've': {
        val: 110
      },
      'dlab': {
        val: 152
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: false
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2956
    }
  },
  {
    firstName: 'Madeline',
    lastName: 'Oneal',
    'dob': '2000-04-08',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 0,
      'activity': 'HV',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 141
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 46
      },
      'cl': {
        val: 133
      },
      'gt': {
        val: 96
      },
      'el': {
        val: 140
      },
      'mm': {
        val: 99
      },
      'qt': {
        val: 115
      },
      've': {
        val: 98
      },
      'dlab': {
        val: 135
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5762
    }
  },
  {
    firstName: 'Minnie',
    lastName: 'Noel',
    'dob': '1998-08-14',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 13,
      'activity': 'EM',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 70
      },
      'weight': {
        val: 153
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 62
      },
      'cl': {
        val: 144
      },
      'gt': {
        val: 105
      },
      'el': {
        val: 110
      },
      'mm': {
        val: 119
      },
      'qt': {
        val: 122
      },
      've': {
        val: 106
      },
      'dlab': {
        val: 154
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 7183
    }
  },
  {
    firstName: 'Davis',
    lastName: 'Griffith',
    'dob': '1997-10-31',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 13,
      'activity': 'TC',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 74
      },
      'weight': {
        val: 148
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 60
      },
      'cl': {
        val: 111
      },
      'gt': {
        val: 140
      },
      'el': {
        val: 98
      },
      'mm': {
        val: 106
      },
      'qt': {
        val: 119
      },
      've': {
        val: 92
      },
      'dlab': {
        val: 151
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1413
    }
  },
  {
    firstName: 'Chase',
    lastName: 'Burks',
    'dob': '2000-09-28',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 18,
      'activity': 'TC',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 166
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 50
      },
      'cl': {
        val: 146
      },
      'gt': {
        val: 102
      },
      'el': {
        val: 95
      },
      'mm': {
        val: 123
      },
      'qt': {
        val: 103
      },
      've': {
        val: 110
      },
      'dlab': {
        val: 124
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7132
    }
  },
  {
    firstName: 'Baker',
    lastName: 'Craft',
    'dob': '1995-10-21',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 12,
      'activity': 'OT',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 64
      },
      'weight': {
        val: 156
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 55
      },
      'cl': {
        val: 109
      },
      'gt': {
        val: 108
      },
      'el': {
        val: 115
      },
      'mm': {
        val: 108
      },
      'qt': {
        val: 116
      },
      've': {
        val: 105
      },
      'dlab': {
        val: 122
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4761
    }
  },
  {
    firstName: 'Magdalena',
    lastName: 'Trujillo',
    'dob': '1996-10-22',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 12,
      'activity': 'HV',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 74
      },
      'weight': {
        val: 152
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 85
      },
      'cl': {
        val: 136
      },
      'gt': {
        val: 111
      },
      'el': {
        val: 99
      },
      'mm': {
        val: 123
      },
      'qt': {
        val: 115
      },
      've': {
        val: 94
      },
      'dlab': {
        val: 155
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4864
    }
  },
  {
    firstName: 'Henson',
    lastName: 'Mueller',
    'dob': '2000-04-18',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 14,
      'activity': 'TC',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 146
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 95
      },
      'cl': {
        val: 101
      },
      'gt': {
        val: 138
      },
      'el': {
        val: 127
      },
      'mm': {
        val: 104
      },
      'qt': {
        val: 95
      },
      've': {
        val: 93
      },
      'dlab': {
        val: 126
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8759
    }
  },
  {
    firstName: 'Noreen',
    lastName: 'Mejia',
    'dob': '1998-07-10',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 7,
      'activity': 'HV',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 170
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 64
      },
      'cl': {
        val: 113
      },
      'gt': {
        val: 96
      },
      'el': {
        val: 138
      },
      'mm': {
        val: 127
      },
      'qt': {
        val: 107
      },
      've': {
        val: 91
      },
      'dlab': {
        val: 132
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7039
    }
  },
  {
    firstName: 'Mercado',
    lastName: 'Graham',
    'dob': '1997-08-18',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 14,
      'activity': 'TC',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 174
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 43
      },
      'cl': {
        val: 124
      },
      'gt': {
        val: 101
      },
      'el': {
        val: 114
      },
      'mm': {
        val: 105
      },
      'qt': {
        val: 96
      },
      've': {
        val: 98
      },
      'dlab': {
        val: 138
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5952
    }
  },
  {
    firstName: 'Wilda',
    lastName: 'Flynn',
    'dob': '2000-12-23',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 3,
      'activity': 'HV',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 69
      },
      'weight': {
        val: 141
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 77
      },
      'cl': {
        val: 150
      },
      'gt': {
        val: 96
      },
      'el': {
        val: 124
      },
      'mm': {
        val: 113
      },
      'qt': {
        val: 129
      },
      've': {
        val: 104
      },
      'dlab': {
        val: 151
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9858
    }
  },
  {
    firstName: 'Mills',
    lastName: 'Bryan',
    'dob': '1998-05-09',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 16,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 63
      },
      'weight': {
        val: 165
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 61
      },
      'cl': {
        val: 109
      },
      'gt': {
        val: 139
      },
      'el': {
        val: 138
      },
      'mm': {
        val: 108
      },
      'qt': {
        val: 116
      },
      've': {
        val: 108
      },
      'dlab': {
        val: 119
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8161
    }
  },
  {
    firstName: 'Guthrie',
    lastName: 'Oconnor',
    'dob': '1997-04-11',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 10,
      'activity': 'EM',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 65
      },
      'weight': {
        val: 143
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 84
      },
      'cl': {
        val: 107
      },
      'gt': {
        val: 95
      },
      'el': {
        val: 125
      },
      'mm': {
        val: 95
      },
      'qt': {
        val: 126
      },
      've': {
        val: 95
      },
      'dlab': {
        val: 131
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7158
    }
  },
  {
    firstName: 'Vaughn',
    lastName: 'Mullins',
    'dob': '1998-06-12',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 4,
      'activity': 'HV',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 170
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 55
      },
      'cl': {
        val: 149
      },
      'gt': {
        val: 100
      },
      'el': {
        val: 123
      },
      'mm': {
        val: 108
      },
      'qt': {
        val: 100
      },
      've': {
        val: 109
      },
      'dlab': {
        val: 162
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3843
    }
  },
  {
    firstName: 'Booker',
    lastName: 'Mays',
    'dob': '1994-08-20',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 10,
      'activity': 'EM',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 156
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 47
      },
      'cl': {
        val: 142
      },
      'gt': {
        val: 115
      },
      'el': {
        val: 130
      },
      'mm': {
        val: 120
      },
      'qt': {
        val: 105
      },
      've': {
        val: 102
      },
      'dlab': {
        val: 159
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8389
    }
  },
  {
    firstName: 'Madeleine',
    lastName: 'Schneider',
    'dob': '1997-07-16',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 0,
      'activity': 'HV',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 188
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 52
      },
      'cl': {
        val: 141
      },
      'gt': {
        val: 117
      },
      'el': {
        val: 126
      },
      'mm': {
        val: 101
      },
      'qt': {
        val: 131
      },
      've': {
        val: 110
      },
      'dlab': {
        val: 149
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 3476
    }
  },
  {
    firstName: 'Terry',
    lastName: 'Hunter',
    'dob': '1998-08-05',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 11,
      'activity': 'TC',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 63
      },
      'weight': {
        val: 183
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 53
      },
      'cl': {
        val: 107
      },
      'gt': {
        val: 104
      },
      'el': {
        val: 105
      },
      'mm': {
        val: 121
      },
      'qt': {
        val: 107
      },
      've': {
        val: 109
      },
      'dlab': {
        val: 155
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1328
    }
  },
  {
    firstName: 'Hoover',
    lastName: 'Perez',
    'dob': '1995-04-04',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 6,
      'activity': 'HV',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 64
      },
      'weight': {
        val: 184
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 48
      },
      'cl': {
        val: 100
      },
      'gt': {
        val: 109
      },
      'el': {
        val: 127
      },
      'mm': {
        val: 108
      },
      'qt': {
        val: 116
      },
      've': {
        val: 103
      },
      'dlab': {
        val: 123
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5280
    }
  },
  {
    firstName: 'Bridges',
    lastName: 'Lowe',
    'dob': '1996-07-05',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 13,
      'activity': 'OT',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 67
      },
      'weight': {
        val: 164
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 75
      },
      'cl': {
        val: 114
      },
      'gt': {
        val: 139
      },
      'el': {
        val: 132
      },
      'mm': {
        val: 96
      },
      'qt': {
        val: 120
      },
      've': {
        val: 91
      },
      'dlab': {
        val: 154
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1664
    }
  },
  {
    firstName: 'Horton',
    lastName: 'Daugherty',
    'dob': '1994-07-06',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 8,
      'activity': 'OT',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 62
      },
      'weight': {
        val: 165
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 70
      },
      'cl': {
        val: 133
      },
      'gt': {
        val: 131
      },
      'el': {
        val: 131
      },
      'mm': {
        val: 105
      },
      'qt': {
        val: 131
      },
      've': {
        val: 102
      },
      'dlab': {
        val: 144
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1496
    }
  },
  {
    firstName: 'Bray',
    lastName: 'Dickerson',
    'dob': '1998-01-09',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 9,
      'activity': 'EM',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 178
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 62
      },
      'cl': {
        val: 127
      },
      'gt': {
        val: 140
      },
      'el': {
        val: 124
      },
      'mm': {
        val: 116
      },
      'qt': {
        val: 96
      },
      've': {
        val: 104
      },
      'dlab': {
        val: 147
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2121
    }
  },
  {
    firstName: 'Elvira',
    lastName: 'Landry',
    'dob': '1996-12-21',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 2,
      'activity': 'OT',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 182
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 52
      },
      'cl': {
        val: 113
      },
      'gt': {
        val: 139
      },
      'el': {
        val: 138
      },
      'mm': {
        val: 123
      },
      'qt': {
        val: 98
      },
      've': {
        val: 107
      },
      'dlab': {
        val: 116
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 3755
    }
  },
  {
    firstName: 'Howard',
    lastName: 'Snow',
    'dob': '1997-10-05',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 13,
      'activity': 'HV',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 161
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 98
      },
      'cl': {
        val: 128
      },
      'gt': {
        val: 131
      },
      'el': {
        val: 126
      },
      'mm': {
        val: 103
      },
      'qt': {
        val: 98
      },
      've': {
        val: 108
      },
      'dlab': {
        val: 133
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6544
    }
  },
  {
    firstName: 'Ratliff',
    lastName: 'Ryan',
    'dob': '1995-08-29',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 10,
      'activity': 'HV',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 63
      },
      'weight': {
        val: 149
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 75
      },
      'cl': {
        val: 132
      },
      'gt': {
        val: 109
      },
      'el': {
        val: 103
      },
      'mm': {
        val: 113
      },
      'qt': {
        val: 129
      },
      've': {
        val: 104
      },
      'dlab': {
        val: 123
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6037
    }
  },
  {
    firstName: 'Padilla',
    lastName: 'Stephenson',
    'dob': '1994-10-09',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 7,
      'activity': 'HV',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 62
      },
      'weight': {
        val: 156
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 39
      },
      'cl': {
        val: 130
      },
      'gt': {
        val: 117
      },
      'el': {
        val: 95
      },
      'mm': {
        val: 95
      },
      'qt': {
        val: 130
      },
      've': {
        val: 108
      },
      'dlab': {
        val: 152
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1753
    }
  },
  {
    firstName: 'Elinor',
    lastName: 'Monroe',
    'dob': '1995-05-02',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 8,
      'activity': 'HV',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 148
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 99
      },
      'cl': {
        val: 130
      },
      'gt': {
        val: 132
      },
      'el': {
        val: 120
      },
      'mm': {
        val: 102
      },
      'qt': {
        val: 102
      },
      've': {
        val: 91
      },
      'dlab': {
        val: 141
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 1
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 1
      }
    },
    'personal': {
      'ssn': 1367
    }
  },
  {
    firstName: 'Merle',
    lastName: 'Blackwell',
    'dob': '1996-11-15',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 6,
      'activity': 'OT',
      'active': true,
      'note': 'Birthday Upcoming'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 186
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 99
      },
      'cl': {
        val: 103
      },
      'gt': {
        val: 114
      },
      'el': {
        val: 117
      },
      'mm': {
        val: 121
      },
      'qt': {
        val: 122
      },
      've': {
        val: 101
      },
      'dlab': {
        val: 154
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1736
    }
  },
  {
    firstName: 'Dolly',
    lastName: 'Goff',
    'dob': '1998-06-23',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 20,
      'activity': 'EM',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 169
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 80
      },
      'cl': {
        val: 129
      },
      'gt': {
        val: 104
      },
      'el': {
        val: 136
      },
      'mm': {
        val: 112
      },
      'qt': {
        val: 104
      },
      've': {
        val: 98
      },
      'dlab': {
        val: 125
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5622
    }
  },
  {
    firstName: 'Reid',
    lastName: 'Salinas',
    'dob': '2000-08-23',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 6,
      'activity': 'HV',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 65
      },
      'weight': {
        val: 167
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 85
      },
      'cl': {
        val: 140
      },
      'gt': {
        val: 119
      },
      'el': {
        val: 113
      },
      'mm': {
        val: 130
      },
      'qt': {
        val: 115
      },
      've': {
        val: 103
      },
      'dlab': {
        val: 149
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 50
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7739
    }
  },
  {
    firstName: 'Rachael',
    lastName: 'Walton',
    'dob': '1997-11-21',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 14,
      'activity': 'HV',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 68
      },
      'weight': {
        val: 153
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 77
      },
      'cl': {
        val: 139
      },
      'gt': {
        val: 131
      },
      'el': {
        val: 141
      },
      'mm': {
        val: 120
      },
      'qt': {
        val: 107
      },
      've': {
        val: 100
      },
      'dlab': {
        val: 158
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 9354
    }
  },
  {
    firstName: 'Cecelia',
    lastName: 'Mercado',
    'dob': '1998-02-18',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 17,
      'activity': 'HV',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 72
      },
      'weight': {
        val: 181
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 52
      },
      'cl': {
        val: 137
      },
      'gt': {
        val: 130
      },
      'el': {
        val: 119
      },
      'mm': {
        val: 96
      },
      'qt': {
        val: 122
      },
      've': {
        val: 90
      },
      'dlab': {
        val: 142
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 40
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5530
    }
  },
  {
    firstName: 'Clare',
    lastName: 'Gutierrez',
    'dob': '1994-06-26',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 3,
      'activity': 'OT',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 62
      },
      'weight': {
        val: 155
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 92
      },
      'cl': {
        val: 100
      },
      'gt': {
        val: 112
      },
      'el': {
        val: 101
      },
      'mm': {
        val: 114
      },
      'qt': {
        val: 104
      },
      've': {
        val: 108
      },
      'dlab': {
        val: 159
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5794
    }
  },
  {
    firstName: 'Mabel',
    lastName: 'Hobbs',
    'dob': '1995-09-25',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 12,
      'activity': 'HV',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 64
      },
      'weight': {
        val: 157
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 68
      },
      'cl': {
        val: 126
      },
      'gt': {
        val: 99
      },
      'el': {
        val: 103
      },
      'mm': {
        val: 124
      },
      'qt': {
        val: 129
      },
      've': {
        val: 94
      },
      'dlab': {
        val: 130
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: false
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 1413
    }
  },
  {
    firstName: 'Flores',
    lastName: 'Roberts',
    'dob': '1998-01-16',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 16,
      'activity': 'OT',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 140
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 84
      },
      'cl': {
        val: 114
      },
      'gt': {
        val: 114
      },
      'el': {
        val: 116
      },
      'mm': {
        val: 113
      },
      'qt': {
        val: 127
      },
      've': {
        val: 107
      },
      'dlab': {
        val: 163
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 13
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6347
    }
  },
  {
    firstName: 'Molly',
    lastName: 'Burgess',
    'dob': '2000-10-31',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 15,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 101185
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 70
      },
      'weight': {
        val: 160
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 99
      },
      'cl': {
        val: 151
      },
      'gt': {
        val: 136
      },
      'el': {
        val: 95
      },
      'mm': {
        val: 108
      },
      'qt': {
        val: 119
      },
      've': {
        val: 102
      },
      'dlab': {
        val: 134
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7087
    }
  },
  {
    firstName: 'Hickman',
    lastName: 'Horne',
    'dob': '2000-09-22',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 6,
      'activity': 'EM',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 66
      },
      'weight': {
        val: 172
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 67
      },
      'cl': {
        val: 105
      },
      'gt': {
        val: 104
      },
      'el': {
        val: 109
      },
      'mm': {
        val: 98
      },
      'qt': {
        val: 102
      },
      've': {
        val: 101
      },
      'dlab': {
        val: 140
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 50
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 6138
    }
  },
  {
    firstName: 'Elsie',
    lastName: 'Contreras',
    'dob': '1997-07-27',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 12,
      'activity': 'OT',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 70
      },
      'weight': {
        val: 188
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 69
      },
      'cl': {
        val: 151
      },
      'gt': {
        val: 113
      },
      'el': {
        val: 112
      },
      'mm': {
        val: 127
      },
      'qt': {
        val: 96
      },
      've': {
        val: 104
      },
      'dlab': {
        val: 125
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 60
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 2
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8400
    }
  },
  {
    firstName: 'Aguilar',
    lastName: 'Nieves',
    'dob': '1997-01-18',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 16,
      'activity': 'EM',
      'active': true,
      'note': 'Additional screening'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 63
      },
      'weight': {
        val: 145
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 73
      },
      'cl': {
        val: 134
      },
      'gt': {
        val: 107
      },
      'el': {
        val: 123
      },
      'mm': {
        val: 96
      },
      'qt': {
        val: 121
      },
      've': {
        val: 103
      },
      'dlab': {
        val: 148
      },
      'driving': {
        'license': {
          has: false
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: false
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 40
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 7142
    }
  },
  {
    firstName: 'Rosales',
    lastName: 'Mckee',
    'dob': '1995-07-28',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 5,
      'activity': 'EM',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 73
      },
      'weight': {
        val: 178
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 83
      },
      'cl': {
        val: 102
      },
      'gt': {
        val: 134
      },
      'el': {
        val: 117
      },
      'mm': {
        val: 103
      },
      'qt': {
        val: 101
      },
      've': {
        val: 95
      },
      'dlab': {
        val: 129
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 30
        },
        'acuity2': {
          val: 30
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 8508
    }
  },
  {
    firstName: 'Dickerson',
    lastName: 'Macias',
    'dob': '2000-12-01',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 12,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '000000'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 62
      },
      'weight': {
        val: 137
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 66
      },
      'cl': {
        val: 139
      },
      'gt': {
        val: 112
      },
      'el': {
        val: 113
      },
      'mm': {
        val: 112
      },
      'qt': {
        val: 103
      },
      've': {
        val: 99
      },
      'dlab': {
        val: 146
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 1
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: false
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 2204
    }
  },
  {
    firstName: 'Mendez',
    lastName: 'Robbins',
    'dob': '1995-07-27',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 1,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 67
      },
      'weight': {
        val: 170
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 69
      },
      'cl': {
        val: 129
      },
      'gt': {
        val: 121
      },
      'el': {
        val: 129
      },
      'mm': {
        val: 113
      },
      'qt': {
        val: 123
      },
      've': {
        val: 99
      },
      'dlab': {
        val: 156
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 1
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 50
        },
        'acuity2': {
          val: 20
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: false
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4503
    }
  },
  {
    firstName: 'Serena',
    lastName: 'Dudley',
    'dob': '1998-03-27',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 18,
      'activity': 'OT',
      'active': true,
      'note': 'Informational meeting'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 64
      },
      'weight': {
        val: 139
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 68
      },
      'cl': {
        val: 149
      },
      'gt': {
        val: 131
      },
      'el': {
        val: 128
      },
      'mm': {
        val: 124
      },
      'qt': {
        val: 121
      },
      've': {
        val: 90
      },
      'dlab': {
        val: 139
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 25
        },
        'acuity1': {
          val: 25
        },
        'acuity2': {
          val: 40
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 4017
    }
  },
  {
    firstName: 'Tamara',
    lastName: 'Ellis',
    'dob': '2000-08-06',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 1,
      'activity': 'OT',
      'active': true,
      'note': 'Poolee Function'
    },
    'recruiter': {
      'recruiterId': '002295'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 74
      },
      'weight': {
        val: 162
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 93
      },
      'cl': {
        val: 113
      },
      'gt': {
        val: 120
      },
      'el': {
        val: 126
      },
      'mm': {
        val: 102
      },
      'qt': {
        val: 102
      },
      've': {
        val: 90
      },
      'dlab': {
        val: 145
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 12
        },
        'acuity': {
          val: 30
        },
        'acuity1': {
          val: 20
        },
        'acuity2': {
          val: 60
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: true
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5935
    }
  },
  {
    firstName: 'Luisa',
    lastName: 'Spencer',
    'dob': '2000-03-19',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 19,
      'activity': 'HV',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': 198848
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'M'
      },
      'clearance': {
        val: 2
      },
      'height': {
        val: 71
      },
      'weight': {
        val: 163
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 47
      },
      'cl': {
        val: 118
      },
      'gt': {
        val: 105
      },
      'el': {
        val: 127
      },
      'mm': {
        val: 115
      },
      'qt': {
        val: 105
      },
      've': {
        val: 110
      },
      'dlab': {
        val: 137
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
          has: true
        },
        'depth': {
          has: true
        },
        'color': {
          val: 14
        },
        'acuity': {
          val: 20
        },
        'acuity1': {
          val: 60
        },
        'acuity2': {
          val: 25
        }
      },
      'speech': {
        has: true
      },
      'algebra': {
        has: true
      },
      'tierGrad': {
        val: 1
      },
      'flightPhysical': {
        has: true
      },
      'pftClass1': {
        has: true
      },
      'waterQual': {
        has: false
      },
      'prpScreen': {
        val: 0
      }
    },
    'personal': {
      'ssn': 5552
    }
  },
  {
    firstName: 'Harriet',
    lastName: 'Talley',
    'dob': '1996-02-06',
    'status': 'Contract/Poolee',
    'notif': {
      'daysuntil': 5,
      'activity': 'EM',
      'active': true,
      'note': 'Monthly check-in'
    },
    'recruiter': {
      'recruiterId': '17289'
    },
    'match': {
      'usCitizen': {
        has: true
      },
      'usCitizenFamily': {
        has: true
      },
      'sex': {
        val: 'F'
      },
      'clearance': {
        val: 1
      },
      'height': {
        val: 67
      },
      'weight': {
        val: 185
      },
      'toe': {
        val: 6
      },
      'afqt': {
        val: 76
      },
      'cl': {
        val: 139
      },
      'gt': {
        val: 133
      },
      'el': {
        val: 126
      },
      'mm': {
        val: 95
      },
      'qt': {
        val: 122
      },
      've': {
        val: 99
      },
      'dlab': {
        val: 147
      },
      'driving': {
        'license': {
          has: true
        },
        'offenses': {
          val: 0
        },
        'violations': {
          val: 0
        }
      },
      'moral': {
        'conduct': {
          val: 0
        },
        'otherDrugs': {
          val: 0
        },
        'marijuana': {
          val: 0
        }
      },
      'vision': {
        'correctable': {
  {