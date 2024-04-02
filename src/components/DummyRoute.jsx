import React from "react";
import { connect } from "react-redux";

import ConditionalRender from "./utils/ConditionalRender";
import AnswerContainer from "./AnswerContainer";
import QuestionCard from "./QuestionContainer/QuestionCard";

const DummyRoute = ({ showResults }) => {
  const ShowResults = ConditionalRender(AnswerContainer);
  const QuestionContainer = ConditionalRender(QuestionCard);

  return (
    <>
      <ShowResults toLoad={showResults} />
      <QuestionContainer toLoad={!showResults} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    showResults: state.appState.showResults,
  };
};

export default connect(mapStateToProps, null)(DummyRoute);
