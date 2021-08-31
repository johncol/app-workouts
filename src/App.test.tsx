import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from './app/store';
import { App } from './App';

it('redirects user from / to /workouts', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/Workouts/i)).toBeInTheDocument();
});
