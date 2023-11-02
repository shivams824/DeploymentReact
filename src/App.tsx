import "./App.css";
import "ag-grid-community/styles/ag-grid.css";
import LoginPage from "./Components/Login/LoginPage";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import View from "./Components/View/View";
import ProfileManagement from "./Components/ProfileManagement/ProfileManagement";
// import { Login } from './Components/trying/Login';
import AssetDetail from "./Components/AssetDetail/AssetDetail";
// import OperatorHome from './Components/Home/OperatorHome';

const App = () => {
  return (
    <div className="App">
        <Routes>
          {/* <Route path="/" element={<LoginPage />} /> */}
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<View />} />
          <Route path="/asset/:type" element={<AssetDetail />} />
          <Route path="/manage-profile" element={<ProfileManagement />} />
        </Routes>
    </div>
  );
};

export default App;
