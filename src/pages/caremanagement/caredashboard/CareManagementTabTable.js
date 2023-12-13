import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import {
    Tabs,
    Tab,
    Typography,
    Box,
    TableContainer,
    Paper,
    Button,
    Tooltip,
    Grid,
    Divider,
    Popover,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import { MaterialReactTable } from 'material-react-table';
import { updateCareData } from '../../../component/store/userSlice';
import EmailPopUp from './EmailPopUp';
import TextPopUp from './TextPopUp';
import { useNavigate } from 'react-router-dom';
import { data } from './CareManagementData';

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

export default function CareManagementTabTable() {
    const [emailpopup, setEmailPopUp] = useState(false);
    const [txtpopup, setTextPopUp] = useState(false);
    const [value, setValue] = useState(2);
    const [anchorEl, setAnchorEl] = useState(null);
    const [activeButton, setActiveButton] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(updateCareData(data));
    }, []);

    const careTableData = useSelector((state) => state.appointments.caremanagementData)|| [];
    const searchQuery = useSelector((state) => state.appointments.searchQuery)|| '';
    const validcareTableData = Array.isArray(careTableData) ? careTableData : [];

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleMailButtonClick = () => {
        setEmailPopUp(true);
        setActiveButton('mail');
    };

    const handleTextButtonClick = () => {
        setTextPopUp(true);
        setActiveButton('text');
    };

    const handleEmail = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleEmailClose = () => {
        setAnchorEl(null);
    };

    const emailopen = Boolean(anchorEl);
    const id = emailopen ? 'simple-popover' : undefined;

    const navigateHub = () => {
        navigate('../CareManagementHub');
    };

    const filteredData = useMemo(() => {
        if (!searchQuery) {
            return validcareTableData;
        }

        return validcareTableData.filter(
            (item) =>
                item.Patientname.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.DOB.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [validcareTableData, searchQuery]);
    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }
    const columns = useMemo(
        () => [
            {
                accessorKey: 'Patientname',
                header: 'Patient name',
                size: 5,
                minSize: 10,
                maxSize: 10,
                menu: false,
                enableColumnFilter: false
            },
            {
                accessorKey: 'DOB',
                header: 'DOB',
                size: 10,
                minSize: 10,
                maxSize: 10,
                enableColumnFilter: false
            },
            {
                accessorKey: 'OpenMeasure',
                header: 'Open Measure',
                size: 10,
                minSize: 10,
                maxSize: 10,
                enableColumnFilter: true,
                Cell: ({ row }) => (
                    <Box sx={{ display: 'flex', gap: '1rem', justifyContent: 'center', }}>
                        <select name="cars" id="cars" className='selectintable' sx={{ border: '0', backgroundColor: 'none', outline: 'none' }}>
                            <option value="volvo">02</option>
                            <option value="saab">03</option>
                            <option value="opel">04</option>
                            <option value="audi">05</option>
                        </select>
                    </Box>
                ),
            },
            {
                accessorKey: 'RiskPatient',
                header: 'Risk Patient',
                size: 10,
                minSize: 10,
                maxSize: 10,
                enableColumnFilter: true,
                Cell: ({ row }) => (
                    <Box sx={{ display: 'flex', gap: '1rem', justifyContent: 'center', }}>
                        <div className='ptrisk' style={{ backgroundColor: '#FF0000', height: '16px', width: '16px', borderRadius: '100%' }}>
                        </div>
                    </Box>
                ),
            },
            {
                accessorKey: 'hub',
                header: '',
                size: 10,
                minSize: 10,
                maxSize: 10,
                enableColumnFilter: false,
                Cell: ({ row }) => (
                    <Box sx={{ display: 'flex', gap: '1rem', justifyContent: 'center', }}>
                        <Tooltip arrow placement="left">
                            <Button className="btnhub" onClick={navigateHub}>
                                Hub
                            </Button>
                        </Tooltip>

                    </Box>
                ),
            },
        ],
    );

    return (
        <Box sx={{ width: '100%' }} className='caretablebox'>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className='tabtopbx'>
                <Tabs value={value} onChange={handleChange} TabIndicatorProps={{
                    style: {
                        backgroundColor: "#DD6362",

                    }
                }} aria-label=" tabs">
                    <Tab label="Need to be scheduled" className='tabname_title'  {...a11yProps(0)} />
                    <Tab label="Upcoming appointments" className='tabname_title' {...a11yProps(1)} />
                    <Tab label="All Patients" className='tabname_title' {...a11yProps(2)} />
                    <Box sx={{ width: '80%', justifyContent: 'end', display: 'flex', alignItems: 'center' }}>
                        <Button className='addptnote'>+Add patient note</Button>
                    </Box>
                    <Box sx={{ width: '20%', justifyContent: 'end', display: 'flex', alignItems: 'center' }}>
                        {/* <Button className='caremailbtn' onClick={handleMailButtonClick}><MailOutlinedIcon /></Button> */}
                        <Button className='caremailbtn' onClick={handleEmail}><MailOutlinedIcon /></Button>
                    </Box>

                </Tabs>

            </Box>
            <CustomTabPanel value={value} index={0}>
                <Grid container>
                    <Grid Item xs={12} sm={12} md={12} lg={12} xl={12} spacing={2}>
                        <Box sx={{ width: '100%' }}>
                            <Paper sx={{ width: '100%', mb: 2 }}>
                                <TableContainer>
                                    <div className="tablebox2">
                                        <MaterialReactTable
                                            columns={columns}
                                            data={filteredData}
                                            enableColumnOrdering={false}
                                            enableEditing={false}
                                            enableDensityToggle={false}
                                            enableFullScreenToggle={false}
                                            enableSorting={false}
                                            enableHiding={false}
                                            enableExpandAll={false}
                                            enableRowSelection
                                            enableColumnActions={false}
                                            enableSelectAll={false}
                                            enableGlobalFilter={false}
                                            positionGlobalFilter="left"
                                            displayColumnDefOptions={{
                                                'mrt-row-select': {
                                                    header: ''
                                                }
                                            }}
                                            muiTablePaperProps={{
                                                elevation: 0,
                                                sx: {
                                                    borderRadius: '0',
                                                    border: '1px dashed #e0e0e0',
                                                },
                                            }}
                                            muiSearchTextFieldProps={{
                                                placeholder: 'Search Measure',
                                                sx: { minWidth: '20px', borderRadius: '50px' },
                                                variant: 'outlined',

                                            }}
                                            initialState={{
                                                showGlobalFilter: false, //show the global filter by default


                                            }}

                                            defaultColumn={{
                                                minSize: 20,
                                                maxSize: 9001,
                                                size: 10,
                                            }}
                                            muiTableHeadCellProps={{
                                                sx: {
                                                    flex: '0 0 auto',
                                                },
                                            }}
                                            icons={{
                                                // FilterListIcon: (props) => (<TuneIcon {...props} value={'icon'} />),
                                            }}
                                            muiTablePaginationProps={{
                                                rowsPerPageOptions: false,
                                                showFirstButton: false,
                                                showLastButton: false,
                                                positionPagination: 'top'
                                            }}
                                        />
                                    </div>
                                </TableContainer>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Grid container>
                    <Grid Item xs={12} sm={12} md={12} lg={12} xl={12} spacing={2}>
                        <Box sx={{ width: '100%' }}>
                            <Paper sx={{ width: '100%', mb: 2 }}>
                                <TableContainer>
                                    <div className="tablebox2">
                                        <MaterialReactTable
                                            columns={columns}
                                            data={filteredData}
                                            enableColumnOrdering={false}
                                            enableEditing={false}
                                            enableDensityToggle={false}
                                            enableFullScreenToggle={false}
                                            enableSorting={false}
                                            enableHiding={false}
                                            enableExpandAll={false}
                                            enableRowSelection
                                            enableColumnActions={false}
                                            enableSelectAll={false}
                                            enableGlobalFilter={false}
                                            positionGlobalFilter="left"
                                            displayColumnDefOptions={{
                                                'mrt-row-select': {
                                                    header: ''
                                                }
                                            }}
                                            muiTablePaperProps={{
                                                elevation: 0,
                                                sx: {
                                                    borderRadius: '0',
                                                    border: '1px dashed #e0e0e0',
                                                },
                                            }}

                                            initialState={{
                                                showGlobalFilter: false, //show the global filter by default


                                            }}

                                            defaultColumn={{
                                                minSize: 20,
                                                maxSize: 9001,
                                                size: 10,
                                            }}
                                            muiTableHeadCellProps={{
                                                sx: {
                                                    flex: '0 0 auto',
                                                },
                                            }}
                                            icons={{
                                                // FilterListIcon: (props) => (<TuneIcon {...props} value={'icon'} />),
                                            }}
                                            muiTablePaginationProps={{
                                                rowsPerPageOptions: false,
                                                showFirstButton: false,
                                                showLastButton: false,
                                                positionPagination: 'top'
                                            }}
                                        />

                                    </div>
                                </TableContainer>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Grid container>
                    <Grid Item xs={12} sm={12} md={12} lg={12} xl={12} spacing={2}>
                        <Box sx={{ width: '100%' }}>
                            <Paper sx={{ width: '100%', mb: 2 }}>
                                <TableContainer>
                                    <div className="tablebox2">
                                        <MaterialReactTable
                                            columns={columns}
                                            data={filteredData}
                                            enableColumnOrdering={false}
                                            enableEditing={false}
                                            enableDensityToggle={false}
                                            enableFullScreenToggle={false}
                                            enableSorting={false}
                                            enableHiding={false}
                                            enableExpandAll={false}
                                            enableRowSelection
                                            enableColumnActions={false}
                                            enableSelectAll={false}
                                            enableGlobalFilter={false}
                                            positionGlobalFilter="left"
                                            displayColumnDefOptions={{
                                                'mrt-row-select': {
                                                    header: ''
                                                }
                                            }}
                                            muiTablePaperProps={{
                                                elevation: 0,
                                                sx: {
                                                    borderRadius: '0',
                                                    border: '1px dashed #e0e0e0',
                                                },
                                            }}
                                            muiSearchTextFieldProps={{
                                                placeholder: 'Search Measure',
                                                sx: { minWidth: '20px', borderRadius: '50px' },
                                                variant: 'outlined',

                                            }}
                                            initialState={{
                                                showGlobalFilter: false, //show the global filter by default


                                            }}

                                            defaultColumn={{
                                                minSize: 20,
                                                maxSize: 9001,
                                                size: 10,
                                            }}
                                            muiTableHeadCellProps={{
                                                sx: {
                                                    flex: '0 0 auto',
                                                },
                                            }}
                                            icons={{
                                                // FilterListIcon: (props) => (<TuneIcon {...props} value={'icon'} />),
                                            }}
                                            muiTablePaginationProps={{
                                                rowsPerPageOptions: false,
                                                showFirstButton: false,
                                                showLastButton: false,
                                                positionPagination: 'top'
                                            }}
                                        />

                                    </div>
                                </TableContainer>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </CustomTabPanel>
            <EmailPopUp isOpen={emailpopup} handleClose={() => setEmailPopUp(false)} />
            <TextPopUp isOpen={txtpopup} handleClose={() => setTextPopUp(false)} />
            <Popover
                id={id}
                open={emailopen}
                anchorEl={anchorEl}
                onClose={handleEmailClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Box sx={{ padding: '5px 15px' }}>
                    <Button className={`caremailbtn ${activeButton === 'mail' ? 'active' : ''}`} onClick={handleMailButtonClick}><MailOutlinedIcon sx={{ marginRight: '10px', verticalAlign: 'middle' }} />Email</Button>
                    <Divider />
                    <Button className={`caremailbtn ${activeButton === 'text' ? 'active' : ''}`} onClick={handleTextButtonClick}><MessageOutlinedIcon sx={{ marginRight: '10px', verticalAlign: 'middle' }} />Text</Button>
                </Box>
            </Popover>
        </Box>
    );
}
