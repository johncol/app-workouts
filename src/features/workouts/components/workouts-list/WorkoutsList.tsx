import React from 'react';

import { workouts } from '../../data/workouts';
import { WorkOutItem } from './WorkListItem';

import styles from './WorkoutsList.module.css';

const WorkoutsList = () => {
  return (
    <div>
      <h2>Workouts</h2>
      <ul className={styles.list}>
        {workouts.map((workout) => (
          <WorkOutItem key={workout.id} workout={workout} />
        ))}
      </ul>
    </div>
  );
};

export { WorkoutsList };
