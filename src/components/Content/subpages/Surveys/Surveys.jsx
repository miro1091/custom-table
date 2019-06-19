import React from "react";
import MyTable from "../../../reusable/MyTable";
import moment from "moment";

const Surveys = () => {
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      date: moment("2019-12-25").format("YYYY-MM-DD"),
      showContent: false
    },
    {
      key: "2",
      name: "Aim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      date: moment("2000-12-22").format("YYYY-MM-DD"),
      showContent: false
    },
    {
      key: "3",
      name: "Coe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      date: moment("2012-12-25").format("YYYY-MM-DD"),
      showContent: false
    },
    {
      key: "4",
      name: "Xim Red",
      age: 32,
      address: "London No. 2 Lake Park",
      date: moment("2018-10-25").format("YYYY-MM-DD"),
      showContent: false
    }
  ];

  const columns = [
    {
      key: "key",
      column: "Key"
    },
    {
      key: "name",
      column: "Name"
    },
    {
      key: "age",
      column: "Age"
    },
    {
      key: "address",
      column: "Address"
    },
    {
      key: "date",
      column: "Date"
    }
  ];
  return (
    <div>
      Surveys
      <MyTable columns={columns} data={data} />
    </div>
  );
};

export default Surveys;
