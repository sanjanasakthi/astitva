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


const getUserById = (request, response) => {
 const id = parseInt(request.params.id);

  pool.query('SELECT * FROM  userlogin WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createUser = (request, response) => {
  const {email, password, usertype } = request.body;

  pool.query(
    'INSERT INTO userlogin ( email, password, usertype) VALUES ($1, $2, $3) RETURNING *',
    [email, password, usertype],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};


const ChemistSignup = (request, response) => {
  const {pharmacyname, firstname,lastname,doornum,street,area,city,pincode,state,mobilenumber, email, druglicencenum,chemistphoto,chemistlicencephoto } = request.body;

  pool.query(
    'INSERT INTO astitvasignup ( pharmacyname, firstname,lastname,doornum,street,area,city, pincode,state,mobilenumber,email,druglicencenum,chemistphoto,chemistlicencephoto) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *',
    [pharmacyname,firstname,lastname,doornum,street,area,city,pincode,state,mobilenumber,email,druglicencenum,chemistphoto,chemistlicencephoto],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};

const updateUser = (request, response) => {
  const id = parseInt(request.params.id);
  const { email, password } = request.body;

  pool.query(
    'UPDATE userlogin SET email = $1, password = $2 WHERE id = $3',
    [email, password, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

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
  ChemistSignup,
  updateUser,
  deleteUser,
};
