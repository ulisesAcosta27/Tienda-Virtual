import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePages from "./pages/HomePages";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart/:id" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
