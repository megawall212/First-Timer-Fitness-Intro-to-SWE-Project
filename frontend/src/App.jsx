import {  Routes, Route, Link, BrowserRouter } from 'react-router-dom' // for routing in react
import Login from "./Login";
import Signup from "./Signup";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </nav>
        
        <h1>Gym App</h1>

        {/* container for all routes */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;