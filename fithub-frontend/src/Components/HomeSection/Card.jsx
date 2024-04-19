import React from 'react'
import RepeatIcon from '@mui/icons-material/Repeat';
import { useNavigate } from 'react-router-dom';
import { Avatar,Button,Menu,MenuItem } from '@mui/material';
import verifiedIcon from '../Images/verified icon.png'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';

const Card = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDeleteGymeet=()=>{
        console.log("Delete Gymeet");
        handleClose();
    }
    const handleOpenReplyModel=()=>{
        console.log("Open model");
    }
    const handleCreateReGymeet=()=>{
        console.log("handle create reGymeet");
    }

    const handleLikeGymeet=()=>{
        console.log("handle like gymeet");
    }
    return (
        <div>
            <div className=''>
                {/* <div className='flex items-center font-semibold text-grey-700 py-2'>
            <RepeatIcon/>
            <p>You Regymeet</p>
            </div> */}

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
                                <span style={{ color: '#B2BEB5', marginLeft: '20px' }}>@sithumasitha . 2m</span>
                                <img style={{ marginLeft: '5px', marginTop: '5px', height: '15px', widows: '15px' }} src={verifiedIcon} alt='' />
                            </div>
                            <div style={{ marginLeft:'190px' }}>
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
                            <div className='cursor-pointer'>
                                    <p style={{marginBottom:'2px',padding:'0px'}}>Weight Lifting with 20kg dumbbells </p>
                                    <img style={{width:'28rem',border:'gray',padding:'5px',borderRadius:'10px'}} src="https://www.factoryweights.co.uk/cdn/shop/products/dumbellpicweb2_5b65ad65-f3bd-464a-8374-17669985e218_1200x.png?v=1685555760" alt=''/>
                            </div>
                            <div style={{display:'flex'}}>
                                <div className='space-x-3 flex items-center text-gray-600' style={{marginLeft:'50px'}}>
                                    <ChatBubbleOutlineIcon className='cursor-pointer' onClick={handleOpenReplyModel}/>
                                    <p>43</p>
                                </div>
                                <div className={`${true? "text-pink-600":"text-gray-600"} space-x-3 flex items-center`} style={{marginLeft:'50px'}}>
                                    <RepeatIcon
                                    onclick={handleCreateReGymeet}
                                    className='cursor-pointer'/>
                                    <p>54</p>
                                </div>
                                <div className={`${true? "text-pink-600":"text-gray-600"} space-x-3 flex items-center`} style={{marginLeft:'50px'}}>
                                    {true?<FavoriteIcon
                                    onClick={handleCreateReGymeet}
                                    className='cursor-pointer'/>:<FavoriteBorderIcon
                                    onClick={handleLikeGymeet}
                                    className='cursor-pointer'/>
                                    }
                                </div>
                                <div className='space-x-3 flex items-center text-gray-600' style={{marginLeft:'50px'}}>
                                    <BarChartIcon className='cursor-pointer' onClick={handleOpenReplyModel}/>
                                    <p>430</p>
                                </div>
                                <div className='space-x-3 flex items-center text-gray-600' style={{marginLeft:'50px'}}>
                                    <FileUploadIcon className='cursor-pointer' onClick={handleOpenReplyModel}/>
                                    
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