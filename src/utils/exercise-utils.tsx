import { Exercise } from '../types/workout';

class ExerciseUtils {
  unitHeaderOf = (exercise: Exercise) => {
    return exercise.unit === 'seconds' ? 'Duration' : 'Repetitions';
  };
}

const instance: ExerciseUtils = new ExerciseUtils();

export { instance as exerciseUtils };
