import React ,{ useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const Companies3 = () => {
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
    
      useEffect(() => {
        fetch('https://intern-app-u7zql.ondigitalocean.app/api/regions')
          .then((res) => res.json())
          .then((data) => setRegions(data))
          .catch((err) => console.error(err));
    
        fetch('https://intern-app-u7zql.ondigitalocean.app/api/professions')
          .then((res) => res.json())
          .then((data) => setProfessions(data))
          .catch((err) => console.error(err));
      }, []);
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
    
      const handleRegionChange = (event) => {
        const { value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          regions: prevData.regions.includes(value)
            ? prevData.regions.filter((id) => id !== value)
            : [...prevData.regions, value],
        }));
      };
    
      const handleProfessionChange = (event) => {
        const { value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          professions: prevData.professions.includes(value)
            ? prevData.professions.filter((id) => id !== value)
            : [...prevData.professions, value],
        }));
      };
    
      const handleSubmit = async (event) => {
        
        event.preventDefault();
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
            alert('Company created successfully.');
          } else {
            throw new Error('Failed to create company.');
          }
        } catch (err) {
          console.error(err);
          alert('Failed to create company.');
        }
      };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleChange} />
      </label>
      <label>
        Address:
        <input type="text" name="address" value={formData.address} onChange={handleChange} />
      </label>
      <label>
        Contact:
        <input type="text" name="contact" value={formData.contact} onChange={handleChange} />
      </label>
      <label>
        Regions:
        <select multiple name="regions" value={formData.regions} onChange={handleRegionChange}>
        {regions.map((region) => (
<option key={region.id} value={region.id}>
{region.name}
</option>
))}
</select>
</label>
<label>
Professions:
<select
         multiple
         name="professions"
         value={formData.professions}
         onChange={handleProfessionChange}
       >
{professions.map((profession) => (
<option key={profession.id} value={profession.id}>
{profession.name}
</option>
))}
</select>
</label>
<button type="submit">Create Company</button>
</form>
);
}

export default Companies3