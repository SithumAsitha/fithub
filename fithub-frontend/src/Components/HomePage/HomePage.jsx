import { Grid } from '@mui/material'
import React from 'react'
import Navigation from '../Navigation/Navigation';
import HomeSection from '../HomeSection/HomeSection';
import RightSide from '../RightSide/RightSide';

const HomePage = () => {
  return (
    <Grid container className='px-5 lg:px-36 justify-between'>
      <Grid item xs={12} lg={3} className='hidden lg:block w-full relative'>
        <Navigation/>
      </Grid>
      <Grid item xs={12} lg={6} className='px-5 lg:px-9 hidden lg:block w-full relative'>
        <HomeSection/>
      </Grid>
      <Grid item xs={12} lg={3} className='hidden lg:block w-full relative'>
        <RightSide/>
      </Grid>
    </Grid>
  )
}

export default HomePage;
