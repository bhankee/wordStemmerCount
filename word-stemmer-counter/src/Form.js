import React, { useState } from 'react';

import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import Grid from '@material-ui/core/Grid';


const styles = theme => ({
    root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  })


function Form({eventFunct}) {

    const [state, setSwitch] = useState({ checkedStopWords: true });

    const handleSwitch = (event) => {
        setSwitch({ ...state,  [event.target.name]: event.target.checked  });
    }


  return (
    <FormControl>

    <Grid container spacing={24}>
        <Grid item xs={6}>
            <Button variant="contained" component="label" color="primary">
            Upload File
                <input id="txtDocUpload" type="file" onChange={eventFunct}  hidden />
            </Button>
            <FormHelperText id="my-helper-text">This app supports .txt file types.</FormHelperText>
        </Grid>
        <Grid item xs={6}>
            <FormControlLabel
            control={
            <Switch
                checked={state.checkedStopWords}
                onChange={handleSwitch}
                name="checkedStopWords"
                color="primary"
            />
            }
            label={state.checkedStopWords ? "Include Stop Words" : "Exclude Stop Words"}
             />
        </Grid>
    </Grid>
</FormControl>
  );
}

export default Form;
