import React from 'react';

type PotSelectorProps = {
  plantNumber: number;
  selectedColor: string;
  handlePotTypeChange: (plantNumber: number, color: string) => void;
  colors: string[];
};

const PotSelector: React.FC<PotSelectorProps> = ({ plantNumber, selectedColor, handlePotTypeChange, colors }) => {
  return (
    <select
      id={`pot-type-${plantNumber}`}
      value={selectedColor}
      onChange={(e) => handlePotTypeChange(plantNumber, e.target.value)}
    >
      {colors.map((color) => (
        <option key={color} value={color}>
          {color}
        </option>
      ))}
    </select>
  );
};

export default PotSelector;
