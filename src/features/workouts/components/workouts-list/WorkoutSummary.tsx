import React from 'react';
import { Workout } from '../../../../types/workout';

import styles from './WorkoutsList.module.css';

interface Props {
  workout: Workout | undefined;
}

const WorkoutSummary = ({ workout }: Props) => {
  if (!workout) {
    return <div className={`${styles.summary} ${styles.invisible} card b-dark-10 bg-light r-base flex`}></div>;
  }

  return (
    <div className={`${styles.summary} card b-dark-10 bg-light r-base flex`}>
      <div className="card-box p-6 pb-10">
        <div className="card-caption mb-2">
          <span className="label label-positive text-large">{workout.name}</span>
        </div>
        <div className="card-body mt-3">
          {workout.sections.map((section) => (
            <section>
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

export { WorkoutSummary };
