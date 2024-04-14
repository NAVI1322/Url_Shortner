import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/login";
import Register from "./pages/register";
import { useState } from "react";



function App() {
  const [isChecked, setIsChecked] = useState(true);
  const[theme, settheme] = useState(true);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    settheme(!theme);
  }
  
  return (
    <div className={`html ${theme && "dark"}`}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage handleCheckboxChange={handleCheckboxChange} isChecked={isChecked} theme={theme} />}></Route>
        <Route path="/dashboard" element={<LandingPage handleCheckboxChange={handleCheckboxChange} isChecked={isChecked} theme={theme} />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App;
