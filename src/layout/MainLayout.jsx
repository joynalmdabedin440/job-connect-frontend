import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/shared/Navbar';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto px-4'>
            <Navbar />
            
            <div className='mt-4'>
                <Outlet />
            </div>
            
        </div>
    );
};

export default MainLayout;