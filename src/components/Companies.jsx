import React from 'react'
import { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const Companies = () => {

    const { getAccessTokenSilently, logout } = useAuth0();
    
    const [regions, setRegions] = useState([]);
    const [professions, setProfessions] = useState([]);
    const [selectedRegionId, setSelectedRegionId] = useState('');
    const [selectedProfessionId, setSelectedProfessionId] = useState('');
    const [company, setCompany] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
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
        // ask if the user is sure
        if (window.confirm(`Are you sure you want to add this company?`)) {
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
            "contact": email + ' '+ phone,
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
        setSelectedRegionId('');
        setSelectedProfessionId('');
        console.log(response);
        }

        catch (error) {
          
          console.log(error.message);
        }
        // refresh page
        window.location.reload();
      }
      };
    
  return (
    <div className=' flex flex-wrap'>
        
        <div className=' bg-slate-200 p-3 m-3 flex flex-col rounded-md gap-4 w-80'>
            <h1 className=' text-lg m-2 '>Add Company</h1>
            <div className=' gap-2 flex flex-col'>
                <label className=' text-sm'>Name</label>
                <input className=' border-2 border-none outline-none  p-2 rounded-md bg-slate-100' type='text' placeholder='Name' value={company} onChange={(e) => setCompany(e.target.value)} />
            </div>
            <div className=' gap-2 flex flex-col'>
                <label className=' text-sm'>Contact</label>
                <input className=' border-2 border-none outline-none  p-2 rounded-md bg-slate-100' type='text' placeholder='Contact' value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className=' gap-2 flex flex-col'>
                <label className=' text-sm'>Address</label>
                <input className=' border-2 border-none outline-none  p-2 rounded-md bg-slate-100' type='text' placeholder='Address' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className=' gap-2 flex flex-col'>
                <label className=' text-sm'>Description</label>
                <input className=' border-2 border-none outline-none  p-2 rounded-md bg-slate-100' type='text' placeholder='Description'  value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div className=' gap-2 flex flex-col'>
                <label className=' text-sm'>Region</label>

                {/* drop down menu for region */}

                <select className=' border-2 border-none outline-none  p-2 rounded-md bg-slate-100' onChange={handleRegionSelect}>
                    <option value=''>Select a region</option>
                    {regions.map((region) => (
                        
                        <option key={region.id} value={region.id}>
                        {region.name}
                        </option>
                    ))}
                </select>

            </div>
            <div className=' gap-2 flex flex-col'>
                <label className=' text-sm'>Profession</label>
                
                {/* drop down menu for profession */}
                <select className=' border-2 border-none outline-none  p-2 rounded-md bg-slate-100' onChange={handleProfessionSelect}>
                    <option value=''>Select a profession</option>
                    {professions.map((profession) => (
                        <option key={profession.id} value={profession.id}>
                        {profession.name}
                        </option>
                    ))}
                </select>
            </div>

                <button className=' ease-out duration-300 hover:bg-gray-950 active:bg-white active:text-black bg-slate-600 p-2 font-bold text-white w-50 rounded-md' onClick={() => handleSubmit()} >Add</button>
            </div>
           
   
    </div>
  )
}

export default Companies