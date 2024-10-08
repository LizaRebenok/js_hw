`Use strict`;

const list = document.getElementById('ulId');
const listItems = list.querySelectorAll('li');

// Task - 1
console.group('Елементи списку:');
listItems.forEach((item) => {
  console.log(item.innerHTML);
});
console.groupEnd();

// Task - 2
const attrValueArr = () => {
  const attributesArray = [];
  for (const attr of list.attributes) {
    attributesArray.push(attr.value);
  }
  console.log(attributesArray);
};
attrValueArr();

// Task - 3
const attrNameArr = () => {
  const attributesArray = [];
  for (const attr of list.attributes) {
    attributesArray.push(attr.name);
  }
  console.log(attributesArray);
};
attrNameArr();

// Task - 4
const changeLastItem = () => {
  const lastItem = list.querySelector('li:last-child');
  if (lastItem) {
    lastItem.textContent = 'Привіт, мене звати Ліза';
  }
};
changeLastItem();

// Task - 5
const addAttributeFirstItem = () => {
  const firstItem = list.querySelector('li:first-child');
  if (firstItem) {
    firstItem.setAttribute('data-my-name', 'Ліза');
  }
  console.log(firstItem);
};
addAttributeFirstItem();

// Task - 6
const removeAttrOfList = () => {
  if (list) {
    list.removeAttribute('data-dog-tail');
  }
  return attrNameArr();
};
removeAttrOfList();
