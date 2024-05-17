import BarChartIcon from '@mui/icons-material/BarChart';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Avatar, Button, Card, CardActions, CardContent } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import verifiedIcon from '../Images/verified icon.png';
import { deleteStatus, listStatus } from './WorkoutStatusService';

const MyWorkoutStatus = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const [status, setStatus] = useState([]);
    const [searchUserId, setSearchUserId] = useState('');
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        getAllStatus();
    }, []);

    function getAllStatus() {
        listStatus()
            .then((response) => {
                // Ensure that the response data is an array before setting the state
                if (Array.isArray(response.data)) {
                    setStatus(response.data);
                } else {
                    console.error("Response data is not an array:", response.data);
                }
            })
            .catch(error => {
                console.error(error);
            });
    }

    function handleUpdateStatus(statusId) {
        navigate(`/updatestatus/${statusId}`)
    };

    function handleDeleteStatus(statusId) {
        deleteStatus(statusId).then((response) => {
            getAllStatus();
        }).catch(error => {
            console.error(error);
        })
    };

    const handleOpenReplyModel = () => {
        console.log("Open model");
    };

    const handleCreateReGymeet = () => {
        console.log("handle create reGymeet");
    };

    const handleLikeGymeet = () => {
        console.log("handle like gymeet");
    };

    // Filter status based on searchUserId
    const filteredStatus = status.filter((wstatus) =>
        wstatus.userId === '12345' // Change '3' to the user ID you want to filter by
    );

    const handleAddWorkoutStatus = () => {
        navigate(`/addstatus`)
    };

    return (
        <div>
            <div className='container' style={{ marginTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Button
                        onClick={handleAddWorkoutStatus}
                        sx={{ width: "30%", borderRadius: "29px", py: "15px", bgcolor: "#FD2F03", '&:hover': { bgcolor: 'black' } }}
                        variant='contained'
                        style={{ marginLeft: '10px', marginTop: '10px' }}
                    >
                        Add Workout Status
                    </Button>
                </div>
                {filteredStatus.map(wstatus =>
                    <Card key={wstatus.status_id} style={{ marginTop: '20px' }}>
                        <CardContent>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar
                                    onClick={() => navigate(`/profile/${wstatus.userId}`)}
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
                            <h3>Workout Status ID: {wstatus.statusId}</h3>
                            <p>User ID: {wstatus.userId}</p>
                            <p>Timestamp: {wstatus.timestamp}</p>
                            <p>Distance Ran: {wstatus.distanceRan}</p>
                            <p>Pushups Completed: {wstatus.pushupsCompleted}</p>
                            <p>Weight Lifted: {wstatus.weightLifted}</p>
                            <p>Duration Minutes: {wstatus.durationMinutes}</p>
                            <p>Calories Burned: {wstatus.caloriesBurned}</p>
                        </CardContent>
                        <CardActions>
                            <Button
                                size="small"
                                sx={{
                                    fontSize: "0.6rem",
                                    borderRadius: "20px",
                                    bgcolor: "#FD2F03",
                                    color: 'white',
                                    '&:hover': { bgcolor: 'black', color: 'white' }
                                }}
                                onClick={() => handleUpdateStatus(wstatus.statusId)}
                            >
                                Edit
                            </Button>
                            <Button
                                size="small"
                                sx={{
                                    fontSize: "0.6rem",
                                    borderRadius: "20px",
                                    bgcolor: "#FD2F03",
                                    color: 'white',
                                    '&:hover': { bgcolor: 'black', color: 'white' }
                                }}
                                onClick={() => handleDeleteStatus(wstatus.statusId)}
                            >
                                Delete
                            </Button>
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
                                    onClick={handleCreateReGymeet}
                                    className='cursor-pointer' /> : <FavoriteBorderIcon
                                    onClick={handleLikeGymeet}
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
    )
}

export default MyWorkoutStatus;
