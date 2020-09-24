import React from 'react'
import {
    Link,
} from "react-router-dom";
import { Container, Grid, TextField, Checkbox,Button, FormControlLabel, Input, withStyles } from '@material-ui/core'

const StyledInput = withStyles({
    root: {
        marginBottom: '40px',
        fontSize: '16px',
        backgroundColor: '#fff',
        textAlign: 'left',
        width: '30%'
    },
    label: {
        textTransform: 'capitalize',
    },
})(TextField);

export default class Login extends React.Component {

    render() {
        return (
            <div className='container_wrapper'>
                <div className='container'>
                    <div className='header'>
                        <img src={require('./images/logo.png')} className='logo' />

                    </div>
                    <div className='title'>
                        <p>Sign up for free and stand out when applying for jobs</p>
                    </div>
                    <form className='form'>
                        <StyledInput label="Enter your email address" variant="outlined" />
                        <StyledInput label="Enter a username" variant="outlined" />
                        <StyledInput label="Enter a password" variant="outlined" />
                        <StyledInput label="Repeat your password" variant="outlined" />

                        <Button variant="contained" className="Button" >Sign Up</Button>
                        <Link className='router_links_outside' to="/">Have an account ? Login here</Link>
                    </form>

                </div>
            </div>
        )
    }
}