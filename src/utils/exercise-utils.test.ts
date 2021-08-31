import { Minutes, Workout, WorkoutSection } from '../types/workout';
import { workoutUtils } from './workout-utils';

it('should calculate the duration of the workout as the sum of the durations of all its sections', () => {
  const workout: Partial<Workout> = {
    sections: [
      { duration: 10 } as WorkoutSection,
      { duration: 20 } as WorkoutSection,
      { duration: 30 } as WorkoutSection,
    ],
  };

  const duration: Minutes = workoutUtils.durationOf(workout as Workout);

  expect(duration).toBe(60);
});
