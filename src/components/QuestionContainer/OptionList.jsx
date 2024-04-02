import React from "react";
import OptionCard from "./OptionCard";

const generateOptions = (options) => {
  let counter = 0;
  let optList = options.map((option) => {
    counter++;
    return (
      <OptionCard key={option} option={{ index: counter - 1, text: option }} />
    );
  });
  return optList;
};

const OptionsList = (props) => {
  return <div className="flex-grow p-4">{generateOptions(props.options)}</div>;
};

export default OptionsList;
