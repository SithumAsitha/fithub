import React, { useState, useEffect } from 'react';
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
import { useFormik } from 'formik';

import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';


const Card = ({ post, postDescription, postImage, timestamp, postId, updatePosts }) => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);
    const [posts, setPosts] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [editingPost, setEditingPost] = useState(null);

    const handleClick = (event, post) => {
        setEditingPost(post);
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (action) => {
        if (action === "Edit") {
            setOpenDialog(true);
        } else if (action === "Delete") {
            handleDeleteGymeet();
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
        handleClose(); // Close the menu
    };

    const handleEditPost = async () => {
        try {
            const formData = new FormData();
            formData.append("post_image", selectedImage);
            formData.append("post_data", JSON.stringify({
                postId: postId,
                postDescription: postDescription,
                userId: "GYM12345",
                timestamp: new Date().toISOString()
            }));

            const response = await axios.post(`http://localhost:8081/api/updatePost`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const updatedPost = response.data.data; // Assuming the response contains the updated post
            setPosts(posts.map((p) => (p.postId === editingPost.postId ? updatedPost : p)));
            setOpenDialog(false); // Close the dialog
        } catch (error) {
            console.error('Error editing post:', error);
        }
    };

    const handleSelectImage = (event) => {
        setSelectedImage(event.target.files[0]);
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
                                    <MenuItem onClick={() => handleMenuItemClick("Edit")}>Edit</MenuItem>
                                    <MenuItem onClick={() => handleMenuItemClick("Delete")}>Delete</MenuItem>
                                </Menu>
                                <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                                    <DialogTitle>Edit Post</DialogTitle>
                                    <DialogContent>
                                        <div>
                                            <input type='text' name='content' placeholder='What is happening?'
                                                className={`border-none outline-none text-xl bg-transparent`}
                                                value={postDescription} />
                                        </div>
                                        <div>
                                            <label htmlFor="fileInput">Select Image</label>
                                            <input
                                                id="fileInput"
                                                type='file'
                                                name='imageFile'
                                                onChange={handleSelectImage} />
                                        </div>
                                        <Button
                                            sx={{ width: "25%", borderRadius: "20px", paddingY: "5px", paddingX: "0px", bgcolor: "#FD2F03", '&:hover': { bgcolor: 'black' } }}
                                            variant='contained'

                                            onClick={handleEditPost}>Update</Button>
                                    </DialogContent>
                                </Dialog>
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
