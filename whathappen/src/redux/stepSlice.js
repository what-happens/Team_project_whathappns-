import { createSlice } from "@reduxjs/toolkit";

const stepSlice = createSlice({
  name: "step",
  initialState: {
    stage_id: null,
    level_id: null,
    currentStep: 1,
  },
  reducers: {
    setStageId: (state, action) => {
      state.stage_id = action.payload;
    },
    setLevelId: (state, action) => {
      state.level_id = action.payload;
    },
    moveToNextStep: (state) => {
      state.currentStep += 1;
    },
  },
});

export const { setStageId, setLevelId, moveToNextStep } = stepSlice.actions;
export default stepSlice.reducer;
