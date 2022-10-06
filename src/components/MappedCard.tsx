import { majorArcanaMap } from '../common/utilities/readings/majorArcanaMap';
import { getCardName } from '../common/utilities/readings/getCardName';

type MappedCardProps = {
  cardName: string;
};

const MappedCard = ({ cardName }: MappedCardProps) => <h6>{cardName}</h6>;

export default MappedCard;
