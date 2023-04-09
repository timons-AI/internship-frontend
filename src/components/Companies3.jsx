import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';



const Companiesx = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    address: '',
    contact: '',
    regions: [],
    professions: [],
  });

  const [regions, setRegions] = useState([]);
  const [professions, setProfessions] = useState([]);
  const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const regionsResponse = await fetch('https://intern-app-u7zql.ondigitalocean.app/api/regions');
//         const regionsData = await regionsResponse.json();
//         setRegions(regionsData);

//         const professionsResponse = await fetch('https://intern-app-u7zql.ondigitalocean.app/api/professions');
//         const professionsData = await professionsResponse.json();
//         setProfessions(professionsData);
//         console.log(professionsData);
//         console.log (regionsData);
//       } catch (err) {
//         console.error(err);
//         console.log('Failed to fetch regions and professions.');
//       }
//     };

//     fetchData();
//   }, []);

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


  const handleChange = ({ target: { name, value } }) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegionChange = ({ target: { value } }) => {
    setFormData((prevData) => ({
      ...prevData,
      regions: prevData.regions.includes(value)
        ? prevData.regions.filter((id) => id !== value)
        : [...prevData.regions, value],
    }));
  };

  const handleProfessionChange = ({ target: { value } }) => {
    setFormData((prevData) => ({
      ...prevData,
      professions: prevData.professions.includes(value)
        ? prevData.professions.filter((id) => id !== value)
        : [...prevData.professions, value],
    }));
  };

  const validateForm = () => {
    const { name, description, address, contact } = formData;
    if (!name.trim() || !description.trim() || !address.trim() || !contact.trim()) {
      setError('Please fill in all the required fields.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const res = await fetch('https://intern-app-u7zql.ondigitalocean.app/api/setAll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${await getAccessTokenSilently()}`,
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormData({
          name: '',
          description: '',
          address: '',
          contact: '',
          regions: [],
          professions: [],
        });
        setError('');
        alert('Company created successfully.');
      } else {
        throw new Error('Failed to create company.');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to create company.');
    }
  };
  return (
    <form onSubmit={handleSubmit} className=' bg-slate-50 p-3 m-3 flex flex-col rounded-lg gap-2'>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} className=' bg-slate-200 p-2 rounded-md'/>
      </label>
      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleChange} className=' bg-slate-200 p-2 rounded-md' />
      </label>
      <label>
        Address:
        <input type="text" name="address" value={formData.address} onChange={handleChange} className=' bg-slate-200 p-2 rounded-md' />
      </label>
      <label>
        Contact:
        <input type="text" name="contact" value={formData.contact} onChange={handleChange} className=' bg-slate-200 p-2 rounded-md' />
      </label>
      <label>
        Regions:
        <select name="regions" value={formData.regions} onChange={handleRegionChange} className=' bg-slate-200 p-2 rounded-md'>
            <option value="">Select Region</option>
          {regions.map((region) => (
            <option key={region.region_id} value={region.region_id}>
              {region.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Professions:
        <select  name="professions" value={formData.professions} onChange={handleProfessionChange} className=' bg-slate-200 p-2 rounded-md'>    
            <option value="">Select Profession</option>
          {professions.map((profession) => (
            <option key={profession.profession_id} value={profession.profession_id}>
              {profession.name}
            </option>
          ))}
        </select>
      </label>
      <button type="submit" className=' bg-slate-200 p-2 rounded-md'>Create Company</button>
      {error && <div>{error}</div>}
    </form>
  );
  
}

export default Companiesx