import { Button, Card, CardContent, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { createWorkoutPlan } from './WorkoutPlanService';

const validationSchema = Yup.object().shape({
    user_id: Yup.string().required("User ID is required"),
    exerName: Yup.string().required("exerName is required"),
    nSets: Yup.number().required("nSets is required"),
    nReps: Yup.number().required("nReps is required")
    
});

const AddWorkoutPlan = () => {
    const [user_id, setUserId] = useState('');
    const [exerName, setexerName] = useState('');
    const [nSets, setnSets] = useState('');
    const [nReps, setnReps] = useState('');

    const [errors, setErrors] = useState({});

    const navigator = useNavigate();    
    
    
    function saveWorkoutPlan(e){
        e.preventDefault();

        validationSchema.validate({
            user_id,
            exerName,
            nSets,
            nReps
        }, { abortEarly: false })
        .then(() => {
            const WorkoutPlan = {user_id, exerName, nSets, nReps};
            console.log(WorkoutPlan);

            createWorkoutPlan(WorkoutPlan).then((response) => {
                    console.log(response.data);
                    navigator('/wplanlist');
                }).catch(error =>{
                    console.error(error);
                })
            }
            
        )
        .catch((validationErrors) => {
            const errorsObj = {};
            validationErrors.inner.forEach(error => {
                errorsObj[error.path] = error.message;
            });
            setErrors(errorsObj);
        });
    }

    return (
        <Card variant="outlined" sx={{ maxWidth: 600, margin: 'auto', marginTop: 5 }}>
            <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                    <h1 style={{ fontWeight: 'bold', fontSize: '1.45rem', paddingTop: '0.75rem' }}>Add Workout Plan</h1>
                </Typography>
                <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="User ID"
                        name="userId"
                        value={user_id}
                        onChange={(e) => setUserId(e.target.value)}
                        margin="normal"
                        error={!!errors.user_id}
                        helperText={errors.user_id}
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="exerName"
                        name="exerName"
                        value={exerName}
                        onChange={(e) => setexerName(e.target.value)}
                        margin="normal"
                        error={!!errors.exerName}
                        helperText={errors.exerName}
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="nSets"
                        name="nSets"
                        value={nSets}
                        onChange={(e) => setnSets(e.target.value)}
                        margin="normal"
                        error={!!errors.nSets}
                        helperText={errors.nSets}
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="nReps"
                        name="nReps"
                        value={nReps}
                        onChange={(e) => setnReps(e.target.value)}
                        margin="normal"
                        error={!!errors.nReps}
                        helperText={errors.nReps}
                    />
                    
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={saveWorkoutPlan}
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

export default AddWorkoutPlan;
