const getFormHandlers = (...args) => {
  const [form, handleFormData] = args;

  if (args.length < 2) throw new Error('Too few arguments. getFormHandlers accepts 2 arguments');
  if (!(form instanceof HTMLFormElement)) throw new Error('First argument should be a HTMLFormElement');
  if (typeof handleFormData !== 'function') throw new Error('Second argument should be the function');

  let isFormSubmitDisabled = true;
  const inputs = Array.from(form.querySelectorAll('input, textarea'));
  const formSubmitBtn = form.querySelector('button[type=submit]');

  const fields = inputs.reduce((acc, { name }) => {
    acc[name] = false;
    return acc;
  }, {});

  const submitHandler = (event) => {
    event.preventDefault();
    if (isFormSubmitDisabled) return;

    const data = {};
    inputs.forEach((input) => {
      data[input.name] = input.value.trim();
    });

    handleFormData({ data, event });
  };

  const inputHandler = ({ target }) => {
    if (target.value.trim().length) {
      if (!fields[target.name]) fields[target.name] = true;
    } else if (fields[target.name]) fields[target.name] = false;

    isFormSubmitDisabled = !Object.values(fields).every((field) => field);

    if (!isFormSubmitDisabled) {
      formSubmitBtn.removeAttribute('disabled');
    } else {
      formSubmitBtn.setAttribute('disabled', '');
    }
  };
  return {
    submitHandler,
    inputHandler,
  };
};
export default getFormHandlers;
