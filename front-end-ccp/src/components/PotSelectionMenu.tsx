import { useState } from "react";
import PlantContainer from "./PlantContainer";

const PotSelectionMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pot-selection-menu">
      <h5
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-header"
      >
        Cozy Corner Options <span className="dropdown-arrow">{isOpen ? "▼" : "▲"}</span>
      </h5>
      {isOpen && <PlantContainer />}
    </div>
  );
};

export default PotSelectionMenu;
