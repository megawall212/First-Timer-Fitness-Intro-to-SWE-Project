import { ArrowRight } from "lucide-react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm">
              🐊 100% Free Forever
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Chomp Through Your Fitness Goals
            </h1>
            <p className="text-xl text-gray-600">
              Level up your gains with our gamified workout system. Earn points, unlock badges, and dominate the swamp one rep at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-blue-600 text-white rounded-lg hover:from-orange-700 hover:to-blue-700 transition-all flex items-center justify-center gap-2 group">
                Start Your Journey
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">500K+</div>
                <div className="text-sm text-gray-600">Gators Training</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">50M+</div>
                <div className="text-sm text-gray-600">Points Earned</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">1M+</div>
                <div className="text-sm text-gray-600">Badges Unlocked</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* <ImageWithFallback
                src="https://images.unsplash.com/photo-1584827386916-b5351d3ba34b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGd5bXxlbnwxfHx8fDE3NzI1MjE3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Person working out"
                className="w-full h-[500px] object-cover"
              /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-blue-600/20"></div>
            </div>
            {/* Floating Points Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 hidden md:block border-2 border-orange-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-xl">
                  🏆
                </div>
                <div>
                  <div className="font-bold text-gray-900">+250 Points</div>
                  <div className="text-sm text-gray-600">Workout Complete!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}