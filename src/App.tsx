
import './App.css';
import 'ag-grid-community/styles/ag-grid.css';
import LoginPage from './Components/Login/LoginPage';
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './Components/View/View';
import ProfileManagement from './Components/ProfileManagement/ProfileManagement';
// import { Login } from './Components/trying/Login';
import AssetDetail from './Components/AssetDetail/AssetDetail';
// import OperatorHome from './Components/Home/OperatorHome';


function App() {
  return (
    <div className='App'>
      <BrowserRouter basename="/shivams824">
      <Routes>
      <Route path="/" element={<LoginPage />} />
        <Route path="/Home" element={<Home role="role" />} />
        <Route path="view" element={<View />} />
        <Route path="/asset/:type" Component={AssetDetail} />
          <Route path="/manage-profile" element={<ProfileManagement />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
