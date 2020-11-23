export const question = "Answer 'yes' if the number is even, otherwise answer 'no'.";
export const countNums = 1;

export const getRightAnswer = (nums) => {
  const answer = (nums[0] % 2) === 0 ? 'yes' : 'no';
  return answer;
};

export const getMathString = (nums) => {
  const string = `${nums[0]}`;
  return string;
};
