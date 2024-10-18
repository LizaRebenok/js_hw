'Use strict';

import getFormHandlers from './formHandlers.js';
import { createTodoItem } from './elements.js';
import { prependElement } from './addElementToHTML.js';

(function () {
  const form = document.querySelector('[data-todo-form]');
  const todoItemsWrapper = document.querySelector('#todoItems');

  const saveTask = (data) => {
    const saveDataForTask = JSON.parse(localStorage.getItem('tasks')) || [];
    saveDataForTask.push(data);
    localStorage.setItem('tasks', JSON.stringify(saveDataForTask));
  };

  const handleFormData = ({ formData, event }) => {
    event.target.reset();
    saveTask(formData);
    const todoItemElement = createTodoItem(formData);
    prependElement(todoItemsWrapper, todoItemElement);
  };

  const loadTasksOnThePage = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach((todoItem) => {
      const todoItemElement = createTodoItem(todoItem);
      prependElement(todoItemsWrapper, todoItemElement);
    });
  };

  const { submitHandler, inputHandler } = getFormHandlers(form, handleFormData);

  form.addEventListener('submit', submitHandler);
  form.addEventListener('input', inputHandler);
  document.addEventListener('DOMContentLoaded', loadTasksOnThePage);
}());
