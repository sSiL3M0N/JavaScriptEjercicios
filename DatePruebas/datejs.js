let ahora=new Date();
let birthday = new Date('December 17, 1995 03:24:00')

const tiempoA=ahora.getTime();
const tiempoB=birthday.getTime();


console.log(`${ahora.getFullYear()} ${ahora.getMonth()} ${ahora.getDate()} Mayor: ${tiempoA>tiempoB}`);

console.log(`${birthday.getFullYear()} ${birthday.getMonth()} ${birthday.getDate()} Mayor: ${tiempoA<tiempoB}`);

