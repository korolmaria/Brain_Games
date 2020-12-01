const generateRandom = (minNum = 0, maxNum = 30) => {
  const rand = minNum + Math.random() * (maxNum + 1 - minNum);
  return Math.floor(rand);
};

export default generateRandom;
