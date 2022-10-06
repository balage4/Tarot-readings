import { majorArcanaMap } from '../common/utilities/readings/majorArcanaMap';
import { getCardName } from '../common/utilities/readings/getCardName';

type MappedCardProps = {
  num: number;
};

const MappedCard = ({ num }: MappedCardProps) => (
  <h6>
    {num}. - {getCardName(num)}
  </h6>
);

export default MappedCard;
