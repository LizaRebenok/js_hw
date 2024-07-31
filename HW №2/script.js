`Use strict`

// Task #1

let name = `John`;
let admin = name;
alert(admin);

// Task #2

const ourPlanet = `earth`;
let nameVisitorSite = prompt(`Enter your name`);

// Task #3

let add = 10 + `10`;
console.log(typeof add);
console.log(add);

/* При використанні оператора "+" між типами даних Number та String математична операція буде некорректна,
так як браузер буде сприймати результат за строку, виходячи з цього ми отримаємо як результат конкатенацію строки.
Але у інших випадках, де використовуються оператори "-,/,*", мат. операція дасть вірну відповідь та буде типом даних Num.
*/