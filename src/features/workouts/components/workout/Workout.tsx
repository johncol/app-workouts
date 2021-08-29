import React from 'react';
import { RouteComponentProps } from 'react-router';

interface PathParams {
  id: string;
}

const WorkoutComponent = (props: RouteComponentProps<PathParams>) => {
  return (
    <div>
      <h2>Workout Page. ID: {props.match.params.id}</h2>
    </div>
  );
};

export { WorkoutComponent as Workout };
