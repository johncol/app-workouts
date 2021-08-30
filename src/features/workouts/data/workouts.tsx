import { Workout } from '../../../types/workout';

const workouts: Workout[] = [
  {
    id: 'the-own-the-day-workout',
    name: 'The Own The Day Workout',
    level: 'Basic/Intermediate',
    description:
      'Derived directly from the philosophy built into Own The Day generally and the training pyramid specifically. This workout is perfect for beginners and people at an intermediate fitness level, and relies solely on body-weight movement, making it easy to do at home, in a dorm, or in an airport hotel room.',
    sections: [
      {
        type: 'cardio',
        duration: 10,
        description:
          'Run, bike, dance, row, swim, jump rope, shadow box—pick any one or any combination and go with it.',
        circuit: [{ name: 'Chosen activity', duration: 600, rest: 30 }],
      },
      {
        type: 'mobility',
        duration: 10,
        description:
          'Circuit of Egyptians, lunge twists and standing leg circles. Do as many as possible in the allotted time.',
        circuit: [
          { name: 'Egyptian', rest: 3, repetitions: 5 },
          { name: 'Lunge Twist', rest: 3, repetitions: 5 },
          { name: 'Standing Leg Circle', rest: 3, repetitions: 5 },
        ],
      },
      {
        type: 'power',
        duration: 3,
        description: 'Alternate split jump fox max height for 10 seconds, then 20 seconds rest. 6 sets.',
        circuit: [{ name: 'Split Jump', rest: 20, duration: 10 }],
      },
      {
        type: 'strength',
        duration: 5,
        description: 'Frog push ups, 5 seconds down, 5 seconds up. 5 sets of 3',
        circuit: [
          {
            name: 'Frog push-ups',
            rest: 5,
            repetitions: 3,
            description: '5 seconds down, 5 seconds up',
          },
        ],
      },
      {
        type: 'muscular endurance',
        duration: 8,
        description: '4 sets of both plank (40 seconds + 20 of rest) and sit-through (40 seconds + 20 of rest)',
        circuit: [
          {
            name: 'Plank',
            duration: 40,
            rest: 20,
          },
          {
            name: 'Sit-Through',
            duration: 40,
            rest: 20,
          },
        ],
      },
      {
        type: 'flexibility',
        duration: 5,
        description: 'Stretch and release, kneeling hip flexor stretch, kneeling hamstring strech and shoulder bridge',
        circuit: [
          {
            name: 'Kneeling Hip Flexor Stretch - Left',
            duration: 50,
            rest: 5,
          },
          {
            name: 'Kneeling Hip Flexor Stretch - Right',
            duration: 50,
            rest: 5,
          },
          {
            name: 'Kneeling hamstring Stretch - Left',
            duration: 50,
            rest: 5,
          },
          {
            name: 'Kneeling hamstring Stretch - Right',
            duration: 50,
            rest: 5,
          },
          {
            name: 'Shouldder Bridge',
            duration: 80,
            rest: 0,
          },
        ],
      },
    ],
  },
  {
    id: 'the-own-the-day-workout---kettlebell',
    name: 'The Own The Day Workout - Kettlebell',
    level: 'Intermediate/Advanced',
    description:
      'This workout is designed for those between the intermediate and advanced fitness levels and uses a single kettlebell (find the right weight for your ability) to make the workout similarly easy to knock out.',
    sections: [
      {
        type: 'cardio',
        duration: 10,
        description:
          'Run, bike, dance, row, swim, jump rope, shadow box—pick any one or any combination and go with it.',
        circuit: [],
      },
      {
        type: 'mobility',
        duration: 10,
        description:
          'The following drills should be performed in a circuit fashion for as many rounds as possible in the allotted time.',
        circuit: [],
      },
      {
        type: 'power',
        duration: 3,
        description: 'Sumo Squat Jumps, 10 seconds, then 20 seconds rest, 6 sets',
        circuit: [],
      },
      {
        type: 'strength',
        duration: 5,
        description: 'Super Slow Presses, 5 seconds up, 5 seconds down, 5 sets of 3 reps',
        circuit: [],
      },
      {
        type: 'muscular endurance',
        duration: 8,
        description: 'Perform the following drills for as many rounds as possible in 8 minutes',
        circuit: [],
      },
      {
        type: 'flexibility',
        duration: 5,
        description: 'Stretch and release, couch strech, pigeon pose, standing forward fold',
        circuit: [],
      },
    ],
  },
  {
    id: 'the-own-the-day-workout---pro',
    name: 'The Own The Day Workout - Pro',
    level: 'Advanced',
    description:
      'To really take your training to the next level, you’ll need additional resources beyond this book. Check out www.OnnitAcademy.com for some ideas on where to get started.',
    sections: [],
  },
];

export { workouts };
