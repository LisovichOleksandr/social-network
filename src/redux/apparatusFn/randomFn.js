const randomFn = (arr) => {
  let randomNamber = Math.floor(Math.random() * arr.length);
  let el = arr[randomNamber];
  return el;
};

export default randomFn;
