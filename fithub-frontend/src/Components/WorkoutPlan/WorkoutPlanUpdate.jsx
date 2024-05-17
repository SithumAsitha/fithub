import { Button, Card, CardContent, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { getPlan, updatePlan } from './WorkoutPlanService'; // Assuming you have these service functions

const WorkoutPlanUpdate = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [PlanData, setPlanData] = useState({
        user_id: '',
        exerName: '',
        nSets: '',
        nReps: ''
    });

    useEffect(() => {
        getPlan(id)
            .then(response => {
                setPlanData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);

    const handleChange = e => {
        setPlanData({
            ...PlanData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (!PlanData.id) {
            console.error('User ID is required');
            return;
        }
        updatePlan(id, PlanData)
            .then(response => {
                console.log('Status updated successfully');
                navigate('/wplanlist'); // Redirect to status list after update
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>

            <Card variant="outlined" sx={{ maxWidth: 600, margin: 'auto', marginTop: 5 }}>
                <CardContent>
                    <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            <h1 style={{ fontWeight: 'bold', fontSize: '1.45rem', paddingTop: '0.75rem' }}>Update Workout Plan</h1>
                        </Typography><br/>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="user_id"
                            name="user_id"
                            value={PlanData.user_id}
                            onChange={handleChange}
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="exerName"
                            name="exerName"
                            value={PlanData.exerName}
                            onChange={handleChange}
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="nSets"
                            name="nSets"
                            value={PlanData.nSets}
                            onChange={handleChange}
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="nReps"
                            name="nReps"
                            value={PlanData.nReps}
                            onChange={handleChange}
                            margin="normal"
                        />
                        
                        <Button
                        fullWidth
                        variant="contained"
                        style={{ gridColumn: '1 / -1', marginTop: '10px', backgroundColor: '#FD2F03', color: 'white' }}
                        type="submit"
                    >
                        Update
                    </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default WorkoutPlanUpdate;
