import React from 'react'
import './AddOthers.css'
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';

const AddOthers = () => {
  
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



  // const handleSubmitRegions = async () => {

  //   const response = await fetch('http://localhost:3000/regions', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(
  //       {"name": region}
  //       ),
  //   });
        
  //   console.log("sent successfully to the server")
  //   const data = await response.json();
  //   console.log(data);

  //   // set none
  //   setRegion(null);
 
  // };

  // const handleSubmitProfessions = async () => {
  //   const response = await fetch('http://localhost:3000/professions', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(
  //       {"name": profession}
  //       ),
  //   });

  //   console.log("sent successfully to the server")
  //   const data = await response.json();
  //   console.log(data);

  //   // set none
  //   setProfession(null);
  // };

  return (
    <div className='AddOthers'>
      <h1>Add Regions and Professions</h1>
      <div className="region">
      <input
        type="text"
        placeholder="Region"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
      />
      <button onClick={handleSubmitRegions}>Add Region</button>
    </div>

    <div className="profession1">
      <input
        type="text"
        placeholder="Profession"
        value={profession}
        onChange={(e) => setProfession(e.target.value)}
      />
      <button onClick={handleSubmitProfessions}>Add Profession</button>
    </div>
    </div>
  )
}

export default AddOthers