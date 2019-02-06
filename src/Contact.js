import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Person from './Person'
import './Contact.css'

const Contact = props => {
  const bull = <span>*</span>;
 

  return (
    <>
      <Typography className='title' variant="h5" color="textDefault" gutterBottom>
        Contact
          </Typography>
      <Card className='card'>
        <CardContent>
          <Typography color="textPrimary" gutterBottom>
            {bull}
            <Person name="Grzegorz" />
            {bull}
            <Person email="gkolek@gazeta.pl" />
            {bull}
            <Person name="Grzegorz" email="gkolek@gazeta.pl" />
          </Typography>
        </CardContent>
      </Card>

    </>
  )
}
// }
export default Contact