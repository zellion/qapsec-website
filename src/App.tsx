import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import CaseStudy from "./components/pages/CaseStudy";
import ErrorPage from "./components/pages/ErrorPage";
import DisplayService from "./components/pages/DisplayService";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="flex top-0 -z-10 h-full w-full"></div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Router>
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
      </Router>
      <div className="container mx-auto px-8"></div>
    </div>
  );
}

export default App;
