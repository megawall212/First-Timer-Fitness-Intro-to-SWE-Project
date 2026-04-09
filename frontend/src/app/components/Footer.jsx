import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🐊</span>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">Gator Gains</span>
            </div>
            <p className="text-gray-400">
              The 100% free gamified fitness app. Chomp your way to greatness, one workout at a time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram className="size-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook className="size-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter className="size-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Youtube className="size-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Workouts</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Triceps & Chest</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Back & Biceps</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Abs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Legs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Community</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Leaderboard</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Badges</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Challenges</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Forum</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Gator Gains. All rights reserved. Stay hungry. Stay swampy. 🐊</p>
        </div>
      </div>
    </footer>
  );
}