import {  Routes, Route, Link, BrowserRouter } from 'react-router-dom' // for routing in react
import SignIn from "./pages/Login";
import SignUp from "./pages/Signup";
import { Home } from './pages/Home';
import { About } from './pages/About';
import Header from "./components/Header"; 
import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { LoggedInContext } from "../Context";
import { collection, getDocs, query, where } from "firebase/firestore";


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({
    id: "",
    name: "",
    email: "",
    points: 0,
    badges: [],
    workoutsCompleted: 0,
    currentStreak: 0,
    lastWorkoutDate: "",
    completedExercises: [],
  })

  const refreshUserInfo = async (uid) => {
    if (!uid) return;

    const q = query(
      collection(db, "users"),
      where("uid", "==", uid)
    );
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      const userDoc = snapshot.docs[0];
      setUserInfo({
        id: userDoc.id,
        ...userDoc.data(),
      });
    } else {
      setUserInfo({
        id: "",
        name: "",
        email: "",
        points: 0,
        badges: [],
        workoutsCompleted: 0,
        currentStreak: 0,
        lastWorkoutDate: "",
        completedExercises: [],
      });
    }
  }

  useEffect(() => {
    // check if user is currently logged in
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
        refreshUserInfo(user.uid);
      } else {
        setLoggedIn(false);
        setUserInfo({
          id: "",
          name: "",
          email: "",
          points: 0,
          badges: [],
          workoutsCompleted: 0,
          currentStreak: 0,
          lastWorkoutDate: "",
          completedExercises: [],
        });
      }
    });
  }, []);



  return (
    <LoggedInContext.Provider value={{ loggedIn, userInfo, refreshUserInfo }}>
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
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>

      </div>
    </BrowserRouter>
    </LoggedInContext.Provider>

  );
}

export default App;