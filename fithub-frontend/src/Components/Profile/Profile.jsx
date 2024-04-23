import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Avatar, Button } from '@mui/material';
import React from "react";
import { useNavigate } from 'react-router-dom';
import profileCover from '../Images/profile-cover.jpg';
import verifiedIcon from '../Images/verified icon.png';


const Profile = () => {
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);
    const handleOpenProfileModel = () => {
        console.log("open profile model")
    }
    const handleFollowUser = () => {
        console.log("follow user")
    }
    return (
        <div>
            <section style={{ zIndex: 50, display: 'flex', alignItems: 'center', position: 'sticky', top: 0, background: 'rgba(255, 255, 255, 0.95)' }}>
                <KeyboardBackspaceIcon style={{ cursor: 'pointer' }} onClick={handleBack} />
                <h1 style={{ padding: '0.75rem 1rem', fontSize: '1.25rem', fontWeight: 'bold', opacity: 0.9, margin: '0.5rem 1rem' }}>Sithum Asitha</h1>
            </section>


            <section style={{ display: 'flex', justifyContent: 'center' }}>
                <img style={{ width: '92%', height: '15rem', objectFit: 'cover' }} src={profileCover} alt="cover img" />
            </section>

            <section style={{ padding: '2.3rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '0.25rem', height: '5rem' }}>

                    <Avatar
                        className='transform'
                        style={{ transform: 'translateY(-6rem)' }}
                        alt="profile pic"
                        src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png"
                        sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
                    />
                    {true ?
                        <Button
                            onClick={handleOpenProfileModel}
                            style={{ borderRadius: "20px" }}
                            variant='contained'>Edit Profile</Button> :
                        <Button
                            onClick={handleFollowUser}
                            style={{ borderRadius: "20px" }}
                            variant='contained'>
                            {true ? "Follow" : "Unfollow"}
                        </Button>
                    }

                </div>

                <div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h1 style={{ fontWeight: 'bold', fontSize: '1.125rem' }}>Sithum Asitha</h1>
                        {true && (
                            <img
                                style={{ marginLeft: '5px', marginTop: '5px', height: '15px', width: '15px' }}
                                src={verifiedIcon}
                                alt=''
                            />
                        )}
                    </div>
                    <h1 style={{ color: '#718096' }}>@sithumasitha</h1>
                </div>
                <div style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                    <p>Hello im sithum</p>
                    <div style={{ paddingTop: '0.25rem', paddingBottom: '0.75rem', display: 'flex', gap: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', color: '#718096' }}>
                            <FitnessCenterIcon />
                            <p style={{ margin: '0.25rem' }}>Fitness</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', color: '#718096' }}>
                            <LocationOnIcon />
                            <p style={{ margin: '0.25rem' }}>Srilankan</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', color: '#718096' }}>
                            <CalendarMonthIcon />
                            <p style={{ margin: '0.25rem' }}>Joined Jun 2023</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#718096' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 'bold' }}>
                                <span>190</span>
                                <span>Following</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 'bold' }}>
                                <span>590</span>
                                <span>Followers</span>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Profile;
