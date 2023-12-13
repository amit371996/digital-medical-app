
import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import SwitchGroup from "../scheduleedit/SwitchGroup";
import EditTabPanel from "../scheduleedit/EditTabPanel";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { Input } from '@mui/base/Input';
import { useSelector } from "react-redux";
export default function ScheduleView() {
    const navigate=useNavigate();
    const handleBack=()=>{
        navigate('../ScheduleDashboard');
    }
    const isRequiresSchedulingChecked = useSelector(state => state.appointments.checkDashboard.requiresScheduling) || [];
    const isRequiresVisitChecked = useSelector(state => state.appointments.checkDashboard.requiresVisit) || [];
    const isRequiresTemplateChecked = useSelector(state => state.appointments.checkDashboard.requiresTemplate) || [];
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
                            <Input slotProps={{ input: { className: 'my-input', id:'myTextarea', style: {width: '100%'} } }} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque suscipit laoreet." multiline rows={4} />
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <InputLabel className="inputlevel">
                                    Text to send
                                </InputLabel>
                            </Grid>
                            <Grid item xs={4} sm={4}>

                            <Input slotProps={{ input: { className: 'my-input', id:'myTextarea', style: {width: '100%'} } }} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque suscipit laoreet." multiline rows={4} />
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
                                    defaultValue='Lorem'
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
                                    defaultValue='Lorem'
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
                                Requires Scheduling
                                </InputLabel>
                            </Grid>
                            <Grid item xs={4} sm={4}>
                                <SwitchGroup switchCount={1} isChecked={isRequiresSchedulingChecked} />
                            </Grid>
                            <Grid item xs={3} sm={3}>
                                <InputLabel className="inputlevel">
                                Requires Pre Visit
                                </InputLabel>
                            </Grid>
                            <Grid item xs={3} sm={3}>
                                <SwitchGroup switchCount={1} isChecked={isRequiresVisitChecked}/>
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <InputLabel className="inputlevel">
                                    Requires Templates
                                </InputLabel>
                            </Grid>
                            <Grid item xs={4} sm={4}>
                                <SwitchGroup switchCount={1} isChecked={isRequiresTemplateChecked}/>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
                <Paper className="sch_edit_tabpan">
                    <Grid item xs={12} sm={12} lg={12}>
                        <EditTabPanel />
                    </Grid>
                    <Grid  item xs={12} sm={12} lg={12} className="view_cancelbx ">
                        <Button className="viewCancel" onClick={handleBack}>
                            Cancel
                        </Button>
                    </Grid>
                </Paper>
            </Grid>
        </React.Fragment>
    );
}
