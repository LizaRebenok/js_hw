`Use strict`;

const textField = document.getElementById('textField');

const createDiv = () => {
  const div = document.createElement('div');
  div.classList.add('div');
  document.body.append(div);
};

const deleteDiv = () => {
  const div = document.querySelector('div');
  if (div) {
    div.remove();
  }
};

textField.onmouseover = () => {
  createDiv();
};

textField.onmouseout = () => {
  deleteDiv();
};
