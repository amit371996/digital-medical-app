import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
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

const TextPopUp = ({ isOpen, handleClose }) => {
  const [charCount, setCharCount] = useState(0);

  const handleInputChange = (e) => {
    setCharCount(e.target.value.length);
  };

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
      <DialogContent dividers className='emaildialog'>
        <Grid container>
          <Grid item sm={12}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <PersonIcon />
              <Typography sx={{ color: '#0D6DAE' }}>Josh Clark</Typography>
            </div>
          </Grid>
          <Grid item sm={3}>
            <Typography className='mailtitle'>Sending message to</Typography>
          </Grid>
          <Grid item sm={8}>
            <Typography sx={{ fontSize: '15px' }}>(201)555-5555</Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              id="message"
              name="message"
              placeholder="Enter your message here"
              fullWidth
              size="medium"
              autoComplete="off"
              variant="outlined"
              multiline
              rows={7}
              sx={{ background: '#F1F1F1 !important' }}
              inputProps={{
                maxLength: 500,
              }}
              onChange={handleInputChange}
            />
            <Typography sx={{ fontSize: '15px', position: 'absolute', right: '30px', bottom: '100px' }}>
              {charCount} character / 500
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions sx={{ padding: '15px 15px 30px 0px !important' }}>
        <Button className='emailcancelbtn' autoFocus onClick={handleClose}>
          Cancel
        </Button>
        <Button className='emailsavebtn' autoFocus onClick={handleClose}>
          Send
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TextPopUp;
