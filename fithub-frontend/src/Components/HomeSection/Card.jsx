import React, { useState } from 'react';
import BarChartIcon from '@mui/icons-material/BarChart';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import verifiedIcon from '../Images/verified icon.png';
import ImageIcon from '@mui/icons-material/Image';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { RiDeleteBin6Line } from 'react-icons/ri';
import axios from 'axios';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from '@mui/material';

const Card = ({ post, postDescription, postImage, timestamp, postId, updatePosts }) => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [openDialog, setOpenDialog] = useState(false);
    const [posts, setPosts] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [editingPost, setEditingPost] = useState(null);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    const handleClick = (event, post) => {
        setEditingPost(post);
        setSelectedImage(post?.postImage); // Use optional chaining to access postImage safely
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (action) => {
        if (action === "Delete") {
            setOpenDeleteDialog(true);
        }
        setAnchorEl(null); // Close the menu
    };
    

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDeleteGymeet = async () => {
        try {
            const response = await axios.get(`http://localhost:8081/api/deletePostById/${postId}`);
            if (response.data.status) {
                // Post deleted successfully
                updatePosts((prevPosts) => prevPosts.filter((post) => post.postId !== postId));
            } else {
                // Post deletion failed, handle this case as needed
                console.log("Post deletion failed");
            }
        } catch (error) {
            console.error('Error deleting post:', error);
        }
        // Close the dialog
        setOpenDeleteDialog(false);
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
                                    <MenuItem component={Link} to={`/edit-post/${postId}`}>Edit</MenuItem>
                                    <MenuItem onClick={() => handleMenuItemClick("Delete")}>Delete</MenuItem>
                                </Menu>
                                
                                <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}>
                                    <DialogTitle>Delete Post</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            Are you sure you want to delete this post?
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={() => setOpenDeleteDialog(false)} sx={{ width: "35%", borderRadius: "20px", paddingY: "5px", paddingX: "0px", bgcolor: "#FD2F03", '&:hover': { bgcolor: 'black' } }}
                                            variant='contained'
                                            style={{ marginLeft: '5px' }}>
                                            Cancel
                                        </Button>
                                        <Button onClick={handleDeleteGymeet} sx={{ width: "35%", borderRadius: "20px", paddingY: "5px", paddingX: "0px", bgcolor: "#FD2F03", '&:hover': { bgcolor: 'black' } }}
                                            variant='contained'
                                            style={{ marginLeft: '100px' }}>
                                            Delete
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <div onClick={() => navigate(`/fithub/${3}`)} className='cursor-pointer'>
                                <p style={{ marginBottom: '2px', padding: '0px' }}>{postDescription}</p>
                                {/* Render image or video based on the file extension */}
                                {postImage && (
                                    <>
                                        {postImage.endsWith('.mp4') ? (
                                            <video controls style={{ height: '500px', width: '500px' }}>
                                                <source src={`http://localhost:8081/static/postImages/${postImage}`} type='video/mp4' />
                                                Your browser does not support the video tag.
                                            </video>
                                        ) : (
                                            <img src={`http://localhost:8081/static/postImages/${postImage}`} alt='post-media' style={{ height: '400px', width: '600px' }} />
                                        )}
                                    </>
                                )}



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
