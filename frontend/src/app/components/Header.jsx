import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-3xl">🐊</span>
          <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">Gator Gains</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          <li><a href="#features" className="text-gray-700 hover:text-orange-600 transition-colors">Features</a></li>
          <li><a href="#workouts" className="text-gray-700 hover:text-orange-600 transition-colors">Workouts</a></li>
          <li><a href="#badges" className="text-gray-700 hover:text-orange-600 transition-colors">Badges</a></li>
          <li><a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">About</a></li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="px-4 py-2 text-gray-700 hover:text-orange-600 transition-colors">
            Sign In
          </Link>
          <Link to="/signup" className="px-6 py-2 bg-gradient-to-r from-orange-600 to-blue-600 text-white rounded-lg hover:from-orange-700 hover:to-blue-700 transition-all">
            Start Free
          </Link>
        </div>

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
              <li><a href="#features" className="text-gray-700 hover:text-orange-600 transition-colors">Features</a></li>
              <li><a href="#workouts" className="text-gray-700 hover:text-orange-600 transition-colors">Workouts</a></li>
              <li><a href="#badges" className="text-gray-700 hover:text-orange-600 transition-colors">Badges</a></li>
              <li><a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">About</a></li>
              <li><Link to="/signin" className="w-full px-4 py-2 text-gray-700 hover:text-orange-600 text-left transition-colors">Sign In</Link></li>
              <li><Link to="/signup" className="w-full px-6 py-2 bg-gradient-to-r from-orange-600 to-blue-600 text-white rounded-lg hover:from-orange-700 hover:to-blue-700 transition-all text-center">Start Free</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}