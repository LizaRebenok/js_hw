`Use strict`;

const user = {
  _name: '',
  _age: 0,

  getName() {
    return this._name;
  },

  setName(name) {
    this._name = name;
  },
  getAge() {
    return this._age;
  },
  setAge(age) {
    if (typeof age !== 'number' || age < 0 || age > 120) {
      console.error('You gave the wrong age.');
      return;
    }
    this._age = age;
  },
};

user.setName('Lisa');
console.log(user.getName());
user.setName('Ann');
console.log(user.getName());

user.setAge(23);
user.setAge(134);
console.log(user.getAge());
