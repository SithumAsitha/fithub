import { Grid } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FithubDetails from '../FithubDetails/FithubDetails';
import HomeSection from '../HomeSection/HomeSection';
import Navigation from '../Navigation/Navigation';
import Profile from '../Profile/Profile';
import RightSide from '../RightSide/RightSide';
import GoogleAuth
 from '../Authentication/GoogleAuth';
import WorkoutStatus from '../WorkoutStatus/WorkoutStatus';
import WorkoutStatusList from '../WorkoutStatus/WorkoutStatusList';
import EditPost from '../HomeSection/EditPost';
import UpdateWorkoutStatus from '../WorkoutStatus/WorkoutStatusUpdate';
import WorkoutPlanList from '../WorkoutPlan/WorkoutPlanList';
import AddWorkoutPlan from '../WorkoutPlan/AddWorkoutPlan';
import MyWorkoutPlanList from '../WorkoutPlan/MyWorkoutPlanList';
import WorkoutPlanUpdate from '../WorkoutPlan/WorkoutPlanUpdate';


const HomePage = () => {
  return (
    <Grid container className='px-5 lg:px-36 justify-between'>
      <Grid item xs={12} lg={3} className='hidden lg:block w-full relative'>
        <Navigation/>
      </Grid>
      <Grid item xs={12} lg={6} className='px-5 lg:px-9 hidden lg:block w-full relative'>

        <Routes>
          <Route path = "/" element={<HomeSection/>}></Route>
          <Route path = "/home" element={<HomeSection/>}></Route>
          <Route path = "/profile/:id" element={<Profile/>}></Route>
          <Route path = "/fithub/:id" element={<FithubDetails/>}></Route>
          <Route path="/google-auth" element={<GoogleAuth />} /> 
          <Route path="/edit-post/:postId" element={<EditPost />} />
          <Route path = "/addstatus" element={<WorkoutStatus/>}></Route>
          <Route path = "/statuslist" element={<WorkoutStatusList/>}></Route>
          <Route path = "/updatestatus/:statusId" element={<UpdateWorkoutStatus/>}></Route>
          <Route path = "/wplanlist" element={<WorkoutPlanList/>}></Route>
          <Route path = "/addplan" element={<AddWorkoutPlan/>}></Route>
          <Route path = "/myplanlist" element={<MyWorkoutPlanList/>}></Route>
          <Route path = "/updateplan/:id" element={<WorkoutPlanUpdate/>}></Route>
        </Routes>
        
      </Grid>
      <Grid item xs={12} lg={3} className='hidden lg:block w-full relative'>
        <RightSide/>
      </Grid>
    </Grid>
  )
}

export default HomePage;
