import React, { JSX, useState } from 'react';
import '../styles/Plant.css';

interface PlantProps {
  plantNumber: number;
  growthStage: number;
  phrase: string[];
  availableSVGs: { 
    stage: number; 
    color: string; 
    svg: JSX.Element 
  }[];
  selectedColor: string;
}

const Plant: React.FC<PlantProps> = ({ phrase, availableSVGs, selectedColor }) => {
  const [showPhrase, setShowPhrase] = useState<string | null>(null);

  const displayedSVG = availableSVGs.find(svg => svg.color === selectedColor)?.svg;

  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrase.length);
    return phrase[randomIndex];
  };

  return (
    <div
      className="plant"
      onMouseEnter={() => setShowPhrase(getRandomPhrase())}
      onMouseLeave={() => setShowPhrase(null)}
    >
      {displayedSVG && <>{displayedSVG}</>}

      {showPhrase && (
        <div className="phrase-popup">
          <p>{showPhrase}</p>
        </div>
      )}
    </div>
  );
};

export default Plant;