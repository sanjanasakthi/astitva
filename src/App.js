import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/material';
import { AppBar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './App.css'
import ASTITVALOGO from './Images/ASTITVALOGO.png'
import { IoMdLogIn } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';


function App() {

    const navigate = useNavigate();


    return (
        <>
            <Box>
                <AppBar position="static" sx={{backgroundColor: '#8DCAC6 '}} className='mt-2'>
                    <Typography variant="h2"  className='text-center mt-2 SetTextColor'>
                         WELCOME TO
                    </Typography>
                </AppBar>
            </Box>

            <Box 
                component="img"
                sx={{
                    height: 333,
                    width: 550,
                    maxHeight: { xs: 233, md: 267 },
                    maxWidth: { xs: 350, md: 550 },
                    }}
                alt="The house from the offer."
                src={ASTITVALOGO}
                className='mt-5 ms-5'
            />
            <Button
                
                className='mt-5 ms-5'
                id='SetLoginBtnHov'
                sx={{
                    border: 2,
                    borderBlockStyle: 'solid',
                    borderColor: '#8DCAC6',
                    color: '#8DCAC6'

                }}
                onClick={() => navigate("/login")}
            >
                
                <b
                    className='h2'>
                    LOGIN
                    <IoMdLogIn className='ms-3'/>
                </b>  

            </Button>

            <div className='mt-5 text-end me-5'>
            <Button
                variant="outlined"
                    className='mt-5'
                    id='SetLoginBtnHov'
                    onClick={() => navigate("/sign-up")}
                    sx={{
                        border: 2,
                        borderBlockStyle: 'solid',
                        borderColor: '#8DCAC6',
                        color: '#8DCAC6'
                     
                    }}>
            <h2>New Chemist Sign-Up</h2> 
            </Button>
               </div>
            

        
      
            

        </>
)

}

export default App;