import Table from "./Table";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";
import useSort from "../hooks/use-sort";

const SortableTable = (props) => {
  const { config, data } = props;
  const { sortBy, sortOrder, sortedData, setSortColumn } = useSort(
    config,
    data
  );

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
          onClick={() => setSortColumn(column.label)}
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
