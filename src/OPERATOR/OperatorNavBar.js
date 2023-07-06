// import * as React from "react";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import MenuItem from "@mui/material/MenuItem";
// import Image from "./Images/MainLogo.png";
// // import { Menu } from "@styled-icons/boxicons-regular/Menu";
// // import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
// import styled from "styled-components";
// import { useState } from "react";
// import { CloseOutlined } from "@mui/icons-material";
// import { Menu } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import "./NavBar.css"

// const pages = ["VERIFICATION", "ADD CHEMIST", "ENQUIRY"];

// const CloseIcon = styled(CloseOutlined)`
//   width: 40px;
//   height: 40px;
//   color: #8DCAC6;
// `;

// const MenuIcon = styled(Menu)`
//   width: 40px;
//   height: 40px;
//   color: #8DCAC6;
// `;

// const NavigationBar = () => {
//   const [open, setOpen] = useState(false);
//   const [active, setActive] = useState(0);

//     const navigate = useNavigate();
//   const handleMenu = () => {
//     setOpen(!open);
//   };

//   return (
//     <Box
//       sx={{
//         background: "#FFFFFF",
//       }}
//     >
//       <Box
//         sx={{
//           background: "#FFFFFF",
//           margin: "auto",
//           width: "80%",
//           display: { xs: "none", md: "flex" },
//           justifyContent: "space-between",
//           alignItems: "center",
//           position: "absolute",
//         //   top: "50px",
//           right: "50px",
//           left: "50px",
//           zIndex: "2",
//         }}
//       >
//         <Box >
//           <Box sx={{ margin: "0 0.75em" }} className='btn'>
//             <img src={Image} width={100} height={100} alt={""} onClick={() => navigate("/")} className="Loginavatar"/>
//           </Box>
//           <Box
//             sx={{
//               display: { xs: "none", md: "flex" },
//               flexDirection: "row",
//               alignItems: "center",
//             }}
//           >
//             <Typography
//               sx={{
//                 fontSize: "1.5rem",
//                 color: "#8DCAC6",
//                 fontWeight: "700",
//               }}
//             >
//              WELCOME &nbsp;
//             </Typography>
//             <Typography
//               sx={{
//                 fontSize: "1.5rem",
//                 color: "#8DCAC6",
//                 fontWeight: "700",
//               }}
//             >
//               OPERATOR
//             </Typography>
//           </Box>
//         </Box>
//         <Box sx={{ display: { xs: "none", md: "flex" } }}>
//           {pages.map((page, index) => (
//             <MenuItem href="#contact" key={page}>
//               <Typography
//                 sx={{
//                   color: "black",
//                   fontWeight: "700",
//                   display: "flex",
//                   justifyContent: "space-evenly",
//                   margin: "0 1.5em",
//                   borderBottom: active === index ? "5px solid #8DCAC6" : "none",
//                   alignItems: "center",
//                   textDecoration: "none",
//                   cursor: "context-menu",
//                 }}
//                 onClick={() => {
//                   setActive(index);
//                 }}
//               >
//                 {page}
//               </Typography>
//             </MenuItem>
//           ))}
//         </Box>
//         <Box>
          
//         </Box>
//       </Box>
//       <Box
//         sx={{
//           background: "#FFFFFF",
//           display: { xs: "flex", md: " none" },
//           justifyContent: "space-between",
//           alignItems: "center",
//           margin: "0.5em",
//         }}
//       >
//         <Box
//           sx={{
//             display: { xs: "flex", md: " none" },
//             alignItems: "center",
//           }}
//         >
//           <Box sx={{ margin: "0.25em" }} className='btn'>
//                       <img src={Image} width={100} height={100} alt={""} onClick={() => navigate("/")} className="Loginavatar" />
//                       <h1 style={{color:'#8DCAC6'}}>WELCOME OPERATOR</h1>
//           </Box>
         
//         </Box>
//         <Box>
//           <Box>
//             {open ? (
//               <Box>
//                 <CloseIcon onClick={handleMenu} />
//               </Box>
//             ) : (
//               <MenuIcon onClick={handleMenu} />
//             )}
//           </Box>
//         </Box>
//       </Box>
//       {open ? (
//         <Box>
//           <Box
//             sx={{
//               background: "honeydew",
//               color: "#8DCAC6",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//               padding: "1em",
//             }}
//           >
//             {pages.map((page, index) => (
//               <MenuItem key={page} onClick={handleMenu} href="/">
//                 <Typography
//                   sx={{
//                     textDecoration: "none",
//                     fontWeight: "700",
//                     display: "flex",
//                     margin: "auto",
//                     flexDirection: "column",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     borderBottom:
//                       active === index ? "5px solid #8DCAC6" : "none",
//                   }}
//                   onClick={() => {
//                     setActive(index);
//                   }}
//                 >
//                   {page}
//                 </Typography>
//               </MenuItem>
//             ))}
            
