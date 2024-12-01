import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Registration from "./components/Registration";
import "./index.css";
import DonorList from "./components/DonorList";
import DonorDetails from "./components/DonorDetails";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/donors" element={<DonorList />} />
        <Route path="/donor/:id" element={<DonorDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;