import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import { Routes, Route, Link,useNavigate  } from "react-router-dom";
import '../../style/login.scss';
import _Login  from '../../assets/images/service.jpg'

const Login = () => {
   const navigate = useNavigate();
const loginHandler = () =>{
navigate('/products');
}

  return (
    <div className="background_image">
      <Grid container spacing={2}>
        <Grid item xs={12} md ={6}>
          <div className="right_column">
            <div className="login_text">
              <Typography variant="h2"> Login</Typography>
            </div>

            <FormControl sx={{ m: 3 }} fullWidth variant="standard">
              <TextField
                className="user_name"
                id="input-with-icon-textfield"
                label="Email"
                placeholder="Email Address"
                 // onChange={emailHandler}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                fullWidth
              />
              <TextField
                className="user_name"
                id="input-with-icon-textfield"
                label="Password"
                type="password"
                placeholder="Password"
                // onChange={passwordHandler}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                fullWidth
              />
              {/* <Link to="/home"> */}
              <Button type="submit" variant="contained"  
              onClick={loginHandler} style={{background:'#fbbe36', color:'black'}}
              >
                Sign In
              </Button>
              {/* </Link> */}
            </FormControl>
          </div>
        </Grid>
        <Grid item xs={0} md={6} marginTop={15} >
          <div className="left_column">
            <img className="node_image" 
            src={_Login} 
            alt="Node Png Images" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
