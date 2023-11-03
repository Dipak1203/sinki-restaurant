import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/UI/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactPage from "./components/UI/pages/ContactPage";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
