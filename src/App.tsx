import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import "normalize.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./pages/Content/Content";

function App() {
  return (
    <div className="grid-container">
      <Router>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Content />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
