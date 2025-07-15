import './App.css';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import ResetPwd from './pages/ResetPassword/ResetPwd';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />     
          <Route path="/home" element={<Home />} />
          <Route path="/reset-password" element={<ResetPwd />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;