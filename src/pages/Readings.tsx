import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { createDraw } from '../common/utilities/readings/createDraw';
import MappedCard from '../components/MappedCard';

const Readings = () => {
  const [reading, setReading] = useState<string[]>([]);

  const handleClick = () => setReading(createDraw(78, 10));

  return (
    <div>
      <h2>Readings</h2>
      <Button variant="warning" onClick={handleClick}>
        Draw
      </Button>
      <Container>
        {reading &&
          reading.map((cardName, cardIndex) => (
            <MappedCard
              key={`drawed_num${cardIndex}`}
              cardIndex={cardIndex}
              cardName={cardName}
            />
          ))}
      </Container>
    </div>
  );
};

export default Readings;
