import React, { useMemo } from 'react';

import { Minutes, WorkoutProp } from '../../../../types/workout';
import { workoutUtils } from '../../../../utils/workout-utils';

import styles from './WorkoutsList.module.css';

interface Props extends WorkoutProp {
  onSelected: () => void;
}

const WorkoutItem = ({ workout, onSelected }: Props) => {
  const totalDuration: Minutes = useMemo(() => workoutUtils.durationOf(workout), [workout]);

  return (
    <div
      tabIndex={0}
      className={`${styles.item} card p-6 bg-light r-base sk-card-wide`}
      onClick={onSelected}
      onFocus={onSelected}
    >
      <div className="card-caption mb-2">
        <span className="caption caption-positive">
          {workout.level.toLowerCase()} - {totalDuration} minutes
        </span>
      </div>
      <div className="card-head">
        <h2 className="heading-medium">{workout.name}</h2>
      </div>
      <div className="card-body mt-3">
        <p className="text-medium">{workout.description}</p>
      </div>
    </div>
  );
};

export { WorkoutItem };
