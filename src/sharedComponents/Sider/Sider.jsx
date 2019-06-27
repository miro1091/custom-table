import React from "react";
import { Link } from "react-router-dom";

const Sider = () => {
  return (
    <div>
      <p>
        <Link to="/">Surveys</Link>
      </p>
      <p>
        <Link to="/dashboard/">Dashboard</Link>
      </p>
      <p>
        <Link to="/contacts/">Contacts</Link>
      </p>
      <p>
        <Link to="/stats/">Stats</Link>
      </p>
    </div>
  );
};

export default Sider;
