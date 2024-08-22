`Use strict`;

function generateKey(length, characters) {
  let lengthSpan = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * characters.length);
    lengthSpan += characters[index];
  }
  return lengthSpan;
}
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key);
