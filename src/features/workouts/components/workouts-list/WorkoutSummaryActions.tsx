import React from 'react';

import styles from './WorkoutsList.module.css';

interface Props {
  expandedDescription: boolean;
  onToggle: () => void;
  onSelect: () => void;
}

const WorkoutSummaryActions = ({ onToggle, onSelect, expandedDescription }: Props) => {
  return (
    <div className={`row row-2 ${styles['summary-actions']}`}>
      <button className="button button-small button-primary" onClick={onSelect}>
        Select
      </button>
      <button className="button button-small" onClick={onToggle}>
        {expandedDescription ? 'Hide' : 'Show'} complete description
      </button>
    </div>
  );
};

export { WorkoutSummaryActions };
