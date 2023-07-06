import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/material';
import { AppBar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'; 
import MainLogo from '../Images/MainLogo.png'
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MessageIcon from '@mui/icons-material/Message';
import Moment from 'react-moment';







function ChemistEnquiry() {
    
    const [APIData, setAPIData] = useState([]);
    // const navigate = useNavigate();


    const getData = () => {
        
        axios.get(`http://localhost:4000/chemistenquiry`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const [enqId, setId] = useState("");
    const [Enquirystatus, setStatuschange] = useState("");

    const navigate = useNavigate();

    const updateAPIData = () => {



        axios.put(`http://localhost:4000/chemistenquiry/${enqId}`, 
            {
             
                Enquirystatus
            
            }).then(() => {
            alert("sent Successfully")
            navigate('/operator')
        })
    }

    
 
    const [MessageBox, setMessageBox] = useState(false)

    return (
        <>
           

            <div>

           
            <button
                onClick={getData}
                className='btn mt-5 ms-5'
                style={{backgroundColor:'#8DCAC6'}}
            >
              get data
                            
            </button>
                            
            </div>

            <div >
            {MessageBox && (
                    <div className=' ms-5 d-flex justify-content-end '>

                        <label>
                            Id <input type='text'/>
                        </label><br/><br/><br/>
                        
                        <textarea rows="4" cols="50" />
                        
                        <button>
                            
                            Send
                            
                        </button>
                        
                </div>

            )}

            </div>

            
            <div className=' ms-5 d-flex justify-content-end '>

                <button className='btn' id='setmsgbox' onClick={() => setMessageBox(!MessageBox)}>
                    
                    <MessageIcon id='setbutton'/>
                    
                </button>
                
            </div>

           

            
            
             <TableContainer component={Paper} className='container mt-5'>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                        <TableRow> 
                            
                  
                            <TableCell align="center">set</TableCell>
                            
                            <TableCell align="center">ID</TableCell>
                            
                            <TableCell align="center">Product Name</TableCell>
                            
                            <TableCell align="center">Product Quantity</TableCell>
                            
                            <TableCell align="center">Product Photo</TableCell>

                            <TableCell align="center">Product Enquiry Date</TableCell>

                            <TableCell align="center">Status</TableCell>
                            {/* <TableCell align="center">
                               ID <input type='number' onChange={e => setId(e.target.value)} />
                            </TableCell> */}
                                    </TableRow>
                                </TableHead>  
                        <TableBody>
                                        {APIData.map((APIData) => (
                                          
                                    <TableRow
                                    
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                
                                                <TableCell
                                                      align="center"
                                                      key={APIData.enqId}
                                                  
                                                  >
                                                   
                                                         <input type='checkbox' value={APIData.enq_product_id} onClick={e => setId(e.target.value)} />
                                                    
                                                   
                                                      
                                                  </TableCell>
                                                  <TableCell
                                                      align="center"
                                                      key={APIData.enqId}
                                                  
                                                  >
                                                      {APIData.enq_product_id}
                                                   
                                                      
                                                  </TableCell>
                                                  <TableCell
                                                      align="center"
                                                        
                                                  >
                                                              
                                                        {APIData.enq_product_name}
                                                      
                                                  </TableCell>
                                                  <TableCell
                                                      align="center"
                                                        
                                                >
                                                           {APIData.enq_product_quantity}
                                                           
                                                </TableCell>
                                                <TableCell
                                                      align="center"
                                                        
                                                >
                                                           {APIData.enq_product_photo}
                                                           
                                                </TableCell>
                                                <TableCell
                                                      align="center"
                                                        
                                                >
                                                    <Moment format="DD/MM/YYYY">
                                                        {APIData.enq_product_date}
                                                    </Moment>
                                                           
                                                           
                                                </TableCell>
                                                <TableCell
                                                      align="center"
                                                     
                                                >
                                                    <select 
                                                        className='ms-5'
                                                        onChange={(e) => setStatuschange(e.target.value)} value={Enquirystatus}
                                                        key={Enquirystatus.enqId}
                                                     >
                                        
     
                                                        <option className='disabled' selected disabled on>
                                                            
                                                            Status
                                                            
                                                        </option>
                                                        
                                                        <option>
                                                            
                                                            Availabel
                                                            
                                                        </option>
                                                        <option>
                                                        Not Availabel
                                                            
                                                        </option>
                                                        
                                        
                                                        
                                                    </select><br />
                                                    
                                                           
                                                </TableCell>

                                                <TableCell
                                                      align="center"
                                                        
                                                >
                                                    <button
                                                        // onClick={updateAPIData}
                                                    onClick={() => updateAPIData(Enquirystatus.enqId)}>
                                                        Send
                                                    </button>
                                                           
                                                </TableCell>

                                    </TableRow>

                                    
                                    
                                 ))} 
                                </TableBody>
                            </Table>
            </TableContainer>
            


        </>
    )
}

export default ChemistEnquiry