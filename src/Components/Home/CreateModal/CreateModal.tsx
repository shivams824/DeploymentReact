import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import "./CreateModal.css";
import { Image } from "react-bootstrap";
import close from "../../../assets/close.png";

const CreateModal: React.FC<{ isOpen: boolean; onClose: ()=>void; updateSave:()=>{}; }> = ({
  isOpen,
  onClose,
  updateSave
}) => {
  const [assetName, setAssetName] = useState("");
  const [assetType, setAssetType] = useState("");
  const [status, setStatus] = useState("active");

  const handleSave = () => {
    const isStatusActive = status === "active";

    const data = {
      cameraName : assetName,
      type : assetType,
      cameraStatus: isStatusActive, 
    };

    const pumpdata = {
      pumpName : assetName,
      type : assetType,
      pumpStatus: isStatusActive, 
    };

    const wheeldata = {
      wheelName : assetName,
      type : assetType,
      wheelStatus: isStatusActive, 
      
    };
     console.log(data, "dsds");
    
    if(assetType === "Camera")
    {
      axios
        .post("http://localhost:5104/api/Camera/create", data)
         ///// asset and camera url
        .then((response) => {
          console.log("Data saved successfully:", response.data);
          updateSave();
          alert("Asset created successfully");
          
        })
        .catch((error) => {
          console.error("Error while saving data:", error);
          alert("Error occured while creating the asset");
        });

    }
    
    if(assetType === "Pump")
    {
      axios
        .post("http://localhost:5104/api/Pump/create", pumpdata)
        .then((response) => {
          console.log("Data saved successfully:", response.data);
          updateSave();
          alert("Asset created successfully");
          
        })
        .catch((error) => {
          console.error("Error while saving data:", error);
          alert("Error occured while creating the asset");
        });

    }
    
    if(assetType === "Wheel")
    {
      axios
        .post("http://localhost:5104/api/Wheel/create", wheeldata)
        .then((response) => {
          console.log("Data saved successfully:", response.data);
          updateSave();
          alert("Asset created successfully");
        })
        .catch((error) => {
          console.error("Error while saving data:", error);
          alert("Error occured while creating the asset");
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
          <div className="modal-title">Create Asset</div>
        </div>
        <div className="asset-content">
          <div className="asset-name">
            <h3>Asset Name</h3>
            <TextField
              className="asset-text"
              label="Asset Name"
              value={assetName}
              onChange={(e) => setAssetName(e.target.value)}
            />
          </div>
          <div className="asset-type">
            <h3>Asset Type</h3>
            <Select
              className="asset-drop"
              label="Asset Type"
              value={assetType}
              onChange={(e) => setAssetType(e.target.value)}
            >
              <MenuItem value="Camera">Camera</MenuItem>
              <MenuItem value="Pump">Pump</MenuItem>
              <MenuItem value="Wheel">Wheel</MenuItem>
            </Select>
          </div>
          <div className="asset-status">
            <h3>Asset Status</h3>
            <Select
            className="asset-drop"
              label="Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
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

export default CreateModal;
