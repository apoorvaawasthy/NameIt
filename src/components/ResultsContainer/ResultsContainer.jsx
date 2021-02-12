import React from "react";
import "./ResultsContainer.css";
import NameCard from "../NameCard/NameCard";
const resultsContainer = ({ suggestedNames }) => {
  const suggestedNamesJsx = suggestedNames.map((suggestedName) => {
    return <NameCard key={suggestedName} suggestedName={suggestedName} />;
  });
  return (
    <div className="results-container">
      <p>{suggestedNamesJsx}</p>
    </div>
  );
};
export default resultsContainer;
