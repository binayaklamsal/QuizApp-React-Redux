import React from "react";
import { connect } from "react-redux";

const AnswerContainer = ({ appData, answerInfo }) => {
  const generateAnswersTable = () => {
    return appData.map((ques) => {
      const questionIndex = ques.no - 1;
      const isAnswered = answerInfo[questionIndex] !== undefined;
      return (
        <div key={ques.no} className="row">
          <div className="col">{ques.no}</div>
          <div className="col-9">{ques.title}</div>
          <div className="col-2">
            {isAnswered
              ? answerInfo[questionIndex] == ques.correctOption
                ? "Correct"
                : "Incorrect"
              : "Not Answered"}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="qz-ans-container container">
      <div className="qz-ans-header row">
        <div className="col">S. No.</div>
        <div className="col-9">Question</div>
        <div className="col-2">Response</div>
      </div>
      {generateAnswersTable()}
    </div>
  );
};

const mapStateToProps = (state) => ({
  appData: state.appState.appData,
  answerInfo: state.appState.answerInfo,
});

export default connect(mapStateToProps)(AnswerContainer);
