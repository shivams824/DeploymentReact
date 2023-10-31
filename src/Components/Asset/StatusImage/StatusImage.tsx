import axios from "axios";
import React, { useEffect, useState } from "react";
import active from "../../../assets/accept.png";
import inactive from "../../../assets/remove.png";
import "./StatusImage.css";

const StatusImage: React.FC = (props: any) => {
  const url = "https://localhost:7108/api/AssetView";
  console.log(props);
  return (
    <div>
      {props.value ? <img src={active} alt="Active" className="active" /> : <img src={inactive} alt="Inactive" className="inactive" />}
    </div>
  );
};

export default StatusImage;
