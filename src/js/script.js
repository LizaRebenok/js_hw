'Use strict';

import { user, user1 } from './userData.js';

const deepFreeze = (obj) => {
  Object.freeze(obj);

  Object.keys(obj).forEach((key) => {
    const value = obj[key];

    if (typeof value === 'object' && value !== null) {
      deepFreeze(value);
    }
  });
  return obj;
};

deepFreeze(user);
console.log(user.data);

const descriptor = Object.getOwnPropertyDescriptor(user.data.d.d1, 'b2');
console.log(descriptor);

// Checking the object without freezing
console.log(user1.data);
const descriptor1 = Object.getOwnPropertyDescriptor(user1.data.d, 'b1');
console.log(descriptor1);
