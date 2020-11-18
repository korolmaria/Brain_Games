export const questionEven = "Answer 'yes' if the number is even, otherwise answer 'no'.";

export const isEvenNumber = (num) => {
  const answer = (num % 2) === 0 ? 'yes' : 'no';
  return answer;
};
