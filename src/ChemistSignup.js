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




function ChemistSignUp() {

    const navigate = useNavigate();

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
                            label="Pharamacy Name"
                            multiline
                            variant="standard"
                            className='ms-1'
                                
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
                            variant="standard" 
                            className='ms-1 mt-3'        
                                
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
                            variant="standard" 
                            className='ms-1 mt-3'        
                                
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
                            multiline
                            variant="standard" 
                            className='ms-1 mt-3'        
                                
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
                            variant="standard" 
                            className='ms-1 mt-3'        
                                
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
                            variant="standard" 
                            className='ms-1 mt-3'        
                                
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
                            variant="standard" 
                            className='ms-1 mt-3'        
                                
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
                            className='ms-1 mt-3'
                                
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
                            variant="standard" 
                            className='ms-1 mt-3'        
                                
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
                            className='ms-1 mt-3'        
                                
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
                            className='ms-1 mt-3'        
                                
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
                                
                             />
                    </Box>
                            </Grid>
                    </Grid>   
                    <div className='text-center'>
                <Button 
                    // variant="outlined"
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
        </>
    )
}
export default ChemistSignUp