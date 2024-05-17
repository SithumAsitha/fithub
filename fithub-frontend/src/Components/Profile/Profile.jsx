import React, { useState, useEffect } from "react";
import { Avatar, Button, Box, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Card from '../HomeSection/Card';
import profileCover from '../Images/profile-cover.jpg';
import verifiedIcon from '../Images/verified icon.png';
import axios from 'axios';
import WorkoutPlan from '../WorkoutPlan/WorkoutPlan';
import WorkoutStatus from '../WorkoutStatus/WorkoutStatus';

import DisplayWorkoutPlan from '../WorkoutPlan/DisplayWorkoutPlan';
import MyWorkoutStatus from "../WorkoutStatus/MyWorkoutStatus";
import MyWorkoutPlanList from "../WorkoutPlan/MyWorkoutPlanList";

const Profile = () => {
    const [tabValue, setTabValue] = useState("1");
const [showWorkoutPlan, setShowWorkoutPlan] = useState(false);
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:8081/api/allPosts');
                setPosts(response.data.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    const handleBack = () => navigate(-1);

    const handleOpenProfileModel = () => {
        console.log("open profile model")
    };
const handleAddWorkoutPlan = () => {
        setShowWorkoutPlan(true);
    };
    const handleFollowUser = () => {
        console.log("follow user")
    };

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);

        if (newValue === "4") {
            console.log("like twit")
        } else if (newValue === "1") {
            console.log("user twits")
        }
    };

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
                {/* Profile info */}
            </section>

            <section className='py-5'>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={tabValue}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                                <Tab label="Posts" value="1" />
                                <Tab label="Replies" value="2" />
                                <Tab label="Media" value="3" />

                                <Tab label="Workout Plan" value="5" />
                                <Tab label="My Workout Status" value="6" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            {posts && Array.isArray(posts) && posts.length > 0 ? (
                                posts.map((post) => (
                                    <Card
                                        key={post.postId}
                                        postDescription={post.postDescription}
                                        postImage={post.postImage}
                                        timestamp={post.timestamp}
                                        postId={post.postId}
                                        updatePosts={setPosts}
                                    />
                                ))
                            ) : (
                                <p>No posts found</p>
                            )}
                        </TabPanel>
                        <TabPanel value="2">users replies</TabPanel>
                        <TabPanel value="3">Media</TabPanel>
                        <TabPanel value="4">Likes</TabPanel>

                        <TabPanel value="5">
                            {<MyWorkoutPlanList/>}
                        </TabPanel>
                        <TabPanel value="6">{<MyWorkoutStatus/>}</TabPanel>
                    </TabContext>
                </Box>
            </section>
        </div>
    );
};

export default Profile;





