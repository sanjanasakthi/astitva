const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'connection',
  password: 'avantnet',
  port: 5433,
});

const getUsers = (request, response) => {
  pool.query('SELECT * FROM userlogin  ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getChemistdetails = (request, response) => {
  pool.query('SELECT * FROM  astitvasignup ', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getApproveChemistdetails = (request, response) => {

  const name = "Approved"
  pool.query('SELECT * FROM  astitvasignup WHERE status = $1 ', [name],(error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};


// const getApproveChemistdetailsById = (request, response) => {
//   const id = parseInt(request.params.id);

//   const name = "Approved"
//   pool.query('SELECT * FROM  astitvasignup WHERE status = $1  AND chemistid =$2', [name] [id],(error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).json(results.rows);
//   });
// };


const getNewChemistdetails = (request, response) => {

  const name = "New"

  pool.query('SELECT * FROM  astitvasignup  WHERE status = $1 ',[name], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getChemistdetailsById = (request, response) => {
  const id = parseInt(request.params.id);
 
   pool.query('SELECT * FROM  astitvasignup WHERE chemistid = $1', [id], (error, results) => {
     if (error) {
       throw error;
     }
     response.status(200).json(results.rows);
   });
 };

const getOperatorData = (request, response) => {
  pool.query('SELECT * FROM operatordetails  ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};





const getUserById = (request, response) => {
 const id = parseInt(request.params.id);

  pool.query('SELECT * FROM  userlogin WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};


const getOperatorDateById = (request, response) => {
  const id = parseInt(request.params.id);
 
   pool.query('SELECT * FROM  operatordetails WHERE id = $1', [id], (error, results) => {
     if (error) {
       throw error;
     }
     response.status(200).json(results.rows);
   });
};
 
const getChemsitenquiry = (request, response) => {

  const query = "SELECT * FROM chemist_enquiry   ORDER BY enq_product_id ASC  ";

  // const query = "SELECT enq_product_id, enq_product_name , enq_product_quantity, enq_product_photo, enq_status,  to_char(enq_product_date, 'DD/MM/YYYY') AS Productdate FROM chemist_enquiry";

  pool.query(query, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};




const createUser = (request, response) => {
  const {email, loginpassword, usertype, name } = request.body;

  pool.query(
    'INSERT INTO userlogin ( email, loginpassword, usertype, name) VALUES ($1, $2, $3, $4) RETURNING *',
    [email, loginpassword, usertype, name],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};



const Enquiry_status = (request, response) => {
  const enqId = parseInt(request.params.id);
    const { Enquirystatus } = request.body;

  pool.query(
    'UPDATE chemist_enquiry SET enq_status = $1 where  enq_product_id = $2 ',
    [Enquirystatus, enqId],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${enqId}`);
      console.log(Enquirystatus , enqId)
    }
  );
};

const New_Enquiry_status = (request, response) => {
  const NewenqId = parseInt(request.params.id);
    const { New_Enquirystatus } = request.body;

  pool.query(
    'UPDATE newchemist SET status = $1 where  newchemistid = $2 ',
    [New_Enquirystatus, NewenqId],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${NewenqId}`);
      console.log(New_Enquirystatus , NewenqId)
    }
  );
};

const chemist_status = (request, response) => {
  const { statusset, idset } = request.body;
  

  pool.query(
    'select chemist_status ($1, $2)',
    [statusset, idset],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Chemist Registration successfully completed,shortly we contact you...`);
    }
  );
};


const EnquiryProcess = (request, response) => {
  const {ProductName, ProductQuantity, ProductPhoto } = request.body;

  pool.query(
    'INSERT INTO chemist_enquiry ( enq_product_name, enq_product_quantity, enq_product_photo, enq_product_date ) VALUES ($1, $2, $3, current_date) RETURNING *',
    [ProductName, ProductQuantity, ProductPhoto],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};


const createOperator = (request, response) => {
  const {firstname, lastname, dob, mobnum, operatoremail, doj } = request.body;

  pool.query(
    'INSERT INTO operatordetails ( first_name, last_name, date_of_birth, mob_num, email, date_of_joining) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [firstname, lastname, dob, mobnum, operatoremail, doj],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};


const Chemistsignup = (request, response) => {
  const {pharmacyname, firstname,lastname,doornum,street,area,city,pincode,states_chemist,mobilenumber, email, druglicencenum,chemistphoto,chemistlicencephoto} = request.body;

  pool.query(
    'select Chemistsignup($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13, $14)',
    [pharmacyname, firstname,lastname,doornum,street,area,city,pincode,states_chemist,mobilenumber, email, druglicencenum,chemistphoto,chemistlicencephoto],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Chemist Registration successfully completed,shortly we contact you...`);
    }
  );
};



// const ChemistSignup = (request, response) => {
//   const {pharmacyname, firstname,lastname,doornum,street,area,city,pincode,state,mobilenumber, email, druglicencenum,chemistphoto,chemistlicencephoto } = request.body;

//   pool.query(
    
//     'INSERT INTO astitvasignup ( pharmacyname, firstname,lastname,doornum,street,area,city, pincode,state,mobilenumber,email,druglicencenum,chemistphoto,chemistlicencephoto) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *',
//     [pharmacyname,firstname,lastname,doornum,street,area,city,pincode,state,mobilenumber,email,druglicencenum,chemistphoto,chemistlicencephoto],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       response.status(201).send(`User added with ID: ${results.rows[0].id}`);
//     }
//   );
// };

// const NewChemistSignup = (request, response) => {
//   const {pharmacyname, firstname,lastname,doornum,street,area,city,pincode,state,mobilenumber, email, druglicencenum,chemistphoto,chemistlicencephoto } = request.body;

//   pool.query(
    
//     'INSERT INTO newchemist ( newpharmacyname, newfirstname,newlastname,newdoornum,newstreet,newarea,newcity, newpincode,newstate,newmobilenum,newemail,newdruglicencenum,newchemistphoto,newchemistlicencephoto) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *',
//     [pharmacyname,firstname,lastname,doornum,street,area,city,pincode,state,mobilenumber,email,druglicencenum,chemistphoto,chemistlicencephoto],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       response.status(201).send(`User added with ID: ${results.rows[0].id}`);
//     }
//   );
// };

// const updateChemist = (request, response) => {
//   const id = parseInt(request.params.id);
//     const { Statuschange } = request.body;

//   pool.query(
//     'UPDATE astitvasignup SET status= $1 where  chemistid=$2 ', 
//     [Statuschange, id],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       response.status(200).send(`User modified with ID: ${id}`);
//       console.log(Statuschange,id)
//     }
//   );
// };


const updateChemist = (request, response) => {
  const enqid = parseInt(request.params.id);
 
const acceptquery = `
     UPDATE astitvasignup
     SET status = 'Approved'
     WHERE chemistid = $1`;

     pool.query(acceptquery, [enqid], (error, results) => {
       if (error) {
         throw error;
       }
       response.status(200).send(`User modified with ID: ${enqid}`);
     })
   };



// const approveChemist = (request, response) => {
//   const putid = parseInt(request.params.putid);
//   // const { Statusupdate } = request.body 
//   const Statusupdate = 'Approved'

//   pool.query(
//     'UPDATE astitvasignup SET status= $1 where  chemistid=$2', 
  
//     [Statusupdate, putid],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       response.status(200).send(`User modified with ID: ${putid}`);
//       console.log(Statusupdate)
//     }
//   );
// };




const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM userlogin WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  Chemistsignup,
  EnquiryProcess,
  chemist_status,
  updateChemist,
  deleteUser,
  createOperator,
  getOperatorData,
  getOperatorDateById,
  getChemistdetails,
  getChemistdetailsById,
  getChemsitenquiry,
  getNewChemistdetails,
  getApproveChemistdetails,
  New_Enquiry_status,
  Enquiry_status,
  // approveChemist,
  
};
