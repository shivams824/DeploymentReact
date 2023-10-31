import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProfileManagement.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import Dashboard from "../Dashboard/Dashboard";
import CreateUserModal from "../CreateUserModal/CreateUserModal";
import UserNavbar from "../UserNavbar/UserNavbar";

const ProfileManagement: React.FC = () => {
  const [rowData, setRowData] = useState([]);

  const reloadUserTable: any = () => {
    axios.get("http://localhost:5104/api/User/list").then((response) => {
      setRowData(response.data);
      console.log(response);
    });
  };

  useEffect(() => {
    axios.get("http://localhost:5104/api/User/list").then((response) => {
      setRowData(response.data);
      console.log(response);
    });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modaldata, modalsetData] = useState([]);

  const columnDefs: any = [
    { headerName: "Name", field: "userName", flex: 1 },
    { headerName: "Email", field: "email", flex: 1 },
    { headerName: "Role", field: "role", flex: 1 },
  ];

  return (
    <div>
      <div>
        <UserNavbar />
      </div>
      <div>
        <Dashboard />
      </div>
      <div className="asset-profile">
        Users
        <button
          className="create-button-profile"
          onClick={() => setIsModalOpen(true)}
        >
          Create
        </button>
        <CreateUserModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          updateSave={reloadUserTable}
        />
      </div>
      <div style={{ width: "100%", height: "605px", flex: 1 }}>
        <div
          className="ag-theme-alpine manage-table"
          style={{ height: "100%", width: "100%", flex: 1 }}
        >
          <AgGridReact columnDefs={columnDefs} rowData={rowData} />
        </div>
      </div>
    </div>
  );
};

export default ProfileManagement;
