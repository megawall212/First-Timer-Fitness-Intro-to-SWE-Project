import { Trophy, Target, TrendingUp, Award, Star, Zap } from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "Points System",
    description: "Earn points for every workout completed and climb the leaderboard. The more you train, the more you gain!"
  },
  {
    icon: Award,
    title: "Unlock Badges",
    description: "Collect exclusive badges as you hit milestones. From Baby Gator to Apex Predator, show off your progress."
  },
  {
    icon: Target,
    title: "Level Up",
    description: "Progress through 5 difficulty levels for each muscle group. Start as a hatchling, become a beast."
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description: "Monitor your gains with detailed stats and watch your strength grow over time."
  },
  {
    icon: Star,
    title: "Daily Challenges",
    description: "Complete daily challenges for bonus points and keep your streak alive."
  },
  {
    icon: Zap,
    title: "100% Free",
    description: "No subscriptions, no paywalls. All features unlocked from day one. Just pure gains."
  }
];

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-orange-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gamified Fitness That Works
          </h2>
          <p className="text-xl text-gray-600">
            Turn your workouts into an adventure with our reward system designed to keep you motivated.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-2 border-transparent hover:border-orange-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="size-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}