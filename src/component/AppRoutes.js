import React, { useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import clsx from 'clsx';
import { useStyles } from '../static/SidebarStyle';
import Layout from '../pages/Layout';
import { sideBarMenu } from '../static/Menus';
import ScheduleEdit from '../pages/scheduleappointment/scheduleedit/ScheduleEdit';
import ScheduleView from '../pages/scheduleappointment/scheduleview/ScheduleView';
import ScheduleAddNewClient from '../pages/scheduleappointment/scheduleaddnew/ScheduleAddNewClient';
import CareManagementHub from '../pages/caremanagement/carehub/CareManagementHub';


export const AppRoutes = (props) => {
    const { content, contentShift } = useStyles();
    const { openSideBar } = props;

    const getLayout = useCallback((children) => {
        return <Layout>{children}</Layout>;
    });

    const items = [];
    const addItem = (menu) => items.push({
        component: menu.component,
        path: menu.path,
        title: menu.menuName
    });

    sideBarMenu.forEach(menu => {
        addItem(menu);
        if (menu.submenu && Array.isArray(menu.submenu))
            menu.submenu.forEach(addItem);
    })

    return (
        <main className={clsx(content, {
            [contentShift]: openSideBar,
        })}>
            <Routes>
                {
                    items.map(item => (
                        <Route path={item.path} element={getLayout(<item.component title={item.title} />)} />
                       
                    ))
                }
                 <Route path="/ScheduleEdit" element={getLayout(<ScheduleEdit />)} />
                 <Route path="/ScheduleView" element={getLayout(<ScheduleView />)} />
                 <Route path="/ScheduleAddNewClient" element={getLayout(<ScheduleAddNewClient />)} />
                 <Route path="/Caremanagementhub" element={getLayout(<CareManagementHub />)} />
            </Routes>
        </main>
    );
}
