import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import "normalize.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./App.css";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="grid-container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
