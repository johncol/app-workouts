import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { WorkoutsList } from './WorkoutsList';
import { workouts } from '../../data/workouts';

it('renders the expected title: Workouts', () => {
  render(<WorkoutsList />);

  expect(screen.getByText(/Workouts/i)).toBeInTheDocument();
});

it('renders a workout item per workout in the data response', () => {
  render(<WorkoutsList />);

  const cards = screen.queryAllByTitle('WorkoutItemCard');

  expect(cards.length).toBe(workouts.length);
  workouts.forEach((workout) => {
    expect(screen.getByText(workout.name)).toBeInTheDocument();
  });
});

it('renders the workout summary when a workout item is clicked', async () => {
  render(<WorkoutsList />);

  expect(screen.queryByTitle('WorkoutSummary')).not.toBeInTheDocument();

  const [firstWorkout] = workouts;
  const workoutTitle = screen.getByText(firstWorkout.name);
  fireEvent.click(workoutTitle);

  const summary = await screen.findByTitle('WorkoutSummary');

  const [summaryTitle] = within(summary).getAllByRole('heading');
  expect(summaryTitle).toBeInTheDocument();
  expect(summaryTitle.textContent).toBe(firstWorkout.name);
});
