import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Dashboard from './components/Dashboard';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';

import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from "./contexts/AuthContext"

import './stylesheets/main.scss';



function App ()
{
  return (
    <div className='App'>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
           
            <Route exact path='/' element={ <PrivateRoute /> }>
              <Route exact path='/' element={ <Dashboard /> } />
            </Route>
            <Route path='/' element={ <PrivateRoute /> }>
              <Route path='update-profile' element={ <UpdateProfile /> } />
            </Route> 



            <Route path='signup' element={ <SignUp /> } />
            <Route path='signin' element={ <SignIn /> } />
            <Route path="forgot-password" element={ <ForgotPassword /> } />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App;

