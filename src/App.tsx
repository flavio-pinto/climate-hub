import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import "normalize.css"
import "bootstrap/dist/css/bootstrap-grid.min.css"
import "./App.css"
import Home from "./pages/Home/Home"
import Sidebar from "./component/Sidebar/Sidebar"
import Header from "./component/Header/Header"
import { useState } from "react"

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(window.innerWidth >= 576)

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Router>
        <div className={`d-flex appContainer ${sidebarOpen ? '' : 'sidebarClosed'}`}>
          <Sidebar setSidebarOpen={setSidebarOpen} />
          <div className="appContent">
            <Header setDarkMode={setDarkMode} darkMode={darkMode} setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
