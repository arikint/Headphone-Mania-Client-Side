import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import login from '../../../images/headphone.png'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

/* --------------------------------------------
 -----Showing Login component------------
 ---------------------------------------------*/

const Login = () => {
    /* ------------------------------------------------
 -----declaring variables for various purposes------
 -------------------------------------------------*/
    const [loginData, setLoginData] = useState({});
    const [control, setControl] = useState(false);
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

/* --------------------------------------------------------
 -----Function for handling change in input field------------
 ---------------------------------------------------------*/
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

/* --------------------------------------------------------
 -----Function for performing login operation------------
 ---------------------------------------------------------*/
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
        setControl(true)
    }

/* --------------------------------------------------------
 -----Function for performing Google sign in operation------------
 ---------------------------------------------------------*/
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
        setControl(true)
    }

/* --------------------------------------------
 -----Login to be rendered on the UI--------
 ---------------------------------------------*/
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography sx={{ pl: 1, color:"#5af0ff" }} variant="h5" gutterBottom>Please Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            color="success"
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="filled" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            color="success"
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="filled" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {control && user.email &&<Alert severity="success">Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <p>------------------------</p>
                    <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img  className="mt-5" style={{ width: '80%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;