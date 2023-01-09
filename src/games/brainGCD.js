import game from '../index.js';
import random from '../random.js';

const getGCD = (a, b) => {
  const min = a < b ? a : b;
  for (let i = min; i > 0; i -= 1) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
  return NaN;
};

const ruleGCD = () => {
  const a = random(1, 100);
  const b = random(1, 100);

  const question = `${a} ${b}`;
  const correctAnswer = String(getGCD(a, b));

  return [question, correctAnswer];
};

const brainGCD = () => {
  console.log('Find the greatest common divisor of given numbers.');
  game(ruleGCD);
};

export default brainGCD;
