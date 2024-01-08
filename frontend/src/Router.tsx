//Router.js

import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './components/Home';

const Router = () => {
    return (
        <Routes>
            <Route path="/" Component={Home} />
        </Routes>
    );
};

export default Router;