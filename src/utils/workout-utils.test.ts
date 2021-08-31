import { Exercise } from '../types/workout';
import { exerciseUtils } from './exercise-utils';

it('should return the "Duration" header name for a table of time based exercises', () => {
  const jumps: Exercise = {
    name: 'Jumps',
    quantity: 600,
    rest: 30,
    unit: 'seconds',
  };

  const header: string = exerciseUtils.unitHeaderOf(jumps);

  expect(header).toBe('Duration');
});

it('should return the "Repetitions" header name for a table of repetitions based exercises', () => {
  const pushUps: Exercise = {
    name: 'Push-ups',
    quantity: 10,
    rest: 30,
    unit: 'repetitions',
  };

  const header: string = exerciseUtils.unitHeaderOf(pushUps);

  expect(header).toBe('Repetitions');
});
