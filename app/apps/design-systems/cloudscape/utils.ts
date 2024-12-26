export const delay = async (milliseconds: number, fn?: Function) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        fn?.();
        resolve({});
      } catch (err) {
        reject(err);
      }
    }, milliseconds);
  });
};