//           </Box>
//         </Box>
//       ) : (
//         ""
//       )}
//     </Box>
//   );
// };
// export default NavigationBar;


import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Image from "../Images/MainLogo.png";
// import { Menu } from "@styled-icons/boxicons-regular/Menu";
// import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import styled from "styled-components";
import { useState } from "react";
import { CloseOutlined } from "@mui/icons-material";
import { Menu } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "./OperatorNavBar.css"
import LogoutIcon from '@mui/icons-material/Logout';


// const pages = ["VERIFICATION", "ADD CHEMIST", "ENQUIRY"];

const CloseIcon = styled(CloseOutlined)`
  width: 40px;
  height: 40px;
  color: #8DCAC6;
`;

const MenuIcon = styled(Menu)`
  width: 40px;
  height: 40px;
  color: #8DCAC6;
`;

const OperatorNavigationBar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const navigate = useNavigate();
  
  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        background: "honeydew",
        
      }}
    >
      <Box
        sx={{
           width: "100%",
          display: { xs: "none", md: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          // zIndex: "2",
        }}
      >
        <Box >
          <Box sx={{ margin: "0 0.75em" }} className='btn d-flex justify-content-center'>
            <img src={Image} width={100} height={100} alt={""} onClick={() => navigate("/")} className="Loginavatar" />
            <h1 className="mt-5 ms-1" style={{color:"#8DCAC6"}}>
            WELCOME &nbsp; OPERATOR
            </h1>
          </Box>
          {/* <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.5rem",
                color: "#8DCAC6",
                fontWeight: "700",
              }}
            >
             WELCOME &nbsp;
            </Typography>
            <Typography
              sx={{
                fontSize: "1.5rem",
                color: "#8DCAC6",
                fontWeight: "700",
              }}
            >
              OPERATOR
            </Typography>
          </Box> */}
        </Box>
        {/* <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {pages.map((page, index) => (
            <MenuItem href="#contact" key={page}>
              <Typography
                sx={{
                  color: "black",
                  fontWeight: "700",
                  display: "flex",
                  justifyContent: "space-evenly",
                  margin: "0 1.5em",
                  borderBottom: active === index ? "5px solid #8DCAC6" : "none",
                  alignItems: "center",
                  textDecoration: "none",
                  cursor: "context-menu",
                }}
                onClick={() => {
                  setActive(index);
                }}
              >
                {page}
              </Typography>
            </MenuItem>
          ))}
        </Box> */}

        <a href="#ViewChemistDetails">
          VERIFICATION
        </a>

        <a href="#AddChemistDetails">
          ADD CHEMIST
        </a>

        <a href="#ChemistEnquiry">
          INQUIRY
        </a>
        
        <Box>
        <button onClick={() => navigate("/login")} className='btn'>
                                            <span>
                                                LOGOUT <LogoutIcon/>
                                           </span>
                                           </button>
        </Box>
      </Box>
      <Box
        sx={{
          background: "honeydew",
          display: { xs: "flex", md: " none" },
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0.5em",
        }}
      >
        <Box
          sx={{
            display: { xs: "flex", md: " none" },
            alignItems: "center",
          }}
        >
          <Box
            // sx={{ margin: "0.25em" }}
            >
                      <img src={Image} width={100} height={100} alt={""} onClick={() => navigate("/")} className="Loginavatar" />
                      <h1 style={{color:'#8DCAC6'}}>WELCOME OPERATOR</h1>
          </Box>
         
        </Box>
        <Box>
          <Box>
            {open ? (
              <Box>
                <CloseIcon onClick={handleMenu} />
              </Box>
            ) : (
              <MenuIcon onClick={handleMenu} />
            )}
          </Box>
        </Box>
      </Box>
      {open ? (
        <Box>
          <Box
            sx={{
              background: "honeydew",
              color: "#8DCAC6",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "1em",
            }}
          >
            {/* {pages.map((page, index) => (
              <MenuItem key={page} onClick={handleMenu} href="/">
                <Typography
                  sx={{
                    textDecoration: "none",
                    fontWeight: "700",
                    display: "flex",
                    margin: "auto",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottom:
                      active === index ? "5px solid #8DCAC6" : "none",
                  }}
                  onClick={() => {
                    setActive(index);
                  }}
                >
                  {page}
                </Typography>
              </MenuItem>
            ))} */}
            
            <a href="#ViewChemistDetails">
          VERIFICATION
        </a>

        <a  href="#AddChemistDetails">
          ADD CHEMIST
        </a>

        <a href="#ChemistEnquiry">
          INQUIRY
        </a>
            
        <Box>
        <button onClick={() => navigate("/login")} className='btn'>
                                            <span>
                                                LOGOUT <LogoutIcon/>
                                           </span>
                                           </button>
        </Box>
          </Box>
          
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};
export default OperatorNavigationBar;