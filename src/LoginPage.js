import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/material';
import { AppBar } from '@mui/material';
import Typography from '@mui/material/Typography';
import "./Login.css"
import Grid from '@mui/material/Grid';
import LoginSideImg from "./Images/LoginSideImg1.png"
import TextField from '@mui/material/TextField';
import { IoIosMailOpen } from 'react-icons/io'
import {BsShieldLockFill  } from 'react-icons/bs'
import Button from '@mui/material/Button';
import { CgLogIn } from 'react-icons/cg'
import MainLogo from './Images/MainLogo.png'
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';
// import { useHistory } from 'react-router';



function LoginPage() {

    // let History = useHistory();

    const navigate = useNavigate();

    const [email, setName] = useState("");
    const[password, setPassword]=useState("");


    const onChangeHandler = (fieldName, value) => {
        if (fieldName === "email") {
            setName(value);
        }
        else if(fieldName === "password"){
            setPassword(value);
          }
    }


        const onSubmitHandler = (e) => {
            e.preventDefault();
            if (email.trim() === "") {
                alert("required email field");
            }
            else if( password.trim() ===""){
                alert("required password field");
            }
            else if (email+ password) {
                alert("bye")
            }
    }
    

    const postData = () => {
        axios.post(`http://localhost:3000/nodeconnect`, 
        {
            email,
            password,
        }).then(() => {
            navigate.push('/read')
        })
    }

            return (
                <>
                    <Box>
                        <AppBar position="static" sx={{ backgroundColor: '#8DCAC6 ' }} className='mt-2'>
                            <Typography variant="h2" className='text-center mt-2 SetTextColor' id='setloginslide' >
                                <button className='btn'>
                                    <img src={MainLogo} alt="Avatar" class="Loginavatar" onClick={() => navigate("/")} />
                                </button>
                        
                                WELCOME TO ASTITVA LOGIN PAGE
                            </Typography>
                        </AppBar>
                    </Box>

            
                    <form  onSubmit={(e) => { onSubmitHandler(e) }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6} className='mt-5 ms-2 text-center'>
                    
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'flex-end',
                                        fontSize: 50,
                                        marginTop: 10
                            
                                    }}
                                >
                                    <IoIosMailOpen />
                                    <TextField
                                        id="input-with-sx"
                                        label="E-Mail ID"
                                        variant="standard"
                                        sx={{
                                            width: 500,
                                        }}
                                        className='ms-3'
                                        type='email'
                                        value={email}
                                        onChange={(e) => { onChangeHandler("email", e.target.value) }}
                                    />
                                </Box>

                                <Box
                        
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'flex-end',
                                        fontSize: 50,
                                        marginTop: 15
                                    }}
                                >
                                    <BsShieldLockFill />
                                    <TextField
                                        id="input-with-sx"
                                        label="PassWord"
                                        type="password"
                                        variant="standard"
                                        sx={{
                                            width: 500,
                                        }}
                                        className='ms-3'
                                        value={password}
                                        onChange={(e) => { onChangeHandler("password", e.target.value) }}
                                    />
                                </Box>
                            </Grid>
                           

               


                            <Grid item xs={5} className='text-end'>
                                <img
                                    className="imgHW mt-5"
                                    id="LoginImgAnimation"
                                    src={LoginSideImg}
                                    alt="LoginSideImg" />
                            </Grid>
                        </Grid>
                   

                        <Button 
                            onClick={postData} 
                            variant="outlined"
                        className='mt-5 ms-5 py-4 text-center buttonset'
                            id='LoginBtnHov'
                            type='submit'
                        sx={{
                            border: 2,
                            borderBlockStyle: 'solid',
                            backgroundColor: '#8DCAC6',
                            color: 'honeydew',
                                             
                        }}>
                            <h2> <span>

                                {/* <button className='btn'> */}
                                    Login
                                {/* </button>  */}
                                <CgLogIn /></span></h2>
                    </Button>
                    </form>
                </>
            )

        }
           
export default LoginPage;