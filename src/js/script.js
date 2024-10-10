`Use strict`;

const LIST_ROOT = {
  UL: 'ul',
  OL: 'ol',
  MENU: 'menu',
};

const appendElement = (parentElement = null, elementToAppend = null) => {
  if (!parentElement || !elementToAppend) return;
  parentElement.append(elementToAppend);
};

const generateList = (listItems, listRoot = LIST_ROOT.UL) => {
  if (!Object.values(LIST_ROOT).includes(listRoot)) throw new Error('listRoot arg must be the root tag of the list.');
  if (!Array.isArray(listItems)) throw new Error('listItem must be a Array');

  const list = document.createElement(listRoot);

  listItems.forEach((item) => {
    const listElement = document.createElement('li');
    appendElement(list, listElement);

    if (Array.isArray(item)) {
      appendElement(listElement, generateList(item, listRoot));
    } else {
      listElement.innerHTML = item;
    }
    appendElement(list, listElement);
  });
  return list;
};

const outputList = generateList([4, 6.7, [5, 7.3, 56], 99, 6.7], 'ol');
appendElement(document.body, outputList);
