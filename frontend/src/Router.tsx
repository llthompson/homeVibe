//Router.js

import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './components/Home';
import LearnMore from './components/LearnMore';
import Dashboard from './components/Dashboard';
import Features from './components/Features';


const Router = () => {
    return (
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/LearnMore" Component={LearnMore} />
            <Route path="/Dashboard" Component={Dashboard} />
            <Route path="/Features" Component={Features} />
        </Routes>
    );
};

export default Router;