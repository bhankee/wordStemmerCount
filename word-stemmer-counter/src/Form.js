import React, { useState } from 'react';

import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';



function Form({eventFunct}) {

    const [state, setSwitch] = useState({ checkedStopWords: true });

    const handleSwitch = (event) => {
        setSwitch({ ...state,  [event.target.name]: event.target.checked  });
    }

    const onInputClick = (event) => {
        event.target.value = ''
    }


  return (
    <FormControl>

    <Grid container spacing={10}>
        <Grid item xs={6}>
            <Button variant="contained" component="label" color="primary">
            Upload File
                <input id="txtDocUpload" type="file" accept=".txt, .csv" onChange={(e)=> eventFunct(e,state.checkedStopWords )} onClick={onInputClick}  hidden />
            </Button>
            <p>.txt & .csv file types.</p>
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
            label={state.checkedStopWords ? "Exclude Stop Words" : "Include Stop Words"}
             />
        </Grid>
    </Grid>
</FormControl>
  );
}

export default Form;
