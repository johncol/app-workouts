import React from 'react';

import { WorkoutSection } from '../../../../types/workout';
import { ExerciseTable } from './ExerciseTable';

import styles from './WorkoutsList.module.css';

interface Props {
  section: WorkoutSection;
  expanded: boolean;
}

const WorkoutSummarySection = ({ section, expanded }: Props) => {
  return (
    <section>
      <h4 className={styles['summary-section-title']}>
        {section.type} <span className="label">{section.duration} min</span>
      </h4>
      <p className={`${styles['summary-section-content']} text-medium`}>{section.description}</p>
      {expanded && <ExerciseTable section={section} />}
    </section>
  );
};

export { WorkoutSummarySection };
