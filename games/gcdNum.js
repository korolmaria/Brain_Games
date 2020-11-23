export const question = 'Find the greatest common divisor of given numbers.';
export const countNums = 2;

export const getMathString = (arr) => {
  const strGcd = arr.join(' ');
  return strGcd;
};

export const getRightAnswer = (arr) => {
  const num1 = arr[0];
  const num2 = arr[1];

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
  return String(gcdNum);
};
