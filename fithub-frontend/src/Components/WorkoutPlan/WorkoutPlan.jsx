import React, { useState } from 'react';
import { Button, TextField, Typography, Card, CardContent } from '@mui/material';

const WorkoutPlan = () => {
    const [exercises, setExercises] = useState([{ name: '', sets: '', reps: '' }]);
    
    const addExercise = () => {
        setExercises([...exercises, { name: '', sets: '', reps: '' }]);
    };

    const handleExerciseChange = (index, e) => {
        const { name, value } = e.target;
        const newExercises = [...exercises];
        newExercises[index][name] = value;
        setExercises(newExercises);
    };

    const removeExercise = (index) => {
        const newExercises = [...exercises];
        newExercises.splice(index, 1);
        setExercises(newExercises);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(exercises);
    };

    return (
        <Card variant="outlined" sx={{ maxWidth: 600, margin: 'auto', marginTop: 5 }}>
            <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                    Workout Plan
                </Typography>
                <form onSubmit={handleSubmit}>
                    {exercises.map((exercise, index) => (
                        <div key={index} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Exercise Name"
                                name="name"
                                value={exercise.name}
                                onChange={(e) => handleExerciseChange(index, e)}
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Sets"
                                name="sets"
                                value={exercise.sets}
                                onChange={(e) => handleExerciseChange(index, e)}
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Reps"
                                name="reps"
                                value={exercise.reps}
                                onChange={(e) => handleExerciseChange(index, e)}
                                margin="normal"
                            />
                            <Button variant="outlined" onClick={() => removeExercise(index)}>Remove</Button>
                        </div>
                    ))}
                    <br />
                    <Button variant="contained" onClick={addExercise}>Add Exercise</Button>
                    <br />
                    <Button type="submit" variant="contained" style={{ marginTop: '10px', backgroundColor: '#FD2F03', color: 'white' }}>Submit</Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default WorkoutPlan;
