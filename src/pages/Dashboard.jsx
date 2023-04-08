import React from 'react'
import { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import Companies from '../components/Companies';
import RaP from '../components/RaP';
import EditCompanies from '../components/EditCompanies';
const Dashboard = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  
  return (
    <div >
        <div className=' flex gap-4 flex-col items-center p-2l'>
          <div className=' flex justify-between items-center p-2 flex-col'>
          <button className=' ease-out duration-300 hover:bg-gray-950 active:bg-white active:text-black bg-slate-600 p-2 font-bold text-white w-50 rounded-md' onClick={() => loginWithRedirect()}>Login</button>
          <button className=' ease-out duration-300 hover:bg-gray-950 active:bg-white active:text-black bg-slate-600 p-2 font-bold text-white w-50 rounded-md' onClick={() => logout()}>Logout</button>
        </div>
          {isAuthenticated &&
            <>
              <h1 className=' text-2xl font-bold text-center'>Admin Dashboard</h1>   
              <div className=' flex flex-wrap gap-4'>    
              <Companies />
              <EditCompanies />
              <RaP />   
              </div>
            </>
      }
        </div>
    </div>
  )
}

export default Dashboard