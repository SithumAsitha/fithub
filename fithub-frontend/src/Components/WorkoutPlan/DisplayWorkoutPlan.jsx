import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
// import { getPlan } from './api'; 

const DisplayWorkoutPlan = ({ PlanId }) => {
    const [workoutPlan, setWorkoutPlan] = useState(null);

    useEffect(() => {
        fetchWorkoutPlan();
    }, [PlanId]);

    const fetchWorkoutPlan = async () => {
        try {
            const response = {
                data: {
                    id: PlanId,
                    exercises: [
                        { name: 'Push-ups', sets: 3, reps: 10 },
                        { name: 'Squats', sets: 3, reps: 12 },
                        { name: 'Pull-ups', sets: 3, reps: 8 }
                    ]
                }
            };
            setWorkoutPlan(response.data); 
        } catch (error) {
            console.error('Error fetching workout plan:', error);
        }
    };

    const handleEdit = () => {
        console.log('Edit button clicked');
    };

    const handleDelete = () => {
        console.log('Delete button clicked');
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
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <Button variant="contained" color="primary" onClick={handleEdit} style={{ marginRight: '10px' }}>
                        Edit
                    </Button>
                    <Button variant="contained" color="secondary" onClick={handleDelete}>
                        Delete
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default DisplayWorkoutPlan;
