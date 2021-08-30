import React from 'react';

import { Exercise, RepetitionsBasedExercise, TimeBasedExercise, WorkoutSection } from '../../../../types/workout';
import { exerciseUtils } from '../../../../utils/exercise-utils';

import styles from './WorkoutsList.module.css';

interface Props {
  section: WorkoutSection;
}

const ExerciseTable = ({ section }: Props) => {
  const secionHasTimeBasedExercises: boolean = exerciseUtils.isTimeBased(section.circuit[0]);

  return (
    <table className={`${styles['exercise-table']} mt-2 mb-1 table-bordered animate__animated animate__fadeIn`}>
      <thead>
        <tr>
          <th className="w-50">Excercise</th>
          <th className="w-25">{secionHasTimeBasedExercises ? 'Duration' : 'Repetitions'}</th>
          <th>Rest</th>
        </tr>
      </thead>
      <tbody>
        {section.circuit.map((exercise: Exercise) => (
          <tr key={exercise.name}>
            <td className="w-50">{exercise.name}</td>
            <td className="w-25">
              {secionHasTimeBasedExercises
                ? `${(exercise as TimeBasedExercise).duration} seconds`
                : `${(exercise as RepetitionsBasedExercise).repetitions} reps`}
            </td>
            <td>{exercise.rest} seconds</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { ExerciseTable };
