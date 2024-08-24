`Use strict`;

function padString(string, number, symbol, boolean = true) {
  switch (true) {
    case typeof string !== 'string':
      return 'не введено рядок, будь-ласка введіть рядок';
    case typeof number !== 'number':
      return 'не введено число, будь-ласка введіть число';
    case typeof symbol !== 'string' || symbol.length !== 1:
      return 'не введено символ, будь-ласка введіть символ';
    case typeof boolean !== 'boolean':
      return 'не введено логічне значення, будь-ласка введіть логічне значення';
    default:
  }

  if (string.length >= number) {
    return string.substr(0, number);
  }

  if (boolean === true) {
    return string.padEnd(number, symbol);
  }
  return string.padStart(number, symbol);
}

console.log(padString('Lorem Ipsum', 15, '*', false));
console.log(padString('Lorem', 2, '*', false));
console.log(padString('Lorem', 5, '*', true));
console.log(padString('Lorem Ipsum', 20, '&', true));
console.log(padString('Lorem Ipsum', 23, '*'));
