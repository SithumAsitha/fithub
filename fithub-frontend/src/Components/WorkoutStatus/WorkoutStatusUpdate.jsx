import { Button, Card, CardContent, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { getStatus, updateStatus } from './WorkoutStatusService'; // Assuming you have these service functions

const UpdateWorkoutStatus = () => {
    const { statusId } = useParams();
    const navigate = useNavigate();
    const [statusData, setStatusData] = useState({
        userId: '',
        timestamp: '',
        description: '',
        distanceRan: '',
        pushupsCompleted: '',
        weightLifted: '',
        durationMinutes: '',
        caloriesBurned: ''
        // Other status fields
    });

    useEffect(() => {
        // Fetch status data based on statusId
        getStatus(statusId)
            .then(response => {
                setStatusData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [statusId]);

    const handleChange = e => {
        setStatusData({
            ...statusData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (!statusData.userId) {
            console.error('User ID is required');
            return;
        }
        updateStatus(statusId, statusData)
            .then(response => {
                console.log('Status updated successfully');
                navigate('/statuslist'); // Redirect to status list after update
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
                            <h1 style={{ fontWeight: 'bold', fontSize: '1.45rem', paddingTop: '0.75rem' }}>Update Workout Status</h1>
                        </Typography><br/>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="userid"
                            name="userid"
                            value={statusData.userId}
                            onChange={handleChange}
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Timestamp"
                            name="timestamp"
                            value={statusData.timestamp}
                            onChange={handleChange}
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Description"
                            name="description"
                            value={statusData.description}
                            onChange={handleChange}
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Distance Ran"
                            name="distanceRan"
                            value={statusData.distanceRan}
                            onChange={handleChange}
                            margin="normal"
                            inputProps={{ type: 'number' }}
                        />
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Pushups Completed"
                            name="pushupsCompleted"
                            value={statusData.pushupsCompleted}
                            onChange={handleChange}
                            margin="normal"
                            inputProps={{ type: 'number' }}
                        />
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Weight Lifted"
                            name="weightLifted"
                            value={statusData.weightLifted}
                            onChange={handleChange}
                            margin="normal"
                            inputProps={{ type: 'number' }}
                        />
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Duration Minutes"
                            name="durationMinutes"
                            value={statusData.durationMinutes}
                            onChange={handleChange}
                            margin="normal"
                            inputProps={{ type: 'number' }}
                        />
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Calories Burned"
                            name="caloriesBurned"
                            value={statusData.caloriesBurned}
                            onChange={handleChange}
                            margin="normal"
                            inputProps={{ type: 'number' }}
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

export default UpdateWorkoutStatus;
