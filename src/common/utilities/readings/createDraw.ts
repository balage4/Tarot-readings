import randomNumberByCardsLength from '../randomization';

export const createDraw = (
  deckLength: number,
  drawLength: number
) => {
  const reading: number[] = [];

  while (reading.length < drawLength) {
    const rnd = randomNumberByCardsLength(deckLength);
    if (!reading.includes(rnd)) reading.push(rnd);
  }
  return reading;
};
