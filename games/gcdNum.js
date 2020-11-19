export const questionGcd = 'Find the greatest common divisor of given numbers.';

export const getGcdNum = (num1, num2) => {
  const arrayNum = [];
  const numEnd = num2 > num1 ? num2 : num1;

  for (let i = 0; i <= numEnd; i += 1) {
    arrayNum.push(i);
  }

  let gcdNum = 0;
  for (let i = 1; i < arrayNum.length; i += 1) {
    if (num1 % arrayNum[i] === 0 && num2 % arrayNum[i] === 0) {
      if (arrayNum[i] >= gcdNum) {
        gcdNum = arrayNum[i];
      }
    }
  }
  return gcdNum;
};
