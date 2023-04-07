import React from 'react'
import { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react';


const RaP = () => {
    const { getAccessTokenSilently,logout } = useAuth0();

    const [region, setRegion] = React.useState(null);
    const [profession, setProfession] = React.useState(null);
  
    const handleSubmitRegions = async () => {
      try{
      const token = await getAccessTokenSilently();
      const response = await fetch('https://intern-app-u7zql.ondigitalocean.app/api/regions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(
          {"name": region}
          ),
      });
  
      // clear
      setRegion(null);
  
      }
      catch (error) {
        console.log(error.message);
      }
    };
    
    const handleSubmitProfessions = async () => {
      try{
      const token = await getAccessTokenSilently();
      const response = await fetch('https://intern-app-u7zql.ondigitalocean.app/api/professions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(
          {"name": profession}
          ),
      });
      //clear
      setProfession(null);
      }catch (error) {
        console.log(error.message);
      }
    };

  return (
    <div >
        {/* # Add Regions and Professions  */}
        <h1 className=' text-2xl m-2'>Add new Regions and Professions</h1>
        <div className=' bg-slate-200 p-3 m-3 flex flex-col rounded-md gap-4 w-80'>
          <h1 className=' text-lg m-2 '>Add new Regions and Professions</h1>
          <div className=' gap-2 flex'>
            <input type="text" placeholder='Region' className=' border-2 border-none outline-none  p-2 rounded-md bg-slate-100' onChange={(e) => setRegion(e.target.value)} />
            <button className=' ease-out duration-300 hover:bg-gray-950 active:bg-white active:text-black bg-slate-600 p-2 font-bold text-white w-50 rounded-md' onClick={handleSubmitRegions}>Add</button>
          </div>

          <div className='gap-2 flex '>
            <input type="text" placeholder='Profession' className=' border-2 border-none outline-none  p-2 rounded-md bg-slate-100' onChange={(e) => setProfession(e.target.value)} />
            <button className=' ease-in-out duration-300 hover:bg-gray-950 active:bg-white active:text-black bg-slate-600 p-2 font-bold text-white w-50 rounded-md' onClick={handleSubmitProfessions}>Add</button>
          </div>
        </div>
            <h1 className=' text-2xl m-2'>Edit and delete Regions </h1>
        {/* # table to edit and delete regions */}
        <div className=' bg-slate-200 p-3 m-3 flex flex-col rounded-md gap-4 w-80'>
            <h1 className=' text-lg '>Regions</h1>
            <table className=' border-2 border-none outline-none  p-2 rounded-md bg-slate-100'>
                <thead>
                    <tr>
                        <th>Region</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='p-2'><p className=' text-center bg-slate-300 rounded-md p-1 text-lg'>Region1</p></td>
                        <td className=' p-2 flex gap-2'>
                            <button className=' ease-in-out duration-300 hover:bg-gray-950 active:bg-white active:text-black bg-slate-600 p-2 font-bold text-white  rounded-md'>Edit</button>
                            <button className=' ease-in-out duration-300 hover:bg-gray-950 active:bg-white active:text-black bg-slate-600 p-2 font-bold text-white  rounded-md'>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>

            {/* # table to edit and delete professions */}

            <h1 className=' text-2xl m-2'>Edit and Delete Professions</h1>

            <div className=' bg-slate-200 p-3 m-3 flex flex-col rounded-md gap-4 w-80'>
            <h1 className=' text-lg '>Professions</h1>
            <table className=' border-2 border-none outline-none  p-2 rounded-md bg-slate-100'>
                <thead>
                    <tr>
                        <th>Profession</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='p-2'><p className=' text-center bg-slate-300 rounded-md p-1 text-lg'>Profession1</p></td>
                        <td className=' p-2 flex gap-2'>
                            <button className=' ease-in-out duration-300 hover:bg-gray-950 active:bg-white active:text-black bg-slate-600 p-2 font-bold text-white  rounded-md'>Edit</button>
                            <button className=' ease-in-out duration-300 hover:bg-gray-950 active:bg-white active:text-black bg-slate-600 p-2 font-bold text-white  rounded-md'>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
    </div>
  )
}

export default RaP