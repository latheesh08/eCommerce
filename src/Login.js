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
                        <p>Login to continue to your Jobstr admin</p>
                    </div>
                    <form className='form'>
                        <StyledInput label="Email Address" variant="outlined" />
                        <StyledInput label="Password" variant="outlined" />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    // checked={state.checkedB}
                                    // onChange={handleChange}
                                    // name="checkedB"
                                    color="primary"
                                />
                            }
                            label="Remember me"
                        />
                        <Button variant="contained" className="Button" ><Link className='router_links' to="/dashboard">Login</Link></Button>
                        <Link className='router_links_outside' to="/register">Don't have an account ? Login here</Link>
                    
                    </form>

                </div>
            </div>
        )
    }
}