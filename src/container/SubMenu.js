import React, { useState } from 'react';
import ListItemLink from '../component/ListItemLink';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import { makeStyles } from '@mui/styles';
import { margin } from '@mui/system';
// import { useStyles } from '../static/SidebarStyle';

const useStyles = makeStyles((theme) => ({
    nestedtes: {
        paddingLeft: theme.spacing(4),
    },
    menulist: {
        padding: '0px 15px !important',
        margin: '0px 0px 15px 0px !important',
        color: '#fff !important',
        fontSize: '16px !important'
    },
}));

const SubMenu = ({ menuObj, setMenuItem }) => {

    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (menuText) => {
        setIsOpen(!isOpen);
        setMenuItem(menuText);
    };

    return (
        <>
            {menuObj.submenu.length > 0 ? (
                <ListItemLink
                    key={menuObj.id}
                    to={menuObj.path}
                    menuText={menuObj.menuName}
                    icon={menuObj.icon}
                    open={isOpen}
                    onClick={() => { handleClick(menuObj.menuName) }}
                    className={classes.menulist}
                />
            ) : (
                <ListItemLink
                    key={menuObj.id}
                    to={menuObj.path}
                    menuText={menuObj.menuName}
                    icon={menuObj.icon}
                    onClick={() => { handleClick(menuObj.menuName) }}
                    className={classes.menulist}
                />
            )}

            <Collapse component="li" in={isOpen} timeout="auto" unmountOnExit>
                <List disablePadding>
                    {menuObj.submenu.map((sub, index) => (
                        <ListItemLink
                            key={sub.id}
                            to={sub.path}
                            menuText={sub.menuName}
                            icon={sub.icon}
                            // className={classes.nestedtes}
                            className='assbbbsrrddd'
                        />
                    ))}
                </List>
            </Collapse>
        </>
    );
};

export default SubMenu;
