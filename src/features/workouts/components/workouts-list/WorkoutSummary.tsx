import React, { useState } from 'react';
import { Redirect } from 'react-router';

import { AppRoutes } from '../../../../routes';
import { Workout } from '../../../../types/workout';
import { WorkoutSummarySection } from './WorkoutSummarySection';
import { WorkoutSummaryActions } from './WorkoutSummaryActions';

import styles from './WorkoutsList.module.css';

interface Props {
  workout: Workout | undefined;
}

const WorkoutSummary = ({ workout }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(false);

  if (!workout) {
    return <div className={`${styles.summary} ${styles.invisible}`} />;
  }

  if (selected) {
    return <Redirect to={AppRoutes.Builder.Workout(workout.id)} />;
  }

  return (
    <div
      title="WorkoutSummary"
      className={`${styles.summary} card b-dark-10 bg-light r-base flex animate__animated animate__fadeIn`}
    >
      <div className="card-box p-6 pb-10">
        <div className="card-caption mb-2">
          <h3 className="label label-positive text-large">{workout.name}</h3>
          <WorkoutSummaryActions
            expandedDescription={expanded}
            onSelect={() => setSelected(true)}
            onToggle={() => setExpanded((expanded) => !expanded)}
          />
        </div>
        <div className="card-body mt-3">
          {workout.sections.map((section) => (
            <WorkoutSummarySection section={section} expanded={expanded} key={section.type} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { WorkoutSummary };
