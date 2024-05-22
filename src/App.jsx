import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import DashboardPage from './Pages/DashboardPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/dashboard" element={<DashboardPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
