import { RepetitionsBasedExercise, TimeBasedExercise } from '../types/workout';

class ExerciseUtils {
  isTimeBased = (exercise: TimeBasedExercise | RepetitionsBasedExercise): boolean => {
    return Object.keys(exercise).includes('duration');
  };
}

const instance: ExerciseUtils = new ExerciseUtils();

export { instance as exerciseUtils };
