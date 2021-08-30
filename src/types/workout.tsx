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
  circuit: (RepetitionsBasedExercise | TimeBasedExercise)[];
}

// TODO: improve abstraction
export interface Exercise {
  name: string;
  rest: Seconds;
  description?: string;
}

export interface RepetitionsBasedExercise extends Exercise {
  repetitions: number;
}

export interface TimeBasedExercise extends Exercise {
  duration: Seconds;
}

export type Seconds = number;
export type Minutes = number;
