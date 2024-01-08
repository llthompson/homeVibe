//frontend/src/components/Home.tsx

import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/system';
import { Typography } from '@mui/material';
// import './Home.css';
// import LoginButton from './login-button';


function Home() {
    const theme = useTheme();
    const [features, setFeatures] = useState([])

    useEffect(() => {
        async function getCenter() {
            try {
                let response = await fetch(`http://localhost:8000`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const responseJson = await response.json();
                setFeatures(responseJson);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        getCenter();
    }, []);

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 128,
                    height: 128,
                },
            }}
        >
            <Typography variant="h6" style={{ flexGrow: '1' }}>
                am i in a box homeVibe
            </Typography>

            {/* <div className="Home">
                    <h1>head</h1>
                    <h3>middle</h3>
                    <p>para</p>
                    <p>
                        <ul>
                            {features.map((item: any) => <li key={item.id}>{item.feature}</li>)}
                        </ul>
                    </p>
                </div> */}
        </Box>
    );
}

export default Home;
