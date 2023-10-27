import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import "normalize.css"
import "bootstrap/dist/css/bootstrap-grid.min.css"
import "./App.css"
import { useState } from "react"
import Home from "./pages/Home/Home"
import Sidebar from "./component/Sidebar/Sidebar"
import Header from "./component/Header/Header"
import Sections from "./pages/Sections/Sections"
import News from "./pages/News/News"

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(window.innerWidth >= 992)

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Router>
        <div className={`d-flex appContainer ${sidebarOpen ? '' : 'sidebarClosed'}`}>
          <Sidebar setSidebarOpen={setSidebarOpen} />
          <div className="appContent">
            <Header setDarkMode={setDarkMode} darkMode={darkMode} setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:section" element={<Sections />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
