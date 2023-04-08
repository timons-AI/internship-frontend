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
  const [error, setError] = useState('');

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    // validate inputs
    if (!formData.name || !formData.description || !formData.address || !formData.contact) {
      setError('Please fill in all the required fields.');
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
<option key={region.region_id} value={region.region_id}>
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
<option key={profession.profession_id} value={profession.profession_id}>
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