import React from 'react';
import { navigationMenu } from './NavigationMenu';
import fithubLogo from '../Images/fithub logo.png';
import { useNavigate } from 'react-router-dom';
import { Button, Avatar, Menu, MenuItem } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Navigation = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        console.log("logout");
        handleClose();
    };

    return (
        <div className='h-screen sticky top-0'>
            <div>
                <div className='py-5'>
                    <img src={fithubLogo} alt="" style={{ width: '100px', height: 'auto', marginLeft: '100px',marginTop:'20px' }} />
                </div>
                <div style={{ paddingLeft: '100px', marginTop: '40px' }}>
                    {navigationMenu.map((item, index) => (
                        <div key={index} className='cursor-pointer flex space-x-3 items-center' onClick={() => item.title === "Profile" ? navigate(`/profile/${5}`) : navigate(item.path)} style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
                            {item.icon}
                            <p className='text-x1' style={{ display: 'inline' }}>{item.title}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <Button
                        sx={{ width: "50%", borderRadius: "29px", py: "15px", bgcolor: "#FD2F03", '&:hover': { bgcolor: 'black' } }}
                        variant='contained'
                        style={{ marginLeft: '100px', marginTop: '30px' }}
                    >
                        Gymeet
                    </Button>
                </div>
            </div>
            <div className='flex items-center justify-between' style={{ marginLeft: '100px', marginTop: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar alt="username" src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png" />
                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '5px' }}>
                        <p style={{ fontWeight: 'bold', marginRight: '5px' }}>Sithum Asitha</p>
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
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
