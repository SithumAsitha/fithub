import { Button, Card, CardContent, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { createWorkoutStatus } from './WorkoutStatusService';

const validationSchema = Yup.object().shape({
    userId: Yup.string().required("User ID is required"),
    description: Yup.string().required("Description is required"),
    distanceRan: Yup.number().required("Distance ran is required"),
    pushupsCompleted: Yup.number().required("Pushups completed is required"),
    weightLifted: Yup.number().required("Weight lifted is required"),
    durationMinutes: Yup.number().required("Duration in minutes is required"),
    caloriesBurned: Yup.number().required("Calories burned is required")
});

const WorkoutStatus = () => {
    const[userId, setUserId] = useState('')
    const[timestamp, setTimestamp] = useState('')
    const[description, setDescription] = useState('')
    const[distanceRan, setDistanceRan] = useState('')
    const[pushupsCompleted, setPushupsCompleted] = useState('')
    const[weightLifted, setWeightLifted] = useState('')
    const[durationMinutes, setDurationMinutes] = useState('')
    const[caloriesBurned, setCaloriesBurned] = useState('')

    const navigator = useNavigate();

    function saveWorkoutStatus(e){
        e.preventDefault();

        const workoutstatus = {userId,description,distanceRan,pushupsCompleted,weightLifted,durationMinutes,caloriesBurned}
        console.log(workoutstatus)

        createWorkoutStatus(workoutstatus).then((response) => {
            console.log(response.data);
            navigator('/statuslist')
        })
    }


    return (
        <Card variant="outlined" sx={{ maxWidth: 600, margin: 'auto', marginTop: 5 }}>
            <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                    <h1 style={{ fontWeight: 'bold', fontSize: '1.45rem', paddingTop: '0.75rem' }}>Add Workout Status</h1>
                </Typography>
                <form  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="User ID"
                        name="userId"
                        value={userId}
                        onChange={(e) => setUserId(parseInt(e.target.value))}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Timestamp"
                        name="timestamp"
                        value={timestamp}
                        onChange={(e) => setTimestamp(e.target.value)}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Distance Ran"
                        name="distanceRan"
                        value={distanceRan}
                        onChange={(e) => setDistanceRan(parseInt(e.target.value))}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Pushups Completed"
                        name="pushupsCompleted"
                        value={pushupsCompleted}
                        onChange={(e) =>setPushupsCompleted(parseInt(e.target.value))}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Weight Lifted"
                        name="weightLifted"
                        value={weightLifted}
                        onChange={(e) =>setWeightLifted(parseInt(e.target.value))}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Duration Minutes"
                        name="durationMinutes"
                        value={durationMinutes}
                        onChange={(e) =>setDurationMinutes(parseInt(e.target.value))}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Calories Burned"
                        name="caloriesBurned"
                        value={caloriesBurned}
                        onChange={(e) => setCaloriesBurned(parseInt(e.target.value))}
                        margin="normal"
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={saveWorkoutStatus}
                        style={{ gridColumn: '1 / -1', marginTop: '10px', backgroundColor: '#FD2F03', color: 'white' }}
                        type="submit"
                    >
                        Submit
                    </Button>
                </form>
            </CardContent>
        </Card>

    );
}

export default WorkoutStatus;
