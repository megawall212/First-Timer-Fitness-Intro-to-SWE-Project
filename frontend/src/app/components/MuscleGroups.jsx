import { ChevronRight, X, Lightbulb, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Exercise details with instructions and tips
const exerciseDetails = {
  "Push-ups": {
    instructions: "Start in a plank position with hands shoulder-width apart. Lower your body until chest nearly touches the floor, then push back up. Keep your core tight and body in a straight line.",
    tips: "Don't let your hips sag. Keep elbows at 45-degree angle to your body for optimal chest and tricep engagement.",
    image: "https://images.unsplash.com/photo-1525565004407-a1f6f55b5dd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXNoJTIwdXAlMjBleGVyY2lzZSUyMGZvcm18ZW58MXx8fHwxNzcyNTY5MzAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  "Diamond Push-ups": {
    instructions: "Place hands together forming a diamond shape with index fingers and thumbs. Perform push-up with hands under your chest.",
    tips: "This variation heavily targets triceps. Go slower if needed to maintain form.",
    image: "https://images.unsplash.com/photo-1525565004407-a1f6f55b5dd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXNoJTIwdXAlMjBleGVyY2lzZSUyMGZvcm18ZW58MXx8fHwxNzcyNTY5MzAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  "Tricep Dips": {
    instructions: "Using a bench or chair, place hands on edge with fingers facing forward. Lower body by bending elbows to 90 degrees, then push back up.",
    tips: "Keep elbows pointing back, not flaring out. The closer your feet, the easier; further away increases difficulty.",
    image: "https://images.unsplash.com/photo-1597460927195-a6c823cc0d0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmljZXAlMjBkaXBzJTIwZXhlcmNpc2V8ZW58MXx8fHwxNzcyNTY5MzA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  "Pull-ups": {
    instructions: "Hang from a pull-up bar with hands shoulder-width apart, palms facing away. Pull yourself up until chin clears the bar, then lower with control.",
    tips: "Engage your lats by thinking about pulling elbows down to your sides. Avoid swinging or kipping.",
    image: "https://images.unsplash.com/photo-1766287453739-c3ffc3f37d05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWxsJTIwdXAlMjBleGVyY2lzZSUyMGd5bXxlbnwxfHx8fDE3NzI1NjYzMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  "Bicep Curls": {
    instructions: "Stand with dumbbells at your sides, palms facing forward. Curl weights up toward shoulders, keeping elbows stationary. Lower with control.",
    tips: "Focus on squeezing at the top of the movement. Don't swing the weights—use controlled motion.",
    image: "https://images.unsplash.com/photo-1759300642292-ffe3cb347548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdW1iYmVsbCUyMGJpY2VwJTIwY3VybHxlbnwxfHx8fDE3NzI0ODg1NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  "Plank": {
    instructions: "Rest on forearms and toes, keeping body in a straight line from head to heels. Hold position while engaging core and glutes.",
    tips: "Don't let hips drop or pike up. Breathe steadily and squeeze everything tight!",
    image: "https://images.unsplash.com/photo-1767611129191-a949e14849a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFuayUyMGNvcmUlMjBleGVyY2lzZXxlbnwxfHx8fDE3NzI1NDgxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  "Squats": {
    instructions: "Stand with feet shoulder-width apart. Lower by bending knees and hips as if sitting back into a chair. Drive through heels to return to standing.",
    tips: "Keep chest up and knees tracking over toes. Go as low as you can while maintaining form.",
    image: "https://images.unsplash.com/photo-1758274532057-78a02ead8f04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcXVhdCUyMGxlZyUyMGV4ZXJjaXNlfGVufDF8fHx8MTc3MjU2OTMwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  // Default fallback
  "default": {
    instructions: "Follow proper form for this exercise. Focus on controlled movements and full range of motion.",
    tips: "Breathe steadily, engage your core, and listen to your body. Quality over quantity!",
    image: "https://images.unsplash.com/photo-1525565004407-a1f6f55b5dd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXNoJTIwdXAlMjBleGVyY2lzZSUyMGZvcm18ZW58MXx8fHwxNzcyNTY5MzAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
};

// Helper function to get exercise details
const getExerciseDetails = (exerciseName) => {
  // Extract the base exercise name (before any parentheses or special characters)
  const baseName = exerciseName.split('(')[0].trim();
  
  // Check for exact or partial matches
  for (const key in exerciseDetails) {
    if (baseName.includes(key) || key.includes(baseName)) {
      return exerciseDetails[key];
    }
  }
  
  return exerciseDetails.default;
};

const muscleGroups = [
  {
    id: "tris-chest",
    name: "Triceps & Chest",
    emoji: "💪",
    color: "from-orange-500 to-orange-600",
    borderColor: "border-orange-200",
    hoverBorder: "hover:border-orange-400",
    levels: [
      {
        level: 1,
        name: "Hatchling",
        exercises: ["Push-ups (3x8)", "Tricep Dips (3x6)", "Wall Push-ups (3x10)"]
      },
      {
        level: 2,
        name: "Young Gator",
        exercises: ["Push-ups (3x12)", "Diamond Push-ups (3x8)", "Bench Dips (3x10)", "Chest Squeeze (3x15)"]
      },
      {
        level: 3,
        name: "Swamp Dweller",
        exercises: ["Push-ups (4x15)", "Diamond Push-ups (3x12)", "Pike Push-ups (3x10)", "Tricep Extensions (3x12)", "Wide Push-ups (3x10)"]
      },
      {
        level: 4,
        name: "Alpha Gator",
        exercises: ["Decline Push-ups (4x12)", "Archer Push-ups (3x8 each)", "Skull Crushers (4x10)", "Dumbbell Chest Press (4x12)", "Close-grip Push-ups (3x15)"]
      },
      {
        level: 5,
        name: "Apex Predator",
        exercises: ["One-arm Push-ups (3x5 each)", "Planche Push-ups (3x6)", "Weighted Dips (4x12)", "Heavy Chest Press (4x8)", "Explosive Push-ups (4x10)", "Tricep Burnout (2x20)"]
      }
    ]
  },
  {
    id: "back-biceps",
    name: "Back & Biceps",
    emoji: "🦾",
    color: "from-blue-500 to-blue-600",
    borderColor: "border-blue-200",
    hoverBorder: "hover:border-blue-400",
    levels: [
      {
        level: 1,
        name: "Hatchling",
        exercises: ["Bent-over Rows (3x8)", "Bicep Curls (3x10)", "Superman Hold (3x20sec)"]
      },
      {
        level: 2,
        name: "Young Gator",
        exercises: ["Pull-ups (3x5)", "Dumbbell Rows (3x10)", "Hammer Curls (3x12)", "Face Pulls (3x15)"]
      },
      {
        level: 3,
        name: "Swamp Dweller",
        exercises: ["Pull-ups (4x8)", "Bent-over Rows (4x12)", "Concentration Curls (3x10)", "Lat Pulldowns (3x12)", "Reverse Flyes (3x15)"]
      },
      {
        level: 4,
        name: "Alpha Gator",
        exercises: ["Weighted Pull-ups (4x8)", "Barbell Rows (4x10)", "Preacher Curls (4x12)", "Deadlifts (3x8)", "Cable Rows (3x15)"]
      },
      {
        level: 5,
        name: "Apex Predator",
        exercises: ["Muscle-ups (3x6)", "Heavy Deadlifts (4x6)", "One-arm Rows (4x8 each)", "21s Curls (3 sets)", "Wide-grip Pull-ups (4x12)", "Back Burnout (2x20)"]
      }
    ]
  },
  {
    id: "abs",
    name: "Abs",
    emoji: "🔥",
    color: "from-orange-500 to-red-600",
    borderColor: "border-red-200",
    hoverBorder: "hover:border-red-400",
    levels: [
      {
        level: 1,
        name: "Hatchling",
        exercises: ["Crunches (3x15)", "Plank (3x30sec)", "Leg Raises (3x8)"]
      },
      {
        level: 2,
        name: "Young Gator",
        exercises: ["Bicycle Crunches (3x20)", "Plank (3x45sec)", "Russian Twists (3x30)", "Mountain Climbers (3x20)"]
      },
      {
        level: 3,
        name: "Swamp Dweller",
        exercises: ["Hanging Knee Raises (3x12)", "Side Planks (3x45sec each)", "V-ups (3x15)", "Ab Wheel Rollouts (3x10)", "Flutter Kicks (3x30)"]
      },
      {
        level: 4,
        name: "Alpha Gator",
        exercises: ["Hanging Leg Raises (4x12)", "Dragon Flags (3x8)", "Weighted Crunches (4x15)", "Plank to Pike (3x12)", "Windshield Wipers (3x10)"]
      },
      {
        level: 5,
        name: "Apex Predator",
        exercises: ["Hanging Leg Raises to Bar (4x10)", "Front Lever Hold (3x15sec)", "Ab Wheel Standing (4x12)", "Weighted Cable Crunches (4x20)", "L-sit Hold (3x30sec)", "Core Burnout (2x40)"]
      }
    ]
  },
  {
    id: "legs",
    name: "Legs",
    emoji: "🦵",
    color: "from-blue-600 to-purple-600",
    borderColor: "border-purple-200",
    hoverBorder: "hover:border-purple-400",
    levels: [
      {
        level: 1,
        name: "Hatchling",
        exercises: ["Bodyweight Squats (3x15)", "Lunges (3x8 each)", "Calf Raises (3x20)"]
      },
      {
        level: 2,
        name: "Young Gator",
        exercises: ["Goblet Squats (3x12)", "Walking Lunges (3x12 each)", "Wall Sit (3x45sec)", "Jump Squats (3x10)"]
      },
      {
        level: 3,
        name: "Swamp Dweller",
        exercises: ["Barbell Squats (4x10)", "Bulgarian Split Squats (3x12 each)", "Romanian Deadlifts (3x12)", "Box Jumps (3x15)", "Leg Extensions (3x15)"]
      },
      {
        level: 4,
        name: "Alpha Gator",
        exercises: ["Heavy Squats (4x8)", "Single-leg Deadlifts (4x10 each)", "Pistol Squats (3x6 each)", "Leg Press (4x12)", "Nordic Curls (3x8)"]
      },
      {
        level: 5,
        name: "Apex Predator",
        exercises: ["Heavy Back Squats (5x5)", "Pistol Squats (4x10 each)", "Heavy Deadlifts (4x6)", "Plyometric Box Jumps (4x12)", "Weighted Bulgarian Splits (4x12)", "Leg Burnout (2x30)"]
      }
    ]
  }
];

export function MuscleGroups() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [startedLevel, setStartedLevel] = useState(null);
  const [completedExercises, setCompletedExercises] = useState(new Set());

  const toggleExercise = (exerciseId) => {
    const newCompleted = new Set(completedExercises);
    if (newCompleted.has(exerciseId)) {
      newCompleted.delete(exerciseId);
    } else {
      newCompleted.add(exerciseId);
    }
    setCompletedExercises(newCompleted);
  };

  return (
    <section id="workouts" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Muscle Group
          </h2>
          <p className="text-xl text-gray-600">
            Select a muscle group and progress through 5 levels of increasing difficulty. Each workout brings you closer to becoming an apex predator.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {muscleGroups.map((group) => (
            <div key={group.id} className="space-y-4">
              <button
                onClick={() => setSelectedGroup(selectedGroup === group.id ? null : group.id)}
                className={`w-full p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border-2 ${group.borderColor} ${group.hoverBorder} text-left`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{group.emoji}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{group.name}</h3>
                      <p className="text-sm text-gray-600">5 Levels Available</p>
                    </div>
                  </div>
                  <ChevronRight 
                    className={`size-6 text-gray-400 transition-transform ${
                      selectedGroup === group.id ? 'rotate-90' : ''
                    }`}
                  />
                </div>
              </button>

              {selectedGroup === group.id && (
                <div className="space-y-3 animate-in slide-in-from-top-2 duration-300">
                  {group.levels.map((level) => {
                    const levelId = `${group.id}-level-${level.level}`;
                    const isStarted = startedLevel === levelId;

                    return (
                      <div
                        key={level.level}
                        className="bg-white p-5 rounded-lg border-2 border-gray-100 hover:border-gray-200 transition-colors"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`px-3 py-1 bg-gradient-to-r ${group.color} text-white rounded-full text-sm font-bold`}>
                            Level {level.level}
                          </div>
                          <span className="font-bold text-gray-900">{level.name}</span>
                        </div>

                        {!isStarted ? (
                          <>
                            <ul className="space-y-2 mb-4">
                              {level.exercises.map((exercise, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-gray-700">
                                  <span className="text-orange-500 mt-1">•</span>
                                  <span>{exercise}</span>
                                </li>
                              ))}
                            </ul>
                            <button 
                              onClick={() => setStartedLevel(levelId)}
                              className={`w-full px-4 py-2 bg-gradient-to-r ${group.color} text-white rounded-lg hover:opacity-90 transition-opacity`}
                            >
                              Start Level {level.level}
                            </button>
                          </>
                        ) : (
                          <div className="space-y-4">
                            <div className="flex items-center justify-between mb-4">
                              <span className="text-sm text-gray-600">Complete each exercise</span>
                              <button
                                onClick={() => setStartedLevel(null)}
                                className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900"
                              >
                                <X className="size-4" />
                                Close
                              </button>
                            </div>

                            {level.exercises.map((exercise, idx) => {
                              const exerciseId = `${levelId}-${idx}`;
                              const details = getExerciseDetails(exercise);
                              const isCompleted = completedExercises.has(exerciseId);

                              return (
                                <div 
                                  key={idx} 
                                  className={`border-2 rounded-lg p-4 transition-all ${
                                    isCompleted ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-white'
                                  }`}
                                >
                                  <div className="flex items-start gap-4">
                                    <button
                                      onClick={() => toggleExercise(exerciseId)}
                                      className="mt-1"
                                    >
                                      <CheckCircle2 
                                        className={`size-6 transition-colors ${
                                          isCompleted ? 'text-green-600 fill-green-600' : 'text-gray-300'
                                        }`}
                                      />
                                    </button>
                                    
                                    <div className="flex-1">
                                      <h4 className="font-bold text-lg text-gray-900 mb-2">{exercise}</h4>
                                      
                                      <div className="mb-3">
                                        <ImageWithFallback
                                          src={details.image}
                                          alt={exercise}
                                          className="w-full h-48 object-cover rounded-lg"
                                        />
                                      </div>

                                      <div className="space-y-3">
                                        <div>
                                          <div className="flex items-center gap-2 mb-1">
                                            <span className="text-sm font-bold text-gray-900">Instructions:</span>
                                          </div>
                                          <p className="text-sm text-gray-700">{details.instructions}</p>
                                        </div>

                                        <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
                                          <div className="flex items-start gap-2">
                                            <Lightbulb className="size-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                            <div>
                                              <span className="text-sm font-bold text-blue-900">Pro Tip: </span>
                                              <span className="text-sm text-blue-800">{details.tips}</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}

                            <button 
                              className={`w-full px-6 py-3 bg-gradient-to-r ${group.color} text-white rounded-lg hover:opacity-90 transition-opacity font-bold`}
                              onClick={() => {
                                setStartedLevel(null);
                                setCompletedExercises(new Set());
                              }}
                            >
                              Finish Workout & Earn Points! 🐊
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
