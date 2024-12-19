import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 1,
  stageId: null,
  levelId: null,
  metaData: [],
  learnData: [],
};

const studySlice = createSlice({
  name: "study",
  initialState,
  reducers: {
    setStageInfo: (state, action) => {
      const { stageId, metaData } = action.payload;
      state.stageId = stageId;
      state.metaData = metaData;
      state.currentStep = 2;
    },
    setLevelInfo: (state, action) => {
      const { levelId, learnData } = action.payload;
      state.levelId = levelId;
      state.learnData = learnData;
      state.currentStep = 3;
    },
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    resetStudy: () => {
      return initialState;
    },
  },
});

export const {
  setStageInfo,
  setLevelInfo,
  setCurrentStep,
  resetStudy,
  learnData,
} = studySlice.actions;
export default studySlice.reducer;
