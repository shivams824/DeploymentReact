import React, { useState } from "react";
import { Dropdown, Image } from "react-bootstrap";
import usericon from "../../assets/usericon.png";
import navlogo from "../../assets/navlogo.jpg";
import logoutimg from "../../assets/logout.png";
import { useNavigate } from "react-router-dom";
import "./UserNavbar.css";

const UserNavbar: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  // const [isLogout, setLogout] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    console.log("Toggling dropdown");
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    console.log("Logged out");
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar">
        <div className="nav-container">
          <a href="/Home">
            <img src={navlogo} alt="" className="navlogo" />
          </a>
        </div>
        <div>
          <Dropdown
            show={isDropdownOpen}
            align="end"
            onToggle={toggleDropdown}
            className="custom-dropdown"
          >
            <Dropdown.Toggle
              id="dropdown-custom-components"
              as={Image}
              src={usericon}
              alt=""
              className="user-button logout-button"
            />
            <Dropdown.Menu>
              {/* <Dropdown.Item
                onClick={() => navigate("/manage-profile")}
                className="dropdown-item"
              >
                <Image src={manage} alt="" className="manage-icon" />
                <div className="managetxt">Manage Profile</div>
              </Dropdown.Item> */}
              <Dropdown.Item
                onClick={handleLogout}
                className="user-dropdown-item-two"
              >
                <Image src={logoutimg} alt="" className="logout-icon" />
                <div className="logouttxt">Logout</div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
    </div>
  );
};

export default UserNavbar;
