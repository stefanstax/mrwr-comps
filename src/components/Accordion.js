import React, { useState } from "react";
import { BsArrowDownSquare, BsArrowUpSquareFill } from "react-icons/bs";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleExpand = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <BsArrowUpSquareFill /> : <BsArrowDownSquare />}
      </span>
    );

    return (
      <div
        key={item.id}
        className="bg-slate-700 m-2 p-2 border-b text-white rounded-[5px] transition-all"
      >
        <div
          onClick={() => handleExpand(index)}
          className="cursor-pointer flex justify-between items-center gap-[10px] text-[20px]"
        >
          <span>{item.label}</span>
          {icon}
        </div>
        {isExpanded && <div className="p-5">{item.content}</div>}
      </div>
    );
  });
  return (
    <div className="w-full max-w-[600px] mx-auto bg-slate-800 p-2 m-2 rounded-[10px] drop-shadow-md w-fit">
      {renderedItems}
    </div>
  );
};

export default Accordion;
