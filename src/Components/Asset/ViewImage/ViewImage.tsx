import React from "react";
import view from "../../../assets/view.png";
import { Link } from "react-router-dom";
import "./ViewImage.css";

interface ViewImageProps {
  assetType: string;
}

const ViewImage: React.FC<ViewImageProps> = ({ assetType }) => {
  return (
    <Link to={`/view?type=${assetType}`} className="view-link">
      <div className="view-txt">
        View
        <img src={view} alt="view" className="view-img" />
      </div>
    </Link>
  );
}

export default ViewImage;
