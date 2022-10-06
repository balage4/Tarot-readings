import { computeCard } from './computeCards';

export const isMajorArcana = (randomNumber: number) =>
  randomNumber >= computeCard.major && randomNumber < computeCard.wands;
export const isWandSuite = (randomNumber: number) =>
  randomNumber >= computeCard.wands && randomNumber < computeCard.cups;
export const isCupsSuite = (randomNumber: number) =>
  randomNumber >= computeCard.cups && randomNumber < computeCard.swords;
export const isSwordsSuite = (randomNumber: number) =>
  randomNumber >= computeCard.swords && randomNumber < computeCard.coins;
export const isCoinsSuite = (randomNumber: number) =>
  randomNumber >= computeCard.coins && randomNumber < 78;
