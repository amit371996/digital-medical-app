import React, { useState } from 'react';
import { useStyles } from '../static/SidebarStyle';
import { createTheme } from '@mui/material/styles';
import AppLayout from '../component/AppLayout';

function Layout({ children }) {
    const theme = createTheme();
    const classes = useStyles(theme);

    return (
        <div className={classes.root}>
            <AppLayout Component={children} />
        </div>
    );
}

export default Layout;


