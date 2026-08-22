export type LifePillar = 'LEARN' | 'BUILD' | 'MOVE' | 'CONNECT' | 'EXPLORE' | 'REST';

export type TaskCategory = 'Academic' | 'Personal' | 'College/Club' | 'Project' | 'Exam';

export type PriorityLevel = 'Critical' | 'High' | 'Medium' | 'Low';

export type TaskStatus = 'todo' | 'in_progress' | 'completed';

export interface Subtask {
  id: string;
  title: string;
  completed: boolean;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  category: TaskCategory;
  pillar: LifePillar; // LEARN, BUILD, MOVE, CONNECT, EXPLORE, REST
  priority: PriorityLevel;
  deadline: string; // YYYY-MM-DD
  estimatedMinutes: number;
  completed: boolean;
  progress: number; // 0 to 100
  priorityScore: number; // 0 to 100
  tags: string[];
  subtasks?: Subtask[];
  createdAt: string;
  source?: 'manual' | 'brain_dump' | 'ai_schedule';
  completedAt?: string;
}

export type BlockType = 'class' | 'assignment' | 'study' | 'break' | 'personal' | 'social' | 'fitness' | 'hobby';

export interface ScheduleBlock {
  id: string;
  title: string;
  type: BlockType;
  pillar: LifePillar;
  startTime: string; // "HH:MM"
  endTime: string;   // "HH:MM"
  date: string;      // YYYY-MM-DD
  taskId?: string;
  location?: string;
  completed?: boolean;
  isAiGenerated?: boolean;
  notes?: string;
}

export interface FocusSession {
  id: string;
  taskId?: string;
  taskTitle: string;
  category?: TaskCategory;
  pillar: LifePillar;
  durationMinutes: number;
  completedAt: string;
  soundscape?: string;
}

// Themes
export type AppTheme = 'light' | 'dark' | 'funky';

// 3-Layer Student Setup
export type AppTone = 'professional' | 'friendly' | 'unhinged';

export interface UserProfile {
  // Layer 1: Essential
  name: string;
  ageOrYear: string;
  branch: string;
  careerGoal: string;
  typicalSchedule: string;
  majorCommitments: string;
  
  // Layer 2: Lifestyle ("Things I want more of")
  lifestyleDesires: string[]; // ['fitness', 'hobbies', 'socializing', 'travel', 'learning', 'entertainment', 'rest', 'career']

  // Layer 3: Preferences ("What kind of suggestions do you like?")
  suggestionPreferences: string[]; // ['calm', 'active', 'social', 'productive', 'creative', 'spontaneous']

  // Layer 4: Tone
  tone: AppTone; // 'professional' | 'friendly' | 'unhinged'

  geminiApiKey: string;
  preferredFocusDuration: number;
  dailyStudyGoalMinutes: number;
  isOnboarded: boolean;
}

export interface DailyCheckIn {
  id: string;
  date: string; // YYYY-MM-DD
  academics: string[]; // e.g. ['Studied', 'Worked on a project', 'Completed important tasks']
  body: string[];      // e.g. ['Gym / workout', 'Walk / outdoor activity', 'Slept well']
  life: string[];      // e.g. ['Spent time with friends', 'Worked on a hobby', 'Did something just for fun']
  mood: number;        // 1 (😞) to 5 (🤩)
  energy: 'low' | 'medium' | 'high';
  notes?: string;
}

export interface FreeTimeSuggestion {
  id: string;
  optionNumber: number;
  pillar: LifePillar;
  type: 'Reset' | 'Recharge' | 'Connect' | 'Build' | 'Explore' | 'Rest';
  icon: string;
  title: string;
  why: string;
  suggestedAction: string;
  estimatedMinutes: number;
}

export interface BalanceDiagnosis {
  overallScore: number; // 0 to 100
  status: 'Balanced' | 'Academic Heavy' | 'Burnout Risk' | 'Need Movement' | 'Social Deficit';
  headline: string;
  detailedAnalysis: string;
  recommendation: string;
  pillarHours: Record<LifePillar, number>;
  pillarPercentages: Record<LifePillar, number>;
}

export interface BrainDumpParsedItem {
  id: string;
  title: string;
  category: TaskCategory;
  pillar: LifePillar;
  priority: PriorityLevel;
  deadline: string;
  deadlineDisplay: string;
  estimatedMinutes: number;
  selected: boolean;
  reasoning?: string;
}

export interface AIRecommendation {
  id: string;
  type: 'urgent_risk' | 'balance_alert' | 'free_time_opportunity' | 'streak_boost';
  title: string;
  message: string;
  actionText: string;
  taskId?: string;
  urgency: 'critical' | 'high' | 'info';
  actionType: 'start_focus' | 'open_free_time' | 'open_check_in' | 'open_brain_dump';
}
