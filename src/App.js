import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/material';
import { AppBar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './App.css'
import ASTITVALOGO from './Images/ASTITVALOGO.png'
import { IoMdLogIn } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import Font from 'react-font'
import Landingimg from './Images/Landingimg1.png'
import Grid from '@mui/material/Grid';


// import Toggle from 'react-toggle';
// import useMediaQuery from "react-responsive";
// import { useState, useEffect } from 'react';


//  darl mode start //
// const setDark = () => {

//     localStorage.setItem("theme", "dark");
  

//     document.documentElement.setAttribute("data-theme", "dark");
//   };
  
//   const setLight = () => {
//     localStorage.setItem("theme", "light");
//     document.documentElement.setAttribute("data-theme", "light");
// };
  
//   const storedTheme = localStorage.getItem("theme");
  
//   const prefersDark =
//     window.matchMedia &&
//     window.matchMedia("(prefers-color-scheme: dark)").matches;
  
//   const defaultDark =
//     storedTheme === "dark" || (storedTheme === null && prefersDark);
  
//   if (defaultDark) {
//     setDark();
//   }
  

//   const toggleTheme = (e) => {
//     if (e.target.checked) {
//       setDark();
//     } else {
//       setLight();
//     }
//   };
 //  darl mode end // 

 

function App() {

    const navigate = useNavigate();

  

    return (
        <>
            <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >

            <div className='context'>
            <div id='Landingnav'>
        <Box  >
                <AppBar   position="static" sx={{backgroundColor: '#8DCAC6 '}} className='container-fluid '>
                    <Typography variant="h2"  className='text-center mt-2 SetTextColor' >
                         WELCOME TO ASTITVA
                    </Typography>
                     
                        <span  className='text-end' >
                        <a href='#AboutUs' className='text-end h3 AboutUs'>
                            ABOUT US
                            </a>
                            <a href='#ContactUs' className='text-end h3 ms-5 ContactUs'>
                            CONTACT US
                        </a>
                        </span>

                        {/* <div>
                            <a href="#" onClick={this.logout()}>LOGOUT</a>
                            </div> */}
              
              
              
             
                   
                    {/* <div className="toggle-theme-wrapper d-flex justify-content-end">
                        <span>☀️</span>
                        <label className="toggle-theme" htmlFor="checkbox">
                            <input
                            type="checkbox"
                            id="checkbox"
                            onChange={toggleTheme}
                            defaultChecked={defaultDark}
                            />
                            <div className="slider round"></div>
                        </label>
                        <span>🌒</span>
                        </div> */}
                </AppBar>
            </Box>
        </div>
             
            <div id='MainContent'>
                   
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
                    borderColor: 'honeydew',
                    color: 'honeydew'

                }}
                onClick={() => navigate("/login")}
            >
                
                <b
                    className='h2'>
                    LOGIN
                    <IoMdLogIn className='ms-3 setIconColor'/>
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
                        borderColor: 'honeydew',
                        color: 'honeydew'
                     
                    }}>
            <h2>New Chemist Sign-Up</h2> 
            </Button>
               </div>
                </div>
                
            <div id='AboutUs' className='mt-5' >


                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4} className=' ms-2 text-center'>
                    {/* <Box 
                component="img"
                sx={{
                    height: 900,
                    width: 700,
                    maxHeight: { xs: 233, md: 267 },
                    maxWidth: { xs: 350, md: 550 },
                    }}
                alt="The house from the offer."
                src={Landingimg}
                className='mt-5 ms-5'
        />              */}
                    </Grid>
                    
                    <Grid item xs={7} className=' ms-2 text-center'>
                            <Font family='Ultra'>
                            <p className='h1'>
                            WELCOME 
                            </p>
                            <p className='h1 text-center'>
                            TO 
                            </p>
                            <p className='h1 text-center'>
                            ASTITVA 
                        </p>
                        </Font>
                        <p className='mt-5 h5'>
                        It’s our goal to create a comfortable, safe environment, where we’ll work to achieve the goal together.

                           ASTITVA is one of India’s most trusted pharmacies, dispensing quality medicines at reasonable prices
                            to over 7 million happy customers – PAN India. At ASTITVA, we help you look after your
                            own health effortlessly as well as take care of loved ones wherever they may reside in India.
                            You can buy and send medicines from any corner of the country - with just a few clicks of the mouse.
                        </p>
                        </Grid>
               </Grid>
                
                
                
            </div>
          
            <div id='ContactUs' className='mt-5'>
                    <h1 className='display-1'>
                        CONTACT US
                   </h1>
            </div>

            </div>

       
        </>
)

}

export default App;