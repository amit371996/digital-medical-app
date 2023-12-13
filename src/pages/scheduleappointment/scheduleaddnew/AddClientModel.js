import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { Button, Grid } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { makeStyles } from '@mui/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { useNavigate } from "react-router-dom";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height: '600px',
    bgcolor: 'background.paper',
    boxShadow: 24,
    overflow: 'scroll !important',
    p: 4,
};
const usePlaceholderStyles = makeStyles(theme => ({
    placeholder: {
        color: "#aaa"
    }
}));

const Placeholder = ({ children }) => {
    const classes = usePlaceholderStyles();
    return <div className={classes.placeholder}>{children}</div>;
};
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

const AddClientModal = ({ isOpen, handleClose, }) => {
    const [value, setValue] = React.useState(0);
    const [filterName, setFilterName] = React.useState("");
    const [operator, setOperator] = React.useState("");
    const [valueName, setvalueName] = React.useState("");
    const handleChange = (event, newValue) => {
        setValue(newValue);

    };
    const addTableData = useSelector((state) => state.appointments.criteriaTableData) || [];
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('../ScheduleDashboard');
    }
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={isOpen}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={isOpen}>
                    <Box sx={style}>

                        <Box sx={{ width: '100%' }} >

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
                            <Grid container className='adddropbx'>
                                <Grid item sm={2} sx={{ justifyContent: 'flex-start', alignItems: 'center', display: 'flex', margin: '30px 0' }}>
                                    <Box>
                                        <FormControl>
                                            <FormLabel id="demo-row-radio-buttons-group-label">Condition :</FormLabel>

                                        </FormControl>
                                    </Box>
                                </Grid>
                                <Grid item sm={10} sx={{ margin: '30px 0' }}>
                                    <Box>
                                        <FormControl>

                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group"
                                            >
                                                <FormControlLabel value="and" sx={{ marginRight: '30px' }} control={<Radio />} label="And" />
                                                <FormControlLabel value="or" control={<Radio />} label="OR" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Box>
                                </Grid>
                                <Grid item sm={3}>
                                    <Box sx={{ minWidth: 120 }}>
                                        <InputLabel>FilterName</InputLabel>
                                        <Select
                                            sx={{
                                                marginTop: 1,
                                                width: 200,
                                                height: 50,
                                                '& .MuiSelect-select': {
                                                    paddingTop: 0,
                                                    paddingBottom: 0,
                                                },
                                            }}
                                            value={filterName}
                                            displayEmpty
                                            onChange={event => setFilterName(event.target.value)}
                                            renderValue={
                                                filterName !== "" ? undefined : () => <Placeholder>Select Name</Placeholder>
                                            }
                                        >
                                            {addTableData.map((data, index) => (
                                                <MenuItem className='dropitembx' value={index} key={index}>
                                                    {data.FilterName}
                                                </MenuItem>
                                            ))}
                                            {/* <MenuItem className='dropitembx' value={1}>Red</MenuItem>
                                            <MenuItem className='dropitembx' value={2}>Black</MenuItem>
                                            <MenuItem className='dropitembx' value={3}>Blue</MenuItem>
                                            <MenuItem className='dropitembx' value={4}>Green</MenuItem>
                                            <MenuItem className='dropitembx' value={5}>Yellow</MenuItem> */}
                                        </Select>
                                    </Box>
                                </Grid>
                                <Grid item sm={3}>
                                    <Box sx={{ minWidth: 120 }}>
                                        <InputLabel>Operator</InputLabel>
                                        <Select
                                            sx={{
                                                marginTop: 1,
                                                width: 200,
                                                height: 50,
                                            }}
                                            value={operator}
                                            displayEmpty
                                            onChange={event => setOperator(event.target.value)}
                                            renderValue={
                                                operator !== "" ? undefined : () => <Placeholder>Select Operator</Placeholder>
                                            }
                                        >
                                             {addTableData.map((data, index) => (
                                                <MenuItem className='dropitembx' value={index} key={index}>
                                                    {data.Operator}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </Box>
                                </Grid>
                                <Grid item sm={3}>
                                    <Box sx={{ minWidth: 120 }}>
                                        <InputLabel>Values</InputLabel>
                                        <Select
                                            sx={{
                                                marginTop: 1,
                                                width: 200,
                                                height: 50,
                                            }}
                                            value={valueName}
                                            displayEmpty
                                            onChange={event => setvalueName(event.target.value)}
                                            renderValue={
                                                valueName !== "" ? undefined : () => <Placeholder>Select Values</Placeholder>
                                            }
                                        >
                                            {addTableData.map((data, index) => (
                                                <MenuItem className='dropitembx' value={index} key={index}>
                                                    {data.FilterValue}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </Box>
                                </Grid>
                                <Grid item sm={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Box>
                                        <div className='addbtnbx'>
                                            <Button className='addbtnmodl'>+ Add</Button>
                                        </div>
                                    </Box>
                                </Grid>

                            </Grid>

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
                                            {addTableData.map((row) => (
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
                            <Grid container>
                                <Grid item xs={12} sm={12} lg={12} className="view_cancelbx ">
                                    <Button className="viewCancel" onClick={handleBack}>
                                        Cancel
                                    </Button>
                                    <Button className="viewCancel addsave" onClick={handleBack} >
                                        Save
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div >
    )
}
export default AddClientModal;
