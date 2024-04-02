import React from "react";

const Footer = (props) => {
  return (
    <div className="flex justify-end border-t border-gray-300">
      <button
        onClick={(e) => props.skipQuestion()}
        className="p-2 bg-slate-400 rounded-[20px]"
      >
        Skip
      </button>
      <button
        onClick={(e) => props.submitQuestion()}
        className="p-2 bg-slate-400 rounded-[20px]"
      >
        Submit
      </button>
    </div>
  );
};

export default Footer;
