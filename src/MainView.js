import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FormDialog from './FormDialog'
import Accordion from './Accordion'
// import { Drawer } from '@material-ui/core';
import Drawer from './Drawer'


const MainView = props => {
  return (
    <div>
      <Typography variant="h4" color="textPrimary">
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