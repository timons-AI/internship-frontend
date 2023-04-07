import React from 'react'
import { useState, useEffect } from 'react'

const Home = () => {
  const [searchCriteria, setSearchCriteria] = useState({ region: '', profession: '' });

  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);
    let searchParams = '';
    console.log(searchCriteria)
    if (searchCriteria.region) {
      searchParams += `region=${searchCriteria.region}&`;
    }
    if (searchCriteria.profession) {
      searchParams += `profession=${searchCriteria.profession}&`;
    }
    try {
      const response = await fetch(`https://intern-app-u7zql.ondigitalocean.app/api/setAll?${searchParams}`);
      const data = await response.json();
      setSearchResults(data.companies);
      // clear searchCriteria
      setSearchCriteria({ region: '', profession: '' });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const [regions, setRegions] = useState([]);
  const [professions, setProfessions] = useState([]);

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
  return (
    <div>
      <section className=' flex flex-col justify-center items-center p-2'>
        <h1 className=' text-2xl font-bold text-center'>Find an internship</h1>
        <div className=' flex flex-col justify-center items-center p-2'>
          <div className=' flex flex-col justify-center items-center p-2'>
            <label className=' text-xl font-bold text-center'>Region</label>
            <select
              className=' ease-out duration-300 hover:bg-gray-950 active:bg-white active:text-black bg-slate-600 p-2 font-bold text-white w-50 rounded-md'
              value={searchCriteria.region}
              onChange={(e) => setSearchCriteria({ ...searchCriteria, region: e.target.value })}
            >
              <option value=''>All</option>
              {regions.map((region) => (
                <option key={region.id} value={region.id}>
                  {region.name}
                </option>
              ))}
            </select>
          </div>
          <div className=' flex flex-col justify-center items-center p-2'>
            <label className=' text-xl font-bold text-center'>Profession</label>
            <select className=' ease-out duration-300 hover:bg-gray-950 active:bg-white active:text-black bg-slate-600 p-2 font-bold text-white w-50 rounded-md'
              value={searchCriteria.profession}
              onChange={(e) => setSearchCriteria({ ...searchCriteria, profession: e.target.value })}
            >
              <option value=''>All</option>
              {professions.map((profession) => (
                <option key={profession.id} value={profession.id}>
                  {profession.name}
                </option>
              ))}
            </select>
          </div>
          <button className=' ease-out duration-300 hover:bg-gray-950 active:bg-white active:text-black bg-slate-600 p-2 font-bold text-white w-50 rounded-md' onClick={handleSearch}>Search</button>
        </div>

        </section>

      <section className=' flex flex-col justify-center items-center p-2'>
        <h1 className=' text-2xl font-bold text-center'>Search Results</h1>
        {isLoading && <p>Loading...</p>}
        {searchResults.map((company) => (
          <div key={company.id} className=' flex flex-col justify-center items-center p-2'>
            <h2 className=' text-xl font-bold text-center'>{company.name}</h2>
            <p className=' text-lg font-bold text-center'>{company.description}</p>
            <p className=' text-lg font-bold text-center'>{company.region}</p>
            <p className=' text-lg font-bold text-center'>{company.profession}</p>
            <p className=' text-lg font-bold text-center'>{company.contact}</p>
          </div>
        ))}
      </section>
      
    </div>
  )
}

export default Home