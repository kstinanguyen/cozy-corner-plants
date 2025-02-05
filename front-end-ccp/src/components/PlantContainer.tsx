import { useState } from 'react';
import Plant from './Plant';
import '../styles/PlantContainer.css';
import { plantPotColors } from '../utils/plantData';
import { useFetchPhrases } from '../utils/useFetchPhrases';

// S1 Brown pot
import { ReactComponent as S1pBrown } from '../assets/s1p_brown.svg';
import { ReactComponent as S1mBrown } from '../assets/s1m_brown.svg';
import { ReactComponent as S1fBrown } from '../assets/s1f_brown.svg';

// S1 Red pot
import { ReactComponent as S1pRed } from '../assets/s1p_red.svg';
import { ReactComponent as S1mRed } from '../assets/s1m_red.svg';
import { ReactComponent as S1fRed } from '../assets/s1f_red.svg';

// S1 Blue pot
import { ReactComponent as S1pBlue } from '../assets/s1p_blue.svg';
import { ReactComponent as S1mBlue } from '../assets/s1m_blue.svg';
import { ReactComponent as S1fBlue } from '../assets/s1f_blue.svg';

// S2 Green pot
import { ReactComponent as S2pGreen } from '../assets/s2p_green.svg';
import { ReactComponent as S2mGreen } from '../assets/s2m_green.svg';
import { ReactComponent as S2fGreen } from '../assets/s2f_green.svg';

// S2 Purple pot
import { ReactComponent as S2pPurple } from '../assets/s2p_purple.svg';
import { ReactComponent as S2mPurple } from '../assets/s2m_purple.svg';
import { ReactComponent as S2fPurple } from '../assets/s2f_purple.svg';

// S3 Brown pot
import { ReactComponent as S3pBrown } from '../assets/s3p_brown.svg';
import { ReactComponent as S3mBrown } from '../assets/s3m_brown.svg';
import { ReactComponent as S3fBrown } from '../assets/s3f_brown.svg';

// S3 Blue pot
import { ReactComponent as S3pBlue } from '../assets/s3p_blue.svg';
import { ReactComponent as S3mBlue } from '../assets/s3m_blue.svg';
import { ReactComponent as S3fBlue } from '../assets/s3f_blue.svg';

// S3 White pot
import { ReactComponent as S3pWhite } from '../assets/s3p_white.svg';
import { ReactComponent as S3mWhite } from '../assets/s3m_white.svg';
import { ReactComponent as S3fWhite } from '../assets/s3f_white.svg';


const plantOptions = [
  { stage: 1, color: "brown", svg: <S1pBrown /> },
  { stage: 1, color: "red", svg: <S1pRed /> },
  { stage: 1, color: "blue", svg: <S1pBlue /> },
  { stage: 1, color: "green", svg: <S2pGreen /> },
  { stage: 1, color: "purple", svg: <S2pPurple /> },
  { stage: 1, color: "clay", svg: <S3pBrown /> },
  { stage: 1, color: "cobalt", svg: <S3pBlue /> },
  { stage: 1, color: "white", svg: <S3pWhite /> },
  { stage: 2, color: "brown", svg: <S1mBrown /> },
  { stage: 2, color: "red", svg: <S1mRed /> },
  { stage: 2, color: "blue", svg: <S1mBlue /> },
  { stage: 2, color: "green", svg: <S2mGreen /> },
  { stage: 2, color: "purple", svg: <S2mPurple /> },
  { stage: 2, color: "clay", svg: <S3mBrown /> },
  { stage: 2, color: "cobalt", svg: <S3mBlue /> },
  { stage: 2, color: "white", svg: <S3mWhite /> },
  { stage: 3, color: "brown", svg: <S1fBrown /> },
  { stage: 3, color: "red", svg: <S1fRed /> },
  { stage: 3, color: "blue", svg: <S1fBlue /> },
  { stage: 3, color: "green", svg: <S2fGreen /> },
  { stage: 3, color: "purple", svg: <S2fPurple /> },
  { stage: 3, color: "clay", svg: <S3fBrown /> },
  { stage: 3, color: "cobalt", svg: <S3fBlue /> },
  { stage: 3, color: "white", svg: <S3fWhite /> },
];

const getFilteredSVGs = (plantNumber: number, stage: number) => {
  return plantOptions.filter((svg) =>
    plantPotColors[plantNumber].includes(svg.color) && svg.stage === stage
  );
};

const PlantContainer = () => {
  const phrases = useFetchPhrases();
  const [selectedPotType, setSelectedPotType] = useState<Record<number, string>>({
    1: plantPotColors[1][0], 
    2: plantPotColors[2][0], 
    3: plantPotColors[3][0], 
  });

  const handlePotTypeChange = (plantNumber: number, color: string) => {
    setSelectedPotType((prevSelected) => ({
      ...prevSelected,
      [plantNumber]: color,
    }));
  };

  return (
    <div className="plant-container">
      {phrases.length > 0 && (
        <>
          {[1, 2, 3].map((plantNumber) => (
            <div key={plantNumber}>
              <select
                id={`pot-type-${plantNumber}`}
                value={selectedPotType[plantNumber]}
                onChange={(e) => handlePotTypeChange(plantNumber, e.target.value)}
              >
                {plantPotColors[plantNumber].map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
              <Plant
                key={`plant-${plantNumber}`}
                availableSVGs={getFilteredSVGs(plantNumber, 1)}
                growthStage={0}
                phrase={[phrases[plantNumber - 1] || ""]}
                plantNumber={plantNumber}
                selectedColor={selectedPotType[plantNumber]}
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default PlantContainer;
