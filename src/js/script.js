`Use strict`;

const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];
const randomImages = () => Math.floor(Math.random() * images.length);

const getImage = images[randomImages()];

const image = document.createElement('img');
image.src = `images/${getImage}`;
document.body.append(image);
