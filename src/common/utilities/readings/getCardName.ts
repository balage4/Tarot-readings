import { cardNames, computeCard } from './computeCards';
import * as suiteCallbacks from './detectSuiteCallbacks';
import { majorArcanaMap } from './majorArcanaMap';

const detectSuite = {
  major: suiteCallbacks.isMajorArcana,
  wands: suiteCallbacks.isWandSuite,
  cups: suiteCallbacks.isCupsSuite,
  swords: suiteCallbacks.isSwordsSuite,
  coins: suiteCallbacks.isCoinsSuite,
};

const getSuite = (randomNumber: number): string => {
  let out: string = '';
  for (const [key, detectSuiteCallback] of Object.entries(detectSuite)) {
    if (detectSuiteCallback(randomNumber)) out = key;
  }
  return out;
};

export const getCardName = (randomNumber: number) => {
  const suiteName = getSuite(randomNumber);
  const suitedNumber = randomNumber - computeCard[suiteName];
  if (suiteName === 'major') return majorArcanaMap[randomNumber];
  return `${cardNames[suitedNumber]} of ${suiteName}`;
};
