//Router.js

import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './components/Home';
import LearnMore from './components/LearnMore';
import Dashboard from './components/Dashboard';
import Features from './components/Features';
import { AuthenticationGuard } from './components/Authentication-Guard';
import { Auth0ProviderWithNavigate } from './Auth0NavProvider';


const Router = () => {

    return (
        <Auth0ProviderWithNavigate>

            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/LearnMore" Component={LearnMore} />
                <Route path="/Dashboard" element={<AuthenticationGuard component={Dashboard} />} />
                <Route path="/Features" Component={Features} />
            </Routes>

        </Auth0ProviderWithNavigate>
    );
};

export default Router;