import React, { useEffect, useState } from 'react';
import { Grid, Typography, TextField, Button, Paper, Divider, Stack } from '@mui/material';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { data } from './EngagementHistoryData';
import { addEngagementNote, updateEngagementHistory, updateEngagementNote } from '../../../component/store/userSlice';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function EngagementHistory() {
  const [note, setNote] = useState('');
  const dispatch = useDispatch();
  const engagementdata = useSelector((state) => state.appointments.engagementHistory) || []; // Ensure it's an array
  // const addagementdata = useSelector((state) => state.appointments.engagementHistory)
  useEffect(() => {
    // Ensure `data` is an array and dispatch accordingly
    if (Array.isArray(data) && data.length > 0) {
      dispatch(updateEngagementHistory(data));
    }
  }, [dispatch]);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return 'Invalid Date';
    }
    const options = { day: '2-digit', month: 'short', year: '2-digit' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

    return formattedDate;
  };
  const handleAddNote = () => {
    dispatch(updateEngagementNote(note));
    dispatch(addEngagementNote({
      date: new Date().toLocaleDateString(), 
      Patienthistory: note
    }));
    setNote('');
  };
  console.log(engagementdata);
  return (
    <React.Fragment>
      <Grid container>
        <Grid item sm={12}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Typography className='pthistorytxttop'>Patient Engagement History</Typography>
          </Box>
          <Box className='historymainbx'>
            <Box className='notesbox'>
              <div className='addtextfield'>
                <TextField
                  required
                  id="title"
                  name="title"
                  placeholder="Male"
                  fullWidth
                  size="small"
                  autoComplete="off"
                  variant="outlined"
                  value={note}  // Update the value prop to reflect the note state
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
              <div className='addnotesbx'>
                <Button className='addnotes' onClick={handleAddNote}>+Add Notes</Button>
              </div>
            </Box>

            <Box className='historybx'>
              {Array.isArray(engagementdata) ? (
                engagementdata.map((item, index) => (
                  <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                    sx={{ marginBottom: '30PX' }}
                    key={index}
                  >
                    <Item className='datebx'>{formatDate(item.date)}</Item>
                    <Item className='historytxtbx'>{item.Patienthistory}</Item>
                  </Stack>
                ))
              ) : (
                <p>No engagement data available.</p>
              )}
            </Box>

          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
