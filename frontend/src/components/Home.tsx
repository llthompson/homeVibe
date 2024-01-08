import React, { useEffect, useState } from 'react';
// import './Home.css';
// import LoginButton from './login-button';


function Home() {

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


        <div className="Home">
            <header className="Home-header">
                <div>
                    {/* <LoginButton></LoginButton> */}
                </div>
                <p>
                    <ul>
                        {features.map((item: any) => <li key={item.id}>{item.feature}</li>)}
                    </ul>
                </p>

            </header>


        </div>
    );
}

export default Home;
