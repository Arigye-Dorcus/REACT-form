import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginSignup from './Components/Login-signup/LoginSignup.jsx';
import Dashbord from './Components/Login-signup/Dashbord.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route path="/dashboard" element={<Dashbord />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;