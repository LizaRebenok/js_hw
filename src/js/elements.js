export const createTodoItem = ({ title, description }) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'col-5';
  wrapper.innerHTML = `
  <div class = "taskWrapper">
   <div class="taskHeading">${title}</div>
   <div class="taskDescription">${description}</div>
   </div>`;

  return wrapper;
};
