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
import { useEffect, useState } from "react";
import axios from 'axios';

// import { useHistory } from 'react-router';



function LoginPage() {

    // let History = useHistory();

    const navigate = useNavigate();

    
   
    const [isValid, setValid] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [usertype, setUserType] = useState("");


    const validate = () => {
        return email.length > 0 && password.length > 4 && usertype.length >0;
    };
    useEffect(() => {
        const isValid = validate();
        setValid(isValid);
    }, [email, password, usertype]);
    


    const onChangeHandler = (fieldName, value) => {
        if (fieldName === "email") {
            setEmail(value);
        }
        else if (fieldName === "password") {
            setPassword(value);
        }
        else if (fieldName === "usertype") {
            setUserType(value);
        }
    }

   

        
    // const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated") || false));
    

    //     const admin = [{ email: "sanjana@avanttec.in", password: "sana", usertype: "Admin" }];

    //     const chemist = [{ email: "surya@avanttec.in", password: "surya", usertype: "Chemist" }];
    
    //     const operator = [{ email: "teena@avanttec.in", password: "tee", usertype: "Operator" }];


    const [APIData, setAPIData] = useState([]);



    const getData = () => {
        
        axios.get(`http://localhost:4000/userlogin`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }
 
    
    const handleSubmit = (e) => {
        e.preventDefault()

        const account = APIData.filter((APIData) => APIData.email == email)

    
        console.log(account)
        if (account) {
        

            console.log("Success")
            navigate("/chemist");
        }
        else {
            console.log("fail")
        }
    }
            // const Login1 = admin.find((ad) => ad.email === email);
            // const Login2 = chemist.find((ad) => ad.email === email);
            // const Login3 = operator.find((ad) => ad.email === email);

        //     if (Login1 && Login1.password === password && Login1.usertype === usertype){
                    
        //         navigate("/admin");
        //     }
        //     else if (Login2 && Login2.password === password && Login2.usertype === usertype){
                    
        //         navigate("/chemist");
        //     }
        //     else if (Login3 && Login3.password === password && Login3.usertype === usertype){
                    
        //         navigate("/operator");
        //     }

        //     else {
        //         navigate("/login")
        //     }
        // };


       
    // const [APIData, setAPIData] = useState([]);



    // const getData = () => {
        
    //     axios.get(`http://localhost:4000/userlogin`)
    //         .then((getData) => {
    //             setAPIData(getData.data);
    //         })
    // }
 

 

           
        // const postData = () => {
        //     axios.post(`http://localhost:4000/userlogin`,
        //         {
        //             email,
        //             password,
        //             usertype,
        //         }).then(() => {
        //             navigate.push('/read')
        //         })
        // }

   

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

            
                <form
               onSubmit={handleSubmit}
                >
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
                                    required
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
                                    required
                                    className='ms-3'
                                    value={password}
                                    onChange={(e) => { onChangeHandler("password", e.target.value) }}
                                />
                            </Box>

                            <Box
                             fullWidth
                                sx={{
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    fontSize: 30,
                                    marginTop: 15
                                }}
                    >
                        <BsShieldLockFill />
                        {/* <TextField
                            id="input-with-sx"
                            label="User Type"
                            type="password"
                            variant="standard"
                            sx={{
                                width: 500,
                            }}
                            className='ms-3'
                            value={password}
                            onChange={(e) => { onChangeHandler("usertype", e.target.value) }}
                                /> */}
                                <label>
                                    User Type
                                </label>
                                <select onChange={(e) => { onChangeHandler("usertype", e.target.value) }}>
                                    Type

                                    <option className='disabled'>
                                        Select
                                    </option>
                                    <option
                                        
                                    >
                                        Admin
                                    </option>
                                    <option
                                       
                                    >
                                        Chemist
                                    </option>
                                    <option
                                        
                                    >
                                        Operator
                                    </option>
                                </select>
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
                        onClick={getData}
                        variant="outlined"
                        className='mt-5 ms-5 py-4 text-center buttonset'
                        id='LoginBtnHov'
                        disabled={!isValid}
                        type='submit'
                        sx={{
                            border: 2,
                            borderBlockStyle: 'solid',
                            backgroundColor: '#8DCAC6',
                            color: 'honeydew',
                                             
                        }}>
                        <h2> <span>


                            Login
        
                            <CgLogIn /></span></h2>
                    </Button>
                       
                        

                    <div>

                           
                                        
                                            

                    </div>


                </form>

                <Button
                    variant="outlined"
                    className='mt-5 ms-5 py-4  buttonset'
                    onClick={() => navigate("/fetchtable")}
                    id='LoginBtnHov'
                    sx={{
                        border: 2,
                        borderBlockStyle: 'solid',
                        backgroundColor: '#8DCAC6',
                        color: 'honeydew',
                                             
                    }}>
                    
                    <h6> <span> Get Login  Data</span></h6>
                </Button>

                <Button
                    variant="outlined"
                    className='mt-5 ms-5 py-4  buttonset'
                    onClick={() => navigate("/fetchtableid")}
                    id='LoginBtnHov'
                    sx={{
                        border: 2,
                        borderBlockStyle: 'solid',
                        backgroundColor: '#8DCAC6',
                        color: 'honeydew',
                                             
                    }}>
                    
                    <h6> <span> Get Login  Data by ID</span></h6>
                </Button>
            </>
        )

    }
        
export default LoginPage;