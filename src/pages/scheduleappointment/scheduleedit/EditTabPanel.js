import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch } from 'react-redux';
import { updateCriteriaTableData } from '../../../component/store/userSlice';
import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { Button } from "@mui/material";
import AddClientModel from "../scheduleaddnew/AddClientModel";
function createData(FilterName, Operator, FilterValue, Condition, Lage, Upage) {
    return { FilterName, Operator, FilterValue, Condition, Lage, Upage };
}

const rows = [
    createData('IDC', 'EQUALS', 'E61 , E62 , E63', 'And', 25, 27),
    createData('CPT', 'IN', '1 , 23 , 345', 'OR', 25, 27),
    createData('IDC', 'EQUALS', 'E61 , E62 , E63', 'AND', 25, 27),
    createData('CPT', 'IN', '1 , 23 , 345', 'OR', 25, 27),

];

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function EditTabPanel() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(updateCriteriaTableData(rows));
    }, []);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <Box sx={{ width: '100%' }} >
            <Box>
                <Typography className='Tabtitlebx'>
                    Criteria
                </Typography>
            </Box>
            <Grid container>
                <Grid item sm={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                    <Box>
                        <Button className="viewCancel" onClick={handleOpenModal} >
                            Edit
                        </Button>
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className='tabtopbx'>
                <Tabs value={value} onChange={handleChange} TabIndicatorProps={{
                    style: {
                        backgroundColor: "#DD6362",

                    }
                }} aria-label=" tabs">
                    <Tab label="Eligible" className='tabname_title'  {...a11yProps(0)} />
                    <Tab label="Closed" className='tabname_title' {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table" className='tablebxedit'>
                        <TableHead>
                            <TableRow>
                                <TableCell>FilterName</TableCell>
                                <TableCell align="right">Operator</TableCell>
                                <TableCell align="right">FilterValue</TableCell>
                                <TableCell align="right">Condition</TableCell>
                                <TableCell align="right">Lower Age</TableCell>
                                <TableCell align="right">Upper Age</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.FilterName}
                                    </TableCell>
                                    <TableCell align="right">{row.Operator}</TableCell>
                                    <TableCell align="right">{row.FilterValue}</TableCell>
                                    <TableCell align="right">{row.Condition}</TableCell>
                                    <TableCell align="right">{row.Lage}</TableCell>
                                    <TableCell align="right">{row.Upage}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>
            <AddClientModel isOpen={isModalOpen} handleClose={handleCloseModal} />
        </Box>
    );
}
