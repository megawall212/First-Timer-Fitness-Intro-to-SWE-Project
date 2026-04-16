import { Trophy, Star, Award, Crown, Zap, Target } from "lucide-react";
import { useContext } from "react";
import { LoggedInContext } from "../../Context";

const badges = [
  {
    icon: Trophy,
    name: "First Steps",
    description: "Complete your first workout",
    points: 50,
    color: "from-yellow-400 to-yellow-600",
  },
  {
    icon: Zap,
    name: "Week Warrior",
    description: "Complete 7 workouts in a row",
    points: 200,
    color: "from-orange-400 to-orange-600",
  },
  {
    icon: Star,
    name: "Level Master",
    description: "Complete all 5 levels in one muscle group",
    points: 500,
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Target,
    name: "Perfect Month",
    description: "30 days workout streak",
    points: 1000,
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: Award,
    name: "Swamp Legend",
    description: "Earn 10,000 total points",
    points: 2500,
    color: "from-green-400 to-green-600",
  },
  {
    icon: Crown,
    name: "Apex Predator",
    description: "Complete all levels in all muscle groups",
    points: 5000,
    color: "from-red-400 to-red-600",
  }
];

export function BadgesSection() {
  const { userInfo } = useContext(LoggedInContext);
  const unlockedBadges = new Set(userInfo.badges || []);
  const totalUnlocked = unlockedBadges.size;

  return (
    <section id="badges" className="py-16 md:py-24 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Earn Epic Badges
          </h2>
          <p className="text-xl text-gray-600">
            Show off your achievements and unlock exclusive rewards as you crush your fitness goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            const unlocked = unlockedBadges.has(badge.name);

            return (
              <div
                key={index}
                className={`relative bg-white p-6 rounded-xl shadow-lg border-2 ${
                  unlocked ? 'border-orange-200' : 'border-gray-200'
                } ${unlocked ? '' : 'opacity-60'}`}
              >
                {!unlocked && (
                  <div className="absolute top-3 right-3">
                    <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs">
                      🔒
                    </div>
                  </div>
                )}
                <div className={`w-16 h-16 bg-gradient-to-br ${badge.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                  <Icon className="size-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                  {badge.name}
                </h3>
                <p className="text-gray-600 text-center text-sm mb-4">
                  {badge.description}
                </p>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                    +{badge.points}
                  </span>
                  <span className="text-sm text-gray-600">points</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-white rounded-2xl shadow-lg p-8 border-2 border-orange-200">
            <div className="flex items-center gap-8">
              <div>
                <div className="text-sm text-gray-600 mb-1">Your Total Points</div>
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                  {userInfo.points ?? 0}
                </div>
              </div>
              <div className="w-px h-16 bg-gray-200"></div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Badges Unlocked</div>
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                  {totalUnlocked}/{badges.length}
                </div>
              </div>
              <div className="w-px h-16 bg-gray-200"></div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Current Streak</div>
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                  {userInfo.currentStreak ?? 0} 🔥
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
