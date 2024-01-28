import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Styles/overall_css.css'
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Station from "./pages/station/Station";
import NavBar from "./Components/Navbar"
function App() {
  return (
    <>
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/station/:id" element={<Station />}/> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
