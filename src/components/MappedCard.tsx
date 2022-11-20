import { majorArcanaMap } from '../common/utilities/readings/majorArcanaMap';
import { getCardName } from '../common/utilities/readings/getCardName';
import { MappedCardProps } from '../types/MappedCardProps';

const MappedCard = ({ cardName, cardIndex }: MappedCardProps) => (
  <h6>{`${cardIndex + 1}. ${cardName}`}</h6>
);

export default MappedCard;
