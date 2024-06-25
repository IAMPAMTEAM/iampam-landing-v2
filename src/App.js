import logo from './logo.svg';
import './App.css';
import Landing from './pages/Landing';
import Login from './pages/login';
import RegisterCompany from './pages/registerCompany';
import RegisterAWSInfo from './pages/registerAWS';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register/company" element={<RegisterCompany />} />
          <Route path="/register/aws-info" element={<RegisterAWSInfo />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
