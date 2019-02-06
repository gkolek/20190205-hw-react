import React from 'react';
import Button from '@material-ui/core/Button';


import { Link } from "react-router-dom";
const Header = props => {
    return (
        <header>
            {
                props.links.map(link => (
                    <Button 
                    color='secondary'
                    variant='raised' 
                    component={Link} 
                    key={link.url} 
                    to={link.url}>
                        {link.text}
                    </ Button>
                ))
            }
        </header>
    )
}

export default Header