const date = new Date();
const moonLanding = new Date()
//const moonLanding = new Date()
const birthday = new Date();
const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];

console.log((moonLanding.getFullYear()) + '年'　+ (moonLanding.getMonth()+1) + '月' + (birthday.getDate()) +'日' )