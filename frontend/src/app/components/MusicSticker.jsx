import { useEffect, useRef, useState } from "react";
import { Settings, Music, ChevronDown } from "lucide-react";

export function MusicSticker() {

  const [x, setX] = useState(1250);
  const [dragging, setDragging] = useState(false);
  const offsetXRef = useRef(0);
  const [moved, setMoved] = useState(false);

  const audioRef = useRef(null);

  const songFiles = import.meta.glob("../../assets/bgm/*.{mp3,wav,ogg}", {
    eager: true,
    import: "default",
  });

  const musicOptions = Object.entries(songFiles).map(([path, src], index) => {
    const fileName = path.split("/").pop().replace(/\.[^/.]+$/, "");
    return {
      id: index,
      title: fileName,
      src,
    };
  });

  const [selectedMusic, setSelectedMusic] = useState(
    musicOptions.length > 0 ? musicOptions[0].src : ""
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current || !selectedMusic) return;
    audioRef.current.load();
  }, [selectedMusic]);


  useEffect(() => {
  const handleMouseMove = (e) => {
    if (!dragging) return;

    setMoved(true);

    const newX = e.clientX - offsetXRef.current;
    const minX = 0;
    const maxX = window.innerWidth - 140;

    setX(Math.max(minX, Math.min(newX, maxX)));
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };
}, [dragging]);


  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div
  className={`fixed top-0 z-50 ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
  style={{ left: `${x}px` }}
>
      <button
  type="button"
  onMouseDown={(e) => {
  setDragging(true);
  setMoved(false);
  offsetXRef.current = e.clientX - x;
}}
onClick={() => {
  if (!moved) {
    setIsOpen((prev) => !prev);
  }
}}
  className="rounded-b-2xl bg-gradient-to-b from-orange-500 to-blue-600 px-4 py-3 text-white shadow-lg flex items-center gap-2"
>
        <Music className="h-4 w-4" />
        <span className="text-sm font-semibold">Music</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`mt-2 w-80 rounded-2xl border border-gray-200 bg-white shadow-2xl overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between border-b px-4 py-3 bg-gradient-to-r from-orange-50 to-blue-50">
  <div className="flex items-center gap-3">
    <div
      className={`relative h-10 w-10 rounded-full border-4 border-gray-800 bg-gradient-to-br from-gray-700 to-black shadow-md ${
        isPlaying ? "animate-spin-slow" : ""
      }`}
    >
      <div className="absolute inset-2 rounded-full bg-gray-300" />
      <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500 border border-white" />
    </div>

    <div>
      <span className="block font-semibold text-gray-800">Music Player</span>
      <span className="block text-xs text-gray-500">
        {isPlaying ? "Inner Peace..." : "Paused"}
      </span>
    </div>
  </div>
</div>

               <div className="p-4 space-y-4">
          <div className="max-h-40 overflow-y-auto space-y-2">
            {musicOptions.map((song) => (
              <button
                key={song.id}
                type="button"
                onClick={() => setSelectedMusic(song.src)}
                className={`w-full rounded-lg border px-3 py-2 text-left transition ${
                  selectedMusic === song.src
                    ? "border-orange-400 bg-orange-100"
                    : "border-gray-200 hover:bg-orange-50"
                }`}
              >
                {song.title}
              </button>
            ))}
          </div>

          <audio ref={audioRef} controls className="w-full">
            <source src={selectedMusic} type="audio/mpeg" />
          </audio>
        </div>
      </div>

      <style>{`
        .animate-spin-slow {
          animation: spin 2.5s linear infinite;
        }
      `}</style>
    </div>
  );
}