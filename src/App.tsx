import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import "normalize.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./App.css";
import Home from "./pages/Home/Home";
import Sidebar from "./component/Sidebar/Sidebar";
import Header from "./component/Header/Header";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="d-flex appContainer">
          <Sidebar />
          <div className="appContent">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
