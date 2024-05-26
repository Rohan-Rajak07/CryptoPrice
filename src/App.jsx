import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import DashboardPage from './Pages/DashboardPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/CryptoPrice/" element={<HomePage/>}></Route>
          <Route path="/CryptoPrice/dashboard" element={<DashboardPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
