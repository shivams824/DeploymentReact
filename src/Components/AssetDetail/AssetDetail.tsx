import React from "react";
import Plot from "react-plotly.js";
import waterpump from "../../assets/waterpump.png";
import { Navbar } from "react-bootstrap";
import Dashboard from "../Dashboard/Dashboard";

const AssetDetail: React.FC = () => {
  // const { type } = useParams<{ type: string }>();

  // Fetch additional details for the selected asset based on the 'type' parameter
  // You can use Axios or any other method to fetch the data

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Dashboard />
      </div>
      <div className="view">
        <div className="lower">
          <div className="asset-image-div">
            <img src={waterpump} alt="" className="asset-image" />
          </div>
          <div className="asset-description"></div>
        </div>
        <div className="upper">
          <Plot
            className="graph"
            // dcc.Graph(
            //   id= "custom_fields_pie_chart",
            //   config={
            //       "displaylogo": False,
            //       'modeBarButtonsToRemove': ['pan2d','lasso2d']
            //   },

            data={[
              {
                x: [1, 10, 3],
                y: [1, 6, 3],
                type: "scatter",
                mode: "lines+markers",
                marker: { color: "red" },
              },
              { type: "scatter", x: [1, 2, 3], y: [2, 5, 3] },
            ]}
            layout={{
              title: "Asset-Detail",
              autosize: true,
              width: 1282,
              height: 350,
              margin: {
                l: 30,
                r: 30,
                b: 35,
                t: 50,
              },
              legend: {
                orientation: "h",
              },
            }}
            config={{ displayModeBar: false }}
          />
        </div>
      </div>
    </div>
  );
};

export default AssetDetail;
