import React, { useState } from 'react';

import { workouts } from '../../data/workouts';
import { WorkoutItem } from './WorkoutItem';
import { WorkoutSummary } from './WorkoutSummary';
import { Workout } from '../../../../types/workout';

import styles from './WorkoutsList.module.css';

const WorkoutsList = () => {
  const [selected, setSelected] = useState<Workout>();
  const updateSelection = (workout: Workout) => {
    setSelected(undefined);
    setTimeout(() => setSelected(workout), 30);
  };

  return (
    <div>
      <h1>Workouts</h1>
      <div className={styles.container}>
        <ul className={styles.list}>
          {workouts.map((workout) => (
            <li key={workout.id} className={styles['list-item']}>
              <WorkoutItem
                workout={workout}
                onSelected={() => updateSelection(workout)}
                selected={workout === selected}
              />
            </li>
          ))}
        </ul>
        <WorkoutSummary workout={selected} />
      </div>
    </div>
  );
};

export { WorkoutsList };
