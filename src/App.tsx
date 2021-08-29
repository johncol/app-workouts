import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import { AppRoutes } from './routes';
import { WorkoutsList } from './features/workouts/components/workouts-list';
import { Workout } from './features/workouts/components/workout';

const App = () => {
  return (
    <Router>
      <Switch>
        <Redirect path={AppRoutes.Root} to={AppRoutes.WorkoutsList} exact={true} />
        <Route path={AppRoutes.WorkoutsList} exact={true}>
          <WorkoutsList />
        </Route>
        <Route path={AppRoutes.Workout} exact={true} component={Workout} />
      </Switch>
    </Router>
  );
};

export { App };
