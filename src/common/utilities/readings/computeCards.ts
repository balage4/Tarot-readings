type computeCardType = {
  [key: string]: number;
};

type cardNamesType = {
  [key: string]: string;
};

export const computeCard: computeCardType = {
  major: 0,
  wands: 22,
  cups: 36,
  swords: 50,
  coins: 64,
};

export const cardNames: cardNamesType = {
  1: 'Ace',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
  10: 'Ten',
  11: 'Page',
  12: 'Knight',
  13: 'Queen',
  14: 'King',
};
