import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import LoginPopup from "./components/LoginPopup";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <BrowserRouter>
      <>
        {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
        <div className="app">
          <Navbar setShowLogin={setShowLogin} />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </>
    </BrowserRouter>
  );
};

export default App;
