import { Button, Card, CardContent, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

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
    const handleSubmit = (values) => {
        console.log("values", values);
    }

    const formik = useFormik({
        initialValues: {
            userId: "",
            description: "",
            distanceRan: 0,
            pushupsCompleted: 0,
            weightLifted: 0,
            durationMinutes: 0,
            caloriesBurned: 0
        },
        onSubmit: handleSubmit,
        validationSchema,
    });

    return (
        <Card variant="outlined" sx={{ maxWidth: 600 }}>
            <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                    Workout Status
                </Typography>
                <form onSubmit={formik.handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="User ID"
                        name="userId"
                        value={formik.values.userId}
                        onChange={formik.handleChange}
                        error={formik.touched.userId && Boolean(formik.errors.userId)}
                        helperText={formik.touched.userId && formik.errors.userId}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Description"
                        name="description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        error={formik.touched.description && Boolean(formik.errors.description)}
                        helperText={formik.touched.description && formik.errors.description}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Distance Ran"
                        name="distanceRan"
                        value={formik.values.distanceRan}
                        onChange={formik.handleChange}
                        error={formik.touched.distanceRan && Boolean(formik.errors.distanceRan)}
                        helperText={formik.touched.distanceRan && formik.errors.distanceRan}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Pushups Completed"
                        name="pushupsCompleted"
                        value={formik.values.pushupsCompleted}
                        onChange={formik.handleChange}
                        error={formik.touched.pushupsCompleted && Boolean(formik.errors.pushupsCompleted)}
                        helperText={formik.touched.pushupsCompleted && formik.errors.pushupsCompleted}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Weight Lifted"
                        name="weightLifted"
                        value={formik.values.weightLifted}
                        onChange={formik.handleChange}
                        error={formik.touched.weightLifted && Boolean(formik.errors.weightLifted)}
                        helperText={formik.touched.weightLifted && formik.errors.weightLifted}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Duration Minutes"
                        name="durationMinutes"
                        value={formik.values.durationMinutes}
                        onChange={formik.handleChange}
                        error={formik.touched.durationMinutes && Boolean(formik.errors.durationMinutes)}
                        helperText={formik.touched.durationMinutes && formik.errors.durationMinutes}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Calories Burned"
                        name="caloriesBurned"
                        value={formik.values.caloriesBurned}
                        onChange={formik.handleChange}
                        error={formik.touched.caloriesBurned && Boolean(formik.errors.caloriesBurned)}
                        helperText={formik.touched.caloriesBurned && formik.errors.caloriesBurned}
                        margin="normal"
                    />
                    {/* Repeat similar TextField components for other fields */}
                    <Button
                        fullWidth
                        variant="contained"
                        style={{ gridColumn: '1 / -1', marginTop: '10px', backgroundColor: '#FD2F03', color: 'white' }}
                        type="submit"
                    >
                        Gymeet
                    </Button>
                </form>
            </CardContent>
        </Card>

    );
}

export default WorkoutStatus;
