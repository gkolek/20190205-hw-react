import React from 'react';
import Typography from '@material-ui/core/Typography';
import FormDialog from './FormDialog'
import Accordion from './Accordion'
import Drawer from './Drawer'


const MainView = props => {
  return (
    <div>
      <Typography variant="h4" color="secondary">
        <hr></hr>
        Main View
      </Typography>
      <hr></hr>
      <FormDialog />
      <hr></hr>

      <Accordion />
      <Drawer />
    </div>
  )
};

export default MainView