import { Workout, WorkoutSection, Minutes } from '../types/workout';

class WorkoutUtils {
  durationOf = (workout: Workout): Minutes => {
    return workout.sections.reduce((totalDuration: Minutes, section: WorkoutSection) => {
      return totalDuration + section.duration;
    }, 0);
  };
}

const instance: WorkoutUtils = new WorkoutUtils();

export { instance as workoutUtils };
