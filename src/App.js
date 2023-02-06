import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/pages/Footer";
import Home from "./components/pages/Home";
import Kontaktai from "./components/pages/Kontaktai";
import Apiemus from "./components/pages/Apiemus";
import Visuomeniniai from "./components/pages/Visuomeniniai";
import Individualus from "./components/pages/Individualus";
import Baldurestauravimas from "./components/pages/Baldurestauravimas";
import Baldugamyba from "./components/pages/Baldugamyba";
import Interjeras from "./components/pages/Interjeras";
import Gototop from "./components/Gototop";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      

      <div className="container">
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kontaktai" element={<Kontaktai />} />
            <Route path="/apiemus" element={<Apiemus />} />
            <Route path="/visuomeniniai" element={<Visuomeniniai />} />
            <Route path="/individualus" element={<Individualus />} />
            <Route path="/baldurestauravimas" element={<Baldurestauravimas />}/>
            <Route path="/baldugamyba" element={<Baldugamyba />} />
            <Route path="/interjeras" element={<Interjeras />} />
          </Routes>
        </ScrollToTop>
      </div>
      <Gototop />
      <Footer />
    </>
  );
}

export default App;
