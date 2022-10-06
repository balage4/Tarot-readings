const randomNumberByCardsLength = (cardsLength: number): number => {
  return Math.floor(Math.random() * cardsLength);
};

export default randomNumberByCardsLength;
