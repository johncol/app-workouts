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
  circuit: Exercise[];
}

export interface Exercise {
  name: string;
  rest: Seconds;
  description?: string;
  quantity: Seconds | Repetitions;
  unit: 'seconds' | 'repetitions';
}

export type Repetitions = number;
export type Seconds = number;
export type Minutes = number;
