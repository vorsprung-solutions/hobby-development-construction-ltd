import React from 'react';
import TopRightDrawerContent from './TopRightDrawerContent';

const TopRightDrawerComponent = ({ topRoutes, handleLogout }) => {
    return (
        <div className=" flex justify-start items-center">
            <button>
                <TopRightDrawerContent topRoutes={ topRoutes } handleLogout={ handleLogout } />
            </button>
            {/* Adding a dummy image which will be replace by user image */ }
            <img className=" ms-4 w-12 h-12 rounded-full border-2 border-gray-200" src="/ceo.jpg" alt="" />
        </div>
    );
};

export default TopRightDrawerComponent;