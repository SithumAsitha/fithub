import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const DisplayWorkoutPlan = ({ workoutPlan }) => {
    return (
        <Card variant="outlined" sx={{ maxWidth: 600, margin: 'auto', marginTop: 5 }}>
            <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                    Workout Plan
                </Typography>
                {workoutPlan.map((exercise, index) => (
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
