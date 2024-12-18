import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  stageId: 0,
  level: 0,
  userAnswers: [],
  parsedData: [],
  codeString: "",
  answerCode: "",
  selectedQid: null,
};

const learnSlice = createSlice({
  name: "learn",
  initialState,
  reducers: {
    setQuestions(state, action) {
      state.questions = action.payload;
    },
    setStageId(state, action) {
      state.stageId = action.payload;
    },
    setLevel(state, action) {
      state.level = action.payload;
    },
    setParsed(state, action) {
      state.parsedData = action.payload;
    },
    setCodeString(state, action) {
      state.codeString = action.payload;
    },
    setAnswerCode(state, action) {
      state.answerCode = action.payload;
    },
    setSelectedQid(state, action) {
      state.selectedQid = action.payload;
    },
  },
});

export const {
  setQuestions,
  setStageId,
  setLevel,
  setCodeString,
  setParsed,
  setAnswerCode,
  setSelectedQid,
} = learnSlice.actions;

export default learnSlice.reducer;
