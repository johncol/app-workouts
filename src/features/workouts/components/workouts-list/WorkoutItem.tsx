import React, { useMemo } from 'react';

import { Minutes, Workout } from '../../../../types/workout';
import { workoutUtils } from '../../../../utils/workout-utils';

import styles from './WorkoutsList.module.css';

interface Props {
  workout: Workout;
  onSelected: () => void;
  selected: boolean;
}

const WorkoutItem = ({ workout, onSelected, selected }: Props) => {
  const totalDuration: Minutes = useMemo(() => workoutUtils.durationOf(workout), [workout]);

  return (
    <WorkoutItemCard
      selectedClass={selected ? styles['item-selected'] : ''}
      onSelected={onSelected}
      caption={`${workout.level.toLowerCase()} - ${totalDuration} minutes`}
      title={workout.name}
      content={workout.description}
    />
  );
};

interface CardProps {
  selectedClass: string;
  onSelected: () => void;
  caption: string;
  title: string;
  content: string;
}

const WorkoutItemCard = (props: CardProps) => {
  return (
    <div
      tabIndex={0}
      className={`${styles.item} ${props.selectedClass} card p-6 bg-light r-base sk-card-wide`}
      onClick={props.onSelected}
      onFocus={props.onSelected}
      title="WorkoutItemCard"
    >
      <div className="card-caption mb-2">
        <span className="caption caption-positive">{props.caption}</span>
      </div>
      <div className="card-head">
        <h2 className="heading-medium">{props.title}</h2>
      </div>
      <div className="card-body mt-3">
        <p className="text-medium">{props.content}</p>
      </div>
    </div>
  );
};

export { WorkoutItem };
