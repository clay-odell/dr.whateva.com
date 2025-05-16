import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';
import SiteRouter from './SiteRouter';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  

  return (
    <>
      <Router>
        <NavBar />
        <SiteRouter />
      </Router>
    </>
  )
}

export default App
