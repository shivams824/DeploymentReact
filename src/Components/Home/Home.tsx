/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import Dashboard from "../Dashboard/Dashboard";
import { AgGridReact } from "ag-grid-react";
import search from "../../assets/search.png";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import axios from "axios";
import StatusImage from "../Asset/StatusImage/StatusImage";
import ViewImage from "../Asset/ViewImage/ViewImage";
import CreateModal from "./CreateModal/CreateModal";
import PieChart from "../PieChart/PieChart";
import Trash from "../Asset/Trash/Trash";
import { useLocation } from "react-router-dom";
import UserNavbar from "../UserNavbar/UserNavbar";

const Home: React.FC<{ role: string }> = () => {
  const url = "http://localhost:5104/api/AssetView";
  // const userId: any = props.userId;
  // const userurl = "";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  // const [error, setError] = useState(null);
  const [chartData, setchartData] = useState<any>([]);
  const [searchTerm] = useState("");
  const [filteredData] = useState([]);
  console.log(filteredData);
  const location = useLocation();
  // const userId = location.state.userId;
  const role = location.state.role;
  // const userId = props.userId;
  // console.log(userId, "userId")
  console.log(role, "role");
  // const { userid }: any = useParams();
  // const url2 = `http://localhost:5104/api/AssetView/${userid}/assets`;
  const customFilter = {
    getRows(params: any) {
      const filteredData = data.filter((row: any) => {
        return row.AssetName.toLowerCase().includes(searchTerm.toLowerCase());
      });
      console.log(customFilter);
      params.successCallback(filteredData, filteredData.length);
    },
  };


  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let gridApi: any;
  console.log(gridApi);

  useEffect(() => {
    axios.get(url).then((res: any) => {
      console.log(res.data, "asset");
      const assetData = res.data.flat();
      setData(assetData);
      setchartData(assetData);
    });
  }, []);


  const reloadTable: any = () => {
    axios
      .get(url)
      .then((res: any) => {
        console.log(res.data, "admin");
        const assetData = res.data.flat();
        setData(assetData);
        setchartData(assetData);
      })
      .catch((error) => {
        console.error("Error making admin API call:", error);
      });
  };

  const rowData: any[] = useState([
    {
      AssetName: "Celica",
      Status: 35000,
      type: "Type1",
      Description: "",
      View: "Image",
      Delete: "Trash",
    },
    {
      AssetName: "Mondeo",
      Status: 32000,
      type: "Type1",
      Description: "",
      View: "Image",
      Delete: "Trash",
    },
    {
      AssetName: "Boxter",
      Status: 72000,
      type: "Type1",
      Description: "",
      View: "Image",
      Delete: "Trash",
    },
  ]);
  console.log(rowData); 

  const [columnDefVal]: any[] = useState([
    {
      field: "assetName",
      headerName: "Asset Name",
      cellClass: "heading",
      width: 210,
      flex: 1,
      filter: false,
      resizable: false,
      // headerComponentParams: {
      //   onFilterChanged: (event: FilterChangedEvent) => {
      //     const filterText = event.api.getFilterModel()["assetName"];
      //     gridApiRef.current?.setQuickFilter(filterText);
      //   },
      // },
    },
    {
      field: "type",
      headerName: "Type",
      cellClass: "heading",
      width: 200,
      flex: 1,
      filter: false,
      resizable: false,
    },
    {
      field: "status",
      headerName: "Status",
      cellClass: "heading",
      width: 178,
      cellRenderer: StatusImage,
      flex: 1,
      filter: false,
      resizable: false,
    },
    // {
    //   field: "allDescription",
    //   headerName: "Description",
    //   cellClass: "heading",
    //   width: 250,
    //   flex: 1,
    //   filter: true,
    //   resizable: true,
    //   valueFormatter: (params: any) => {
    //     if (params.value === null) {
    //       return "null";
    //     }
    //   },
    // },
    {
      field: "View",
      headerName: "View",
      cellRenderer: ViewImage,
      cellClass: "heading",
      width: 150,
      flex: 1,
      filter: false,
      resizable: false,
    },
    {
      field: "Delete",
      headerName: "Delete",
      cellClass: "heading",
      width: 150,
      cellRenderer: Trash,
      flex: 1,
      filter: false,
      resizable: false,
    },
  ]);

  if (role === "Admin") {
    return (
      <div className="Homepage">
        <div>
          <Navbar role="admin" />
        </div>
        <div>
          <Dashboard />
        </div>
        <div className="table-container">
          <div className="upper-home">
            <PieChart chartData={chartData} />
          </div>
          <div className="asset">
            Assets
            <CreateModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              updateSave={reloadTable}
              // userId={userId}
            />
            <a href="http://www.google.com">
              <img src={search} alt="" className="search-icon" />
            </a>
            <input
              type="text"
              placeholder="Search ..."
              className="searchbox"
              // value={searchTerm}
              // onChange={onSearch}
            ></input>
            <button
              className="create-button"
              onClick={() => setIsModalOpen(true)}
            >
              Create
            </button>
          </div>
          <div
            className="ag-theme-alpine, ag-theme-mycustomtheme"
            style={{ height: 302, width: 1282 }}
          >
            <AgGridReact
              rowData={data}
              columnDefs={columnDefVal} /*onGridReady={onGridReady}*/
              onGridReady={(params) => {
               gridApi = params.api;
              }}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Homepage">
        <div>
          <UserNavbar />
        </div>
        <div>
          <Dashboard />
        </div>
        <div className="table-container">
          <div className="upper-home">
            <PieChart chartData={chartData} />
          </div>
          <div className="asset">
            Assets
            <CreateModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              updateSave={reloadTable}
              // userId={userId}
            />
            <a>
              <img src={search} alt="" className="search-icon" />
            </a>
            <input
              type="text"
              placeholder="Search ..."
              className="searchbox"
              // value={searchTerm}
              // onChange={onSearch}
            ></input>
            <button
              className="create-button"
              onClick={() => setIsModalOpen(true)}
            >
              Create
            </button>
          </div>
          <div
            className="ag-theme-alpine, ag-theme-mycustomtheme"
            style={{ height: 302, width: 1282 }}
          >
            <AgGridReact
              rowData={data}
              columnDefs={columnDefVal} /*onGridReady={onGridReady}*/
              onGridReady={(params) => {
                gridApi = params.api;
              }}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
