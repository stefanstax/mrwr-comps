import React from "react";
import { BsArrowDownSquare } from "react-icons/bs";

const Accordion = ({ items }) => {
  const renderedItems = items.map((item, index) => {
    return (
      <div
        key={item.id}
        className="bg-slate-700 m-2 p-2 text-white rounded-[5px] transition-all"
      >
        <div className="flex justify-between items-center gap-[10px] text-[20px]">
          <span>{item.label}</span>
          <BsArrowDownSquare fontSize={20} />
        </div>
        <div className="hidden">{item.content}</div>
      </div>
    );
  });
  return (
    <div className="bg-slate-100 p-2 m-2 rounded-[15px] drop-shadow-md w-fit">
      {renderedItems}
    </div>
  );
};

export default Accordion;
