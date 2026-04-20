import { useState } from "react";
import yoimiyaGif from "../../assets/yoimiya.gif";
import huTaoGif from "../../assets/hu-tao-music.gif";
import frierenGif from "../../assets/frieren-anime.gif";
import igbGif from "../../assets/igb.gif";
import bladeGif from "../../assets/blade.gif";
import wallpaperVideo from "../../assets/wallpaper.mp4";

const gifGallery = [
  { src: yoimiyaGif, title: "Gym mood boost" },
  { src: huTaoGif, title: "Energy in motion" },
  { src: frierenGif, title: "Focused progress" },
  { src: igbGif, title: "Night training vibes" },
  { src: bladeGif, title: "Blade energy" },
];

const topics = [
  {
    id: "mission",
    title: "Our Mission",
    content:
      "Gator Gains is built to help beginners and students turn everyday workouts into an engaging fitness journey. We combine game mechanics, progress tracking, and community motivation to make exercise feel rewarding every day.",
  },
  {
    id: "experience",
    title: "Why Gamified Fitness",
    content:
      "By adding points, badges, and streak rewards, workouts become less like chores and more like achievements. This approach helps users stay consistent, build confidence, and celebrate progress as they train.",
  },
  {
    id: "how-it-works",
    title: "How It Works",
    content:
      "Sign up, choose your training plan, and complete workouts to earn points, unlock badges, and track your streak. The app makes it easy to see progress, stay motivated, and keep pushing toward stronger, healthier habits.",
  },
];

export function About() {
  const [activeTopic, setActiveTopic] = useState(topics[0].id);
  const [activeStat, setActiveStat] = useState("mission");
  const currentTopic = topics.find((topic) => topic.id === activeTopic);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-[2rem] bg-white/90 shadow-2xl ring-1 ring-slate-200 overflow-hidden">
            <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr] p-8 lg:p-0">
              <div className="bg-gradient-to-r from-orange-500 to-blue-600 rounded-[2rem] px-8 py-12 text-white">
                <p className="text-sm uppercase tracking-[0.25em] text-orange-100 mb-4">
                  About Gator Gains
                </p>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Fitness for beginners, powered by gamification.</h1>
                <p className="max-w-3xl text-lg leading-8 text-orange-100/90">
                  Designed for students, first-time gym-goers, and anyone who wants a more fun and motivating way to build healthy habits. Gator Gains turns workouts into a journey with rewards, progress, and community energy.
                </p>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 shadow-2xl bg-slate-900">
                  <img
                    src={yoimiyaGif}
                    alt="Fitness sticker"
                    className="h-[320px] w-full object-cover sm:h-[360px]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/95 to-transparent p-5 text-white">
                    <p className="text-sm uppercase tracking-[0.25em] text-orange-300 mb-2">Get pumped</p>
                    <p className="text-base sm:text-lg font-semibold">
                      Stay motivated with a playful training vibe.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-8">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Built for beginners</h2>
                <p className="text-slate-600 leading-relaxed">
                  Clear guidance, simple tracking, and motivating rewards help new users feel confident and consistent from day one.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Student-friendly</h2>
                <p className="text-slate-600 leading-relaxed">
                  Perfect for college life — short workouts, meaningful progress, and extra motivation when schedules get busy.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Track your wins</h2>
                <p className="text-slate-600 leading-relaxed">
                  Points, badges, and streaks let you celebrate every improvement, making fitness feel like a game you want to keep playing.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-200 p-8 bg-slate-50">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Sticker gallery</h2>
                  <p className="text-sm text-slate-500">A few fun visuals to match the Gator Gains vibe.</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {gifGallery.map((gif) => (
                  <div key={gif.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                    <img src={gif.src} alt={gif.title} className="h-40 w-full object-cover" />
                    <div className="p-4 text-sm font-semibold text-slate-700">{gif.title}</div>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-[2rem] overflow-hidden border border-slate-200 bg-slate-900 shadow-2xl">
                <video
                  src={wallpaperVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-[320px] w-full object-cover sm:h-[360px]"
                />
                <div className="p-6 text-white bg-gradient-to-t from-slate-950/90 to-transparent">
                  <h3 className="text-xl font-semibold">Ambient motivation</h3>
                  <p className="mt-2 text-slate-200">
                    A dynamic background video to keep the About page feeling alive and energetic.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 p-8 bg-slate-50">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Explore the experience</h2>
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-wrap gap-3">
                  {topics.map((topic) => (
                    <button
                      key={topic.id}
                      onClick={() => setActiveTopic(topic.id)}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                        activeTopic === topic.id
                          ? "bg-orange-600 text-white shadow-lg"
                          : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {topic.title}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-slate-500">Tap a topic to learn more about how Gator Gains works.</p>
              </div>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{currentTopic.title}</h3>
                <p className="text-slate-600 leading-relaxed">{currentTopic.content}</p>
              </div>
            </div>

            <div className="border-t border-slate-200 p-8 bg-slate-50">
              <div className="grid gap-6 md:grid-cols-3">
                <button
                  type="button"
                  onClick={() => setActiveStat("mission")}
                  className={`rounded-3xl p-6 shadow-xl transition-all ${
                    activeStat === "mission"
                      ? "bg-gradient-to-br from-orange-500 to-blue-600 text-white border-transparent shadow-2xl"
                      : "bg-white border border-slate-200 text-slate-900 hover:border-orange-300"
                  }`}
                >
                  <p className={`text-sm uppercase tracking-[0.2em] mb-3 ${
                    activeStat === "mission" ? "text-orange-100/90" : "text-slate-400"
                  }`}>
                    Mission
                  </p>
                  <p className="text-lg leading-7">
                    Help everyone discover a fun, repeatable routine that turns gym time into earned progress, not pressure.
                  </p>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStat("vision")}
                  className={`rounded-3xl p-6 shadow-sm transition-all ${
                    activeStat === "vision"
                      ? "bg-gradient-to-br from-orange-500 to-blue-600 text-white border-transparent shadow-2xl"
                      : "bg-white border border-slate-200 text-slate-900 hover:border-orange-300"
                  }`}
                >
                  <p className={`text-sm uppercase tracking-[0.2em] mb-3 ${
                    activeStat === "vision" ? "text-orange-100/90" : "text-slate-400"
                  }`}>
                    Vision
                  </p>
                  <p className="text-lg leading-7">
                    Create a fitness space where small wins add up, confidence grows, and every user feels supported.
                  </p>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStat("promise")}
                  className={`rounded-3xl p-6 shadow-sm transition-all ${
                    activeStat === "promise"
                      ? "bg-gradient-to-br from-orange-500 to-blue-600 text-white border-transparent shadow-2xl"
                      : "bg-white border border-slate-200 text-slate-900 hover:border-orange-300"
                  }`}
                >
                  <p className={`text-sm uppercase tracking-[0.2em] mb-3 ${
                    activeStat === "promise" ? "text-orange-100/90" : "text-slate-400"
                  }`}>
                    Promise
                  </p>
                  <p className="text-lg leading-7">
                    Deliver simple workouts, clear progress, and motivating feedback for users who want to actually keep training.
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}