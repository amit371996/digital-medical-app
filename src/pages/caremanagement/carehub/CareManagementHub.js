import React from 'react'
import {
    Grid,
    Typography,
    Box,
    TextField,
    Divider,
    Button,
    Card,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import '../index.css';
import Popover from '@mui/material/Popover';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import Stack from '@mui/material/Stack';
import EmailPopUp from '../caredashboard/EmailPopUp';
import TextPopUp from '../caredashboard/TextPopUp';
import { useState } from 'react';
import EngagementHistory from './EngagementHistory';
export default function CareManagementHub() {
    const [emailPopup, setEmailPopup] = useState(false);
    const [textPopup, setTextPopup] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [activeButton, setActiveButton] = React.useState(false);
    const handleMailButtonClick = () => {
        setEmailPopup(true);
        setActiveButton('mail');

    };
    const handleTextButtonClick = () => {
        setTextPopup(true);
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
    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item sm={12} xl={12} md={3} xs={12}>
                    <Card className='hubleftbx'>
                        <Box>
                            <Typography className='hubtext2'>
                                Josh Clark
                            </Typography>
                            <Typography className='hubtext'>
                                Josh.Clark@example.com
                            </Typography>
                        </Box>
                        <Stack
                            direction="row"
                            divider={<Divider orientation="vertical" flexItem />}
                            spacing={2}
                            sx={{ justifyContent: 'center', margin: '20px 0' }}
                        >
                            <Box>
                                <Typography className='hubtext2'>15</Typography>
                                <Typography className='hubtext'>Post</Typography>
                            </Box>
                            <Box>
                                <Typography className='hubtext3'>2</Typography>
                                <Typography className='hubtext'>Upcoming</Typography>
                            </Box>
                        </Stack>
                        <Box>
                            <Button className='hubbtnsendmessege' onClick={handleEmail}>Send Message</Button>
                        </Box>
                    </Card>
                </Grid>
                <Grid item sm={12} xl={9} md={9} xs={12} className='gridrighrbx'>
                    <Card sx={{ display: 'flex' }} className='hubleftbx'>
                        <Grid container spacing={2}>
                            <Grid item sm={2} className='gridbx'>
                                <TextField
                                    id="standard-read-only-input"
                                    label="Gender"
                                    defaultValue="Male"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item sm={2} className='gridbx'>
                                <TextField
                                    id="standard-read-only-input"
                                    label="DOB"
                                    defaultValue="05/06/1998"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item sm={2} className='gridbx'>
                                <TextField
                                    id="standard-read-only-input"
                                    label="Phone Number"
                                    defaultValue="00 00 00 00 00"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item sm={2} className='gridbx'>
                                <TextField
                                    id="standard-read-only-input"
                                    label="Street Address"
                                    defaultValue="JI. ABCD"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item sm={2} className='gridbx'>
                                <TextField
                                    id="standard-read-only-input"
                                    label="City"
                                    defaultValue="ABCD"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item sm={2} className='gridbx'>
                                <TextField
                                    id="standard-read-only-input"
                                    label="Zip Code"
                                    defaultValue="000000"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item sm={2} className='gridbx'>
                                <TextField
                                    id="standard-read-only-input"
                                    label="Members Status"
                                    defaultValue="Active Member"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item sm={2} className='gridbx'>
                                <TextField
                                    id="standard-read-only-input"
                                    label="Registered Date"
                                    defaultValue="Feb 14th, 2022"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    variant="standard"
                                />
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item sm={6} md={6} xs={12} className='tablegridbx'>
                    <Card className='hubtablebx'>
                        <Typography className='hubhcc'>
                            HCC  Opportunities
                        </Typography>
                        <TableContainer>
                            <Table sx={{ minWidth: 350 }} aria-label="simple table" className='hubtable'>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ICD Code</TableCell>
                                        <TableCell align="right">Descr</TableCell>
                                        <TableCell align="right">Last DX Date</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            123055
                                        </TableCell>
                                        <TableCell align="right">ABCD...</TableCell>
                                        <TableCell align="right">01/04/2022</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Card>
                </Grid>
                <Grid item sm={6} md={6} xs={12} className='tablegridbx'>
                    <Card className='hubtablebx'>
                        <Typography className='hubhcc'>
                            Open Care Gaps
                        </Typography>
                        <TableContainer>
                            <Table sx={{ minWidth: 350 }} aria-label="simple table" className='hubtable'>
                                {/* <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell align="right"></TableCell>
                                        <TableCell align="right">Last DX Date</TableCell>
                                    </TableRow>
                                </TableHead> */}
                                <TableBody>

                                    <TableRow

                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            Care Gaps 01
                                        </TableCell>
                                        <TableCell align="right"><Button className='added'>Added</Button></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Card>
                </Grid>
                <Grid item sm={12} md={12} xs={12}>
                    <EngagementHistory/>
                </Grid>
            </Grid>
            <EmailPopUp isOpen={emailPopup} handleClose={() => setEmailPopup(false)} />
            <TextPopUp isOpen={textPopup} handleClose={() => setTextPopup(false)} />
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
                    <Button className={`caremailbtn ${activeButton === 'mail' ? 'active' : ''}`} onClick={handleMailButtonClick}><MailOutlinedIcon sx={{ marginRight: '10px' }} />Email</Button>
                    <Divider />
                    <Button className={`caremailbtn ${activeButton === 'text' ? 'active' : ''}`} onClick={handleTextButtonClick}><MessageOutlinedIcon sx={{ marginRight: '10px' }} />Text</Button>
                </Box>
            </Popover>
        </React.Fragment>
    )
}
