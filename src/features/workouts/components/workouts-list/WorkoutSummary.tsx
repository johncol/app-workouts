import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { AppRoutes } from '../../../../routes';
import { Workout } from '../../../../types/workout';

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
    <div className={`${styles.summary} card b-dark-10 bg-light r-base flex`}>
      <div className="card-box p-6 pb-10">
        <div className="card-caption mb-2">
          <span className="label label-positive text-large">{workout.name}</span>
          <WorkoutSummaryActions onSelect={() => setSelected(true)} onExpand={() => setExpanded(true)} />
        </div>
        <div className="card-body mt-3">
          {workout.sections.map((section) => (
            <section key={section.type}>
              <h4 className={styles['summary-section-title']}>
                {section.type} <span className="label">{section.duration} min</span>
              </h4>
              <p className={`${styles['summary-section-content']} text-medium`}>{section.description}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

interface ActionsProps {
  onExpand: () => void;
  onSelect: () => void;
}

const WorkoutSummaryActions = (props: ActionsProps) => {
  return (
    <div className={`row row-2 ${styles['summary-actions']}`}>
      <button className="button button-small button-primary" onClick={props.onSelect}>
        Select
      </button>
      <button className="button button-small" onClick={props.onExpand}>
        Expand description
      </button>
    </div>
  );
};

export { WorkoutSummary };
