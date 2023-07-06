const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 4000;

const db = require('./queries');

app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});







// chemist

app.get('/astitvasignup', db.getChemistdetails);
app.get('/chemistenquiry', db.getChemsitenquiry);
app.get('/astitvasignup1', db.getApproveChemistdetails);
// app.get('/astitvasignup1/:id', db.getApproveChemistdetailsById);
app.post('/astitvasignup', db.Chemistsignup);
app.post('/chemist_enquiry', db.EnquiryProcess);
app.get('/astitvasignup/:id', db.getChemistdetailsById);





// operator
app.get('/operatordetails', db.getOperatorData);
app.get('/operatordetails/:id', db.getOperatorDateById);
app.post('/operatordetails', db.createOperator);
app.put('/chemist_enquiry/:id', db.Enquiry_status);
app.put('/chemist_status/:id', db.chemist_status);
app.get('/newchemist', db.getNewChemistdetails);
// app.put('/astitvasignup/:id', db.approveChemist);





// login
app.get('/userlogin', db.getUsers);
app.get('/userlogin/:id', db.getUserById);
app.post('/userlogin', db.createUser);




app.put('/astitvasignup/:id', db.updateChemist);




app.delete('/userlogin/:id', db.deleteUser);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
