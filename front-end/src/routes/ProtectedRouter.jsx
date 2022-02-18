import React from 'react'
import { Box } from '@mui/material';
import { Outlet, Navigate, useLocation } from 'react-router-dom'

import Footer from '../components/ui/Footer';
import Header from '../components/ui/Header';

const ProtectedRouter = ({ isAuthenticated, roles }) => {
    const location = useLocation();

    return isAuthenticated ?

        <>
            <Header />
            <Box sx={{ flexDirection: 'column', flexWrap: 'wrap', height: '100vh' }} >
                <Outlet />
            </Box>
            <Footer />
        </> : <Navigate to="/" state={{ from: location }} />
}

export default ProtectedRouter
