const AppRoutes = {
  Root: '/',
  WorkoutsList: '/workouts',
  Workout: '/workouts/:id',

  Builder: {
    Workout: (id: string) => `/workouts/${id}`,
  },
};

export { AppRoutes };
