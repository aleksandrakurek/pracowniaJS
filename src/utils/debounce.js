export const debounce = (fn, wait, immediate) => {
  let timeout;

  return function executedFunction() {
    const context = this;
    const args = arguments;

    const later = function() {
      timeout = null;
      if (!immediate) fn.apply(context, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) fn.apply(context, args);
  };
};