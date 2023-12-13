

import { makeStyles } from '@mui/styles';


export const drawerWidth = 340;

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
        flexWrap: 'wrap',
    },
    appBar: {
        zIndex: theme?.zIndex?.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
   
   
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        paddingLeft: theme.spacing(2), // Padding on all sides
        paddingTop: theme.spacing(10), // Padding top
        paddingRight: theme.spacing(2), // Padding right
        // display: 'block',
    },
    contentShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    lists: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(1),
        background:'#DD6362 !important',
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    breadCrumbBar: {
        display: 'flex',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    breadCrumbBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    paper: {
        padding: theme.spacing(1, 2),

    },
    header:{
        background:'#FFFFFF !important' ,
        color:'#DD6362 !important',
        fontWeight:'600 !important',
        fontSize:'25px',
        boxShadow:'0px 4px 50px 0px #0000001A !important',
        right:'-65px !important',
        // width: calc(100% - 269px);
    },
    MuiDrawer:{
        background:'#DD6362 !important',
    }
})
);
