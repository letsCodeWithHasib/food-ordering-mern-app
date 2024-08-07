import { Routes, Route } from "react-router-dom";
import Sidebar from "./pages/Sidebar";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <Routes>
        <Route path="/" element={<Sidebar />} />
      </Routes>
    </div>
  );
};

export default App;
