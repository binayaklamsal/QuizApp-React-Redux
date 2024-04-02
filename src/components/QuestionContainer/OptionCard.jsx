import React from "react";
import { connect } from "react-redux";

import { selectOption } from "../Actions/AppStateActions";

const OptionCard = ({ option, selectOption }) => {
  const selectAnswer = () => {
    selectOption(option.index);
  };

  return (
    <div className="flex-grow p-4" index={option.index}>
      <input
        onChange={selectAnswer}
        id={"opt" + option.index}
        name="qz-option"
        type="radio"
      />
      <label
        className="ml-4 cursor-pointer font-normal capitalize"
        htmlFor={"opt" + option.index}
      >
        {option.text}{" "}
      </label>
    </div>
  );
};

export default connect(null, {
  selectOption,
})(OptionCard);
