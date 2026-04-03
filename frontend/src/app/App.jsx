import {  Routes, Route, Link, BrowserRouter } from 'react-router-dom' // for routing in react
import SignIn from "./pages/Login";
import SignUp from "./pages/Signup";
import { Home } from './pages/Home';
import Header from "./components/Header"; 
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </nav>
        <Header />
        
        {/* <h1>Gym App</h1>x  */}

        {/* container for all routes */}
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;