`Use strict`;

const userName = prompt('Як вас звати?', '');
const userAge = Number(prompt('Скільки вам років?', ''));

const user = {
  name: userName,
  age: userAge,
};

const userData = function () {
  return `${this.name} ${this.age}`;
};

const apply = function (func, context) {
  context.func = func; // тимчасово додаємо функцію userData, у властивість об'єкту user
  const result = context.func(); // виклик функції як метод об'єкту user
  delete context.func; // видалення тимчасової функції
  return result;
};

const bind = (func = null, context = undefined) => {
  if (!func) return undefined;

  return function () {
    return apply(func, context);
  };
};

const bindUserData = bind(userData, user);
console.log(bindUserData());
console.log(user);
