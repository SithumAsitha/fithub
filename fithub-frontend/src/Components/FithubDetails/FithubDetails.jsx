import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Divider } from '@mui/material';
import React from "react";
import { useNavigate } from 'react-router-dom';
import Card1 from '../HomeSection/Card';

const FithubDetails = () => {
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);
    return(
        <React.Fragment>
            <section style={{ zIndex: 50, display: 'flex', alignItems: 'center', position: 'sticky', top: 0, background: 'rgba(255, 255, 255, 0.95)' }}>
                <KeyboardBackspaceIcon style={{ cursor: 'pointer' }} onClick={handleBack} />
                <h1 style={{ padding: '0.75rem 1rem', fontSize: '1.25rem', fontWeight: 'bold', opacity: 0.9, margin: '0.5rem 1rem' }}>FitHub</h1>
            </section>
            
            <section>
                <Card1/>
                <Divider sx = {{margin:"2rem 0rem"}}/>
            </section>

            <section>
            {[1,1,1,1].map((item)=><Card1/>)}
            </section>
        </React.Fragment>
    )
}

export default FithubDetails;