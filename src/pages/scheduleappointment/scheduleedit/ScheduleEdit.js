
import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import SwitchGroup from "./SwitchGroup";
import EditTabPanel from "./EditTabPanel";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Input } from '@mui/base/Input';
import { useState } from "react";
import { useSelector } from "react-redux";
export default function ScheduleEdit() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('../ScheduleDashboard');
    }

    // const checkDashboard = useSelector(state => state.appointments.checkDashboard) || {};

    // // Ensure valid values for requiresScheduling, requiresVisit, and requiresTemplate
    // const validisRequiresSchedulingChecked = Array.isArray(checkDashboard.requiresScheduling) ? checkDashboard.requiresScheduling : [];
    // const validisRequiresVisitChecked = Array.isArray(checkDashboard.requiresVisit) ? checkDashboard.requiresVisit : [];
    // const validisRequiresTemplateChecked = Array.isArray(checkDashboard.requiresTemplate) ? checkDashboard.requiresTemplate : [];


    const isRequiresSchedulingChecked = useSelector(state => state.appointments.checkDashboard.requiresScheduling) || {};
    const isRequiresVisitChecked = useSelector(state => state.appointments.checkDashboard.requiresVisit) || {};
    const isRequiresTemplateChecked = useSelector(state => state.appointments.checkDashboard.requiresTemplate) || {};
    const validisRequiresSchedulingChecked = Array.isArray(isRequiresSchedulingChecked) ? isRequiresSchedulingChecked : [];
    const validisRequiresVisitChecked = Array.isArray(isRequiresVisitChecked) ? isRequiresVisitChecked : [];
    const validisRequiresTemplateChecked = Array.isArray(isRequiresTemplateChecked) ? isRequiresTemplateChecked : [];
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
                                    placeholder="Client name"
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
                                    placeholder="25"
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
                                    placeholder="Measure1"
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
                                    placeholder="Male"
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
                            <Grid item xs={4} sm={4} className="container-fluid">
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
                                    Lower Age
                                </InputLabel>
                            </Grid>
                            <Grid item xs={4} sm={4}>
                                <TextField
                                    fullWidth
                                    required
                                    id="title"
                                    name="title"
                                    defaultValue='25'
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
                            <SwitchGroup switchCount={1}  />
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <InputLabel className="inputlevel">
                                Requires Scheduling
                                </InputLabel>
                            </Grid>
                            <Grid item xs={4} sm={4}>
                                <SwitchGroup switchCount={1} isChecked={validisRequiresSchedulingChecked} />
                            </Grid>
                            <Grid item xs={3} sm={3}>
                                <InputLabel className="inputlevel">
                                Requires Pre Visit
                                </InputLabel>
                            </Grid>
                            <Grid item xs={3} sm={3}>
                                <SwitchGroup switchCount={1} isChecked={validisRequiresVisitChecked}/>
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <InputLabel className="inputlevel">
                                    Requires Templates
                                </InputLabel>
                            </Grid>
                            <Grid item xs={4} sm={4}>
                                <SwitchGroup switchCount={1} isChecked={validisRequiresTemplateChecked}/>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
                <Paper className="sch_edit_tabpan">
                    <Grid item xs={12} sm={12} lg={12}>
                        <EditTabPanel />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12} className="view_cancelbx ">
                        <Button className="viewCancel" onClick={handleBack} >
                            Cancel
                        </Button>
                        <Button className="viewCancel viewsave" onClick={handleBack} >
                            Save
                        </Button>
                    </Grid>
                </Paper>
            </Grid>
           
        </React.Fragment>
    );
}



