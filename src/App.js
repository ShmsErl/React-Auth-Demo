
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import CreateCar from './pages/CreateCar';
import PrivateRoute from './utils/PrivateRoute';
import PasswordReset from './pages/PasswordReset';
import PasswordChange from './pages/PasswordChange';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<PasswordReset />} />
        <Route path="/passwordchange" element={<PasswordChange />} />
        <Route exact path="/createcar" element={<PrivateRoute component={<CreateCar />} role={'ADMIN'} />} />

      
      </Routes>
    </Router>
  );
}

export default App;
