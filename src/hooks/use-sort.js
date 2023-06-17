import { useState } from "react";

const useSort = (config, data) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortyBy] = useState(null);

  const setSortColumn = (label) => {
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

  return {
    sortBy,
    sortOrder,
    sortedData,
    setSortColumn,
  };
};

export default useSort;
