import React from "react";

const TitleCard = (props) => {
  return (
    <div className="border-b border-gray-300 h-auto">
      <div className="flex justify-start items-center rounded-full">
        <h2>{"Question " + (props.no + 1)}</h2>
      </div>
      <div className="p-2 text-white">{props.text}</div>
    </div>
  );
};

export default TitleCard;
