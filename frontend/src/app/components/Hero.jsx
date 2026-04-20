import { useState, useEffect, useRef, useMemo } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const navigate = useNavigate();
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [scrollOffset, setScrollOffset] = useState(0);
  const [animatedCounts, setAnimatedCounts] = useState([0, 0, 0]);
  const statsRef = useRef(null);
  const isAnimatingRef = useRef(false);
  const frameRef = useRef(null);
  const timeoutRef = useRef(null);

  const stats = useMemo(
    () => [
      { label: "Gators Training", value: 500000 },
      { label: "Points Earned", value: 50000000 },
      { label: "Badges Unlocked", value: 1000000 },
    ],
    []
  );

  const formatStatValue = (value) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(value >= 10000000 ? 0 : 1).replace(/\.0$/, "")}M+`;
    }
    if (value >= 1000) {
      return `${Math.round(value / 1000)}K+`;
    }
    return `${value}`;
  };

  const handleStartJourney = () => {
    navigate("/login");
  };

  useEffect(() => {
    const onScroll = () => {
      setScrollOffset(window.scrollY / 18);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!statsRef.current) return;

    const cleanupAnimation = () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      isAnimatingRef.current = false;
    };

    const animateOnce = () => {
      const duration = 1200;
      const startTime = performance.now();

      const animate = (timestamp) => {
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setAnimatedCounts(
          stats.map((stat) => Math.floor(stat.value * progress))
        );

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(animate);
        } else {
          timeoutRef.current = window.setTimeout(() => {
            if (isAnimatingRef.current) {
              frameRef.current = requestAnimationFrame(animateOnce);
            }
          }, 900);
        }
      };

      frameRef.current = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (!isAnimatingRef.current) {
            isAnimatingRef.current = true;
            animateOnce();
          }
        } else {
          cleanupAnimation();
          setAnimatedCounts([0, 0, 0]);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(statsRef.current);
    return () => {
      observer.disconnect();
      cleanupAnimation();
    };
  }, [stats]);

  const handleMouseMove = (event) => {
    const { clientX, clientY, currentTarget } = event;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width - 0.5) * 18;
    const y = ((clientY - top) / height - 0.5) * 18;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <section
      className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute inset-0 home-hero-background pointer-events-none"
        style={{
          transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y + scrollOffset}px, 0)`,
        }}
      >
        <span className="home-star home-star-1" />
        <span className="home-star home-star-2" />
        <span className="home-star home-star-3" />
        <span className="home-star home-star-4" />
        <span className="home-star home-star-5" />
        <span className="home-dumbbell home-dumbbell-1" />
        <span className="home-dumbbell home-dumbbell-2" />
      </div>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block relative px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm">
              <span className="home-flash-icon">⚡</span>
              🐊 100% Free Forever
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Chomp Through Your Fitness Goals
            </h1>
            <p className="text-xl text-gray-600">
              Level up your gains with our gamified workout system. Earn points, unlock badges, and dominate the swamp one rep at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleStartJourney}
                className="hero-cta-glow px-8 py-4 bg-gradient-to-r from-orange-600 to-blue-600 text-white rounded-lg hover:from-orange-700 hover:to-blue-700 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                Start Your Journey
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div ref={statsRef} className="flex flex-wrap items-center gap-4 pt-4 hero-stats-row">
              {stats.map((stat, index) => (
                <div key={stat.label} className="hero-stat-card p-5 rounded-3xl border border-slate-200 bg-white/90 backdrop-blur-sm shadow-lg min-w-[150px] animate-stat-item">
                  <div className="text-3xl sm:text-4xl font-bold hero-stat-number bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                    {formatStatValue(animatedCounts[index])}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1584827386916-b5351d3ba34b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGd5bXxlbnwxfHx8fDE3NzI1MjE3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Person working out"
                className="w-full h-[500px] object-cover"
              />
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