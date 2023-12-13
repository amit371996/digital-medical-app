import React from 'react';
import ChartPrep from '../pages/chartprep/ChartPrep';
import CareManagement from '../pages/caremanagement/caredashboard/CareManagement';
import Home from '../pages/home/Home';
import Setting from '../pages/setting/Setting';
import Homeicon from '../assets/image/icons/Home.png';
import scheduleicon from '../assets/image/icons/schedule.png';
import charticon from '../assets/image/icons/chartprep.png';
import careicon from '../assets/image/icons/caremanagment.png';
import settingicon from '../assets/image/icons/settings.png'
import RemoveIcon from '@mui/icons-material/Remove';
import ChartPrepDashboard from '../pages/chartprep/chartprepdashboard/ChartPrepDashboard';
import ChartPrepSetup from '../pages/chartprep/chartprepsetup/ChartPrepSetup';
import Users from '../pages/setting/users/Users';
import Roles from '../pages/setting/roles/Roles';
import AdminDash from '../pages/setting/admin/AdminDash';
import MeasureSetUp from '../pages/scheduleappointment/MeasureSetUp';




export const sideBarMenu = [
    {
        id:1,
        menuName: 'Home',
        menuDescription: 'Dashboard',
        path: '/',
        component: Home,
        exact: true,
        icon: <img src={Homeicon} alt="Home" />,
        submenu: []
    },
    {
        id:2,
        menuName: 'Measure Setup',
        menuDescription: 'Measure Setup',
        path: '/measuresetup',
        component: MeasureSetUp,
        exact: true,
        icon :<img src={scheduleicon} alt="Home" />,
        submenu: [
           
        ]
    },
    {
        id:3,
        menuName: 'Chart Prep',
        menuDescription: 'Chart Prep',
        path: '/chartPrep',
        component: ChartPrep,
        exact: true,
        icon :<img src={charticon} alt="Home" />,
        submenu: [
            {
                id:11,
                menuName: 'Dashboard',
                menuDescription: 'To Dashboard',
                path: '/chartprepdashboard',
                component: ChartPrepDashboard,
                className:'subitem',
                icon :<RemoveIcon/>,
            },
            {
                id:12,
                menuName: 'Setup ',
                menuDescription: 'To Setup',
                path: '/chartprepsetup',
                component: ChartPrepSetup,
                className:'subitem',
                icon :<RemoveIcon/>, 
            }
            
        ]
    },
    {
        id: 4,
        menuName: 'Care Management',
        menuDescription: 'Care Management menus',
        path: '/careManagement',
        component: CareManagement,
        exact: true,
        icon :<img src={careicon} alt="Home" />,
        submenu: []
    },
    {
        id:9,
        menuName: 'Settings',
        menuDescription: 'Settings',
        path: '/settings',
        component: Setting,
        exact: true,
        icon :<img src={settingicon} alt="Home" />,
        submenu: [
            {
                id:11,
                menuName: 'Admin',
                menuDescription: 'To Admin',
                path: '/admin',
                component: AdminDash,
                className:'subitem',
                icon :<RemoveIcon/>,
            },
            {
                id:12,
                menuName: 'User ',
                menuDescription: 'To User',
                path: '/user',
                component: Users,
                className:'subitem',
                icon :<RemoveIcon/>, 
            },
            {
                id:12,
                menuName: 'Roles ',
                menuDescription: 'To Setup',
                path: '/roles',
                component: Roles,
                className:'subitem',
                icon :<RemoveIcon/>, 
            },
            
            
        ]
    },
];