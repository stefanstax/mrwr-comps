import React from "react";
import SortableTable from "../components/SortableTable";

const TablePage = () => {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
  ];

  const config = [
    {
      label: "Name",
      render: (column) => column.name,
      sortValue: (column) => column.name,
    },
    {
      label: "Color",
      render: (column) => <div className={`p-3 m-2 ${column.color}`}></div>,
    },
    {
      label: "Score",
      render: (column) => column.score,
      sortValue: (column) => column.score,
    },
  ];

  const keyFn = (column) => {
    return column.name;
  };
  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
};

export default TablePage;
