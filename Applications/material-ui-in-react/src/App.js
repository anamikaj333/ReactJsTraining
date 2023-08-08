import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import AlarmIcon from '@mui/icons-material/Alarm';
import IconButton from '@mui/material/IconButton';




function App() {
  return (
    <div className="App">
     <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="outlined" color='error'>Outlined</Button>
      <Button variant="outlined" color='success'>Outlined</Button>
      <Button variant="contained" startIcon={<DeleteIcon />}> Delete</Button>
      <Button variant="contained" endIcon={<SendIcon />}> Send</Button>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
 

    </Stack>
    
    </div>
  );
}

export default App;
