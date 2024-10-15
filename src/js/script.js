'Use strict';

import getFormHandlers from './formHandlers.js';
import { createTodoItem } from './elements.js';
import { prependElement } from './addElementToHTML.js';
import { storageKey } from './const.js';

(function () {
  const form = document.querySelector('[data-todo-form]');
  const todoItemsWrapper = document.querySelector('#todoItems');

  const saveData = (data) => {
    const savedData = JSON.parse(localStorage.getItem(storageKey)) || [];
    savedData.push(data);
    localStorage.setItem(storageKey, JSON.stringify(savedData));
    console.log(savedData);
  };

  const handleFormData = ({ data, event }) => {
    event.target.reset();
    saveData(data);
    const todoItemElement = createTodoItem(data);
    prependElement(todoItemsWrapper, todoItemElement);
  };

  const { submitHandler, inputHandler } = getFormHandlers(form, handleFormData);

  form.addEventListener('submit', submitHandler);
  form.addEventListener('input', inputHandler);

  document.addEventListener('DOMContentLoaded', () => {
    const savedData = JSON.parse(localStorage.getItem(storageKey));

    savedData.forEach((todoItem) => {
      const todoItemElement = createTodoItem(todoItem);
      prependElement(todoItemsWrapper, todoItemElement);
    });
  });
}());
