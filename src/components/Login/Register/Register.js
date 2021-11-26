import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import login from '../../../images/headphone.png'
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

/* --------------------------------------------
 -----Showing Register component------------
 ---------------------------------------------*/
const Register = () => {

/* ------------------------------------------------
 -----declaring variables for various purposes------
 -------------------------------------------------*/
    const [loginData, setLoginData] = useState({});
    const [control, setControl] = useState(false);
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

/* --------------------------------------------------------
 -----Function for handling on blur in input field------------
 ---------------------------------------------------------*/
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

/* --------------------------------------------------------
 -----Function for performing Resigter operation------------
 ---------------------------------------------------------*/
    const handleRegisterSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
        setControl(true)
    }

/* --------------------------------------------
 -----Register to be rendered on the UI--------
 ---------------------------------------------*/
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography sx={{ pl: 1, color:"#5af0ff" }} variant="h5" gutterBottom>Please Register</Typography>
                    {!isLoading && <form onSubmit={handleRegisterSubmit}>
                        <TextField 
                            color="success"
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="filled" />
                        <TextField
                        color="success"
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="filled" />
                        <TextField
                        color="success"
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="filled" />
                        <TextField
                        color="success"
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="ReType Your Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="filled" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button color="secondary" variant="text">Already Registered? Please Login</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && control && <Alert severity="success">User Created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img className="mt-5" style={{ width: '80%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;