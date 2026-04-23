import { useState, useEffect, useRef} from 'react';
import { MessageSquare, Send, CheckCircle, Bug, Lightbulb, MessageCircle, Star } from 'lucide-react';

import taoGif from "../../assets/feedback_media/tao.gif";
import furinaVideo from "../../assets/feedback_media/furina.mp4";

// email service for user confirmation

import emailjs from "@emailjs/browser";


export default function Feedback() {
  const [feedback, setFeedback] = useState('');
  const [feedbackType, setFeedbackType] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userEmail, setUserEmail] = useState('');  // for user email 
  const [currentMedia, setCurrentMedia] = useState(0);

  // for background music 

  const audioRef = useRef(null);
  const [playbackRate] = useState(1);


  // for background music 

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

  useEffect(() => { 

    // media switch effect

    const interval = setInterval(() => {
      setCurrentMedia(prev => (prev === 0 ? 1 : 0));
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, []);


    useEffect(() => {
  if (audioRef.current) {
    audioRef.current.playbackRate = playbackRate;
  }
}, [playbackRate]);

    //switch songs

   useEffect(() => {
  if (!audioRef.current || !selectedMusic) return;

  const audio = audioRef.current;
  const wasPlaying = !audio.paused;

  audio.load();

  if (wasPlaying) {
    audio.play().catch(() => {});
  }
}, [selectedMusic]);




  const feedbackOptions = [
    { value: 'bug', label: 'Bug Report', icon: Bug, color: 'text-red-600' },
    { value: 'feature', label: 'Feature Request', icon: Lightbulb, color: 'text-blue-600' },
    { value: 'general', label: 'General Feedback', icon: MessageCircle, color: 'text-green-600' },
    { value: 'rating', label: 'App Rating', icon: Star, color: 'text-yellow-600' },
  ];

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const templateParams = {
    type: feedbackType,
    message: feedback,
    user_email: userEmail,
  };

  try {
    await emailjs.send(
      "service_9dk1kop",     // service ID
      "template_ehutzay",    // template ID
      templateParams,
      "gBR8KXFZrNg-zXcLP"      // find it on emailjs dashboard
    );

    setSubmitted(true);
    setFeedback('');
    setFeedbackType('');

    // auto reset the form after 3 seconds

    setTimeout(() => setSubmitted(false), 3000);
  } catch (error) {
  console.error("EmailJS error:", error);
  alert(`Failed to send feedback: ${error?.text || error?.message || "unknown error"}`);
}

  setIsSubmitting(false);
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <MessageSquare className="mx-auto h-12 w-12 text-orange-600 mb-4 animate-pulse" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent mb-2 animate-fade-in">
            Share Your Feedback
          </h1>
          <p className="text-gray-600 animate-slide-up animation-delay-200">Help us improve your fitness experience</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Form Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
            {submitted ? (
              <div className="text-center animate-fade-in">
                <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4 animate-bounce" />
                <h2 className="text-xl font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  Thank You!
                </h2>
                <p className="text-gray-600">Your feedback has been submitted successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="animate-slide-up">
                  <label className="block text-sm font-medium text-gray-700 mb-4 animate-fade-in animation-delay-100">
                    What type of feedback do you have?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {feedbackOptions.map((option) => {
                      const Icon = option.icon;
                      return (
                        <label
                          key={option.value}
                          className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ${
                            feedbackType === option.value
                              ? 'border-orange-500 bg-orange-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="feedbackType"
                            value={option.value}
                            checked={feedbackType === option.value}
                            onChange={(e) => setFeedbackType(e.target.value)}
                            className="sr-only"
                          />
                          <Icon className={`h-5 w-5 mr-3 ${option.color}`} />
                          <span className="text-sm font-medium text-gray-700">{option.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>



                {/* Email input*/}
    <div className="animate-slide-up animation-delay-300">
    <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700 mb-2">
    Your Email
    </label>
    <input
    id="userEmail"
    name="userEmail"
    type="email"
    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
    placeholder="Enter your email"
    value={userEmail}
    onChange={(e) => setUserEmail(e.target.value)}
    required
  />
</div>




                <div className="animate-slide-up animation-delay-300">
                  <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-2 animate-fade-in animation-delay-400">
                    {feedbackType ? `Tell us more about your ${feedbackOptions.find(o => o.value === feedbackType)?.label.toLowerCase()}` : 'Your Thoughts'}
                  </label>
                  <textarea
                    id="feedback"
                    name="feedback"
                    rows="5"
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 resize-none placeholder-gray-400"
                    placeholder={
                      feedbackType === 'bug'
                        ? 'Describe the issue you encountered...'
                        : feedbackType === 'feature'
                        ? 'What feature would you like to see?'
                        : feedbackType === 'rating'
                        ? 'Rate the app and tell us why...'
                        : 'Share your thoughts, suggestions, or any other feedback...'
                    }
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || !feedbackType}
                  className="w-full bg-gradient-to-r from-orange-600 to-blue-600 text-white py-3 px-4 rounded-lg hover:from-orange-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 animate-fade-in animation-delay-500"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Feedback
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Media Section */}
          <div className="space-y-6">
            {/* GIF Section */}
            <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Gatcha Moment</h3>
              <div className="flex justify-center">
                <div className="flex justify-center">
  {currentMedia === 0 ? (
    <img
      src={taoGif}
      alt="Hu Tao"
      className="rounded-lg max-w-full h-auto shadow-md"
    />
  ) : (
    <video
      src={furinaVideo}
      className="rounded-lg max-w-full h-auto shadow-md"
      autoPlay
      loop
      muted
      playsInline
    />
  )}
</div>
              </div>
            </div>

            {/* MP3 Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
  <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
    Background Music
  </h3>

  {/* Song selector */}
  <div className="mb-4 max-h-40 overflow-y-auto space-y-2">
    {musicOptions.map((song) => (
      <button
  key={song.id}
  type="button"
  onClick={() => setSelectedMusic(song.src)}
  className={`w-full text-left px-3 py-2 rounded-lg border cursor-pointer transition ${
    selectedMusic === song.src
      ? "bg-orange-100 border-orange-400"
      : "hover:bg-orange-50 border-gray-200"
  }`}
>
  {song.title}
</button>
    ))}
  </div>

    {/* Audio player */}
  <audio key={selectedMusic} controls className="w-full">
  <source src={selectedMusic} type="audio/mpeg" />
</audio>
</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }
        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-500 { animation-delay: 0.5s; }
      `}</style>
    </div>
  );
}