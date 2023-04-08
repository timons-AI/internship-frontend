import React from 'react'
import { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react';


const RaP = () => {
    const { getAccessTokenSilently,logout } = useAuth0();

    const [region, setRegion] = React.useState(null);
    const [profession, setProfession] = React.useState(null);
  
    const handleSubmitRegions = async () => {
      // confirm that the user wants to add the region
      if (window.confirm(`Are you sure you want to add ${region} as a region?`)) {

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
    }
    };
    
    const handleSubmitProfessions = async () => {
      // confirm that the user wants to add the profession
      if (window.confirm(`Are you sure you want to add ${profession} as a profession?`)) {

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
    }
    };

    const [regions, setRegions] = useState([]);
    const [professions, setProfessions] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
      const fetchRegions = async () => {
        try {
          const response = await fetch('https://intern-app-u7zql.ondigitalocean.app/api/regions');
          const data = await response.json();
          setRegions(data.regions);
        
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      const fetchProfessions = async () => {
        try {
          const response = await fetch('https://intern-app-u7zql.ondigitalocean.app/api/professions');
          const data = await response.json();
          setProfessions(data.professions);
        
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchRegions();
      fetchProfessions();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
    
    if (error) {
      return <div>{error}</div>;
    }

    const DeleteRegion = async (id) => {
          // confirm that the user wants to delete the region
          if (window.confirm(`Are you sure you want to delete this region?`)) {

      try{
      const token = await getAccessTokenSilently();
      const response = await fetch(`https://intern-app-u7zql.ondigitalocean.app/api/regions/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response)
      }catch (error) {
        console.log(error.message);
      }
    };
    };

    const DeleteProfession = async (id) => {
          // confirm that the user wants to delete the profession
          if (window.confirm(`Are you sure you want to delete this profession?`)) {
      try{
      const token = await getAccessTokenSilently();
      const response = await fetch(`https://intern-app-u7zql.ondigitalocean.app/api/professions/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response)
      }catch (error) {
        console.log(error.message);
      }
    };
    };

    function EditProfession(id){
      console.log(id)
    }

    function EditRegion(id){
      console.log(id)
    }

  
  return (
    <div >
        {/* # Add Regions and Professions  */}
        <h1 className=' text-2xl m-2 text-white'>Add new Regions and Professions</h1>
        <div className=' bg-slate-200 p-3 m-3 flex flex-col rounded-md gap-4 w-80'>
          <h1 className=' text-lg m-2 '>Add new Regions and Professions</h1>
          <h1 className=' text-lg m-2 '>Regions</h1>
          <div className=' gap-2 flex'>
            <input type="text" placeholder='Region' className=' border-2 border-none outline-none  p-2 rounded-md bg-slate-100' onChange={(e) => setRegion(e.target.value)} />
            <button className=' ease-out duration-300 hover:bg-gray-950 active:bg-white active:text-black bg-slate-600 p-2 font-bold text-white w-50 rounded-md' onClick={handleSubmitRegions}>Add</button>
          </div>
          <h1 className=' text-lg m-2 '>Professions</h1>
          <div className='gap-2 flex '>
            <input type="text" placeholder='Profession' className=' border-2 border-none outline-none  p-2 rounded-md bg-slate-100' onChange={(e) => setProfession(e.target.value)} />
            <button className=' ease-in-out duration-300 hover:bg-gray-950 active:bg-white active:text-black bg-slate-600 p-2 font-bold text-white w-50 rounded-md' onClick={handleSubmitProfessions}>Add</button>
          </div>
        </div>
            <h1 className=' text-2xl m-2 text-white'>Edit and delete Regions </h1>
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
                  {regions.map((region) => (
                    <tr key={region.region_id}>
                        <td className=' p-2'>{region.name}</td>

                        <td className=' p-2 flex gap-2'>
                            <button className=' ease-in-out duration-300 hover:bg-gray-950 active:bg-white active:text-black bg-slate-600 p-2 font-bold text-white  rounded-md ' onClick={() => EditRegion(region.region_id)}>Edit</button>
                            <button className=' ease-in-out duration-300 hover:bg-gray-950 active:bg-white active:text-black bg-slate-600 p-2 font-bold text-white  rounded-md' onClick={() => DeleteRegion(region.region_id)}>Delete</button>
                        </td>
                    </tr>
                  ))}

                </tbody>
            </table>
            </div>

            {/* # table to edit and delete professions */}

            <h1 className=' text-2xl m-2 text-white'>Edit and Delete Professions</h1>

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
                  {professions.map((profession) => (

                    <tr key={profession.profession_id}>
                        <td className=' p-2'>{profession.name}</td>
                        <td className=' p-2 flex gap-2'>
                            <button className=' ease-in-out duration-300 hover:bg-gray-950 active:bg-white active:text-black bg-slate-600 p-2 font-bold text-white  rounded-md'onClick={() => EditProfession(profession.profession_id)}>Edit</button>
                            <button className=' ease-in-out duration-300 hover:bg-gray-950 active:bg-white active:text-black bg-slate-600 p-2 font-bold text-white  rounded-md' onClick={() => DeleteProfession(profession.profession_id)}>Delete</button>
                        </td>
                    </tr>
                  ))}

                </tbody>
            </table>
            </div>
    </div>
  )
}

export default RaP