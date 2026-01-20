import { Dumbbell, Flame, Sparkles, Trophy } from "lucide-react";

export const benefits = [
  {
    icon: Dumbbell,
    title: "Premium equipment",
    desc: "Modern machines, free weights, and functional rigs—built for serious training.",
  },
  {
    icon: Flame,
    title: "High-energy classes",
    desc: "HIIT, strength, mobility, and conditioning—structured sessions that keep you consistent.",
  },
  {
    icon: Trophy,
    title: "Elite coaching",
    desc: "Specialists who track progress, correct form, and push you beyond plateaus.",
  },
  {
    icon: Sparkles,
    title: "Recovery & wellness",
    desc: "Stretch zones, cooldown guidance, and lifestyle support so you can train harder tomorrow.",
  },
];

export const trainers = [
  { name: "Ayaan",
    role: "Strength & Conditioning",
    focus: ["Power", "Hypertrophy"],
    score: { strength: 92, mobility: 60, conditioning: 80 },
  },
  { name: "Mahad",
    role: "Athletic Performance",
    focus: ["Speed", "Agility"],
    score: { strength: 74, mobility: 66, conditioning: 92 },
  },
  { name: "Hodan",
    role: "Mobility & Core",
    focus: ["Mobility", "Posture"],
    score: { strength: 58, mobility: 95, conditioning: 72 },
  },
  { name: "Khalid",
    role: "Transformation Coach",
    focus: ["Fat Loss", "Habits"],
    score: { strength: 70, mobility: 70, conditioning: 86 },
  },
];

export const schedule = [
  { day: "Mon", time: "6:30 AM", name: "HIIT Burn", type: "HIIT", intensity: "High" },
  { day: "Mon", time: "7:30 PM", name: "Strength Lab", type: "Strength", intensity: "Medium" },
  { day: "Tue", time: "6:30 AM", name: "Power Circuit", type: "Strength", intensity: "High" },
  { day: "Wed", time: "7:00 PM", name: "Mobility Flow", type: "Mobility", intensity: "Low" },
  { day: "Thu", time: "6:30 AM", name: "Conditioning", type: "Cardio", intensity: "High" },
  { day: "Fri", time: "7:30 PM", name: "Core & Sculpt", type: "Mobility", intensity: "Medium" },
  { day: "Sat", time: "10:00 AM", name: "Community Workout", type: "HIIT", intensity: "Medium" },
];
