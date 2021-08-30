export interface WorkoutProp {
  workout: Workout;
}

export interface Workout {
  id: string;
  name: string;
  level: string;
  description: string;
  sections: WorkoutSection[];
}

export interface WorkoutSection {
  type: 'mobility' | 'flexibility' | 'cardio' | 'muscular endurance' | 'strength' | 'power';
  duration: Minutes;
  description: string;
}

export type Minutes = number;
