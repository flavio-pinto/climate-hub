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
import { useState } from "react";

function App() {
  // Aggiungi uno stato per gestire la modalità chiara o scura
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Aggiungi un gestore di eventi per il click sull'icona del sole
  /* const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Aggiorna la classe del corpo del documento
    document.body.classList.toggle('dark-mode', !darkMode);
  }; */

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Router>
        {/* <div className="d-flex appContainer"> */}
        <div className="d-flex appContainer">
          <Sidebar />
          <div className="appContent">
            <Header setDarkMode={setDarkMode} darkMode={darkMode} />
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
