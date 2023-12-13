import React, { useState } from 'react';
import Sidebar from '../component/AppLayout';

const SidebarMain = ({ openSideBar, sideBarClick, drawer=false }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Sidebar
            subMenuOpen={isOpen}
            onClickHandler={handleClick}
            openSideBar={openSideBar}
            handlerSideBar={sideBarClick}
            drawer={drawer} // Pass the 'drawer' prop received by SidebarMain
        />
    );
};

export default SidebarMain;
