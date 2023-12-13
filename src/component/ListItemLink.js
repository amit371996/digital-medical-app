import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { useStyles } from '../static/SidebarStyle';
function ListItemLink(props) {
    const { to, open, menuText, icon,isActive, ...other } = props;
    const classes = useStyles();
    return (
        <ListItem button component={RouterLink} to={to} {...other}  className='listsubmenu'>
            <ListItemIcon className='menuicon'>{icon}</ListItemIcon>
            <ListItemText primary={menuText} />
            {/* {open != null ? open ? <ExpandLessIcon  className='navmore'/> : <ExpandMoreIcon className='navmore'/> : null} */}
        </ListItem>
    );
}

ListItem.propTypes = {
    open: PropTypes.bool,
    to: PropTypes.string.isRequired,
    menuText: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default ListItemLink;
