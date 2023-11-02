import React, { useState, useEffect } from "react";
import "./View.css";
import Plot from "react-plotly.js";
import waterpump from "../../assets/waterpump.png";
import Navbar from "../Navbar/Navbar";
import Dashboard from "../Dashboard/Dashboard";
import axios from "axios";

const View: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState([]);
  console.log(data);
  const [randomData, setRandomData] = useState({
    x: [],
    y1: [],
    y2: [],
  });

  useEffect(() => {
    axios.get("http://localhost:5104/api/AssetView").then((res: any) => {
      console.log(res.data, "asset");
      const assetData = res.data.flat();
      setData(assetData);
    });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5104/api/jsondata/randomdata")
      .then((response) => {
        setRandomData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching random data", error);
      });
  }, []);

  return (
    <div>
      <div>
        <Navbar  />
      </div>
      <div>
        <Dashboard />
      </div>
      <div className="view">
        <div className="lower">
          <div className="asset-image-div">
            <img src={waterpump} alt="" className="asset-image" />
          </div>
          <div className="asset-description">
            <div className="asse">
              <h3 className="des">Asset Description</h3>
            </div>
            <div className="deso">
              <p>
                Jet pumps, also known as ejector pumps, are devices capable of
                handling and transporting all forms of motive fluid including
                gas, steam, or liquid.
              </p>
            </div>
          </div>
        </div>
        <div className="upper">
          <Plot
            className="graph"
            data={[
              {
                x: randomData.x,
                y: randomData.y1,
                type: "scatter",
                mode: "lines+markers",
                marker: { color: "green" },
                name: "Series 1",
              },
              {
                x: randomData.x,
                y: randomData.y2,
                type: "scatter",
                mode: "lines+markers",
                marker: { color: "red" },
                name: "Series 2",
              },
            ]}
            layout={{
              title: "Asset-Detail",
              autosize: true,
              width: 1282,
              height: 450,
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

export default View;
