import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Button } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const RightSide = () => {
    const handleChangeTheme = () => {
        console.log("handle change theme");
    };

    return (
        <div style={{ padding: '1.25rem 0', position: 'sticky', top: 0 }}>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <input type='text' style={{ padding: '0.75rem', borderRadius: '9999px', color: '#718096', width: '100%', paddingLeft: '3rem' }} />
                <div style={{ position: 'absolute', top: 0, left: 0, paddingLeft: '1rem', paddingTop: '0.75rem' }}>
                    <SearchIcon style={{ color: '#718096' }} />
                </div>
                <Brightness4Icon style={{ marginLeft: '0.75rem', cursor: 'pointer' }} onClick={handleChangeTheme} />
            </div>
            <section style={{ marginTop: '1.25rem' }}>
                <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Get Verified</h1>
                <h1 style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>Subscribe to unlock new features</h1>
                <Button variant='contained' sx={{ padding: '0.625rem 1.25rem', borderRadius: '1.25rem', bgcolor: "#FD2F03", '&:hover': { bgcolor: 'black' } }}>Get Verified</Button>
            </section>
            <section style={{ marginTop: '1.75rem', marginBottom: '0', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <h1 style={{ fontWeight: 'bold', fontSize: '1.25rem', paddingTop: '0.75rem' }}>What's happening </h1>
                <div>
                    <p style={{ fontSize: '0.875rem' }}>Kevin's Workout . LIVE</p>
                    <p style={{ fontWeight: 'bold' }}>Kevin vs David</p>
                </div>
                {[1, 1, 1].map((item) => <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <div>
                        <p>Entertainment . Trending</p>
                        <p style={{ fontWeight: 'bold' }}>#TheLegends</p>
                        <p>34.3k Gymeets</p>
                    </div>
                    <MoreHorizIcon />
                </div>)}
            </section>
        </div>
    );
};

export default RightSide;
