import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled } from '@mui/material/styles';
import { useStyles } from '../static/SidebarStyle';
import { sideBarMenu } from '../static/Menus';
import SubMenu from '../container/SubMenu';
import Header from './Header';
import { Button } from '@mui/material';
import logoutimg from '../assets/image/icons/ri_logout-circle-line.png';
import '../static/Style.css';

const drawerWidth = 260;
const drawerWidthtwo = 210;

const openedMixin = theme => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = theme => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(6.5)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidthtwo}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerStyled = styled(MuiDrawer, { shouldForwardProp: prop => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const AppLayout = ({ Component }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [selectedItem, setSelectedItem] = useState(Component.props.title);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} className={classes.header}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 0,
              ...(open && { display: 'none' }),
            }}
          >
            <ChevronRightIcon />
          </IconButton>
          <Header selectedMenuItem={selectedItem} />
        </Toolbar>
      </AppBar>

      <div className="drawebx">
        <DrawerStyled variant="permanent" open={open} className="drawebx">
          <DrawerHeader>
            <IconButton
              onClick={handleDrawerClose}
              sx={{
                marginRight: 5,
                ...(!open && { display: 'none' }),
              }}
            >
              <ChevronLeftIcon />
            </IconButton>
          </DrawerHeader>
          <Divider />
          <nav className={classes.lists}>
            <List className="assssssss">
              {sideBarMenu.map((menu, index) => (
                <React.Fragment key={index}>
                  <SubMenu menuObj={menu} setMenuItem={setSelectedItem} />
                </React.Fragment>
              ))}
            </List>
          </nav>
          <div className="circle">
            <div className="btn">
              {open ? (
                <Button className="side-logoutbtn">Logout</Button>
              ) : (
                <div className="logouticon">
                  <Button className="side-logoutbtn2">
                    {' '}
                    <img src={logoutimg} alt="Description of the image" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </DrawerStyled>
      </div>
      {Component}
    </Box>
  );
};

export default AppLayout;
