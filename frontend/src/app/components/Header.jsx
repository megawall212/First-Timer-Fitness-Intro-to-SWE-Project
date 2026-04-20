import { Menu, X } from "lucide-react";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoggedInContext } from "../../Context";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { loggedIn, userInfo } = useContext(LoggedInContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSectionClick = (section) => {
    navigate(`/${section}`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-3xl">🐊</span>
          <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
            Gator Gains
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <button
              type="button"
              onClick={() => handleSectionClick("#features")}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Features
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => handleSectionClick("#workouts")}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Workouts
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => handleSectionClick("#badges")}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Badges
            </button>
          </li>
          <li><Link to="/about" className="text-gray-700 hover:text-orange-600 transition-colors">About</Link></li>
        </ul>

        {!loggedIn ? (
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login" className="px-4 py-2 text-gray-700 hover:text-orange-600 transition-colors">
              Sign In
            </Link>
            <Link to="/signup" className="px-6 py-2 bg-gradient-to-r from-orange-600 to-blue-600 text-white rounded-lg hover:from-orange-700 hover:to-blue-700 transition-all">
              Start Free
            </Link>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-4">
            <div className="text-right text-sm text-gray-700">
              <div className="font-semibold">
                Welcome, {userInfo.name || userInfo.email}!
              </div>
              <div className="text-xs text-gray-500">
                {userInfo.points ?? 0} points
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 md:hidden">
            <ul className="flex flex-col p-4 gap-4">
              <li>
                <button
                  type="button"
                  onClick={() => handleSectionClick("#features")}
                  className="text-gray-700 hover:text-orange-600 transition-colors text-left"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleSectionClick("#workouts")}
                  className="text-gray-700 hover:text-orange-600 transition-colors text-left"
                >
                  Workouts
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleSectionClick("#badges")}
                  className="text-gray-700 hover:text-orange-600 transition-colors text-left"
                >
                  Badges
                </button>
              </li>
              <li><Link to="/about" className="text-gray-700 hover:text-orange-600 transition-colors">About</Link></li>

              {!loggedIn ? (
                <>
                  <li>
                    <Link to="/login" className="w-full px-4 py-2 text-gray-700 hover:text-orange-600 text-left transition-colors">
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup" className="w-full px-6 py-2 bg-gradient-to-r from-orange-600 to-blue-600 text-white rounded-lg hover:from-orange-700 hover:to-blue-700 transition-all text-center">
                      Start Free
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="text-sm text-gray-700">
                    <div className="font-semibold">
                      Welcome, {userInfo.name || userInfo.email}!
                    </div>
                    <div className="text-xs text-gray-500">
                      {userInfo.points ?? 0} points
                    </div>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}