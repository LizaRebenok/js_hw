`Use strict`;

const IMG_FOLDER = './images/';
const IMG_EXT = '.jpg';

const appendElement = (parentElement = null, elementToAppend = null) => {
  if (!parentElement || !elementToAppend) return;
  parentElement.append(elementToAppend);
};

const getRandomNumberInRange = (min = 0, max = 10) => {
  const num = Math.floor(Math.random() * (max - min));
  if (num === 0) return 1;
  return num;
};

const createImage = (imageName) => {
  const img = document.createElement('img');
  img.src = `${IMG_FOLDER}${imageName}${IMG_EXT}`;
  img.alt = `${IMG_FOLDER}${imageName}${IMG_EXT}`;
  img.title = `${IMG_FOLDER}${imageName}${IMG_EXT}`;
  return img;
};

const randomImg = createImage(getRandomNumberInRange());
appendElement(document.body, randomImg);
