import User from '../api/user/user.model';

User.find({}).remove()
  .then(() => {
    User.create(
      {
        provider: 'local',
        name: 'Test User',
        email: 'test@example.com',
        password: 'user'
      }, {
        provider: 'local',
        role: 'admin',
        name: 'MCRISS Admin',
        recruiterId: '000',
        rs: 'MCRC',
        email: 'admin@usmc.mil',
        password: 'admin'
      }, {
        provider: 'local',
        role: 'recruiter',
        name: 'Kyle Ericson',
        recruiterId: '1503303857',
        rs: 'MCRC',
        email: 'kyle@usmc.mil',
        password: 'recruiter'
      }, {
        provider: 'local',
        role: 'recruiter',
        name: 'Kai Recruiter',
        email: 'kai@usmc.mil',
        password: 'recruiter',
        recruiterId: '979101185',
        rs: 'ERR',
        priorityPefs: ['CA', 'AG', 'CD']
      }, {
        provider: 'local',
        role: 'recruiter',
        name: 'Judy Recruiter',
        email: 'judy@usmc.mil',
        password: 'recruiter',
        recruiterId: '172891922',
        rs: '4MCD',
        priorityPefs: ['CH']
      }, {
        provider: 'local',
        role: 'recruiter',
        name: 'Omar Recruiter',
        email: 'omar@usmc.mil',
        password: 'recruiter',
        recruiterId : '198848953',
        rs: 'Frederick',
        priorityPefs: ['CE', 'BA', 'AJ', 'CJ']
      }, {
        provider: 'local',
        role: 'recruiter',
        name: 'Amber Recruiter',
        email: 'amber@usmc.mil',
        password: 'recruiter',
        recruiterId : '002995102',
        rs: 'Chantilly',
        priorityPefs: ['CF', 'AG', 'BY']
    })
      .then(() => {
        console.log('finished populating USERS');
      });
  });
