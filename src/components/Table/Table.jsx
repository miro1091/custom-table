import React, { useState, useEffect, Fragment } from "react";
import { orderBy } from "lodash";
import PropTypes from "prop-types";

const Table = ({ columns, data }) => {
  const SORTTYPES = {
    asc: "asc",
    desc: "desc"
  };

  const [tableColumns, setTableColumns] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [typeOfSort, setTypeOfSort] = useState(SORTTYPES.asc);

  useEffect(() => {
    setTableData(data);
    setTableColumns(columns);
  }, [columns, data]);

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
    setTableData(orderBy(tableData, [sortKey], [typeOfSort]));

    typeOfSort === SORTTYPES.asc
      ? setTypeOfSort(SORTTYPES.desc)
      : setTypeOfSort(SORTTYPES.asc);
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
          return (
            <Fragment key={`frag-${i}`}>
              <tr key={`tr-${i}`} onClick={() => rowClick(item)}>
                {Object.values(item).map((rowItem, i) => (
                  <td key={`td-${i}`}>{rowItem}</td>
                ))}
              </tr>
              <tr key={`content-tr-${i}`}>
                {item.showContent ? <td>content</td> : null}
              </tr>
            </Fragment>
          );
        })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired
    })
  ).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired
    })
  ).isRequired
};

export default Table;
