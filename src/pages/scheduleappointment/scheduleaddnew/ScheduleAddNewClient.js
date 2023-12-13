
import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import SwitchGroup from "../scheduleedit/SwitchGroup";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { Input } from '@mui/base/Input';
import AddTabPanel from "./AddTabPanel";
import addClient from '../../../assets/image/icons/add_slient.png'

import AddClientModel from "./AddClientModel";

export default function ScheduleAddNewClient() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('../ScheduleDashboard');
    }
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const handleOpenModal = () => {
        setIsModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
      };
    return (
        <React.Fragment>
            <Grid item xs={12} sm={12} lg={12}>
                <Paper className="schedule_editform">
                    <Box sx={{ padding: 5 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={2} sm={2}>
                                <InputLabel className="inputlevel">
                                    Client
                                </InputLabel>
                            </Grid>
                            <Grid item xs={4} sm={4}>
                                <TextField
                                    required
                                    id="title"
                                    name="title"
                                    defaultValue="Josh Clark"
                                    fullWidth
                                    size="small"
                                    autoComplete="off"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <InputLabel className="inputlevel">
                                    Template
                                </InputLabel>
                            </Grid>
                            <Grid item xs={4} sm={4}>
                                <TextField
                                    required
                                    id="title"
                                    name="title"
                                    defaultValue="25"
                                    fullWidth
                                    size="small"
                                    autoComplete="off"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <InputLabel className="inputlevel">
                                    Measure
                                </InputLabel>
                            </Grid>
                            <Grid item xs={4} sm={4}>
                                <TextField
                                    required
                                    id="title"
                                    name="title"
                                    fullWidth
                                    size="small"
                                    defaultValue="Measure1"
                                    autoComplete="off"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <InputLabel className="inputlevel">
                                    Gender
                                </InputLabel>
                            </Grid>
                            <Grid item xs={4} sm={4}>
                                <TextField
                                    required
                                    id="title"
                                    name="title"
                                    defaultValue="Male"
                                    fullWidth
                                    size="small"
                                    autoComplete="off"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <InputLabel className="inputlevel">
                                    Description
                                </InputLabel>
                            </Grid>
                            <Grid item xs={4} sm={4}>
                                <Input slotProps={{ input: { className: 'my-input', id: 'myTextarea', style: { width: '100%' } } }} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque suscipit laoreet." multiline rows={4} />
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <InputLabel className="inputlevel">
                                    Text to send
                                </InputLabel>
                            </Grid>
                            <Grid item xs={4} sm={4}>
                                <Input slotProps={{ input: { className: 'my-input', id: 'myTextarea', style: { width: '100%' } } }} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque suscipit laoreet." multiline rows={4} />
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <InputLabel className="inputlevel">
                                    Pre Visit Form
                                </InputLabel>
                            </Grid>
                            <Grid item xs={4} sm={4}>
                                <TextField
                                    fullWidth
                                    required
                                    id="title"
                                    name="title"
                                    defaultValue='www.hippaform.com/blank'
                                    size="small"
                                    autoComplete="off"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <InputLabel className="inputlevel">
                                    Applicable Provider
                                </InputLabel>
                            </Grid>
                            <Grid item xs={4} sm={4}>
                                <TextField
                                    fullWidth
                                    required
                                    id="title"
                                    name="title"
                                    size="small"
                                    autoComplete="off"
                                    variant="outlined"
                                    defaultValue='25'
                                />
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <InputLabel className="inputlevel">
                                    Facility
                                </InputLabel>
                            </Grid>
                            <Grid item xs={4} sm={4}>
                                <TextField
                                    fullWidth
                                    required
                                    id="title"
                                    name="title"
                                    size="small"
                                    autoComplete="off"
                                    variant="outlined"
                                    defaultValue='25'
                                />
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <InputLabel className="inputlevel">
                                    Insurance
                                </InputLabel>
                            </Grid>
                            <Grid item xs={4} sm={4}>
                                <TextField
                                    fullWidth
                                    required
                                    id="title"
                                    name="title"
                                    size="small"
                                    autoComplete="off"
                                    variant="outlined"
                                    defaultValue='25'
                                />
                            </Grid>
                            <Grid item xs={3} sm={3}>
                                <InputLabel className="inputlevel">
                                    Active Flag
                                </InputLabel>
                            </Grid>
                            <Grid item xs={3} sm={3}>
                                <SwitchGroup switchCount={1} />
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <InputLabel className="inputlevel">
                                    Requires Pre Visit
                                </InputLabel>
                            </Grid>
                            <Grid item xs={4} sm={4}>
                                <SwitchGroup switchCount={1} />
                            </Grid>
                            <Grid item xs={3} sm={3}>
                                <InputLabel className="inputlevel">
                                    Requires appointment
                                </InputLabel>
                            </Grid>
                            <Grid item xs={3} sm={3}>
                                <SwitchGroup switchCount={1} />
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <InputLabel className="inputlevel">
                                    Requires Templates
                                </InputLabel>
                            </Grid>
                            <Grid item xs={4} sm={4}>
                                <SwitchGroup switchCount={1} />
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
                <Paper className="sch_edit_tabpan">
                    <Grid item xs={12} sm={12} lg={12}>
                        <AddTabPanel />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12}>
                        <Box className='add_clientbx'>
                            <div>
                                <div className='imgbx'>
                                    <img src={addClient} alt="add_slient" />
                                </div>
                                <Typography style={{ textAlign: 'center' }}>
                                    No data were added
                                </Typography>
                                <div className="" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Button className="schaddbtn" onClick={handleOpenModal}>
                                        Please Add here
                                    </Button>
                                </div>
                            </div>

                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12} className="view_cancelbx ">
                        <Button className="viewCancel" onClick={handleBack}>
                            Cancel
                        </Button>
                        <Button className="viewCancel addsave" onClick={handleBack} >
                            Save
                        </Button>
                    </Grid>
                </Paper>
            </Grid>
            <AddClientModel isOpen={isModalOpen} handleClose={handleCloseModal} />
        </React.Fragment>

    );
}
