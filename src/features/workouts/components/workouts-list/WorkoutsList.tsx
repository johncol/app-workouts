import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { AppRoutes } from '../../../../routes';
import { Minutes, Workout } from '../../../../types/workout';
import { workoutUtils } from '../../../../utils/workout-utils';
import { workouts } from '../../data/workouts';

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

const WorkOutItem = ({ workout }: { workout: Workout }) => {
  const totalDuration: Minutes = useMemo(() => workoutUtils.durationOf(workout), [workout]);
  return (
    <Link className={styles.item} to={AppRoutes.Builder.Workout(workout.id)}>
      <div className="card b-dark-10 p-6 bg-light r-base sk-card-wide">
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
    </Link>
  );
};

export { WorkoutsList };
