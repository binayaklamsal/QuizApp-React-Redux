import React, { useEffect } from "react";
import { connect } from "react-redux";

import TitleCard from "./TitleCard";
import OptionsList from "./OptionCard";
import Footer from "./Footer";
import ClockTimer from "../timer/ClockTimer";

import {
  loadQuiz,
  submitQuestion,
  skipQuestion,
} from "../Actions/AppStateActions";

const QuestionCard = ({
  appData,
  questionIndex,
  loadQuiz,
  skipQuestion,
  submitQuestion,
}) => {
  useEffect(() => {
    loadQuiz();
  }, [loadQuiz]);

  let selectedQuestion;
  if (appData) selectedQuestion = appData[questionIndex];

  return (
    <div className="h-screen w-screen p-8 flex flex-col relative">
      {selectedQuestion && (
        <>
          <TitleCard no={questionIndex} text={selectedQuestion.title} />
          <OptionsList options={selectedQuestion.options} />
          <Footer skipQuestion={skipQuestion} submitQuestion={submitQuestion} />
          <ClockTimer key={questionIndex} />
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  appData: state.appState.appData,
  questionIndex: state.appState.questionIndex,
});

export default connect(mapStateToProps, {
  loadQuiz,
  submitQuestion,
  skipQuestion,
})(QuestionCard);
