import {  Routes, Route, Link, BrowserRouter } from 'react-router-dom' // for routing in react
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </nav>
        
        {/* <h1>Gym App</h1>x  */}

        {/* container for all routes */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;