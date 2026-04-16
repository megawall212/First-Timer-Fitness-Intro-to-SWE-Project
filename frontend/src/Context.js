import { createContext } from "react";

export const LoggedInContext = createContext({
    loggedIn: false,
    userInfo: {
        id: "",
        name: "",
        email: "",
        points: 0,
        badges: [],
        workoutsCompleted: 0,
        currentStreak: 0,
        lastWorkoutDate: "",
        completedExercises: [],
    },
    refreshUserInfo: () => {},
});