
import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import CareManagementTabTable from "./CareManagementTabTable";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { makeStyles } from '@mui/styles';
import '../index.css'
const usePlaceholderStyles = makeStyles(theme => ({
  placeholder: {
    color: "#aaa",
    fontSize:14
  }
}));

const Placeholder = ({ children }) => {
  const classes = usePlaceholderStyles();
  return <div className={classes.placeholder}>{children}</div>;
};
export default function ScheduleAddNewClient() {
  const [insurance, setInsurance] = React.useState("");
  const [risk, setRisk] = React.useState("");
  const [facility, setFacility] = React.useState("");
  const [measure, setMeasure] = React.useState("");

  return (
    <React.Fragment>
      <Grid item xs={12} sm={12} lg={12}>
        <Paper className="schedule_editform">
          <Box sx={{ padding: 5 }}>
            <Grid container spacing={3}>
              <Grid item xs={2} sm={2}>
                <InputLabel className="inputlevel">
                  Insurance
                </InputLabel>
              </Grid>

              <Grid item xs={4} sm={4}>
                <Box sx={{ minWidth: 120 }}>
                  <Select
                    sx={{
                      marginTop: 1,
                      width: 200,
                      height: 40,
                      '& .MuiSelect-select': {
                        paddingTop: 0,
                        paddingBottom: 0,
                      },
                    }}
                    value={insurance}
                    displayEmpty
                    onChange={event => setInsurance(event.target.value)}
                    renderValue={
                      insurance !== "" ? undefined : () => <Placeholder>Select Name</Placeholder>
                    }
                  >
                    {/* {addTableData.map((data, index) => (
                      <MenuItem className='dropitembx' value={index} key={index}>
                        {data.FilterName}
                      </MenuItem>
                    ))} */}
                    <MenuItem className='dropitembx' value={1}>Yes</MenuItem>
                    <MenuItem className='dropitembx' value={2}>No</MenuItem>
                  </Select>
                </Box>
              </Grid>
              <Grid item xs={2} sm={2}>
                <InputLabel className="inputlevel">
                  Chart Prep Measure
                </InputLabel>
              </Grid>
              <Grid item xs={4} sm={4}>
                <Box sx={{ minWidth: 120 }}>
                  <Select
                    sx={{
                      marginTop: 1,
                      width: 200,
                      height: 40,
                      '& .MuiSelect-select': {
                        paddingTop: 0,
                        paddingBottom: 0,
                      },
                    }}
                    value={measure}
                    displayEmpty
                    onChange={event => setMeasure(event.target.value)}
                    renderValue={
                      measure !== "" ? undefined : () => <Placeholder>Select Name</Placeholder>
                    }
                  >
                    {/* {addTableData.map((data, index) => (
                      <MenuItem className='dropitembx' value={index} key={index}>
                        {data.FilterName}
                      </MenuItem>
                    ))} */}
                    <MenuItem className='dropitembx' value={1}>Measure1</MenuItem>
                    <MenuItem className='dropitembx' value={2}>Measure2</MenuItem>
                    <MenuItem className='dropitembx' value={3}>Measure3</MenuItem>
                  </Select>
                </Box>
              </Grid>
              <Grid item xs={2} sm={2}>
                <InputLabel className="inputlevel">
                  Facility
                </InputLabel>
              </Grid>
              <Grid item xs={4} sm={4}>
                <Box sx={{ minWidth: 120 }}>
                  <Select
                    sx={{
                      marginTop: 1,
                      width: 200,
                      height: 40,
                      '& .MuiSelect-select': {
                        paddingTop: 0,
                        paddingBottom: 0,
                      },
                    }}
                    value={facility}
                    displayEmpty
                    onChange={event => setFacility(event.target.value)}
                    renderValue={
                      facility !== "" ? undefined : () => <Placeholder>Select From Here</Placeholder>
                    }
                  >
                    {/* {addTableData.map((data, index) => (
                      <MenuItem className='dropitembx' value={index} key={index}>
                        {data.FilterName}
                      </MenuItem>
                    ))} */}
                    <MenuItem className='dropitembx' value={1}>1</MenuItem>
                    <MenuItem className='dropitembx' value={2}>2</MenuItem>
                    <MenuItem className='dropitembx' value={3}>3</MenuItem>
                  </Select>
                </Box>
              </Grid>
              <Grid item xs={2} sm={2}>
                <InputLabel className="inputlevel">
                  Risk Patient
                </InputLabel>
              </Grid>
              <Grid item xs={4} sm={4}>
                <Box sx={{ minWidth: 120 }}>
                  <Select
                    sx={{
                      marginTop: 1,
                      width: 200,
                      height: 40,
                      '& .MuiSelect-select': {
                        paddingTop: 0,
                        paddingBottom: 0,
                      },
                    }}
                    value={risk}
                    displayEmpty
                    onChange={event => setRisk(event.target.value)}
                    renderValue={
                      risk !== "" ? undefined : () => <Placeholder>Select From Here</Placeholder>
                    }
                  >
                    {/* {addTableData.map((data, index) => (
                      <MenuItem className='dropitembx' value={index} key={index}>
                        {data.FilterName}
                      </MenuItem>
                    ))} */}
                    <MenuItem className='dropitembx' value={1}>1</MenuItem>
                    <MenuItem className='dropitembx' value={2}>2</MenuItem>
                    <MenuItem className='dropitembx' value={3}>3</MenuItem>
                  </Select>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
        <Paper className="sch_edit_tabpan">
          <Grid item xs={12} sm={12} lg={12}>
            <CareManagementTabTable />
          </Grid>
        </Paper>
      </Grid>
    </React.Fragment>

  );
}
