import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LoggedInContext } from "../../Context";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { MuscleGroups } from "../components/MuscleGroups";
import { BadgesSection } from "../components/BadgesSection";

//music
import { MusicSticker } from "../components/MusicSticker";

export function Home() {
  const location = useLocation();
  const { loggedIn, userInfo } = useContext(LoggedInContext);

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);

  // Check if user is logged in and has a UFL or EDU email
  const isGator = loggedIn && userInfo.email && (
    userInfo.email.toLowerCase().endsWith('@ufl.edu') ||
    userInfo.email.toLowerCase().endsWith('@edu')
  );

  return (
    <>
      <MusicSticker />
      {isGator && (
        <div className="bg-gradient-to-r from-orange-600 to-blue-600 text-white py-4 px-4 text-center">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold">🐊 Welcome home gator! 🐊</h2>
            <p className="text-orange-100 mt-1">Great to see another Gator crushing their fitness goals!</p>
          </div>
        </div>
      )}
      <Hero />
      <Features />
      <MuscleGroups />
      <BadgesSection />
    </>
  );
}
