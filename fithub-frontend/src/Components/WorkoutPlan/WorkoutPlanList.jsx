import BarChartIcon from '@mui/icons-material/BarChart';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Avatar, Button, Card, CardActions, CardContent, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import verifiedIcon from '../Images/verified icon.png';
import { deletePlan, listPlan } from './WorkoutPlanService';

const WorkoutPlanList = () => {
    const navigate = useNavigate();
    const [plan, setPlan] = useState([]);
    const [searchUserId, setSearchUserId] = useState('');

    useEffect(() => {
        getAllPlan();
    }, []);

    function getAllPlan() {
        listPlan()
            .then((response) => {
                console.log("Response data:", response.data); // Log the response data for debugging
                if (Array.isArray(response.data)) {
                    setPlan(response.data);
                } else {
                    console.error("Response data is not an array:", response.data);
                }
            })
            .catch(error => {
                console.error("Error fetching workout plans:", error); // Log the error for debugging
            });
    }

    function handleUpdatePlan(id) {
        navigate(`/updateplan/${id}`);
    }

    function handleDeletePlan(id) {
        const confirmation = window.confirm("Are you sure you want to delete this status entry?");

        if (confirmation) {
            deletePlan(id)
                .then((response) => {
                    console.log("Plan deleted successfully:", response.data); // Log the response for debugging
                    getAllPlan(); // Refresh the list of plans after deletion
                })
                .catch(error => {
                    console.error("Error deleting plan:", error); // Log the error for debugging
                });
        }
    }

    const handleOpenReplyModel = () => {
        console.log("Open model");
    };

    const handleCreateReGymeet = () => {
        console.log("handle create reGymeet");
    };


    // Filter plans based on searchUserId
    const filteredPlan = plan.filter((wplan) =>
        wplan.user_id && wplan.user_id.includes(searchUserId)
    );

    const handleAddWorkoutPlan = () => {
        navigate(`/addplan`);
    };

    return (
        <div>
            <div className='container' style={{ marginTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <TextField
                        label="Search by User ID"
                        variant="outlined"
                        value={searchUserId}
                        onChange={(e) => setSearchUserId(e.target.value)}
                    />
                    <Button
                        onClick={handleAddWorkoutPlan}
                        sx={{ width: "30%", borderRadius: "29px", py: "15px", bgcolor: "#FD2F03", '&:hover': { bgcolor: 'black' } }}
                        variant='contained'
                        style={{ marginLeft: '10px', marginTop: '10px' }}
                    >
                        Add Workout Plan
                    </Button>
                </div>
                {filteredPlan.map(wplan =>
                    <Card key={wplan.id} style={{ marginTop: '20px' }}>
                        <CardContent>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar
                                    onClick={() => navigate(`/profile/${wplan.user_id}`)}
                                    className='cursor-pointer'
                                    alt='username'
                                    src='https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png'
                                />
                                <div style={{ marginLeft: '20px' }}>
                                    <div style={{ display: 'flex' }}>
                                        <span style={{ fontWeight: 'bold' }}>Sithum Asitha</span>
                                        <span style={{ color: '#B2BEB5', marginLeft: '20px' }}>@sithumasitha . 2m</span>
                                        <img style={{ marginLeft: '5px', marginTop: '5px', height: '15px', widows: '15px' }} src={verifiedIcon} alt='' />
                                    </div>
                                </div>
                            </div>
                            <h3>Workout Plan ID: {wplan.id}</h3>
                            <p>User ID: {wplan.user_id}</p>
                            <p>Exercise Name: {wplan.exerName}</p>
                            <p>No of Sets: {wplan.nSets}</p>
                            <p>No of Repetitions: {wplan.nReps}</p>
                        </CardContent>
                        <CardActions>
                            <Button
                                size="small"
                                sx={{
                                    bgcolor: "#FD2F03",
                                    color: 'white', // Set the font color to black
                                    '&:hover': { bgcolor: 'black', color: 'white' } // Change text color on hover
                                }}
                                onClick={() => handleUpdatePlan(wplan.id)}
                            >
                                Edit
                            </Button>

                            <Button size="small" sx={{
                                bgcolor: "#FD2F03",
                                color: 'white', // Set the font color to black
                                '&:hover': { bgcolor: 'black', color: 'white' } // Change text color on hover
                            }} onClick={() => handleDeletePlan(wplan.id)}>Delete</Button>
                        </CardActions>
                        <div style={{ display: 'flex' }}>
                            <div className='space-x-3 flex items-center text-gray-600' style={{ marginLeft: '50px' }}>
                                <ChatBubbleOutlineIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                                <p>43</p>
                            </div>
                            <div className={`${true ? "text-pink-600" : "text-gray-600"} space-x-3 flex items-center`} style={{ marginLeft: '50px' }}>
                                <RepeatIcon
                                    onclick={handleCreateReGymeet}
                                    className='cursor-pointer' />
                                <p>54</p>
                            </div>
                            <div className={`${true ? "text-pink-600" : "text-gray-600"} space-x-3 flex items-center`} style={{ marginLeft: '50px' }}>
                                {true ? <FavoriteIcon
                                    className='cursor-pointer' /> : <FavoriteBorderIcon
                                    className='cursor-pointer' />
                                }
                            </div>
                            <div className='space-x-3 flex items-center text-gray-600' style={{ marginLeft: '50px' }}>
                                <BarChartIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                                <p>430</p>
                            </div>
                            <div className='space-x-3 flex items-center text-gray-600' style={{ marginLeft: '50px' }}>
                                <FileUploadIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                            </div>
                        </div>
                    </Card>
                )}
            </div>
        </div>
    );
}

export default WorkoutPlanList;
