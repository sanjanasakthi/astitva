import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './LoginPage';
import ChemistSignUp from './ChemistSignup';
import Fetchtable from './LoginFetch';
import FetchtableId from './Loginfetchid';
import Operator from './Operator';
import Admin from './Admin';
import Chemist from './Chemist';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
  {/* <Tryit/> */}
    <BrowserRouter>
      {/* <Operator/> */}
      <Routes>
      <Route path='/' element={<App/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<ChemistSignUp />} />
        <Route path='/fetchtable' element={<Fetchtable />} />
        <Route path='/fetchtableid' element={<FetchtableId />} />
        <Route path='/operator' element={<Operator/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/chemist' element={<Chemist/>} />

        

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

