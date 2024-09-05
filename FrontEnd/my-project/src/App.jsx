
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './view/Home';
import InfoCountry from './view/Info';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  

  return (
    <Router>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<InfoCountry />} />
      </Routes>
    </Router>
  )
}

export default App
