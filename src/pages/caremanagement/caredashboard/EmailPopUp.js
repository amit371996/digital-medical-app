import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Grid,
  TextField,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import TextEditor from '../careemailtexteditor/TextEditor';

const EmailPopUp = ({ isOpen, handleClose }) => {
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={isOpen}
      PaperProps={{
        sx: {
          maxWidth: '800px',
          width: '100%',
          maxHeight: 600,
        },
      }}
    >
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers className="emaildialog">
        <Grid container>
          <Grid item sm={12}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <PersonIcon sx={{color:'#0D6DAE'}} />
              <Typography sx={{ color: '#0D6DAE' }}>Josh Clark</Typography>
            </div>
          </Grid>
          <Grid item sm={3}>
            <Typography className="mailtitle">Sending mail to</Typography>
          </Grid>
          <Grid item sm={8}>
            <Typography sx={{ fontSize: '15px' }}>Josh.Clark@example.com</Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              id="title"
              name="title"
              placeholder="Subject"
              fullWidth
              size="medium"
              autoComplete="off"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextEditor />
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions sx={{ padding: '15px 15px 30px 0px !important' }}>
        <Button className="emailcancelbtn" autoFocus onClick={handleClose}>
          Cancel
        </Button>
        <Button className="emailsavebtn" autoFocus onClick={handleClose}>
          Send
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EmailPopUp;
