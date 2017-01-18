import Rs from '../api/rs/rs.model';

Rs.find({}).remove()
  .then(() => {
  Rs.create(

    {
    name: "MCRC",
    rs: "MCRC",
    children: [{n:'ERR', l:0}, {n:'WRR', l:0}, {n:'1MCD', l:1}, {n:'4MCD', l:1}, {n:'6MCD', l:1}, {n:'Frederick', l:2}, {n:'Richmond', l:2}, {n:'Baltimore', l:2}, {n:'Chantilly', l:3}, {n:'Fairfax', l:3}, {n:'Warrenton', l:3}],
    level: 0,
    allocation: {
      AE: {total: 131, reserve:2, plan:{m0:1,m1:1,m2:1,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AF: {total: 152, reserve:3, plan:{m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AG: {total: 140, reserve:2, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:2,m6:2,m7:2,m8:2,m9:2,m10:2,m11:2}, actual: {m0:2,m1:2,m2:2,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AJ: {total: 145, reserve:5, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      BA: {total: 125, reserve:0, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      BY: {total: 125, reserve:3, plan:{m0:3,m1:3,m2:3,m3:3,m4:3,m5:3,m6:3,m7:3,m8:3,m9:3,m10:3,m11:3}, actual: {m0:3,m1:3,m2:3,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CA: {total: 136, reserve:1, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CB: {total: 131, reserve:6, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CC: {total:  81, reserve:2, plan:{m0:0,m1:0,m2:0,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CD: {total: 124, reserve:7, plan:{m0:5,m1:5,m2:5,m3:5,m4:5,m5:5,m6:5,m7:5,m8:5,m9:5,m10:5,m11:5}, actual: {m0:5,m1:5,m2:5,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CE: {total: 133, reserve:9, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CF: {total: 144, reserve:4, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CG: {total:  80, reserve:2, plan:{m0:5,m1:5,m2:5,m3:5,m4:5,m5:5,m6:5,m7:5,m8:5,m9:5,m10:5,m11:5}, actual: {m0:5,m1:5,m2:5,m3:4,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CH: {total: 122, reserve:2, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CJ: {total: 131, reserve:7, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:2,m6:2,m7:2,m8:2,m9:2,m10:2,m11:2}, actual: {m0:2,m1:2,m2:2,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CK: {total: 160, reserve:0, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:0,m6:2,m7:0,m8:2,m9:0,m10:2,m11:0}, actual: {m0:2,m1:1,m2:2,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CL: {total: 160, reserve:7, plan:{m0:0,m1:0,m2:0,m3:1,m4:1,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CM: {total:  82, reserve:6, plan:{m0:3,m1:3,m2:3,m3:3,m4:3,m5:3,m6:3,m7:3,m8:3,m9:3,m10:3,m11:3}, actual: {m0:3,m1:3,m2:3,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CN: {total: 143, reserve:3, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}}
    }
  },
    
  {
    name: 'WRR',
    rs: 'WRR',
    parents: [{n:'MCRC', l:0}],
    children: [{n:'8MCD', l:0}, {n:'9MCD', l:0}, {n:'12MCD', l:0}],
    level: 1,
    allocation: {
      AE: {total: 131, reserve:2, plan:{m0:1,m1:1,m2:1,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AF: {total: 152, reserve:3, plan:{m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AG: {total: 140, reserve:2, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:2,m6:2,m7:2,m8:2,m9:2,m10:2,m11:2}, actual: {m0:2,m1:2,m2:2,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AJ: {total: 145, reserve:5, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      BA: {total: 125, reserve:0, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      BY: {total: 125, reserve:3, plan:{m0:3,m1:3,m2:3,m3:3,m4:3,m5:3,m6:3,m7:3,m8:3,m9:3,m10:3,m11:3}, actual: {m0:3,m1:3,m2:3,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CA: {total: 136, reserve:1, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CB: {total: 131, reserve:6, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CC: {total:  81, reserve:2, plan:{m0:0,m1:0,m2:0,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CD: {total: 124, reserve:7, plan:{m0:5,m1:5,m2:5,m3:5,m4:5,m5:5,m6:5,m7:5,m8:5,m9:5,m10:5,m11:5}, actual: {m0:5,m1:5,m2:5,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CE: {total: 133, reserve:9, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CF: {total: 144, reserve:4, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CG: {total:  80, reserve:2, plan:{m0:5,m1:5,m2:5,m3:5,m4:5,m5:5,m6:5,m7:5,m8:5,m9:5,m10:5,m11:5}, actual: {m0:5,m1:5,m2:5,m3:4,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CH: {total: 122, reserve:2, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CJ: {total: 131, reserve:7, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:2,m6:2,m7:2,m8:2,m9:2,m10:2,m11:2}, actual: {m0:2,m1:2,m2:2,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CK: {total: 160, reserve:0, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:0,m6:2,m7:0,m8:2,m9:0,m10:2,m11:0}, actual: {m0:2,m1:1,m2:2,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CL: {total: 160, reserve:7, plan:{m0:0,m1:0,m2:0,m3:1,m4:1,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CM: {total:  82, reserve:6, plan:{m0:3,m1:3,m2:3,m3:3,m4:3,m5:3,m6:3,m7:3,m8:3,m9:3,m10:3,m11:3}, actual: {m0:3,m1:3,m2:3,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CN: {total: 143, reserve:3, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}}
    }
  },
    
  {
    name: 'ERR',
    rs: 'ERR',
    parents: [{n:'MCRC', l:0}],
    children: [{n:'1MCD', l:0}, {n:'4MCD', l:0}, {n:'6MCD', l:0}, {n:'Frederick', l:1}, {n:'Richmond', l:1}, {n:'Baltimore', l:1}, {n:'Chantilly', l:2}, {n:'Fairfax', l:2}, {n:'Warrenton', l:2}],
    level: 1,
    allocation: {
      AE: {total: 131, reserve:2, plan:{m0:1,m1:1,m2:1,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AF: {total: 152, reserve:3, plan:{m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AG: {total: 140, reserve:2, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:2,m6:2,m7:2,m8:2,m9:2,m10:2,m11:2}, actual: {m0:2,m1:2,m2:2,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AJ: {total: 145, reserve:5, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      BA: {total: 125, reserve:0, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      BY: {total: 125, reserve:3, plan:{m0:3,m1:3,m2:3,m3:3,m4:3,m5:3,m6:3,m7:3,m8:3,m9:3,m10:3,m11:3}, actual: {m0:3,m1:3,m2:3,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CA: {total: 136, reserve:1, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CB: {total: 131, reserve:6, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CC: {total:  81, reserve:2, plan:{m0:0,m1:0,m2:0,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CD: {total: 124, reserve:7, plan:{m0:5,m1:5,m2:5,m3:5,m4:5,m5:5,m6:5,m7:5,m8:5,m9:5,m10:5,m11:5}, actual: {m0:5,m1:5,m2:5,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CE: {total: 133, reserve:9, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CF: {total: 144, reserve:4, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CG: {total:  80, reserve:2, plan:{m0:5,m1:5,m2:5,m3:5,m4:5,m5:5,m6:5,m7:5,m8:5,m9:5,m10:5,m11:5}, actual: {m0:5,m1:5,m2:5,m3:4,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CH: {total: 122, reserve:2, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CJ: {total: 131, reserve:7, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:2,m6:2,m7:2,m8:2,m9:2,m10:2,m11:2}, actual: {m0:2,m1:2,m2:2,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CK: {total: 160, reserve:0, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:0,m6:2,m7:0,m8:2,m9:0,m10:2,m11:0}, actual: {m0:2,m1:1,m2:2,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CL: {total: 160, reserve:7, plan:{m0:0,m1:0,m2:0,m3:1,m4:1,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CM: {total:  82, reserve:6, plan:{m0:3,m1:3,m2:3,m3:3,m4:3,m5:3,m6:3,m7:3,m8:3,m9:3,m10:3,m11:3}, actual: {m0:3,m1:3,m2:3,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CN: {total: 143, reserve:3, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}}
    }
  },
    
  {
    name: '1st MCD',
    rs: '1MCD',
    parents: [{n:'MCRC', l:1}, {n:'ERR', l:0}],
    level: 2,
    allocation: {
      AE: {total: 131, reserve:2, plan:{m0:1,m1:1,m2:1,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AF: {total: 152, reserve:3, plan:{m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AG: {total: 140, reserve:2, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:2,m6:2,m7:2,m8:2,m9:2,m10:2,m11:2}, actual: {m0:2,m1:2,m2:2,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AJ: {total: 145, reserve:5, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      BA: {total: 125, reserve:0, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      BY: {total: 125, reserve:3, plan:{m0:3,m1:3,m2:3,m3:3,m4:3,m5:3,m6:3,m7:3,m8:3,m9:3,m10:3,m11:3}, actual: {m0:3,m1:3,m2:3,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CA: {total: 136, reserve:1, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CB: {total: 131, reserve:6, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CC: {total:  81, reserve:2, plan:{m0:0,m1:0,m2:0,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CD: {total: 124, reserve:7, plan:{m0:5,m1:5,m2:5,m3:5,m4:5,m5:5,m6:5,m7:5,m8:5,m9:5,m10:5,m11:5}, actual: {m0:5,m1:5,m2:5,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CE: {total: 133, reserve:9, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CF: {total: 144, reserve:4, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CG: {total:  80, reserve:2, plan:{m0:5,m1:5,m2:5,m3:5,m4:5,m5:5,m6:5,m7:5,m8:5,m9:5,m10:5,m11:5}, actual: {m0:5,m1:5,m2:5,m3:4,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CH: {total: 122, reserve:2, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CJ: {total: 131, reserve:7, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:2,m6:2,m7:2,m8:2,m9:2,m10:2,m11:2}, actual: {m0:2,m1:2,m2:2,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CK: {total: 160, reserve:0, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:0,m6:2,m7:0,m8:2,m9:0,m10:2,m11:0}, actual: {m0:2,m1:1,m2:2,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CL: {total: 160, reserve:7, plan:{m0:0,m1:0,m2:0,m3:1,m4:1,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CM: {total:  82, reserve:6, plan:{m0:3,m1:3,m2:3,m3:3,m4:3,m5:3,m6:3,m7:3,m8:3,m9:3,m10:3,m11:3}, actual: {m0:3,m1:3,m2:3,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CN: {total: 143, reserve:3, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}}
    }
  },
    
  {
    name: "4th MCD",
    rs: "4MCD",
    parents: [{n:'MCRC', l:1}, {n:'ERR', l:0}],
    children: [{n:'Frederick', l:0}, {n:'Richmond', l:0}, {n:'Baltimore', l:0}, {n:'Chantilly', l:1}, {n:'Fairfax', l:1}, {n:'Warrenton', l:1}],
    level: 2,
    allocation: {
      AE: {total: 131, reserve:2, plan:{m0:1,m1:1,m2:1,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AF: {total: 152, reserve:3, plan:{m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AG: {total: 140, reserve:2, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:2,m6:2,m7:2,m8:2,m9:2,m10:2,m11:2}, actual: {m0:2,m1:2,m2:2,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AJ: {total: 145, reserve:5, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      BA: {total: 125, reserve:0, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      BY: {total: 125, reserve:3, plan:{m0:3,m1:3,m2:3,m3:3,m4:3,m5:3,m6:3,m7:3,m8:3,m9:3,m10:3,m11:3}, actual: {m0:3,m1:3,m2:3,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CA: {total: 136, reserve:1, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CB: {total: 131, reserve:6, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CC: {total:  81, reserve:2, plan:{m0:0,m1:0,m2:0,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CD: {total: 124, reserve:7, plan:{m0:5,m1:5,m2:5,m3:5,m4:5,m5:5,m6:5,m7:5,m8:5,m9:5,m10:5,m11:5}, actual: {m0:5,m1:5,m2:5,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CE: {total: 133, reserve:9, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CF: {total: 144, reserve:4, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CG: {total:  80, reserve:2, plan:{m0:5,m1:5,m2:5,m3:5,m4:5,m5:5,m6:5,m7:5,m8:5,m9:5,m10:5,m11:5}, actual: {m0:5,m1:5,m2:5,m3:4,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CH: {total: 122, reserve:2, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CJ: {total: 131, reserve:7, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:2,m6:2,m7:2,m8:2,m9:2,m10:2,m11:2}, actual: {m0:2,m1:2,m2:2,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CK: {total: 160, reserve:0, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:0,m6:2,m7:0,m8:2,m9:0,m10:2,m11:0}, actual: {m0:2,m1:1,m2:2,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CL: {total: 160, reserve:7, plan:{m0:0,m1:0,m2:0,m3:1,m4:1,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CM: {total:  82, reserve:6, plan:{m0:3,m1:3,m2:3,m3:3,m4:3,m5:3,m6:3,m7:3,m8:3,m9:3,m10:3,m11:3}, actual: {m0:3,m1:3,m2:3,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CN: {total: 143, reserve:3, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}}
    }
  },
    
  {
    name: "6th MCD",
    rs: "6MCD",
    parents: [{n:'MCRC', l:1}, {n:'ERR', l:0}],
    level: 2,
    allocation: {
      AE: {total: 131, reserve:2, plan:{m0:1,m1:1,m2:1,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AF: {total: 152, reserve:3, plan:{m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AG: {total: 140, reserve:2, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:2,m6:2,m7:2,m8:2,m9:2,m10:2,m11:2}, actual: {m0:2,m1:2,m2:2,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AJ: {total: 145, reserve:5, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      BA: {total: 125, reserve:0, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      BY: {total: 125, reserve:3, plan:{m0:3,m1:3,m2:3,m3:3,m4:3,m5:3,m6:3,m7:3,m8:3,m9:3,m10:3,m11:3}, actual: {m0:3,m1:3,m2:3,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CA: {total: 136, reserve:1, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CB: {total: 131, reserve:6, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CC: {total:  81, reserve:2, plan:{m0:0,m1:0,m2:0,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CD: {total: 124, reserve:7, plan:{m0:5,m1:5,m2:5,m3:5,m4:5,m5:5,m6:5,m7:5,m8:5,m9:5,m10:5,m11:5}, actual: {m0:5,m1:5,m2:5,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CE: {total: 133, reserve:9, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CF: {total: 144, reserve:4, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CG: {total:  80, reserve:2, plan:{m0:5,m1:5,m2:5,m3:5,m4:5,m5:5,m6:5,m7:5,m8:5,m9:5,m10:5,m11:5}, actual: {m0:5,m1:5,m2:5,m3:4,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CH: {total: 122, reserve:2, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CJ: {total: 131, reserve:7, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:2,m6:2,m7:2,m8:2,m9:2,m10:2,m11:2}, actual: {m0:2,m1:2,m2:2,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CK: {total: 160, reserve:0, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:0,m6:2,m7:0,m8:2,m9:0,m10:2,m11:0}, actual: {m0:2,m1:1,m2:2,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CL: {total: 160, reserve:7, plan:{m0:0,m1:0,m2:0,m3:1,m4:1,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CM: {total:  82, reserve:6, plan:{m0:3,m1:3,m2:3,m3:3,m4:3,m5:3,m6:3,m7:3,m8:3,m9:3,m10:3,m11:3}, actual: {m0:3,m1:3,m2:3,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CN: {total: 143, reserve:3, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}}
    }
  },

  {
    name: 'RS Frederick',
    rs: 'Frederick',
    parents: [{n:'MCRC', l:2}, {n:'ERR', l:1}, {n:'4MCD', l:0}],
    children: [{n:'Chantilly', l:0}, {n:'Fairfax', l:0}, {n:'Warrenton', l:0}],
    level: 3,
    allocation: {
      AE: {total: 131, reserve:2, plan:{m0:1,m1:1,m2:1,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AF: {total: 152, reserve:3, plan:{m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AG: {total: 140, reserve:2, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:2,m6:2,m7:2,m8:2,m9:2,m10:2,m11:2}, actual: {m0:2,m1:2,m2:2,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AJ: {total: 145, reserve:5, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      BA: {total: 125, reserve:0, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      BY: {total: 125, reserve:3, plan:{m0:3,m1:3,m2:3,m3:3,m4:3,m5:3,m6:3,m7:3,m8:3,m9:3,m10:3,m11:3}, actual: {m0:3,m1:3,m2:3,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CA: {total: 136, reserve:1, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CB: {total: 131, reserve:6, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CC: {total:  81, reserve:2, plan:{m0:0,m1:0,m2:0,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CD: {total: 124, reserve:7, plan:{m0:5,m1:5,m2:5,m3:5,m4:5,m5:5,m6:5,m7:5,m8:5,m9:5,m10:5,m11:5}, actual: {m0:5,m1:5,m2:5,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CE: {total: 133, reserve:9, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CF: {total: 144, reserve:4, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CG: {total:  80, reserve:2, plan:{m0:5,m1:5,m2:5,m3:5,m4:5,m5:5,m6:5,m7:5,m8:5,m9:5,m10:5,m11:5}, actual: {m0:5,m1:5,m2:5,m3:4,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CH: {total: 122, reserve:2, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CJ: {total: 131, reserve:7, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:2,m6:2,m7:2,m8:2,m9:2,m10:2,m11:2}, actual: {m0:2,m1:2,m2:2,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CK: {total: 160, reserve:0, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:0,m6:2,m7:0,m8:2,m9:0,m10:2,m11:0}, actual: {m0:2,m1:1,m2:2,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CL: {total: 160, reserve:7, plan:{m0:0,m1:0,m2:0,m3:1,m4:1,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CM: {total:  82, reserve:6, plan:{m0:3,m1:3,m2:3,m3:3,m4:3,m5:3,m6:3,m7:3,m8:3,m9:3,m10:3,m11:3}, actual: {m0:3,m1:3,m2:3,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CN: {total: 143, reserve:3, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}}
    }
  },

  {
    name: 'RS Baltimore',
    rs: 'Baltimore',
    parents: [{n:'MCRC', l:2}, {n:'ERR', l:1}, {n:'4MCD', l:0}],
    level: 3,
    allocation: {
      AE: {total: 131, reserve:2, plan:{m0:1,m1:1,m2:1,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AF: {total: 152, reserve:3, plan:{m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AG: {total: 140, reserve:2, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:2,m6:2,m7:2,m8:2,m9:2,m10:2,m11:2}, actual: {m0:2,m1:2,m2:2,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AJ: {total: 145, reserve:5, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      BA: {total: 125, reserve:0, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      BY: {total: 125, reserve:3, plan:{m0:3,m1:3,m2:3,m3:3,m4:3,m5:3,m6:3,m7:3,m8:3,m9:3,m10:3,m11:3}, actual: {m0:3,m1:3,m2:3,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CA: {total: 136, reserve:1, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CB: {total: 131, reserve:6, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CC: {total:  81, reserve:2, plan:{m0:0,m1:0,m2:0,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CD: {total: 124, reserve:7, plan:{m0:5,m1:5,m2:5,m3:5,m4:5,m5:5,m6:5,m7:5,m8:5,m9:5,m10:5,m11:5}, actual: {m0:5,m1:5,m2:5,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CE: {total: 133, reserve:9, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CF: {total: 144, reserve:4, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CG: {total:  80, reserve:2, plan:{m0:5,m1:5,m2:5,m3:5,m4:5,m5:5,m6:5,m7:5,m8:5,m9:5,m10:5,m11:5}, actual: {m0:5,m1:5,m2:5,m3:4,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CH: {total: 122, reserve:2, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CJ: {total: 131, reserve:7, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:2,m6:2,m7:2,m8:2,m9:2,m10:2,m11:2}, actual: {m0:2,m1:2,m2:2,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CK: {total: 160, reserve:0, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:0,m6:2,m7:0,m8:2,m9:0,m10:2,m11:0}, actual: {m0:2,m1:1,m2:2,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CL: {total: 160, reserve:7, plan:{m0:0,m1:0,m2:0,m3:1,m4:1,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CM: {total:  82, reserve:6, plan:{m0:3,m1:3,m2:3,m3:3,m4:3,m5:3,m6:3,m7:3,m8:3,m9:3,m10:3,m11:3}, actual: {m0:3,m1:3,m2:3,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CN: {total: 143, reserve:3, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}}
    }
  },

  {
    name: "RS Richmond",
    rs: 'Richmond',
    parents: [{n:'MCRC', l:2}, {n:'ERR', l:1}, {n:'4MCD', l:0}],
    level: 3,
    allocation: {
      AE: {total: 131, reserve:2, plan:{m0:1,m1:1,m2:1,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AF: {total: 152, reserve:3, plan:{m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AG: {total: 140, reserve:2, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:2,m6:2,m7:2,m8:2,m9:2,m10:2,m11:2}, actual: {m0:2,m1:2,m2:2,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AJ: {total: 145, reserve:5, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      BA: {total: 125, reserve:0, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      BY: {total: 125, reserve:3, plan:{m0:3,m1:3,m2:3,m3:3,m4:3,m5:3,m6:3,m7:3,m8:3,m9:3,m10:3,m11:3}, actual: {m0:3,m1:3,m2:3,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CA: {total: 136, reserve:1, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CB: {total: 131, reserve:6, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CC: {total:  81, reserve:2, plan:{m0:0,m1:0,m2:0,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CD: {total: 124, reserve:7, plan:{m0:5,m1:5,m2:5,m3:5,m4:5,m5:5,m6:5,m7:5,m8:5,m9:5,m10:5,m11:5}, actual: {m0:5,m1:5,m2:5,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CE: {total: 133, reserve:9, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CF: {total: 144, reserve:4, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CG: {total:  80, reserve:2, plan:{m0:5,m1:5,m2:5,m3:5,m4:5,m5:5,m6:5,m7:5,m8:5,m9:5,m10:5,m11:5}, actual: {m0:5,m1:5,m2:5,m3:4,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CH: {total: 122, reserve:2, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CJ: {total: 131, reserve:7, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:2,m6:2,m7:2,m8:2,m9:2,m10:2,m11:2}, actual: {m0:2,m1:2,m2:2,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CK: {total: 160, reserve:0, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:0,m6:2,m7:0,m8:2,m9:0,m10:2,m11:0}, actual: {m0:2,m1:1,m2:2,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CL: {total: 160, reserve:7, plan:{m0:0,m1:0,m2:0,m3:1,m4:1,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CM: {total:  82, reserve:6, plan:{m0:3,m1:3,m2:3,m3:3,m4:3,m5:3,m6:3,m7:3,m8:3,m9:3,m10:3,m11:3}, actual: {m0:3,m1:3,m2:3,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CN: {total: 143, reserve:3, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}}
    }
  },
    
  {
    name: "RSS Chantilly",
    rs: "Chantilly",
    parents: [{n:'MCRC', l:3}, {n:'ERR', l:2}, {n:'4MCD', l:1}, {n:'Frederick', l:0}],
    level: 4,
    allocation: {
      AE: {total: 131, reserve:2, plan:{m0:1,m1:1,m2:1,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AF: {total: 152, reserve:3, plan:{m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AG: {total: 140, reserve:2, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:2,m6:2,m7:2,m8:2,m9:2,m10:2,m11:2}, actual: {m0:2,m1:2,m2:2,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AJ: {total: 145, reserve:5, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      BA: {total: 125, reserve:0, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      BY: {total: 125, reserve:3, plan:{m0:3,m1:3,m2:3,m3:3,m4:3,m5:3,m6:3,m7:3,m8:3,m9:3,m10:3,m11:3}, actual: {m0:3,m1:3,m2:3,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CA: {total: 136, reserve:1, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CB: {total: 131, reserve:6, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CC: {total:  81, reserve:2, plan:{m0:0,m1:0,m2:0,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CD: {total: 124, reserve:7, plan:{m0:5,m1:5,m2:5,m3:5,m4:5,m5:5,m6:5,m7:5,m8:5,m9:5,m10:5,m11:5}, actual: {m0:5,m1:5,m2:5,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CE: {total: 133, reserve:9, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CF: {total: 144, reserve:4, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CG: {total:  80, reserve:2, plan:{m0:5,m1:5,m2:5,m3:5,m4:5,m5:5,m6:5,m7:5,m8:5,m9:5,m10:5,m11:5}, actual: {m0:5,m1:5,m2:5,m3:4,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CH: {total: 122, reserve:2, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CJ: {total: 131, reserve:7, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:2,m6:2,m7:2,m8:2,m9:2,m10:2,m11:2}, actual: {m0:2,m1:2,m2:2,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CK: {total: 160, reserve:0, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:0,m6:2,m7:0,m8:2,m9:0,m10:2,m11:0}, actual: {m0:2,m1:1,m2:2,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CL: {total: 160, reserve:7, plan:{m0:0,m1:0,m2:0,m3:1,m4:1,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CM: {total:  82, reserve:6, plan:{m0:3,m1:3,m2:3,m3:3,m4:3,m5:3,m6:3,m7:3,m8:3,m9:3,m10:3,m11:3}, actual: {m0:3,m1:3,m2:3,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CN: {total: 143, reserve:3, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}}   
    }
  },
    
  {
    name: "RSS Fairfax",
    rs: "Fairfax",
    parents: [{n:'MCRC', l:3}, {n:'ERR', l:2}, {n:'4MCD', l:1}, {n:'Frederick', l:0}],
    level: 4,
    allocation: {
      AE: {total: 131, reserve:2, plan:{m0:1,m1:1,m2:1,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AF: {total: 152, reserve:3, plan:{m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AG: {total: 140, reserve:2, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:2,m6:2,m7:2,m8:2,m9:2,m10:2,m11:2}, actual: {m0:2,m1:2,m2:2,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AJ: {total: 145, reserve:5, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      BA: {total: 125, reserve:0, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      BY: {total: 125, reserve:3, plan:{m0:3,m1:3,m2:3,m3:3,m4:3,m5:3,m6:3,m7:3,m8:3,m9:3,m10:3,m11:3}, actual: {m0:3,m1:3,m2:3,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CA: {total: 136, reserve:1, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CB: {total: 131, reserve:6, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CC: {total:  81, reserve:2, plan:{m0:0,m1:0,m2:0,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CD: {total: 124, reserve:7, plan:{m0:5,m1:5,m2:5,m3:5,m4:5,m5:5,m6:5,m7:5,m8:5,m9:5,m10:5,m11:5}, actual: {m0:5,m1:5,m2:5,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CE: {total: 133, reserve:9, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CF: {total: 144, reserve:4, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CG: {total:  80, reserve:2, plan:{m0:5,m1:5,m2:5,m3:5,m4:5,m5:5,m6:5,m7:5,m8:5,m9:5,m10:5,m11:5}, actual: {m0:5,m1:5,m2:5,m3:4,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CH: {total: 122, reserve:2, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CJ: {total: 131, reserve:7, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:2,m6:2,m7:2,m8:2,m9:2,m10:2,m11:2}, actual: {m0:2,m1:2,m2:2,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CK: {total: 160, reserve:0, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:0,m6:2,m7:0,m8:2,m9:0,m10:2,m11:0}, actual: {m0:2,m1:1,m2:2,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CL: {total: 160, reserve:7, plan:{m0:0,m1:0,m2:0,m3:1,m4:1,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CM: {total:  82, reserve:6, plan:{m0:3,m1:3,m2:3,m3:3,m4:3,m5:3,m6:3,m7:3,m8:3,m9:3,m10:3,m11:3}, actual: {m0:3,m1:3,m2:3,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CN: {total: 143, reserve:3, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}}      
    }
  },
    
  {
    name: "RSS Warrenton",
    rs: "Warrenton",
    parents: [{n:'MCRC', l:3}, {n:'ERR', l:2}, {n:'4MCD', l:1}, {n:'Frederick', l:0}],
    level: 4,
    allocation: {
      AE: {total: 131, reserve:2, plan:{m0:1,m1:1,m2:1,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AF: {total: 152, reserve:3, plan:{m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AG: {total: 140, reserve:2, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:2,m6:2,m7:2,m8:2,m9:2,m10:2,m11:2}, actual: {m0:2,m1:2,m2:2,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      AJ: {total: 145, reserve:5, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      BA: {total: 125, reserve:0, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      BY: {total: 125, reserve:3, plan:{m0:3,m1:3,m2:3,m3:3,m4:3,m5:3,m6:3,m7:3,m8:3,m9:3,m10:3,m11:3}, actual: {m0:3,m1:3,m2:3,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CA: {total: 136, reserve:1, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CB: {total: 131, reserve:6, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CC: {total:  81, reserve:2, plan:{m0:0,m1:0,m2:0,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CD: {total: 124, reserve:7, plan:{m0:5,m1:5,m2:5,m3:5,m4:5,m5:5,m6:5,m7:5,m8:5,m9:5,m10:5,m11:5}, actual: {m0:5,m1:5,m2:5,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CE: {total: 133, reserve:9, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CF: {total: 144, reserve:4, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CG: {total:  80, reserve:2, plan:{m0:5,m1:5,m2:5,m3:5,m4:5,m5:5,m6:5,m7:5,m8:5,m9:5,m10:5,m11:5}, actual: {m0:5,m1:5,m2:5,m3:4,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CH: {total: 122, reserve:2, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CJ: {total: 131, reserve:7, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:2,m6:2,m7:2,m8:2,m9:2,m10:2,m11:2}, actual: {m0:2,m1:2,m2:2,m3:1,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CK: {total: 160, reserve:0, plan:{m0:2,m1:2,m2:2,m3:2,m4:2,m5:0,m6:2,m7:0,m8:2,m9:0,m10:2,m11:0}, actual: {m0:2,m1:1,m2:2,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CL: {total: 160, reserve:7, plan:{m0:0,m1:0,m2:0,m3:1,m4:1,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}, actual: {m0:0,m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CM: {total:  82, reserve:6, plan:{m0:3,m1:3,m2:3,m3:3,m4:3,m5:3,m6:3,m7:3,m8:3,m9:3,m10:3,m11:3}, actual: {m0:3,m1:3,m2:3,m3:2,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}},
      CN: {total: 143, reserve:3, plan:{m0:1,m1:1,m2:1,m3:1,m4:1,m5:1,m6:1,m7:1,m8:1,m9:1,m10:1,m11:1}, actual: {m0:1,m1:1,m2:1,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0}}   
    }
  }
    
    )
  .then(() => {
    console.log('finished populating RSS');
  });
});