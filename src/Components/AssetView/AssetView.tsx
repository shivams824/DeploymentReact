import React from "react";
import { useParams } from "react-router-dom";

const AssetView: React.FC = () => {
  const { type } = useParams<{ type: string }>();

  // Based on the asset type, you can render different content or components.

  return (
    <div>
      <h1>Asset View</h1>
      <p>Asset Type: {type}</p>
      {/* Add content or components specific to the asset type */}
    </div>
  );
}

export default AssetView;
