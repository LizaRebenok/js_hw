'Use strict';

import getFormHandlers from './formHandlers.js';
import { createTodoItem } from './elements.js';
import { prependElement } from './addElementToHTML.js';

(function () {
  const form = document.querySelector('[data-todo-form]');
  const todoItemsWrapper = document.querySelector('#todoItems');

  const handleFormData = ({ data, event }) => {
    event.target.reset();
    const todoItemElement = createTodoItem(data);
    prependElement(todoItemsWrapper, todoItemElement);
  };

  const { submitHandler, inputHandler } = getFormHandlers(form, handleFormData);

  form.addEventListener('submit', submitHandler);
  form.addEventListener('input', inputHandler);
}());
