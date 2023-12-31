import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'; 
import { useState } from "react";
import { TextField } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import cn from 'classnames';
// import classNames from 'classnames';
// import {Multiselect} from 'selectly'


function Approve() {
    
    const navigate = useNavigate();


    // const [id, setId] = useState("");
    const [enqid, setenqid] = useState("");
    const [Statuschange, setStatuschange] = useState("");
 
    const [APIData, setAPIData] = useState([]);

 const getidData = () => {
        
        axios.get(`http://localhost:4000/newchemist`)
            .then((getidData) => {
                setAPIData(getidData.data);
            })
    }



    const updateAcceptStatus = () => {

      
       
       axios.put(`http://localhost:4000/astitvasignup/${enqid}`, 
             {
               Statuschange
              }).then(() => {
             alert("Done")
         })
 
         
    }



  
    // const updateAPIData = () => {
      

    //     axios.put(`http://localhost:4000/astitvasignup/${id}`, 
    //         {
             
    //            Statuschange
            
    //     }).then(() => {
    //         navigate('/operator')
    //     })
    // }


    // const getvalue = document.getElementById('tests').value

    // console.log(getvalue)
  


    return (
        <>
           
            <div id='approcepage'   className=' mt-5'>
                
            <div className=' mt-5 d-flex justify-content-center '>
                 
                 <p>
                     
                     </p>
                 <button
                                                                 
                     onClick={getidData}
                     className='btn display-1'
                 >
                     GET DATA
                 </button>
            </div>
            
            
            
             <TableContainer component={Paper} className=' mt-5'>
                 <Table
                     sx={{ minWidth: 650 }}
                     aria-label="simple table">
                     <TableHead id="sethead">
                         
                         <TableRow> 
                         {/* <TableCell align="center">Set</TableCell> */}
                             <TableCell align="center">ID</TableCell>
                             <TableCell align="center">Pharamacy Name</TableCell>
                             <TableCell align="center">First Name</TableCell>
                             <TableCell align="center">Last Name</TableCell>
                             <TableCell align="center">Door Number</TableCell>
                             <TableCell align="center">Street</TableCell>
                             <TableCell align="center">Area</TableCell>
                             <TableCell align="center">City</TableCell>
                             <TableCell align="center">Pincode</TableCell>
                             <TableCell align="center">State</TableCell>
                             <TableCell align="center">Mobile Number</TableCell>
                             <TableCell align="center">Druglicence Number</TableCell>
                             <TableCell align="center">Chemist Photo</TableCell>
                             <TableCell align="center">Chemist Licence Photo</TableCell>
                             <TableCell align="center">Status</TableCell>
 
                            
                         </TableRow>
                         
                     </TableHead> 
                     
                     <TableBody>
                         
                         {APIData.map((data) => {
                                           
                             return (
                                 <TableRow
                                     
                                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                 >
 
                                     <TableCell
                                         
                                         align="center"
                                         key={data.id}
                                     
                                     >
                                                    
                                         <input type='checkbox'
                                             value={data.chemistid}
                                             onClick={e => setenqid(e.target.value)}
                                            />
                                                     
                                                    
                                                       
                                                   </TableCell>
                             
                                     <TableCell
                                         align="center"
                                       
                                                       
                                     >
                                         {data.chemistid}
                      
                                     </TableCell>
 
 
                                     <TableCell
                                         align="center"
                                     >
                                      {data.pharmacyname}
                                                           
                                     </TableCell>
 
 
                                     <TableCell
                                         align="center"
                                       
                                     >
                                         {data.firstname}  
                                         
                                     </TableCell>
 
                                     <TableCell>
                                     {data.lastname} 
                                     </TableCell>
 
                                     <TableCell>
                                     {data.doornum} 
                                     </TableCell>
 
                                     <TableCell>
                                     {data.street} 
                                     </TableCell>
 
                                     <TableCell>
                                     {data.area} 
                                     </TableCell>
 
                                     <TableCell>
                                     {data.city} 
                                     </TableCell>
 
                                     <TableCell>
                                     {data.pincode} 
                                     </TableCell>
 
 
                                     <TableCell>
                                     {data.state} 
                                     </TableCell>
 
                                     <TableCell>
                                     {data.mobilenumber} 
                                     </TableCell>
 
                                     <TableCell>
                                     {data.email} 
                                     </TableCell>
 
                                     <TableCell>
                                     {data.chemistphoto} 
                                     </TableCell>
 
                                     <TableCell>
                                     {data.chemistlicencephoto} 
                                     </TableCell>
 
                                     <TableCell>
                                         
                                                 {data.status}
                                          
                                     </TableCell>
                                    
 
                                     
 
 
                                     
                                 </TableRow>
     
                             )
                                     
                                     
                         })} 
                     </TableBody>
                    
                             </Table>
             </TableContainer>
             
 
             <div className='container mt-5 d-flex justify-content-center  '>
                    <button id='setstatus' value={setStatuschange} onClick={updateAcceptStatus}>
                        
                     Approve
                    </button>

                    <button id='setstatus' className='ms-5'>
                        Reject
                     </button>
                    
                 
            </div>

            </div>

        </>
    )
}

export default Approve;






{/* <TableCell>
                                        <button onClick={() => onDelete(data.id)}>Delete</button>
                                    </TableCell> */}
    