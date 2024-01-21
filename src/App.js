import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/Pages/About/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import MobileNav from "./components/Navbar/MobileNav/MobileNav";
import NavBar from "./components/Navbar/NavBar";

function App() {
  const [showFeatures, setShowFeatures] = useState(false);
  const [showCompany, setShowComapany] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [body, setBody] = useState(true);

  return (
    <>
      {mobileNav && <MobileNav setBody={setBody} setMobileNav={setMobileNav} />}

      {body && (
        <div className="App">
          <NavBar
            showFeatures={showFeatures}
            setShowFeatures={setShowFeatures}
            showCompany={showCompany}
            setShowComapany={setShowComapany}
            showHelp={showHelp}
            setShowHelp={setShowHelp}
            setBody={setBody}
            setMobileNav={setMobileNav}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
