`Use strict`;

const nameUser = prompt('Як вас звати?', ''); //

// створення функції, котра приймає методи об'єкта user в якості аргуменів.
const accessRequest = (authorized, prohibited) => {
  const ageUser = Number(prompt('Скільки вам років?', '')); // Запит даних, для виконання умови.
  if (ageUser >= 18) authorized();
  else prohibited();
};

const user = {
  name: nameUser,

  userAuthorized() {
    alert(`${this.name}, доступ дозволено.`);
  }, // метод userAuthorized передається у якості callback у функцію accessRequest.

  userProhibited() {
    alert(`${this.name}, доступ не дозволено.`);
  }, // метод userProhibited передається у якості callback у функцію accessRequest.
};

/* При виконанні логіки у функції accessRequest, буде виконаний один із методів об'єкту user.
Для цього, потрібно викликаючи функцію, додати у параметри методи userAuthorized та userProhibited,
попередньо прив'язавши їх до об'єкту user за допомогою методу bind(),
 що дає змогу this всередені методів посилатись на об'єкт user.
 */
accessRequest(user.userAuthorized.bind(user), user.userProhibited.bind(user));
console.log(user);
