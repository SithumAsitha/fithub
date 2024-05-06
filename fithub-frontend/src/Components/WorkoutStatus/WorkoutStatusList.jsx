import BarChartIcon from '@mui/icons-material/BarChart';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Avatar, Button, Menu, MenuItem, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import verifiedIcon from '../Images/verified icon.png';
import { deleteStatus, listStatus } from './WorkoutStatusService';

const WorkoutStatusList = () => {
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

    function getAllStatus(){
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
        navigate(`/edit-status/${statusId}`)
    };

    function handleDeleteStatus(statusId){
        console.log(statusId);

        deleteStatus(statusId).then((response)=>{
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
        wstatus.userId.includes(searchUserId)
    );

    return (
        <div>
            <div className='container'>
                <h2>List of Workout Status</h2>
                <TextField
                    label="Search by User ID"
                    variant="outlined"
                    value={searchUserId}
                    onChange={(e) => setSearchUserId(e.target.value)}
                />
                <div className="card-container">
                    {filteredStatus.map(wstatus =>
                        <div key={wstatus.status_id} className="card">
                            <Avatar
                                onClick={() => navigate(`/profile/${wstatus.userId}`)}
                                className='cursor-pointer'
                                alt='username'
                                src='https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png' />
                            <div>
                                <div style={{ display: 'flex' }}>
                                    <span style={{ fontWeight: 'bold' }}>Sithum Asitha</span>
                                    <span style={{ color: '#B2BEB5', marginLeft: '20px' }}>@sithumasitha . 2m</span>
                                    <img style={{ marginLeft: '5px', marginTop: '5px', height: '15px', widows: '15px' }} src={verifiedIcon} alt='' />
                                </div>
                                <div style={{ display: 'flex', marginTop: '5px' }}>
                                    <Button
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                        style={{ display: 'inline', marginLeft: 'auto' }}
                                    >
                                        <MoreHorizIcon />
                                    </Button>

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
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={() => handleUpdateStatus(wstatus.statusId)}>Edit</MenuItem>
                                <MenuItem onClick={() => handleDeleteStatus(wstatus.statusId)}>Delete</MenuItem>
                            </Menu>
                            <button onClick={() => handleUpdateStatus(wstatus.statusId)}>Edit</button>
                            <button onClick={() => handleDeleteStatus(wstatus.statusId)}>Delete</button>
                            <div style={{ display: 'flex', marginTop: '10px' }}>
                                <ChatBubbleOutlineIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                                <p>43</p>
                                <RepeatIcon className='cursor-pointer' onClick={handleCreateReGymeet} />
                                <p>54</p>
                                {true ? <FavoriteIcon className='cursor-pointer' onClick={handleCreateReGymeet} /> : <FavoriteBorderIcon className='cursor-pointer' onClick={handleLikeGymeet} />}
                                <BarChartIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                                <FileUploadIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default WorkoutStatusList;
