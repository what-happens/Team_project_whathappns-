import React, { useState } from "react";
import StudyLanding from "./StudyLanding";
// import StudyLanding from "./test/A";
import B from "./test/B";
import C from "./test/C";

const Study = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [stageId, setStageId] = useState(null);
  const [levelId, setLevelId] = useState(null);
  const [metaData, setMetaData] = useState([]);
  const [learnData, setLearnData] = useState([]);

  const handleStageIdSet = (id, data) => {
    setStageId(id);
    setMetaData(data);
    setCurrentStep(2);
  };

  const handleLevelIdSet = (id, data) => {
    setLevelId(id);
    setLearnData(data);
    setCurrentStep(3);
  };

  const handleReset = () => {
    setCurrentStep(1);
    setStageId(null);
    setLevelId(null);
    setMetaData([]);
    setLearnData([]);
  };

  return (
    <>
      {currentStep === 1 && <StudyLanding onStageIdSet={handleStageIdSet} />}
      {currentStep === 2 && (
        <B
          stageId={stageId}
          metaData={metaData}
          onLevelIdSet={handleLevelIdSet}
          onPrevious={() => setCurrentStep(1)}
        />
      )}
      {currentStep === 3 && (
        <C
          levelId={levelId}
          learnData={learnData}
          onPrevious={() => setCurrentStep(2)}
          onReset={handleReset}
        />
      )}
    </>
  );
};

export default Study;
