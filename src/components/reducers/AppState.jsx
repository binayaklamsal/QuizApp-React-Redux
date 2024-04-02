import {
  LOAD_QUIZ,
  SKIP_QUESTION,
  SUBMIT_QUESTION,
  SELECT_OPTION,
} from "../Actions/Type";

const initialState = {
  showResults: false,
  appData: [],
  questionIndex: 0,
  answerInfo: {},
  currentQuestion: {},
};

const reducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case LOAD_QUIZ:
      return {
        ...state,
        appData: action.payload,
        questionIndex: 0,
      };
    case SKIP_QUESTION:
      return {
        ...state,
        currentQuestion: {},
        questionIndex: state.questionIndex + 1,
        showResults: state.appData.length === state.questionIndex + 1,
      };
    case SUBMIT_QUESTION:
      const updatedAnswerInfo = {
        ...state.answerInfo,
        ...state.currentQuestion,
      };
      return {
        ...state,
        answerInfo: updatedAnswerInfo,
        currentQuestion: {},
        questionIndex: state.questionIndex + 1,
        showResults: state.appData.length === state.questionIndex + 1,
      };
    case SELECT_OPTION:
      const updatedCurrentQuestion = {
        ...state.currentQuestion,
        [state.questionIndex]: action.payload,
      };
      return {
        ...state,
        currentQuestion: updatedCurrentQuestion,
      };
    default:
      return state;
  }
};

export default reducer;
