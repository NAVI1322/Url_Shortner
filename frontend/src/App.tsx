import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/login";


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/dashboard" element={<LandingPage />}></Route>
    <Route path="/signup" element={<Login />}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App;
