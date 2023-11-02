import React from "react";
import "./DashBoard.css";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="dashboard">
        <ul className="sidebar-list">
          <li className="list-item">
            <Link to="/home" className="link">
              <span>Home</span>
            </Link>
          </li>
          <li className="list-item-disabled">
            {/* <a href="/Products" className="link"> */}
            <span>Products</span>
            {/* </a> */}
          </li>
          <li className="list-item-disabled">
            {/* <a href="/Stats" className="link"> */}
            <span>Statistics</span>
            {/* </a> */}
          </li>
          <li className="list-item-disabled">
            {/* <a href="/Asset" className="link"> */}
            <span>Asset</span>
            {/* </a> */}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Dashboard;
