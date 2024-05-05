import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { getPlan } from './api'; // Import your API functions

const DisplayWorkoutPlan = ({ PlanId }) => {
    const [workoutPlan, setWorkoutPlan] = useState(null);

    useEffect(() => {
        // Fetch workout plan when the component mounts
        fetchWorkoutPlan();
    }, [PlanId]);

    const fetchWorkoutPlan = async () => {
        try {
            const response = await getPlan(PlanId); // Call the API function to get workout plan
            setWorkoutPlan(response.data); // Update state with the fetched workout plan
        } catch (error) {
            console.error('Error fetching workout plan:', error);
        }
    };

    if (!workoutPlan) {
        return <Typography variant="body1">Loading...</Typography>;
    }

    return (
        <Card variant="outlined" sx={{ maxWidth: 600, margin: 'auto', marginTop: 5 }}>
            <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                    Workout Plan
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Plan ID: {workoutPlan.id}
                </Typography>
                {workoutPlan.exercises.map((exercise, index) => (
                    <div key={index}>
                        <Typography variant="h6" gutterBottom>
                            Exercise {index + 1}:
                        </Typography>
                        <Typography>
                            Name: {exercise.name}
                        </Typography>
                        <Typography>
                            Sets: {exercise.sets}
                        </Typography>
                        <Typography>
                            Reps: {exercise.reps}
                        </Typography>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default DisplayWorkoutPlan;
