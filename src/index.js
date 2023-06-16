import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './LoginPage';
import ChemistSignUp from './ChemistSignup';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <BrowserRouter>

      <Routes>
      <Route path='/' element={<App/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<ChemistSignUp/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

