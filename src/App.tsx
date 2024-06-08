import { HashRouter as Router } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Navbar />
      </div>
      <ButtonGradient />
    </Router>
  );
}

export default App;
