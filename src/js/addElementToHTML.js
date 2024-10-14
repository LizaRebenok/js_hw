export const prependElement = (parentElement = null, elementToPrepend = null) => {
  if (!parentElement || !elementToPrepend) return;
  parentElement.prepend(elementToPrepend);
};
