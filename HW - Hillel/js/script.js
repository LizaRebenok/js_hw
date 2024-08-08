`Use strict`;

const hoursRequest = Number(prompt(`Введіть кількість годин`));
const hoursResult = isNaN(hoursRequest) ? Number(prompt(`Помилка! Введіть число.`)) : hoursRequest;

console.log(hoursResult);

const hoursInMinutes = hoursResult * 60;
console.log(hoursInMinutes);

const minutesToSeconds = hoursInMinutes * 60;
console.log(minutesToSeconds);

alert(`Результат вашого запиту: ${hoursResult} годин(а) в секундах буде ${minutesToSeconds}.`);

