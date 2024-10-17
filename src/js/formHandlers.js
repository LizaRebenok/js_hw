const getFormHandlers = (form, handleFormData) => {
  const fields = {};
  const submitButton = form.querySelector('button[type="submit"]');

  const preFillingFields = () => {
    form.querySelectorAll('input, textarea').forEach(({ name }) => fields[name] = false);
  };
  preFillingFields();

  const submitHandler = (event) => {
    event.preventDefault();

    const inputsForm = event.target.querySelectorAll('input, textarea');

    const formData = {};

    inputsForm.forEach((input) => {
      formData[input.name] = input.value.trim();
    });
    handleFormData({ formData, event });
  };

  const inputHandler = ({ target }) => {
    fields[target.name] = target.value.trim().length > 0;

    const submitDisable = !Object.values(fields).every((fields) => fields);

    if (!submitDisable) {
      submitButton.removeAttribute('disabled');
    } else {
      submitButton.setAttribute('disabled', '');
    }
  };

  return {
    submitHandler,
    inputHandler,
  };
};

export default getFormHandlers;
