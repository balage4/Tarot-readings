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
  0: 'Ace',
  1: 'Two',
  2: 'Three',
  3: 'Four',
  4: 'Five',
  5: 'Six',
  6: 'Seven',
  7: 'Eight',
  8: 'Nine',
  9: 'Ten',
  10: 'Page',
  11: 'Knight',
  12: 'Queen',
  13: 'King',
};
