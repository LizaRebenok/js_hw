`Use strict`;

const balanceSymbolRemove = (string, symbolRemove = []) => {
  if (typeof string !== 'string') throw new Error('String не рядок');

  const result = [];

  for (let i = 0; i < string.length; i++) {
    if (symbolRemove.includes(string[i])) continue;
    result.push(string[i]);
  }
  return result.join('');
};

const phoneNumbersMinBalance = (
  arr,
  minBalance = 0,
  usersKeys = {
    balance: 'balance',
    phone: 'phone',
  },
) => {
  if (!Array.isArray(arr) || typeof minBalance !== 'number') return [];
  const result = [];

  arr.forEach((item) => {
    if (minBalance <= 0) {
      result.push(item[usersKeys.phone]);
      return;
    }
    const balanceCorrected = Number(balanceSymbolRemove(item[usersKeys.balance], ['$', ',']));
    if (balanceCorrected > minBalance) result.push(item[usersKeys.phone]);
  });

  return result;
};

const usersNumber = phoneNumbersMinBalance(users, 2000);
console.log(usersNumber);
