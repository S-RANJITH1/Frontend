import React, { useEffect, useState } from 'react';
import { getWorkouts } from '../services/workoutService';

const WorkoutList = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const fetchedWorkouts = await getWorkouts();
      if (fetchedWorkouts) {
        setWorkouts(fetchedWorkouts);
      }
    };
    fetchWorkouts();
  }, []);

  return (
    <div>
      <h2>Workouts</h2>
      <ul>
        {workouts.map((workout) => (
          <li key={workout._id}>
            {workout.type} - Duration: {workout.duration} mins
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutList;
