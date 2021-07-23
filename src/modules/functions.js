const convertDateToNum = (date) => {
  const arrOfDateElements = date.split("-");
  return parseInt(arrOfDateElements.join(""), 10);
};

const getSumOfDigits = (num) => {
  let sum = 0;
  while (num !== 0) {
    let rem = num % 10;
    sum += rem;
    num = (num - rem) / 10;
  }
  return sum;
};

export { convertDateToNum, getSumOfDigits };
