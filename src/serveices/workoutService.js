const API_URL = 'http://localhost:8000';

export const getWorkouts = async () => {
  try {
    const response = await fetch(`${API_URL}/workouts`);
    if (!response.ok) {
      throw new Error('Failed to fetch workouts');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching workouts:', error);
    return null;
  }
};

export const createWorkout = async (workoutData) => {
  try {
    const response = await fetch(`${API_URL}/workouts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(workoutData),
    });
    if (!response.ok) {
      throw new Error('Failed to create workout');
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating workout:', error);
    return null;
  }
};
