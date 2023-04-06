import React, { useState, useEffect } from 'react';
import "./Addinfo.css";
import AddOthers from './components/AddOthers';
import { useAuth0 } from '@auth0/auth0-react';

const AddInfo = () => {
  const { getAccessTokenSilently, logout } = useAuth0();
  
  const [regions, setRegions] = useState([]);
  const [professions, setProfessions] = useState([]);
  const [selectedRegionId, setSelectedRegionId] = useState(null);
  const [selectedProfessionId, setSelectedProfessionId] = useState(null);
  const [company, setCompany] = useState(null);
  const [address, setAddress] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [description, setDescription] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleRegionSelect = (event) => {
    setSelectedRegionId(parseInt(event.target.value));
  };

  const handleProfessionSelect = (event) => {
    setSelectedProfessionId(parseInt(event.target.value));
  };

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
        console.log(data.professions)
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

  const handleSubmit = async () => {
    try{
    const token = await getAccessTokenSilently();
    const response = await fetch('https://intern-app-u7zql.ondigitalocean.app/api/setAll', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        "name": company,
        "address": address,
        "contact": email + phone,
        "description": description,
        "regions": [selectedRegionId],
        "professions": [selectedProfessionId],
      }),
    }
    );
    // clear form
    setCompany('');
    setAddress('');
    setPhone('');
    setEmail('');
    setDescription('');
    setSelectedRegionId(null);
    setSelectedProfessionId(null);

    }
    catch (error) {
      console.log(error.message);
    }
  };

  
  // const handleSubmit = async () => {
  //   const response = await fetch('http://localhost:3000/setAll', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       "name": company,
  //       "address": address,
  //       "contact": email + phone,
  //       "description": description,
  //       "regions": [selectedRegionId],
  //       "professions": [selectedProfessionId],
  //     }),
  //   });
    
  //   console.log(JSON.stringify({
  //       "name": company,
  //       "address": address,
  //       "contact": email + phone,
  //       "description": description,
  //       "regions": [selectedRegionId],
  //       "professions": [selectedProfessionId],
  //     }));
  //     console.log("sent successfully to the server")
  //   const data = await response.json();
  //   console.log(data);
  //   // clear form
  //   setCompany('');
  //   setAddress('');
  //   setPhone('');
  //   setEmail('');
  //   setDescription('');
  //   setSelectedRegionId(null);
  //   setSelectedProfessionId(null);
  // };

  

  return (
    <div className='AddInfo'>
      <h2>Select a Region:</h2>
      <select value={selectedRegionId} onChange={handleRegionSelect}>
        <option value={null}>Select a region...</option>
        {regions.map((region) => (
          <option key={region.region_id} value={region.region_id}>
            {region.name}
          </option>
        ))}
      </select>

      <h2>Select a Profession:</h2>
      <select value={selectedProfessionId} onChange={handleProfessionSelect}>
        <option value={null}>Select a profession...</option>
        {professions.map((profession) => (
          <option key={profession.profession_id}
            value={profession.profession_id}>
            {profession.name}
          </option>
        ))}
      </select>

      <div className="company-details">
        <h2>Input the company name </h2>
        <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />

        <h2>Input the company address </h2>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />

        <h2>Input the company phone number </h2>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />

        <h2>Input the company email </h2>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

        <h2>Input the company description </h2>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

     
        
        <button onClick={() => handleSubmit()}>Submit</button>

    
      </div>

      <div className="addothers">
        <AddOthers />
      </div>

      <div className="verification">
           {/* verification */}
           <h2>Company name: <span>{company}</span></h2>
            <h2>Company address: <span>{address}</span></h2>
            <h2>Company phone number: <span>{phone}</span></h2>
            <h2>Company email: <span>{email}</span></h2>
            <h2>Company description: <span>{description}</span></h2>
            <h2>Company region: <span>{selectedRegionId}</span></h2>
            <h2>Company profession: <span>{selectedProfessionId}</span></h2>

      </div>

      <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
      
      </div>
    );
    
}

export default AddInfo;