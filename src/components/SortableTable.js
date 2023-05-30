import { useState } from "react";
import Table from "./Table";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";

const SortableTable = (props) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortyBy] = useState(null);
  const { config, data } = props;

  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortyBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder("asc");
      setSortyBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortyBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortyBy(null);
    }
  };

  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  const getIcons = (label, sortBy, sortOrder) => {
    if (label !== sortBy) {
      return (
        <div>
          <GoArrowSmallUp fontSize={30} /> <GoArrowSmallDown fontSize={30} />
        </div>
      );
    }

    if (sortOrder === null) {
      return (
        <div>
          <GoArrowSmallUp fontSize={30} /> <GoArrowSmallDown fontSize={30} />
        </div>
      );
    } else if (sortOrder === "asc") {
      return <GoArrowSmallUp fontSize={30} />;
    } else if (sortOrder === "desc") {
      return <GoArrowSmallDown fontSize={30} />;
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="flex justify-between items-center"
          onClick={() => handleClick(column.label)}
        >
          {getIcons(column.label, sortBy, sortOrder)}
          {column.label}
        </th>
      ),
    };
  });
  return <Table {...props} data={sortedData} config={updatedConfig} />;
};

export default SortableTable;
