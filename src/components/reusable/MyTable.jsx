import React, { useState, useEffect } from "react";
import moment from "moment";
import PropTypes from "prop-types";

const MyTable = ({ columns, data }) => {
  const [tableColumns, setTableColumns] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(data);
    setTableColumns(columns);
  }, []);

  const rowClick = selectedItem => {
    const newTableData = tableData.map(item => {
      if (selectedItem.key === item.key) {
        return {
          ...item,
          showContent: !item.showContent
        };
      }
      return item;
    });
    setTableData(newTableData);
  };

  const headClick = sortKey => {
    const sortedData = [...tableData];

    if (typeof data[0][sortKey] === "number") {
      sortedData.sort((a, b) => a[sortKey] - b[sortKey]);
    } else if (sortKey === "date") {
      sortedData.sort((a, b) => moment(a[sortKey]) - moment(b[sortKey]));
    } else {
      sortedData.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
    }

    setTableData(sortedData);
  };

  return (
    <table>
      <thead>
        <tr>
          {tableColumns.map((item, i) => (
            <th onClick={() => headClick(item.key)} key={`th-${i}`}>
              {item.column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, i) => {
          return [
            <tr key={`tr-${i}`} onClick={() => rowClick(item)}>
              {Object.values(item).map((rowItem, i) => (
                <td key={`td-${i}`}>{rowItem}</td>
              ))}
            </tr>,
            <tr key={`content-tr-${i}`}>
              {item.showContent ? <td>content</td> : null}
            </tr>
          ];
        })}
      </tbody>
    </table>
  );
};

MyTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array
};

export default MyTable;
