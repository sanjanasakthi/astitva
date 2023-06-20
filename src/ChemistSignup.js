import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/material';
import { AppBar } from '@mui/material';
import Typography from '@mui/material/Typography';
import './ChemistSignup.css'
import MainLogo from './Images/MainLogo.png'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { MdLocalPharmacy } from 'react-icons/md'
import { BsCircleHalf } from 'react-icons/bs'
import { RxHalf2 } from 'react-icons/rx'
import { BsFillDoorOpenFill } from 'react-icons/bs'
import { GiCrossroad } from 'react-icons/gi'
import { GrMapLocation } from 'react-icons/gr'
import { GiModernCity } from 'react-icons/gi'
import { BsPinMapFill } from 'react-icons/bs'
import { MdAreaChart } from 'react-icons/md'
import { FaMobileAlt } from 'react-icons/fa'
import {LuMailQuestion} from 'react-icons/lu'
import { FaIdCard } from 'react-icons/fa'
import { MdPhoto } from 'react-icons/md'
import {MdOutlinePhotoCameraFront} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import ChemistSideImg from './Images/ChemistSideImage.png'
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import axios from 'axios';


function ChemistSignUp() {

    const navigate = useNavigate();

    const [pharmacyname, setpharmacyname] = useState("");
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [doornum, setdoornum] = useState("");
    const [street, setstreet] = useState("");
    const [area, setarea] = useState("");
    const [city, setcity] = useState("");
    const [pincode, setpincode] = useState("");
    const [state, setstate] = useState("");
    const [mobilenumber, setmobilenumber] = useState("");
    const [email, setemail] = useState("");
    const [druglicencenum, setdruglicencenum] = useState("");
    const [chemistphoto, setchemistphoto] = useState("");
    const [chemistlicencephoto, setchemistlicencephoto] = useState("");
    const [isValid, setValid] = useState(false);





    const postData = () => {
        axios.post(`http://localhost:4000/astitvasignup`, 
            {
            
                pharmacyname,
                firstname,
                lastname,
                doornum,
                street,
                area,
                city,
                pincode,
                state,
                mobilenumber,
                email,
                druglicencenum,
                chemistphoto,
                chemistlicencephoto

                
            
        
            }).then(() => {
            navigate.push('/read')
        })
    }


    const onChangeHandler = (fieldName, value) => {
        if (fieldName === "pharmacyname") {
            setpharmacyname(value);
        }
        else if (fieldName === "firstname") {
            setfirstname(value);
        }
        else if (fieldName === "lastname") {
            setlastname(value);
        }
        else if (fieldName === "doornum") {
            setdoornum(value);
        }else if (fieldName === "street") {
            setstreet(value);
        }else if (fieldName === "area") {
            setarea(value);
        }else if (fieldName === "city") {
            setcity(value);
        }else if (fieldName === "pincode") {
            setpincode(value);
        }else if (fieldName === "state") {
            setstate(value);
        }else if (fieldName === "mobilenumber") {
            setmobilenumber(value);
            
        }else if (fieldName === "email") {
            setemail(value);
        }else if (fieldName === "druglicencenum") {
            setdruglicencenum(value);
        }else if (fieldName === "chemistphoto") {
            setchemistphoto(value);
        }else if (fieldName === "chemistlicencephoto") {
            setchemistlicencephoto(value);
        }
    }
   


    const validate = () => {
        return pharmacyname.length > 0, firstname.length > 0, lastname.length > 0, doornum.length > 0, street.length > 0, area.length > 0, chemistphoto.length > 0,
            state.length > 0, pincode.length > 0, mobilenumber.length > 0
            , email.length > 0, druglicencenum.length > 0, chemistphoto.length > 0, chemistlicencephoto.length > 0;
      };
      useEffect(() => {
        const isValid = validate();
        setValid(isValid);
      }, [pharmacyname, firstname,
          lastname, doornum, street, area,
          city, state, pincode, mobilenumber,
          email, druglicencenum,
          chemistphoto, chemistlicencephoto
      ]);
    
    
//       const onSubmitHandler = (e) => {
//         e.preventDefault();
//         if (email.trim() === "") {
//             alert("required email field");
//         }
//         else if( password.trim() ===""){
//             alert("required password field");
//         }
//         else if (email+ password) {
//             alert("bye")
//         }
// }
    

    return (
        <>
              <Box>
                <AppBar position="static" sx={{backgroundColor: '#8DCAC6 '}} className='mt-2'>
                    <Typography variant="h2" className='text-center mt-2 SetTextColor' id='setchemistslide' >
                       
                        <button className='btn'>
                            <img src={MainLogo} alt="Avatar" class="Chemistavatar" onClick={() => navigate("/")} />
                        </button>  
                         WELCOME TO ASTITVA SIGN-UP PAGE
                    </Typography>
                </AppBar>
            </Box>
            <form>
            <Grid container rowSpacing={1}  columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='mt-1'>
                <Grid xs={5}>
                <img 
                            className="ChemistimgHW mt-5 ms-5"
                            id="ChemistImgAnimation"
                            src={ChemistSideImg}
                            alt="ChemistSideImg"/>
                    
                 
                        
                    </Grid>
                
                <Grid xs={7}  >
                   
                    <Box 
                     sx={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            fontSize: 30,
                        }}
                        justifyContent="center"
                        
                >            
                    <MdLocalPharmacy/>      
                    
                   <TextField
                        id="standard-basic"
                            label="Pharmacy Name"
                                multiline
                                type='text'
                            variant="standard"
                            className='ms-1'
                            onChange={(e) => { onChangeHandler("pharmacyname", e.target.value) }}
                             />
                    </Box>    
             
                    
                     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid xs={6}>
                            <Box 
                     sx={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            fontSize: 30,
                        }}
                        justifyContent="center"
                        
                >            
                    <BsCircleHalf/>      
                    
                   <TextField
                        id="standard-basic"
                            label="First Name"
                                        multiline
                                        type='text'
                            variant="standard" 
                                        className='ms-1 mt-3'
                                        onChange={(e) => { onChangeHandler("firstname", e.target.value) }}            
                                   
                                
                             />
                            </Box>
                            
                            <Box 
                     sx={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            fontSize: 30,
                        }}
                        justifyContent="center"
                        
                >            
                    <BsFillDoorOpenFill/>      
                    
                   <TextField
                        id="standard-basic"
                            label="Door Number"
                            multiline
                            type='number'
                            variant="standard" 
                                        className='ms-1 mt-3' 
                                        onChange={(e) => { onChangeHandler("doornum", e.target.value) }}
                            
                                    
                                
                             />
                            </Box>

                            <Box 
                     sx={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            fontSize: 30,
                        }}
                        justifyContent="center"
                        
                >            
                    <GrMapLocation/>      
                    
                   <TextField
                        id="standard-basic"
                                        label="Area"
                                        type='text'
                            multiline
                            variant="standard" 
                                        className='ms-1 mt-3'
                                        onChange={(e) => { onChangeHandler("area", e.target.value) }}            
                                
                             />
                            </Box>

                            <Box 
                     sx={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            fontSize: 30,
                        }}
                        justifyContent="center"
                        
                >            
                    <BsPinMapFill/>      
                    
                   <TextField
                        id="standard-basic"
                            label="Pin Code"
                                        multiline
                                        type='number'
                            variant="standard" 
                                        className='ms-1 mt-3'
                                        onChange={(e) => { onChangeHandler("pincode", e.target.value) }}            
                                
                             />
                            </Box>

                            <Box 
                     sx={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            fontSize: 30,
                        }}
                        justifyContent="center"
                        
                >            
                    <FaMobileAlt/>      
                    
                   <TextField
                        id="standard-basic"
                            label="Mobile Number"
                                        multiline
                                        type='number'
                            variant="standard" 
                                        className='ms-1 mt-3'
                                        onChange={(e) => { onChangeHandler("mobilenumber", e.target.value) }}            
                                
                             />
                            </Box>
                            <Box 
                     sx={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            fontSize: 30,
                        }}
                        justifyContent="center"
                        
                >            
                    <FaIdCard/>      
                    
                   <TextField
                        id="standard-basic"
                            label="Drug Licence Number"
                                        multiline
                                        type='number'
                            variant="standard" 
                                        className='ms-1 mt-3' 
                                        onChange={(e) => { onChangeHandler("druglicencenum", e.target.value) }}            
                                
                             />
                            </Box>
                            
                            <Box 
                     sx={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            fontSize: 30,
                        }}
                        justifyContent="center"
                        
                >            
                    <MdOutlinePhotoCameraFront className='ms-5'/>      
                    
                   <TextField
                        id="standard-basic"
                            // label="Cp"
                                    multiple
                                    type='file'
                            variant="standard" 
                                        className='ms-1 mt-5 ' 
                                        onChange={(e) => { onChangeHandler("chemistphoto", e.target.value) }}            
                                
                             />
                            </Box>
                        </Grid>
                        

                            <Grid xs={6}>
                            <Box 
                     sx={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            fontSize: 30,
                        }}
                        justifyContent="center"
                        
                >            
                    <RxHalf2/>      
                    
                   <TextField
                        id="standard-basic"
                            label="Last Name"
                            multiline
                                        variant="standard"
                                        type='text'
                                        className='ms-1 mt-3'
                                        onChange={(e) => { onChangeHandler("lastname", e.target.value) }}
                                
                             />
                            </Box>
                            
                            <Box 
                     sx={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            fontSize: 30,
                        }}
                        justifyContent="center"
                        
                >            
                    <GiCrossroad/>      
                    
                   <TextField
                        id="standard-basic"
                            label="Street"
                                        multiline
                                        type='text'
                            variant="standard" 
                                        className='ms-1 mt-3'
                                        onChange={(e) => { onChangeHandler("street", e.target.value) }}            
                                
                             />
                            </Box>
                            <Box 
                     sx={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            fontSize: 30,
                        }}
                        justifyContent="center"
                        
                >            
                    <GiModernCity/>      
                    
                   <TextField
                        id="standard-basic"
                            label="City"
                            multiline
                                        variant="standard" 
                                        type='text'
                                        className='ms-1 mt-3'
                                        onChange={(e) => { onChangeHandler("city", e.target.value) }}            
                                
                             />
                            </Box>
                            <Box 
                     sx={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            fontSize: 30,
                        }}
                        justifyContent="center"
                        
                >            
                    <MdAreaChart/>      
                    
                   <TextField
                        id="standard-basic"
                            label="State"
                            multiline
                                        variant="standard" 
                                        type='text'
                                        className='ms-1 mt-3'  
                                        onChange={(e) => { onChangeHandler("state", e.target.value) }}            
                                
                             />
                            </Box>
                            <Box 
                     sx={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            fontSize: 30,
                        }}
                        justifyContent="center"
                        
                >            
                    <LuMailQuestion/>      
                    
                   <TextField
                        id="standard-basic"
                            label="Emai ID"
                            multiline
                                        type='email'
                                        
                            variant="standard" 
                                        className='ms-1 mt-3'  
                                        onChange={(e) => { onChangeHandler("email", e.target.value) }}            
                                
                             />
                            </Box>
                            <Box 
                     sx={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            fontSize: 30,
                        }}
                        justifyContent="center"
                        
                >            
                    <MdPhoto/>      
                    
                               
                   <TextField
                        id="standard-basic"
                            // label="Drug Licence Photo"
                            multiple
                            type="file"
                            variant="standard" 
                            className='ms-1 mt-5'        
                            onChange={(e) => { onChangeHandler("chemistlicencephoto", e.target.value) }}
                             />
                    </Box>
                            </Grid>
                    </Grid>   
                    <div className='text-center'>
                <Button 
                                onClick={postData} 
                                disabled={!isValid}
                    className='mt-5 ms-5 py-4 text-center buttonset'
                    sx={{
                        border: 2,
                        borderBlockStyle: 'solid',
                        backgroundColor: '#8DCAC6',
                        color: 'honeydew',
                                             
                    }}>
                
                <h2> <span>Sign Up </span></h2> 
                </Button>
               </div>
                         
                </Grid>

                
                
                </Grid>
 
            </form>
                  </>
    )
}
export default ChemistSignUp