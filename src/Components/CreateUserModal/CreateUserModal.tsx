import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import "./CreateUserModal.css";
import { Image } from "react-bootstrap";
import close from "../../assets/close.png";

const CreateUserModal: React.FC<{ isOpen: boolean; onClose: () => void; updateSave:()=>{}; }> = ({
  isOpen,
  onClose,
  updateSave
}) => {
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Role, setRole] = useState("Operator");


  const handleSave = () => {
    const isRoleOperator = Role === "Operator";

    const data = {
      UserName : UserName,
      Email : Email,
      password : password,
      Role: Role, 
    };

     console.log(data, "dsds");
    
    if(Email === null && password === null && UserName === null)
    {
      return alert("Fill all the values");

    }
    else {
      axios
        .post("http://localhost:5104/api/User/create", data)
         ///// asset and camera url
        .then((response) => {
          console.log("Data saved successfully:", response.data);
          alert("Error occured while creating user");
        })
        .catch((error) => {
          console.error("Error while saving data:", error);
          alert("User created successfully");
          updateSave();
        });
    }
    
    onClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="modal">
        <Image src={close} alt="" onClick={onClose} className="close-button" />

        <div className="header-content">
          <div className="modal-title">Create User</div>
        </div>
        <div className="asset-content">
          <div className="asset-name">
            <h3>User Name</h3>
            <TextField
              label="User Name"
              value={UserName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="asset-type">
            <h3>E-mail</h3>
            <TextField
              label="E-mail"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password">
            <h3>Password</h3>
            <TextField
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="asset-status">
            <h3>Role</h3>
            <Select
            className="role"
              label="Role"
              value={Role}
              onChange={(e) => setRole(e.target.value)}
            >
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="Operator">Operator</MenuItem>
            </Select>
          </div>
        </div>
        <div>
          <Button
            className="save-button"
            onClick={handleSave}
            variant="contained"
            color="primary"
          >
            Save
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateUserModal;
