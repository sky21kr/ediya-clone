export const debounce = (callback: CallableFunction, ms: number) => {
  let timeout: NodeJS.Timeout;

  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      callback();
    }, ms);
  };
};
