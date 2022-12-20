
import './App.css';
import {Routes, Route} from "react-router-dom";
import Register from './pages/Register';
import { Login } from './pages/Login';

function App() {
  return (
  <div>
 <Routes>
      <Route path="/" element={<Login />} />
        <Route path="register" element={  <Register/> } />
       
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
      </Routes>
    
</div>);
}

export default App;
