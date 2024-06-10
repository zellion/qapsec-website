import { Route, HashRouter as Router, Routes } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import CaseStudy from "./components/pages/CaseStudy";
import Contact from "./components/pages/Contact";
import DisplayService from "./components/pages/DisplayService";
import ErrorPage from "./components/pages/ErrorPage";
import Services from "./components/pages/Services";

function App() {
  return (
    <Router>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/:serviceId" element={<DisplayService />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <ButtonGradient />
    </Router>
  );
}

export default App;
