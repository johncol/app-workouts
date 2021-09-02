import React from 'react';

import { Exercise, WorkoutSection } from '../../../../types/workout';
import { exerciseUtils } from '../../../../utils/exercise-utils';

import styles from './WorkoutsList.module.css';

interface Props {
  section: WorkoutSection;
}

const ExerciseTable = ({ section }: Props) => {
  if (!section.circuit || section.circuit.length === 0) {
    return null;
  }

  return (
    <table className={`${styles['exercise-table']} mt-2 mb-1 table-bordered animate__animated animate__fadeIn`}>
      <thead>
        <tr>
          <th className="w-50">Excercise</th>
          <th className={`w-25`}>{exerciseUtils.unitHeaderOf(section.circuit[0])}</th>
          <th>Rest</th>
          <th>Illustration</th>
        </tr>
      </thead>
      <tbody>
        {section.circuit.map((exercise: Exercise) => (
          <tr key={exercise.name}>
            <td className="w-50">{exercise.name}</td>
            <td className="w-25">
              {exercise.quantity} {exercise.unit}
            </td>
            <td>{exercise.rest} seconds</td>
            <td>
              <Illustration exercise={exercise} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

interface IllustrationProp {
  exercise: Exercise;
}

const Illustration = ({ exercise }: IllustrationProp) => {
  if (!exercise.image) {
    return <span className="label">No image</span>;
  }

  const imageUrl = `${process.env.PUBLIC_URL}/illustrations/${exercise.image}`;
  return (
    <a href={imageUrl} target="_blank" rel="noopener noreferrer">
      <img
        src={imageUrl}
        alt={`Exercise illustration: ${exercise.image}`}
        className={styles['exercise-illustration']}
      />
    </a>
  );
};

export { ExerciseTable };
