import BarChartIcon from '@mui/icons-material/BarChart';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import verifiedIcon from '../Images/verified icon.png';

const Card = ({ postDescription, postImage, timestamp }) => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    // const imagePath = `D:/PAF PROJECT/paf-assignment-2024-ds_22_team/fithub/target/classes/static/postImages/${postImage}`;


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDeleteGymeet = () => {
        console.log("Delete Gymeet");
        handleClose();
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

    return (
        <div>
            <div className=''>
                <div style={{ display: 'flex' }}>
                    <Avatar
                        onClick={() => navigate(`/profile/${6}`)}
                        className='cursor-pointer'
                        alt='username'
                        src='https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png' />
                    <div className='w-full' style={{ marginLeft: '10px' }}>
                        <div style={{ display: 'flex' }}>
                            <div style={{ display: 'flex' }}>
                                <span style={{ fontWeight: 'bold' }}>Sithum Asitha</span>
                                <span style={{ color: '#B2BEB5', marginLeft: '20px' }}>@sithumasitha . {new Date(timestamp).toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })}</span>
                                <img style={{ marginLeft: '5px', marginTop: '5px', height: '15px', widows: '15px' }} src={verifiedIcon} alt='' />
                            </div>
                            <div style={{ marginLeft: '190px' }}>
                                <Button
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    style={{ display: 'inline' }}
                                >
                                    <MoreHorizIcon />
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleDeleteGymeet}>Edit</MenuItem>
                                    <MenuItem onClick={handleDeleteGymeet}>Delete</MenuItem>
                                </Menu>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <div onClick={() => navigate(`/fithub/${3}`)} className='cursor-pointer'>
                                <p style={{ marginBottom: '2px', padding: '0px' }}>{postDescription}</p>
                                <img style={{ width: '100%', border: 'gray', padding: '5px', borderRadius: '10px' }} src={`http://localhost:8081/static/postImages/${postImage}`} alt='' />

                            </div>
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

                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Card;
