import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Ragester from "./pages/register/Ragester";
import Error from "./pages/error/Error";


function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Ragester />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
