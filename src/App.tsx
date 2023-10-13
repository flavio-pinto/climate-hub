import 'normalize.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './pages/Home/Home'

function App() {
  return (
    <div className='grid-container'>
      <Header />
      <Sidebar />
      <Home />
    </div>
  )
}

export default App
